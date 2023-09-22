const _debounce = function (ms, fn) {
    let timer;
    return function () {
        clearTimeout(timer);
        const args = Array.prototype.slice.call(arguments);
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
                    pdfBug: false, // PDFjs library debug mode
                    workerSrc: './pdf.worker.js',
                    relaytoPagesView: [
                        {
                          embed: {
                            pdfSvg: true,
                          }
                        },
                        {
                          style: {
                            embed: {
                              type: 'video',
                              url: 'https://aaa.com',
                            }
                          },
                        }
                      ],
                },
                this.options
            )
        );

        const self = this;

        const promise = this.PDFViewer.open(this.options.pdfUrl);
        if(this.options.monitorEvents) {
            promise.then(function () {
                self.monitorEvents();
            });
        }
    }
}

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
        const self = this;
        this.pdfViewer.eventBus.on('pagechanging', function () {
            self.updatePageNumber();
        });
        this.pdfViewer.eventBus.on('pagesinit', function () {
            self.updatePageNumber();
        });
        // attach pagerendered 
        this.pdfViewer.eventBus.on('pagerendered', function (e) {
            self.attachSVGControlToPage(e.pageNumber, e.source);
        });
    }

    attachSVGControlToPage(pageNumber, source) {
        const pageElement = source.div;
        const checked = source.renderer === 'svg' ? 'checked' : '';

        const template = `
                    <input 
                        type="checkbox"
                        onchange="ui.updatePage(${pageNumber},this.checked)"
                        ${checked}
                        name="svg-${pageNumber}">
                    <label for="svg-${pageNumber}">SVG</label>
            `;

        // create element from template
        const control = document.createElement('div');
        control.innerHTML = template;
        control.className = 'svg-control';

        // append control to page
        pageElement.appendChild(control);
    }

    updatePageNumber() {
        const currentPage = this.pdfViewer.page;
        const totalPages = this.pdfViewer.pagesCount;
        document.getElementById('pageNumber').innerText = `${currentPage} / ${totalPages}`;
        document.getElementById('labelPageNumber').innerText = currentPage;
    }

    createFileListUI() {
        const select = document.getElementById('fileList');
        let fileList = this.fileList.sort();
        fileList.forEach(function (file) {
            const option = document.createElement('option');
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

    updatePage(pageNum, useSVGRenderer) {
        const renderer = useSVGRenderer ? 'svg' : 'canvas';
        console.log('Rendering page', { pageNum, renderer });
        this.pdfViewer.redrawPage(pageNum, renderer);
    }

    updatePages(){
        const pageNum = this.getCurrentPage();
        const totalPages = this.pdfViewer.pagesCount;
        const slideIndexBefore = pageNum - 2 >= 0 ? pageNum - 1 : 0;
        const slideIndexAfter = pageNum + 1 <= totalPages - 1 ? pageNum + 1 : totalPages - 1;
        this.pdfViewer.updateSlide(slideIndexBefore, slideIndexAfter);
        Toastify({
            text: `Update pages ${slideIndexBefore} ~ ${slideIndexAfter}`,
            className: "info",
          }).showToast();
    }

    getCurrentPage() {
        return this.pdfViewer.page;
    }
}

let app, ui;

window.onload = function () {
    app = new PdfViewerApp({
        pdfUrl: './example.pdf',
        containerId: 'pdfViewer',
        monitorEvents: true
    });

    ui = new UI(app);
};
