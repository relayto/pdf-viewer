var _debounce = function (ms, fn) {
    var timer;
    return function () {
        clearTimeout(timer);
        var args = Array.prototype.slice.call(arguments);
        args.unshift(this);
        timer = setTimeout(fn.bind.apply(fn, args), ms);
    };
};

class PdfViewerApp {
    PDFViewer = window.rtPDFViewer;
    containerId = null;

    options = {};
    zoomScale = 0;

    constructor(options) {
        this.options = options;
        this.containerId = options.containerId;
        this.initPDFViewer();
    }

    monitorEvents = () => {
        const eventNames = [
            'resize',
            'pagesinit',
            'pagechanging',
            'pagerender',
            'pagerendered',
            'presentationmodechanged',
            'rotationchanging',
            'scalechanging',
            'thumbnailrendered',
            'updatetextlayermatches'
        ];

        eventNames.forEach(eventName => {
            this.PDFViewer.eventBus.on(eventName, (val) => {
                console.log(`[EVENT] ${eventName}`, val);
            });
        });
    };

    initPDFViewer() {
        this.PDFViewer.initialize(
            Object.assign(
                {
                    autoResize: true,
                    removePageBorders: true,
                    scrollable: true,
                    containerId: this.containerId,
                    currentScaleValue: 'page-fit',
                    cMapUrl: '/pdf-js/cmaps/',
                    cMapPacked: true,
                    workerSrc: './pdf.worker.js'
                },
                this.options
            )
        );

        var self = this;

        this.PDFViewer.open(this.options.pdfUrl).then(this.monitorEvents);
    }
}

var app, ui;

class UI {
    fileList = [
        '',
        'example.pdf',
        'example2.pdf',
        '60MB.pdf',
        'agenda.pdf',
        '2022-1-old.pdf',
        'kr.pdf',
        'sf_test.pdf',
        'test.pdf'
    ];

    constructor(app) {
        this.pdfViewer = app.PDFViewer;
        this.init();
    }

    init() {
        this.createFileListUI();
        this.attachPDFViewerEvents();
        this.updatePageNumber();
    }

    attachPDFViewerEvents() {
        var self = this;

        this.pdfViewer.eventBus.on('pagechanging', function () {
            self.updatePageNumber();
        });
        this.pdfViewer.eventBus.on('pagesinit', function () {
            self.updatePageNumber();
        });
    }

    updatePageNumber() {
        var currentPage = this.pdfViewer.page;
        var totalPage = this.pdfViewer.pagesCount;
        document.getElementById('pageNumber').innerText = `${currentPage} / ${totalPage}`;
    }

    createFileListUI() {
        var select = document.getElementById('fileList');
        let fileList = this.fileList.sort();
        fileList.forEach(function (file) {
            var option = document.createElement('option');
            option.value = file;
            option.innerText = file;
            select.appendChild(option);
        });
    }

    zoomIn() {
        this.pdfViewer.zoomIn(1);
    }
    zoomOut() {
        this.pdfViewer.zoomOut(1);
    }

    loadPDF(url) {
        this.pdfViewer.open(`./${url}`);
    }
}

window.onload = function () {
    app = new PdfViewerApp({
        pdfUrl: './example.pdf',
        containerId: 'pdfViewer'
    });

    ui = new UI(app);
};