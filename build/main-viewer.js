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
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_shadow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(307);
/* harmony import */ var _images_loading_icon_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(764);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_shadow_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_loading_icon_gif__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".viewerContainer {\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    outline: none;\r\n}\r\n\r\n.pdfViewer .canvasWrapper {\r\n    overflow: hidden;\r\n}\r\n\r\n.pdfViewer .page {\r\n    direction: ltr;\r\n    width: 816px;\r\n    height: 1056px;\r\n    margin: 1px auto -8px;\r\n    position: relative;\r\n    overflow: visible;\r\n    border: 9px solid transparent;\r\n    background-clip: content-box;\r\n    border-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 9 9 repeat;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.pdfViewer.removePageBorders .page {\r\n    margin: 0 auto 10px;\r\n    border: none;\r\n}\r\n\r\n.pdfViewer.singlePageView {\r\n    display: inline-block;\r\n}\r\n\r\n.pdfViewer.singlePageView .page {\r\n    margin: 0;\r\n    border: none;\r\n}\r\n\r\n.pdfViewer.scrollHorizontal,\r\n.pdfViewer.scrollWrapped,\r\n.spread {\r\n    margin-left: 3.5px;\r\n    margin-right: 3.5px;\r\n    text-align: center;\r\n}\r\n\r\n.pdfViewer.scrollHorizontal,\r\n.spread {\r\n    white-space: nowrap;\r\n}\r\n\r\n.pdfViewer.removePageBorders,\r\n.pdfViewer.scrollHorizontal .spread,\r\n.pdfViewer.scrollWrapped .spread {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n.spread .page,\r\n.pdfViewer.scrollHorizontal .page,\r\n.pdfViewer.scrollWrapped .page,\r\n.pdfViewer.scrollHorizontal .spread,\r\n.pdfViewer.scrollWrapped .spread {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.spread .page,\r\n.pdfViewer.scrollHorizontal .page,\r\n.pdfViewer.scrollWrapped .page {\r\n    margin-left: -3.5px;\r\n    margin-right: -3.5px;\r\n}\r\n\r\n.pdfViewer.removePageBorders .spread .page,\r\n.pdfViewer.removePageBorders.scrollHorizontal .page,\r\n.pdfViewer.removePageBorders.scrollWrapped .page {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pdfViewer .page canvas {\r\n    margin: 0;\r\n    display: block;\r\n}\r\n\r\n.pdfViewer .page canvas[hidden] {\r\n    display: none;\r\n}\r\n\r\n.pdfViewer .page .loadingIcon {\r\n    position: absolute;\r\n    display: block;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") center no-repeat;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer .page,\r\n.pdfPresentationMode .pdfViewer .spread {\r\n    display: block;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer .page,\r\n.pdfPresentationMode .pdfViewer.removePageBorders .page {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.pdfPresentationMode:fullscreen .pdfViewer .page {\r\n    margin-bottom: 100%;\r\n    border: 0;\r\n}\r\n\r\n.textLayer {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    overflow: hidden;\r\n    opacity: 0.2;\r\n    line-height: 1;\r\n}\r\n\r\n.textLayer > span {\r\n    color: transparent;\r\n    position: absolute;\r\n    white-space: pre;\r\n    cursor: text;\r\n    transform-origin: 0% 0%;\r\n}\r\n\r\n.textLayer .highlight {\r\n    margin: -1px;\r\n    padding: 1px;\r\n    background-color: rgba(180, 0, 170, 1);\r\n    border-radius: 4px;\r\n}\r\n\r\n.textLayer .highlight.begin {\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.textLayer .highlight.end {\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.textLayer .highlight.middle {\r\n    border-radius: 0;\r\n}\r\n\r\n.textLayer .highlight.selected {\r\n    background-color: rgba(0, 100, 0, 1);\r\n}\r\n\r\n.textLayer ::selection {\r\n    background: rgba(0, 0, 255, 1);\r\n}\r\n\r\n.textLayer .endOfContent {\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 100%;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    cursor: default;\r\n    user-select: none;\r\n}\r\n\r\n.textLayer .endOfContent.active {\r\n    top: 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,iCAAiC;IACjC,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,SAAS;IACT,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,cAAc;IACd,qBAAqB;IACrB,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;IAC7B,4BAA4B;IAC5B,gEAA+C;IAC/C,wCAAwC;AAC5C;;AAEA;IACI,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,YAAY;AAChB;;AAEA;;;IAGI,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;;;IAGI,cAAc;IACd,eAAe;AACnB;;AAEA;;;;;IAKI,qBAAqB;IACrB,sBAAsB;AAC1B;;AAEA;;;IAGI,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;;IAGI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,OAAO;IACP,MAAM;IACN,QAAQ;IACR,SAAS;IACT,oEAA2D;AAC/D;;AAEA;IACI,cAAc;IACd,eAAe;AACnB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;;IAEI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sCAAsC;IACtC,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,QAAQ;IACR,SAAS;IACT,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,MAAM;AACV","sourcesContent":[".viewerContainer {\r\n    overflow: auto;\r\n    -webkit-overflow-scrolling: touch;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    outline: none;\r\n}\r\n\r\n.pdfViewer .canvasWrapper {\r\n    overflow: hidden;\r\n}\r\n\r\n.pdfViewer .page {\r\n    direction: ltr;\r\n    width: 816px;\r\n    height: 1056px;\r\n    margin: 1px auto -8px;\r\n    position: relative;\r\n    overflow: visible;\r\n    border: 9px solid transparent;\r\n    background-clip: content-box;\r\n    border-image: url(images/shadow.png) 9 9 repeat;\r\n    background-color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.pdfViewer.removePageBorders .page {\r\n    margin: 0 auto 10px;\r\n    border: none;\r\n}\r\n\r\n.pdfViewer.singlePageView {\r\n    display: inline-block;\r\n}\r\n\r\n.pdfViewer.singlePageView .page {\r\n    margin: 0;\r\n    border: none;\r\n}\r\n\r\n.pdfViewer.scrollHorizontal,\r\n.pdfViewer.scrollWrapped,\r\n.spread {\r\n    margin-left: 3.5px;\r\n    margin-right: 3.5px;\r\n    text-align: center;\r\n}\r\n\r\n.pdfViewer.scrollHorizontal,\r\n.spread {\r\n    white-space: nowrap;\r\n}\r\n\r\n.pdfViewer.removePageBorders,\r\n.pdfViewer.scrollHorizontal .spread,\r\n.pdfViewer.scrollWrapped .spread {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n.spread .page,\r\n.pdfViewer.scrollHorizontal .page,\r\n.pdfViewer.scrollWrapped .page,\r\n.pdfViewer.scrollHorizontal .spread,\r\n.pdfViewer.scrollWrapped .spread {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.spread .page,\r\n.pdfViewer.scrollHorizontal .page,\r\n.pdfViewer.scrollWrapped .page {\r\n    margin-left: -3.5px;\r\n    margin-right: -3.5px;\r\n}\r\n\r\n.pdfViewer.removePageBorders .spread .page,\r\n.pdfViewer.removePageBorders.scrollHorizontal .page,\r\n.pdfViewer.removePageBorders.scrollWrapped .page {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.pdfViewer .page canvas {\r\n    margin: 0;\r\n    display: block;\r\n}\r\n\r\n.pdfViewer .page canvas[hidden] {\r\n    display: none;\r\n}\r\n\r\n.pdfViewer .page .loadingIcon {\r\n    position: absolute;\r\n    display: block;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: url(\"images/loading-icon.gif\") center no-repeat;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer .page,\r\n.pdfPresentationMode .pdfViewer .spread {\r\n    display: block;\r\n}\r\n\r\n.pdfPresentationMode .pdfViewer .page,\r\n.pdfPresentationMode .pdfViewer.removePageBorders .page {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.pdfPresentationMode:fullscreen .pdfViewer .page {\r\n    margin-bottom: 100%;\r\n    border: 0;\r\n}\r\n\r\n.textLayer {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    overflow: hidden;\r\n    opacity: 0.2;\r\n    line-height: 1;\r\n}\r\n\r\n.textLayer > span {\r\n    color: transparent;\r\n    position: absolute;\r\n    white-space: pre;\r\n    cursor: text;\r\n    transform-origin: 0% 0%;\r\n}\r\n\r\n.textLayer .highlight {\r\n    margin: -1px;\r\n    padding: 1px;\r\n    background-color: rgba(180, 0, 170, 1);\r\n    border-radius: 4px;\r\n}\r\n\r\n.textLayer .highlight.begin {\r\n    border-radius: 4px 0 0 4px;\r\n}\r\n\r\n.textLayer .highlight.end {\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.textLayer .highlight.middle {\r\n    border-radius: 0;\r\n}\r\n\r\n.textLayer .highlight.selected {\r\n    background-color: rgba(0, 100, 0, 1);\r\n}\r\n\r\n.textLayer ::selection {\r\n    background: rgba(0, 0, 255, 1);\r\n}\r\n\r\n.textLayer .endOfContent {\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 100%;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    cursor: default;\r\n    user-select: none;\r\n}\r\n\r\n.textLayer .endOfContent.active {\r\n    top: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 764:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff2dfa442d903d9d5e30.gif";

/***/ }),

/***/ 307:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "020ca14de41fcc6c4d0b.png";

/***/ }),

/***/ 544:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__544__;

/***/ }),

/***/ 231:
/***/ ((module) => {

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
/******/ 			id: moduleId,
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/style.css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);



/* harmony default export */ const src_style = (style/* default.locals */.Z.locals || {});
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
;// CONCATENATED MODULE: ./src/lib/main-viewer-application.js
function main_viewer_application_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = main_viewer_application_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function main_viewer_application_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function main_viewer_application_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function main_viewer_application_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DEFAULT_SCALE_VALUE = 'page-fit';
var DEFAULT_SCALE_DELTA = 1.1;
var DEFAULT_CACHE_SIZE = 5;
var MIN_SCALE = 0.1;
var MAX_SCALE = 10.0;

function webViewerResize() {
  var _window$rtPDFViewer = window.rtPDFViewer,
      pdfDocument = _window$rtPDFViewer.pdfDocument,
      pdfViewer = _window$rtPDFViewer.pdfViewer;

  if (!pdfDocument) {
    return;
  }

  var currentScaleValue = pdfViewer.currentScaleValue;

  if (currentScaleValue === 'auto' || currentScaleValue === 'page-fit' || currentScaleValue === 'page-width') {
    // Note: the scale is constant for 'page-actual'.
    pdfViewer.currentScaleValue = currentScaleValue;
  }

  pdfViewer.update();
}

function webViewerPageRendered(_ref) {
  var pageNumber = _ref.pageNumber,
      error = _ref.error;

  if (error && error.name === 'RenderingCancelledException') {
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

    main_viewer_application_defineProperty(this, "_boundEvents", Object.create(null));

    main_viewer_application_defineProperty(this, "preferences", null);

    main_viewer_application_defineProperty(this, "container", null);

    main_viewer_application_defineProperty(this, "spreadMode", 0);

    main_viewer_application_defineProperty(this, "initialized", false);

    main_viewer_application_defineProperty(this, "settingPages", []);

    main_viewer_application_defineProperty(this, "_initializeViewer", function () {
      _this.eventBus = new external_pdfjsViewer_.EventBus();
      _this.pdfLinkService = new external_pdfjsViewer_.PDFLinkService({
        eventBus: _this.eventBus
      });
      _this.pdfViewer = new external_pdfjsViewer_.PDFViewer({
        container: _this.container,
        eventBus: _this.eventBus,
        linkService: _this.pdfLinkService
      });
      _this.pdfRenderingQueue = _this.getRenderingQueueFromViewer(_this.pdfViewer);
      _this.pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;

      _this.pdfLinkService.setDocument(_this.pdfDocument);

      _this.pdfViewer.setDocument(_this.pdfDocument);

      _this.pdfViewer.spreadMode = _this.spreadMode;
    });

    main_viewer_application_defineProperty(this, "getRenderingQueueFromViewer", function (pdfViewer) {
      var pdfRenderingQueue = pdfViewer.renderingQueue;
      pdfRenderingQueue.onIdle = _this.cleanup;
      return pdfRenderingQueue;
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
      _this.container = config.container || window.document.getElementById(config.containerId || 'pdfViewerContent');

      _this._initializeViewer();

      _this.bindEvents();

      _this.bindWindowEvents();

      _this.preferences = {};
      _this.settingPages = config.relaytoPagesView || [];
      _this.spreadMode = config.spreadMode || 0;
      _this.initialized = true;
    });

    main_viewer_application_defineProperty(this, "bindEvents", function () {
      _this.eventBus._on('resize', webViewerResize);

      _this.eventBus._on('pagerendered', webViewerPageRendered);
    });

    main_viewer_application_defineProperty(this, "bindWindowEvents", function () {
      var _boundEvents = _this._boundEvents,
          eventBus = _this.eventBus;

      _boundEvents.windowResize = function () {
        eventBus.dispatch('resize', {
          source: window
        });
      };

      window.addEventListener('resize', _boundEvents.windowResize);
    });

    main_viewer_application_defineProperty(this, "unbindEvents", function () {
      _this.eventBus._off('resize', webViewerResize);

      _this.eventBus._off('pagerendered', webViewerPageRendered);
    });

    main_viewer_application_defineProperty(this, "onPassword", function () {});

    main_viewer_application_defineProperty(this, "onProgress", function (_ref2) {
      var loaded = _ref2.loaded,
          total = _ref2.total;
      var level = loaded / total;
      var percent = Math.round(level * 100); // console.log(percent);
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
      _this.pdfDocument = pdfDocument;

      _this.pdfLinkService.setDocument(pdfDocument);

      _this.pdfLinkService.setViewer(_this.pdfViewer); // Since the `setInitialView` call below depends on this being resolved,
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
          _this.eventBus.dispatch('documentinit', {
            source: _this
          });
        }).then(function () {
          _this.pdfViewer.currentScaleValue = DEFAULT_SCALE_VALUE;

          _this.pdfViewer.update();
        });
      });
    });

    main_viewer_application_defineProperty(this, "cleanup", function () {
      if (!_this.pdfDocument) {
        return; // run cleanup when document is loaded
      }

      _this.pdfViewer.cleanup();

      if (_this.pdfViewer.renderer !== 'svg') {
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

          _this.pdfLinkService.setViewer(null);
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

    main_viewer_application_defineProperty(this, "updateSlide", function () {
      var pdfViewer = _this.pdfViewer; // Improve update visible pages
      // Why ? Not rendered in slides view

      var currentPageNumber = pdfViewer.currentPageNumber;
      var activeIndex = currentPageNumber - 1;
      var views = [];

      for (var i = activeIndex; i < pdfViewer._pages.length; i++) {
        var view = pdfViewer._pages[i];
        views.push({
          id: view.id,
          view: view
        });
      }

      var visible = {
        first: views[0],
        last: views[views.length - 1],
        views: views,
        percent: 100,
        widthPercent: 100
      };
      console.log('update', visible);
      var visiblePages = visible.views;
      var numVisiblePages = visiblePages.length;
      var newCacheSize = Math.max(DEFAULT_CACHE_SIZE, 2 * numVisiblePages + 1);

      pdfViewer._buffer.resize(newCacheSize, visiblePages);

      pdfViewer.renderingQueue.renderHighestPriority(visible);

      pdfViewer._updateHelper(visiblePages);

      pdfViewer._updateLocation(visible.first);

      pdfViewer.eventBus.dispatch('updateviewarea', {
        source: _this.pdfViewer,
        location: _this.pdfViewer._location
      });
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


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main-viewer.js.map