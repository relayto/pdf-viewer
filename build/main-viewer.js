(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(5426);
;// CONCATENATED MODULE: ./src/style.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);



/* harmony default export */ const src_style = (style/* default.locals */.Z.locals || {});
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/webpack.js
var webpack = __webpack_require__(2372);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/lib/web/annotation_layer_builder.js
var annotation_layer_builder = __webpack_require__(3515);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/lib/web/text_layer_builder.js
var text_layer_builder = __webpack_require__(7516);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/lib/web/pdf_page_view.js
var pdf_page_view = __webpack_require__(4514);
;// CONCATENATED MODULE: ./src/lib/pdfjs-lib-facade.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var docPromises = [];
var PDFJsFacade = function PDFJsFacade() {
  var _this = this;

  _classCallCheck(this, PDFJsFacade);

  _defineProperty(this, "lib", webpack);

  _defineProperty(this, "viewer", {
    AnnotationLayerBuilder: annotation_layer_builder.AnnotationLayerBuilder,
    DefaultTextLayerFactory: text_layer_builder.DefaultTextLayerFactory,
    TextLayerBuilder: text_layer_builder.TextLayerBuilder
  });

  _defineProperty(this, "getNewPDFPageView", function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new pdf_page_view.PDFPageView(params);
  });

  _defineProperty(this, "getDocument", function () {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (params.url == null) {
      throw new Error("[pdfjs] Missing url parameter");
    } else if (!docPromises[url]) {
      docPromises[url] = _this.createDocLoadingTask(params);
    }

    return docPromises[url];
  });

  _defineProperty(this, "createDocLoadingTask", function (params) {
    var onPassword = params.onPassword,
        onProgress = params.onProgress,
        getParams = _objectWithoutProperties(params, ["onPassword", "onProgress"]);

    var url = getParams.url;
    return new Promise(function (resolve, reject) {
      console.log("[pdfjs] Loading", getParams.url); // Disabling range request for the private document

      if (url.indexOf("/private/") !== -1) {
        webpack.disableRange = true;
        webpack.disableStream = true;
        webpack.disableCreateObjectURL = true;
      }

      var loadingTask = webpack.getDocument(getParams);
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
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/lib/web/pdf_link_service.js
var pdf_link_service = __webpack_require__(6379);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/lib/web/ui_utils.js
var ui_utils = __webpack_require__(6420);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/lib/web/pdf_rendering_queue.js
var pdf_rendering_queue = __webpack_require__(4854);
// EXTERNAL MODULE: ./node_modules/pdfjs-dist/lib/web/pdf_viewer.js
var pdf_viewer = __webpack_require__(4218);
;// CONCATENATED MODULE: ./src/lib/main-viewer-application.js
function main_viewer_application_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = main_viewer_application_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function main_viewer_application_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function main_viewer_application_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function main_viewer_application_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var DEFAULT_SCALE_VALUE = "auto";
var DEFAULT_SCALE_DELTA = 1.1;
var MIN_SCALE = 0.1;
var MAX_SCALE = 10.0;

function webViewerResize() {
  var pdfDocument = PDFViewerApplication.pdfDocument,
      pdfViewer = PDFViewerApplication.pdfViewer;

  if (!pdfDocument) {
    return;
  }

  var currentScaleValue = pdfViewer.currentScaleValue;

  if (currentScaleValue === "auto" || currentScaleValue === "page-fit" || currentScaleValue === "page-width") {
    // Note: the scale is constant for 'page-actual'.
    pdfViewer.currentScaleValue = currentScaleValue;
  }

  pdfViewer.update();
}

function webViewerPageRendered(_ref) {
  var pageNumber = _ref.pageNumber,
      error = _ref.error;

  if (error && error.name === "RenderingCancelledException") {
    console.log(pageNumber, error);
  }
}

var PDFViewerApplication = /*#__PURE__*/function () {
  function PDFViewerApplication() {
    var _this = this;

    main_viewer_application_classCallCheck(this, PDFViewerApplication);

    main_viewer_application_defineProperty(this, "pdfjs", new PDFJsFacade());

    main_viewer_application_defineProperty(this, "pdfRenderingQueue", null);

    main_viewer_application_defineProperty(this, "pdfDocument", null);

    main_viewer_application_defineProperty(this, "pdfLoadingTask", null);

    main_viewer_application_defineProperty(this, "pdfViewer", null);

    main_viewer_application_defineProperty(this, "pdfLinkService", null);

    main_viewer_application_defineProperty(this, "eventBus", null);

    main_viewer_application_defineProperty(this, "preferences", null);

    main_viewer_application_defineProperty(this, "container", null);

    main_viewer_application_defineProperty(this, "spreadMode", 0);

    main_viewer_application_defineProperty(this, "initialized", false);

    main_viewer_application_defineProperty(this, "settingPages", []);

    main_viewer_application_defineProperty(this, "_initializeViewer", function () {
      _this.eventBus = new ui_utils.EventBus();
      _this.pdfRenderingQueue = new pdf_rendering_queue.PDFRenderingQueue();
      _this.pdfRenderingQueue.onIdle = _this.cleanup;
      _this.pdfLinkService = new pdf_link_service.PDFLinkService({
        eventBus: _this.eventBus
      });
      _this.pdfViewer = new pdf_viewer/* PDFViewer */.Z({
        container: _this.container,
        eventBus: _this.eventBus,
        linkService: _this.pdfLinkService,
        renderingQueue: _this.pdfRenderingQueue
      });

      _this.pdfRenderingQueue.setViewer(_this.pdfViewer);

      _this.pdfLinkService.setDocument(_this.pdfDocument);

      _this.pdfViewer.setDocument(_this.pdfDocument);

      _this.pdfViewer.spreadMode = _this.spreadMode;
    });

    main_viewer_application_defineProperty(this, "initialize", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var workerSrc = config.workerSrc,
          pdfjsLibConfigs = main_viewer_application_objectWithoutProperties(config, ["workerSrc"]);

      if (!config.isDefaultWorker) {
        _this.pdfjs.lib.GlobalWorkerOptions.workerPort = null;
        _this.pdfjs.lib.GlobalWorkerOptions.workerSrc = config.workerSrc;
      }

      Object.assign(_this.pdfjs.lib, pdfjsLibConfigs);
      _this.container = config.container || window.document.getElementById(config.containerId || "pdfViewerContent");

      _this._initializeViewer();

      _this.bindEvents();

      _this.preferences = {};
      _this.settingPages = config.relaytoPagesView || [];
      _this.spreadMode = config.spreadMode || 0;
      _this.initialized = true;
    });

    main_viewer_application_defineProperty(this, "bindEvents", function () {
      _this.eventBus._on("resize", webViewerResize);

      _this.eventBus._on("pagerendered", webViewerPageRendered);
    });

    main_viewer_application_defineProperty(this, "unbindEvents", function () {
      _this.eventBus._off("resize", webViewerResize);

      _this.eventBus._off("pagerendered", webViewerPageRendered);
    });

    main_viewer_application_defineProperty(this, "onPassword", function () {});

    main_viewer_application_defineProperty(this, "onProgress", function (_ref2) {
      var loaded = _ref2.loaded,
          total = _ref2.total;
      var level = loaded / total;
      var percent = Math.round(level * 100);
      console.log(percent);
    });

    main_viewer_application_defineProperty(this, "open", function (pdfSource) {
      var disableRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      _this.pdfLoadingTask = _this.pdfjs.lib.getDocument({
        url: pdfSource,
        disableRange: disableRange
      });
      _this.pdfLoadingTask.onPassword = _this.onPassword;
      _this.pdfLoadingTask.onProgress = _this.onProgress;
      return _this.pdfLoadingTask.promise.then(_this.load);
    });

    main_viewer_application_defineProperty(this, "load", function (pdfDocument) {
      _this.pdfDocument = pdfDocument; // Since the `setInitialView` call below depends on this being resolved,
      // fetch it early to avoid delaying initial rendering of the PDF document.

      var pageLayoutPromise = pdfDocument.getPageLayout()["catch"](function () {
        /* Avoid breaking initial rendering; ignoring errors. */
      });
      var pageModePromise = pdfDocument.getPageMode()["catch"](function () {
        /* Avoid breaking initial rendering; ignoring errors. */
      });
      var openActionPromise = pdfDocument.getOpenAction()["catch"](function () {
        /* Avoid breaking initial rendering; ignoring errors. */
      });

      _this.pdfViewer.setDocument(pdfDocument);

      var firstPagePromise = _this.pdfViewer.firstPagePromise;
      firstPagePromise.then(function () {
        Promise.all([pageLayoutPromise, pageModePromise, openActionPromise]).then(function () {
          _this.eventBus.dispatch("documentinit", {
            source: _this
          });
        }).then(function () {
          _this.pdfViewer.update();
        });
      });
    });

    main_viewer_application_defineProperty(this, "cleanup", function () {
      if (!_this.pdfDocument) {
        return; // run cleanup when document is loaded
      }

      _this.pdfViewer.cleanup();

      if (_this.pdfViewer.renderer !== ui_utils.RendererType.SVG) {
        _this.pdfDocument.cleanup();
      }
    });

    main_viewer_application_defineProperty(this, "close", function () {
      if (!_this.pdfLoadingTask) {
        return undefined;
      }

      _this.pdfLoadingTask.destroy().then(function () {
        _this.pdfLoadingTask = null;

        if (_this.pdfDocument) {
          _this.pdfRenderingQueue = null;
          _this.pdfDocument = null;

          _this.pdfViewer.setDocument(null);

          _this.pdfLinkService.setDocument(null);
        }
      });
    });

    main_viewer_application_defineProperty(this, "zoomIn", function (ticks) {
      if (!_this.pdfViewer || _this.pdfViewer.isInPresentationMode) {
        return;
      }

      var newScale = _this.pdfViewer.currentScale;

      do {
        newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
        newScale = Math.ceil(newScale * 10) / 10;
        newScale = Math.min(MAX_SCALE, newScale);
      } while (--ticks > 0 && newScale < MAX_SCALE);

      _this.pdfViewer.currentScaleValue = newScale;
    });

    main_viewer_application_defineProperty(this, "zoomOut", function (ticks) {
      if (!_this.pdfViewer || _this.pdfViewer.isInPresentationMode) {
        return;
      }

      var newScale = _this.pdfViewer.currentScale;

      do {
        newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
        newScale = Math.floor(newScale * 10) / 10;
        newScale = Math.max(MIN_SCALE, newScale);
      } while (--ticks > 0 && newScale > MIN_SCALE);

      _this.pdfViewer.currentScaleValue = newScale;
    });

    main_viewer_application_defineProperty(this, "zoomReset", function () {
      if (!_this.pdfViewer || _this.pdfViewer.isInPresentationMode) {
        return;
      }

      _this.pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;
    });
  }

  _createClass(PDFViewerApplication, [{
    key: "pagesCount",
    get: function get() {
      return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
  }, {
    key: "page",
    get: function get() {
      return this.pdfViewer && this.pdfViewer.currentPageNumber || 0;
    },
    set: function set(val) {
      if (this.pdfViewer) {
        this.pdfViewer.currentPageNumber = val;
      }
    }
  }]);

  return PDFViewerApplication;
}();

window.rtPDFViewer = new PDFViewerApplication();
;// CONCATENATED MODULE: ./src/main-viewer.js



/***/ }),

/***/ 5426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_shadow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8307);
/* harmony import */ var _images_loading_icon_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1764);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_shadow_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_loading_icon_gif__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".viewerContainer {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    outline: none;\n}\n\n.pdfViewer .canvasWrapper {\n    overflow: hidden;\n}\n\n.pdfViewer .page {\n    direction: ltr;\n    width: 816px;\n    height: 1056px;\n    margin: 1px auto -8px;\n    position: relative;\n    overflow: visible;\n    border: 9px solid transparent;\n    background-clip: content-box;\n    border-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 9 9 repeat;\n    background-color: rgba(255, 255, 255, 1);\n}\n\n.pdfViewer.removePageBorders .page {\n    margin: 0 auto 10px;\n    border: none;\n}\n\n.pdfViewer.singlePageView {\n    display: inline-block;\n}\n\n.pdfViewer.singlePageView .page {\n    margin: 0;\n    border: none;\n}\n\n.pdfViewer.scrollHorizontal,\n.pdfViewer.scrollWrapped,\n.spread {\n    margin-left: 3.5px;\n    margin-right: 3.5px;\n    text-align: center;\n}\n\n.pdfViewer.scrollHorizontal,\n.spread {\n    white-space: nowrap;\n}\n\n.pdfViewer.removePageBorders,\n.pdfViewer.scrollHorizontal .spread,\n.pdfViewer.scrollWrapped .spread {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.spread .page,\n.pdfViewer.scrollHorizontal .page,\n.pdfViewer.scrollWrapped .page,\n.pdfViewer.scrollHorizontal .spread,\n.pdfViewer.scrollWrapped .spread {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.spread .page,\n.pdfViewer.scrollHorizontal .page,\n.pdfViewer.scrollWrapped .page {\n    margin-left: -3.5px;\n    margin-right: -3.5px;\n}\n\n.pdfViewer.removePageBorders .spread .page,\n.pdfViewer.removePageBorders.scrollHorizontal .page,\n.pdfViewer.removePageBorders.scrollWrapped .page {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.pdfViewer .page canvas {\n    margin: 0;\n    display: block;\n}\n\n.pdfViewer .page canvas[hidden] {\n    display: none;\n}\n\n.pdfViewer .page .loadingIcon {\n    position: absolute;\n    display: block;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\n}\n\n.pdfPresentationMode .pdfViewer {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.pdfPresentationMode .pdfViewer .page,\n.pdfPresentationMode .pdfViewer .spread {\n    display: block;\n}\n\n.pdfPresentationMode .pdfViewer .page,\n.pdfPresentationMode .pdfViewer.removePageBorders .page {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.pdfPresentationMode:fullscreen .pdfViewer .page {\n    margin-bottom: 100%;\n    border: 0;\n}\n\n.textLayer {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    opacity: 0.2;\n    line-height: 1;\n}\n\n.textLayer > span {\n    color: transparent;\n    position: absolute;\n    white-space: pre;\n    cursor: text;\n    transform-origin: 0% 0%;\n}\n\n.textLayer .highlight {\n    margin: -1px;\n    padding: 1px;\n    background-color: rgba(180, 0, 170, 1);\n    border-radius: 4px;\n}\n\n.textLayer .highlight.begin {\n    border-radius: 4px 0 0 4px;\n}\n\n.textLayer .highlight.end {\n    border-radius: 0 4px 4px 0;\n}\n\n.textLayer .highlight.middle {\n    border-radius: 0;\n}\n\n.textLayer .highlight.selected {\n    background-color: rgba(0, 100, 0, 1);\n}\n\n.textLayer ::selection {\n    background: rgba(0, 0, 255, 1);\n}\n\n.textLayer .endOfContent {\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 100%;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    cursor: default;\n    user-select: none;\n}\n\n.textLayer .endOfContent.active {\n    top: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,iCAAiC;IACjC,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;IAC7B,4BAA4B;IAC5B,gEAA+C;IAC/C,wCAAwC;AAC5C;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;;;IAGI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;;IAGI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;;IAKI,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;;;IAGI,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;;IAGI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,OAAO;IACP,MAAM;IACN,QAAQ;IACR,SAAS;IACT,oEAA2D;AAC/D;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;;IAEI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,QAAQ;IACR,SAAS;IACT,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,MAAM;AACV","sourcesContent":[".viewerContainer {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    outline: none;\n}\n\n.pdfViewer .canvasWrapper {\n    overflow: hidden;\n}\n\n.pdfViewer .page {\n    direction: ltr;\n    width: 816px;\n    height: 1056px;\n    margin: 1px auto -8px;\n    position: relative;\n    overflow: visible;\n    border: 9px solid transparent;\n    background-clip: content-box;\n    border-image: url(images/shadow.png) 9 9 repeat;\n    background-color: rgba(255, 255, 255, 1);\n}\n\n.pdfViewer.removePageBorders .page {\n    margin: 0 auto 10px;\n    border: none;\n}\n\n.pdfViewer.singlePageView {\n    display: inline-block;\n}\n\n.pdfViewer.singlePageView .page {\n    margin: 0;\n    border: none;\n}\n\n.pdfViewer.scrollHorizontal,\n.pdfViewer.scrollWrapped,\n.spread {\n    margin-left: 3.5px;\n    margin-right: 3.5px;\n    text-align: center;\n}\n\n.pdfViewer.scrollHorizontal,\n.spread {\n    white-space: nowrap;\n}\n\n.pdfViewer.removePageBorders,\n.pdfViewer.scrollHorizontal .spread,\n.pdfViewer.scrollWrapped .spread {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.spread .page,\n.pdfViewer.scrollHorizontal .page,\n.pdfViewer.scrollWrapped .page,\n.pdfViewer.scrollHorizontal .spread,\n.pdfViewer.scrollWrapped .spread {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.spread .page,\n.pdfViewer.scrollHorizontal .page,\n.pdfViewer.scrollWrapped .page {\n    margin-left: -3.5px;\n    margin-right: -3.5px;\n}\n\n.pdfViewer.removePageBorders .spread .page,\n.pdfViewer.removePageBorders.scrollHorizontal .page,\n.pdfViewer.removePageBorders.scrollWrapped .page {\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n.pdfViewer .page canvas {\n    margin: 0;\n    display: block;\n}\n\n.pdfViewer .page canvas[hidden] {\n    display: none;\n}\n\n.pdfViewer .page .loadingIcon {\n    position: absolute;\n    display: block;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: url(\"images/loading-icon.gif\") center no-repeat;\n}\n\n.pdfPresentationMode .pdfViewer {\n    margin-left: 0;\n    margin-right: 0;\n}\n\n.pdfPresentationMode .pdfViewer .page,\n.pdfPresentationMode .pdfViewer .spread {\n    display: block;\n}\n\n.pdfPresentationMode .pdfViewer .page,\n.pdfPresentationMode .pdfViewer.removePageBorders .page {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.pdfPresentationMode:fullscreen .pdfViewer .page {\n    margin-bottom: 100%;\n    border: 0;\n}\n\n.textLayer {\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    overflow: hidden;\n    opacity: 0.2;\n    line-height: 1;\n}\n\n.textLayer > span {\n    color: transparent;\n    position: absolute;\n    white-space: pre;\n    cursor: text;\n    transform-origin: 0% 0%;\n}\n\n.textLayer .highlight {\n    margin: -1px;\n    padding: 1px;\n    background-color: rgba(180, 0, 170, 1);\n    border-radius: 4px;\n}\n\n.textLayer .highlight.begin {\n    border-radius: 4px 0 0 4px;\n}\n\n.textLayer .highlight.end {\n    border-radius: 0 4px 4px 0;\n}\n\n.textLayer .highlight.middle {\n    border-radius: 0;\n}\n\n.textLayer .highlight.selected {\n    background-color: rgba(0, 100, 0, 1);\n}\n\n.textLayer ::selection {\n    background: rgba(0, 0, 255, 1);\n}\n\n.textLayer .endOfContent {\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 100%;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    cursor: default;\n    user-select: none;\n}\n\n.textLayer .endOfContent.active {\n    top: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1764:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff2dfa442d903d9d5e30.gif";

/***/ }),

/***/ 8307:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "020ca14de41fcc6c4d0b.png";

/***/ }),

/***/ 3414:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 172:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2001:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3779:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6558:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2258:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 263:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 7146:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 9498:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3500:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 6965:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 546:
/***/ (() => {

/* (ignored) */

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			176: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpdf_viewer"] = self["webpackChunkpdf_viewer"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [509], () => (__webpack_require__(7350)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main-viewer.js.map