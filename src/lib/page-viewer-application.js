import { PDFPageView, EventBus } from "pdfjs-dist/web/pdf_viewer";

import { PDFJsFacade } from './pdfjs-lib-facade';
import { svgFix } from './svg-fix';

const SCALE = 1.0;

class PDFPageViewerApplication {
  container = null;
  pdfjs = new PDFJsFacade();
  onPassword = () => {};

  onProgress = ({ loaded, total }) => {
    const level = loaded / total;
    const percent = Math.round(level * 100);

    console.log(percent);
  };

  initialize = (config = {}) => {
    const { workerSrc, ...pdfjsLibConfigs } = config;
    if (!config.isDefaultWorker) {
      this.pdfjs.lib.GlobalWorkerOptions.workerPort = null;
      this.pdfjs.lib.GlobalWorkerOptions.workerSrc = workerSrc;
    }

    Object.assign(this.pdfjs.lib, pdfjsLibConfigs);
    this.container =
      config.container ||
      window.document.getElementById(config.containerId || "pdfViewerContent");

    this.initEventBus();
  };

  initEventBus = () => {
    this.eventBus = new EventBus();
    this.eventBus._on("pagerendered", this.pageRendered);
  };

  pageRendered = ({ source }) => {
    svgFix(source.div);
  };

  /**
   * Load a single page
   *
   * @param {string} pdfSource,
   * @param {number} page
   * @param {boolean} disableRange
   * @param {any} params
   * @returns Promise<PDFPageProxy>
   */
  open = (pdfSource, page = 1, disableRange = false, params = {}) => {
    this.pdfLoadingTask = this.pdfjs.getDocument({
      url: pdfSource,
      disableRange,
      onPassword: this.onPassword,
      onProgress: this.onProgress,
    });

    return this.pdfLoadingTask.then((pdfDocument) => pdfDocument.getPage(page));
  };

  /**
   * Draws a single page
   *
   * @param {string} pdfSource
   * @param {number} page
   * @param {boolean} disableRange
   * @param {any} params
   * @returns Promise
   */
  draw = (pdfSource, page = 1, disableRange = false, params = {}) => {
    return this.open(pdfSource, page, disableRange, params).then((pdfPage) => {
      const pdfPageView = this.getNewPDFPageView({
        container: this.container,
        id: page,
        scale: SCALE,
        defaultViewport: pdfPage.getViewport({ scale: SCALE }),
        ...params,
      });

      pdfPageView.setPdfPage(pdfPage);
      return pdfPageView.draw();
    });
  };

  getNewPDFPageView = (params) => {
    params.eventBus = this.eventBus;
    return new PDFPageView(params);
  };
}

window.rtPDFPageViewer = new PDFPageViewerApplication();
