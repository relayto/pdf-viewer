import {
  PDFViewer, PDFPageView
} from 'pdfjs-dist/web/pdf_viewer';

// Check if this is needed
class rtPDFPageView extends PDFPageView {
  reset() {
    super.reset(...arguments);
    this.div.style.width = Math.floor(this.div.className.indexOf('swiper-slide') > -1 ? this.div.parentNode.width : this.viewport.width) + "px";
  }    
}



export { PDFViewer, rtPDFPageView };
