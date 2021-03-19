import * as pdfjsLib from 'pdfjs-dist/webpack';
import { PDFLinkService } from 'pdfjs-dist/lib/web/pdf_link_service';
import { EventBus, RendererType } from 'pdfjs-dist/lib/web/ui_utils';

import { PDFViewer } from './monkey-path/pdf.js/web/pdf_viewer';

const DEFAULT_SCALE_VALUE = 'auto';
const DEFAULT_SCALE_DELTA = 1.1;
const MIN_SCALE = 0.1;
const MAX_SCALE = 10.0;

function webViewerResize() {
  const { pdfDocument, pdfViewer } = PDFViewerApplication;
  if (!pdfDocument) {
    return;
  }

  const currentScaleValue = pdfViewer.currentScaleValue;
  if (
    currentScaleValue === 'auto' ||
    currentScaleValue === 'page-fit' ||
    currentScaleValue === 'page-width'
  ) {
    // Note: the scale is constant for 'page-actual'.
    pdfViewer.currentScaleValue = currentScaleValue;
  }

  pdfViewer.update();
}

class PDFViewerApplication {
  pdfDocument = null;
  pdfLoadingTask = null;
  pdfViewer = null;
  pdfLinkService = null;
  eventBus = null;
  preferences = null;

  container = null;

  spreadMode = -1;
  initialized = false;
  settingPages = [];

  initialize = (config = {}) => {
    this.preferences = {};
    this.settingPages = config.relaytoPagesView || [];
    this.spreadMode = config.spreadMode || -1;

    this.initialized = true;
  };

  bindEvents = () => {
    this.eventBus._on('resize', webViewerResize);
  };

  unbindEvents = () => {
    this.eventBus._off('resize', webViewerResize);
  };

  onPassword = () => {};

  onProgress = ({ loaded, total }) => {
    const level = loaded / total;
    const percent = Math.round(level * 100);

    console.log(percent);
  };

  open = (pdfSource) => {
    this.loadDocument(pdfSource)
      .then(this.initViewer);
  };

  loadDocument = (url) => {
    this.pdfLoadingTask = pdfjsLib.getDocument(url);
    this.pdfLoadingTask.onPassword = this.onPassword;
    this.pdfLoadingTask.onProgress = this.onProgress;

    return this.pdfLoadingTask.promise.then((doc) => {
      this.pdfDocument = doc;
      return doc;
    });
  };

  cleanup = () => {
    if (!this.pdfDocument) {
      return; // run cleanup when document is loaded
    }

    this.pdfViewer.cleanup();

    if (this.pdfViewer.renderer !== RendererType.SVG) {
      this.pdfDocument.cleanup();
    }
  };

  close = () => {
    if (!this.pdfLoadingTask) {
      return undefined;
    }

    this.pdfLoadingTask
      .destroy()
      .then(() => {
        this.pdfLoadingTask = null;
        if (this.pdfDocument) {
          this.pdfDocument = null;
          this.pdfViewer.setDocument(null);
          this.pdfLinkService.setDocument(null);
        }
      });
  };

  initViewer = () => {
    this.eventBus = new EventBus();
    this.pdfLinkService = new PDFLinkService({
      eventBus: this.eventBus,
    });

    this.pdfViewer = new PDFViewer({
      container: this.container,
      eventBus: this.eventBus,
      linkService: this.pdfLinkService,
    });

    this.pdfLinkService.setDocument(this.pdfDocument);
    this.pdfViewer.setDocument(this.pdfDocument);

    this.pdfViewer.spreadMode = this.spreadMode;

    this.bindEvents();
  };

  zoomIn = (ticks) => {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }

    let newScale = this.pdfViewer.currentScale;
    do {
      newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.ceil(newScale * 10) / 10;
      newScale = Math.min(MAX_SCALE, newScale);
    } while (--ticks > 0 && newScale < MAX_SCALE);
    this.pdfViewer.currentScaleValue = newScale;
  };

  zoomOut = (ticks) => {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }
    let newScale = this.pdfViewer.currentScale;
    do {
      newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.floor(newScale * 10) / 10;
      newScale = Math.max(MIN_SCALE, newScale);
    } while (--ticks > 0 && newScale > MIN_SCALE);
    this.pdfViewer.currentScaleValue = newScale;
  };

  zoomReset = () => {
    if (this.pdfViewer.isInPresentationMode) {
      return;
    }
    this.pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
  };

  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }

  get page() {
    return this.pdfViewer.currentPageNumber;
  }

  set page(val) {
    this.pdfViewer.currentPageNumber = val;
  }
}

window.PDFViewerApplication = new PDFViewerApplication();
