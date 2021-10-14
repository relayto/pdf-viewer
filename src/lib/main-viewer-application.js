import {PDFJsFacade} from './pdfjs-lib-facade';
import {PDFLinkService} from 'pdfjs-dist/lib/web/pdf_link_service';
import {EventBus} from 'pdfjs-dist/lib/web/ui_utils';
import {PDFViewer} from 'pdfjs-dist/lib/web/pdf_viewer';

const DEFAULT_SCALE_VALUE = 'page-fit';
const DEFAULT_SCALE_DELTA = 1.1;
const DEFAULT_CACHE_SIZE = 5;
const MIN_SCALE = 0.1;
const MAX_SCALE = 10.0;

function webViewerResize() {
    const {pdfDocument, pdfViewer} = window.rtPDFViewer;
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

function webViewerPageRendered({pageNumber, error}) {
    if (error && error.name === 'RenderingCancelledException') {
        console.log(pageNumber, error);
    }
}

class PDFViewerApplication {
    pdfjs = new PDFJsFacade();
    pdfRenderingQueue = null;
    /** @type {PDFLinkService}*/
    pdfDocument = null;
    pdfLoadingTask = null;
    pdfViewer = null;
    /**
     *
     */
    pdfLinkService = null;
    eventBus = null;
    _boundEvents = Object.create(null);
    preferences = null;

    container = null;

    spreadMode = 0;
    initialized = false;
    settingPages = [];

    _initializeViewer = () => {
        this.eventBus = new EventBus();

        this.pdfLinkService = new PDFLinkService({
            eventBus: this.eventBus
        });

        this.pdfViewer = new PDFViewer({
            container: this.container,
            eventBus: this.eventBus,
            linkService: this.pdfLinkService
        });

        this.pdfRenderingQueue = this.getRenderingQueueFromViewer(this.pdfViewer);
        this.pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
        this.pdfLinkService.setDocument(this.pdfDocument);
        this.pdfViewer.setDocument(this.pdfDocument);

        this.pdfViewer.spreadMode = this.spreadMode;
    };

    getRenderingQueueFromViewer = (pdfViewer) => {
        const pdfRenderingQueue = pdfViewer.renderingQueue;
        pdfRenderingQueue.onIdle = this.cleanup;
        return pdfRenderingQueue;
    };

    initialize = (config = {}) => {
        const {workerSrc, ...pdfjsLibConfigs} = config;
        if (!config.isDefaultWorker) {
            this.pdfjs.lib.GlobalWorkerOptions.workerPort = null;
            this.pdfjs.lib.GlobalWorkerOptions.workerSrc = config.workerSrc;
        }

        Object.assign(this.pdfjs.lib, pdfjsLibConfigs);

        this.container =
            config.container ||
            window.document.getElementById(config.containerId || 'pdfViewerContent');

        this._initializeViewer();

        this.bindEvents();
        this.bindWindowEvents();

        this.preferences = {};
        this.settingPages = config.relaytoPagesView || [];
        this.spreadMode = config.spreadMode || 0;

        this.initialized = true;
    };

    bindEvents = () => {
        this.eventBus._on('resize', webViewerResize);
        this.eventBus._on('pagerendered', webViewerPageRendered);
    };

    bindWindowEvents = () => {
        const {_boundEvents, eventBus} = this;
        _boundEvents.windowResize = () => {
            eventBus.dispatch('resize', {
                source: window
            });
        };
        window.addEventListener('resize', _boundEvents.windowResize);
    };

    unbindEvents = () => {
        this.eventBus._off('resize', webViewerResize);
        this.eventBus._off('pagerendered', webViewerPageRendered);
    };

    onPassword = () => {};

    onProgress = ({loaded, total}) => {
        const level = loaded / total;
        const percent = Math.round(level * 100);

        // console.log(percent);
    };

    open = (pdfSource, disableRange = false) => {
        this.pdfLoadingTask = this.pdfjs.lib.getDocument({
            url: pdfSource,
            disableRange
        });
        this.pdfLoadingTask.onPassword = this.onPassword;
        this.pdfLoadingTask.onProgress = this.onProgress;

        return this.pdfLoadingTask.promise.then(this.load);
    };

    load = (pdfDocument) => {
        this.pdfDocument = pdfDocument;
        this.pdfLinkService.setDocument(pdfDocument);
        this.pdfLinkService.setViewer(this.pdfViewer);

        // Since the `setInitialView` call below depends on this being resolved,
        // fetch it early to avoid delaying initial rendering of the PDF document.
        const pageLayoutPromise = pdfDocument.getPageLayout().catch(() => {
            /* Avoid breaking initial rendering; ignoring errors. */
        });
        const pageModePromise = pdfDocument.getPageMode().catch(() => {
            /* Avoid breaking initial rendering; ignoring errors. */
        });
        const openActionPromise = pdfDocument.getOpenAction().catch(() => {
            /* Avoid breaking initial rendering; ignoring errors. */
        });

        this.pdfViewer.setDocument(pdfDocument);
        const {firstPagePromise} = this.pdfViewer;

        firstPagePromise.then(() => {
            Promise.all([pageLayoutPromise, pageModePromise, openActionPromise])
                .then(() => {
                    this.eventBus.dispatch('documentinit', {source: this});
                })
                .then(() => {
                    this.pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
                    this.pdfViewer.update();
                });
        });
    };

    cleanup = () => {
        if (!this.pdfDocument) {
            return; // run cleanup when document is loaded
        }

        this.pdfViewer.cleanup();

        if (this.pdfViewer.renderer !== 'svg') {
            this.pdfDocument.cleanup();
        }
    };

    close = () => {
        if (!this.pdfLoadingTask) {
            return undefined;
        }

        this.pdfLoadingTask.destroy().then(() => {
            this.pdfLoadingTask = null;
            if (this.pdfDocument) {
                this.pdfRenderingQueue = null;
                this.pdfDocument = null;
                this.pdfViewer.setDocument(null);
                this.pdfLinkService.setDocument(null);
                this.pdfLinkService.setViewer(null);
            }
        });
    };

    zoomIn = (ticks) => {
        if (!this.pdfViewer || this.pdfViewer.isInPresentationMode) {
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
        if (!this.pdfViewer || this.pdfViewer.isInPresentationMode) {
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
        if (!this.pdfViewer || this.pdfViewer.isInPresentationMode) {
            return;
        }

        this.pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
    };

    updateSlide = () => {
        const {pdfViewer} = this;

        // Improve update visible pages
        // Why ? Not rendered in slides view
        let currentPageNumber = pdfViewer.currentPageNumber;
        let activeIndex = currentPageNumber - 1;

        let views = [];
        for (var i = activeIndex; i < pdfViewer._pages.length; i++) {
            let view = pdfViewer._pages[i];
            views.push({
                id: view.id,
                view: view
            });
        }

        let visible = {
            first: views[0],
            last: views[views.length - 1],
            views: views,
            percent: 100,
            widthPercent: 100
        };

        console.log('update', visible);

        let visiblePages = visible.views;

        let numVisiblePages = visiblePages.length;

        let newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);

        pdfViewer._buffer.resize(newCacheSize, visiblePages);

        pdfViewer.renderingQueue.renderHighestPriority(visible);

        pdfViewer._updateHelper(visiblePages);

        pdfViewer._updateLocation(visible.first);

        pdfViewer.eventBus.dispatch('updateviewarea', {
            source: this.pdfViewer,
            location: this.pdfViewer._location
        });
    };

    get pagesCount() {
        return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }

    get page() {
        return (this.pdfViewer && this.pdfViewer.currentPageNumber) || 0;
    }

    set page(val) {
        if (this.pdfViewer) {
            this.pdfViewer.currentPageNumber = val;
        }
    }
}

window.rtPDFViewer = new PDFViewerApplication();
