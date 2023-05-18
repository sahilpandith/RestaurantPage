/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/honeyBG2.jpg */ "./src/assests/honeyBG2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/bee1.png */ "./src/assests/bee1.png?1992"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/honeycomb.png */ "./src/assests/honeycomb.png?4557"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    height: 100vh;\n    font-family: \"Yusei Magic\", sans-serif;    \n}\n:root {\n    --khaki : #ffde73;\n    --orange-1 :#eca43a;\n    --orange-2: #c16a0a;\n    --yellow-1:#ffc60c;\n    --font-600:600;\n}\n#content {\n    height: 100%;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\nheader {\n    display : flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n    background: var(--khaki);\n    padding: 10px;\n    padding-bottom: 0px;\n}\nmain {\n    flex:1;\n    background : url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n}\n\nmain > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--khaki);\n    padding: 30px;\n}\n\n.attribution {\n    color: black;\n    font-size: 12px;\n    text-decoration: none;\n}\n.home-tab,.menu-tab,.contact-tab {\n    border: 1px solid black;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: none;\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\n\n.selected-tab {\n    background: var(--orange-1);\n}\n.restaurant-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.restaurant-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.restaurant-name::after{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.restaurant-name::before{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.summary{\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.summary p {\n    font-weight: var(--font-600);\n}\n/* .summary:nth-child(2) {\n    font-weight: 14px;\n} */\n\n.summary::before {\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: inline-block;\n    position: relative;\n    top: -48px;\n    left: 63px;\n    margin-bottom: -37px;\n}\n\n.timings {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.day {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n.location {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.address {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n\n.menu-name-container {\n    padding: 10px;\n    background :var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n}\n\n.menu-name-box {\n    width: 400px;\n    display: flex;\n    padding: 10px;\n    font-size: 30px;\n    justify-content: space-between;\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n.menu-name {\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n}\n.bee-image1,.bee-image2 {\n    width: 50px; \n    height: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n}\n\n.bee-image2 {\n    transform: rotateZ(90deg);\n}\n\n.menu-category-container {\n    margin-top: 45px;\n    padding: 10px;\n    background: var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n    position: relative;\n}\n\n.menu-label {\n    width: 300px;\n    display: flex;\n    padding: 20px;\n    font-size: 30px;\n    justify-content: center;\n    background: var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n    margin: 0px;\n}\n\n.brev-honey-comb {\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    top: 32px;\n    right: 1px;\n    z-index: 1;\n}\n\n.card {\n width: 250px;\n height: 400px;\n border: 8px solid var(--orange-2);\n display: grid;\n grid-template-columns: 1fr 1fr 1fr;\n grid-template-rows: repeat(8,1fr);\n gap: 5px;\n padding: 5px;\n border-radius: 17px;\n margin: 15px;\n    background: var(--yellow-1);\n}\n\n.card-title {\n    grid-column: 1/4;\n    grid-row: 1/2;\n}\n.card-summary{\n    grid-column: 1/4;\n    grid-row: 2/5;\n    padding: 5px;\n    padding-left: 20px;\n}\n.card-price {\n    grid-column: 1/2;\n    grid-row: 5/9;\n    font-weight: var(--font-600);\n}\n.card-image {\n    grid-column: 2/4;\n    grid-row: 5/9;\n    height: 165px;\n    width: 150px;\n    border: 1px solid var(--orange-2);\n    border-radius: 17px;\n}\nfooter{\n    background: var(--khaki);\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\nfooter ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\nfooter ul li {\n    flex: 1;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    height: 100vh;\n    font-family: \"Yusei Magic\", sans-serif;    \n}\n:root {\n    --khaki : #ffde73;\n    --orange-1 :#eca43a;\n    --orange-2: #c16a0a;\n    --yellow-1:#ffc60c;\n    --font-600:600;\n}\n#content {\n    height: 100%;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\nheader {\n    display : flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n    background: var(--khaki);\n    padding: 10px;\n    padding-bottom: 0px;\n}\nmain {\n    flex:1;\n    background : url(./assests/honeyBG2.jpg);\n    background-size: cover;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n}\n\nmain > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--khaki);\n    padding: 30px;\n}\n\n.attribution {\n    color: black;\n    font-size: 12px;\n    text-decoration: none;\n}\n.home-tab,.menu-tab,.contact-tab {\n    border: 1px solid black;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: none;\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\n\n.selected-tab {\n    background: var(--orange-1);\n}\n.restaurant-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.restaurant-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.restaurant-name::after{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.restaurant-name::before{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.summary{\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.summary p {\n    font-weight: var(--font-600);\n}\n/* .summary:nth-child(2) {\n    font-weight: 14px;\n} */\n\n.summary::before {\n    content: '';\n    background-image: url(./assests/honeycomb.png);\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: inline-block;\n    position: relative;\n    top: -48px;\n    left: 63px;\n    margin-bottom: -37px;\n}\n\n.timings {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.day {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n.location {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.address {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n\n.menu-name-container {\n    padding: 10px;\n    background :var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n}\n\n.menu-name-box {\n    width: 400px;\n    display: flex;\n    padding: 10px;\n    font-size: 30px;\n    justify-content: space-between;\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n.menu-name {\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n}\n.bee-image1,.bee-image2 {\n    width: 50px; \n    height: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n}\n\n.bee-image2 {\n    transform: rotateZ(90deg);\n}\n\n.menu-category-container {\n    margin-top: 45px;\n    padding: 10px;\n    background: var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n    position: relative;\n}\n\n.menu-label {\n    width: 300px;\n    display: flex;\n    padding: 20px;\n    font-size: 30px;\n    justify-content: center;\n    background: var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n    margin: 0px;\n}\n\n.brev-honey-comb {\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    top: 32px;\n    right: 1px;\n    z-index: 1;\n}\n\n.card {\n width: 250px;\n height: 400px;\n border: 8px solid var(--orange-2);\n display: grid;\n grid-template-columns: 1fr 1fr 1fr;\n grid-template-rows: repeat(8,1fr);\n gap: 5px;\n padding: 5px;\n border-radius: 17px;\n margin: 15px;\n    background: var(--yellow-1);\n}\n\n.card-title {\n    grid-column: 1/4;\n    grid-row: 1/2;\n}\n.card-summary{\n    grid-column: 1/4;\n    grid-row: 2/5;\n    padding: 5px;\n    padding-left: 20px;\n}\n.card-price {\n    grid-column: 1/2;\n    grid-row: 5/9;\n    font-weight: var(--font-600);\n}\n.card-image {\n    grid-column: 2/4;\n    grid-row: 5/9;\n    height: 165px;\n    width: 150px;\n    border: 1px solid var(--orange-2);\n    border-radius: 17px;\n}\nfooter{\n    background: var(--khaki);\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\nfooter ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\nfooter ul li {\n    flex: 1;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assests/bee1.png?1405":
/*!******************************!*\
  !*** ./src/assests/bee1.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c211eb647b52d1a43e7c4be7f4e5a17c.png");

/***/ }),

/***/ "./src/assests/berryTea.jpg":
/*!**********************************!*\
  !*** ./src/assests/berryTea.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f3215ef4e9ead8968fa199fa00ae9f33.jpg");

/***/ }),

/***/ "./src/assests/honeyTea.jpg":
/*!**********************************!*\
  !*** ./src/assests/honeyTea.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "408afbbd851dac1dd3238bf3ebd00d6d.jpg");

/***/ }),

/***/ "./src/assests/honeycomb.png?015f":
/*!***********************************!*\
  !*** ./src/assests/honeycomb.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0f9c987901b711c9c580d7b1bbbf98e4.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/contactComponent.js":
/*!********************************************!*\
  !*** ./src/components/contactComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactComponent(){
    const contactCompNode = document.createElement('div');
    contactCompNode.textContent = "Contact" ;
    return contactCompNode;
  }
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactComponent);

/***/ }),

/***/ "./src/components/homeComponent.js":
/*!*****************************************!*\
  !*** ./src/components/homeComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homeComponent(){
  const homeCompNode = document.createElement('div');
  const restaurantName = getRestaurantNameElement();
  homeCompNode.append(restaurantName);
  const summary = getSummaryElement();
  homeCompNode.append(summary);
  const timings = getTimingsElement();
  homeCompNode.append(timings);
  const location = getLocationElement();
  homeCompNode.append(location);
  return homeCompNode
}

function getRestaurantNameElement(){
    const restaurantNameContainer = document.createElement('div');
    restaurantNameContainer.classList.add('restaurant-name-container');
   const restaurantName = document.createElement('div');
   restaurantName.classList.add('restaurant-name');
   restaurantName.textContent = "Beary's Breakfast Bar";

   restaurantNameContainer.append(restaurantName);
   return restaurantNameContainer;
}
function getSummaryElement(){
    const summary = document.createElement('div');
    summary.classList.add('summary');
    const review = document.createElement('p');
    review.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    const customer = document.createElement('p');
    customer.textContent = "- Sahil";
    summary.append(review);
    summary.append(customer);
    return summary;
    
}
function getTimingsElement(){
   const timingsNode = document.createElement('div');
   timingsNode.classList.add('timings');
   timingsNode.innerHTML =`<h3 class="hours">Hours</h3>
   <p class="sunday day">Sunday: 8am - 8pm</p>
   <p class="monday day">Monday: 6am - 6pm</p>
   <p class="tuesday day">Tuesday: 6am - 6pm</p>
   <p class="wednesday day">Wednesday: 6am - 6pm</p>
   <p class="thursday day">Thursday: 6am - 10pm</p>
   <p class="friday day">Friday: 6am - 10pm</p>
   <p class="saturday day">Saturday: 8am - 10pm</p>
   `
   return timingsNode

}
function getLocationElement(){
    const locationNode = document.createElement('div');
    locationNode.classList.add('location');
    locationNode.innerHTML =`<h3 class="location-header">Location</h3>
    <p class="address"> 102, forest Villa , Hinjewadi</p>
    `
    return locationNode
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeComponent);

/***/ }),

/***/ "./src/components/menuComponent.js":
/*!*****************************************!*\
  !*** ./src/components/menuComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assests_bee1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/bee1.png */ "./src/assests/bee1.png?1405");
/* harmony import */ var _assests_honeycomb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assests/honeycomb.png */ "./src/assests/honeycomb.png?015f");
/* harmony import */ var _assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/honeyTea.jpg */ "./src/assests/honeyTea.jpg");
/* harmony import */ var _assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/berryTea.jpg */ "./src/assests/berryTea.jpg");





function menuComponent(){
    const menuCompNode = document.createElement('div');
    menuCompNode.classList.add('menu-container');

    const menuHeader = getMenuHeaderElement()
    menuCompNode.append(menuHeader)

    createBeveragesSection(menuCompNode);
    createSidesSection(menuCompNode);
    createMainDishesSection(menuCompNode);
    return menuCompNode;
  }

  class CreateImageNode {
    node = document.createElement('img');
    constructor(src,classname){
      this.node.src =src;
      this.node.classList.add(classname);
    }
    get imageNode(){
      return this.node;
    }
  }
  function getMenuHeaderElement(){
    const menuHeaderContainer = document.createElement('div');
    menuHeaderContainer.classList.add('menu-name-container');

    const menuNameBox = document.createElement('div');
    menuNameBox.classList.add('menu-name-box');

    const img1 = new CreateImageNode(_assests_bee1_png__WEBPACK_IMPORTED_MODULE_0__["default"],'bee-image1');
    
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-name');
    menuHeader.textContent = `Menu`;

    const img2 = new CreateImageNode(_assests_bee1_png__WEBPACK_IMPORTED_MODULE_0__["default"],'bee-image2');

    menuNameBox.append(img1.imageNode);
    menuNameBox.append(menuHeader);
    menuNameBox.append(img2.imageNode);
    menuHeaderContainer.append(menuNameBox);
    return menuHeaderContainer;
}
class CreateMenuCategory {
   beverageContainer = document.createElement('div');
   beverage = document.createElement('h3');
   img = new CreateImageNode(_assests_honeycomb_png__WEBPACK_IMPORTED_MODULE_1__["default"],'brev-honey-comb');
   constructor(label){
    this.beverageContainer.classList.add('menu-category-container');
    this.beverage.classList.add('menu-label');
    this.beverage.textContent = label;
    this.beverageContainer.append(this.beverage);
    this.beverageContainer.append(this.img.imageNode);
   }
   get menuCategoryNode (){
     return this.beverageContainer;
   }
}

class CreateCard {
  card = document.createElement('div');
  cardTitle = document.createElement('h3');
  summary = document.createElement('p');
  price = document.createElement('div');
  img;
  constructor(title,summary,price,img){
    this.cardTitle.textContent = title,
    this.summary.textContent = summary;
    this.price.textContent = price;
    this.img = new CreateImageNode(img,'card-image')
    this.card.classList.add('card');
    this.cardTitle.classList.add('card-title');
    this.summary.classList.add('card-summary');
    this.price.classList.add('card-price');
    this.card.append(this.cardTitle);
    this.card.append(this.summary);
    this.card.append(this.price);
    this.card.append(this.img.imageNode);
  }
  get node (){
    return this.card;
  }
}

function createBeveragesSection(parentNode){
  const beverageCategory = new CreateMenuCategory('Beverages');
  parentNode.append(beverageCategory.menuCategoryNode);

  const honeyTeaEle = new CreateCard('Honey Tea','A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!','30 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
  parentNode.append(honeyTeaEle.node);

  const berryTeaEle = new CreateCard('Berry Tea','A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.','40 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
  parentNode.append(berryTeaEle.node);
}

function createSidesSection(parentNode){
  const sidesCategory = new CreateMenuCategory('Sides');
  parentNode.append(sidesCategory.menuCategoryNode);

  const honeyTeaEle = new CreateCard('Toast And jam','A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.','60 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
  parentNode.append(honeyTeaEle.node);

  const berryTeaEle = new CreateCard('Fresh Fruits','A small bowl of fresh fruit, whatever we find at the market for the day.','50 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
  parentNode.append(berryTeaEle.node);
}

function createMainDishesSection(parentNode){
  const mainDishesCategory = new CreateMenuCategory('Main Dishes');
  parentNode.append(mainDishesCategory.menuCategoryNode);

  const panCakesEle = new CreateCard('Pan Cakes','A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.','160 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
  parentNode.append(panCakesEle.node);

  const frenchToastEle = new CreateCard('French Toast','Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.','150 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
  parentNode.append(frenchToastEle.node);

  const bearyVeggieSandwichEle = new CreateCard('Beary Veggie Sandwich','Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.','260 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
  parentNode.append(bearyVeggieSandwichEle.node);

  const bagelAndLox = new CreateCard('Bagel and Lox','Our house specialty, you cant go wrong with a hearty bagel topped with sustainably harvested salmon.','250 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
  parentNode.append(bagelAndLox.node);

  const honeyCombEle = new CreateCard('Honeycomb','Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.','160 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
  parentNode.append(honeyCombEle.node);

  const theBearyBestPorridgeEle = new CreateCard('The Beary Best Porridge','Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.','150 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
  parentNode.append(theBearyBestPorridgeEle.node);
  
}
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponent);

/***/ }),

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initialPageLoad(){
    const container = document.createElement('div');
    container.classList.add('container');
    
    const headerNode = createHeaderNode();
    const mainNode = createMainNode();
    const footerNode = createFooterNode();

    container.append(headerNode);
    container.append(mainNode);
    container.append(footerNode);

    return container;

}

function createHeaderNode (){
    const header = document.createElement('header');

    const home = document.createElement('div');
    home.classList.add('home-tab');
    home.classList.add('selected-tab');
    home.textContent = 'Home';

    const menu = document.createElement('div');
    menu.classList.add('menu-tab');
    menu.textContent = "Menu";

    const contact = document.createElement('div');
    contact.classList.add('contact-tab');
    contact.textContent = "Contact";

    header.append(home);
    header.append(menu);
    header.append(contact);
    return header;
}

function createMainNode(){
    const main = document.createElement('main');
    return main;
}

function createFooterNode(){
    const footer = document.createElement('footer');
    footer.innerHTML = `<ul>
    <li>
      <a class="attribution icons2" href="http://www.freepik.com" title="Freepik">Hive icon made by Freepik - www.flaticon.com</a>
    </li>
    <li>
      <a class="attribution icons" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Bee icons made by Smashicons - www.flaticon.com</a>
    </li>
    <li>
      <a class="attribution" href="https://www.freepik.com/vectors/food">Background image created by dgim-studio - www.freepik.com</a>
    </li>
  </ul>`;
    return footer;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);



/***/ }),

/***/ "./src/assests/bee1.png?1992":
/*!******************************!*\
  !*** ./src/assests/bee1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71be629e53a3a76f1ab1.png";

/***/ }),

/***/ "./src/assests/honeyBG2.jpg":
/*!**********************************!*\
  !*** ./src/assests/honeyBG2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cd5430a7d46c1b21523.jpg";

/***/ }),

/***/ "./src/assests/honeycomb.png?4557":
/*!***********************************!*\
  !*** ./src/assests/honeycomb.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aac0f1f38e2c4f62b108.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoad */ "./src/initialPageLoad.js");
/* harmony import */ var _components_homeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homeComponent */ "./src/components/homeComponent.js");
/* harmony import */ var _components_menuComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menuComponent */ "./src/components/menuComponent.js");
/* harmony import */ var _components_contactComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contactComponent */ "./src/components/contactComponent.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const htmlLayout = (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_0__["default"])();
const content = document.querySelector('#content');
content.append(htmlLayout);

const homeTab = document.querySelector('.home-tab');
const menuTab = document.querySelector('.menu-tab');
const contactTab = document.querySelector('.contact-tab');

const homeNode = (0,_components_homeComponent__WEBPACK_IMPORTED_MODULE_1__["default"])();
const menuNode = (0,_components_menuComponent__WEBPACK_IMPORTED_MODULE_2__["default"])();
const contactNode = (0,_components_contactComponent__WEBPACK_IMPORTED_MODULE_3__["default"])();

const main = document.querySelector('main');
if(main){
    removeAllChildren(main);
    main.append(homeNode);
}


homeTab.addEventListener('click', function(event){
    if(this.classList.contains('selected-tab'))  return;
    this.classList.add('selected-tab');
    menuTab.classList.remove('selected-tab');
    contactTab.classList.remove('selected-tab');
    removeAllChildren(main);
    main.append(homeNode);

})

menuTab.addEventListener('click', function(event){
    if(this.classList.contains('selected-tab'))  return;
    this.classList.add('selected-tab');
    homeTab.classList.remove('selected-tab');
    contactTab.classList.remove('selected-tab');
    removeAllChildren(main);
    main.append(menuNode);
})

contactTab.addEventListener('click', function(event){
    if(this.classList.contains('selected-tab'))  return;
    this.classList.add('selected-tab');
    menuTab.classList.remove('selected-tab');
    homeTab.classList.remove('selected-tab');
    removeAllChildren(main);
    main.append(contactNode);
})

function removeAllChildren(parent){
    while(parent.hasChildNodes()){
        parent.removeChild(parent.firstChild);
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNOakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUQyQjtBQUNTO0FBQ0Q7QUFDQTs7QUFFbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQyx5REFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMseURBQU07O0FBRTNDO0FBQ0E7QUFDQTtBQUNB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c3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvYXNzZXN0cy9iZWUxLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3Nlc3RzL2JlcnJ5VGVhLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3Nlc3RzL2hvbmV5VGVhLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9hc3Nlc3RzL2hvbmV5Y29tYi5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3RDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lQ29tcG9uZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbml0aWFsUGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3Nlc3RzL2hvbmV5QkcyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy9iZWUxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy9ob25leWNvbWIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmOyAgICBcXG59XFxuOnJvb3Qge1xcbiAgICAtLWtoYWtpIDogI2ZmZGU3MztcXG4gICAgLS1vcmFuZ2UtMSA6I2VjYTQzYTtcXG4gICAgLS1vcmFuZ2UtMjogI2MxNmEwYTtcXG4gICAgLS15ZWxsb3ctMTojZmZjNjBjO1xcbiAgICAtLWZvbnQtNjAwOjYwMDtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG5tYWluIHtcXG4gICAgZmxleDoxO1xcbiAgICBiYWNrZ3JvdW5kIDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1haW4gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1raGFraSk7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5hdHRyaWJ1dGlvbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5ob21lLXRhYiwubWVudS10YWIsLmNvbnRhY3QtdGFiIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtdGFiIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLTEpO1xcbn1cXG4ucmVzdGF1cmFudC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQgOnZhcigtLW9yYW5nZS0yKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE3JSAxJSwgODElIDAsIDEwMCUgMjMlLCAxMDAlIDc3JSwgODQlIDk5JSwgMTYlIDEwMCUsIDAgODAlLCAwIDI3JSk7XFxufVxcbi5yZXN0YXVyYW50LW5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI0JSAwLCA3MiUgMCwgMTAwJSAzMiUsIDEwMCUgNjglLCA3NiUgMTAwJSwgMjMlIDEwMCUsMCA3MiUsIDAgMzQlKTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZTo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWU6OmJlZm9yZXtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zdW1tYXJ5e1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLnN1bW1hcnkgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxufVxcbi8qIC5zdW1tYXJ5Om50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxNHB4O1xcbn0gKi9cXG5cXG4uc3VtbWFyeTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00OHB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMzdweDtcXG59XFxuXFxuLnRpbWluZ3Mge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLmRheSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbn1cXG5cXG4uYWRkcmVzcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcblxcbi5tZW51LW5hbWUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZCA6dmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjIlIDElLCA3MyUgMCwgMTAwJSAyNSUsIDEwMCUgNzMlLCA3NiUgOTklLCAyMyUgMTAwJSwgMCA3NiUsIDAgMjklKTtcXG59XFxuXFxuLm1lbnUtbmFtZS1ib3gge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbn1cXG4ubWVudS1uYW1lIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbn1cXG4uYmVlLWltYWdlMSwuYmVlLWltYWdlMiB7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5iZWUtaW1hZ2UyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcXG59XFxuXFxuLm1lbnUtY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjIlIDElLCA3MyUgMCwgMTAwJSAyNSUsIDEwMCUgNzMlLCA3NiUgOTklLCAyMyUgMTAwJSwgMCA3NiUsIDAgMjklKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWVudS1sYWJlbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmJyZXYtaG9uZXktY29tYiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICByaWdodDogMXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2FyZCB7XFxuIHdpZHRoOiAyNTBweDtcXG4gaGVpZ2h0OiA0MDBweDtcXG4gYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiBkaXNwbGF5OiBncmlkO1xcbiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LDFmcik7XFxuIGdhcDogNXB4O1xcbiBwYWRkaW5nOiA1cHg7XFxuIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxuIG1hcmdpbjogMTVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTEpO1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbi5jYXJkLXN1bW1hcnl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAyLzU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uY2FyZC1wcmljZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1Lzk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxufVxcbi5jYXJkLWltYWdlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDUvOTtcXG4gICAgaGVpZ2h0OiAxNjVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxufVxcbmZvb3RlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbmZvb3RlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgdWwgbGkge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksTUFBTTtJQUNOLG9EQUF3QztJQUN4QyxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isc0ZBQXNGO0FBQzFGO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlDQUFp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Q1YsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmOyAgICBcXG59XFxuOnJvb3Qge1xcbiAgICAtLWtoYWtpIDogI2ZmZGU3MztcXG4gICAgLS1vcmFuZ2UtMSA6I2VjYTQzYTtcXG4gICAgLS1vcmFuZ2UtMjogI2MxNmEwYTtcXG4gICAgLS15ZWxsb3ctMTojZmZjNjBjO1xcbiAgICAtLWZvbnQtNjAwOjYwMDtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG5tYWluIHtcXG4gICAgZmxleDoxO1xcbiAgICBiYWNrZ3JvdW5kIDogdXJsKC4vYXNzZXN0cy9ob25leUJHMi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWFpbiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmF0dHJpYnV0aW9uIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmhvbWUtdGFiLC5tZW51LXRhYiwuY29udGFjdC10YWIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zZWxlY3RlZC10YWIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMSk7XFxufVxcbi5yZXN0YXVyYW50LW5hbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZCA6dmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTclIDElLCA4MSUgMCwgMTAwJSAyMyUsIDEwMCUgNzclLCA4NCUgOTklLCAxNiUgMTAwJSwgMCA4MCUsIDAgMjclKTtcXG59XFxuLnJlc3RhdXJhbnQtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1uYW1lOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdHMvYmVlMS5wbmcpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWU6OmJlZm9yZXtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdHMvYmVlMS5wbmcpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc3VtbWFyeXtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS15ZWxsb3ctMSk7XFxufVxcblxcbi5zdW1tYXJ5IHAge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbn1cXG4vKiAuc3VtbWFyeTpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXdlaWdodDogMTRweDtcXG59ICovXFxuXFxuLnN1bW1hcnk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3Nlc3RzL2hvbmV5Y29tYi5wbmcpO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNDhweDtcXG4gICAgbGVmdDogNjNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTM3cHg7XFxufVxcblxcbi50aW1pbmdzIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS15ZWxsb3ctMSk7XFxufVxcblxcbi5kYXkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLmFkZHJlc3Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5cXG4ubWVudS1uYW1lLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQgOnZhcigtLW9yYW5nZS0yKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSAxJSwgNzMlIDAsIDEwMCUgMjUlLCAxMDAlIDczJSwgNzYlIDk5JSwgMjMlIDEwMCUsIDAgNzYlLCAwIDI5JSk7XFxufVxcblxcbi5tZW51LW5hbWUtYm94IHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI0JSAwLCA3MiUgMCwgMTAwJSAzMiUsIDEwMCUgNjglLCA3NiUgMTAwJSwgMjMlIDEwMCUsMCA3MiUsIDAgMzQlKTtcXG59XFxuLm1lbnUtbmFtZSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG59XFxuLmJlZS1pbWFnZTEsLmJlZS1pbWFnZTIge1xcbiAgICB3aWR0aDogNTBweDsgXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uYmVlLWltYWdlMiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XFxufVxcblxcbi5tZW51LWNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS0yKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSAxJSwgNzMlIDAsIDEwMCUgMjUlLCAxMDAlIDczJSwgNzYlIDk5JSwgMjMlIDEwMCUsIDAgNzYlLCAwIDI5JSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1lbnUtbGFiZWwge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy0xKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI0JSAwLCA3MiUgMCwgMTAwJSAzMiUsIDEwMCUgNjglLCA3NiUgMTAwJSwgMjMlIDEwMCUsMCA3MiUsIDAgMzQlKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5icmV2LWhvbmV5LWNvbWIge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzJweDtcXG4gICAgcmlnaHQ6IDFweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmNhcmQge1xcbiB3aWR0aDogMjUwcHg7XFxuIGhlaWdodDogNDAwcHg7XFxuIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gZGlzcGxheTogZ3JpZDtcXG4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwxZnIpO1xcbiBnYXA6IDVweDtcXG4gcGFkZGluZzogNXB4O1xcbiBib3JkZXItcmFkaXVzOiAxN3B4O1xcbiBtYXJnaW46IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4uY2FyZC1zdW1tYXJ5e1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMi81O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLmNhcmQtcHJpY2Uge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogNS85O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbn1cXG4uY2FyZC1pbWFnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiA1Lzk7XFxuICAgIGhlaWdodDogMTY1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcbn1cXG5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5mb290ZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHVsIGxpIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMyMTFlYjY0N2I1MmQxYTQzZTdjNGJlN2Y0ZTVhMTdjLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMzIxNWVmNGU5ZWFkODk2OGZhMTk5ZmEwMGFlOWYzMy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNDA4YWZiYmQ4NTFkYWMxZGQzMjM4YmYzZWJkMDBkNmQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjBmOWM5ODc5MDFiNzExYzljNTgwZDdiMWJiYmY5OGU0LnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY29udGFjdENvbXBvbmVudCgpe1xuICAgIGNvbnN0IGNvbnRhY3RDb21wTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb21wTm9kZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiIDtcbiAgICByZXR1cm4gY29udGFjdENvbXBOb2RlO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBjb250YWN0Q29tcG9uZW50IiwiZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpe1xuICBjb25zdCBob21lQ29tcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBnZXRSZXN0YXVyYW50TmFtZUVsZW1lbnQoKTtcbiAgaG9tZUNvbXBOb2RlLmFwcGVuZChyZXN0YXVyYW50TmFtZSk7XG4gIGNvbnN0IHN1bW1hcnkgPSBnZXRTdW1tYXJ5RWxlbWVudCgpO1xuICBob21lQ29tcE5vZGUuYXBwZW5kKHN1bW1hcnkpO1xuICBjb25zdCB0aW1pbmdzID0gZ2V0VGltaW5nc0VsZW1lbnQoKTtcbiAgaG9tZUNvbXBOb2RlLmFwcGVuZCh0aW1pbmdzKTtcbiAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbkVsZW1lbnQoKTtcbiAgaG9tZUNvbXBOb2RlLmFwcGVuZChsb2NhdGlvbik7XG4gIHJldHVybiBob21lQ29tcE5vZGVcbn1cblxuZnVuY3Rpb24gZ2V0UmVzdGF1cmFudE5hbWVFbGVtZW50KCl7XG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXN0YXVyYW50TmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUtY29udGFpbmVyJyk7XG4gICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1uYW1lJyk7XG4gICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiQmVhcnkncyBCcmVha2Zhc3QgQmFyXCI7XG5cbiAgIHJlc3RhdXJhbnROYW1lQ29udGFpbmVyLmFwcGVuZChyZXN0YXVyYW50TmFtZSk7XG4gICByZXR1cm4gcmVzdGF1cmFudE5hbWVDb250YWluZXI7XG59XG5mdW5jdGlvbiBnZXRTdW1tYXJ5RWxlbWVudCgpe1xuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdW1tYXJ5LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnknKTtcbiAgICBjb25zdCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmV2aWV3LnRleHRDb250ZW50ID0gXCJCZWFyeSdzIGhhcyB0aGUgYmVzdCBwb3JyaWRnZSEgVGhlIGF0bW9zcGhlcmUgYW5kIGN1c3RvbWVyIHNlcnZpY2UgbWFrZSB5b3UgZmVlbCBsaWtlIHlvdSBhcmUgc2l0dGluZyBpbiB0aGUgbWlkZGxlIG9mIHRoZSB3b29kcywgZWF0aW5nIGxpa2UgYSBiZWFyISBUaGlzIGlzIGV4YWN0bHkgdGhlIGtpbmQgb2YgcGxhY2UgdGhhdCBJIGxpa2UgdG8gcmV0dXJuIHRvIGFnYWluIGFuZCBhZ2Fpbi5cIjtcbiAgICBjb25zdCBjdXN0b21lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjdXN0b21lci50ZXh0Q29udGVudCA9IFwiLSBTYWhpbFwiO1xuICAgIHN1bW1hcnkuYXBwZW5kKHJldmlldyk7XG4gICAgc3VtbWFyeS5hcHBlbmQoY3VzdG9tZXIpO1xuICAgIHJldHVybiBzdW1tYXJ5O1xuICAgIFxufVxuZnVuY3Rpb24gZ2V0VGltaW5nc0VsZW1lbnQoKXtcbiAgIGNvbnN0IHRpbWluZ3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICB0aW1pbmdzTm9kZS5jbGFzc0xpc3QuYWRkKCd0aW1pbmdzJyk7XG4gICB0aW1pbmdzTm9kZS5pbm5lckhUTUwgPWA8aDMgY2xhc3M9XCJob3Vyc1wiPkhvdXJzPC9oMz5cbiAgIDxwIGNsYXNzPVwic3VuZGF5IGRheVwiPlN1bmRheTogOGFtIC0gOHBtPC9wPlxuICAgPHAgY2xhc3M9XCJtb25kYXkgZGF5XCI+TW9uZGF5OiA2YW0gLSA2cG08L3A+XG4gICA8cCBjbGFzcz1cInR1ZXNkYXkgZGF5XCI+VHVlc2RheTogNmFtIC0gNnBtPC9wPlxuICAgPHAgY2xhc3M9XCJ3ZWRuZXNkYXkgZGF5XCI+V2VkbmVzZGF5OiA2YW0gLSA2cG08L3A+XG4gICA8cCBjbGFzcz1cInRodXJzZGF5IGRheVwiPlRodXJzZGF5OiA2YW0gLSAxMHBtPC9wPlxuICAgPHAgY2xhc3M9XCJmcmlkYXkgZGF5XCI+RnJpZGF5OiA2YW0gLSAxMHBtPC9wPlxuICAgPHAgY2xhc3M9XCJzYXR1cmRheSBkYXlcIj5TYXR1cmRheTogOGFtIC0gMTBwbTwvcD5cbiAgIGBcbiAgIHJldHVybiB0aW1pbmdzTm9kZVxuXG59XG5mdW5jdGlvbiBnZXRMb2NhdGlvbkVsZW1lbnQoKXtcbiAgICBjb25zdCBsb2NhdGlvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbk5vZGUuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbk5vZGUuaW5uZXJIVE1MID1gPGgzIGNsYXNzPVwibG9jYXRpb24taGVhZGVyXCI+TG9jYXRpb248L2gzPlxuICAgIDxwIGNsYXNzPVwiYWRkcmVzc1wiPiAxMDIsIGZvcmVzdCBWaWxsYSAsIEhpbmpld2FkaTwvcD5cbiAgICBgXG4gICAgcmV0dXJuIGxvY2F0aW9uTm9kZVxufVxuZXhwb3J0IGRlZmF1bHQgaG9tZUNvbXBvbmVudCIsImltcG9ydCAgYmVlSW1nIGZyb20gJy4uL2Fzc2VzdHMvYmVlMS5wbmcnO1xuaW1wb3J0IGhvbmVDb21iSW1nIGZyb20gJy4uL2Fzc2VzdHMvaG9uZXljb21iLnBuZyc7XG5pbXBvcnQgaG9uZXlUZWFJbWcgZnJvbSAnLi4vYXNzZXN0cy9ob25leVRlYS5qcGcnO1xuaW1wb3J0IGJlcnJ5VGVhSW1nIGZyb20gJy4uL2Fzc2VzdHMvYmVycnlUZWEuanBnJztcblxuZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpe1xuICAgIGNvbnN0IG1lbnVDb21wTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb21wTm9kZS5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGdldE1lbnVIZWFkZXJFbGVtZW50KClcbiAgICBtZW51Q29tcE5vZGUuYXBwZW5kKG1lbnVIZWFkZXIpXG5cbiAgICBjcmVhdGVCZXZlcmFnZXNTZWN0aW9uKG1lbnVDb21wTm9kZSk7XG4gICAgY3JlYXRlU2lkZXNTZWN0aW9uKG1lbnVDb21wTm9kZSk7XG4gICAgY3JlYXRlTWFpbkRpc2hlc1NlY3Rpb24obWVudUNvbXBOb2RlKTtcbiAgICByZXR1cm4gbWVudUNvbXBOb2RlO1xuICB9XG5cbiAgY2xhc3MgQ3JlYXRlSW1hZ2VOb2RlIHtcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3RydWN0b3Ioc3JjLGNsYXNzbmFtZSl7XG4gICAgICB0aGlzLm5vZGUuc3JjID1zcmM7XG4gICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xuICAgIH1cbiAgICBnZXQgaW1hZ2VOb2RlKCl7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBnZXRNZW51SGVhZGVyRWxlbWVudCgpe1xuICAgIGNvbnN0IG1lbnVIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtbmFtZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVOYW1lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudU5hbWVCb3guY2xhc3NMaXN0LmFkZCgnbWVudS1uYW1lLWJveCcpO1xuXG4gICAgY29uc3QgaW1nMSA9IG5ldyBDcmVhdGVJbWFnZU5vZGUoYmVlSW1nLCdiZWUtaW1hZ2UxJyk7XG4gICAgXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1uYW1lJyk7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IGBNZW51YDtcblxuICAgIGNvbnN0IGltZzIgPSBuZXcgQ3JlYXRlSW1hZ2VOb2RlKGJlZUltZywnYmVlLWltYWdlMicpO1xuXG4gICAgbWVudU5hbWVCb3guYXBwZW5kKGltZzEuaW1hZ2VOb2RlKTtcbiAgICBtZW51TmFtZUJveC5hcHBlbmQobWVudUhlYWRlcik7XG4gICAgbWVudU5hbWVCb3guYXBwZW5kKGltZzIuaW1hZ2VOb2RlKTtcbiAgICBtZW51SGVhZGVyQ29udGFpbmVyLmFwcGVuZChtZW51TmFtZUJveCk7XG4gICAgcmV0dXJuIG1lbnVIZWFkZXJDb250YWluZXI7XG59XG5jbGFzcyBDcmVhdGVNZW51Q2F0ZWdvcnkge1xuICAgYmV2ZXJhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIGJldmVyYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgIGltZyA9IG5ldyBDcmVhdGVJbWFnZU5vZGUoaG9uZUNvbWJJbWcsJ2JyZXYtaG9uZXktY29tYicpO1xuICAgY29uc3RydWN0b3IobGFiZWwpe1xuICAgIHRoaXMuYmV2ZXJhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXRlZ29yeS1jb250YWluZXInKTtcbiAgICB0aGlzLmJldmVyYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGFiZWwnKTtcbiAgICB0aGlzLmJldmVyYWdlLnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgdGhpcy5iZXZlcmFnZUNvbnRhaW5lci5hcHBlbmQodGhpcy5iZXZlcmFnZSk7XG4gICAgdGhpcy5iZXZlcmFnZUNvbnRhaW5lci5hcHBlbmQodGhpcy5pbWcuaW1hZ2VOb2RlKTtcbiAgIH1cbiAgIGdldCBtZW51Q2F0ZWdvcnlOb2RlICgpe1xuICAgICByZXR1cm4gdGhpcy5iZXZlcmFnZUNvbnRhaW5lcjtcbiAgIH1cbn1cblxuY2xhc3MgQ3JlYXRlQ2FyZCB7XG4gIGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgc3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nO1xuICBjb25zdHJ1Y3Rvcih0aXRsZSxzdW1tYXJ5LHByaWNlLGltZyl7XG4gICAgdGhpcy5jYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZSxcbiAgICB0aGlzLnN1bW1hcnkudGV4dENvbnRlbnQgPSBzdW1tYXJ5O1xuICAgIHRoaXMucHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICB0aGlzLmltZyA9IG5ldyBDcmVhdGVJbWFnZU5vZGUoaW1nLCdjYXJkLWltYWdlJylcbiAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIHRoaXMuY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgICB0aGlzLnN1bW1hcnkuY2xhc3NMaXN0LmFkZCgnY2FyZC1zdW1tYXJ5Jyk7XG4gICAgdGhpcy5wcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXByaWNlJyk7XG4gICAgdGhpcy5jYXJkLmFwcGVuZCh0aGlzLmNhcmRUaXRsZSk7XG4gICAgdGhpcy5jYXJkLmFwcGVuZCh0aGlzLnN1bW1hcnkpO1xuICAgIHRoaXMuY2FyZC5hcHBlbmQodGhpcy5wcmljZSk7XG4gICAgdGhpcy5jYXJkLmFwcGVuZCh0aGlzLmltZy5pbWFnZU5vZGUpO1xuICB9XG4gIGdldCBub2RlICgpe1xuICAgIHJldHVybiB0aGlzLmNhcmQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQmV2ZXJhZ2VzU2VjdGlvbihwYXJlbnROb2RlKXtcbiAgY29uc3QgYmV2ZXJhZ2VDYXRlZ29yeSA9IG5ldyBDcmVhdGVNZW51Q2F0ZWdvcnkoJ0JldmVyYWdlcycpO1xuICBwYXJlbnROb2RlLmFwcGVuZChiZXZlcmFnZUNhdGVnb3J5Lm1lbnVDYXRlZ29yeU5vZGUpO1xuXG4gIGNvbnN0IGhvbmV5VGVhRWxlID0gbmV3IENyZWF0ZUNhcmQoJ0hvbmV5IFRlYScsJ0Egd2FybSwgc3dlZXQgdGVhIG1hZGUgd2l0aCB0aGUgaGlnaGVzdCBxdWFsaXR5IGhvbmV5IGFuZCBhIGJpdCBvZiBsZW1vbiB0byBzdGFydCB5b3VyIGRheSBvZmYgcmlnaHQhJywnMzAgUnMnLGhvbmV5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQoaG9uZXlUZWFFbGUubm9kZSk7XG5cbiAgY29uc3QgYmVycnlUZWFFbGUgPSBuZXcgQ3JlYXRlQ2FyZCgnQmVycnkgVGVhJywnQSBjb21mb3J0aW5nLCBhbG1vc3QgZmlsbGluZywgdGVhIHRoYXQgaXMgaW5mdXNlZCB3aXRoIHRoZSBmbGF2b3JzIG9mIHNldmVyYWwga2luZHMgb2YgYmVycmllcy4gQmVzdCBzZXJ2ZWQgY29sZCwgYnV0IGNhbiBiZSBzZXJ2ZWQgaG90IG9uIHJlcXVlc3QuJywnNDAgUnMnLGJlcnJ5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQoYmVycnlUZWFFbGUubm9kZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVzU2VjdGlvbihwYXJlbnROb2RlKXtcbiAgY29uc3Qgc2lkZXNDYXRlZ29yeSA9IG5ldyBDcmVhdGVNZW51Q2F0ZWdvcnkoJ1NpZGVzJyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKHNpZGVzQ2F0ZWdvcnkubWVudUNhdGVnb3J5Tm9kZSk7XG5cbiAgY29uc3QgaG9uZXlUZWFFbGUgPSBuZXcgQ3JlYXRlQ2FyZCgnVG9hc3QgQW5kIGphbScsJ0Egc2xpY2Ugb2YgdG9hc3QsIHlvdXIgY2hvaWNlIG9mIGJyZWFkLCBhbmQgb3VyIGhvbWVtYWRlIGJsYWNrYmVycnkgb3IgcmFzcGJlcnJ5IGphbS4nLCc2MCBScycsaG9uZXlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChob25leVRlYUVsZS5ub2RlKTtcblxuICBjb25zdCBiZXJyeVRlYUVsZSA9IG5ldyBDcmVhdGVDYXJkKCdGcmVzaCBGcnVpdHMnLCdBIHNtYWxsIGJvd2wgb2YgZnJlc2ggZnJ1aXQsIHdoYXRldmVyIHdlIGZpbmQgYXQgdGhlIG1hcmtldCBmb3IgdGhlIGRheS4nLCc1MCBScycsYmVycnlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChiZXJyeVRlYUVsZS5ub2RlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkRpc2hlc1NlY3Rpb24ocGFyZW50Tm9kZSl7XG4gIGNvbnN0IG1haW5EaXNoZXNDYXRlZ29yeSA9IG5ldyBDcmVhdGVNZW51Q2F0ZWdvcnkoJ01haW4gRGlzaGVzJyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKG1haW5EaXNoZXNDYXRlZ29yeS5tZW51Q2F0ZWdvcnlOb2RlKTtcblxuICBjb25zdCBwYW5DYWtlc0VsZSA9IG5ldyBDcmVhdGVDYXJkKCdQYW4gQ2FrZXMnLCdBIHN0YWNrIG9mIGhvbWVtYWRlIGJ1dHRlcm1pbGsgcGFuY2FrZXMsIHNlcnZlZCB3aXRoIG91ciBsb2NhbGx5IHNvdXJjZWQgbWFwbGUgc3lydXAuJywnMTYwIFJzJyxob25leVRlYUltZyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKHBhbkNha2VzRWxlLm5vZGUpO1xuXG4gIGNvbnN0IGZyZW5jaFRvYXN0RWxlID0gbmV3IENyZWF0ZUNhcmQoJ0ZyZW5jaCBUb2FzdCcsJ1R3byBzbGljZXMgb2YgdGhlIGJlc3QgZnJlbmNoIHRvYXN0IHlvdSB3aWxsIGV2ZXIgZWF0LCBzZXJ2ZWQgd2l0aCBvdXIgbG9jYWxseSBzb3VyY2VkIG1hcGxlIHN5cnVwLicsJzE1MCBScycsYmVycnlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChmcmVuY2hUb2FzdEVsZS5ub2RlKTtcblxuICBjb25zdCBiZWFyeVZlZ2dpZVNhbmR3aWNoRWxlID0gbmV3IENyZWF0ZUNhcmQoJ0JlYXJ5IFZlZ2dpZSBTYW5kd2ljaCcsJ0RvIHlvdSBsaWtlIHZlZ2V0YWJsZXM/IFRoZW4gdGhpcyBpcyB0aGUgc2FuZHdpY2ggZm9yIHlvdSEgU3R1ZmZlZCBmdWxsIG9mIGEgdmFyaWV0eSBvZiBmcmVzaCBwcm9kdWNlLCBpdCB3aWxsIGZpbGwgeW91IHVwLicsJzI2MCBScycsaG9uZXlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChiZWFyeVZlZ2dpZVNhbmR3aWNoRWxlLm5vZGUpO1xuXG4gIGNvbnN0IGJhZ2VsQW5kTG94ID0gbmV3IENyZWF0ZUNhcmQoJ0JhZ2VsIGFuZCBMb3gnLCdPdXIgaG91c2Ugc3BlY2lhbHR5LCB5b3UgY2FudCBnbyB3cm9uZyB3aXRoIGEgaGVhcnR5IGJhZ2VsIHRvcHBlZCB3aXRoIHN1c3RhaW5hYmx5IGhhcnZlc3RlZCBzYWxtb24uJywnMjUwIFJzJyxiZXJyeVRlYUltZyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKGJhZ2VsQW5kTG94Lm5vZGUpO1xuXG4gIGNvbnN0IGhvbmV5Q29tYkVsZSA9IG5ldyBDcmVhdGVDYXJkKCdIb25leWNvbWInLCdBcmUgeW91IGEgYmVhciBsaWtlIHVzPyBUaGVuIHlvdSB3aWxsIGxvdmUgb3VyIGhvbmV5Y29tYi4gQW5kLCB5ZXMgaHVtYW5zLCBpdCBpcyBqdXN0IGEgcGllY2Ugb2YgaG9uZXljb21iLCBub3QgdGhlIHBvcHVsYXIgYnJlYWtmYXN0IGNlcmVhbC4nLCcxNjAgUnMnLGhvbmV5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQoaG9uZXlDb21iRWxlLm5vZGUpO1xuXG4gIGNvbnN0IHRoZUJlYXJ5QmVzdFBvcnJpZGdlRWxlID0gbmV3IENyZWF0ZUNhcmQoJ1RoZSBCZWFyeSBCZXN0IFBvcnJpZGdlJywnTWFkZSBieSBCYWJ5IEJlYXIgaGltc2VsZiwgdGhpcyBwb3JyaWRnZSBpcyBndWFyZW50ZWVkIHRvIGJlIGp1c3QgcmlnaHQsIG9yIHlvdXIgbW9uZXkgYmFjay4nLCcxNTAgUnMnLGJlcnJ5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQodGhlQmVhcnlCZXN0UG9ycmlkZ2VFbGUubm9kZSk7XG4gIFxufVxuICBleHBvcnQgZGVmYXVsdCBtZW51Q29tcG9uZW50IiwiZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck5vZGUgPSBjcmVhdGVIZWFkZXJOb2RlKCk7XG4gICAgY29uc3QgbWFpbk5vZGUgPSBjcmVhdGVNYWluTm9kZSgpO1xuICAgIGNvbnN0IGZvb3Rlck5vZGUgPSBjcmVhdGVGb290ZXJOb2RlKCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlck5vZGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobWFpbk5vZGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9vdGVyTm9kZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlck5vZGUgKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lLXRhYicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiJyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10YWInKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgICBoZWFkZXIuYXBwZW5kKGhvbWUpO1xuICAgIGhlYWRlci5hcHBlbmQobWVudSk7XG4gICAgaGVhZGVyLmFwcGVuZChjb250YWN0KTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluTm9kZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlck5vZGUoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYDx1bD5cbiAgICA8bGk+XG4gICAgICA8YSBjbGFzcz1cImF0dHJpYnV0aW9uIGljb25zMlwiIGhyZWY9XCJodHRwOi8vd3d3LmZyZWVwaWsuY29tXCIgdGl0bGU9XCJGcmVlcGlrXCI+SGl2ZSBpY29uIG1hZGUgYnkgRnJlZXBpayAtIHd3dy5mbGF0aWNvbi5jb208L2E+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8YSBjbGFzcz1cImF0dHJpYnV0aW9uIGljb25zXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9hdXRob3JzL3NtYXNoaWNvbnNcIiB0aXRsZT1cIlNtYXNoaWNvbnNcIj5CZWUgaWNvbnMgbWFkZSBieSBTbWFzaGljb25zIC0gd3d3LmZsYXRpY29uLmNvbTwvYT5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGNsYXNzPVwiYXR0cmlidXRpb25cIiBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vdmVjdG9ycy9mb29kXCI+QmFja2dyb3VuZCBpbWFnZSBjcmVhdGVkIGJ5IGRnaW0tc3R1ZGlvIC0gd3d3LmZyZWVwaWsuY29tPC9hPlxuICAgIDwvbGk+XG4gIDwvdWw+YDtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkXCI7XG5pbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVDb21wb25lbnRcIjtcbmltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudUNvbXBvbmVudFwiO1xuaW1wb3J0IGNvbnRhY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgaHRtbExheW91dCA9IGluaXRpYWxQYWdlTG9hZCgpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZChodG1sTGF5b3V0KTtcblxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXRhYicpO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRhYicpO1xuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXRhYicpO1xuXG5jb25zdCBob21lTm9kZSA9IGhvbWVDb21wb25lbnQoKTtcbmNvbnN0IG1lbnVOb2RlID0gbWVudUNvbXBvbmVudCgpO1xuY29uc3QgY29udGFjdE5vZGUgPSBjb250YWN0Q29tcG9uZW50KCk7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5pZihtYWluKXtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihtYWluKTtcbiAgICBtYWluLmFwcGVuZChob21lTm9kZSk7XG59XG5cblxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQtdGFiJykpICByZXR1cm47XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4obWFpbik7XG4gICAgbWFpbi5hcHBlbmQoaG9tZU5vZGUpO1xuXG59KVxuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZC10YWInKSkgIHJldHVybjtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihtYWluKTtcbiAgICBtYWluLmFwcGVuZChtZW51Tm9kZSk7XG59KVxuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZC10YWInKSkgIHJldHVybjtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihtYWluKTtcbiAgICBtYWluLmFwcGVuZChjb250YWN0Tm9kZSk7XG59KVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpe1xuICAgIHdoaWxlKHBhcmVudC5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=