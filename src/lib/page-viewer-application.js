import * as pdfjsLib from 'pdfjs-dist/webpack';
import { PDFPageView } from 'pdfjs-dist/lib/web/pdf_page_view';
import { EventBus } from 'pdfjs-dist/lib/web/ui_utils';

const SCALE = 1.0;

class PDFPageViewerApplication {
  container = null;

  onPassword = () => {};

  onProgress = ({ loaded, total }) => {
    const level = loaded / total;
    const percent = Math.round(level * 100);

    console.log(percent);
  };

  initialize = (config = {}) => {
    if (!config.isDefaultWorker) {
      pdfjsLib.GlobalWorkerOptions.workerPort = null;
      pdfjsLib.GlobalWorkerOptions.workerSrc = config.workerSrc;
    }

    this.container =
      config.container ||
      window.document.getElementById(config.containerId || 'pdfViewerContent');

    this.eventBus = new EventBus();
  };

  open = (pdfSource, page = 1, disableRange = false, params = {}) => {
    this.pdfLoadingTask = pdfjsLib.getDocument({
      url: pdfSource,
      disableRange,
    });
    this.pdfLoadingTask.onPassword = this.onPassword;
    this.pdfLoadingTask.onProgress = this.onProgress;

    return this.pdfLoadingTask.promise.then((pdfDocument) =>
      pdfDocument.getPage(page).then((pdfPage) => {
        const pdfPageView = new PDFPageView({
          container: this.container,
          id: page,
          scale: SCALE,
          defaultViewport: pdfPage.getViewport({ scale: SCALE }),
          eventBus: this.eventBus,
          ...params,
        });

        pdfPageView.setPdfPage(pdfPage);
        return pdfPageView.draw();
      })
    );
  };
}

window.rtPDFPageViewer = new PDFPageViewerApplication();
