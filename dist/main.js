/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/honeyBG2.jpg */ \"./src/assests/honeyBG2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/bee1.png */ \"./src/assests/bee1.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/honeycomb.png */ \"./src/assests/honeycomb.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0px;\\n    height: 100vh;\\n}\\n:root {\\n    --khaki : #ffde73;\\n    --orange-1 :#eca43a;\\n    --orange-2: #c16a0a;\\n    --yellow-1:#ffc60c;\\n    --font-600:600;\\n}\\n#content {\\n    height: 100%;\\n}\\n.container {\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n}\\nheader {\\n    display : flex;\\n    justify-content: center;\\n    align-items: center;\\n    column-gap: 10px;\\n    background: var(--khaki);\\n    padding: 10px;\\n    padding-bottom: 0px;\\n}\\nmain {\\n    flex:1;\\n    background : url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-size: cover;\\n    padding: 20px;\\n    display: flex;\\n    justify-content: center;\\n    /* align-items: center; */\\n}\\n\\nmain > div {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    background: var(--khaki);\\n    padding: 30px;\\n}\\n\\n.attribution {\\n    color: black;\\n    font-size: 12px;\\n    text-decoration: none;\\n}\\n.home-tab,.menu-tab,.contact-tab {\\n    border: 1px solid black;\\n    border-top-left-radius: 5px;\\n    border-top-right-radius: 5px;\\n    border-bottom: none;\\n    padding: 10px;\\n    font-weight: var(--font-600);\\n    font-size: 20px;\\n}\\n\\n.selected-tab {\\n    background: var(--orange-1);\\n}\\n.restaurant-name-container {\\n    background :var(--orange-2);\\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\\n}\\n.restaurant-name {\\n    display: flex;\\n    align-items: center;\\n    border: 8px solid var(--orange-2);\\n    padding: 10px;\\n    font-size: 30px;\\n    font-weight: var(--font-600);\\n    background : var(--yellow-1);\\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\\n}\\n\\n.restaurant-name::after{\\n    content: '';\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    display: inline-block;\\n    background-repeat: no-repeat;\\n    width: 50px; \\n    height: 50px;\\n    background-size: cover;\\n    transform: rotate(90deg);\\n}\\n\\n.restaurant-name::before{\\n    content: '';\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    display: inline-block;\\n    width: 50px; \\n    height: 50px;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n}\\n\\n.summary{\\n    width: 200px;\\n    height: auto;\\n    border: 8px solid var(--orange-2);\\n    padding: 20px;\\n    font-size: 14px;\\n    margin-top: 40px;\\n    border-radius: 30%;\\n    background : var(--yellow-1);\\n}\\n\\n.summary p {\\n    font-weight: var(--font-600);\\n}\\n/* .summary:nth-child(2) {\\n    font-weight: 14px;\\n} */\\n\\n.summary::before {\\n    content: '';\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    width: 50px;\\n    height: 50px;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    display: inline-block;\\n    position: relative;\\n    top: -48px;\\n    left: 63px;\\n    margin-bottom: -37px;\\n}\\n\\n.timings {\\n    width: 200px;\\n    height: auto;\\n    border: 8px solid var(--orange-2);\\n    padding: 20px;\\n    font-size: 14px;\\n    margin-top: 40px;\\n    border-radius: 30%;\\n    background : var(--yellow-1);\\n}\\n\\n.day {\\n    text-align: center;\\n    font-weight: var(--font-600);\\n    margin: 3px;\\n}\\n\\n.location {\\n    width: 200px;\\n    height: auto;\\n    border: 8px solid var(--orange-2);\\n    padding: 20px;\\n    font-size: 14px;\\n    margin-top: 40px;\\n    border-radius: 30%;\\n    background : var(--yellow-1);\\n}\\n\\n.address {\\n    text-align: center;\\n    font-weight: var(--font-600);\\n    margin: 3px;\\n}\\n\\n.menu-name-container {\\n    background :var(--orange-2);\\n    clip-path: polygon(17% 1%, 81% 0, 100% 23%, 100% 77%, 84% 99%, 16% 100%, 0 80%, 0 27%);\\n}\\n.menu-name {\\n    display: flex;\\n    align-items: center;\\n    border: 8px solid var(--orange-2);\\n    padding: 10px;\\n    font-size: 30px;\\n    font-weight: var(--font-600);\\n    background : var(--yellow-1);\\n    clip-path: polygon(24% 0, 72% 0, 100% 32%, 100% 68%, 76% 100%, 23% 100%,0 72%, 0 34%);\\n}\\n\\n.menu-name::after{\\n    content: '';\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    display: inline-block;\\n    background-repeat: no-repeat;\\n    width: 50px; \\n    height: 50px;\\n    background-size: cover;\\n    transform: rotate(90deg);\\n}\\n\\n.menu-name::before{\\n    content: '';\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    display: inline-block;\\n    width: 50px; \\n    height: 50px;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n}\\n\\nfooter{\\n    background: var(--khaki);\\n    padding: 10px;\\n    font-weight: var(--font-600);\\n    font-size: 20px;\\n}\\nfooter ul {\\n    display: flex;\\n    list-style: none;\\n    padding: 0;\\n    margin: 0;\\n    text-align: center;\\n}\\n\\nfooter ul li {\\n    flex: 1;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/contactComponent.js":
/*!********************************************!*\
  !*** ./src/components/contactComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactComponent(){\n    const contactCompNode = document.createElement('div');\n    contactCompNode.textContent = \"Contact\" ;\n    return contactCompNode;\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactComponent);\n\n//# sourceURL=webpack://restaurantpage/./src/components/contactComponent.js?");

/***/ }),

/***/ "./src/components/homeComponent.js":
/*!*****************************************!*\
  !*** ./src/components/homeComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homeComponent(){\n  const homeCompNode = document.createElement('div');\n  const restaurantName = getRestaurantNameElement();\n  homeCompNode.append(restaurantName);\n  const summary = getSummaryElement();\n  homeCompNode.append(summary);\n  const timings = getTimingsElement();\n  homeCompNode.append(timings);\n  const location = getLocationElement();\n  homeCompNode.append(location);\n  return homeCompNode\n}\n\nfunction getRestaurantNameElement(){\n    const restaurantNameContainer = document.createElement('div');\n    restaurantNameContainer.classList.add('restaurant-name-container');\n   const restaurantName = document.createElement('div');\n   restaurantName.classList.add('restaurant-name');\n   restaurantName.textContent = \"Beary's Breakfast Bar\";\n\n   restaurantNameContainer.append(restaurantName);\n   return restaurantNameContainer;\n}\nfunction getSummaryElement(){\n    const summary = document.createElement('div');\n    summary.classList.add('summary');\n    const review = document.createElement('p');\n    review.textContent = \"Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.\";\n    const customer = document.createElement('p');\n    customer.textContent = \"- Sahil\";\n    summary.append(review);\n    summary.append(customer);\n    return summary;\n    \n}\nfunction getTimingsElement(){\n   const timingsNode = document.createElement('div');\n   timingsNode.classList.add('timings');\n   timingsNode.innerHTML =`<h3 class=\"hours\">Hours</h3>\n   <p class=\"sunday day\">Sunday: 8am - 8pm</p>\n   <p class=\"monday day\">Monday: 6am - 6pm</p>\n   <p class=\"tuesday day\">Tuesday: 6am - 6pm</p>\n   <p class=\"wednesday day\">Wednesday: 6am - 6pm</p>\n   <p class=\"thursday day\">Thursday: 6am - 10pm</p>\n   <p class=\"friday day\">Friday: 6am - 10pm</p>\n   <p class=\"saturday day\">Saturday: 8am - 10pm</p>\n   `\n   return timingsNode\n\n}\nfunction getLocationElement(){\n    const locationNode = document.createElement('div');\n    locationNode.classList.add('location');\n    locationNode.innerHTML =`<h3 class=\"location-header\">Location</h3>\n    <p class=\"address\"> 102, forest Villa , Hinjewadi</p>\n    `\n    return locationNode\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeComponent);\n\n//# sourceURL=webpack://restaurantpage/./src/components/homeComponent.js?");

/***/ }),

/***/ "./src/components/menuComponent.js":
/*!*****************************************!*\
  !*** ./src/components/menuComponent.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuComponent(){\n    const menuCompNode = document.createElement('div');\n    menuCompNode.classList.add('menu-container');\n\n    const menuHeader = getMenuHeaderElement()\n    menuCompNode.append(menuHeader)\n    return menuCompNode;\n  }\n  \n  function getMenuHeaderElement(){\n    const menuHeaderContainer = document.createElement('div');\n    menuHeaderContainer.classList.add('menu-name-container');\n\n    // const img = document.createElement('img');\n    // img.src ='./assests/bee1.png'\n    const menuHeader = document.createElement('div');\n    menuHeader.classList.add('menu-name');\n    menuHeader.textContent = \"Menu\";\n    \n    // menuHeaderContainer.append(img);\n    menuHeaderContainer.append(menuHeader);\n    // menuHeaderContainer.append(img);\n    return menuHeaderContainer;\n}\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuComponent);\n\n//# sourceURL=webpack://restaurantpage/./src/components/menuComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialPageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoad */ \"./src/initialPageLoad.js\");\n/* harmony import */ var _components_homeComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homeComponent */ \"./src/components/homeComponent.js\");\n/* harmony import */ var _components_menuComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menuComponent */ \"./src/components/menuComponent.js\");\n/* harmony import */ var _components_contactComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contactComponent */ \"./src/components/contactComponent.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\nconst htmlLayout = (0,_initialPageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst content = document.querySelector('#content');\ncontent.append(htmlLayout);\n\nconst homeTab = document.querySelector('.home-tab');\nconst menuTab = document.querySelector('.menu-tab');\nconst contactTab = document.querySelector('.contact-tab');\n\nconst homeNode = (0,_components_homeComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst menuNode = (0,_components_menuComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst contactNode = (0,_components_contactComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nconst main = document.querySelector('main');\nif(main){\n    removeAllChildren(main);\n    main.append(homeNode);\n}\n\n\nhomeTab.addEventListener('click', function(event){\n    if(this.classList.contains('selected-tab'))  return;\n    this.classList.add('selected-tab');\n    menuTab.classList.remove('selected-tab');\n    contactTab.classList.remove('selected-tab');\n    removeAllChildren(main);\n    main.append(homeNode);\n\n})\n\nmenuTab.addEventListener('click', function(event){\n    if(this.classList.contains('selected-tab'))  return;\n    this.classList.add('selected-tab');\n    homeTab.classList.remove('selected-tab');\n    contactTab.classList.remove('selected-tab');\n    removeAllChildren(main);\n    main.append(menuNode);\n})\n\ncontactTab.addEventListener('click', function(event){\n    if(this.classList.contains('selected-tab'))  return;\n    this.classList.add('selected-tab');\n    menuTab.classList.remove('selected-tab');\n    homeTab.classList.remove('selected-tab');\n    removeAllChildren(main);\n    main.append(contactNode);\n})\n\nfunction removeAllChildren(parent){\n    while(parent.hasChildNodes()){\n        parent.removeChild(parent.firstChild);\n    }\n}\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction initialPageLoad(){\n    const container = document.createElement('div');\n    container.classList.add('container');\n    \n    const headerNode = createHeaderNode();\n    const mainNode = createMainNode();\n    const footerNode = createFooterNode();\n\n    container.append(headerNode);\n    container.append(mainNode);\n    container.append(footerNode);\n\n    return container;\n\n}\n\nfunction createHeaderNode (){\n    const header = document.createElement('header');\n\n    const home = document.createElement('div');\n    home.classList.add('home-tab');\n    home.classList.add('selected-tab');\n    home.textContent = 'Home';\n\n    const menu = document.createElement('div');\n    menu.classList.add('menu-tab');\n    menu.textContent = \"Menu\";\n\n    const contact = document.createElement('div');\n    contact.classList.add('contact-tab');\n    contact.textContent = \"Contact\";\n\n    header.append(home);\n    header.append(menu);\n    header.append(contact);\n    return header;\n}\n\nfunction createMainNode(){\n    const main = document.createElement('main');\n    return main;\n}\n\nfunction createFooterNode(){\n    const footer = document.createElement('footer');\n    footer.innerHTML = `<ul>\n    <li>\n      <a class=\"attribution icons2\" href=\"http://www.freepik.com\" title=\"Freepik\">Hive icon made by Freepik - www.flaticon.com</a>\n    </li>\n    <li>\n      <a class=\"attribution icons\" href=\"https://www.flaticon.com/authors/smashicons\" title=\"Smashicons\">Bee icons made by Smashicons - www.flaticon.com</a>\n    </li>\n    <li>\n      <a class=\"attribution\" href=\"https://www.freepik.com/vectors/food\">Background image created by dgim-studio - www.freepik.com</a>\n    </li>\n  </ul>`;\n    return footer;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPageLoad);\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/initialPageLoad.js?");

/***/ }),

/***/ "./src/assests/bee1.png":
/*!******************************!*\
  !*** ./src/assests/bee1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c211eb647b52d1a43e7c.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/assests/bee1.png?");

/***/ }),

/***/ "./src/assests/honeyBG2.jpg":
/*!**********************************!*\
  !*** ./src/assests/honeyBG2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"66c573abb83e5389c208.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assests/honeyBG2.jpg?");

/***/ }),

/***/ "./src/assests/honeycomb.png":
/*!***********************************!*\
  !*** ./src/assests/honeycomb.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0f9c987901b711c9c580.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/assests/honeycomb.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;