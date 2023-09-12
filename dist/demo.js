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
        this.PDFViewer.eventBus.on('resize', (val) => {
            console.log('resize', val);
        });
        this.PDFViewer.eventBus.on('pagesinit', (val) => {
            console.log('pagesinit', val);
        });
        this.PDFViewer.eventBus.on('pagerendered', (val) => {
            console.log('pagerendered', val);
        });
        this.PDFViewer.eventBus.on('pagechanging', (val) => {
            console.log('pagechanging', val);
        });

        this.PDFViewer.eventBus.on('pagerender', (val) => {
            console.log('pagerender', val);
        });

        this.PDFViewer.eventBus.on('pagerendered', (val) => {
            console.log('pagerendered', val);
        });

        this.PDFViewer.eventBus.on('presentationmodechanged', (val) => {
            console.log('presentationmodechanged', val);
        });

        this.PDFViewer.eventBus.on('rotationchanging', (val) => {
            console.log('rotationchanging', val);
        });

        this.PDFViewer.eventBus.on('scalechanging', (val) => {
            console.log('scalechanging', val);
        });

        this.PDFViewer.eventBus.on('thumbnailrendered', (val) => {
            console.log('thumbnailrendered', val);
        });

        this.PDFViewer.eventBus.on('updatetextlayermatches', (val) => {
            console.log('updatetextlayermatches', val);
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
