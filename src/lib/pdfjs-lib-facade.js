import * as pdfjsLib from "pdfjs-dist/webpack";

const docPromises = [];

export class PDFJsFacade {
  lib = pdfjsLib;

  /**
   * Starts loading a PDF doc with cache support.
   * @param {{onProgress?:function, onPassword?:function, url:string}} params
   * @returns Promise
   */
  getDocument = (params = {}) => {
    if (params.url == null) {
      throw new Error("[pdfjs] Missing url parameter");
    } else if (!docPromises[url]) {
      docPromises[url] = this.createDocLoadingTask(params);
    }

    return docPromises[url];
  };

  /**
   * Creates the Promise that loads a PDF document
   * @param {{onProgress?:function, onPassword?:function, url:string}} params
   * @returns Promise
   */
  createDocLoadingTask = (params) => {
    const { onPassword, onProgress, ...getParams } = params;
    const url = getParams.url;
    return new Promise((resolve, reject) => {
      console.log("[pdfjs] Loading", getParams.url);
      // Disabling range request for the private document
      if (url.indexOf("/private/") !== -1) {
        pdfjsLib.disableRange = true;
        pdfjsLib.disableStream = true;
        pdfjsLib.disableCreateObjectURL = true;
      }

      const loadingTask = pdfjsLib.getDocument(getParams);
      loadingTask.onPassword = onPassword;
      loadingTask.onProgress = onProgress;

      loadingTask.promise.then(
        (pdfDoc) => {
          console.log("[pdfjs] Loaded", params.url);
          resolve(pdfDoc);
        },
        (err) => {
          console.error("[pdfjs] Load error", params.url, err);
          reject(err);
        }
      );
    });
  };
}

window.rtPDFJsLib = new PDFJsFacade();
