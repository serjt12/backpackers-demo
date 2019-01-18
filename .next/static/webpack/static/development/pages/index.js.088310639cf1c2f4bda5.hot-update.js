webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ActivityRow.js":
/*!***********************************!*\
  !*** ./components/ActivityRow.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ActivityCardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ActivityCardContent */ "./components/ActivityCardContent.js");
/* harmony import */ var _utils_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/images */ "./utils/images.js");






var top3Activities = _utils_images__WEBPACK_IMPORTED_MODULE_5__["activities"].australia.uluru.slice(0, 3);

var ActivityRow = function ActivityRow(_ref) {
  var column = _ref.column;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    gutter: 16
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a, {
    grid: {
      gutter: 16,
      column: column
    },
    dataSource: top3Activities,
    renderItem: function renderItem(item) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a, {
        cover: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
          src: item,
          alt: ""
        })
      }, "COLUMNAS = ", column, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ActivityCardContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        item: item
      })));
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ActivityRow);

/***/ })

})
//# sourceMappingURL=index.js.088310639cf1c2f4bda5.hot-update.js.map