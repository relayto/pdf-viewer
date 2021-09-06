(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pdfjsLib"), require("pdfjsViewer"));
	else if(typeof define === 'function' && define.amd)
		define(["pdfjsLib", "pdfjsViewer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("pdfjsLib"), require("pdfjsViewer")) : factory(root["pdfjsLib"], root["pdfjsViewer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE__544__, __WEBPACK_EXTERNAL_MODULE__231__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 544:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__544__;

/***/ }),

/***/ 231:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__231__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "pdfjsLib"
var external_pdfjsLib_ = __webpack_require__(544);
// EXTERNAL MODULE: external "pdfjsViewer"
var external_pdfjsViewer_ = __webpack_require__(231);
;// CONCATENATED MODULE: ./src/lib/pdfjs-lib-facade.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var docPromises = [];
var PDFJsFacade = function PDFJsFacade() {
  var _this = this;

  _classCallCheck(this, PDFJsFacade);

  _defineProperty(this, "lib", external_pdfjsLib_);

  _defineProperty(this, "viewer", {
    AnnotationLayerBuilder: external_pdfjsViewer_.AnnotationLayerBuilder,
    DefaultTextLayerFactory: external_pdfjsViewer_.DefaultTextLayerFactory,
    TextLayerBuilder: external_pdfjsViewer_.TextLayerBuilder
  });

  _defineProperty(this, "getDocument", function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (params.url == null) {
      throw new Error("[pdfjs] Missing url parameter");
    } else if (!docPromises[params.url]) {
      docPromises[params.url] = _this.createDocLoadingTask(params);
    }

    return docPromises[params.url];
  });

  _defineProperty(this, "createDocLoadingTask", function (params) {
    var onPassword = params.onPassword,
        onProgress = params.onProgress,
        getParams = _objectWithoutProperties(params, ["onPassword", "onProgress"]);

    var url = getParams.url;
    return new Promise(function (resolve, reject) {
      console.log("[pdfjs] Loading", getParams.url); // Disabling range request for the private document

      if (url.indexOf("/private/") !== -1) {
        external_pdfjsLib_.disableRange = true;
        external_pdfjsLib_.disableStream = true;
        external_pdfjsLib_.disableCreateObjectURL = true;
      }

      var loadingTask = external_pdfjsLib_.getDocument(url);
      loadingTask.onPassword = onPassword;
      loadingTask.onProgress = onProgress;
      loadingTask.promise.then(function (pdfDoc) {
        console.log("[pdfjs] Loaded", params.url);
        resolve(pdfDoc);
      }, function (err) {
        console.error("[pdfjs] Load error", params.url, err);
        reject(err);
      });
    });
  });
};
window.rtPDFJsLib = new PDFJsFacade();
;// CONCATENATED MODULE: ./src/pdfjs-lib.js

}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=pdfjs-lib.js.map