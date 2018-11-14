global.webpackJsonp([26],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mp_weui_packages_navbar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Integral_goods_list__ = __webpack_require__(30);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            columns: ['圈子', '我的'],
            activeIndex: 0
        };
    },

    components: { MpNavbar: __WEBPACK_IMPORTED_MODULE_0_mp_weui_packages_navbar__["a" /* default */], integralGoodsList: __WEBPACK_IMPORTED_MODULE_1__components_Integral_goods_list__["a" /* default */] }
});

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "circle"
  }, [_c('mp-navbar', {
    attrs: {
      "columns": _vm.columns,
      "eventid": '0',
      "mpcomid": '0'
    },
    model: {
      value: (_vm.activeIndex),
      callback: function($$v) {
        _vm.activeIndex = $$v
      },
      expression: "activeIndex"
    }
  }, _vm._l((_vm.columns), function(item, index) {
    return (_vm.activeIndex === index) ? _c('div', {
      key: item,
      staticClass: "weui-tab__content"
    }, [_vm._v("\n                " + _vm._s(item) + "的内容\n            ")]) : _vm._e()
  })), _vm._v(" "), _c('div', {
    staticClass: "nc-line"
  }), _vm._v(" "), _c('div', {
    staticClass: "circle-list"
  }, [_c('ul', [_c('li', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "top"
  }, [_c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("一笑很甜")]), _vm._v(" "), _c('span', [_vm._v("2018-11-12")])], 1), _vm._v(" "), _c('p', {
    staticClass: "content"
  }, [_vm._v("上次去农庄玩的时候在农场菜地买的一株小辣椒，买回\n来给女儿玩的，现在两个月了都长成图二的样子了。")]), _vm._v(" "), _c('div', {
    staticClass: "img-box"
  }, [_c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("13")])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('img', {
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("18")])])])], 1)], 1)], 1), _vm._v(" "), _c('integral-goods-list', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-60cbe288", esExports)
  }
}

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_60cbe288_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(217);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-60cbe288"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_60cbe288_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\circle\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-60cbe288", Component.options)
  } else {
    hotAPI.reload("data-v-60cbe288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(1);




var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */], {
    store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]
}));
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: "圈子"
    }
});

/***/ })

},[77]);
//# sourceMappingURL=main.js.map