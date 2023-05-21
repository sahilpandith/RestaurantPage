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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    height: 100vh;\n    font-family: \"Yusei Magic\", sans-serif;    \n}\n:root {\n    --khaki : #ffde73;\n    --orange-1 :#eca43a;\n    --orange-2: #c16a0a;\n    --yellow-1:#ffc60c;\n    --font-600:600;\n}\n#content {\n    height: 100%;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\nheader {\n    display : flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n    background: var(--khaki);\n    padding: 10px;\n    padding-bottom: 0px;\n}\nmain {\n    flex:1;\n    background : url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n}\n\nmain > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--khaki);\n    padding: 30px;\n}\n\n.attribution {\n    color: black;\n    font-size: 12px;\n    text-decoration: none;\n}\n.home-tab,.menu-tab,.contact-tab {\n    border: 1px solid black;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: none;\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\n\n.selected-tab {\n    background: var(--orange-1);\n}\n.restaurant-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.restaurant-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.restaurant-name::after{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.restaurant-name::before{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.summary{\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.summary p {\n    font-weight: var(--font-600);\n}\n/* .summary:nth-child(2) {\n    font-weight: 14px;\n} */\n\n.summary::before {\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: inline-block;\n    position: relative;\n    top: -48px;\n    left: 63px;\n    margin-bottom: -37px;\n}\n\n.timings {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.day {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n.location {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.address {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n\n.menu-name-container {\n    padding: 10px;\n    background :var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n}\n\n.menu-name-box {\n    width: 400px;\n    display: flex;\n    padding: 10px;\n    font-size: 30px;\n    justify-content: space-between;\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n.menu-name {\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n}\n.bee-image1,.bee-image2 {\n    width: 50px; \n    height: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n}\n\n.bee-image2 {\n    transform: rotateZ(90deg);\n}\n\n.menu-category-container {\n    margin-top: 45px;\n    padding: 10px;\n    background: var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n    position: relative;\n}\n\n.menu-label {\n    width: 300px;\n    display: flex;\n    padding: 20px;\n    font-size: 30px;\n    justify-content: center;\n    background: var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n    margin: 0px;\n}\n\n.brev-honey-comb {\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    top: 32px;\n    right: 1px;\n    z-index: 1;\n}\n\n.card {\n width: 250px;\n height: 400px;\n border: 8px solid var(--orange-2);\n display: grid;\n grid-template-columns: 1fr 1fr 1fr;\n grid-template-rows: repeat(8,1fr);\n gap: 5px;\n padding: 5px;\n border-radius: 17px;\n margin: 15px;\n    background: var(--yellow-1);\n}\n\n.card-title {\n    grid-column: 1/4;\n    grid-row: 1/2;\n}\n.card-summary{\n    grid-column: 1/4;\n    grid-row: 2/5;\n    padding: 5px;\n    padding-left: 20px;\n}\n.card-price {\n    grid-column: 1/2;\n    grid-row: 5/9;\n    font-weight: var(--font-600);\n}\n.card-image {\n    grid-column: 2/4;\n    grid-row: 5/9;\n    height: 165px;\n    width: 150px;\n    border: 1px solid var(--orange-2);\n    border-radius: 17px;\n}\n\n.contact-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.contact-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.contact-name::after{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.contact-name::before{\n    content: '';\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.contact-card-container{\n    border: 8px solid var(--orange-2);\n    margin-top: 40px;\n    clip-path: polygon(5% 0, 95% 0%, 100% 15%, 100% 92%, 90% 102%, 6% 100%, 0 89%, 0 15%);\n    background: var(--yellow-1);\n    font-size: 17px;\n    font-weight: 600;\n}\n.contact-class {\n    padding: 10px;\n    border: 8px solid var(--orange-2);\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    grid-template-rows: 2fr 1fr;\n    gap: 2px;\n}\n\n.contact-class div:nth-child(1){\n    grid-column: 1/3;\n}\n.contact-class div:nth-child(2){\n    grid-column: 2/3;\n}\n\n.contact-class div:nth-child(3){\n    grid-column: 2/3;\n}\n\n.contact-class div:nth-child(4){\n    grid-column: 2/3;\n}\n\n\nfooter{\n    background: var(--khaki);\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\nfooter ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\nfooter ul li {\n    flex: 1;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0px;\n    height: 100vh;\n    font-family: \"Yusei Magic\", sans-serif;    \n}\n:root {\n    --khaki : #ffde73;\n    --orange-1 :#eca43a;\n    --orange-2: #c16a0a;\n    --yellow-1:#ffc60c;\n    --font-600:600;\n}\n#content {\n    height: 100%;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\nheader {\n    display : flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 10px;\n    background: var(--khaki);\n    padding: 10px;\n    padding-bottom: 0px;\n}\nmain {\n    flex:1;\n    background : url('./assests/honeyBG2.jpg');\n    background-size: cover;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n}\n\nmain > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: var(--khaki);\n    padding: 30px;\n}\n\n.attribution {\n    color: black;\n    font-size: 12px;\n    text-decoration: none;\n}\n.home-tab,.menu-tab,.contact-tab {\n    border: 1px solid black;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: none;\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\n\n.selected-tab {\n    background: var(--orange-1);\n}\n.restaurant-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.restaurant-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.restaurant-name::after{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.restaurant-name::before{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.summary{\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.summary p {\n    font-weight: var(--font-600);\n}\n/* .summary:nth-child(2) {\n    font-weight: 14px;\n} */\n\n.summary::before {\n    content: '';\n    background-image: url(./assests/honeycomb.png);\n    width: 50px;\n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: inline-block;\n    position: relative;\n    top: -48px;\n    left: 63px;\n    margin-bottom: -37px;\n}\n\n.timings {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.day {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n.location {\n    width: 200px;\n    height: auto;\n    border: 8px solid var(--orange-2);\n    padding: 20px;\n    font-size: 14px;\n    margin-top: 40px;\n    border-radius: 30%;\n    background : var(--yellow-1);\n}\n\n.address {\n    text-align: center;\n    font-weight: var(--font-600);\n    margin: 3px;\n}\n\n\n.menu-name-container {\n    padding: 10px;\n    background :var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n}\n\n.menu-name-box {\n    width: 400px;\n    display: flex;\n    padding: 10px;\n    font-size: 30px;\n    justify-content: space-between;\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n.menu-name {\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n}\n.bee-image1,.bee-image2 {\n    width: 50px; \n    height: 50px;\n    padding-right: 10px;\n    padding-left: 10px;\n}\n\n.bee-image2 {\n    transform: rotateZ(90deg);\n}\n\n.menu-category-container {\n    margin-top: 45px;\n    padding: 10px;\n    background: var(--orange-2);\n    clip-path: polygon(22% 1%, 73% 0, 100% 25%, 100% 73%, 76% 99%, 23% 100%, 0 76%, 0 29%);\n    position: relative;\n}\n\n.menu-label {\n    width: 300px;\n    display: flex;\n    padding: 20px;\n    font-size: 30px;\n    justify-content: center;\n    background: var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n    margin: 0px;\n}\n\n.brev-honey-comb {\n    height: 40px;\n    width: 40px;\n    position: absolute;\n    top: 32px;\n    right: 1px;\n    z-index: 1;\n}\n\n.card {\n width: 250px;\n height: 400px;\n border: 8px solid var(--orange-2);\n display: grid;\n grid-template-columns: 1fr 1fr 1fr;\n grid-template-rows: repeat(8,1fr);\n gap: 5px;\n padding: 5px;\n border-radius: 17px;\n margin: 15px;\n    background: var(--yellow-1);\n}\n\n.card-title {\n    grid-column: 1/4;\n    grid-row: 1/2;\n}\n.card-summary{\n    grid-column: 1/4;\n    grid-row: 2/5;\n    padding: 5px;\n    padding-left: 20px;\n}\n.card-price {\n    grid-column: 1/2;\n    grid-row: 5/9;\n    font-weight: var(--font-600);\n}\n.card-image {\n    grid-column: 2/4;\n    grid-row: 5/9;\n    height: 165px;\n    width: 150px;\n    border: 1px solid var(--orange-2);\n    border-radius: 17px;\n}\n\n.contact-name-container {\n    background :var(--orange-2);\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\n}\n.contact-name {\n    display: flex;\n    align-items: center;\n    border: 8px solid var(--orange-2);\n    padding: 10px;\n    font-size: 30px;\n    font-weight: var(--font-600);\n    background : var(--yellow-1);\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\n}\n\n.contact-name::after{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    background-repeat: no-repeat;\n    width: 50px; \n    height: 50px;\n    background-size: cover;\n    transform: rotate(90deg);\n}\n\n.contact-name::before{\n    content: '';\n    background-image: url(./assests/bee1.png);\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.contact-card-container{\n    border: 8px solid var(--orange-2);\n    margin-top: 40px;\n    clip-path: polygon(5% 0, 95% 0%, 100% 15%, 100% 92%, 90% 102%, 6% 100%, 0 89%, 0 15%);\n    background: var(--yellow-1);\n    font-size: 17px;\n    font-weight: 600;\n}\n.contact-class {\n    padding: 10px;\n    border: 8px solid var(--orange-2);\n    display: grid;\n    grid-template-columns: 50px 1fr;\n    grid-template-rows: 2fr 1fr;\n    gap: 2px;\n}\n\n.contact-class div:nth-child(1){\n    grid-column: 1/3;\n}\n.contact-class div:nth-child(2){\n    grid-column: 2/3;\n}\n\n.contact-class div:nth-child(3){\n    grid-column: 2/3;\n}\n\n.contact-class div:nth-child(4){\n    grid-column: 2/3;\n}\n\n\nfooter{\n    background: var(--khaki);\n    padding: 10px;\n    font-weight: var(--font-600);\n    font-size: 20px;\n}\nfooter ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\nfooter ul li {\n    flex: 1;\n}\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFX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aUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQ3BEakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTztBQUNBO0FBQ007QUFDeEM7O0FBRXJCLG1CQUFtQiw0REFBZTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIscUVBQWE7QUFDOUIsaUJBQWlCLHFFQUFhO0FBQzlCLG9CQUFvQix3RUFBZ0I7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0Q29tcG9uZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5pdGlhbFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3V0aWxpdGllcy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3Nlc3RzL2hvbmV5QkcyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy9iZWUxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy9ob25leWNvbWIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmOyAgICBcXG59XFxuOnJvb3Qge1xcbiAgICAtLWtoYWtpIDogI2ZmZGU3MztcXG4gICAgLS1vcmFuZ2UtMSA6I2VjYTQzYTtcXG4gICAgLS1vcmFuZ2UtMjogI2MxNmEwYTtcXG4gICAgLS15ZWxsb3ctMTojZmZjNjBjO1xcbiAgICAtLWZvbnQtNjAwOjYwMDtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG5tYWluIHtcXG4gICAgZmxleDoxO1xcbiAgICBiYWNrZ3JvdW5kIDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbm1haW4gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1raGFraSk7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5hdHRyaWJ1dGlvbiB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5ob21lLXRhYiwubWVudS10YWIsLmNvbnRhY3QtdGFiIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uc2VsZWN0ZWQtdGFiIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLTEpO1xcbn1cXG4ucmVzdGF1cmFudC1uYW1lLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQgOnZhcigtLW9yYW5nZS0yKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDE3JSAxJSwgODElIDAsIDEwMCUgMjMlLCAxMDAlIDc3JSwgODQlIDk5JSwgMTYlIDEwMCUsIDAgODAlLCAwIDI3JSk7XFxufVxcbi5yZXN0YXVyYW50LW5hbWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI0JSAwLCA3MiUgMCwgMTAwJSAzMiUsIDEwMCUgNjglLCA3NiUgMTAwJSwgMjMlIDEwMCUsMCA3MiUsIDAgMzQlKTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZTo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWU6OmJlZm9yZXtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zdW1tYXJ5e1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLnN1bW1hcnkgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxufVxcbi8qIC5zdW1tYXJ5Om50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxNHB4O1xcbn0gKi9cXG5cXG4uc3VtbWFyeTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00OHB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMzdweDtcXG59XFxuXFxuLnRpbWluZ3Mge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLmRheSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbn1cXG5cXG4uYWRkcmVzcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcblxcbi5tZW51LW5hbWUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZCA6dmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjIlIDElLCA3MyUgMCwgMTAwJSAyNSUsIDEwMCUgNzMlLCA3NiUgOTklLCAyMyUgMTAwJSwgMCA3NiUsIDAgMjklKTtcXG59XFxuXFxuLm1lbnUtbmFtZS1ib3gge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbn1cXG4ubWVudS1uYW1lIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbn1cXG4uYmVlLWltYWdlMSwuYmVlLWltYWdlMiB7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5iZWUtaW1hZ2UyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcXG59XFxuXFxuLm1lbnUtY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjIlIDElLCA3MyUgMCwgMTAwJSAyNSUsIDEwMCUgNzMlLCA3NiUgOTklLCAyMyUgMTAwJSwgMCA3NiUsIDAgMjklKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWVudS1sYWJlbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmJyZXYtaG9uZXktY29tYiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICByaWdodDogMXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2FyZCB7XFxuIHdpZHRoOiAyNTBweDtcXG4gaGVpZ2h0OiA0MDBweDtcXG4gYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiBkaXNwbGF5OiBncmlkO1xcbiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LDFmcik7XFxuIGdhcDogNXB4O1xcbiBwYWRkaW5nOiA1cHg7XFxuIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxuIG1hcmdpbjogMTVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTEpO1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbi5jYXJkLXN1bW1hcnl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAyLzU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uY2FyZC1wcmljZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1Lzk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxufVxcbi5jYXJkLWltYWdlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDUvOTtcXG4gICAgaGVpZ2h0OiAxNjVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxufVxcblxcbi5jb250YWN0LW5hbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZCA6dmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTclIDElLCA4MSUgMCwgMTAwJSAyMyUsIDEwMCUgNzclLCA4NCUgOTklLCAxNiUgMTAwJSwgMCA4MCUsIDAgMjclKTtcXG59XFxuLmNvbnRhY3QtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbn1cXG5cXG4uY29udGFjdC1uYW1lOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLmNvbnRhY3QtbmFtZTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTBweDsgXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmNvbnRhY3QtY2FyZC1jb250YWluZXJ7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUlIDAsIDk1JSAwJSwgMTAwJSAxNSUsIDEwMCUgOTIlLCA5MCUgMTAyJSwgNiUgMTAwJSwgMCA4OSUsIDAgMTUlKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5jb250YWN0LWNsYXNzIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4uY29udGFjdC1jbGFzcyBkaXY6bnRoLWNoaWxkKDEpe1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG4uY29udGFjdC1jbGFzcyBkaXY6bnRoLWNoaWxkKDIpe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uY29udGFjdC1jbGFzcyBkaXY6bnRoLWNoaWxkKDMpe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG4uY29udGFjdC1jbGFzcyBkaXY6bnRoLWNoaWxkKDQpe1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbn1cXG5cXG5cXG5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWtoYWtpKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5mb290ZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHVsIGxpIHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLE1BQU07SUFDTixvREFBMEM7SUFDMUMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ks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Q1YsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiWXVzZWkgTWFnaWNcXFwiLCBzYW5zLXNlcmlmOyAgICBcXG59XFxuOnJvb3Qge1xcbiAgICAtLWtoYWtpIDogI2ZmZGU3MztcXG4gICAgLS1vcmFuZ2UtMSA6I2VjYTQzYTtcXG4gICAgLS1vcmFuZ2UtMjogI2MxNmEwYTtcXG4gICAgLS15ZWxsb3ctMTojZmZjNjBjO1xcbiAgICAtLWZvbnQtNjAwOjYwMDtcXG59XFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbmhlYWRlciB7XFxuICAgIGRpc3BsYXkgOiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG5tYWluIHtcXG4gICAgZmxleDoxO1xcbiAgICBiYWNrZ3JvdW5kIDogdXJsKCcuL2Fzc2VzdHMvaG9uZXlCRzIuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5tYWluID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4uYXR0cmlidXRpb24ge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaG9tZS10YWIsLm1lbnUtdGFiLC5jb250YWN0LXRhYiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnNlbGVjdGVkLXRhYiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS0xKTtcXG59XFxuLnJlc3RhdXJhbnQtbmFtZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kIDp2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigxNyUgMSUsIDgxJSAwLCAxMDAlIDIzJSwgMTAwJSA3NyUsIDg0JSA5OSUsIDE2JSAxMDAlLCAwIDgwJSwgMCAyNyUpO1xcbn1cXG4ucmVzdGF1cmFudC1uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxuICAgIGJhY2tncm91bmQgOiB2YXIoLS15ZWxsb3ctMSk7XFxuICAgIGNsaXAtcGF0aDogcG9seWdvbigyNCUgMCwgNzIlIDAsIDEwMCUgMzIlLCAxMDAlIDY4JSwgNzYlIDEwMCUsIDIzJSAxMDAlLDAgNzIlLCAwIDM0JSk7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWU6OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXN0cy9iZWUxLnBuZyk7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZTo6YmVmb3Jle1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXN0cy9iZWUxLnBuZyk7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwcHg7IFxcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5zdW1tYXJ5e1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLnN1bW1hcnkgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxufVxcbi8qIC5zdW1tYXJ5Om50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxNHB4O1xcbn0gKi9cXG5cXG4uc3VtbWFyeTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdHMvaG9uZXljb21iLnBuZyk7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC00OHB4O1xcbiAgICBsZWZ0OiA2M3B4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMzdweDtcXG59XFxuXFxuLnRpbWluZ3Mge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG4gICAgYmFja2dyb3VuZCA6IHZhcigtLXllbGxvdy0xKTtcXG59XFxuXFxuLmRheSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbn1cXG5cXG4uYWRkcmVzcyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtNjAwKTtcXG4gICAgbWFyZ2luOiAzcHg7XFxufVxcblxcblxcbi5tZW51LW5hbWUtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZCA6dmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjIlIDElLCA3MyUgMCwgMTAwJSAyNSUsIDEwMCUgNzMlLCA3NiUgOTklLCAyMyUgMTAwJSwgMCA3NiUsIDAgMjklKTtcXG59XFxuXFxuLm1lbnUtbmFtZS1ib3gge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbn1cXG4ubWVudS1uYW1lIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbn1cXG4uYmVlLWltYWdlMSwuYmVlLWltYWdlMiB7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5iZWUtaW1hZ2UyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcXG59XFxuXFxuLm1lbnUtY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNDVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjIlIDElLCA3MyUgMCwgMTAwJSAyNSUsIDEwMCUgNzMlLCA3NiUgOTklLCAyMyUgMTAwJSwgMCA3NiUsIDAgMjklKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWVudS1sYWJlbCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuXFxuLmJyZXYtaG9uZXktY29tYiB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzMnB4O1xcbiAgICByaWdodDogMXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uY2FyZCB7XFxuIHdpZHRoOiAyNTBweDtcXG4gaGVpZ2h0OiA0MDBweDtcXG4gYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiBkaXNwbGF5OiBncmlkO1xcbiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LDFmcik7XFxuIGdhcDogNXB4O1xcbiBwYWRkaW5nOiA1cHg7XFxuIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxuIG1hcmdpbjogMTVweDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LTEpO1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxufVxcbi5jYXJkLXN1bW1hcnl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGdyaWQtcm93OiAyLzU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uY2FyZC1wcmljZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiA1Lzk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LTYwMCk7XFxufVxcbi5jYXJkLWltYWdlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgZ3JpZC1yb3c6IDUvOTtcXG4gICAgaGVpZ2h0OiAxNjVweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxufVxcblxcbi5jb250YWN0LW5hbWUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZCA6dmFyKC0tb3JhbmdlLTIpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTclIDElLCA4MSUgMCwgMTAwJSAyMyUsIDEwMCUgNzclLCA4NCUgOTklLCAxNiUgMTAwJSwgMCA4MCUsIDAgMjclKTtcXG59XFxuLmNvbnRhY3QtbmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHZhcigtLW9yYW5nZS0yKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBiYWNrZ3JvdW5kIDogdmFyKC0teWVsbG93LTEpO1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjQlIDAsIDcyJSAwLCAxMDAlIDMyJSwgMTAwJSA2OCUsIDc2JSAxMDAlLCAyMyUgMTAwJSwwIDcyJSwgMCAzNCUpO1xcbn1cXG5cXG4uY29udGFjdC1uYW1lOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdHMvYmVlMS5wbmcpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbi5jb250YWN0LW5hbWU6OmJlZm9yZXtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2VzdHMvYmVlMS5wbmcpO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA1MHB4OyBcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uY29udGFjdC1jYXJkLWNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiA4cHggc29saWQgdmFyKC0tb3JhbmdlLTIpO1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNSUgMCwgOTUlIDAlLCAxMDAlIDE1JSwgMTAwJSA5MiUsIDkwJSAxMDIlLCA2JSAxMDAlLCAwIDg5JSwgMCAxNSUpO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctMSk7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmNvbnRhY3QtY2xhc3Mge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDhweCBzb2xpZCB2YXIoLS1vcmFuZ2UtMik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5jb250YWN0LWNsYXNzIGRpdjpudGgtY2hpbGQoMSl7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxufVxcbi5jb250YWN0LWNsYXNzIGRpdjpudGgtY2hpbGQoMil7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5jb250YWN0LWNsYXNzIGRpdjpudGgtY2hpbGQoMyl7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcbi5jb250YWN0LWNsYXNzIGRpdjpudGgtY2hpbGQoNCl7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxufVxcblxcblxcbmZvb3RlcntcXG4gICAgYmFja2dyb3VuZDogdmFyKC0ta2hha2kpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC02MDApO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbmZvb3RlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgdWwgbGkge1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNvbnRhY3RDb21wb25lbnQoKXtcbiAgICBjb25zdCBjb250YWN0Q29tcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXJFbGUgPSBnZXRDb250YWN0SGVhZGVyKCk7XG4gICAgY29udGFjdENvbXBOb2RlLmFwcGVuZChjb250YWN0SGVhZGVyRWxlKTtcblxuICAgIGNvbnN0IGNvbnRhY3QxID0gbmV3IENyZWF0ZUNvbnRhY3RDYXJkKCdTYWhpbCcgLCAnQ2hlZicgLCAnNTU1LTY2Ni03Nzc3JywgJ3NhaGlsLnNvbWV0aGluZ0BnbWFpbC5jb20nKTtcbiAgICBjb250YWN0Q29tcE5vZGUuYXBwZW5kKGNvbnRhY3QxLmNvbnRhY3RDYXJkTm9kZSk7XG5cbiAgICBjb25zdCBjb250YWN0MiA9IG5ldyBDcmVhdGVDb250YWN0Q2FyZCgnUm9taXQnICwgJ01hbmFnZXInICwgJzU1NS02NjYtNzc3NicsICdyb21pdC5zb21ldGhpbmdAZ21haWwuY29tJyk7XG4gICAgY29udGFjdENvbXBOb2RlLmFwcGVuZChjb250YWN0Mi5jb250YWN0Q2FyZE5vZGUpO1xuXG4gICAgY29uc3QgY29udGFjdDMgPSBuZXcgQ3JlYXRlQ29udGFjdENhcmQoJ0dvbGRpJyAsICdXYWl0ZXInICwgJzU1NS02NjYtNzc3OCcsICdnb2xkaS5zb21ldGhpbmdAZ21haWwuY29tJyk7XG4gICAgY29udGFjdENvbXBOb2RlLmFwcGVuZChjb250YWN0My5jb250YWN0Q2FyZE5vZGUpO1xuICAgIHJldHVybiBjb250YWN0Q29tcE5vZGU7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGdldENvbnRhY3RIZWFkZXIoKXtcbiAgICBjb25zdCBjb250YWN0SGVhZGVyRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEhlYWRlckVsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW5hbWUtY29udGFpbmVyJyk7XG4gICBjb25zdCBjb250YWN0SGVhZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIGNvbnRhY3RIZWFkZXJMYWJlbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LW5hbWUnKTtcbiAgIGNvbnRhY3RIZWFkZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiY29udGFjdFwiO1xuXG4gICBjb250YWN0SGVhZGVyRWxlLmFwcGVuZChjb250YWN0SGVhZGVyTGFiZWwpO1xuICAgcmV0dXJuIGNvbnRhY3RIZWFkZXJFbGU7XG59XG5jbGFzcyBDcmVhdGVDb250YWN0Q2FyZCB7XG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRlc2lnbmF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzaWduYXRpb24sIGNvbnRhY3QsIGVtYWlsKXtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNhcmQtY29udGFpbmVyJyk7XG4gICAgdGhpcy5jb250YWN0Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNsYXNzJylcbiAgICB0aGlzLm5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuZGVzaWduYXRpb24udGV4dENvbnRlbnQ9ZGVzaWduYXRpb247XG4gICAgdGhpcy5lbWFpbC50ZXh0Q29udGVudD1lbWFpbDtcbiAgICB0aGlzLmNvbnRhY3QudGV4dENvbnRlbnQ9Y29udGFjdDtcbiAgICB0aGlzLmNvbnRhY3ROb2RlLmFwcGVuZCh0aGlzLm5hbWUpO1xuICAgIHRoaXMuY29udGFjdE5vZGUuYXBwZW5kKHRoaXMuZGVzaWduYXRpb24pO1xuICAgIHRoaXMuY29udGFjdE5vZGUuYXBwZW5kKHRoaXMuY29udGFjdCk7XG4gICAgdGhpcy5jb250YWN0Tm9kZS5hcHBlbmQodGhpcy5lbWFpbCk7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kKHRoaXMuY29udGFjdE5vZGUpO1xuICB9XG5cbiAgZ2V0IGNvbnRhY3RDYXJkTm9kZSAoKXtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJcbiAgfVxufVxuICBleHBvcnQgZGVmYXVsdCBjb250YWN0Q29tcG9uZW50IiwiZnVuY3Rpb24gaG9tZUNvbXBvbmVudCgpe1xuICBjb25zdCBob21lQ29tcE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBnZXRSZXN0YXVyYW50TmFtZUVsZW1lbnQoKTtcbiAgaG9tZUNvbXBOb2RlLmFwcGVuZChyZXN0YXVyYW50TmFtZSk7XG4gIGNvbnN0IHN1bW1hcnkgPSBnZXRTdW1tYXJ5RWxlbWVudCgpO1xuICBob21lQ29tcE5vZGUuYXBwZW5kKHN1bW1hcnkpO1xuICBjb25zdCB0aW1pbmdzID0gZ2V0VGltaW5nc0VsZW1lbnQoKTtcbiAgaG9tZUNvbXBOb2RlLmFwcGVuZCh0aW1pbmdzKTtcbiAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvbkVsZW1lbnQoKTtcbiAgaG9tZUNvbXBOb2RlLmFwcGVuZChsb2NhdGlvbik7XG4gIHJldHVybiBob21lQ29tcE5vZGVcbn1cblxuZnVuY3Rpb24gZ2V0UmVzdGF1cmFudE5hbWVFbGVtZW50KCl7XG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXN0YXVyYW50TmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUtY29udGFpbmVyJyk7XG4gICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1uYW1lJyk7XG4gICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiQmVhcnkncyBCcmVha2Zhc3QgQmFyXCI7XG5cbiAgIHJlc3RhdXJhbnROYW1lQ29udGFpbmVyLmFwcGVuZChyZXN0YXVyYW50TmFtZSk7XG4gICByZXR1cm4gcmVzdGF1cmFudE5hbWVDb250YWluZXI7XG59XG5mdW5jdGlvbiBnZXRTdW1tYXJ5RWxlbWVudCgpe1xuICAgIGNvbnN0IHN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdW1tYXJ5LmNsYXNzTGlzdC5hZGQoJ3N1bW1hcnknKTtcbiAgICBjb25zdCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmV2aWV3LnRleHRDb250ZW50ID0gXCJCZWFyeSdzIGhhcyB0aGUgYmVzdCBwb3JyaWRnZSEgVGhlIGF0bW9zcGhlcmUgYW5kIGN1c3RvbWVyIHNlcnZpY2UgbWFrZSB5b3UgZmVlbCBsaWtlIHlvdSBhcmUgc2l0dGluZyBpbiB0aGUgbWlkZGxlIG9mIHRoZSB3b29kcywgZWF0aW5nIGxpa2UgYSBiZWFyISBUaGlzIGlzIGV4YWN0bHkgdGhlIGtpbmQgb2YgcGxhY2UgdGhhdCBJIGxpa2UgdG8gcmV0dXJuIHRvIGFnYWluIGFuZCBhZ2Fpbi5cIjtcbiAgICBjb25zdCBjdXN0b21lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjdXN0b21lci50ZXh0Q29udGVudCA9IFwiLSBTYWhpbFwiO1xuICAgIHN1bW1hcnkuYXBwZW5kKHJldmlldyk7XG4gICAgc3VtbWFyeS5hcHBlbmQoY3VzdG9tZXIpO1xuICAgIHJldHVybiBzdW1tYXJ5O1xuICAgIFxufVxuZnVuY3Rpb24gZ2V0VGltaW5nc0VsZW1lbnQoKXtcbiAgIGNvbnN0IHRpbWluZ3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICB0aW1pbmdzTm9kZS5jbGFzc0xpc3QuYWRkKCd0aW1pbmdzJyk7XG4gICB0aW1pbmdzTm9kZS5pbm5lckhUTUwgPWA8aDMgY2xhc3M9XCJob3Vyc1wiPkhvdXJzPC9oMz5cbiAgIDxwIGNsYXNzPVwic3VuZGF5IGRheVwiPlN1bmRheTogOGFtIC0gOHBtPC9wPlxuICAgPHAgY2xhc3M9XCJtb25kYXkgZGF5XCI+TW9uZGF5OiA2YW0gLSA2cG08L3A+XG4gICA8cCBjbGFzcz1cInR1ZXNkYXkgZGF5XCI+VHVlc2RheTogNmFtIC0gNnBtPC9wPlxuICAgPHAgY2xhc3M9XCJ3ZWRuZXNkYXkgZGF5XCI+V2VkbmVzZGF5OiA2YW0gLSA2cG08L3A+XG4gICA8cCBjbGFzcz1cInRodXJzZGF5IGRheVwiPlRodXJzZGF5OiA2YW0gLSAxMHBtPC9wPlxuICAgPHAgY2xhc3M9XCJmcmlkYXkgZGF5XCI+RnJpZGF5OiA2YW0gLSAxMHBtPC9wPlxuICAgPHAgY2xhc3M9XCJzYXR1cmRheSBkYXlcIj5TYXR1cmRheTogOGFtIC0gMTBwbTwvcD5cbiAgIGBcbiAgIHJldHVybiB0aW1pbmdzTm9kZVxuXG59XG5mdW5jdGlvbiBnZXRMb2NhdGlvbkVsZW1lbnQoKXtcbiAgICBjb25zdCBsb2NhdGlvbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2NhdGlvbk5vZGUuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbk5vZGUuaW5uZXJIVE1MID1gPGgzIGNsYXNzPVwibG9jYXRpb24taGVhZGVyXCI+TG9jYXRpb248L2gzPlxuICAgIDxwIGNsYXNzPVwiYWRkcmVzc1wiPiAxMDIsIGZvcmVzdCBWaWxsYSAsIEhpbmpld2FkaTwvcD5cbiAgICBgXG4gICAgcmV0dXJuIGxvY2F0aW9uTm9kZVxufVxuZXhwb3J0IGRlZmF1bHQgaG9tZUNvbXBvbmVudCIsImltcG9ydCAgYmVlSW1nIGZyb20gJy4uL2Fzc2VzdHMvYmVlMS5wbmcnO1xuaW1wb3J0IGhvbmVDb21iSW1nIGZyb20gJy4uL2Fzc2VzdHMvaG9uZXljb21iLnBuZyc7XG5pbXBvcnQgaG9uZXlUZWFJbWcgZnJvbSAnLi4vYXNzZXN0cy9ob25leVRlYS5qcGcnO1xuaW1wb3J0IGJlcnJ5VGVhSW1nIGZyb20gJy4uL2Fzc2VzdHMvYmVycnlUZWEuanBnJztcbmltcG9ydCB7IENyZWF0ZUNhcmQsQ3JlYXRlSW1hZ2VOb2RlfSBmcm9tICcuLi91dGlsaXRpZXMvdXRpbGl0aWVzLmpzJ1xuXG5mdW5jdGlvbiBtZW51Q29tcG9uZW50KCl7XG4gICAgY29uc3QgbWVudUNvbXBOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbXBOb2RlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyID0gZ2V0TWVudUhlYWRlckVsZW1lbnQoKVxuICAgIG1lbnVDb21wTm9kZS5hcHBlbmQobWVudUhlYWRlcilcblxuICAgIGNyZWF0ZUJldmVyYWdlc1NlY3Rpb24obWVudUNvbXBOb2RlKTtcbiAgICBjcmVhdGVTaWRlc1NlY3Rpb24obWVudUNvbXBOb2RlKTtcbiAgICBjcmVhdGVNYWluRGlzaGVzU2VjdGlvbihtZW51Q29tcE5vZGUpO1xuICAgIHJldHVybiBtZW51Q29tcE5vZGU7XG4gIH1cblxuIFxuICBmdW5jdGlvbiBnZXRNZW51SGVhZGVyRWxlbWVudCgpe1xuICAgIGNvbnN0IG1lbnVIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtbmFtZS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVOYW1lQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudU5hbWVCb3guY2xhc3NMaXN0LmFkZCgnbWVudS1uYW1lLWJveCcpO1xuXG4gICAgY29uc3QgaW1nMSA9IG5ldyBDcmVhdGVJbWFnZU5vZGUoYmVlSW1nLCdiZWUtaW1hZ2UxJyk7XG4gICAgXG4gICAgY29uc3QgbWVudUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1uYW1lJyk7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IGBNZW51YDtcblxuICAgIGNvbnN0IGltZzIgPSBuZXcgQ3JlYXRlSW1hZ2VOb2RlKGJlZUltZywnYmVlLWltYWdlMicpO1xuXG4gICAgbWVudU5hbWVCb3guYXBwZW5kKGltZzEuaW1hZ2VOb2RlKTtcbiAgICBtZW51TmFtZUJveC5hcHBlbmQobWVudUhlYWRlcik7XG4gICAgbWVudU5hbWVCb3guYXBwZW5kKGltZzIuaW1hZ2VOb2RlKTtcbiAgICBtZW51SGVhZGVyQ29udGFpbmVyLmFwcGVuZChtZW51TmFtZUJveCk7XG4gICAgcmV0dXJuIG1lbnVIZWFkZXJDb250YWluZXI7XG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVCZXZlcmFnZXNTZWN0aW9uKHBhcmVudE5vZGUpe1xuICBjb25zdCBiZXZlcmFnZUNhdGVnb3J5ID0gbmV3IENyZWF0ZU1lbnVDYXRlZ29yeSgnQmV2ZXJhZ2VzJyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKGJldmVyYWdlQ2F0ZWdvcnkubWVudUNhdGVnb3J5Tm9kZSk7XG5cbiAgY29uc3QgaG9uZXlUZWFFbGUgPSBuZXcgQ3JlYXRlQ2FyZCgnSG9uZXkgVGVhJywnQSB3YXJtLCBzd2VldCB0ZWEgbWFkZSB3aXRoIHRoZSBoaWdoZXN0IHF1YWxpdHkgaG9uZXkgYW5kIGEgYml0IG9mIGxlbW9uIHRvIHN0YXJ0IHlvdXIgZGF5IG9mZiByaWdodCEnLCczMCBScycsaG9uZXlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChob25leVRlYUVsZS5ub2RlKTtcblxuICBjb25zdCBiZXJyeVRlYUVsZSA9IG5ldyBDcmVhdGVDYXJkKCdCZXJyeSBUZWEnLCdBIGNvbWZvcnRpbmcsIGFsbW9zdCBmaWxsaW5nLCB0ZWEgdGhhdCBpcyBpbmZ1c2VkIHdpdGggdGhlIGZsYXZvcnMgb2Ygc2V2ZXJhbCBraW5kcyBvZiBiZXJyaWVzLiBCZXN0IHNlcnZlZCBjb2xkLCBidXQgY2FuIGJlIHNlcnZlZCBob3Qgb24gcmVxdWVzdC4nLCc0MCBScycsYmVycnlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChiZXJyeVRlYUVsZS5ub2RlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZXNTZWN0aW9uKHBhcmVudE5vZGUpe1xuICBjb25zdCBzaWRlc0NhdGVnb3J5ID0gbmV3IENyZWF0ZU1lbnVDYXRlZ29yeSgnU2lkZXMnKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQoc2lkZXNDYXRlZ29yeS5tZW51Q2F0ZWdvcnlOb2RlKTtcblxuICBjb25zdCBob25leVRlYUVsZSA9IG5ldyBDcmVhdGVDYXJkKCdUb2FzdCBBbmQgamFtJywnQSBzbGljZSBvZiB0b2FzdCwgeW91ciBjaG9pY2Ugb2YgYnJlYWQsIGFuZCBvdXIgaG9tZW1hZGUgYmxhY2tiZXJyeSBvciByYXNwYmVycnkgamFtLicsJzYwIFJzJyxob25leVRlYUltZyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKGhvbmV5VGVhRWxlLm5vZGUpO1xuXG4gIGNvbnN0IGJlcnJ5VGVhRWxlID0gbmV3IENyZWF0ZUNhcmQoJ0ZyZXNoIEZydWl0cycsJ0Egc21hbGwgYm93bCBvZiBmcmVzaCBmcnVpdCwgd2hhdGV2ZXIgd2UgZmluZCBhdCB0aGUgbWFya2V0IGZvciB0aGUgZGF5LicsJzUwIFJzJyxiZXJyeVRlYUltZyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKGJlcnJ5VGVhRWxlLm5vZGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluRGlzaGVzU2VjdGlvbihwYXJlbnROb2RlKXtcbiAgY29uc3QgbWFpbkRpc2hlc0NhdGVnb3J5ID0gbmV3IENyZWF0ZU1lbnVDYXRlZ29yeSgnTWFpbiBEaXNoZXMnKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQobWFpbkRpc2hlc0NhdGVnb3J5Lm1lbnVDYXRlZ29yeU5vZGUpO1xuXG4gIGNvbnN0IHBhbkNha2VzRWxlID0gbmV3IENyZWF0ZUNhcmQoJ1BhbiBDYWtlcycsJ0Egc3RhY2sgb2YgaG9tZW1hZGUgYnV0dGVybWlsayBwYW5jYWtlcywgc2VydmVkIHdpdGggb3VyIGxvY2FsbHkgc291cmNlZCBtYXBsZSBzeXJ1cC4nLCcxNjAgUnMnLGhvbmV5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQocGFuQ2FrZXNFbGUubm9kZSk7XG5cbiAgY29uc3QgZnJlbmNoVG9hc3RFbGUgPSBuZXcgQ3JlYXRlQ2FyZCgnRnJlbmNoIFRvYXN0JywnVHdvIHNsaWNlcyBvZiB0aGUgYmVzdCBmcmVuY2ggdG9hc3QgeW91IHdpbGwgZXZlciBlYXQsIHNlcnZlZCB3aXRoIG91ciBsb2NhbGx5IHNvdXJjZWQgbWFwbGUgc3lydXAuJywnMTUwIFJzJyxiZXJyeVRlYUltZyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKGZyZW5jaFRvYXN0RWxlLm5vZGUpO1xuXG4gIGNvbnN0IGJlYXJ5VmVnZ2llU2FuZHdpY2hFbGUgPSBuZXcgQ3JlYXRlQ2FyZCgnQmVhcnkgVmVnZ2llIFNhbmR3aWNoJywnRG8geW91IGxpa2UgdmVnZXRhYmxlcz8gVGhlbiB0aGlzIGlzIHRoZSBzYW5kd2ljaCBmb3IgeW91ISBTdHVmZmVkIGZ1bGwgb2YgYSB2YXJpZXR5IG9mIGZyZXNoIHByb2R1Y2UsIGl0IHdpbGwgZmlsbCB5b3UgdXAuJywnMjYwIFJzJyxob25leVRlYUltZyk7XG4gIHBhcmVudE5vZGUuYXBwZW5kKGJlYXJ5VmVnZ2llU2FuZHdpY2hFbGUubm9kZSk7XG5cbiAgY29uc3QgYmFnZWxBbmRMb3ggPSBuZXcgQ3JlYXRlQ2FyZCgnQmFnZWwgYW5kIExveCcsJ091ciBob3VzZSBzcGVjaWFsdHksIHlvdSBjYW50IGdvIHdyb25nIHdpdGggYSBoZWFydHkgYmFnZWwgdG9wcGVkIHdpdGggc3VzdGFpbmFibHkgaGFydmVzdGVkIHNhbG1vbi4nLCcyNTAgUnMnLGJlcnJ5VGVhSW1nKTtcbiAgcGFyZW50Tm9kZS5hcHBlbmQoYmFnZWxBbmRMb3gubm9kZSk7XG5cbiAgY29uc3QgaG9uZXlDb21iRWxlID0gbmV3IENyZWF0ZUNhcmQoJ0hvbmV5Y29tYicsJ0FyZSB5b3UgYSBiZWFyIGxpa2UgdXM/IFRoZW4geW91IHdpbGwgbG92ZSBvdXIgaG9uZXljb21iLiBBbmQsIHllcyBodW1hbnMsIGl0IGlzIGp1c3QgYSBwaWVjZSBvZiBob25leWNvbWIsIG5vdCB0aGUgcG9wdWxhciBicmVha2Zhc3QgY2VyZWFsLicsJzE2MCBScycsaG9uZXlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZChob25leUNvbWJFbGUubm9kZSk7XG5cbiAgY29uc3QgdGhlQmVhcnlCZXN0UG9ycmlkZ2VFbGUgPSBuZXcgQ3JlYXRlQ2FyZCgnVGhlIEJlYXJ5IEJlc3QgUG9ycmlkZ2UnLCdNYWRlIGJ5IEJhYnkgQmVhciBoaW1zZWxmLCB0aGlzIHBvcnJpZGdlIGlzIGd1YXJlbnRlZWQgdG8gYmUganVzdCByaWdodCwgb3IgeW91ciBtb25leSBiYWNrLicsJzE1MCBScycsYmVycnlUZWFJbWcpO1xuICBwYXJlbnROb2RlLmFwcGVuZCh0aGVCZWFyeUJlc3RQb3JyaWRnZUVsZS5ub2RlKTtcbiAgXG59XG5cbmNsYXNzIENyZWF0ZU1lbnVDYXRlZ29yeSB7XG4gIGJldmVyYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJldmVyYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgaW1nID0gbmV3IENyZWF0ZUltYWdlTm9kZShob25lQ29tYkltZywnYnJldi1ob25leS1jb21iJyk7XG4gIGNvbnN0cnVjdG9yKGxhYmVsKXtcbiAgIHRoaXMuYmV2ZXJhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXRlZ29yeS1jb250YWluZXInKTtcbiAgIHRoaXMuYmV2ZXJhZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1sYWJlbCcpO1xuICAgdGhpcy5iZXZlcmFnZS50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgdGhpcy5iZXZlcmFnZUNvbnRhaW5lci5hcHBlbmQodGhpcy5iZXZlcmFnZSk7XG4gICB0aGlzLmJldmVyYWdlQ29udGFpbmVyLmFwcGVuZCh0aGlzLmltZy5pbWFnZU5vZGUpO1xuICB9XG4gIGdldCBtZW51Q2F0ZWdvcnlOb2RlICgpe1xuICAgIHJldHVybiB0aGlzLmJldmVyYWdlQ29udGFpbmVyO1xuICB9XG59XG4gIGV4cG9ydCBkZWZhdWx0IG1lbnVDb21wb25lbnQiLCJmdW5jdGlvbiBpbml0aWFsUGFnZUxvYWQoKXtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgXG4gICAgY29uc3QgaGVhZGVyTm9kZSA9IGNyZWF0ZUhlYWRlck5vZGUoKTtcbiAgICBjb25zdCBtYWluTm9kZSA9IGNyZWF0ZU1haW5Ob2RlKCk7XG4gICAgY29uc3QgZm9vdGVyTm9kZSA9IGNyZWF0ZUZvb3Rlck5vZGUoKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyTm9kZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChtYWluTm9kZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZChmb290ZXJOb2RlKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyTm9kZSAoKXtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUtdGFiJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudS10YWInKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXRhYicpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGhlYWRlci5hcHBlbmQoaG9tZSk7XG4gICAgaGVhZGVyLmFwcGVuZChtZW51KTtcbiAgICBoZWFkZXIuYXBwZW5kKGNvbnRhY3QpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Ob2RlKCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyTm9kZSgpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgPHVsPlxuICAgIDxsaT5cbiAgICAgIDxhIGNsYXNzPVwiYXR0cmlidXRpb24gaWNvbnMyXCIgaHJlZj1cImh0dHA6Ly93d3cuZnJlZXBpay5jb21cIiB0aXRsZT1cIkZyZWVwaWtcIj5IaXZlIGljb24gbWFkZSBieSBGcmVlcGlrIC0gd3d3LmZsYXRpY29uLmNvbTwvYT5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxhIGNsYXNzPVwiYXR0cmlidXRpb24gaWNvbnNcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2F1dGhvcnMvc21hc2hpY29uc1wiIHRpdGxlPVwiU21hc2hpY29uc1wiPkJlZSBpY29ucyBtYWRlIGJ5IFNtYXNoaWNvbnMgLSB3d3cuZmxhdGljb24uY29tPC9hPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPGEgY2xhc3M9XCJhdHRyaWJ1dGlvblwiIGhyZWY9XCJodHRwczovL3d3dy5mcmVlcGlrLmNvbS92ZWN0b3JzL2Zvb2RcIj5CYWNrZ3JvdW5kIGltYWdlIGNyZWF0ZWQgYnkgZGdpbS1zdHVkaW8gLSB3d3cuZnJlZXBpay5jb208L2E+XG4gICAgPC9saT5cbiAgPC91bD5gO1xuICAgIHJldHVybiBmb290ZXI7XG59XG5leHBvcnQgZGVmYXVsdCBpbml0aWFsUGFnZUxvYWQ7XG5cbiIsIiBjbGFzcyBDcmVhdGVDYXJkIHtcbiAgICBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1nO1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLHN1bW1hcnkscHJpY2UsaW1nKXtcbiAgICAgIHRoaXMuY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGUsXG4gICAgICB0aGlzLnN1bW1hcnkudGV4dENvbnRlbnQgPSBzdW1tYXJ5O1xuICAgICAgdGhpcy5wcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuICAgICAgdGhpcy5pbWcgPSBuZXcgQ3JlYXRlSW1hZ2VOb2RlKGltZywnY2FyZC1pbWFnZScpXG4gICAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgdGhpcy5jYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgnY2FyZC10aXRsZScpO1xuICAgICAgdGhpcy5zdW1tYXJ5LmNsYXNzTGlzdC5hZGQoJ2NhcmQtc3VtbWFyeScpO1xuICAgICAgdGhpcy5wcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXByaWNlJyk7XG4gICAgICB0aGlzLmNhcmQuYXBwZW5kKHRoaXMuY2FyZFRpdGxlKTtcbiAgICAgIHRoaXMuY2FyZC5hcHBlbmQodGhpcy5zdW1tYXJ5KTtcbiAgICAgIHRoaXMuY2FyZC5hcHBlbmQodGhpcy5wcmljZSk7XG4gICAgICB0aGlzLmNhcmQuYXBwZW5kKHRoaXMuaW1nLmltYWdlTm9kZSk7XG4gICAgfVxuICAgIGdldCBub2RlICgpe1xuICAgICAgcmV0dXJuIHRoaXMuY2FyZDtcbiAgICB9XG4gIH1cblxuICBjbGFzcyBDcmVhdGVJbWFnZU5vZGUge1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdHJ1Y3RvcihzcmMsY2xhc3NuYW1lKXtcbiAgICAgIHRoaXMubm9kZS5zcmMgPXNyYztcbiAgICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzbmFtZSk7XG4gICAgfVxuICAgIGdldCBpbWFnZU5vZGUoKXtcbiAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IHtDcmVhdGVDYXJkLENyZWF0ZUltYWdlTm9kZX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBpbml0aWFsUGFnZUxvYWQgZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkXCI7XG5pbXBvcnQgaG9tZUNvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVDb21wb25lbnRcIjtcbmltcG9ydCBtZW51Q29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvbWVudUNvbXBvbmVudFwiO1xuaW1wb3J0IGNvbnRhY3RDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgaHRtbExheW91dCA9IGluaXRpYWxQYWdlTG9hZCgpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5jb250ZW50LmFwcGVuZChodG1sTGF5b3V0KTtcblxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lLXRhYicpO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRhYicpO1xuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LXRhYicpO1xuXG5jb25zdCBob21lTm9kZSA9IGhvbWVDb21wb25lbnQoKTtcbmNvbnN0IG1lbnVOb2RlID0gbWVudUNvbXBvbmVudCgpO1xuY29uc3QgY29udGFjdE5vZGUgPSBjb250YWN0Q29tcG9uZW50KCk7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5pZihtYWluKXtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihtYWluKTtcbiAgICBtYWluLmFwcGVuZChob21lTm9kZSk7XG59XG5cblxuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQtdGFiJykpICByZXR1cm47XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgcmVtb3ZlQWxsQ2hpbGRyZW4obWFpbik7XG4gICAgbWFpbi5hcHBlbmQoaG9tZU5vZGUpO1xuXG59KVxuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZC10YWInKSkgIHJldHVybjtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihtYWluKTtcbiAgICBtYWluLmFwcGVuZChtZW51Tm9kZSk7XG59KVxuXG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZC10YWInKSkgIHJldHVybjtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICByZW1vdmVBbGxDaGlsZHJlbihtYWluKTtcbiAgICBtYWluLmFwcGVuZChjb250YWN0Tm9kZSk7XG59KVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZHJlbihwYXJlbnQpe1xuICAgIHdoaWxlKHBhcmVudC5oYXNDaGlsZE5vZGVzKCkpe1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=