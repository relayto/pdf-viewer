import * as pdfjsLib from "pdfjs-dist/webpack";
import { AnnotationLayerBuilder } from "pdfjs-dist/lib/web/annotation_layer_builder";
import { DefaultTextLayerFactory } from "pdfjs-dist/lib/web/text_layer_builder";
import { TextLayerBuilder } from "pdfjs-dist/lib/web/text_layer_builder";

const docPromises = [];

export class PDFJsFacade {
  lib = pdfjsLib;
  
  viewer = {
    AnnotationLayerBuilder,
    DefaultTextLayerFactory,
    TextLayerBuilder,
  };

  /**
   * Loads a PDF doc with session cache support.
   * @param {{onProgress?:function, onPassword?:function, url:string}} params
   * @returns Promise
   */
  getDocument = (params = {}) => {
    if (params.url == null) {
      throw new Error("[pdfjs] Missing url parameter");
    } else if (!docPromises[params.url]) {
      docPromises[params.url] = this.createDocLoadingTask(params);
    }

    return docPromises[params.url];
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
      const loadingTask = pdfjsLib.getDocument(url);
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
window.pdfjsLib = pdfjsLib;
