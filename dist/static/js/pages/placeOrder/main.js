global.webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(1);




var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */], {
    store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]
}));
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        navigationBarTitleText: "确认订单"
    }
});

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mp_weui_packages_cell__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_order_goods_list__ = __webpack_require__(214);
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
            items: [{ name: 1, value: '快递配送￥25.00', checked: 'true' }, { name: '2', value: '到店自取￥0.00' }]
        };
    },

    components: { MpCell: __WEBPACK_IMPORTED_MODULE_0_mp_weui_packages_cell__["a" /* default */], orderGoodsList: __WEBPACK_IMPORTED_MODULE_1__components_order_goods_list__["a" /* default */] },
    onLoad: function onLoad() {
        this.toast('tishi');
    }
});

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "place-order"
  }, [_c('radio-group', {
    staticClass: "radio-group",
    attrs: {
      "bindchange": "radioChange",
      "mpcomid": '0'
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('label', {
      key: index,
      staticClass: "radio"
    }, [_c('radio', {
      attrs: {
        "value": item.name,
        "checked": item.checked,
        "color": "#39b27d"
      }
    }), _vm._v(_vm._s(item.value) + "\n        ")], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "site"
  }, [_c('img', {
    staticClass: "left",
    attrs: {
      "src": "",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "middle"
  }, [_vm._m(0), _vm._v(" "), _c('p')], 1), _vm._v(" "), _c('img', {
    staticClass: "right",
    attrs: {
      "src": "",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "nc-line"
  }), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('order-goods-list', {
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('mp-cell', {
    attrs: {
      "content": "标题文字",
      "label": "说明文字",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _vm._m(1)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', [_vm._v("收货人:qin")]), _vm._v(" "), _c('span', [_vm._v("13333333333")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "total"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("总价")]), _vm._v(" "), _c('span', {
    staticClass: "num"
  }, [_vm._v("￥79.8")])]), _vm._v(" "), _c('div', {
    staticClass: "quantity"
  }, [_vm._v("共2件商品")]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_vm._v("想要")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-81cb599a", esExports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_81cb599a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(246);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(192)
}
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-81cb599a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_template_compiler_index_id_data_v_81cb599a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_0_13_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\placeOrder\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81cb599a", Component.options)
  } else {
    hotAPI.reload("data-v-81cb599a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},[104]);
//# sourceMappingURL=main.js.map