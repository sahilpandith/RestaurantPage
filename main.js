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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/bee1.png */ "./src/assests/bee1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/honeycomb.png */ "./src/assests/honeycomb.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    height: 100vh;\n    font-family: \"Yusei Magic\", sans-serif;    \n}\n:root {\n    --khaki : #ffde73;\n    --orange-1 :#eca43a;\n    --orange-2: #c16a0a;\n    --yellow-1:#ffc60c;\n    --font-600:600;\n}\n#content {\n    height: 100%;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\nheader {\n    display : flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n    background: var(--khaki);\n    padding: 10px;\n    padding-bottom: 0px;\n}\nmain {\n    flex:1;\n    background : url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n}\n\nmain > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--khaki);\n    padding: 30px;\n}\n\n.attribution {\n    color: black;\n    font-size: 12px;\n    text-decoration: none;\n}\n.home-tab,.menu-tab,.contact-tab {\n    border: 1px solid black;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: none;\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\n\n.selected-tab {\n    background: var(--orange-1);\n}\n.restaurant-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.restaurant-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.restaurant-name::after{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.restaurant-name::before{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.summary{\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.summary p {\n    font-weight: var(--font-600);\n}\n/* .summary:nth-child(2) {\n    font-weight: 14px;\n} */\n\n.summary::before {\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: inline-block;\n    position: relative;\n    top: -48px;\n    left: 63px;\n    margin-bottom: -37px;\n}\n\n.timings {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.day {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n.location {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.address {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n\n.menu-name-container {\n    padding: 10px;\n    background :var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n}\n\n.menu-name-box {\n    width: 400px;\n    display: flex;\n    padding: 10px;\n    font-size: 30px;\n    justify-content: space-between;\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n.menu-name {\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n}\n.bee-image1,.bee-image2 {\n    width: 50px; \n    height: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n}\n\n.bee-image2 {\n    transform: rotateZ(90deg);\n}\n\n.menu-category-container {\n    margin-top: 45px;\n    padding: 10px;\n    background: var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n    position: relative;\n}\n\n.menu-label {\n    width: 300px;\n    display: flex;\n    padding: 20px;\n    font-size: 30px;\n    justify-content: center;\n    background: var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n    margin: 0px;\n}\n\n.brev-honey-comb {\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    top: 32px;\n    right: 1px;\n    z-index: 1;\n}\n\n.card {\n width: 250px;\n height: 400px;\n border: 8px solid var(--orange-2);\n display: grid;\n grid-template-columns: 1fr 1fr 1fr;\n grid-template-rows: repeat(8,1fr);\n gap: 5px;\n padding: 5px;\n border-radius: 17px;\n margin: 15px;\n    background: var(--yellow-1);\n}\n\n.card-title {\n    grid-column: 1/4;\n    grid-row: 1/2;\n}\n.card-summary{\n    grid-column: 1/4;\n    grid-row: 2/5;\n    padding: 5px;\n    padding-left: 20px;\n}\n.card-price {\n    grid-column: 1/2;\n    grid-row: 5/9;\n    font-weight: var(--font-600);\n}\n.card-image {\n    grid-column: 2/4;\n    grid-row: 5/9;\n    height: 165px;\n    width: 150px;\n    border: 1px solid var(--orange-2);\n    border-radius: 17px;\n}\n\n.contact-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.contact-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.contact-name::after{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.contact-name::before{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.contact-card-container{\n    border: 8px solid var(--orange-2);\n    margin-top: 40px;\n    clip-path: polygon(5% 0, 95% 0%, 100% 15%, 100% 92%, 90% 102%, 6% 100%, 0 89%, 0 15%);\n    background: var(--yellow-1);\n    font-size: 17px;\n    font-weight: 600;\n}\n.contact-class {\n    padding: 10px;\n    border: 8px solid var(--orange-2);\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    grid-template-rows: 2fr 1fr;\n    gap: 2px;\n}\n\n.contact-class div:nth-child(1){\n    grid-column: 1/3;\n}\n.contact-class div:nth-child(2){\n    grid-column: 2/3;\n}\n\n.contact-class div:nth-child(3){\n    grid-column: 2/3;\n}\n\n.contact-class div:nth-child(4){\n    grid-column: 2/3;\n}\n\n\nfooter{\n    background: var(--khaki);\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\nfooter ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\nfooter ul li {\n    flex: 1;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    height: 100vh;\n    font-family: \"Yusei Magic\", sans-serif;    \n}\n:root {\n    --khaki : #ffde73;\n    --orange-1 :#eca43a;\n    --orange-2: #c16a0a;\n    --yellow-1:#ffc60c;\n    --font-600:600;\n}\n#content {\n    height: 100%;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\nheader {\n    display : flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n    background: var(--khaki);\n    padding: 10px;\n    padding-bottom: 0px;\n}\nmain {\n    flex:1;\n    background : url('./assests/honeyBG2.jpg');\n    background-size: contain;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n}\n\nmain > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--khaki);\n    padding: 30px;\n}\n\n.attribution {\n    color: black;\n    font-size: 12px;\n    text-decoration: none;\n}\n.home-tab,.menu-tab,.contact-tab {\n    border: 1px solid black;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: none;\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\n\n.selected-tab {\n    background: var(--orange-1);\n}\n.restaurant-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.restaurant-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.restaurant-name::after{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.restaurant-name::before{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.summary{\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.summary p {\n    font-weight: var(--font-600);\n}\n/* .summary:nth-child(2) {\n    font-weight: 14px;\n} */\n\n.summary::before {\n    content: '';\n    background-image: url(./assests/honeycomb.png);\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: inline-block;\n    position: relative;\n    top: -48px;\n    left: 63px;\n    margin-bottom: -37px;\n}\n\n.timings {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.day {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n.location {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.address {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n\n.menu-name-container {\n    padding: 10px;\n    background :var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n}\n\n.menu-name-box {\n    width: 400px;\n    display: flex;\n    padding: 10px;\n    font-size: 30px;\n    justify-content: space-between;\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n.menu-name {\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n}\n.bee-image1,.bee-image2 {\n    width: 50px; \n    height: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n}\n\n.bee-image2 {\n    transform: rotateZ(90deg);\n}\n\n.menu-category-container {\n    margin-top: 45px;\n    padding: 10px;\n    background: var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n    position: relative;\n}\n\n.menu-label {\n    width: 300px;\n    display: flex;\n    padding: 20px;\n    font-size: 30px;\n    justify-content: center;\n    background: var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n    margin: 0px;\n}\n\n.brev-honey-comb {\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    top: 32px;\n    right: 1px;\n    z-index: 1;\n}\n\n.card {\n width: 250px;\n height: 400px;\n border: 8px solid var(--orange-2);\n display: grid;\n grid-template-columns: 1fr 1fr 1fr;\n grid-template-rows: repeat(8,1fr);\n gap: 5px;\n padding: 5px;\n border-radius: 17px;\n margin: 15px;\n    background: var(--yellow-1);\n}\n\n.card-title {\n    grid-column: 1/4;\n    grid-row: 1/2;\n}\n.card-summary{\n    grid-column: 1/4;\n    grid-row: 2/5;\n    padding: 5px;\n    padding-left: 20px;\n}\n.card-price {\n    grid-column: 1/2;\n    grid-row: 5/9;\n    font-weight: var(--font-600);\n}\n.card-image {\n    grid-column: 2/4;\n    grid-row: 5/9;\n    height: 165px;\n    width: 150px;\n    border: 1px solid var(--orange-2);\n    border-radius: 17px;\n}\n\n.contact-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.contact-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.contact-name::after{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.contact-name::before{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.contact-card-container{\n    border: 8px solid var(--orange-2);\n    margin-top: 40px;\n    clip-path: polygon(5% 0, 95% 0%, 100% 15%, 100% 92%, 90% 102%, 6% 100%, 0 89%, 0 15%);\n    background: var(--yellow-1);\n    font-size: 17px;\n    font-weight: 600;\n}\n.contact-class {\n    padding: 10px;\n    border: 8px solid var(--orange-2);\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    grid-template-rows: 2fr 1fr;\n    gap: 2px;\n}\n\n.contact-class div:nth-child(1){\n    grid-column: 1/3;\n}\n.contact-class div:nth-child(2){\n    grid-column: 2/3;\n}\n\n.contact-class div:nth-child(3){\n    grid-column: 2/3;\n}\n\n.contact-class div:nth-child(4){\n    grid-column: 2/3;\n}\n\n\nfooter{\n    background: var(--khaki);\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\nfooter ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\nfooter ul li {\n    flex: 1;\n}\n\n"],"sourceRoot":""}]);
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

    const contactHeaderEle = getContactHeader();
    contactCompNode.append(contactHeaderEle);

    const contact1 = new CreateContactCard('Sahil' , 'Chef' , '555-666-7777', 'sahil.something@gmail.com');
    contactCompNode.append(contact1.contactCardNode);

    const contact2 = new CreateContactCard('Romit' , 'Manager' , '555-666-7776', 'romit.something@gmail.com');
    contactCompNode.append(contact2.contactCardNode);

    const contact3 = new CreateContactCard('Goldi' , 'Waiter' , '555-666-7778', 'goldi.something@gmail.com');
    contactCompNode.append(contact3.contactCardNode);
    return contactCompNode;
  }
  
  function getContactHeader(){
    const contactHeaderEle = document.createElement('div');
    contactHeaderEle.classList.add('contact-name-container');
   const contactHeaderLabel = document.createElement('div');
   contactHeaderLabel.classList.add('contact-name');
   contactHeaderLabel.textContent = "contact";

   contactHeaderEle.append(contactHeaderLabel);
   return contactHeaderEle;
}
class CreateContactCard {
  container = document.createElement('div');
  contactNode = document.createElement('div');
  name = document.createElement('div');
  designation = document.createElement('div');
  contact = document.createElement('div');
  email = document.createElement('div');
  constructor(name, designation, contact, email){
    this.container.classList.add('contact-card-container');
    this.contactNode.classList.add('contact-class')
    this.name.textContent = name;
    this.designation.textContent=designation;
    this.email.textContent=email;
    this.contact.textContent=contact;
    this.contactNode.append(this.name);
    this.contactNode.append(this.designation);
    this.contactNode.append(this.contact);
    this.contactNode.append(this.email);
    this.container.append(this.contactNode);
  }

  get contactCardNode (){
    return this.container
  }
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
/* harmony import */ var _assests_bee1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assests/bee1.png */ "./src/assests/bee1.png");
/* harmony import */ var _assests_honeycomb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assests/honeycomb.png */ "./src/assests/honeycomb.png");
/* harmony import */ var _assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assests/honeyTea.jpg */ "./src/assests/honeyTea.jpg");
/* harmony import */ var _assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assests/berryTea.jpg */ "./src/assests/berryTea.jpg");
/* harmony import */ var _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/utilities.js */ "./src/utilities/utilities.js");






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

 
  function getMenuHeaderElement(){
    const menuHeaderContainer = document.createElement('div');
    menuHeaderContainer.classList.add('menu-name-container');

    const menuNameBox = document.createElement('div');
    menuNameBox.classList.add('menu-name-box');

    const img1 = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateImageNode(_assests_bee1_png__WEBPACK_IMPORTED_MODULE_0__,'bee-image1');
    
    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-name');
    menuHeader.textContent = `Menu`;

    const img2 = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateImageNode(_assests_bee1_png__WEBPACK_IMPORTED_MODULE_0__,'bee-image2');

    menuNameBox.append(img1.imageNode);
    menuNameBox.append(menuHeader);
    menuNameBox.append(img2.imageNode);
    menuHeaderContainer.append(menuNameBox);
    return menuHeaderContainer;
}



function createBeveragesSection(parentNode){
  const beverageCategory = new CreateMenuCategory('Beverages');
  parentNode.append(beverageCategory.menuCategoryNode);

  const honeyTeaEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('Honey Tea','A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!','30 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__);
  parentNode.append(honeyTeaEle.node);

  const berryTeaEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('Berry Tea','A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.','40 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__);
  parentNode.append(berryTeaEle.node);
}

function createSidesSection(parentNode){
  const sidesCategory = new CreateMenuCategory('Sides');
  parentNode.append(sidesCategory.menuCategoryNode);

  const honeyTeaEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('Toast And jam','A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.','60 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__);
  parentNode.append(honeyTeaEle.node);

  const berryTeaEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('Fresh Fruits','A small bowl of fresh fruit, whatever we find at the market for the day.','50 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__);
  parentNode.append(berryTeaEle.node);
}

function createMainDishesSection(parentNode){
  const mainDishesCategory = new CreateMenuCategory('Main Dishes');
  parentNode.append(mainDishesCategory.menuCategoryNode);

  const panCakesEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('Pan Cakes','A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.','160 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__);
  parentNode.append(panCakesEle.node);

  const frenchToastEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('French Toast','Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.','150 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__);
  parentNode.append(frenchToastEle.node);

  const bearyVeggieSandwichEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('Beary Veggie Sandwich','Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.','260 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__);
  parentNode.append(bearyVeggieSandwichEle.node);

  const bagelAndLox = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('Bagel and Lox','Our house specialty, you cant go wrong with a hearty bagel topped with sustainably harvested salmon.','250 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__);
  parentNode.append(bagelAndLox.node);

  const honeyCombEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('Honeycomb','Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.','160 Rs',_assests_honeyTea_jpg__WEBPACK_IMPORTED_MODULE_2__);
  parentNode.append(honeyCombEle.node);

  const theBearyBestPorridgeEle = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateCard('The Beary Best Porridge','Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.','150 Rs',_assests_berryTea_jpg__WEBPACK_IMPORTED_MODULE_3__);
  parentNode.append(theBearyBestPorridgeEle.node);
  
}

class CreateMenuCategory {
  beverageContainer = document.createElement('div');
  beverage = document.createElement('h3');
  img = new _utilities_utilities_js__WEBPACK_IMPORTED_MODULE_4__.CreateImageNode(_assests_honeycomb_png__WEBPACK_IMPORTED_MODULE_1__,'brev-honey-comb');
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

/***/ "./src/utilities/utilities.js":
/*!************************************!*\
  !*** ./src/utilities/utilities.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateCard": () => (/* binding */ CreateCard),
/* harmony export */   "CreateImageNode": () => (/* binding */ CreateImageNode)
/* harmony export */ });
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

  

/***/ }),

/***/ "./src/assests/bee1.png":
/*!******************************!*\
  !*** ./src/assests/bee1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c211eb647b52d1a43e7c.png";

/***/ }),

/***/ "./src/assests/berryTea.jpg":
/*!**********************************!*\
  !*** ./src/assests/berryTea.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3215ef4e9ead8968fa1.jpg";

/***/ }),

/***/ "./src/assests/honeyBG2.jpg":
/*!**********************************!*\
  !*** ./src/assests/honeyBG2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66c573abb83e5389c208.jpg";

/***/ }),

/***/ "./src/assests/honeyTea.jpg":
/*!**********************************!*\
  !*** ./src/assests/honeyTea.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "408afbbd851dac1dd323.jpg";

/***/ }),

/***/ "./src/assests/honeycomb.png":
/*!***********************************!*\
  !*** ./src/assests/honeycomb.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f9c987901b711c9c580.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFX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aUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3BEakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTztBQUNBO0FBQ007QUFDeEM7O0FBRXJCLG1CQUFtQiw0REFBZTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUVBQWE7QUFDOUIsaUJBQWlCLHFFQUFhO0FBQzlCLG9CQUFvQix3RUFBZ0I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5pdGlhbFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3V0aWxpdGllcy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3Nlc3RzL2hvbmV5QkcyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy9iZWUxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy9ob25leWNvbWIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmOyAgICBcXG59XFxuOnJvb3Qge1xcbiAgICAtLWtoYWtpIDogI2ZmZGU3MztcXG4gICAgLS1vcmFuZ2UtMSA6I2VjYTQzYTtcXG4gICAgLS1vcmFuZ2UtMjogI2MxNmEwYTtcXG4gICAgLS15ZWxsb3ctMTojZmZjNjBjO1xcbiAgICAtLWZvbnQtNjAwOjYwMDtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG5tYWluIHtcXG4gICAgZmxleDoxO1xcbiAgICBiYWNrZ3JvdW5kIDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWFpbiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmF0dHJpYnV0aW9uIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmhvbWUtdGFiLC5tZW51LXRhYiwuY29udGFjdC10YWIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zZWxlY3RlZC10YWIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMSk7XFxufVxcbi5yZXN0YXVyYW50LW5hbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZCA6dmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTclIDElLCA4MSUgMCwgMTAwJSAyMyUsIDEwMCUgNzclLCA4NCUgOTklLCAxNiUgMTAwJSwgMCA4MCUsIDAgMjclKTtcXG59XFxuLnJlc3RhdXJhbnQtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1uYW1lOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTBweDsgXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLnN1bW1hcnl7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbn1cXG5cXG4uc3VtbWFyeSBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG59XFxuLyogLnN1bW1hcnk6bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC13ZWlnaHQ6IDE0cHg7XFxufSAqL1xcblxcbi5zdW1tYXJ5OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTQ4cHg7XFxuICAgIGxlZnQ6IDYzcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC0zN3B4O1xcbn1cXG5cXG4udGltaW5ncyB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbn1cXG5cXG4uZGF5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS15ZWxsb3ctMSk7XFxufVxcblxcbi5hZGRyZXNzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBtYXJnaW46IDNweDtcXG59XFxuXFxuXFxuLm1lbnUtbmFtZS1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kIDp2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyMiUgMSUsIDczJSAwLCAxMDAlIDI1JSwgMTAwJSA3MyUsIDc2JSA5OSUsIDIzJSAxMDAlLCAwIDc2JSwgMCAyOSUpO1xcbn1cXG5cXG4ubWVudS1uYW1lLWJveCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS15ZWxsb3ctMSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyNCUgMCwgNzIlIDAsIDEwMCUgMzIlLCAxMDAlIDY4JSwgNzYlIDEwMCUsIDIzJSAxMDAlLDAgNzIlLCAwIDM0JSk7XFxufVxcbi5tZW51LW5hbWUge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxufVxcbi5iZWUtaW1hZ2UxLC5iZWUtaW1hZ2UyIHtcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmJlZS1pbWFnZTIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xcbn1cXG5cXG4ubWVudS1jYXRlZ29yeS1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA0NXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyMiUgMSUsIDczJSAwLCAxMDAlIDI1JSwgMTAwJSA3MyUsIDc2JSA5OSUsIDIzJSAxMDAlLCAwIDc2JSwgMCAyOSUpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tZW51LWxhYmVsIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctMSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyNCUgMCwgNzIlIDAsIDEwMCUgMzIlLCAxMDAlIDY4JSwgNzYlIDEwMCUsIDIzJSAxMDAlLDAgNzIlLCAwIDM0JSk7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uYnJldi1ob25leS1jb21iIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDMycHg7XFxuICAgIHJpZ2h0OiAxcHg7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5jYXJkIHtcXG4gd2lkdGg6IDI1MHB4O1xcbiBoZWlnaHQ6IDQwMHB4O1xcbiBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuIGRpc3BsYXk6IGdyaWQ7XFxuIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsMWZyKTtcXG4gZ2FwOiA1cHg7XFxuIHBhZGRpbmc6IDVweDtcXG4gYm9yZGVyLXJhZGl1czogMTdweDtcXG4gbWFyZ2luOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctMSk7XFxufVxcblxcbi5jYXJkLXRpdGxlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuLmNhcmQtc3VtbWFyeXtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgZ3JpZC1yb3c6IDIvNTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi5jYXJkLXByaWNlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDUvOTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG59XFxuLmNhcmQtaW1hZ2Uge1xcbiAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICBncmlkLXJvdzogNS85O1xcbiAgICBoZWlnaHQ6IDE2NXB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcXG59XFxuXFxuLmNvbnRhY3QtbmFtZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kIDp2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxNyUgMSUsIDgxJSAwLCAxMDAlIDIzJSwgMTAwJSA3NyUsIDg0JSA5OSUsIDE2JSAxMDAlLCAwIDgwJSwgMCAyNyUpO1xcbn1cXG4uY29udGFjdC1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS15ZWxsb3ctMSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyNCUgMCwgNzIlIDAsIDEwMCUgMzIlLCAxMDAlIDY4JSwgNzYlIDEwMCUsIDIzJSAxMDAlLDAgNzIlLCAwIDM0JSk7XFxufVxcblxcbi5jb250YWN0LW5hbWU6OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDsgXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGFjdC1uYW1lOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uY29udGFjdC1jYXJkLWNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNSUgMCwgOTUlIDAlLCAxMDAlIDE1JSwgMTAwJSA5MiUsIDkwJSAxMDIlLCA2JSAxMDAlLCAwIDg5JSwgMCAxNSUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctMSk7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmNvbnRhY3QtY2xhc3Mge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5jb250YWN0LWNsYXNzIGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcbi5jb250YWN0LWNsYXNzIGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5jb250YWN0LWNsYXNzIGRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5jb250YWN0LWNsYXNzIGRpdjpudGgtY2hpbGQoNCl7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcblxcbmZvb3RlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbmZvb3RlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgdWwgbGkge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksTUFBTTtJQUNOLG9EQUEwQztJQUMxQyx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isc0ZBQXNGO0FBQzFGO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIscUZBQXFGO0FBQ3pGOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlEQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5REFBeUM7SUFDekMscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7QUFDQTs7R0FFRzs7QUFFSDtJQUNJLFdBQVc7SUFDWCx5REFBOEM7SUFDOUMsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixXQUFXO0FBQ2Y7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzRkFBc0Y7QUFDMUY7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixxRkFBcUY7QUFDekY7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixzRkFBc0Y7SUFDdEYsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IscUZBQXFGO0lBQ3JGLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixpQ0FBaUM7Q0FDakMsYUFBYTtDQUNiLGtDQUFrQztDQUNsQyxpQ0FBaUM7Q0FDakMsUUFBUTtDQUNSLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsWUFBWTtJQUNULDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixzRkFBc0Y7QUFDMUY7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixxRkFBcUY7QUFDekY7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseURBQXlDO0lBQ3pDLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlEQUF5QztJQUN6QyxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHFGQUFxRjtJQUNyRiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDJCQUEyQjtJQUMzQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJZdXNlaSBNYWdpY1xcXCIsIHNhbnMtc2VyaWY7ICAgIFxcbn1cXG46cm9vdCB7XFxuICAgIC0ta2hha2kgOiAjZmZkZTczO1xcbiAgICAtLW9yYW5nZS0xIDojZWNhNDNhO1xcbiAgICAtLW9yYW5nZS0yOiAjYzE2YTBhO1xcbiAgICAtLXllbGxvdy0xOiNmZmM2MGM7XFxuICAgIC0tZm9udC02MDA6NjAwO1xcbn1cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheSA6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1raGFraSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XFxufVxcbm1haW4ge1xcbiAgICBmbGV4OjE7XFxuICAgIGJhY2tncm91bmQgOiB1cmwoJy4vYXNzZXN0cy9ob25leUJHMi5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxubWFpbiA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogMzBweDtcXG59XFxuXFxuLmF0dHJpYnV0aW9uIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmhvbWUtdGFiLC5tZW51LXRhYiwuY29udGFjdC10YWIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5zZWxlY3RlZC10YWIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtMSk7XFxufVxcbi5yZXN0YXVyYW50LW5hbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZCA6dmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTclIDElLCA4MSUgMCwgMTAwJSAyMyUsIDEwMCUgNzclLCA4NCUgOTklLCAxNiUgMTAwJSwgMCA4MCUsIDAgMjclKTtcXG59XFxuLnJlc3RhdXJhbnQtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1uYW1lOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdHMvYmVlMS5wbmcpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWU6OmJlZm9yZXtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdHMvYmVlMS5wbmcpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uc3VtbWFyeXtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS15ZWxsb3ctMSk7XFxufVxcblxcbi5zdW1tYXJ5IHAge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbn1cXG4vKiAuc3VtbWFyeTpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXdlaWdodDogMTRweDtcXG59ICovXFxuXFxuLnN1bW1hcnk6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3Nlc3RzL2hvbmV5Y29tYi5wbmcpO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAtNDhweDtcXG4gICAgbGVmdDogNjNweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTM3cHg7XFxufVxcblxcbi50aW1pbmdzIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS15ZWxsb3ctMSk7XFxufVxcblxcbi5kYXkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLmFkZHJlc3Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxuICAgIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5cXG4ubWVudS1uYW1lLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQgOnZhcigtLW9yYW5nZS0yKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSAxJSwgNzMlIDAsIDEwMCUgMjUlLCAxMDAlIDczJSwgNzYlIDk5JSwgMjMlIDEwMCUsIDAgNzYlLCAwIDI5JSk7XFxufVxcblxcbi5tZW51LW5hbWUtYm94IHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI0JSAwLCA3MiUgMCwgMTAwJSAzMiUsIDEwMCUgNjglLCA3NiUgMTAwJSwgMjMlIDEwMCUsMCA3MiUsIDAgMzQlKTtcXG59XFxuLm1lbnUtbmFtZSB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG59XFxuLmJlZS1pbWFnZTEsLmJlZS1pbWFnZTIge1xcbiAgICB3aWR0aDogNTBweDsgXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uYmVlLWltYWdlMiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XFxufVxcblxcbi5tZW51LWNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS0yKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDIyJSAxJSwgNzMlIDAsIDEwMCUgMjUlLCAxMDAlIDczJSwgNzYlIDk5JSwgMjMlIDEwMCUsIDAgNzYlLCAwIDI5JSk7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1lbnUtbGFiZWwge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy0xKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI0JSAwLCA3MiUgMCwgMTAwJSAzMiUsIDEwMCUgNjglLCA3NiUgMTAwJSwgMjMlIDEwMCUsMCA3MiUsIDAgMzQlKTtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5icmV2LWhvbmV5LWNvbWIge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzJweDtcXG4gICAgcmlnaHQ6IDFweDtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLmNhcmQge1xcbiB3aWR0aDogMjUwcHg7XFxuIGhlaWdodDogNDAwcHg7XFxuIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gZGlzcGxheTogZ3JpZDtcXG4gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwxZnIpO1xcbiBnYXA6IDVweDtcXG4gcGFkZGluZzogNXB4O1xcbiBib3JkZXItcmFkaXVzOiAxN3B4O1xcbiBtYXJnaW46IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMS8yO1xcbn1cXG4uY2FyZC1zdW1tYXJ5e1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBncmlkLXJvdzogMi81O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuLmNhcmQtcHJpY2Uge1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogNS85O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbn1cXG4uY2FyZC1pbWFnZSB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgIGdyaWQtcm93OiA1Lzk7XFxuICAgIGhlaWdodDogMTY1cHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcbn1cXG5cXG4uY29udGFjdC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQgOnZhcigtLW9yYW5nZS0yKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE3JSAxJSwgODElIDAsIDEwMCUgMjMlLCAxMDAlIDc3JSwgODQlIDk5JSwgMTYlIDEwMCUsIDAgODAlLCAwIDI3JSk7XFxufVxcbi5jb250YWN0LW5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI0JSAwLCA3MiUgMCwgMTAwJSAzMiUsIDEwMCUgNjglLCA3NiUgMTAwJSwgMjMlIDEwMCUsMCA3MiUsIDAgMzQlKTtcXG59XFxuXFxuLmNvbnRhY3QtbmFtZTo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3Nlc3RzL2JlZTEucG5nKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB3aWR0aDogNTBweDsgXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uY29udGFjdC1uYW1lOjpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3Nlc3RzL2JlZTEucG5nKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTBweDsgXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmNvbnRhY3QtY2FyZC1jb250YWluZXJ7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUlIDAsIDk1JSAwJSwgMTAwJSAxNSUsIDEwMCUgOTIlLCA5MCUgMTAyJSwgNiUgMTAwJSwgMCA4OSUsIDAgMTUlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5jb250YWN0LWNsYXNzIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jbGFzcyBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG4uY29udGFjdC1jbGFzcyBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uY29udGFjdC1jbGFzcyBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uY29udGFjdC1jbGFzcyBkaXY6bnRoLWNoaWxkKDQpe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG5cXG5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5mb290ZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHVsIGxpIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjb250YWN0Q29tcG9uZW50KCl7XG4gICAgY29uc3QgY29udGFjdENvbXBOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBjb250YWN0SGVhZGVyRWxlID0gZ2V0Q29udGFjdEhlYWRlcigpO1xuICAgIGNvbnRhY3RDb21wTm9kZS5hcHBlbmQoY29udGFjdEhlYWRlckVsZSk7XG5cbiAgICBjb25zdCBjb250YWN0MSA9IG5ldyBDcmVhdGVDb250YWN0Q2FyZCgnU2FoaWwnICwgJ0NoZWYnICwgJzU1NS02NjYtNzc3NycsICdzYWhpbC5zb21ldGhpbmdAZ21haWwuY29tJyk7XG4gICAgY29udGFjdENvbXBOb2RlLmFwcGVuZChjb250YWN0MS5jb250YWN0Q2FyZE5vZGUpO1xuXG4gICAgY29uc3QgY29udGFjdDIgPSBuZXcgQ3JlYXRlQ29udGFjdENhcmQoJ1JvbWl0JyAsICdNYW5hZ2VyJyAsICc1NTUtNjY2LTc3NzYnLCAncm9taXQuc29tZXRoaW5nQGdtYWlsLmNvbScpO1xuICAgIGNvbnRhY3RDb21wTm9kZS5hcHBlbmQoY29udGFjdDIuY29udGFjdENhcmROb2RlKTtcblxuICAgIGNvbnN0IGNvbnRhY3QzID0gbmV3IENyZWF0ZUNvbnRhY3RDYXJkKCdHb2xkaScgLCAnV2FpdGVyJyAsICc1NTUtNjY2LTc3NzgnLCAnZ29sZGkuc29tZXRoaW5nQGdtYWlsLmNvbScpO1xuICAgIGNvbnRhY3RDb21wTm9kZS5hcHBlbmQoY29udGFjdDMuY29udGFjdENhcmROb2RlKTtcbiAgICByZXR1cm4gY29udGFjdENvbXBOb2RlO1xuICB9XG4gIFxuICBmdW5jdGlvbiBnZXRDb250YWN0SGVhZGVyKCl7XG4gICAgY29uc3QgY29udGFjdEhlYWRlckVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RIZWFkZXJFbGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1uYW1lLWNvbnRhaW5lcicpO1xuICAgY29uc3QgY29udGFjdEhlYWRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBjb250YWN0SGVhZGVyTGFiZWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1uYW1lJyk7XG4gICBjb250YWN0SGVhZGVyTGFiZWwudGV4dENvbnRlbnQgPSBcImNvbnRhY3RcIjtcblxuICAgY29udGFjdEhlYWRlckVsZS5hcHBlbmQoY29udGFjdEhlYWRlckxhYmVsKTtcbiAgIHJldHVybiBjb250YWN0SGVhZGVyRWxlO1xufVxuY2xhc3MgQ3JlYXRlQ29udGFjdENhcmQge1xuICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkZXNpZ25hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2lnbmF0aW9uLCBjb250YWN0LCBlbWFpbCl7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jYXJkLWNvbnRhaW5lcicpO1xuICAgIHRoaXMuY29udGFjdE5vZGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1jbGFzcycpXG4gICAgdGhpcy5uYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLmRlc2lnbmF0aW9uLnRleHRDb250ZW50PWRlc2lnbmF0aW9uO1xuICAgIHRoaXMuZW1haWwudGV4dENvbnRlbnQ9ZW1haWw7XG4gICAgdGhpcy5jb250YWN0LnRleHRDb250ZW50PWNvbnRhY3Q7XG4gICAgdGhpcy5jb250YWN0Tm9kZS5hcHBlbmQodGhpcy5uYW1lKTtcbiAgICB0aGlzLmNvbnRhY3ROb2RlLmFwcGVuZCh0aGlzLmRlc2lnbmF0aW9uKTtcbiAgICB0aGlzLmNvbnRhY3ROb2RlLmFwcGVuZCh0aGlzLmNvbnRhY3QpO1xuICAgIHRoaXMuY29udGFjdE5vZGUuYXBwZW5kKHRoaXMuZW1haWwpO1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZCh0aGlzLmNvbnRhY3ROb2RlKTtcbiAgfVxuXG4gIGdldCBjb250YWN0Q2FyZE5vZGUgKCl7XG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyXG4gIH1cbn1cbiAgZXhwb3J0IGRlZmF1bHQgY29udGFjdENvbXBvbmVudCIsImZ1bmN0aW9uIGhvbWVDb21wb25lbnQoKXtcbiAgY29uc3QgaG9tZUNvbXBOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZ2V0UmVzdGF1cmFudE5hbWVFbGVtZW50KCk7XG4gIGhvbWVDb21wTm9kZS5hcHBlbmQocmVzdGF1cmFudE5hbWUpO1xuICBjb25zdCBzdW1tYXJ5ID0gZ2V0U3VtbWFyeUVsZW1lbnQoKTtcbiAgaG9tZUNvbXBOb2RlLmFwcGVuZChzdW1tYXJ5KTtcbiAgY29uc3QgdGltaW5ncyA9IGdldFRpbWluZ3NFbGVtZW50KCk7XG4gIGhvbWVDb21wTm9kZS5hcHBlbmQodGltaW5ncyk7XG4gIGNvbnN0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb25FbGVtZW50KCk7XG4gIGhvbWVDb21wTm9kZS5hcHBlbmQobG9jYXRpb24pO1xuICByZXR1cm4gaG9tZUNvbXBOb2RlXG59XG5cbmZ1bmN0aW9uIGdldFJlc3RhdXJhbnROYW1lRWxlbWVudCgpe1xuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmVzdGF1cmFudE5hbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1uYW1lLWNvbnRhaW5lcicpO1xuICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtbmFtZScpO1xuICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkJlYXJ5J3MgQnJlYWtmYXN0IEJhclwiO1xuXG4gICByZXN0YXVyYW50TmFtZUNvbnRhaW5lci5hcHBlbmQocmVzdGF1cmFudE5hbWUpO1xuICAgcmV0dXJuIHJlc3RhdXJhbnROYW1lQ29udGFpbmVyO1xufVxuZnVuY3Rpb24gZ2V0U3VtbWFyeUVsZW1lbnQoKXtcbiAgICBjb25zdCBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VtbWFyeS5jbGFzc0xpc3QuYWRkKCdzdW1tYXJ5Jyk7XG4gICAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJldmlldy50ZXh0Q29udGVudCA9IFwiQmVhcnkncyBoYXMgdGhlIGJlc3QgcG9ycmlkZ2UhIFRoZSBhdG1vc3BoZXJlIGFuZCBjdXN0b21lciBzZXJ2aWNlIG1ha2UgeW91IGZlZWwgbGlrZSB5b3UgYXJlIHNpdHRpbmcgaW4gdGhlIG1pZGRsZSBvZiB0aGUgd29vZHMsIGVhdGluZyBsaWtlIGEgYmVhciEgVGhpcyBpcyBleGFjdGx5IHRoZSBraW5kIG9mIHBsYWNlIHRoYXQgSSBsaWtlIHRvIHJldHVybiB0byBhZ2FpbiBhbmQgYWdhaW4uXCI7XG4gICAgY29uc3QgY3VzdG9tZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY3VzdG9tZXIudGV4dENvbnRlbnQgPSBcIi0gU2FoaWxcIjtcbiAgICBzdW1tYXJ5LmFwcGVuZChyZXZpZXcpO1xuICAgIHN1bW1hcnkuYXBwZW5kKGN1c3RvbWVyKTtcbiAgICByZXR1cm4gc3VtbWFyeTtcbiAgICBcbn1cbmZ1bmN0aW9uIGdldFRpbWluZ3NFbGVtZW50KCl7XG4gICBjb25zdCB0aW1pbmdzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgdGltaW5nc05vZGUuY2xhc3NMaXN0LmFkZCgndGltaW5ncycpO1xuICAgdGltaW5nc05vZGUuaW5uZXJIVE1MID1gPGgzIGNsYXNzPVwiaG91cnNcIj5Ib3VyczwvaDM+XG4gICA8cCBjbGFzcz1cInN1bmRheSBkYXlcIj5TdW5kYXk6IDhhbSAtIDhwbTwvcD5cbiAgIDxwIGNsYXNzPVwibW9uZGF5IGRheVwiPk1vbmRheTogNmFtIC0gNnBtPC9wPlxuICAgPHAgY2xhc3M9XCJ0dWVzZGF5IGRheVwiPlR1ZXNkYXk6IDZhbSAtIDZwbTwvcD5cbiAgIDxwIGNsYXNzPVwid2VkbmVzZGF5IGRheVwiPldlZG5lc2RheTogNmFtIC0gNnBtPC9wPlxuICAgPHAgY2xhc3M9XCJ0aHVyc2RheSBkYXlcIj5UaHVyc2RheTogNmFtIC0gMTBwbTwvcD5cbiAgIDxwIGNsYXNzPVwiZnJpZGF5IGRheVwiPkZyaWRheTogNmFtIC0gMTBwbTwvcD5cbiAgIDxwIGNsYXNzPVwic2F0dXJkYXkgZGF5XCI+U2F0dXJkYXk6IDhhbSAtIDEwcG08L3A+XG4gICBgXG4gICByZXR1cm4gdGltaW5nc05vZGVcblxufVxuZnVuY3Rpb24gZ2V0TG9jYXRpb25FbGVtZW50KCl7XG4gICAgY29uc3QgbG9jYXRpb25Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb25Ob2RlLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb25Ob2RlLmlubmVySFRNTCA9YDxoMyBjbGFzcz1cImxvY2F0aW9uLWhlYWRlclwiPkxvY2F0aW9uPC9oMz5cbiAgICA8cCBjbGFzcz1cImFkZHJlc3NcIj4gMTAyLCBmb3Jlc3QgVmlsbGEgLCBIaW5qZXdhZGk8L3A+XG4gICAgYFxuICAgIHJldHVybiBsb2NhdGlvbk5vZGVcbn1cbmV4cG9ydCBkZWZhdWx0IGhvbWVDb21wb25lbnQiLCJpbXBvcnQgIGJlZUltZyBmcm9tICcuLi9hc3Nlc3RzL2JlZTEucG5nJztcbmltcG9ydCBob25lQ29tYkltZyBmcm9tICcuLi9hc3Nlc3RzL2hvbmV5Y29tYi5wbmcnO1xuaW1wb3J0IGhvbmV5VGVhSW1nIGZyb20gJy4uL2Fzc2VzdHMvaG9uZXlUZWEuanBnJztcbmltcG9ydCBiZXJyeVRlYUltZyBmcm9tICcuLi9hc3Nlc3RzL2JlcnJ5VGVhLmpwZyc7XG5pbXBvcnQgeyBDcmVhdGVDYXJkLENyZWF0ZUltYWdlTm9kZX0gZnJvbSAnLi4vdXRpbGl0aWVzL3V0aWxpdGllcy5qcydcblxuZnVuY3Rpb24gbWVudUNvbXBvbmVudCgpe1xuICAgIGNvbnN0IG1lbnVDb21wTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb21wTm9kZS5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGdldE1lbnVIZWFkZXJFbGVtZW50KClcbiAgICBtZW51Q29tcE5vZGUuYXBwZW5kKG1lbnVIZWFkZXIpXG5cbiAgICBjcmVhdGVCZXZlcmFnZXNTZWN0aW9uKG1lbnVDb21wTm9kZSk7XG4gICAgY3JlYXRlU2lkZXNTZWN0aW9uKG1lbnVDb21wTm9kZSk7XG4gICAgY3JlYXRlTWFpbkRpc2hlc1NlY3Rpb24obWVudUNvbXBOb2RlKTtcbiAgICByZXR1cm4gbWVudUNvbXBOb2RlO1xuICB9XG5cbiBcbiAgZnVuY3Rpb24gZ2V0TWVudUhlYWRlckVsZW1lbnQoKXtcbiAgICBjb25zdCBtZW51SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LW5hbWUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51TmFtZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVOYW1lQm94LmNsYXNzTGlzdC5hZGQoJ21lbnUtbmFtZS1ib3gnKTtcblxuICAgIGNvbnN0IGltZzEgPSBuZXcgQ3JlYXRlSW1hZ2VOb2RlKGJlZUltZywnYmVlLWltYWdlMScpO1xuICAgIFxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtbmFtZScpO1xuICAgIG1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBgTWVudWA7XG5cbiAgICBjb25zdCBpbWcyID0gbmV3IENyZWF0ZUltYWdlTm9kZShiZWVJbWcsJ2JlZS1pbWFnZTInKTtcblxuICAgIG1lbnVOYW1lQm94LmFwcGVuZChpbWcxLmltYWdlTm9kZSk7XG4gICAgbWVudU5hbWVCb3guYXBwZW5kKG1lbnVIZWFkZXIpO1xuICAgIG1lbnVOYW1lQm94LmFwcGVuZChpbWcyLmltYWdlTm9kZSk7XG4gICAgbWVudUhlYWRlckNvbnRhaW5lci5hcHBlbmQobWVudU5hbWVCb3gpO1xuICAgIHJldHVybiBtZW51SGVhZGVyQ29udGFpbmVyO1xufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQmV2ZXJhZ2VzU2VjdGlvbihwYXJlbnROb2RlKXtcbiAgY29uc3QgYmV2ZXJhZ2VDYXRlZ29yeSA9IG5ldyBDcmVhdGVNZW51Q2F0ZWdvcnkoJ0JldmVyYWdlcycpO1xuICBwYXJlbnROb2RlLmFwcGVuZChiZXZlcmFnZUNhdGVnb3J5Lm1lbnVDYXRlZ29yeU5vZGUpO1xuXG4gIGNvbnN0IGhvbmV5VGVhRWxlID0gbmV3IENyZWF0ZUNhcmQoJ0hvbmV5IFRlYScsJ0Egd2FybSwgc3dlZXQgdGVhIG1hZGUgd2l0aCB0aGUgaGlnaGVzdCBxdWFsaXR5IGhvbmV5IGFuZCBhIGJpdCBvZiBsZW1vbiB0byBzdGFydCB5b3VyIGRheSBvZmYgcmlnaHQhJywnMzAgUnMnLGhvbmV5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQoaG9uZXlUZWFFbGUubm9kZSk7XG5cbiAgY29uc3QgYmVycnlUZWFFbGUgPSBuZXcgQ3JlYXRlQ2FyZCgnQmVycnkgVGVhJywnQSBjb21mb3J0aW5nLCBhbG1vc3QgZmlsbGluZywgdGVhIHRoYXQgaXMgaW5mdXNlZCB3aXRoIHRoZSBmbGF2b3JzIG9mIHNldmVyYWwga2luZHMgb2YgYmVycmllcy4gQmVzdCBzZXJ2ZWQgY29sZCwgYnV0IGNhbiBiZSBzZXJ2ZWQgaG90IG9uIHJlcXVlc3QuJywnNDAgUnMnLGJlcnJ5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQoYmVycnlUZWFFbGUubm9kZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVzU2VjdGlvbihwYXJlbnROb2RlKXtcbiAgY29uc3Qgc2lkZXNDYXRlZ29yeSA9IG5ldyBDcmVhdGVNZW51Q2F0ZWdvcnkoJ1NpZGVzJyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKHNpZGVzQ2F0ZWdvcnkubWVudUNhdGVnb3J5Tm9kZSk7XG5cbiAgY29uc3QgaG9uZXlUZWFFbGUgPSBuZXcgQ3JlYXRlQ2FyZCgnVG9hc3QgQW5kIGphbScsJ0Egc2xpY2Ugb2YgdG9hc3QsIHlvdXIgY2hvaWNlIG9mIGJyZWFkLCBhbmQgb3VyIGhvbWVtYWRlIGJsYWNrYmVycnkgb3IgcmFzcGJlcnJ5IGphbS4nLCc2MCBScycsaG9uZXlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChob25leVRlYUVsZS5ub2RlKTtcblxuICBjb25zdCBiZXJyeVRlYUVsZSA9IG5ldyBDcmVhdGVDYXJkKCdGcmVzaCBGcnVpdHMnLCdBIHNtYWxsIGJvd2wgb2YgZnJlc2ggZnJ1aXQsIHdoYXRldmVyIHdlIGZpbmQgYXQgdGhlIG1hcmtldCBmb3IgdGhlIGRheS4nLCc1MCBScycsYmVycnlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChiZXJyeVRlYUVsZS5ub2RlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbkRpc2hlc1NlY3Rpb24ocGFyZW50Tm9kZSl7XG4gIGNvbnN0IG1haW5EaXNoZXNDYXRlZ29yeSA9IG5ldyBDcmVhdGVNZW51Q2F0ZWdvcnkoJ01haW4gRGlzaGVzJyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKG1haW5EaXNoZXNDYXRlZ29yeS5tZW51Q2F0ZWdvcnlOb2RlKTtcblxuICBjb25zdCBwYW5DYWtlc0VsZSA9IG5ldyBDcmVhdGVDYXJkKCdQYW4gQ2FrZXMnLCdBIHN0YWNrIG9mIGhvbWVtYWRlIGJ1dHRlcm1pbGsgcGFuY2FrZXMsIHNlcnZlZCB3aXRoIG91ciBsb2NhbGx5IHNvdXJjZWQgbWFwbGUgc3lydXAuJywnMTYwIFJzJyxob25leVRlYUltZyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKHBhbkNha2VzRWxlLm5vZGUpO1xuXG4gIGNvbnN0IGZyZW5jaFRvYXN0RWxlID0gbmV3IENyZWF0ZUNhcmQoJ0ZyZW5jaCBUb2FzdCcsJ1R3byBzbGljZXMgb2YgdGhlIGJlc3QgZnJlbmNoIHRvYXN0IHlvdSB3aWxsIGV2ZXIgZWF0LCBzZXJ2ZWQgd2l0aCBvdXIgbG9jYWxseSBzb3VyY2VkIG1hcGxlIHN5cnVwLicsJzE1MCBScycsYmVycnlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChmcmVuY2hUb2FzdEVsZS5ub2RlKTtcblxuICBjb25zdCBiZWFyeVZlZ2dpZVNhbmR3aWNoRWxlID0gbmV3IENyZWF0ZUNhcmQoJ0JlYXJ5IFZlZ2dpZSBTYW5kd2ljaCcsJ0RvIHlvdSBsaWtlIHZlZ2V0YWJsZXM/IFRoZW4gdGhpcyBpcyB0aGUgc2FuZHdpY2ggZm9yIHlvdSEgU3R1ZmZlZCBmdWxsIG9mIGEgdmFyaWV0eSBvZiBmcmVzaCBwcm9kdWNlLCBpdCB3aWxsIGZpbGwgeW91IHVwLicsJzI2MCBScycsaG9uZXlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChiZWFyeVZlZ2dpZVNhbmR3aWNoRWxlLm5vZGUpO1xuXG4gIGNvbnN0IGJhZ2VsQW5kTG94ID0gbmV3IENyZWF0ZUNhcmQoJ0JhZ2VsIGFuZCBMb3gnLCdPdXIgaG91c2Ugc3BlY2lhbHR5LCB5b3UgY2FudCBnbyB3cm9uZyB3aXRoIGEgaGVhcnR5IGJhZ2VsIHRvcHBlZCB3aXRoIHN1c3RhaW5hYmx5IGhhcnZlc3RlZCBzYWxtb24uJywnMjUwIFJzJyxiZXJyeVRlYUltZyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKGJhZ2VsQW5kTG94Lm5vZGUpO1xuXG4gIGNvbnN0IGhvbmV5Q29tYkVsZSA9IG5ldyBDcmVhdGVDYXJkKCdIb25leWNvbWInLCdBcmUgeW91IGEgYmVhciBsaWtlIHVzPyBUaGVuIHlvdSB3aWxsIGxvdmUgb3VyIGhvbmV5Y29tYi4gQW5kLCB5ZXMgaHVtYW5zLCBpdCBpcyBqdXN0IGEgcGllY2Ugb2YgaG9uZXljb21iLCBub3QgdGhlIHBvcHVsYXIgYnJlYWtmYXN0IGNlcmVhbC4nLCcxNjAgUnMnLGhvbmV5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQoaG9uZXlDb21iRWxlLm5vZGUpO1xuXG4gIGNvbnN0IHRoZUJlYXJ5QmVzdFBvcnJpZGdlRWxlID0gbmV3IENyZWF0ZUNhcmQoJ1RoZSBCZWFyeSBCZXN0IFBvcnJpZGdlJywnTWFkZSBieSBCYWJ5IEJlYXIgaGltc2VsZiwgdGhpcyBwb3JyaWRnZSBpcyBndWFyZW50ZWVkIHRvIGJlIGp1c3QgcmlnaHQsIG9yIHlvdXIgbW9uZXkgYmFjay4nLCcxNTAgUnMnLGJlcnJ5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQodGhlQmVhcnlCZXN0UG9ycmlkZ2VFbGUubm9kZSk7XG4gIFxufVxuXG5jbGFzcyBDcmVhdGVNZW51Q2F0ZWdvcnkge1xuICBiZXZlcmFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiZXZlcmFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGltZyA9IG5ldyBDcmVhdGVJbWFnZU5vZGUoaG9uZUNvbWJJbWcsJ2JyZXYtaG9uZXktY29tYicpO1xuICBjb25zdHJ1Y3RvcihsYWJlbCl7XG4gICB0aGlzLmJldmVyYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2F0ZWdvcnktY29udGFpbmVyJyk7XG4gICB0aGlzLmJldmVyYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtbGFiZWwnKTtcbiAgIHRoaXMuYmV2ZXJhZ2UudGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgIHRoaXMuYmV2ZXJhZ2VDb250YWluZXIuYXBwZW5kKHRoaXMuYmV2ZXJhZ2UpO1xuICAgdGhpcy5iZXZlcmFnZUNvbnRhaW5lci5hcHBlbmQodGhpcy5pbWcuaW1hZ2VOb2RlKTtcbiAgfVxuICBnZXQgbWVudUNhdGVnb3J5Tm9kZSAoKXtcbiAgICByZXR1cm4gdGhpcy5iZXZlcmFnZUNvbnRhaW5lcjtcbiAgfVxufVxuICBleHBvcnQgZGVmYXVsdCBtZW51Q29tcG9uZW50IiwiZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCl7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIFxuICAgIGNvbnN0IGhlYWRlck5vZGUgPSBjcmVhdGVIZWFkZXJOb2RlKCk7XG4gICAgY29uc3QgbWFpbk5vZGUgPSBjcmVhdGVNYWluTm9kZSgpO1xuICAgIGNvbnN0IGZvb3Rlck5vZGUgPSBjcmVhdGVGb290ZXJOb2RlKCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlck5vZGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobWFpbk5vZGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoZm9vdGVyTm9kZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlck5vZGUgKCl7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lLXRhYicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUtdGFiJyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10YWInKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgICBoZWFkZXIuYXBwZW5kKGhvbWUpO1xuICAgIGhlYWRlci5hcHBlbmQobWVudSk7XG4gICAgaGVhZGVyLmFwcGVuZChjb250YWN0KTtcbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluTm9kZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlck5vZGUoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYDx1bD5cbiAgICA8bGk+XG4gICAgICA8YSBjbGFzcz1cImF0dHJpYnV0aW9uIGljb25zMlwiIGhyZWY9XCJodHRwOi8vd3d3LmZyZWVwaWsuY29tXCIgdGl0bGU9XCJGcmVlcGlrXCI+SGl2ZSBpY29uIG1hZGUgYnkgRnJlZXBpayAtIHd3dy5mbGF0aWNvbi5jb208L2E+XG4gICAgPC9saT5cbiAgICA8bGk+XG4gICAgICA8YSBjbGFzcz1cImF0dHJpYnV0aW9uIGljb25zXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9hdXRob3JzL3NtYXNoaWNvbnNcIiB0aXRsZT1cIlNtYXNoaWNvbnNcIj5CZWUgaWNvbnMgbWFkZSBieSBTbWFzaGljb25zIC0gd3d3LmZsYXRpY29uLmNvbTwvYT5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGNsYXNzPVwiYXR0cmlidXRpb25cIiBocmVmPVwiaHR0cHM6Ly93d3cuZnJlZXBpay5jb20vdmVjdG9ycy9mb29kXCI+QmFja2dyb3VuZCBpbWFnZSBjcmVhdGVkIGJ5IGRnaW0tc3R1ZGlvIC0gd3d3LmZyZWVwaWsuY29tPC9hPlxuICAgIDwvbGk+XG4gIDwvdWw+YDtcbiAgICByZXR1cm4gZm9vdGVyO1xufVxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbFBhZ2VMb2FkO1xuXG4iLCIgY2xhc3MgQ3JlYXRlQ2FyZCB7XG4gICAgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZztcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxzdW1tYXJ5LHByaWNlLGltZyl7XG4gICAgICB0aGlzLmNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlLFxuICAgICAgdGhpcy5zdW1tYXJ5LnRleHRDb250ZW50ID0gc3VtbWFyeTtcbiAgICAgIHRoaXMucHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcbiAgICAgIHRoaXMuaW1nID0gbmV3IENyZWF0ZUltYWdlTm9kZShpbWcsJ2NhcmQtaW1hZ2UnKVxuICAgICAgdGhpcy5jYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgIHRoaXMuY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgICAgIHRoaXMuc3VtbWFyeS5jbGFzc0xpc3QuYWRkKCdjYXJkLXN1bW1hcnknKTtcbiAgICAgIHRoaXMucHJpY2UuY2xhc3NMaXN0LmFkZCgnY2FyZC1wcmljZScpO1xuICAgICAgdGhpcy5jYXJkLmFwcGVuZCh0aGlzLmNhcmRUaXRsZSk7XG4gICAgICB0aGlzLmNhcmQuYXBwZW5kKHRoaXMuc3VtbWFyeSk7XG4gICAgICB0aGlzLmNhcmQuYXBwZW5kKHRoaXMucHJpY2UpO1xuICAgICAgdGhpcy5jYXJkLmFwcGVuZCh0aGlzLmltZy5pbWFnZU5vZGUpO1xuICAgIH1cbiAgICBnZXQgbm9kZSAoKXtcbiAgICAgIHJldHVybiB0aGlzLmNhcmQ7XG4gICAgfVxuICB9XG5cbiAgY2xhc3MgQ3JlYXRlSW1hZ2VOb2RlIHtcbiAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3RydWN0b3Ioc3JjLGNsYXNzbmFtZSl7XG4gICAgICB0aGlzLm5vZGUuc3JjID1zcmM7XG4gICAgICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc25hbWUpO1xuICAgIH1cbiAgICBnZXQgaW1hZ2VOb2RlKCl7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCB7Q3JlYXRlQ2FyZCxDcmVhdGVJbWFnZU5vZGV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgaW5pdGlhbFBhZ2VMb2FkIGZyb20gXCIuL2luaXRpYWxQYWdlTG9hZFwiO1xuaW1wb3J0IGhvbWVDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lQ29tcG9uZW50XCI7XG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL21lbnVDb21wb25lbnRcIjtcbmltcG9ydCBjb250YWN0Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFjdENvbXBvbmVudFwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGh0bWxMYXlvdXQgPSBpbml0aWFsUGFnZUxvYWQoKTtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29udGVudC5hcHBlbmQoaHRtbExheW91dCk7XG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS10YWInKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS10YWInKTtcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC10YWInKTtcblxuY29uc3QgaG9tZU5vZGUgPSBob21lQ29tcG9uZW50KCk7XG5jb25zdCBtZW51Tm9kZSA9IG1lbnVDb21wb25lbnQoKTtcbmNvbnN0IGNvbnRhY3ROb2RlID0gY29udGFjdENvbXBvbmVudCgpO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuaWYobWFpbil7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4obWFpbik7XG4gICAgbWFpbi5hcHBlbmQoaG9tZU5vZGUpO1xufVxuXG5cbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgaWYodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkLXRhYicpKSAgcmV0dXJuO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgIHJlbW92ZUFsbENoaWxkcmVuKG1haW4pO1xuICAgIG1haW4uYXBwZW5kKGhvbWVOb2RlKTtcblxufSlcblxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQtdGFiJykpICByZXR1cm47XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICBob21lVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4obWFpbik7XG4gICAgbWFpbi5hcHBlbmQobWVudU5vZGUpO1xufSlcblxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQtdGFiJykpICByZXR1cm47XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4obWFpbik7XG4gICAgbWFpbi5hcHBlbmQoY29udGFjdE5vZGUpO1xufSlcblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGRyZW4ocGFyZW50KXtcbiAgICB3aGlsZShwYXJlbnQuaGFzQ2hpbGROb2RlcygpKXtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9