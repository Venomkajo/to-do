/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body
{
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: #818cf8;
    color: white;
}

.header
{
    width: 100%;
    height: 60px;
    background-color: #4f46e5;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.header p, .notes-header p
{
    margin-left: 50px;
    font-size: 36px;
}

.main-body
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.notes-header
{
    background-color: #4f46e5;
    height: min-content;
    width: 100%;
    height: 60px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.notes-main
{
    background-color: white;
    width: 100%;
    display: flex;
    background-color: #818cf8;
}

.notes-pages
{
    background-color: #818cf8;
    width: 15%;
    min-height: 100%;
    outline: black solid 3px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
}

#pageForm
{
    width: 15%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
}

.notes-page
{
    background-color: black;
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    word-wrap: break-word;
    overflow: scroll;
}

.notes-page button
{
    background-color: black;
    border: white solid 3px;
    color: white;
    border-radius: 10px;
    padding: 5px;
}

.notes-content
{
    background-color: #818cf8;
    width: 85%;
    height: max-content;
    min-height: 200px;
    outline: black solid 3px;
}

.notes-note
{
    background-color: #2e1065;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    gap: 20%;
    height: max-content;
    margin-top: 25px;
}

.notes-title, .notes-description, .notes-date
{
    word-wrap: break-word;
    overflow: hidden;
}

.notes-title
{
    width: 60%;
    margin-left: 25px;
}

.notes-date
{
    background-color: white;
    color: black;
    width: 25%;
}

.notes-priority
{
    width: 10%;
    margin-right: 10px;
}

.notes-note button
{
    width: 5%;
    margin-right: 25px;
}

.notes-form
{
    margin-top: 25px;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

.notes-hidden
{
    min-height: 100px;
    height: fit-content;
    width: 100%;
    background-color: lightgoldenrodyellow;
    color: black;
    margin-bottom: 25px;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.notes-hidden button:nth-last-child(1)
{
    margin-right: 25px;
}

.notes-description
{
    width: 90%;
    margin-left: 25px;
}

#notesForm
{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 100%;
    flex-direction: column;
    gap: 5px;
}

#notesForm *
{
    width: 15%;
    text-align: center;
}

#description
{
    width: 30%;
    height: 50px;
    resize: none;
}

#notesForm button
{
    width: 10%;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 25px;
}

.footer
{
    background-color: #4f46e5;
    width: 100%;
    margin-bottom: 0;
}

.footer p
{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: min-content;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;IAEI,YAAY;IACZ,SAAS;IACT,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;;IAEI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;;IAEI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,yBAAyB;IACzB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,yBAAyB;AAC7B;;AAEA;;IAEI,yBAAyB;IACzB,UAAU;IACV,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;;IAEI,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;;IAEI,uBAAuB;IACvB,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,SAAS;IACT,oBAAoB;IACpB,iBAAiB;IACjB,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;;IAEI,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,YAAY;AAChB;;AAEA;;IAEI,yBAAyB;IACzB,UAAU;IACV,mBAAmB;IACnB,iBAAiB;IACjB,wBAAwB;AAC5B;;AAEA;;IAEI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,QAAQ;IACR,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;;IAEI,UAAU;IACV,iBAAiB;AACrB;;AAEA;;IAEI,uBAAuB;IACvB,YAAY;IACZ,UAAU;AACd;;AAEA;;IAEI,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,SAAS;IACT,kBAAkB;AACtB;;AAEA;;IAEI,gBAAgB;IAChB,WAAW;IACX,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;IAEI,iBAAiB;IACjB,mBAAmB;IACnB,WAAW;IACX,sCAAsC;IACtC,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;AACb;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,UAAU;IACV,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;;IAEI,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;;IAEI,yBAAyB;IACzB,WAAW;IACX,gBAAgB;AACpB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,mBAAmB;AACvB","sourcesContent":["body\r\n{\r\n    height: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: #818cf8;\r\n    color: white;\r\n}\r\n\r\n.header\r\n{\r\n    width: 100%;\r\n    height: 60px;\r\n    background-color: #4f46e5;\r\n    text-align: left;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.header p, .notes-header p\r\n{\r\n    margin-left: 50px;\r\n    font-size: 36px;\r\n}\r\n\r\n.main-body\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 50px;\r\n}\r\n\r\n.notes-header\r\n{\r\n    background-color: #4f46e5;\r\n    height: min-content;\r\n    width: 100%;\r\n    height: 60px;\r\n    text-align: left;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.notes-main\r\n{\r\n    background-color: white;\r\n    width: 100%;\r\n    display: flex;\r\n    background-color: #818cf8;\r\n}\r\n\r\n.notes-pages\r\n{\r\n    background-color: #818cf8;\r\n    width: 15%;\r\n    min-height: 100%;\r\n    outline: black solid 3px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n#pageForm\r\n{\r\n    width: 15%;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.notes-page\r\n{\r\n    background-color: black;\r\n    width: 100%;\r\n    min-height: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    word-wrap: break-word;\r\n    overflow: scroll;\r\n}\r\n\r\n.notes-page button\r\n{\r\n    background-color: black;\r\n    border: white solid 3px;\r\n    color: white;\r\n    border-radius: 10px;\r\n    padding: 5px;\r\n}\r\n\r\n.notes-content\r\n{\r\n    background-color: #818cf8;\r\n    width: 85%;\r\n    height: max-content;\r\n    min-height: 200px;\r\n    outline: black solid 3px;\r\n}\r\n\r\n.notes-note\r\n{\r\n    background-color: #2e1065;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 24px;\r\n    gap: 20%;\r\n    height: max-content;\r\n    margin-top: 25px;\r\n}\r\n\r\n.notes-title, .notes-description, .notes-date\r\n{\r\n    word-wrap: break-word;\r\n    overflow: hidden;\r\n}\r\n\r\n.notes-title\r\n{\r\n    width: 60%;\r\n    margin-left: 25px;\r\n}\r\n\r\n.notes-date\r\n{\r\n    background-color: white;\r\n    color: black;\r\n    width: 25%;\r\n}\r\n\r\n.notes-priority\r\n{\r\n    width: 10%;\r\n    margin-right: 10px;\r\n}\r\n\r\n.notes-note button\r\n{\r\n    width: 5%;\r\n    margin-right: 25px;\r\n}\r\n\r\n.notes-form\r\n{\r\n    margin-top: 25px;\r\n    width: 100%;\r\n    height: 50%;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.notes-hidden\r\n{\r\n    min-height: 100px;\r\n    height: fit-content;\r\n    width: 100%;\r\n    background-color: lightgoldenrodyellow;\r\n    color: black;\r\n    margin-bottom: 25px;\r\n    font-size: 24px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n\r\n.notes-hidden button:nth-last-child(1)\r\n{\r\n    margin-right: 25px;\r\n}\r\n\r\n.notes-description\r\n{\r\n    width: 90%;\r\n    margin-left: 25px;\r\n}\r\n\r\n#notesForm\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 85%;\r\n    height: 100%;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n#notesForm *\r\n{\r\n    width: 15%;\r\n    text-align: center;\r\n}\r\n\r\n#description\r\n{\r\n    width: 30%;\r\n    height: 50px;\r\n    resize: none;\r\n}\r\n\r\n#notesForm button\r\n{\r\n    width: 10%;\r\n    height: 50px;\r\n    margin-top: 10px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.footer\r\n{\r\n    background-color: #4f46e5;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.footer p\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: min-content;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/createNote.js":
/*!***************************!*\
  !*** ./src/createNote.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNote: () => (/* binding */ createNote),
/* harmony export */   createPage: () => (/* binding */ createPage)
/* harmony export */ });
// factory function that returns a note
function createNote(title, description, dueDate, priority){
    return{
        title,
        description,
        dueDate,
        priority
    };
}

// factory function that returns a page with an array of notes
function createPage(name, notes){
    return{
        name,
        notes: [notes]
    };
}

/***/ }),

/***/ "./src/getColorByDate.js":
/*!*******************************!*\
  !*** ./src/getColorByDate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorByDate: () => (/* binding */ getColorByDate)
/* harmony export */ });
function getColorByDate(div){
    const currentDate = new Date();
    const inputDate = new Date(div.value);

    // if the date is today mark as urgent
    if (inputDate.toDateString() === currentDate.toDateString()){
        div.style.backgroundColor = 'red';
        div.style.color = 'white';
    } else {
        const timeDifference = inputDate.getTime() - currentDate.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        if (daysDifference <= 1 && daysDifference > 0){
            div.style.backgroundColor = 'yellow';
            div.style.color = 'black';
        } else if (daysDifference >= 1){
            div.style.backgroundColor = 'white';
            div.style.color = 'black';
        } else {
            div.style.backgroundColor = 'black';
            div.style.color = 'white';
        }
    }
}

/***/ }),

/***/ "./src/getNoteForm.js":
/*!****************************!*\
  !*** ./src/getNoteForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNoteForm: () => (/* binding */ getNoteForm),
/* harmony export */   getPageForm: () => (/* binding */ getPageForm)
/* harmony export */ });
// take data from form and immediately create an object
function getNoteForm(){

        const title = document.getElementById('title').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        const description = document.getElementById('description').value;

        if (title && description && dueDate && priority){
            return{
                title,
                description,
                dueDate,
                priority
            };
        } else {
            return;
        }
}

// take name from form and return it
function getPageForm(){
    const name = document.getElementById('pageName').value;
    if (name){
        return name;
    }
}

/***/ }),

/***/ "./src/noteButtons.js":
/*!****************************!*\
  !*** ./src/noteButtons.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expandDiv: () => (/* binding */ expandDiv),
/* harmony export */   toggleDivEdit: () => (/* binding */ toggleDivEdit)
/* harmony export */ });
// change div style to hide or show it
function expandDiv(div){
    if (div.style.display === 'none'){
        div.style.display = 'flex';
    } else {
        div.style.display = 'none';
    }
}

// toggle whether div is editable
function toggleDivEdit(div){
    if (div.contentEditable === 'true'){
        div.contentEditable = 'false';
        div.style.outline = '';
    } else {
        div.contentEditable = 'true';
        div.style.outline = '3px solid black';
    }
}

/***/ }),

/***/ "./src/updateNoteDisplay.js":
/*!**********************************!*\
  !*** ./src/updateNoteDisplay.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateNoteDisplay: () => (/* binding */ updateNoteDisplay)
/* harmony export */ });
/* harmony import */ var _noteButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noteButtons */ "./src/noteButtons.js");
/* harmony import */ var _getColorByDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getColorByDate */ "./src/getColorByDate.js");



// update both pages and notes
function updateNoteDisplay(pages, currentPage){
    renderPages(pages, currentPage);
    renderNotes(pages, currentPage);
}

// render only pages
function renderPages(pages, currentPage){
    let notesPages = document.getElementById('notesPages');

    // remove pages from website
    while (notesPages.firstChild){
        notesPages.removeChild(notesPages.firstChild);
    }

    // render pages
    for (let i = 0; i < pages.length; i++){
        let page = pages[i];

        let pageDiv = document.createElement('div');
        pageDiv.classList.add('notes-page')
        pageDiv.innerText = page.name;

        let pageRemoveButton = document.createElement('button');
        pageRemoveButton.innerText = 'Remove';
        pageRemoveButton.classList = 'page-remove';
        pageDiv.appendChild(pageRemoveButton);

        // switch current page
        pageDiv.addEventListener('click', function(){
            currentPage = i;
            localStorage.setItem('currentPage', JSON.stringify(currentPage));
            updateNoteDisplay(pages, currentPage);
        })

        // remove a page
        pageRemoveButton.addEventListener('click', function(){
            let confirmation = confirm('Are you sure you want to delete this page?');

            if (confirmation){
                pages.splice(i, 1);
                localStorage.setItem('notes', JSON.stringify(pages));
                updateNoteDisplay(pages, currentPage);
            }
        })

        notesPages.appendChild(pageDiv);
    }
}

// render only notes
function renderNotes(pages, currentPage){
    let notesContent = document.getElementById('notesContent');

    // remove notes from website
    while (notesContent.firstChild){
        notesContent.removeChild(notesContent.firstChild);
    }

    // render every note in current page
    for (let i = 0; i < pages[currentPage].notes.length; i++){
        let page = pages[currentPage];
        
        // main div
        let notesNoteDiv = document.createElement('div');
        notesNoteDiv.classList.add('notes-note');
        notesContent.appendChild(notesNoteDiv);
    
        let notesTitleDiv = document.createElement('div');
        notesTitleDiv.classList.add('notes-title');
        notesTitleDiv.innerText = page.notes[i].title;
        notesTitleDiv.contentEditable = false;
        notesNoteDiv.appendChild(notesTitleDiv);
    
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.value = page.notes[i].dueDate;
        dueDateInput.classList.add('notes-date');
        dueDateInput.disabled = true;

        // color date input
        (0,_getColorByDate__WEBPACK_IMPORTED_MODULE_1__.getColorByDate)(dueDateInput);

        notesNoteDiv.appendChild(dueDateInput);

        let notesPriorityDiv = document.createElement('div');
        notesPriorityDiv.classList.add('notes-priority');
        notesPriorityDiv.innerText = page.notes[i].priority;
        notesNoteDiv.appendChild(notesPriorityDiv);

        // render expanding div
        let notesHiddenDiv = document.createElement('div');
        notesHiddenDiv.classList.add('notes-hidden');
        notesHiddenDiv.style.display = 'none';
        notesContent.appendChild(notesHiddenDiv);

        let expandButton = document.createElement('button');
        expandButton.innerText = 'v';
        notesNoteDiv.appendChild(expandButton);

        // show hidden div
        expandButton.addEventListener('click', function() {
            (0,_noteButtons__WEBPACK_IMPORTED_MODULE_0__.expandDiv)(notesHiddenDiv);
        });

        let notesDescriptionDiv = document.createElement('div');
        notesDescriptionDiv.classList.add('notes-description');
        notesDescriptionDiv.innerText = page.notes[i].description;
        notesDescriptionDiv.contentEditable = false;
        notesHiddenDiv.appendChild(notesDescriptionDiv);

        let saveButton = document.createElement('button');
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        notesHiddenDiv.appendChild(editButton);

        // allow editing of text
        editButton.addEventListener('click', function() {

            (0,_noteButtons__WEBPACK_IMPORTED_MODULE_0__.toggleDivEdit)(notesDescriptionDiv);
            (0,_noteButtons__WEBPACK_IMPORTED_MODULE_0__.toggleDivEdit)(notesTitleDiv);

            saveButton.disabled = false;
            dueDateInput.disabled = false;
            editButton.disabled = true;
        });

        saveButton.innerText = 'Save';
        notesHiddenDiv.appendChild(saveButton);
        saveButton.disabled = true;

        // when pressed save edits
        saveButton.addEventListener('click', function() {

            (0,_noteButtons__WEBPACK_IMPORTED_MODULE_0__.toggleDivEdit)(notesDescriptionDiv);
            (0,_noteButtons__WEBPACK_IMPORTED_MODULE_0__.toggleDivEdit)(notesTitleDiv);

            saveButton.disabled = true;
            editButton.disabled = false;
            dueDateInput.disabled = true;

            page.notes[i].description = notesDescriptionDiv.innerText;
            page.notes[i].title = notesTitleDiv.innerText;
            page.notes[i].dueDate = dueDateInput.value;
        });

        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        notesHiddenDiv.appendChild(removeButton);

        // remove a note
        removeButton.addEventListener('click', function() {
            notesNoteDiv.remove();
            notesHiddenDiv.remove();

            pages[currentPage].notes.splice(i, 1);
            localStorage.setItem('notes', JSON.stringify(pages));
        });
    }
}

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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _createNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createNote */ "./src/createNote.js");
/* harmony import */ var _updateNoteDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateNoteDisplay */ "./src/updateNoteDisplay.js");
/* harmony import */ var _getNoteForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNoteForm */ "./src/getNoteForm.js");





var pages = [];
var currentPage = 0;

// if no data in local storage create placeholder
if (!localStorage.getItem('notes')){
    let note = (0,_createNote__WEBPACK_IMPORTED_MODULE_1__.createNote)('Expand me!', 'Good job!', '2025-12-12', 'LOW');
    let page = (0,_createNote__WEBPACK_IMPORTED_MODULE_1__.createPage)('First page!', note);

    pages.push(page);
    (0,_updateNoteDisplay__WEBPACK_IMPORTED_MODULE_2__.updateNoteDisplay)(pages, currentPage);
    localStorage.setItem('notes', JSON.stringify(pages));
    localStorage.setItem('currentPage', JSON.stringify(currentPage));
} else {
    pages = JSON.parse(localStorage.getItem('notes'));
    (0,_updateNoteDisplay__WEBPACK_IMPORTED_MODULE_2__.updateNoteDisplay)(pages, currentPage);
}

// when new page is submitted
document.getElementById('pageForm').addEventListener('submit', function(event){
    event.preventDefault();

    const pageName = (0,_getNoteForm__WEBPACK_IMPORTED_MODULE_3__.getPageForm)();
    const note = (0,_createNote__WEBPACK_IMPORTED_MODULE_1__.createNote)('New page!', '...', '2025-12-12', 'LOW');
    const page = (0,_createNote__WEBPACK_IMPORTED_MODULE_1__.createPage)(pageName, note);

    // get updated date from dynamic event listeners
    pages = JSON.parse(localStorage.getItem('notes'));
    currentPage = JSON.parse(localStorage.getItem('currentPage'));

    pages.push(page);
    localStorage.setItem('notes', JSON.stringify(pages));
    (0,_updateNoteDisplay__WEBPACK_IMPORTED_MODULE_2__.updateNoteDisplay)(pages, currentPage);
})

// when new note is submitted
document.getElementById('notesForm').addEventListener('submit', function(event){
    event.preventDefault();

    // get updated date from dynamic event listeners
    pages = JSON.parse(localStorage.getItem('notes'));
    currentPage = JSON.parse(localStorage.getItem('currentPage'));

    const newNote = (0,_getNoteForm__WEBPACK_IMPORTED_MODULE_3__.getNoteForm)();
    pages[currentPage].notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(pages));
    (0,_updateNoteDisplay__WEBPACK_IMPORTED_MODULE_2__.updateNoteDisplay)(pages, currentPage);

})

console.log("loading successful");
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map