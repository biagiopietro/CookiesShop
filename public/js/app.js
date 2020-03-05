/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Carousel.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Carousel.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flux */ "./node_modules/vue-flux/dist/vue-flux.umd.min.js");
/* harmony import */ var vue_flux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flux__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueFlux: vue_flux__WEBPACK_IMPORTED_MODULE_0__["VueFlux"]
  },
  data: function data() {
    return {
      vfOptions: {
        autoplay: true
      },
      vfImages: ['https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1571165841024-2ce92069301d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80', 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80', 'https://images.unsplash.com/photo-1481390915718-84930b788814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'],
      vfTransitions: ['swipe'],
      vfCaptions: ['URL1', 'URL2', 'URL3']
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CookiesSection.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CookiesSection.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_tailwind_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-tailwind-modal */ "./node_modules/vue-tailwind-modal/dist/vue-tailwind-modal.common.js");
/* harmony import */ var vue_tailwind_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_tailwind_modal__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTailwindModal: vue_tailwind_modal__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      visible: false,
      cookies: {},
      limit: 4,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
      form: {
        search: ""
      }
    };
  },
  created: function created() {
    this.getCookies();
  },
  methods: {
    show: function show() {
      this.visible = true;
    },
    getCookies: function getCookies(page) {
      var _this = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      var headers = {
        'Accept': 'application/json;charset=utf-8',
        'X-CSRF-TOKEN': this.csrf
      };
      this.$http.get('/cookies?search=' + this.form.search + '&page=' + page, {
        headers: headers
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.cookies = data;
      });
    },
    searchCookies: function searchCookies(search, page) {
      var _this2 = this;

      if (typeof page === 'undefined') {
        page = 1;
      }

      this.$http.get('/searchCookies?search=' + search + '&page=' + page).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this2.cookies = data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    cookies: String,
    ingredients: String
  },
  data: function data() {
    return {
      isOpen: false
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flag-icon-css/css/flag-icon.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/flag-icon-css/css/flag-icon.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flag-icon-background {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n}\n\n.flag-icon {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  position: relative;\n  display: inline-block;\n  width: 1.33333333em;\n  line-height: 1em;\n}\n\n.flag-icon:before {\n  content: \"\\A0\";\n}\n\n.flag-icon.flag-icon-squared {\n  width: 1em;\n}\n\n.flag-icon-ad {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ad.svg */ "./node_modules/flag-icon-css/flags/4x3/ad.svg")) + ");\n}\n\n.flag-icon-ad.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ad.svg */ "./node_modules/flag-icon-css/flags/1x1/ad.svg")) + ");\n}\n\n.flag-icon-ae {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ae.svg */ "./node_modules/flag-icon-css/flags/4x3/ae.svg")) + ");\n}\n\n.flag-icon-ae.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ae.svg */ "./node_modules/flag-icon-css/flags/1x1/ae.svg")) + ");\n}\n\n.flag-icon-af {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/af.svg */ "./node_modules/flag-icon-css/flags/4x3/af.svg")) + ");\n}\n\n.flag-icon-af.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/af.svg */ "./node_modules/flag-icon-css/flags/1x1/af.svg")) + ");\n}\n\n.flag-icon-ag {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ag.svg */ "./node_modules/flag-icon-css/flags/4x3/ag.svg")) + ");\n}\n\n.flag-icon-ag.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ag.svg */ "./node_modules/flag-icon-css/flags/1x1/ag.svg")) + ");\n}\n\n.flag-icon-ai {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ai.svg */ "./node_modules/flag-icon-css/flags/4x3/ai.svg")) + ");\n}\n\n.flag-icon-ai.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ai.svg */ "./node_modules/flag-icon-css/flags/1x1/ai.svg")) + ");\n}\n\n.flag-icon-al {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/al.svg */ "./node_modules/flag-icon-css/flags/4x3/al.svg")) + ");\n}\n\n.flag-icon-al.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/al.svg */ "./node_modules/flag-icon-css/flags/1x1/al.svg")) + ");\n}\n\n.flag-icon-am {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/am.svg */ "./node_modules/flag-icon-css/flags/4x3/am.svg")) + ");\n}\n\n.flag-icon-am.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/am.svg */ "./node_modules/flag-icon-css/flags/1x1/am.svg")) + ");\n}\n\n.flag-icon-ao {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ao.svg */ "./node_modules/flag-icon-css/flags/4x3/ao.svg")) + ");\n}\n\n.flag-icon-ao.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ao.svg */ "./node_modules/flag-icon-css/flags/1x1/ao.svg")) + ");\n}\n\n.flag-icon-aq {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/aq.svg */ "./node_modules/flag-icon-css/flags/4x3/aq.svg")) + ");\n}\n\n.flag-icon-aq.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/aq.svg */ "./node_modules/flag-icon-css/flags/1x1/aq.svg")) + ");\n}\n\n.flag-icon-ar {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ar.svg */ "./node_modules/flag-icon-css/flags/4x3/ar.svg")) + ");\n}\n\n.flag-icon-ar.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ar.svg */ "./node_modules/flag-icon-css/flags/1x1/ar.svg")) + ");\n}\n\n.flag-icon-as {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/as.svg */ "./node_modules/flag-icon-css/flags/4x3/as.svg")) + ");\n}\n\n.flag-icon-as.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/as.svg */ "./node_modules/flag-icon-css/flags/1x1/as.svg")) + ");\n}\n\n.flag-icon-at {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/at.svg */ "./node_modules/flag-icon-css/flags/4x3/at.svg")) + ");\n}\n\n.flag-icon-at.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/at.svg */ "./node_modules/flag-icon-css/flags/1x1/at.svg")) + ");\n}\n\n.flag-icon-au {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/au.svg */ "./node_modules/flag-icon-css/flags/4x3/au.svg")) + ");\n}\n\n.flag-icon-au.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/au.svg */ "./node_modules/flag-icon-css/flags/1x1/au.svg")) + ");\n}\n\n.flag-icon-aw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/aw.svg */ "./node_modules/flag-icon-css/flags/4x3/aw.svg")) + ");\n}\n\n.flag-icon-aw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/aw.svg */ "./node_modules/flag-icon-css/flags/1x1/aw.svg")) + ");\n}\n\n.flag-icon-ax {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ax.svg */ "./node_modules/flag-icon-css/flags/4x3/ax.svg")) + ");\n}\n\n.flag-icon-ax.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ax.svg */ "./node_modules/flag-icon-css/flags/1x1/ax.svg")) + ");\n}\n\n.flag-icon-az {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/az.svg */ "./node_modules/flag-icon-css/flags/4x3/az.svg")) + ");\n}\n\n.flag-icon-az.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/az.svg */ "./node_modules/flag-icon-css/flags/1x1/az.svg")) + ");\n}\n\n.flag-icon-ba {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ba.svg */ "./node_modules/flag-icon-css/flags/4x3/ba.svg")) + ");\n}\n\n.flag-icon-ba.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ba.svg */ "./node_modules/flag-icon-css/flags/1x1/ba.svg")) + ");\n}\n\n.flag-icon-bb {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bb.svg */ "./node_modules/flag-icon-css/flags/4x3/bb.svg")) + ");\n}\n\n.flag-icon-bb.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bb.svg */ "./node_modules/flag-icon-css/flags/1x1/bb.svg")) + ");\n}\n\n.flag-icon-bd {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bd.svg */ "./node_modules/flag-icon-css/flags/4x3/bd.svg")) + ");\n}\n\n.flag-icon-bd.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bd.svg */ "./node_modules/flag-icon-css/flags/1x1/bd.svg")) + ");\n}\n\n.flag-icon-be {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/be.svg */ "./node_modules/flag-icon-css/flags/4x3/be.svg")) + ");\n}\n\n.flag-icon-be.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/be.svg */ "./node_modules/flag-icon-css/flags/1x1/be.svg")) + ");\n}\n\n.flag-icon-bf {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bf.svg */ "./node_modules/flag-icon-css/flags/4x3/bf.svg")) + ");\n}\n\n.flag-icon-bf.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bf.svg */ "./node_modules/flag-icon-css/flags/1x1/bf.svg")) + ");\n}\n\n.flag-icon-bg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bg.svg */ "./node_modules/flag-icon-css/flags/4x3/bg.svg")) + ");\n}\n\n.flag-icon-bg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bg.svg */ "./node_modules/flag-icon-css/flags/1x1/bg.svg")) + ");\n}\n\n.flag-icon-bh {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bh.svg */ "./node_modules/flag-icon-css/flags/4x3/bh.svg")) + ");\n}\n\n.flag-icon-bh.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bh.svg */ "./node_modules/flag-icon-css/flags/1x1/bh.svg")) + ");\n}\n\n.flag-icon-bi {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bi.svg */ "./node_modules/flag-icon-css/flags/4x3/bi.svg")) + ");\n}\n\n.flag-icon-bi.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bi.svg */ "./node_modules/flag-icon-css/flags/1x1/bi.svg")) + ");\n}\n\n.flag-icon-bj {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bj.svg */ "./node_modules/flag-icon-css/flags/4x3/bj.svg")) + ");\n}\n\n.flag-icon-bj.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bj.svg */ "./node_modules/flag-icon-css/flags/1x1/bj.svg")) + ");\n}\n\n.flag-icon-bl {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bl.svg */ "./node_modules/flag-icon-css/flags/4x3/bl.svg")) + ");\n}\n\n.flag-icon-bl.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bl.svg */ "./node_modules/flag-icon-css/flags/1x1/bl.svg")) + ");\n}\n\n.flag-icon-bm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bm.svg */ "./node_modules/flag-icon-css/flags/4x3/bm.svg")) + ");\n}\n\n.flag-icon-bm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bm.svg */ "./node_modules/flag-icon-css/flags/1x1/bm.svg")) + ");\n}\n\n.flag-icon-bn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bn.svg */ "./node_modules/flag-icon-css/flags/4x3/bn.svg")) + ");\n}\n\n.flag-icon-bn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bn.svg */ "./node_modules/flag-icon-css/flags/1x1/bn.svg")) + ");\n}\n\n.flag-icon-bo {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bo.svg */ "./node_modules/flag-icon-css/flags/4x3/bo.svg")) + ");\n}\n\n.flag-icon-bo.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bo.svg */ "./node_modules/flag-icon-css/flags/1x1/bo.svg")) + ");\n}\n\n.flag-icon-bq {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bq.svg */ "./node_modules/flag-icon-css/flags/4x3/bq.svg")) + ");\n}\n\n.flag-icon-bq.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bq.svg */ "./node_modules/flag-icon-css/flags/1x1/bq.svg")) + ");\n}\n\n.flag-icon-br {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/br.svg */ "./node_modules/flag-icon-css/flags/4x3/br.svg")) + ");\n}\n\n.flag-icon-br.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/br.svg */ "./node_modules/flag-icon-css/flags/1x1/br.svg")) + ");\n}\n\n.flag-icon-bs {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bs.svg */ "./node_modules/flag-icon-css/flags/4x3/bs.svg")) + ");\n}\n\n.flag-icon-bs.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bs.svg */ "./node_modules/flag-icon-css/flags/1x1/bs.svg")) + ");\n}\n\n.flag-icon-bt {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bt.svg */ "./node_modules/flag-icon-css/flags/4x3/bt.svg")) + ");\n}\n\n.flag-icon-bt.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bt.svg */ "./node_modules/flag-icon-css/flags/1x1/bt.svg")) + ");\n}\n\n.flag-icon-bv {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bv.svg */ "./node_modules/flag-icon-css/flags/4x3/bv.svg")) + ");\n}\n\n.flag-icon-bv.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bv.svg */ "./node_modules/flag-icon-css/flags/1x1/bv.svg")) + ");\n}\n\n.flag-icon-bw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bw.svg */ "./node_modules/flag-icon-css/flags/4x3/bw.svg")) + ");\n}\n\n.flag-icon-bw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bw.svg */ "./node_modules/flag-icon-css/flags/1x1/bw.svg")) + ");\n}\n\n.flag-icon-by {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/by.svg */ "./node_modules/flag-icon-css/flags/4x3/by.svg")) + ");\n}\n\n.flag-icon-by.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/by.svg */ "./node_modules/flag-icon-css/flags/1x1/by.svg")) + ");\n}\n\n.flag-icon-bz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/bz.svg */ "./node_modules/flag-icon-css/flags/4x3/bz.svg")) + ");\n}\n\n.flag-icon-bz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/bz.svg */ "./node_modules/flag-icon-css/flags/1x1/bz.svg")) + ");\n}\n\n.flag-icon-ca {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ca.svg */ "./node_modules/flag-icon-css/flags/4x3/ca.svg")) + ");\n}\n\n.flag-icon-ca.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ca.svg */ "./node_modules/flag-icon-css/flags/1x1/ca.svg")) + ");\n}\n\n.flag-icon-cc {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cc.svg */ "./node_modules/flag-icon-css/flags/4x3/cc.svg")) + ");\n}\n\n.flag-icon-cc.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cc.svg */ "./node_modules/flag-icon-css/flags/1x1/cc.svg")) + ");\n}\n\n.flag-icon-cd {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cd.svg */ "./node_modules/flag-icon-css/flags/4x3/cd.svg")) + ");\n}\n\n.flag-icon-cd.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cd.svg */ "./node_modules/flag-icon-css/flags/1x1/cd.svg")) + ");\n}\n\n.flag-icon-cf {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cf.svg */ "./node_modules/flag-icon-css/flags/4x3/cf.svg")) + ");\n}\n\n.flag-icon-cf.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cf.svg */ "./node_modules/flag-icon-css/flags/1x1/cf.svg")) + ");\n}\n\n.flag-icon-cg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cg.svg */ "./node_modules/flag-icon-css/flags/4x3/cg.svg")) + ");\n}\n\n.flag-icon-cg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cg.svg */ "./node_modules/flag-icon-css/flags/1x1/cg.svg")) + ");\n}\n\n.flag-icon-ch {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ch.svg */ "./node_modules/flag-icon-css/flags/4x3/ch.svg")) + ");\n}\n\n.flag-icon-ch.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ch.svg */ "./node_modules/flag-icon-css/flags/1x1/ch.svg")) + ");\n}\n\n.flag-icon-ci {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ci.svg */ "./node_modules/flag-icon-css/flags/4x3/ci.svg")) + ");\n}\n\n.flag-icon-ci.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ci.svg */ "./node_modules/flag-icon-css/flags/1x1/ci.svg")) + ");\n}\n\n.flag-icon-ck {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ck.svg */ "./node_modules/flag-icon-css/flags/4x3/ck.svg")) + ");\n}\n\n.flag-icon-ck.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ck.svg */ "./node_modules/flag-icon-css/flags/1x1/ck.svg")) + ");\n}\n\n.flag-icon-cl {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cl.svg */ "./node_modules/flag-icon-css/flags/4x3/cl.svg")) + ");\n}\n\n.flag-icon-cl.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cl.svg */ "./node_modules/flag-icon-css/flags/1x1/cl.svg")) + ");\n}\n\n.flag-icon-cm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cm.svg */ "./node_modules/flag-icon-css/flags/4x3/cm.svg")) + ");\n}\n\n.flag-icon-cm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cm.svg */ "./node_modules/flag-icon-css/flags/1x1/cm.svg")) + ");\n}\n\n.flag-icon-cn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cn.svg */ "./node_modules/flag-icon-css/flags/4x3/cn.svg")) + ");\n}\n\n.flag-icon-cn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cn.svg */ "./node_modules/flag-icon-css/flags/1x1/cn.svg")) + ");\n}\n\n.flag-icon-co {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/co.svg */ "./node_modules/flag-icon-css/flags/4x3/co.svg")) + ");\n}\n\n.flag-icon-co.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/co.svg */ "./node_modules/flag-icon-css/flags/1x1/co.svg")) + ");\n}\n\n.flag-icon-cr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cr.svg */ "./node_modules/flag-icon-css/flags/4x3/cr.svg")) + ");\n}\n\n.flag-icon-cr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cr.svg */ "./node_modules/flag-icon-css/flags/1x1/cr.svg")) + ");\n}\n\n.flag-icon-cu {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cu.svg */ "./node_modules/flag-icon-css/flags/4x3/cu.svg")) + ");\n}\n\n.flag-icon-cu.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cu.svg */ "./node_modules/flag-icon-css/flags/1x1/cu.svg")) + ");\n}\n\n.flag-icon-cv {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cv.svg */ "./node_modules/flag-icon-css/flags/4x3/cv.svg")) + ");\n}\n\n.flag-icon-cv.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cv.svg */ "./node_modules/flag-icon-css/flags/1x1/cv.svg")) + ");\n}\n\n.flag-icon-cw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cw.svg */ "./node_modules/flag-icon-css/flags/4x3/cw.svg")) + ");\n}\n\n.flag-icon-cw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cw.svg */ "./node_modules/flag-icon-css/flags/1x1/cw.svg")) + ");\n}\n\n.flag-icon-cx {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cx.svg */ "./node_modules/flag-icon-css/flags/4x3/cx.svg")) + ");\n}\n\n.flag-icon-cx.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cx.svg */ "./node_modules/flag-icon-css/flags/1x1/cx.svg")) + ");\n}\n\n.flag-icon-cy {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cy.svg */ "./node_modules/flag-icon-css/flags/4x3/cy.svg")) + ");\n}\n\n.flag-icon-cy.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cy.svg */ "./node_modules/flag-icon-css/flags/1x1/cy.svg")) + ");\n}\n\n.flag-icon-cz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/cz.svg */ "./node_modules/flag-icon-css/flags/4x3/cz.svg")) + ");\n}\n\n.flag-icon-cz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/cz.svg */ "./node_modules/flag-icon-css/flags/1x1/cz.svg")) + ");\n}\n\n.flag-icon-de {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/de.svg */ "./node_modules/flag-icon-css/flags/4x3/de.svg")) + ");\n}\n\n.flag-icon-de.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/de.svg */ "./node_modules/flag-icon-css/flags/1x1/de.svg")) + ");\n}\n\n.flag-icon-dj {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/dj.svg */ "./node_modules/flag-icon-css/flags/4x3/dj.svg")) + ");\n}\n\n.flag-icon-dj.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/dj.svg */ "./node_modules/flag-icon-css/flags/1x1/dj.svg")) + ");\n}\n\n.flag-icon-dk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/dk.svg */ "./node_modules/flag-icon-css/flags/4x3/dk.svg")) + ");\n}\n\n.flag-icon-dk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/dk.svg */ "./node_modules/flag-icon-css/flags/1x1/dk.svg")) + ");\n}\n\n.flag-icon-dm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/dm.svg */ "./node_modules/flag-icon-css/flags/4x3/dm.svg")) + ");\n}\n\n.flag-icon-dm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/dm.svg */ "./node_modules/flag-icon-css/flags/1x1/dm.svg")) + ");\n}\n\n.flag-icon-do {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/do.svg */ "./node_modules/flag-icon-css/flags/4x3/do.svg")) + ");\n}\n\n.flag-icon-do.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/do.svg */ "./node_modules/flag-icon-css/flags/1x1/do.svg")) + ");\n}\n\n.flag-icon-dz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/dz.svg */ "./node_modules/flag-icon-css/flags/4x3/dz.svg")) + ");\n}\n\n.flag-icon-dz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/dz.svg */ "./node_modules/flag-icon-css/flags/1x1/dz.svg")) + ");\n}\n\n.flag-icon-ec {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ec.svg */ "./node_modules/flag-icon-css/flags/4x3/ec.svg")) + ");\n}\n\n.flag-icon-ec.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ec.svg */ "./node_modules/flag-icon-css/flags/1x1/ec.svg")) + ");\n}\n\n.flag-icon-ee {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ee.svg */ "./node_modules/flag-icon-css/flags/4x3/ee.svg")) + ");\n}\n\n.flag-icon-ee.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ee.svg */ "./node_modules/flag-icon-css/flags/1x1/ee.svg")) + ");\n}\n\n.flag-icon-eg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/eg.svg */ "./node_modules/flag-icon-css/flags/4x3/eg.svg")) + ");\n}\n\n.flag-icon-eg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/eg.svg */ "./node_modules/flag-icon-css/flags/1x1/eg.svg")) + ");\n}\n\n.flag-icon-eh {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/eh.svg */ "./node_modules/flag-icon-css/flags/4x3/eh.svg")) + ");\n}\n\n.flag-icon-eh.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/eh.svg */ "./node_modules/flag-icon-css/flags/1x1/eh.svg")) + ");\n}\n\n.flag-icon-er {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/er.svg */ "./node_modules/flag-icon-css/flags/4x3/er.svg")) + ");\n}\n\n.flag-icon-er.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/er.svg */ "./node_modules/flag-icon-css/flags/1x1/er.svg")) + ");\n}\n\n.flag-icon-es {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/es.svg */ "./node_modules/flag-icon-css/flags/4x3/es.svg")) + ");\n}\n\n.flag-icon-es.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/es.svg */ "./node_modules/flag-icon-css/flags/1x1/es.svg")) + ");\n}\n\n.flag-icon-et {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/et.svg */ "./node_modules/flag-icon-css/flags/4x3/et.svg")) + ");\n}\n\n.flag-icon-et.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/et.svg */ "./node_modules/flag-icon-css/flags/1x1/et.svg")) + ");\n}\n\n.flag-icon-fi {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/fi.svg */ "./node_modules/flag-icon-css/flags/4x3/fi.svg")) + ");\n}\n\n.flag-icon-fi.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/fi.svg */ "./node_modules/flag-icon-css/flags/1x1/fi.svg")) + ");\n}\n\n.flag-icon-fj {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/fj.svg */ "./node_modules/flag-icon-css/flags/4x3/fj.svg")) + ");\n}\n\n.flag-icon-fj.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/fj.svg */ "./node_modules/flag-icon-css/flags/1x1/fj.svg")) + ");\n}\n\n.flag-icon-fk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/fk.svg */ "./node_modules/flag-icon-css/flags/4x3/fk.svg")) + ");\n}\n\n.flag-icon-fk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/fk.svg */ "./node_modules/flag-icon-css/flags/1x1/fk.svg")) + ");\n}\n\n.flag-icon-fm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/fm.svg */ "./node_modules/flag-icon-css/flags/4x3/fm.svg")) + ");\n}\n\n.flag-icon-fm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/fm.svg */ "./node_modules/flag-icon-css/flags/1x1/fm.svg")) + ");\n}\n\n.flag-icon-fo {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/fo.svg */ "./node_modules/flag-icon-css/flags/4x3/fo.svg")) + ");\n}\n\n.flag-icon-fo.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/fo.svg */ "./node_modules/flag-icon-css/flags/1x1/fo.svg")) + ");\n}\n\n.flag-icon-fr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/fr.svg */ "./node_modules/flag-icon-css/flags/4x3/fr.svg")) + ");\n}\n\n.flag-icon-fr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/fr.svg */ "./node_modules/flag-icon-css/flags/1x1/fr.svg")) + ");\n}\n\n.flag-icon-ga {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ga.svg */ "./node_modules/flag-icon-css/flags/4x3/ga.svg")) + ");\n}\n\n.flag-icon-ga.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ga.svg */ "./node_modules/flag-icon-css/flags/1x1/ga.svg")) + ");\n}\n\n.flag-icon-gb {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gb.svg */ "./node_modules/flag-icon-css/flags/4x3/gb.svg")) + ");\n}\n\n.flag-icon-gb.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gb.svg */ "./node_modules/flag-icon-css/flags/1x1/gb.svg")) + ");\n}\n\n.flag-icon-gd {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gd.svg */ "./node_modules/flag-icon-css/flags/4x3/gd.svg")) + ");\n}\n\n.flag-icon-gd.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gd.svg */ "./node_modules/flag-icon-css/flags/1x1/gd.svg")) + ");\n}\n\n.flag-icon-ge {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ge.svg */ "./node_modules/flag-icon-css/flags/4x3/ge.svg")) + ");\n}\n\n.flag-icon-ge.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ge.svg */ "./node_modules/flag-icon-css/flags/1x1/ge.svg")) + ");\n}\n\n.flag-icon-gf {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gf.svg */ "./node_modules/flag-icon-css/flags/4x3/gf.svg")) + ");\n}\n\n.flag-icon-gf.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gf.svg */ "./node_modules/flag-icon-css/flags/1x1/gf.svg")) + ");\n}\n\n.flag-icon-gg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gg.svg */ "./node_modules/flag-icon-css/flags/4x3/gg.svg")) + ");\n}\n\n.flag-icon-gg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gg.svg */ "./node_modules/flag-icon-css/flags/1x1/gg.svg")) + ");\n}\n\n.flag-icon-gh {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gh.svg */ "./node_modules/flag-icon-css/flags/4x3/gh.svg")) + ");\n}\n\n.flag-icon-gh.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gh.svg */ "./node_modules/flag-icon-css/flags/1x1/gh.svg")) + ");\n}\n\n.flag-icon-gi {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gi.svg */ "./node_modules/flag-icon-css/flags/4x3/gi.svg")) + ");\n}\n\n.flag-icon-gi.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gi.svg */ "./node_modules/flag-icon-css/flags/1x1/gi.svg")) + ");\n}\n\n.flag-icon-gl {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gl.svg */ "./node_modules/flag-icon-css/flags/4x3/gl.svg")) + ");\n}\n\n.flag-icon-gl.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gl.svg */ "./node_modules/flag-icon-css/flags/1x1/gl.svg")) + ");\n}\n\n.flag-icon-gm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gm.svg */ "./node_modules/flag-icon-css/flags/4x3/gm.svg")) + ");\n}\n\n.flag-icon-gm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gm.svg */ "./node_modules/flag-icon-css/flags/1x1/gm.svg")) + ");\n}\n\n.flag-icon-gn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gn.svg */ "./node_modules/flag-icon-css/flags/4x3/gn.svg")) + ");\n}\n\n.flag-icon-gn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gn.svg */ "./node_modules/flag-icon-css/flags/1x1/gn.svg")) + ");\n}\n\n.flag-icon-gp {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gp.svg */ "./node_modules/flag-icon-css/flags/4x3/gp.svg")) + ");\n}\n\n.flag-icon-gp.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gp.svg */ "./node_modules/flag-icon-css/flags/1x1/gp.svg")) + ");\n}\n\n.flag-icon-gq {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gq.svg */ "./node_modules/flag-icon-css/flags/4x3/gq.svg")) + ");\n}\n\n.flag-icon-gq.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gq.svg */ "./node_modules/flag-icon-css/flags/1x1/gq.svg")) + ");\n}\n\n.flag-icon-gr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gr.svg */ "./node_modules/flag-icon-css/flags/4x3/gr.svg")) + ");\n}\n\n.flag-icon-gr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gr.svg */ "./node_modules/flag-icon-css/flags/1x1/gr.svg")) + ");\n}\n\n.flag-icon-gs {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gs.svg */ "./node_modules/flag-icon-css/flags/4x3/gs.svg")) + ");\n}\n\n.flag-icon-gs.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gs.svg */ "./node_modules/flag-icon-css/flags/1x1/gs.svg")) + ");\n}\n\n.flag-icon-gt {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gt.svg */ "./node_modules/flag-icon-css/flags/4x3/gt.svg")) + ");\n}\n\n.flag-icon-gt.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gt.svg */ "./node_modules/flag-icon-css/flags/1x1/gt.svg")) + ");\n}\n\n.flag-icon-gu {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gu.svg */ "./node_modules/flag-icon-css/flags/4x3/gu.svg")) + ");\n}\n\n.flag-icon-gu.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gu.svg */ "./node_modules/flag-icon-css/flags/1x1/gu.svg")) + ");\n}\n\n.flag-icon-gw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gw.svg */ "./node_modules/flag-icon-css/flags/4x3/gw.svg")) + ");\n}\n\n.flag-icon-gw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gw.svg */ "./node_modules/flag-icon-css/flags/1x1/gw.svg")) + ");\n}\n\n.flag-icon-gy {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gy.svg */ "./node_modules/flag-icon-css/flags/4x3/gy.svg")) + ");\n}\n\n.flag-icon-gy.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gy.svg */ "./node_modules/flag-icon-css/flags/1x1/gy.svg")) + ");\n}\n\n.flag-icon-hk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/hk.svg */ "./node_modules/flag-icon-css/flags/4x3/hk.svg")) + ");\n}\n\n.flag-icon-hk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/hk.svg */ "./node_modules/flag-icon-css/flags/1x1/hk.svg")) + ");\n}\n\n.flag-icon-hm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/hm.svg */ "./node_modules/flag-icon-css/flags/4x3/hm.svg")) + ");\n}\n\n.flag-icon-hm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/hm.svg */ "./node_modules/flag-icon-css/flags/1x1/hm.svg")) + ");\n}\n\n.flag-icon-hn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/hn.svg */ "./node_modules/flag-icon-css/flags/4x3/hn.svg")) + ");\n}\n\n.flag-icon-hn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/hn.svg */ "./node_modules/flag-icon-css/flags/1x1/hn.svg")) + ");\n}\n\n.flag-icon-hr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/hr.svg */ "./node_modules/flag-icon-css/flags/4x3/hr.svg")) + ");\n}\n\n.flag-icon-hr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/hr.svg */ "./node_modules/flag-icon-css/flags/1x1/hr.svg")) + ");\n}\n\n.flag-icon-ht {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ht.svg */ "./node_modules/flag-icon-css/flags/4x3/ht.svg")) + ");\n}\n\n.flag-icon-ht.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ht.svg */ "./node_modules/flag-icon-css/flags/1x1/ht.svg")) + ");\n}\n\n.flag-icon-hu {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/hu.svg */ "./node_modules/flag-icon-css/flags/4x3/hu.svg")) + ");\n}\n\n.flag-icon-hu.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/hu.svg */ "./node_modules/flag-icon-css/flags/1x1/hu.svg")) + ");\n}\n\n.flag-icon-id {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/id.svg */ "./node_modules/flag-icon-css/flags/4x3/id.svg")) + ");\n}\n\n.flag-icon-id.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/id.svg */ "./node_modules/flag-icon-css/flags/1x1/id.svg")) + ");\n}\n\n.flag-icon-ie {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ie.svg */ "./node_modules/flag-icon-css/flags/4x3/ie.svg")) + ");\n}\n\n.flag-icon-ie.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ie.svg */ "./node_modules/flag-icon-css/flags/1x1/ie.svg")) + ");\n}\n\n.flag-icon-il {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/il.svg */ "./node_modules/flag-icon-css/flags/4x3/il.svg")) + ");\n}\n\n.flag-icon-il.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/il.svg */ "./node_modules/flag-icon-css/flags/1x1/il.svg")) + ");\n}\n\n.flag-icon-im {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/im.svg */ "./node_modules/flag-icon-css/flags/4x3/im.svg")) + ");\n}\n\n.flag-icon-im.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/im.svg */ "./node_modules/flag-icon-css/flags/1x1/im.svg")) + ");\n}\n\n.flag-icon-in {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/in.svg */ "./node_modules/flag-icon-css/flags/4x3/in.svg")) + ");\n}\n\n.flag-icon-in.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/in.svg */ "./node_modules/flag-icon-css/flags/1x1/in.svg")) + ");\n}\n\n.flag-icon-io {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/io.svg */ "./node_modules/flag-icon-css/flags/4x3/io.svg")) + ");\n}\n\n.flag-icon-io.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/io.svg */ "./node_modules/flag-icon-css/flags/1x1/io.svg")) + ");\n}\n\n.flag-icon-iq {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/iq.svg */ "./node_modules/flag-icon-css/flags/4x3/iq.svg")) + ");\n}\n\n.flag-icon-iq.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/iq.svg */ "./node_modules/flag-icon-css/flags/1x1/iq.svg")) + ");\n}\n\n.flag-icon-ir {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ir.svg */ "./node_modules/flag-icon-css/flags/4x3/ir.svg")) + ");\n}\n\n.flag-icon-ir.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ir.svg */ "./node_modules/flag-icon-css/flags/1x1/ir.svg")) + ");\n}\n\n.flag-icon-is {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/is.svg */ "./node_modules/flag-icon-css/flags/4x3/is.svg")) + ");\n}\n\n.flag-icon-is.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/is.svg */ "./node_modules/flag-icon-css/flags/1x1/is.svg")) + ");\n}\n\n.flag-icon-it {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/it.svg */ "./node_modules/flag-icon-css/flags/4x3/it.svg")) + ");\n}\n\n.flag-icon-it.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/it.svg */ "./node_modules/flag-icon-css/flags/1x1/it.svg")) + ");\n}\n\n.flag-icon-je {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/je.svg */ "./node_modules/flag-icon-css/flags/4x3/je.svg")) + ");\n}\n\n.flag-icon-je.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/je.svg */ "./node_modules/flag-icon-css/flags/1x1/je.svg")) + ");\n}\n\n.flag-icon-jm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/jm.svg */ "./node_modules/flag-icon-css/flags/4x3/jm.svg")) + ");\n}\n\n.flag-icon-jm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/jm.svg */ "./node_modules/flag-icon-css/flags/1x1/jm.svg")) + ");\n}\n\n.flag-icon-jo {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/jo.svg */ "./node_modules/flag-icon-css/flags/4x3/jo.svg")) + ");\n}\n\n.flag-icon-jo.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/jo.svg */ "./node_modules/flag-icon-css/flags/1x1/jo.svg")) + ");\n}\n\n.flag-icon-jp {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/jp.svg */ "./node_modules/flag-icon-css/flags/4x3/jp.svg")) + ");\n}\n\n.flag-icon-jp.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/jp.svg */ "./node_modules/flag-icon-css/flags/1x1/jp.svg")) + ");\n}\n\n.flag-icon-ke {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ke.svg */ "./node_modules/flag-icon-css/flags/4x3/ke.svg")) + ");\n}\n\n.flag-icon-ke.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ke.svg */ "./node_modules/flag-icon-css/flags/1x1/ke.svg")) + ");\n}\n\n.flag-icon-kg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/kg.svg */ "./node_modules/flag-icon-css/flags/4x3/kg.svg")) + ");\n}\n\n.flag-icon-kg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/kg.svg */ "./node_modules/flag-icon-css/flags/1x1/kg.svg")) + ");\n}\n\n.flag-icon-kh {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/kh.svg */ "./node_modules/flag-icon-css/flags/4x3/kh.svg")) + ");\n}\n\n.flag-icon-kh.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/kh.svg */ "./node_modules/flag-icon-css/flags/1x1/kh.svg")) + ");\n}\n\n.flag-icon-ki {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ki.svg */ "./node_modules/flag-icon-css/flags/4x3/ki.svg")) + ");\n}\n\n.flag-icon-ki.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ki.svg */ "./node_modules/flag-icon-css/flags/1x1/ki.svg")) + ");\n}\n\n.flag-icon-km {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/km.svg */ "./node_modules/flag-icon-css/flags/4x3/km.svg")) + ");\n}\n\n.flag-icon-km.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/km.svg */ "./node_modules/flag-icon-css/flags/1x1/km.svg")) + ");\n}\n\n.flag-icon-kn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/kn.svg */ "./node_modules/flag-icon-css/flags/4x3/kn.svg")) + ");\n}\n\n.flag-icon-kn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/kn.svg */ "./node_modules/flag-icon-css/flags/1x1/kn.svg")) + ");\n}\n\n.flag-icon-kp {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/kp.svg */ "./node_modules/flag-icon-css/flags/4x3/kp.svg")) + ");\n}\n\n.flag-icon-kp.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/kp.svg */ "./node_modules/flag-icon-css/flags/1x1/kp.svg")) + ");\n}\n\n.flag-icon-kr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/kr.svg */ "./node_modules/flag-icon-css/flags/4x3/kr.svg")) + ");\n}\n\n.flag-icon-kr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/kr.svg */ "./node_modules/flag-icon-css/flags/1x1/kr.svg")) + ");\n}\n\n.flag-icon-kw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/kw.svg */ "./node_modules/flag-icon-css/flags/4x3/kw.svg")) + ");\n}\n\n.flag-icon-kw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/kw.svg */ "./node_modules/flag-icon-css/flags/1x1/kw.svg")) + ");\n}\n\n.flag-icon-ky {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ky.svg */ "./node_modules/flag-icon-css/flags/4x3/ky.svg")) + ");\n}\n\n.flag-icon-ky.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ky.svg */ "./node_modules/flag-icon-css/flags/1x1/ky.svg")) + ");\n}\n\n.flag-icon-kz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/kz.svg */ "./node_modules/flag-icon-css/flags/4x3/kz.svg")) + ");\n}\n\n.flag-icon-kz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/kz.svg */ "./node_modules/flag-icon-css/flags/1x1/kz.svg")) + ");\n}\n\n.flag-icon-la {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/la.svg */ "./node_modules/flag-icon-css/flags/4x3/la.svg")) + ");\n}\n\n.flag-icon-la.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/la.svg */ "./node_modules/flag-icon-css/flags/1x1/la.svg")) + ");\n}\n\n.flag-icon-lb {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/lb.svg */ "./node_modules/flag-icon-css/flags/4x3/lb.svg")) + ");\n}\n\n.flag-icon-lb.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/lb.svg */ "./node_modules/flag-icon-css/flags/1x1/lb.svg")) + ");\n}\n\n.flag-icon-lc {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/lc.svg */ "./node_modules/flag-icon-css/flags/4x3/lc.svg")) + ");\n}\n\n.flag-icon-lc.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/lc.svg */ "./node_modules/flag-icon-css/flags/1x1/lc.svg")) + ");\n}\n\n.flag-icon-li {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/li.svg */ "./node_modules/flag-icon-css/flags/4x3/li.svg")) + ");\n}\n\n.flag-icon-li.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/li.svg */ "./node_modules/flag-icon-css/flags/1x1/li.svg")) + ");\n}\n\n.flag-icon-lk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/lk.svg */ "./node_modules/flag-icon-css/flags/4x3/lk.svg")) + ");\n}\n\n.flag-icon-lk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/lk.svg */ "./node_modules/flag-icon-css/flags/1x1/lk.svg")) + ");\n}\n\n.flag-icon-lr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/lr.svg */ "./node_modules/flag-icon-css/flags/4x3/lr.svg")) + ");\n}\n\n.flag-icon-lr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/lr.svg */ "./node_modules/flag-icon-css/flags/1x1/lr.svg")) + ");\n}\n\n.flag-icon-ls {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ls.svg */ "./node_modules/flag-icon-css/flags/4x3/ls.svg")) + ");\n}\n\n.flag-icon-ls.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ls.svg */ "./node_modules/flag-icon-css/flags/1x1/ls.svg")) + ");\n}\n\n.flag-icon-lt {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/lt.svg */ "./node_modules/flag-icon-css/flags/4x3/lt.svg")) + ");\n}\n\n.flag-icon-lt.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/lt.svg */ "./node_modules/flag-icon-css/flags/1x1/lt.svg")) + ");\n}\n\n.flag-icon-lu {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/lu.svg */ "./node_modules/flag-icon-css/flags/4x3/lu.svg")) + ");\n}\n\n.flag-icon-lu.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/lu.svg */ "./node_modules/flag-icon-css/flags/1x1/lu.svg")) + ");\n}\n\n.flag-icon-lv {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/lv.svg */ "./node_modules/flag-icon-css/flags/4x3/lv.svg")) + ");\n}\n\n.flag-icon-lv.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/lv.svg */ "./node_modules/flag-icon-css/flags/1x1/lv.svg")) + ");\n}\n\n.flag-icon-ly {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ly.svg */ "./node_modules/flag-icon-css/flags/4x3/ly.svg")) + ");\n}\n\n.flag-icon-ly.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ly.svg */ "./node_modules/flag-icon-css/flags/1x1/ly.svg")) + ");\n}\n\n.flag-icon-ma {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ma.svg */ "./node_modules/flag-icon-css/flags/4x3/ma.svg")) + ");\n}\n\n.flag-icon-ma.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ma.svg */ "./node_modules/flag-icon-css/flags/1x1/ma.svg")) + ");\n}\n\n.flag-icon-mc {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mc.svg */ "./node_modules/flag-icon-css/flags/4x3/mc.svg")) + ");\n}\n\n.flag-icon-mc.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mc.svg */ "./node_modules/flag-icon-css/flags/1x1/mc.svg")) + ");\n}\n\n.flag-icon-md {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/md.svg */ "./node_modules/flag-icon-css/flags/4x3/md.svg")) + ");\n}\n\n.flag-icon-md.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/md.svg */ "./node_modules/flag-icon-css/flags/1x1/md.svg")) + ");\n}\n\n.flag-icon-me {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/me.svg */ "./node_modules/flag-icon-css/flags/4x3/me.svg")) + ");\n}\n\n.flag-icon-me.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/me.svg */ "./node_modules/flag-icon-css/flags/1x1/me.svg")) + ");\n}\n\n.flag-icon-mf {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mf.svg */ "./node_modules/flag-icon-css/flags/4x3/mf.svg")) + ");\n}\n\n.flag-icon-mf.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mf.svg */ "./node_modules/flag-icon-css/flags/1x1/mf.svg")) + ");\n}\n\n.flag-icon-mg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mg.svg */ "./node_modules/flag-icon-css/flags/4x3/mg.svg")) + ");\n}\n\n.flag-icon-mg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mg.svg */ "./node_modules/flag-icon-css/flags/1x1/mg.svg")) + ");\n}\n\n.flag-icon-mh {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mh.svg */ "./node_modules/flag-icon-css/flags/4x3/mh.svg")) + ");\n}\n\n.flag-icon-mh.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mh.svg */ "./node_modules/flag-icon-css/flags/1x1/mh.svg")) + ");\n}\n\n.flag-icon-mk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mk.svg */ "./node_modules/flag-icon-css/flags/4x3/mk.svg")) + ");\n}\n\n.flag-icon-mk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mk.svg */ "./node_modules/flag-icon-css/flags/1x1/mk.svg")) + ");\n}\n\n.flag-icon-ml {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ml.svg */ "./node_modules/flag-icon-css/flags/4x3/ml.svg")) + ");\n}\n\n.flag-icon-ml.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ml.svg */ "./node_modules/flag-icon-css/flags/1x1/ml.svg")) + ");\n}\n\n.flag-icon-mm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mm.svg */ "./node_modules/flag-icon-css/flags/4x3/mm.svg")) + ");\n}\n\n.flag-icon-mm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mm.svg */ "./node_modules/flag-icon-css/flags/1x1/mm.svg")) + ");\n}\n\n.flag-icon-mn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mn.svg */ "./node_modules/flag-icon-css/flags/4x3/mn.svg")) + ");\n}\n\n.flag-icon-mn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mn.svg */ "./node_modules/flag-icon-css/flags/1x1/mn.svg")) + ");\n}\n\n.flag-icon-mo {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mo.svg */ "./node_modules/flag-icon-css/flags/4x3/mo.svg")) + ");\n}\n\n.flag-icon-mo.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mo.svg */ "./node_modules/flag-icon-css/flags/1x1/mo.svg")) + ");\n}\n\n.flag-icon-mp {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mp.svg */ "./node_modules/flag-icon-css/flags/4x3/mp.svg")) + ");\n}\n\n.flag-icon-mp.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mp.svg */ "./node_modules/flag-icon-css/flags/1x1/mp.svg")) + ");\n}\n\n.flag-icon-mq {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mq.svg */ "./node_modules/flag-icon-css/flags/4x3/mq.svg")) + ");\n}\n\n.flag-icon-mq.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mq.svg */ "./node_modules/flag-icon-css/flags/1x1/mq.svg")) + ");\n}\n\n.flag-icon-mr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mr.svg */ "./node_modules/flag-icon-css/flags/4x3/mr.svg")) + ");\n}\n\n.flag-icon-mr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mr.svg */ "./node_modules/flag-icon-css/flags/1x1/mr.svg")) + ");\n}\n\n.flag-icon-ms {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ms.svg */ "./node_modules/flag-icon-css/flags/4x3/ms.svg")) + ");\n}\n\n.flag-icon-ms.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ms.svg */ "./node_modules/flag-icon-css/flags/1x1/ms.svg")) + ");\n}\n\n.flag-icon-mt {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mt.svg */ "./node_modules/flag-icon-css/flags/4x3/mt.svg")) + ");\n}\n\n.flag-icon-mt.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mt.svg */ "./node_modules/flag-icon-css/flags/1x1/mt.svg")) + ");\n}\n\n.flag-icon-mu {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mu.svg */ "./node_modules/flag-icon-css/flags/4x3/mu.svg")) + ");\n}\n\n.flag-icon-mu.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mu.svg */ "./node_modules/flag-icon-css/flags/1x1/mu.svg")) + ");\n}\n\n.flag-icon-mv {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mv.svg */ "./node_modules/flag-icon-css/flags/4x3/mv.svg")) + ");\n}\n\n.flag-icon-mv.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mv.svg */ "./node_modules/flag-icon-css/flags/1x1/mv.svg")) + ");\n}\n\n.flag-icon-mw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mw.svg */ "./node_modules/flag-icon-css/flags/4x3/mw.svg")) + ");\n}\n\n.flag-icon-mw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mw.svg */ "./node_modules/flag-icon-css/flags/1x1/mw.svg")) + ");\n}\n\n.flag-icon-mx {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mx.svg */ "./node_modules/flag-icon-css/flags/4x3/mx.svg")) + ");\n}\n\n.flag-icon-mx.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mx.svg */ "./node_modules/flag-icon-css/flags/1x1/mx.svg")) + ");\n}\n\n.flag-icon-my {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/my.svg */ "./node_modules/flag-icon-css/flags/4x3/my.svg")) + ");\n}\n\n.flag-icon-my.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/my.svg */ "./node_modules/flag-icon-css/flags/1x1/my.svg")) + ");\n}\n\n.flag-icon-mz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/mz.svg */ "./node_modules/flag-icon-css/flags/4x3/mz.svg")) + ");\n}\n\n.flag-icon-mz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/mz.svg */ "./node_modules/flag-icon-css/flags/1x1/mz.svg")) + ");\n}\n\n.flag-icon-na {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/na.svg */ "./node_modules/flag-icon-css/flags/4x3/na.svg")) + ");\n}\n\n.flag-icon-na.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/na.svg */ "./node_modules/flag-icon-css/flags/1x1/na.svg")) + ");\n}\n\n.flag-icon-nc {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/nc.svg */ "./node_modules/flag-icon-css/flags/4x3/nc.svg")) + ");\n}\n\n.flag-icon-nc.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/nc.svg */ "./node_modules/flag-icon-css/flags/1x1/nc.svg")) + ");\n}\n\n.flag-icon-ne {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ne.svg */ "./node_modules/flag-icon-css/flags/4x3/ne.svg")) + ");\n}\n\n.flag-icon-ne.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ne.svg */ "./node_modules/flag-icon-css/flags/1x1/ne.svg")) + ");\n}\n\n.flag-icon-nf {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/nf.svg */ "./node_modules/flag-icon-css/flags/4x3/nf.svg")) + ");\n}\n\n.flag-icon-nf.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/nf.svg */ "./node_modules/flag-icon-css/flags/1x1/nf.svg")) + ");\n}\n\n.flag-icon-ng {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ng.svg */ "./node_modules/flag-icon-css/flags/4x3/ng.svg")) + ");\n}\n\n.flag-icon-ng.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ng.svg */ "./node_modules/flag-icon-css/flags/1x1/ng.svg")) + ");\n}\n\n.flag-icon-ni {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ni.svg */ "./node_modules/flag-icon-css/flags/4x3/ni.svg")) + ");\n}\n\n.flag-icon-ni.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ni.svg */ "./node_modules/flag-icon-css/flags/1x1/ni.svg")) + ");\n}\n\n.flag-icon-nl {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/nl.svg */ "./node_modules/flag-icon-css/flags/4x3/nl.svg")) + ");\n}\n\n.flag-icon-nl.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/nl.svg */ "./node_modules/flag-icon-css/flags/1x1/nl.svg")) + ");\n}\n\n.flag-icon-no {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/no.svg */ "./node_modules/flag-icon-css/flags/4x3/no.svg")) + ");\n}\n\n.flag-icon-no.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/no.svg */ "./node_modules/flag-icon-css/flags/1x1/no.svg")) + ");\n}\n\n.flag-icon-np {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/np.svg */ "./node_modules/flag-icon-css/flags/4x3/np.svg")) + ");\n}\n\n.flag-icon-np.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/np.svg */ "./node_modules/flag-icon-css/flags/1x1/np.svg")) + ");\n}\n\n.flag-icon-nr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/nr.svg */ "./node_modules/flag-icon-css/flags/4x3/nr.svg")) + ");\n}\n\n.flag-icon-nr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/nr.svg */ "./node_modules/flag-icon-css/flags/1x1/nr.svg")) + ");\n}\n\n.flag-icon-nu {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/nu.svg */ "./node_modules/flag-icon-css/flags/4x3/nu.svg")) + ");\n}\n\n.flag-icon-nu.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/nu.svg */ "./node_modules/flag-icon-css/flags/1x1/nu.svg")) + ");\n}\n\n.flag-icon-nz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/nz.svg */ "./node_modules/flag-icon-css/flags/4x3/nz.svg")) + ");\n}\n\n.flag-icon-nz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/nz.svg */ "./node_modules/flag-icon-css/flags/1x1/nz.svg")) + ");\n}\n\n.flag-icon-om {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/om.svg */ "./node_modules/flag-icon-css/flags/4x3/om.svg")) + ");\n}\n\n.flag-icon-om.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/om.svg */ "./node_modules/flag-icon-css/flags/1x1/om.svg")) + ");\n}\n\n.flag-icon-pa {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pa.svg */ "./node_modules/flag-icon-css/flags/4x3/pa.svg")) + ");\n}\n\n.flag-icon-pa.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pa.svg */ "./node_modules/flag-icon-css/flags/1x1/pa.svg")) + ");\n}\n\n.flag-icon-pe {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pe.svg */ "./node_modules/flag-icon-css/flags/4x3/pe.svg")) + ");\n}\n\n.flag-icon-pe.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pe.svg */ "./node_modules/flag-icon-css/flags/1x1/pe.svg")) + ");\n}\n\n.flag-icon-pf {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pf.svg */ "./node_modules/flag-icon-css/flags/4x3/pf.svg")) + ");\n}\n\n.flag-icon-pf.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pf.svg */ "./node_modules/flag-icon-css/flags/1x1/pf.svg")) + ");\n}\n\n.flag-icon-pg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pg.svg */ "./node_modules/flag-icon-css/flags/4x3/pg.svg")) + ");\n}\n\n.flag-icon-pg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pg.svg */ "./node_modules/flag-icon-css/flags/1x1/pg.svg")) + ");\n}\n\n.flag-icon-ph {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ph.svg */ "./node_modules/flag-icon-css/flags/4x3/ph.svg")) + ");\n}\n\n.flag-icon-ph.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ph.svg */ "./node_modules/flag-icon-css/flags/1x1/ph.svg")) + ");\n}\n\n.flag-icon-pk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pk.svg */ "./node_modules/flag-icon-css/flags/4x3/pk.svg")) + ");\n}\n\n.flag-icon-pk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pk.svg */ "./node_modules/flag-icon-css/flags/1x1/pk.svg")) + ");\n}\n\n.flag-icon-pl {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pl.svg */ "./node_modules/flag-icon-css/flags/4x3/pl.svg")) + ");\n}\n\n.flag-icon-pl.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pl.svg */ "./node_modules/flag-icon-css/flags/1x1/pl.svg")) + ");\n}\n\n.flag-icon-pm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pm.svg */ "./node_modules/flag-icon-css/flags/4x3/pm.svg")) + ");\n}\n\n.flag-icon-pm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pm.svg */ "./node_modules/flag-icon-css/flags/1x1/pm.svg")) + ");\n}\n\n.flag-icon-pn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pn.svg */ "./node_modules/flag-icon-css/flags/4x3/pn.svg")) + ");\n}\n\n.flag-icon-pn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pn.svg */ "./node_modules/flag-icon-css/flags/1x1/pn.svg")) + ");\n}\n\n.flag-icon-pr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pr.svg */ "./node_modules/flag-icon-css/flags/4x3/pr.svg")) + ");\n}\n\n.flag-icon-pr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pr.svg */ "./node_modules/flag-icon-css/flags/1x1/pr.svg")) + ");\n}\n\n.flag-icon-ps {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ps.svg */ "./node_modules/flag-icon-css/flags/4x3/ps.svg")) + ");\n}\n\n.flag-icon-ps.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ps.svg */ "./node_modules/flag-icon-css/flags/1x1/ps.svg")) + ");\n}\n\n.flag-icon-pt {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pt.svg */ "./node_modules/flag-icon-css/flags/4x3/pt.svg")) + ");\n}\n\n.flag-icon-pt.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pt.svg */ "./node_modules/flag-icon-css/flags/1x1/pt.svg")) + ");\n}\n\n.flag-icon-pw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/pw.svg */ "./node_modules/flag-icon-css/flags/4x3/pw.svg")) + ");\n}\n\n.flag-icon-pw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/pw.svg */ "./node_modules/flag-icon-css/flags/1x1/pw.svg")) + ");\n}\n\n.flag-icon-py {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/py.svg */ "./node_modules/flag-icon-css/flags/4x3/py.svg")) + ");\n}\n\n.flag-icon-py.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/py.svg */ "./node_modules/flag-icon-css/flags/1x1/py.svg")) + ");\n}\n\n.flag-icon-qa {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/qa.svg */ "./node_modules/flag-icon-css/flags/4x3/qa.svg")) + ");\n}\n\n.flag-icon-qa.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/qa.svg */ "./node_modules/flag-icon-css/flags/1x1/qa.svg")) + ");\n}\n\n.flag-icon-re {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/re.svg */ "./node_modules/flag-icon-css/flags/4x3/re.svg")) + ");\n}\n\n.flag-icon-re.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/re.svg */ "./node_modules/flag-icon-css/flags/1x1/re.svg")) + ");\n}\n\n.flag-icon-ro {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ro.svg */ "./node_modules/flag-icon-css/flags/4x3/ro.svg")) + ");\n}\n\n.flag-icon-ro.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ro.svg */ "./node_modules/flag-icon-css/flags/1x1/ro.svg")) + ");\n}\n\n.flag-icon-rs {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/rs.svg */ "./node_modules/flag-icon-css/flags/4x3/rs.svg")) + ");\n}\n\n.flag-icon-rs.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/rs.svg */ "./node_modules/flag-icon-css/flags/1x1/rs.svg")) + ");\n}\n\n.flag-icon-ru {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ru.svg */ "./node_modules/flag-icon-css/flags/4x3/ru.svg")) + ");\n}\n\n.flag-icon-ru.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ru.svg */ "./node_modules/flag-icon-css/flags/1x1/ru.svg")) + ");\n}\n\n.flag-icon-rw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/rw.svg */ "./node_modules/flag-icon-css/flags/4x3/rw.svg")) + ");\n}\n\n.flag-icon-rw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/rw.svg */ "./node_modules/flag-icon-css/flags/1x1/rw.svg")) + ");\n}\n\n.flag-icon-sa {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sa.svg */ "./node_modules/flag-icon-css/flags/4x3/sa.svg")) + ");\n}\n\n.flag-icon-sa.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sa.svg */ "./node_modules/flag-icon-css/flags/1x1/sa.svg")) + ");\n}\n\n.flag-icon-sb {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sb.svg */ "./node_modules/flag-icon-css/flags/4x3/sb.svg")) + ");\n}\n\n.flag-icon-sb.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sb.svg */ "./node_modules/flag-icon-css/flags/1x1/sb.svg")) + ");\n}\n\n.flag-icon-sc {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sc.svg */ "./node_modules/flag-icon-css/flags/4x3/sc.svg")) + ");\n}\n\n.flag-icon-sc.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sc.svg */ "./node_modules/flag-icon-css/flags/1x1/sc.svg")) + ");\n}\n\n.flag-icon-sd {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sd.svg */ "./node_modules/flag-icon-css/flags/4x3/sd.svg")) + ");\n}\n\n.flag-icon-sd.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sd.svg */ "./node_modules/flag-icon-css/flags/1x1/sd.svg")) + ");\n}\n\n.flag-icon-se {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/se.svg */ "./node_modules/flag-icon-css/flags/4x3/se.svg")) + ");\n}\n\n.flag-icon-se.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/se.svg */ "./node_modules/flag-icon-css/flags/1x1/se.svg")) + ");\n}\n\n.flag-icon-sg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sg.svg */ "./node_modules/flag-icon-css/flags/4x3/sg.svg")) + ");\n}\n\n.flag-icon-sg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sg.svg */ "./node_modules/flag-icon-css/flags/1x1/sg.svg")) + ");\n}\n\n.flag-icon-sh {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sh.svg */ "./node_modules/flag-icon-css/flags/4x3/sh.svg")) + ");\n}\n\n.flag-icon-sh.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sh.svg */ "./node_modules/flag-icon-css/flags/1x1/sh.svg")) + ");\n}\n\n.flag-icon-si {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/si.svg */ "./node_modules/flag-icon-css/flags/4x3/si.svg")) + ");\n}\n\n.flag-icon-si.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/si.svg */ "./node_modules/flag-icon-css/flags/1x1/si.svg")) + ");\n}\n\n.flag-icon-sj {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sj.svg */ "./node_modules/flag-icon-css/flags/4x3/sj.svg")) + ");\n}\n\n.flag-icon-sj.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sj.svg */ "./node_modules/flag-icon-css/flags/1x1/sj.svg")) + ");\n}\n\n.flag-icon-sk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sk.svg */ "./node_modules/flag-icon-css/flags/4x3/sk.svg")) + ");\n}\n\n.flag-icon-sk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sk.svg */ "./node_modules/flag-icon-css/flags/1x1/sk.svg")) + ");\n}\n\n.flag-icon-sl {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sl.svg */ "./node_modules/flag-icon-css/flags/4x3/sl.svg")) + ");\n}\n\n.flag-icon-sl.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sl.svg */ "./node_modules/flag-icon-css/flags/1x1/sl.svg")) + ");\n}\n\n.flag-icon-sm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sm.svg */ "./node_modules/flag-icon-css/flags/4x3/sm.svg")) + ");\n}\n\n.flag-icon-sm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sm.svg */ "./node_modules/flag-icon-css/flags/1x1/sm.svg")) + ");\n}\n\n.flag-icon-sn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sn.svg */ "./node_modules/flag-icon-css/flags/4x3/sn.svg")) + ");\n}\n\n.flag-icon-sn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sn.svg */ "./node_modules/flag-icon-css/flags/1x1/sn.svg")) + ");\n}\n\n.flag-icon-so {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/so.svg */ "./node_modules/flag-icon-css/flags/4x3/so.svg")) + ");\n}\n\n.flag-icon-so.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/so.svg */ "./node_modules/flag-icon-css/flags/1x1/so.svg")) + ");\n}\n\n.flag-icon-sr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sr.svg */ "./node_modules/flag-icon-css/flags/4x3/sr.svg")) + ");\n}\n\n.flag-icon-sr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sr.svg */ "./node_modules/flag-icon-css/flags/1x1/sr.svg")) + ");\n}\n\n.flag-icon-ss {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ss.svg */ "./node_modules/flag-icon-css/flags/4x3/ss.svg")) + ");\n}\n\n.flag-icon-ss.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ss.svg */ "./node_modules/flag-icon-css/flags/1x1/ss.svg")) + ");\n}\n\n.flag-icon-st {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/st.svg */ "./node_modules/flag-icon-css/flags/4x3/st.svg")) + ");\n}\n\n.flag-icon-st.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/st.svg */ "./node_modules/flag-icon-css/flags/1x1/st.svg")) + ");\n}\n\n.flag-icon-sv {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sv.svg */ "./node_modules/flag-icon-css/flags/4x3/sv.svg")) + ");\n}\n\n.flag-icon-sv.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sv.svg */ "./node_modules/flag-icon-css/flags/1x1/sv.svg")) + ");\n}\n\n.flag-icon-sx {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sx.svg */ "./node_modules/flag-icon-css/flags/4x3/sx.svg")) + ");\n}\n\n.flag-icon-sx.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sx.svg */ "./node_modules/flag-icon-css/flags/1x1/sx.svg")) + ");\n}\n\n.flag-icon-sy {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sy.svg */ "./node_modules/flag-icon-css/flags/4x3/sy.svg")) + ");\n}\n\n.flag-icon-sy.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sy.svg */ "./node_modules/flag-icon-css/flags/1x1/sy.svg")) + ");\n}\n\n.flag-icon-sz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/sz.svg */ "./node_modules/flag-icon-css/flags/4x3/sz.svg")) + ");\n}\n\n.flag-icon-sz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/sz.svg */ "./node_modules/flag-icon-css/flags/1x1/sz.svg")) + ");\n}\n\n.flag-icon-tc {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tc.svg */ "./node_modules/flag-icon-css/flags/4x3/tc.svg")) + ");\n}\n\n.flag-icon-tc.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tc.svg */ "./node_modules/flag-icon-css/flags/1x1/tc.svg")) + ");\n}\n\n.flag-icon-td {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/td.svg */ "./node_modules/flag-icon-css/flags/4x3/td.svg")) + ");\n}\n\n.flag-icon-td.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/td.svg */ "./node_modules/flag-icon-css/flags/1x1/td.svg")) + ");\n}\n\n.flag-icon-tf {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tf.svg */ "./node_modules/flag-icon-css/flags/4x3/tf.svg")) + ");\n}\n\n.flag-icon-tf.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tf.svg */ "./node_modules/flag-icon-css/flags/1x1/tf.svg")) + ");\n}\n\n.flag-icon-tg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tg.svg */ "./node_modules/flag-icon-css/flags/4x3/tg.svg")) + ");\n}\n\n.flag-icon-tg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tg.svg */ "./node_modules/flag-icon-css/flags/1x1/tg.svg")) + ");\n}\n\n.flag-icon-th {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/th.svg */ "./node_modules/flag-icon-css/flags/4x3/th.svg")) + ");\n}\n\n.flag-icon-th.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/th.svg */ "./node_modules/flag-icon-css/flags/1x1/th.svg")) + ");\n}\n\n.flag-icon-tj {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tj.svg */ "./node_modules/flag-icon-css/flags/4x3/tj.svg")) + ");\n}\n\n.flag-icon-tj.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tj.svg */ "./node_modules/flag-icon-css/flags/1x1/tj.svg")) + ");\n}\n\n.flag-icon-tk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tk.svg */ "./node_modules/flag-icon-css/flags/4x3/tk.svg")) + ");\n}\n\n.flag-icon-tk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tk.svg */ "./node_modules/flag-icon-css/flags/1x1/tk.svg")) + ");\n}\n\n.flag-icon-tl {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tl.svg */ "./node_modules/flag-icon-css/flags/4x3/tl.svg")) + ");\n}\n\n.flag-icon-tl.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tl.svg */ "./node_modules/flag-icon-css/flags/1x1/tl.svg")) + ");\n}\n\n.flag-icon-tm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tm.svg */ "./node_modules/flag-icon-css/flags/4x3/tm.svg")) + ");\n}\n\n.flag-icon-tm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tm.svg */ "./node_modules/flag-icon-css/flags/1x1/tm.svg")) + ");\n}\n\n.flag-icon-tn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tn.svg */ "./node_modules/flag-icon-css/flags/4x3/tn.svg")) + ");\n}\n\n.flag-icon-tn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tn.svg */ "./node_modules/flag-icon-css/flags/1x1/tn.svg")) + ");\n}\n\n.flag-icon-to {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/to.svg */ "./node_modules/flag-icon-css/flags/4x3/to.svg")) + ");\n}\n\n.flag-icon-to.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/to.svg */ "./node_modules/flag-icon-css/flags/1x1/to.svg")) + ");\n}\n\n.flag-icon-tr {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tr.svg */ "./node_modules/flag-icon-css/flags/4x3/tr.svg")) + ");\n}\n\n.flag-icon-tr.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tr.svg */ "./node_modules/flag-icon-css/flags/1x1/tr.svg")) + ");\n}\n\n.flag-icon-tt {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tt.svg */ "./node_modules/flag-icon-css/flags/4x3/tt.svg")) + ");\n}\n\n.flag-icon-tt.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tt.svg */ "./node_modules/flag-icon-css/flags/1x1/tt.svg")) + ");\n}\n\n.flag-icon-tv {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tv.svg */ "./node_modules/flag-icon-css/flags/4x3/tv.svg")) + ");\n}\n\n.flag-icon-tv.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tv.svg */ "./node_modules/flag-icon-css/flags/1x1/tv.svg")) + ");\n}\n\n.flag-icon-tw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tw.svg */ "./node_modules/flag-icon-css/flags/4x3/tw.svg")) + ");\n}\n\n.flag-icon-tw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tw.svg */ "./node_modules/flag-icon-css/flags/1x1/tw.svg")) + ");\n}\n\n.flag-icon-tz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/tz.svg */ "./node_modules/flag-icon-css/flags/4x3/tz.svg")) + ");\n}\n\n.flag-icon-tz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/tz.svg */ "./node_modules/flag-icon-css/flags/1x1/tz.svg")) + ");\n}\n\n.flag-icon-ua {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ua.svg */ "./node_modules/flag-icon-css/flags/4x3/ua.svg")) + ");\n}\n\n.flag-icon-ua.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ua.svg */ "./node_modules/flag-icon-css/flags/1x1/ua.svg")) + ");\n}\n\n.flag-icon-ug {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ug.svg */ "./node_modules/flag-icon-css/flags/4x3/ug.svg")) + ");\n}\n\n.flag-icon-ug.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ug.svg */ "./node_modules/flag-icon-css/flags/1x1/ug.svg")) + ");\n}\n\n.flag-icon-um {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/um.svg */ "./node_modules/flag-icon-css/flags/4x3/um.svg")) + ");\n}\n\n.flag-icon-um.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/um.svg */ "./node_modules/flag-icon-css/flags/1x1/um.svg")) + ");\n}\n\n.flag-icon-us {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/us.svg */ "./node_modules/flag-icon-css/flags/4x3/us.svg")) + ");\n}\n\n.flag-icon-us.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/us.svg */ "./node_modules/flag-icon-css/flags/1x1/us.svg")) + ");\n}\n\n.flag-icon-uy {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/uy.svg */ "./node_modules/flag-icon-css/flags/4x3/uy.svg")) + ");\n}\n\n.flag-icon-uy.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/uy.svg */ "./node_modules/flag-icon-css/flags/1x1/uy.svg")) + ");\n}\n\n.flag-icon-uz {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/uz.svg */ "./node_modules/flag-icon-css/flags/4x3/uz.svg")) + ");\n}\n\n.flag-icon-uz.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/uz.svg */ "./node_modules/flag-icon-css/flags/1x1/uz.svg")) + ");\n}\n\n.flag-icon-va {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/va.svg */ "./node_modules/flag-icon-css/flags/4x3/va.svg")) + ");\n}\n\n.flag-icon-va.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/va.svg */ "./node_modules/flag-icon-css/flags/1x1/va.svg")) + ");\n}\n\n.flag-icon-vc {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/vc.svg */ "./node_modules/flag-icon-css/flags/4x3/vc.svg")) + ");\n}\n\n.flag-icon-vc.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/vc.svg */ "./node_modules/flag-icon-css/flags/1x1/vc.svg")) + ");\n}\n\n.flag-icon-ve {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ve.svg */ "./node_modules/flag-icon-css/flags/4x3/ve.svg")) + ");\n}\n\n.flag-icon-ve.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ve.svg */ "./node_modules/flag-icon-css/flags/1x1/ve.svg")) + ");\n}\n\n.flag-icon-vg {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/vg.svg */ "./node_modules/flag-icon-css/flags/4x3/vg.svg")) + ");\n}\n\n.flag-icon-vg.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/vg.svg */ "./node_modules/flag-icon-css/flags/1x1/vg.svg")) + ");\n}\n\n.flag-icon-vi {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/vi.svg */ "./node_modules/flag-icon-css/flags/4x3/vi.svg")) + ");\n}\n\n.flag-icon-vi.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/vi.svg */ "./node_modules/flag-icon-css/flags/1x1/vi.svg")) + ");\n}\n\n.flag-icon-vn {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/vn.svg */ "./node_modules/flag-icon-css/flags/4x3/vn.svg")) + ");\n}\n\n.flag-icon-vn.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/vn.svg */ "./node_modules/flag-icon-css/flags/1x1/vn.svg")) + ");\n}\n\n.flag-icon-vu {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/vu.svg */ "./node_modules/flag-icon-css/flags/4x3/vu.svg")) + ");\n}\n\n.flag-icon-vu.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/vu.svg */ "./node_modules/flag-icon-css/flags/1x1/vu.svg")) + ");\n}\n\n.flag-icon-wf {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/wf.svg */ "./node_modules/flag-icon-css/flags/4x3/wf.svg")) + ");\n}\n\n.flag-icon-wf.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/wf.svg */ "./node_modules/flag-icon-css/flags/1x1/wf.svg")) + ");\n}\n\n.flag-icon-ws {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ws.svg */ "./node_modules/flag-icon-css/flags/4x3/ws.svg")) + ");\n}\n\n.flag-icon-ws.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ws.svg */ "./node_modules/flag-icon-css/flags/1x1/ws.svg")) + ");\n}\n\n.flag-icon-ye {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/ye.svg */ "./node_modules/flag-icon-css/flags/4x3/ye.svg")) + ");\n}\n\n.flag-icon-ye.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/ye.svg */ "./node_modules/flag-icon-css/flags/1x1/ye.svg")) + ");\n}\n\n.flag-icon-yt {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/yt.svg */ "./node_modules/flag-icon-css/flags/4x3/yt.svg")) + ");\n}\n\n.flag-icon-yt.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/yt.svg */ "./node_modules/flag-icon-css/flags/1x1/yt.svg")) + ");\n}\n\n.flag-icon-za {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/za.svg */ "./node_modules/flag-icon-css/flags/4x3/za.svg")) + ");\n}\n\n.flag-icon-za.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/za.svg */ "./node_modules/flag-icon-css/flags/1x1/za.svg")) + ");\n}\n\n.flag-icon-zm {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/zm.svg */ "./node_modules/flag-icon-css/flags/4x3/zm.svg")) + ");\n}\n\n.flag-icon-zm.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/zm.svg */ "./node_modules/flag-icon-css/flags/1x1/zm.svg")) + ");\n}\n\n.flag-icon-zw {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/zw.svg */ "./node_modules/flag-icon-css/flags/4x3/zw.svg")) + ");\n}\n\n.flag-icon-zw.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/zw.svg */ "./node_modules/flag-icon-css/flags/1x1/zw.svg")) + ");\n}\n\n.flag-icon-es-ca {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/es-ca.svg */ "./node_modules/flag-icon-css/flags/4x3/es-ca.svg")) + ");\n}\n\n.flag-icon-es-ca.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/es-ca.svg */ "./node_modules/flag-icon-css/flags/1x1/es-ca.svg")) + ");\n}\n\n.flag-icon-eu {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/eu.svg */ "./node_modules/flag-icon-css/flags/4x3/eu.svg")) + ");\n}\n\n.flag-icon-eu.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/eu.svg */ "./node_modules/flag-icon-css/flags/1x1/eu.svg")) + ");\n}\n\n.flag-icon-gb-eng {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gb-eng.svg */ "./node_modules/flag-icon-css/flags/4x3/gb-eng.svg")) + ");\n}\n\n.flag-icon-gb-eng.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gb-eng.svg */ "./node_modules/flag-icon-css/flags/1x1/gb-eng.svg")) + ");\n}\n\n.flag-icon-gb-nir {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gb-nir.svg */ "./node_modules/flag-icon-css/flags/4x3/gb-nir.svg")) + ");\n}\n\n.flag-icon-gb-nir.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gb-nir.svg */ "./node_modules/flag-icon-css/flags/1x1/gb-nir.svg")) + ");\n}\n\n.flag-icon-gb-sct {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gb-sct.svg */ "./node_modules/flag-icon-css/flags/4x3/gb-sct.svg")) + ");\n}\n\n.flag-icon-gb-sct.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gb-sct.svg */ "./node_modules/flag-icon-css/flags/1x1/gb-sct.svg")) + ");\n}\n\n.flag-icon-gb-wls {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/gb-wls.svg */ "./node_modules/flag-icon-css/flags/4x3/gb-wls.svg")) + ");\n}\n\n.flag-icon-gb-wls.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/gb-wls.svg */ "./node_modules/flag-icon-css/flags/1x1/gb-wls.svg")) + ");\n}\n\n.flag-icon-un {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/un.svg */ "./node_modules/flag-icon-css/flags/4x3/un.svg")) + ");\n}\n\n.flag-icon-un.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/un.svg */ "./node_modules/flag-icon-css/flags/1x1/un.svg")) + ");\n}\n\n.flag-icon-xk {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/4x3/xk.svg */ "./node_modules/flag-icon-css/flags/4x3/xk.svg")) + ");\n}\n\n.flag-icon-xk.flag-icon-squared {\n  background-image: url(" + escape(__webpack_require__(/*! ../flags/1x1/xk.svg */ "./node_modules/flag-icon-css/flags/1x1/xk.svg")) + ");\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/flag-icon-css/css/flag-icon.css":
/*!******************************************************!*\
  !*** ./node_modules/flag-icon-css/css/flag-icon.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./flag-icon.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flag-icon-css/css/flag-icon.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ad.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ad.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ad.svg?e15ddeabbfce297178193b7858043ebd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ae.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ae.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ae.svg?7847726d0663899a3e31b3e21b6d2b68";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/af.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/af.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/af.svg?fa735e43100e6ba7d02afc2d27ff088c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ag.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ag.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ag.svg?53a600867bab3b2284da8445e7d9cc93";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ai.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ai.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ai.svg?9fe4d6b75d40228a802475e855522ad0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/al.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/al.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/al.svg?46612c2737ddd5ca906721aeb63aa7c0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/am.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/am.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/am.svg?c86a9e1691e7ab36234a070301467f01";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ao.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ao.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ao.svg?ab8cc21b5392f6d7b213e6349c7237c2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/aq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/aq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/aq.svg?65448909a82325121a92bb71012091d7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ar.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ar.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ar.svg?78827b0be4fd4c4f4fb458b2501309d1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/as.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/as.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/as.svg?27f3e372f5d36da8c96a4eca50e6fb57";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/at.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/at.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/at.svg?5ab33f744e92b143361e951c81f0f60d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/au.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/au.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/au.svg?9b18ee0449e1b5cd1c783fda310eed4f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/aw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/aw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/aw.svg?f159ec168ea083c41505dce64eb31923";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ax.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ax.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ax.svg?fdd00c438df18b3216076ae0e145673b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/az.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/az.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/az.svg?0b4258df02490e0504d93c20984c467d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ba.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ba.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ba.svg?a9dbadd71245f7d220448c10b6939fd1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bb.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bb.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bb.svg?45c62450e2d60784a4f02d25e80e0b78";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bd.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bd.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bd.svg?c4a1485f3606f93b55fa19d86ec3219c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/be.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/be.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/be.svg?f1e78c8b3266b110a4a523c4cde8d7f2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bf.svg?48eb94de0b25013f341693acc2abb3b2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bg.svg?7163fe7683bf09611884f33ebf512d6a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bh.svg?90ad3cbd95a2834f0a787db075cdb4fc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bi.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bi.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bi.svg?75d5af3debe2895f5eb256ea01ab2458";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bj.svg?b6387659d755f8364b76c2bc8ca15d65";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bl.svg?4d724b8ec2c508cf9abf4abef61289bc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bm.svg?09839e2cd707999b472d6631640dba1c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bn.svg?0adbb6646a1e26c449969a38e3bbc3ba";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bo.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bo.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bo.svg?eab17936c2d9dd56edd3f134c8e6f29c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bq.svg?d6da2e848d831d87d51683d9340dbd38";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/br.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/br.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/br.svg?ef701aba4f5dc68beb3166d7a19c8787";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bs.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bs.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bs.svg?6fe877e157af3feb09878e657d8ad1f7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bt.svg?dbb1623f2a2bcf088f45e7c5a4eee71f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bv.svg?b70ab2f2a1fdb7d66f6870a4f243f843";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bw.svg?d9e5e45f7cabb9c0790ba95948c30609";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/by.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/by.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/by.svg?80b2d2dd15003da07957e37b5d7aef23";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/bz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/bz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/bz.svg?e6b5e204d3da700fbf9004584f69d6fa";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ca.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ca.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ca.svg?8678fc67f7ebd50a5fc7c12a39ab93a2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cc.svg?12b2a48420c7a24559f89dd27348b05a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cd.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cd.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cd.svg?b43f872e1441147e938995ee5a709e19";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cf.svg?1bc217dc2a400899db46ee10cdd913d8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cg.svg?8373836c83f0ae012b428ab2308e4352";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ch.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ch.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ch.svg?252c409ba2d2600aaf08946b9280b670";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ci.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ci.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ci.svg?26a62321690cd175f47305c05a55f409";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ck.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ck.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ck.svg?22bf8119f315420569c9699f027cfd03";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cl.svg?6d63ff70245fe5abcbf9ccc50cecf8c2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cm.svg?c972441e6e4522441d18c0390c143d32";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cn.svg?a94c93941a4d8907fc2be5a61841c2b9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/co.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/co.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/co.svg?41244c207c1c8c92c0140d5fad3b08b1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cr.svg?657d7dbcfdeb67b9324dc45f99a1e17c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cu.svg?0b42edabb93ec1c4862f441f4151996e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cv.svg?20a8cfffe0e96905132967daae5e2578";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cw.svg?69f19c22070d22008ce7c303e82be825";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cx.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cx.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cx.svg?172a41ec42fd864193881fc48b6bf4d7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cy.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cy.svg?9f04989a23400aa64e7a7ac053f32963";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/cz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/cz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/cz.svg?490443104ecbfc24e2580b16a4d811b7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/de.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/de.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/de.svg?4d7bac3b0b9ab578b009c54fecd5d06f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/dj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/dj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/dj.svg?0c386d224ea283b79429a3097c055388";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/dk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/dk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/dk.svg?d046fb5b6363db6e655b3c1011c6f779";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/dm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/dm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/dm.svg?664bf04224fd8e022ee0170a8b43b5c8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/do.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/do.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/do.svg?07d2b1ed2aa93592afc9fb24521267d2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/dz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/dz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/dz.svg?b03e5aec7ad5a75fce37f5c48efe32c1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ec.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ec.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ec.svg?5e9624dfa7ecdab7d752a423bc88fa3e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ee.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ee.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ee.svg?9e932a62565e7ddda05182b706b4e48f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/eg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/eg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/eg.svg?2ea321dd4b0a3aaf358950b90726466c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/eh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/eh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/eh.svg?2a0e164e96dee84d0163ad37e859e22c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/er.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/er.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/er.svg?bdfbf04ca25609debe2a56601a13f8a4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/es-ca.svg":
/*!********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/es-ca.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/es-ca.svg?a35e6a4a92e9aa04f11de348ac82f284";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/es.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/es.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/es.svg?afff247381e7ebe7d31b609f33eca644";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/et.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/et.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/et.svg?1d986679c4676b25570d4ee8719a41de";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/eu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/eu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/eu.svg?4c73f57cb89b48ebae5e4d8be33e83b8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/fi.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/fi.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/fi.svg?b48413bec5778656a773aab237f031a4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/fj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/fj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/fj.svg?76a7a39e11d32487b82b58046c23e708";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/fk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/fk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/fk.svg?aeb2d58832c6dc501253d235d5467fe3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/fm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/fm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/fm.svg?3f19d612c1d987a0948edbf753d9b96f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/fo.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/fo.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/fo.svg?329cbed566020b8e0d7a7b87fe977d28";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/fr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/fr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/fr.svg?f8952213641bba462c7314007909d394";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ga.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ga.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ga.svg?33d27fe1d14e7a989255f6c1d24e5882";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gb-eng.svg":
/*!*********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gb-eng.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gb-eng.svg?eabfeadc28e73c627eb8c65999d93aae";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gb-nir.svg":
/*!*********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gb-nir.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gb-nir.svg?9cad35c46f775585c615fb8a5b1dc354";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gb-sct.svg":
/*!*********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gb-sct.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gb-sct.svg?31ef8bcf9416bbd5b8c6ef29d1411e5f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gb-wls.svg":
/*!*********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gb-wls.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gb-wls.svg?85f8b84246b2d0b3b65de2d5d34f5ffe";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gb.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gb.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gb.svg?5db9fea0ec9e05cfb98e7387be5d0aa7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gd.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gd.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gd.svg?56fdbab2ad5e961cad7d45359def7915";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ge.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ge.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ge.svg?d3665bf12d34ff71ab308c6f4e32fd25";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gf.svg?cabf9781aaaa1dffbf03f38fcaaacfd3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gg.svg?357e1e33666fb0844d0416d5b0879d57";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gh.svg?77872d15b6a675d391e8355c98f9c020";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gi.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gi.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gi.svg?b0015a50c9f5aacae4427ea95c385a47";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gl.svg?48bf3e4e3fdafc0726ec49c2c0019d35";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gm.svg?414139d5039a0584ac0475034a3ad8c7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gn.svg?1ce64523708a4513c00768eced01f5d5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gp.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gp.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gp.svg?c2c4da0e6afbe97dffaa2ee25972ae72";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gq.svg?80b56bda22009d765f2e84d9302b0229";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gr.svg?0bed56a8b6014fe10fef1d8c24049a17";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gs.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gs.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gs.svg?6adf96a85713e8f86ed2dbdf1e1b9444";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gt.svg?d6b5b664755ae293fefaab4511db8b9b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gu.svg?64936a10d41e5fb3e672075620a716f0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gw.svg?5ecbd93cc2eeec1d063377170a3d83ee";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/gy.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/gy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/gy.svg?0653b318bc72188902840668e70e269f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/hk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/hk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/hk.svg?4a0f09ba94fb32cb4ef1c2c51df0441c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/hm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/hm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/hm.svg?fc838ac0bb4f5ff27231f59d9480f842";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/hn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/hn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/hn.svg?c94622ad395a0173231ae8ac41bf45a4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/hr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/hr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/hr.svg?88f38f33e9c5dd75280aadbd2b8d60a5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ht.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ht.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ht.svg?34eb5f592af7e3948f4dd6a7593902e8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/hu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/hu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/hu.svg?e5e334fdd028898fe762fe6b9d47b6f1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/id.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/id.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/id.svg?9f708fe5bf604f5bf38ad5ca2c00c14b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ie.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ie.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ie.svg?798a56e04350344c5937927fea36fabc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/il.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/il.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/il.svg?c36a011de460eb2d3b8c5674b9496d45";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/im.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/im.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/im.svg?ac0c825e76851b740da5ce261793a43e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/in.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/in.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/in.svg?209ae8e9585774eb4fe32c001f7c63cc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/io.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/io.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/io.svg?a45231d40c5e618f02372f1b161734d4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/iq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/iq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/iq.svg?8d936728f892c7f38e61ff6a95b24c53";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ir.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ir.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ir.svg?7bf140ab46a7630cb7c40d6ef87cc4ba";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/is.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/is.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/is.svg?ae44c07e894b0a298c57b1380c5c11be";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/it.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/it.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/it.svg?22b99ae704f3de63285bc9b9411c5031";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/je.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/je.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/je.svg?e170f442844c82e4837c021430cc7f68";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/jm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/jm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/jm.svg?b7b13124a4068892dc2452d744a42cc1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/jo.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/jo.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/jo.svg?5130279865a7759012e11ea127f87f9d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/jp.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/jp.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/jp.svg?16a568ca9eb15a225e3a90aee0f68909";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ke.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ke.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ke.svg?87900162ad67f9a694841b1d7abe72c8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/kg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/kg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/kg.svg?5908392a2d107a3f7db5cc793b8716ab";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/kh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/kh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/kh.svg?61a4b374334e719cd3d6fffa0390eb15";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ki.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ki.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ki.svg?cdeef8df88cfea2b6759b528b41f0d88";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/km.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/km.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/km.svg?eb69abb632453975c98bae4443c14d2f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/kn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/kn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/kn.svg?4ad12564dce8cd72eac5f2761c8bf03d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/kp.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/kp.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/kp.svg?f08daf335790f99ff297feab4ed1dcec";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/kr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/kr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/kr.svg?7fb0181b38e9efdb9bc5b9dca3e90051";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/kw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/kw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/kw.svg?33b3292eb3089a10a5cb93cfda9efda2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ky.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ky.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ky.svg?ef1f65378cdaea3bc6a0dddfeb9d0de9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/kz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/kz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/kz.svg?a19240f60581e10a25ee91cc4c00c3ed";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/la.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/la.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/la.svg?6b86f25a0d2d8d95ffc5ebd33c393e14";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/lb.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/lb.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/lb.svg?56f32195732ab1ad22f1f6a4473b3ace";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/lc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/lc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/lc.svg?c056c2a721c5bd992bd4945d10f82541";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/li.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/li.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/li.svg?748d1f9967c0c449deca7eeb7429ae11";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/lk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/lk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/lk.svg?f54e1ef96c3b7670cd8de1ffdaa7f085";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/lr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/lr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/lr.svg?6656f943933fa3febede9e123fdfbc73";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ls.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ls.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ls.svg?533cb320083af55b894a7bbe12cf015c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/lt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/lt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/lt.svg?70975be09055c7db032d5a56a452d5d5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/lu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/lu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/lu.svg?2585715a069b9b8234825e2ce1ef8ed6";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/lv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/lv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/lv.svg?f3c1274d166407a222fa7326129821b7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ly.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ly.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ly.svg?050ff9b00cb235a2a81bccfac78d6ac9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ma.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ma.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ma.svg?bee9c05416fd66f6bc4434f6d721bcac";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mc.svg?78528abed80a64294f9a7141e62a394f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/md.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/md.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/md.svg?75ec533ab81d8c9c9439b923e6804fe8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/me.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/me.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/me.svg?2d0c8f786f51dfee2fb550733ff65db0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mf.svg?487f7bd7fd30eec81e74e5cf1f699833";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mg.svg?91e10ba084cc7f7b2498ce81f9680a84";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mh.svg?8f1f91348e69c8bf64d85e59272d6349";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mk.svg?2413b10706c9e29c439b0dcf94ec8cfe";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ml.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ml.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ml.svg?204b0da4b499bc3694416d547a8fa0c0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mm.svg?8d6d26bc590adff8e84dc5a3342a2bfc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mn.svg?933606d511566e3f0d15be1b7aa45a76";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mo.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mo.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mo.svg?de26729cbe5d3e54824a22abcfea0e7a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mp.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mp.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mp.svg?8a731cbc2f690d74704a7da71addcbf3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mq.svg?a09e48650a204ba97073a30c5510f63f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mr.svg?bf379763ac177c83487cb02586e19651";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ms.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ms.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ms.svg?ad88044d48d7c401d3bec290c5048a0b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mt.svg?f6e3733c70db8db8048d1211ea237a42";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mu.svg?67c8f3621446645a9008ef039b0dbc69";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mv.svg?0fdc08c6985e30f2a3bfd6b5069c6757";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mw.svg?baf490bf505c107037b6720672f44e9e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mx.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mx.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mx.svg?3aa223c8cc48eba75fbb57fcc20ce7cc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/my.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/my.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/my.svg?263aea34bcf7dfb6c02b2c485359e4a2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/mz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/mz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/mz.svg?e99caf39cbb120f1b498e8b16ccfa3b2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/na.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/na.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/na.svg?74257fb27e114303ff5cdcc13d7834e2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/nc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/nc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/nc.svg?d393b8faea4e68b19f4d3d920480dbcd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ne.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ne.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ne.svg?e56edd30b77ac6f1cae9bf153b1f9ec7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/nf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/nf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/nf.svg?801ee09f96411568a40a477ff99c348b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ng.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ng.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ng.svg?520463e155c2f4a38079df87c20a0423";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ni.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ni.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ni.svg?baafd7d7fc1b69642270c1c1fee58bed";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/nl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/nl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/nl.svg?390aa40fd896fda40718cf28e5b20ba5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/no.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/no.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/no.svg?b7a21f544f617a59abff3dac02d9101b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/np.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/np.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/np.svg?27f0f4e72e359732d04452c336db37fb";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/nr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/nr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/nr.svg?2ef5b7c8f28f9c85d7c2da25b825ba5f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/nu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/nu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/nu.svg?1db5a99d1f547d957911461879d5785e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/nz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/nz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/nz.svg?7dab6e5e9d9e0d4f95e588ae563d5d77";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/om.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/om.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/om.svg?b9b7d0bc1d35b84b9e66f3f49f8bef3f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pa.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pa.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pa.svg?beb40ab6cce7b2d196d2d4eb94848625";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pe.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pe.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pe.svg?23591f9d72b1e3ad2652099518e98f72";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pf.svg?2a69c581854033f017ef92651bf103ad";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pg.svg?0b07d41894441f5e68d862c5156f32cf";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ph.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ph.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ph.svg?6ae85442fa90195cc9f34786a937e9d7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pk.svg?b67f80e0c74ad587ee42bd6c2a811946";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pl.svg?3fe3bd51a504e4239ca5adaeb17a1651";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pm.svg?89993b1ff27bb0107946d29ffebcfcfa";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pn.svg?48bd62e408e5f6ebafd146d2231c2e4b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pr.svg?1d278b022fba04fb58b4ed40b7562ae0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ps.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ps.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ps.svg?2992f9b92974b68d8a59bdcc30bfd63f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pt.svg?04fa443dfc5d7647ec4adab4da283554";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/pw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/pw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/pw.svg?78aaead281d584ac98bb1948f12eb776";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/py.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/py.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/py.svg?a70b32d0609b162db211927e72a218d4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/qa.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/qa.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/qa.svg?78909a6f9bc32e8d2bb779b121cb0630";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/re.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/re.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/re.svg?01fea3b62ac2440a5785d9de95dbc3d9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ro.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ro.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ro.svg?22278e1314d8e81440639fe8d1e6061a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/rs.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/rs.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/rs.svg?d00d37d2486026cb088d67ba2bb581d9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ru.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ru.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ru.svg?e3ee3b099783ef393f2f4dabdc75d5bc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/rw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/rw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/rw.svg?997fe41bfffc77e0073f10d589ae6d27";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sa.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sa.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sa.svg?135d0c86322f6763fb5631794b8af510";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sb.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sb.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sb.svg?d64e984857cd493cbe1176acaba792a4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sc.svg?ad1bcb4c714e0ca8c7355ecd4b0c3cbb";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sd.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sd.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sd.svg?7ab061d859c16996f2bd42f650274f8e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/se.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/se.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/se.svg?b039bdb8e50c968b6c50c8110676061f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sg.svg?9eb47fe757c9d8abb85049a379b606a0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sh.svg?487ef1c8b75a5950ecc12052bbc4a67c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/si.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/si.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/si.svg?63ba8c45578b45c1e1db541ff44fb1fd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sj.svg?ecbc9e939c3823f82f4ffa804f7d4dd4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sk.svg?a5af0a28a32c844c44fd22d91bdfe018";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sl.svg?f6315f743d7d62adc0f130ec0b4d13a5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sm.svg?f56650007eb0fc2472dd470c71193f45";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sn.svg?d2bec7efb0241ffa5077b53dae7e54a1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/so.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/so.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/so.svg?c1561217671d8bdde531130cc9997d03";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sr.svg?be27d1ae7006588ccd01ae8083081944";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ss.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ss.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ss.svg?e3933b4455dc06b90bba00e59fba0f59";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/st.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/st.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/st.svg?d0a56dbbee36540ebf27ff196ea1626f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sv.svg?26ee887282519008e13d35bd2ad362a8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sx.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sx.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sx.svg?a724800161ac62624719410741a2a5fb";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sy.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sy.svg?73690f50d6d4106fbd4c8ac3a556b985";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/sz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/sz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/sz.svg?dc2faeb7bafa9eca955d5788330ed384";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tc.svg?47c8276114b1d9c05bfd5c2c5403ec9e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/td.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/td.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/td.svg?f37a395c81f2cfe3b51e5f254970b8b7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tf.svg?2e7dc1af2d97ea62c34756b7f838fa77";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tg.svg?29fa137c095a6ace1adc5d8de4a19309";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/th.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/th.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/th.svg?904dd7853b623153a82acf5c4abd297b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tj.svg?980d12c941054162ab1802ce9635ec37";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tk.svg?7aaccddb93a504f69855f07491550439";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tl.svg?0616faaafebb8abad85242c3b67f7ec5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tm.svg?ea365f332bb0b8bb8f1fad69c2f4fcfc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tn.svg?fea87146ed08572e8a492974c932140e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/to.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/to.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/to.svg?238ef1cd63bf158a8679f40a3fd2ae4d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tr.svg?ce2e2e8e0650cfed7548dd59c2c184c5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tt.svg?4705d420d21a5ba8a26959ac48f8f647";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tv.svg?a595f49d6d5586b06f4be66d5a8f7a15";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tw.svg?26cc9d596b2dc8b90f177afc9c390242";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/tz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/tz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/tz.svg?d02545a1e6ca8ee2c217c28e7c44dedc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ua.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ua.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ua.svg?841d259d582b4c6f5585da31b4aab774";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ug.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ug.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ug.svg?6d6f88960e155a85c6e58fb0cf4681ed";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/um.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/um.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/um.svg?3d347682d5c526a37719f5ab8a890f11";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/un.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/un.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/un.svg?e6aabbd55ef6e4b38398d11e86733867";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/us.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/us.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/us.svg?8ec583188aba7e9426580350312d97a5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/uy.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/uy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/uy.svg?adbc4992aa0cb87499df3323234076f3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/uz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/uz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/uz.svg?ca892343cb962d42bc4cc36d776d63e8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/va.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/va.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/va.svg?90e9f73abaa206455171084b6475ca69";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/vc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/vc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/vc.svg?bbb52fa0756298590332a07e5d69f2c2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ve.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ve.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ve.svg?9f23d9626b92963d5502674c91463b51";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/vg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/vg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/vg.svg?a796b16d8f1c42862953487aed9bd660";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/vi.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/vi.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/vi.svg?0aa782108fb39a7d5f3a3076c5a36b72";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/vn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/vn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/vn.svg?a0081482192375c70656860e843b3c8d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/vu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/vu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/vu.svg?730801abb424741b4487c4f83f216372";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/wf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/wf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/wf.svg?05522b9f19236d09cc79eee2588b6992";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ws.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ws.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ws.svg?3ea6d44f91f0accab1ba37b5b7a80f55";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/xk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/xk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/xk.svg?bd62029ec779b30b2ac80989dc285ae9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/ye.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/ye.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/ye.svg?d13e1629bdb0f80baef6f33d88503231";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/yt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/yt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/yt.svg?b6042b9cfb432f844e964ddb24b4f341";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/za.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/za.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/za.svg?67ff2e108ce38abcf3f68b4e1ba3c7af";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/zm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/zm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/zm.svg?3eef5dc07668374a4628c322fdf6c937";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/1x1/zw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/1x1/zw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/1x1/zw.svg?8b8854659c43952e254a914dfca52018";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ad.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ad.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ad.svg?d42274826fceb5a1b786df1cfeb5a5ef";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ae.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ae.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ae.svg?9fd1fcbfedb5ace0e6e61a88b3fc3402";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/af.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/af.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/af.svg?008dc3229529b5e6be2aa03ce93fc03e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ag.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ag.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ag.svg?cce32c739dde31fdbee1e421de18aeac";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ai.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ai.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ai.svg?c2f29c4d57cfcba3c9b2374b2c7e461f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/al.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/al.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/al.svg?4eb491e7412fcc678a29741fdc941eba";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/am.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/am.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/am.svg?06509258e6113e2e0e54592337ac8171";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ao.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ao.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ao.svg?8b6f2ec29629876f9c00839932ded057";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/aq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/aq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/aq.svg?65afe1f1ffb9d9a23d25d2327ba2c3d3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ar.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ar.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ar.svg?d205ca1376dbe5ce35b5b926fe739959";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/as.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/as.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/as.svg?16f433a627bc83a007bba2cbaa686aee";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/at.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/at.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/at.svg?e2634e96c9ad4694d5133cc83e2c6564";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/au.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/au.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/au.svg?503a3a980ccbc651a8acc57b6f6d2dab";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/aw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/aw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/aw.svg?47ea7038c8fea471afdd906694068310";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ax.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ax.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ax.svg?c26f83744d3df6899632e575d390681a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/az.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/az.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/az.svg?451284cedf7277f87440e014c3c11557";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ba.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ba.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ba.svg?3223166179b08490c6c2291ace1894f0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bb.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bb.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bb.svg?9873885f352c415ad25c32ecf69e5cd3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bd.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bd.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bd.svg?5102bab03db6e13a165043eedab1e332";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/be.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/be.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/be.svg?27d8ca49197f90010475d2b3646ce6b5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bf.svg?9a958401fd126a3c08686ece9477cea3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bg.svg?3d762564b2be000f52ca9038e8f42ad4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bh.svg?ef135f3ca77838cbb6e329d57d250c9a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bi.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bi.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bi.svg?06f36479b44476f25fc935175ac8a596";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bj.svg?c81e891543509717b02a594b40afa14a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bl.svg?38e27b684c0a7f079cc7e1762e5e1ade";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bm.svg?0fdefae88aaed5d7f18948b45cf3086d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bn.svg?1d4e60918c474f844110c46d560233b8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bo.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bo.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bo.svg?4128202a176b10fa597f1221f8e7e4cd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bq.svg?b551016fbdf64b9d22f1c7b34a6a3a8d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/br.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/br.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/br.svg?87032851c3532c9dd64f20f4bee155a9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bs.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bs.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bs.svg?9f8a4eae81ab5bc495dd7fa4f7b26d87";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bt.svg?65b20c56edb0ae6f6523f7242256bf25";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bv.svg?78bef9106e11eade7698e39f6ed831c7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bw.svg?d1585fdf351c0bcd56a04ab460d51b3c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/by.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/by.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/by.svg?f4cbd761094b27fc253729dfbacfceeb";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/bz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/bz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/bz.svg?64d617eaf3f2c6f3f0256985b4ede543";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ca.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ca.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ca.svg?c976442e32a435a0ea72b42d40dbe8ef";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cc.svg?2da4bb974f777f45e0398ac1ba44e507";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cd.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cd.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cd.svg?cd346cdc7caa416803025986e843a600";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cf.svg?2171101e459db58cc9311ec6a0926648";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cg.svg?4396b867b33acac643e6d978fb99f1ac";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ch.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ch.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ch.svg?9c26f60a63bf575c6b7be3eec11e3043";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ci.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ci.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ci.svg?d939dcac611747f6857eb4b92cb14c8e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ck.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ck.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ck.svg?960a7b5a2c2322b898007c4611cecfd0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cl.svg?8949f9e6d4f88c4f5bc1fe5f3b4e44c4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cm.svg?5799ad4c126b0a6b1a3f01599f862ad2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cn.svg?02c229de4d98ea1668384d2ed4cc558d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/co.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/co.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/co.svg?3b252a1a91262604a52801ec3dda088d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cr.svg?7b4ebd50f5274e5bfca82408ca79c32d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cu.svg?750c91b200d29892cf10f9887253105f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cv.svg?f9922e019e929da267a67ee784bdde66";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cw.svg?f1b3043c88d52ecf9222b5987791bbac";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cx.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cx.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cx.svg?aa81bb9ef6d3ed6a6d20b6468ee40d02";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cy.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cy.svg?d069616cbc4fb181cdadc171a5038ff2";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/cz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/cz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/cz.svg?c1ef59925bf16ee880cd366d5ceeeab6";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/de.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/de.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/de.svg?3e726c2b6a59e6e4543c0a1534d93796";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/dj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/dj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/dj.svg?423c41561146de8c3017bbe35919e0bd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/dk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/dk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/dk.svg?eb1416e02baeee91a39f721e871caf23";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/dm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/dm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/dm.svg?46f58d408f6a338114dbd063b87f97f7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/do.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/do.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/do.svg?79f8bf8c1a68481e09267f5215ef80ca";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/dz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/dz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/dz.svg?4be984a3b7c813f2937097bdd83801f1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ec.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ec.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ec.svg?5d6fdbf808b19221f220ae2e0e991017";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ee.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ee.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ee.svg?6088c9ceb092913b54d7235ee2e56f2c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/eg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/eg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/eg.svg?6b83ab95bd23daca2408f78d9381af8c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/eh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/eh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/eh.svg?3b662831ee7dd98f8995817929c38fe5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/er.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/er.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/er.svg?e5e5e397d9e7e40f3b3078e291e3b396";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/es-ca.svg":
/*!********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/es-ca.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/es-ca.svg?e9062265c973b4ab42aa70eb66ea8957";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/es.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/es.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/es.svg?50623e6a761b392b5381ce35e8a77f99";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/et.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/et.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/et.svg?2ebb0d3d6e63baf78a33bca7e1ae9326";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/eu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/eu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/eu.svg?ee7f4712ac4553621d85503cb9a130e5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/fi.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/fi.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/fi.svg?2649533e1d44a2ef75d5679ef6839b9e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/fj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/fj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/fj.svg?60620e850f30b0da0d89bc25f3d69958";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/fk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/fk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/fk.svg?519e3de544b46b3524a5a2bbbc383625";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/fm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/fm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/fm.svg?59c5190c55c637cc6786bcab140eb22c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/fo.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/fo.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/fo.svg?037e466d03f81cd46e76b58aa73fe492";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/fr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/fr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/fr.svg?b1156355de9691d768df19a8a2b44da4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ga.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ga.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ga.svg?29f203bb2828c1aed048b446c8abb0ae";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gb-eng.svg":
/*!*********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gb-eng.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gb-eng.svg?14167f77f128b0f57a6263843017fc0f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gb-nir.svg":
/*!*********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gb-nir.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gb-nir.svg?43b61feaa71fe3689833cb76851718a7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gb-sct.svg":
/*!*********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gb-sct.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gb-sct.svg?4c2c379f607fe46e0cec999154ea0ba8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gb-wls.svg":
/*!*********************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gb-wls.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gb-wls.svg?2d554424b763bed9142fba7aaf41d8fc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gb.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gb.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gb.svg?d3ddd6025a06a78535b0d432d14905bf";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gd.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gd.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gd.svg?8e690a5aa1fbe3a4fb3797cd327b926e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ge.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ge.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ge.svg?16f859b527e54ef4c757aba84595516f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gf.svg?38dfa23a36e1e72303eaa3dbbd9db11a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gg.svg?98f67a6ff36afda7a5ec44ec59eb5033";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gh.svg?caedb9129bf6bd63ff4081a0ba91e113";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gi.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gi.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gi.svg?dce455a731d707ad9f6f4d4b60bb78fa";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gl.svg?2490aa08f40830bae35da50d6e38dbd5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gm.svg?50fe2799b099599b89f80b4d25376134";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gn.svg?36a3e9a3dd82736bfcf23f28bb3ebc10";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gp.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gp.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gp.svg?fa4cab3e4ee1b865a975e5eb6ab70d03";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gq.svg?30ed019c10e7044f26649ac9e9a84c8a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gr.svg?471d733ad436f655210fcb2a9e7d356a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gs.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gs.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gs.svg?0ee2d8c9dbe38540ec7006706d31c903";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gt.svg?656c9899d22b166292448de76509d46c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gu.svg?2284e60e378b2304e722fd86e917d9f3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gw.svg?c1e88a916be1c72f688c9e488cdd4516";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/gy.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/gy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/gy.svg?79fcf270400edca30d7790872057d26c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/hk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/hk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/hk.svg?7428ec1c480645e3654a2729c9f6e07f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/hm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/hm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/hm.svg?fe514431ce7922c28d2d322faa28b7f6";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/hn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/hn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/hn.svg?9b9bee13c67ab85cd468d1c5fe38ad3e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/hr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/hr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/hr.svg?4680d6323b39f2d7bd88116f757d8838";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ht.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ht.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ht.svg?fb289ca05aec82435254286e5410df58";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/hu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/hu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/hu.svg?0d7409f88bca8325938e46e3ef672716";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/id.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/id.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/id.svg?17b996767ee0373a262c32a16248a3b6";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ie.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ie.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ie.svg?c68ff961baf04c04f9beac2c32cd2458";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/il.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/il.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/il.svg?874270d66e9553b21e76dc1d433ba4a9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/im.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/im.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/im.svg?8c10222d11a27a76e0bb29224c6f743c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/in.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/in.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/in.svg?e4ab7bd057c6d49f21b3460a1bf914a9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/io.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/io.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/io.svg?3ddd1280f6e320712021a1f68ee5ae11";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/iq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/iq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/iq.svg?be9919971db8b464b1baf82a3873d1ab";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ir.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ir.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ir.svg?23e0f96c3fa45df393a3c1d184b2df34";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/is.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/is.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/is.svg?2ce20c50765b6cccf87ee4b269d8c507";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/it.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/it.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/it.svg?8d15de04f5f6e8e89cab4e5eb237f607";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/je.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/je.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/je.svg?62999e4b073e5c686d0bf2e9e60f3206";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/jm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/jm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/jm.svg?67f96b2f0df34ce53d7651ade04d1e0b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/jo.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/jo.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/jo.svg?9e2f2b3ac5784152799cde822b9ebc29";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/jp.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/jp.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/jp.svg?3e72015c537875435192c3b2d832042e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ke.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ke.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ke.svg?dd8a91b8196000643e3383d81c659ecb";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/kg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/kg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/kg.svg?1cfa1c79dd521076fb17f8d024e3d19f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/kh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/kh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/kh.svg?5a13865d2bcaa01d31483c08c8903ea7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ki.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ki.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ki.svg?db7e40f60e21ad4b6b6465409ce745b3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/km.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/km.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/km.svg?9b06043d7f9a227bc63532af67999125";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/kn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/kn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/kn.svg?bde74c6da4f2cff6fe3ae84b510b1857";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/kp.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/kp.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/kp.svg?9c53429167b92e260e1ec30e1686b93b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/kr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/kr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/kr.svg?60fde7fc2f6005c1131b87ce63370ffd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/kw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/kw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/kw.svg?496fa4662f48d2d7e3bd946177905dc4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ky.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ky.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ky.svg?5814c5a94343cb013715ab05d3eac07b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/kz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/kz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/kz.svg?740ef4bf1d15794bfbeb7a4ee804a760";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/la.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/la.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/la.svg?0f124ae33af5a9291262592979c90f55";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/lb.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/lb.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/lb.svg?e33a49a9a071a76dd393f2928ce0f808";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/lc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/lc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/lc.svg?1c3a5554a0d8d1afaaf56164415da91c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/li.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/li.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/li.svg?fb5437d371f4dc6261e9f4e5bd21628d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/lk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/lk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/lk.svg?497ee5b9544ffc29720476b7085f7503";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/lr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/lr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/lr.svg?309ccbd814f8f4ab23dd5a3116f9f2ac";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ls.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ls.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ls.svg?c0799ebf1d583d0d38408484bb56ec44";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/lt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/lt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/lt.svg?c3aeac0dad1dfcc917a721a975ea29dd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/lu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/lu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/lu.svg?c858787cf95b92f694dbe1d296a8a5d4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/lv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/lv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/lv.svg?8b293d984cea7db72e62598083dc759d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ly.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ly.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ly.svg?d089645e2ba9f431431b479cc902bf43";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ma.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ma.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ma.svg?60fbc221d84de9fb44f0d70882a393fc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mc.svg?b4f4b90da30103ef9cb0554e0111ea0d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/md.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/md.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/md.svg?5f734d921b0b2e2fa02cc33367a1d33e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/me.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/me.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/me.svg?76c434a613ae0b6e08fc3d2e8c244e52";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mf.svg?5b9ff36c7fed044c253162373820d80a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mg.svg?67f5922d788548be9d4900bebf2b5e63";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mh.svg?6d60cee3ee8d6bee9a372599dea4a426";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mk.svg?ed091b887cafb2adbf04a411d7ac40fa";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ml.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ml.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ml.svg?e6f097f93a69b28225c43e25fdcaf709";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mm.svg?92e9f832a28fd293035e21d9b6983790";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mn.svg?9ebe47ebe8928cd80ea971f6cc7a2760";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mo.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mo.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mo.svg?e1178856d7fef5a8dcd53af9f9836ab7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mp.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mp.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mp.svg?c5eb7f233b097ecfc5f78b3959907dcc";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mq.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mq.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mq.svg?bfeadb02a0e0566b376450d23682c523";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mr.svg?a46829f17f8f3c4c5a5929be8e3fc599";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ms.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ms.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ms.svg?e147bd2bb2aa7f31e3804673c8564340";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mt.svg?a816f3a2978c63034949667c78ebf5fd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mu.svg?896330b72092b57179e09d43f831211b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mv.svg?3c896bfdad2f76fe0945fe43d776a9ab";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mw.svg?6073ddcffcc7c715883b34f702bef924";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mx.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mx.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mx.svg?8ee3aa6a7feaf34c5cc806f645cfd3c6";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/my.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/my.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/my.svg?e6739f404c969d6225b48df00169ca8f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/mz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/mz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/mz.svg?ef4657da4e39ea91de728d93ce59d7c9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/na.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/na.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/na.svg?bb49a4035c384be9926bac6004bea21f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/nc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/nc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/nc.svg?b8c9f5e4fa65dc17c5f07773616fa3cb";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ne.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ne.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ne.svg?b7369ec74cd2a2ccf698ab0416ba2711";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/nf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/nf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/nf.svg?99af5a94b011d565f7ab92338a3a8186";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ng.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ng.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ng.svg?992459a3d0f22849b493a540e1564bb0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ni.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ni.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ni.svg?7b131ab3ceaf55696b688d2617f21f54";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/nl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/nl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/nl.svg?d4811c278d659bb33f910685dd356ad8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/no.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/no.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/no.svg?0b41df77e951a30bbfccfd0a3714a1a3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/np.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/np.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/np.svg?b66578a5c732da35e2c8af86e46ff93b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/nr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/nr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/nr.svg?d16edc69065bf2bd0b0ba47650201d6b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/nu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/nu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/nu.svg?433deb3d047d08459797f7a9da38685f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/nz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/nz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/nz.svg?3241e92770d44bbe8518b3ed7cabab9a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/om.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/om.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/om.svg?1798270ba5e7dc130458959dccc26b22";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pa.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pa.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pa.svg?d0787677f0d7c9cdaa8f6acca3f19245";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pe.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pe.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pe.svg?ea95116f76c82964116d1575f7b8376a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pf.svg?bab3b7a56aa5cd5f44235c47ea55f5e9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pg.svg?68e1ce3359df0808db9cc34dcb488c4b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ph.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ph.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ph.svg?12f36eed83fdf6fa33bccb7eae18286a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pk.svg?c2e1a15939a23c5894eb4af1f20e3e73";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pl.svg?562edca5bb39d66f4c9238a36295187b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pm.svg?1e97e8d76fe2d553eedddc23f833bfe5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pn.svg?c4a2e49ffb6e0dc37c7e4f372b634eb8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pr.svg?0811a0517cf38bb44f513ab15b7532de";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ps.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ps.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ps.svg?42f2391e39ad07037687596ba3fbab75";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pt.svg?b908edaecfb2ef51ac70b6bf7457ef2c";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/pw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/pw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/pw.svg?20a1d020151e19375915c509633d5018";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/py.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/py.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/py.svg?bbc22e414bad33de0d15531e95a2cf3f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/qa.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/qa.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/qa.svg?b314986b75f2a81f557544f73e2cd203";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/re.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/re.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/re.svg?17909e3784b7d4ef90efeae63ef194b4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ro.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ro.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ro.svg?625aca9e928c0eb9f463099945b9b115";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/rs.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/rs.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/rs.svg?291d0fb654f2738012dabe35f370a1cd";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ru.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ru.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ru.svg?0cacf46e6f473fa88781120f370d6107";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/rw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/rw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/rw.svg?7fe5146baf52818fc8f0845a0b36d3da";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sa.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sa.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sa.svg?c36d1991b52ce043a0ae18b32a4da5da";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sb.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sb.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sb.svg?aa819297c44f0a9d29fa4aaf18a1bf32";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sc.svg?e6584421fdc8b72dfd9e2a139b71e82a";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sd.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sd.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sd.svg?c466d90ea717a1f99f0ca61fd244b0f3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/se.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/se.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/se.svg?ee9cde492630fda60f7075c5fe8f3ea6";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sg.svg?5e6ed3f10d1de224079d77fe6f59ce97";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sh.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sh.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sh.svg?6560d76bf10093362d933d31d620b17f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/si.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/si.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/si.svg?31fbdc5b5842cfa094afed00d9baf083";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sj.svg?ae547dbec390990657f9d8acd33fbea4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sk.svg?b84444bf8d98e48c8b0055e54071d918";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sl.svg?ddbd1d9b113b2688102f56c63a431475";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sm.svg?3b1c9fb5c651a0bda66739b990a1456d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sn.svg?5b654e1a7246e45c6577b66c7b935620";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/so.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/so.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/so.svg?f91fb92c0ca6934e1e008f8f97e58c63";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sr.svg?788f3e2af54fdedc56e32d20777fcf5b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ss.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ss.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ss.svg?67001d2a8840b34f8407526c30a399d5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/st.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/st.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/st.svg?1f545eb99b323d22b91e51b9e56df808";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sv.svg?1176ea281282d6b053af86809e32d6f9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sx.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sx.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sx.svg?522d898c19396a45caa51ed0f0f2543e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sy.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sy.svg?64f0d2d7a590e22c8d0c415ba7d729af";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/sz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/sz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/sz.svg?cfb8269f38d55f7f388bca2ae6d18fb4";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tc.svg?d40761f21eebb19082ad74bd401555ee";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/td.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/td.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/td.svg?a0923ddc3c8abed20bfdfbd559c8d7b0";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tf.svg?4ab43cc9db2814759ac2990c761f60a3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tg.svg?025deae88a72695eb60991ab1247714f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/th.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/th.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/th.svg?76fca72f6d180d3f14a55653b8937b5e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tj.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tj.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tj.svg?a8ed5244d61deb197fad851e52e6f10b";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tk.svg?1959d9de338fea49559ebcdbc11d7185";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tl.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tl.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tl.svg?3c1ccf1158d75af368e003eeac4716c7";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tm.svg?b13d1440e1d8f4c55361656fd3191952";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tn.svg?50cd91018d742d2f5c31a158d417ea87";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/to.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/to.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/to.svg?79354e72ad0559ef82e28d0f2e88033f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tr.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tr.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tr.svg?ed6d5f37779af38911b0b7cb2212e30d";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tt.svg?c3647d9bc890d2ebd383b80a3812e52f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tv.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tv.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tv.svg?829fb9d89912457f171d40d33805a83e";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tw.svg?8a194685378977299ae31f5e940b2d58";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/tz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/tz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/tz.svg?88c89454adfe247406b430a46c965da8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ua.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ua.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ua.svg?a8b13525ee3b82f901196668f4733097";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ug.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ug.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ug.svg?be11ef3932f4010356d708d10c60f1e9";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/um.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/um.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/um.svg?8754eddfe66cfeebda8977e08505dfdb";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/un.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/un.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/un.svg?bdaf37f920eb89f19bf840be77b1f359";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/us.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/us.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/us.svg?ae65659236a7e348402799477237e6fa";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/uy.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/uy.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/uy.svg?79b02850081e27b3ba209e6ae60ad50f";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/uz.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/uz.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/uz.svg?eb1e00b870d7f0784288d76eb3bfc1d5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/va.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/va.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/va.svg?21913d789a3d4b70ce0a72e2ceeea239";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/vc.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/vc.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/vc.svg?4ac5124fbf60fcff6808515904a79f04";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ve.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ve.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ve.svg?b2cd5a9a011fd43f115a2c5e2c9f91e5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/vg.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/vg.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/vg.svg?b37358a1a76ab385e4ea28f3732b7f57";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/vi.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/vi.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/vi.svg?4952d5bf33f73b27ccfe260531eb66f3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/vn.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/vn.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/vn.svg?6b3aef51e8b58cf029a85087e87591b5";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/vu.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/vu.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/vu.svg?859836e7f7e23c3e620dc34e4bf47c79";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/wf.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/wf.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/wf.svg?e3ac728c6286182ecee6047ba2d84627";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ws.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ws.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ws.svg?405a2c5f036343f54f0e46ab054e7cf8";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/xk.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/xk.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/xk.svg?62bc9bcf96e7abb6e21278b2e9714817";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/ye.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/ye.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/ye.svg?b5840a84dc1fc44424947f817a83b8ce";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/yt.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/yt.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/yt.svg?f06d254d5978e4b0223fa242514e55e1";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/za.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/za.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/za.svg?14e7052257d9914b613fc992186d2e90";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/zm.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/zm.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/zm.svg?a9ff495dd331a2364facd4ad5d6891a3";

/***/ }),

/***/ "./node_modules/flag-icon-css/flags/4x3/zw.svg":
/*!*****************************************************!*\
  !*** ./node_modules/flag-icon-css/flags/4x3/zw.svg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/flag-icon-css/flags/4x3/zw.svg?6ac3949a90f1620a287b06e2b4cb3bc2";

/***/ }),

/***/ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"604a59b1-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/LaravelVuePagination.vue?vue&type=template&id=7f71b5a7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('renderless-laravel-vue-pagination',{attrs:{"data":_vm.data,"limit":_vm.limit,"show-disabled":_vm.showDisabled,"size":_vm.size,"align":_vm.align},on:{"pagination-change-page":_vm.onPaginationChangePage},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var data = ref.data;
var limit = ref.limit;
var showDisabled = ref.showDisabled;
var size = ref.size;
var align = ref.align;
var computed = ref.computed;
var prevButtonEvents = ref.prevButtonEvents;
var nextButtonEvents = ref.nextButtonEvents;
var pageButtonEvents = ref.pageButtonEvents;
return (computed.total > computed.perPage)?_c('ul',{staticClass:"pagination",class:{
            'pagination-sm': size == 'small',
            'pagination-lg': size == 'large',
            'justify-content-center': align == 'center',
            'justify-content-end': align == 'right'
        }},[(computed.prevPageUrl || showDisabled)?_c('li',{staticClass:"page-item pagination-prev-nav",class:{'disabled': !computed.prevPageUrl}},[_c('a',_vm._g({staticClass:"page-link",attrs:{"href":"#","aria-label":"Previous","tabindex":!computed.prevPageUrl && -1}},prevButtonEvents),[_vm._t("prev-nav",[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("«")]),_c('span',{staticClass:"sr-only"},[_vm._v("Previous")])])],2)]):_vm._e(),_vm._l((computed.pageRange),function(page,key){return _c('li',{key:key,staticClass:"page-item pagination-page-nav",class:{ 'active': page == computed.currentPage }},[_c('a',_vm._g({staticClass:"page-link",attrs:{"href":"#"}},pageButtonEvents(page)),[_vm._v("\n                "+_vm._s(page)+"\n                "),(page == computed.currentPage)?_c('span',{staticClass:"sr-only"},[_vm._v("(current)")]):_vm._e()])])}),(computed.nextPageUrl || showDisabled)?_c('li',{staticClass:"page-item pagination-next-nav",class:{'disabled': !computed.nextPageUrl}},[_c('a',_vm._g({staticClass:"page-link",attrs:{"href":"#","aria-label":"Next","tabindex":!computed.nextPageUrl && -1}},nextButtonEvents),[_vm._t("next-nav",[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("»")]),_c('span',{staticClass:"sr-only"},[_vm._v("Next")])])],2)]):_vm._e()],2):_vm._e()}}],null,true)})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/LaravelVuePagination.vue?vue&type=template&id=7f71b5a7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/RenderlessLaravelVuePagination.vue?vue&type=script&lang=js&
/* harmony default export */ var RenderlessLaravelVuePaginationvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      default: function _default() {}
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default', 'large'].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    isApiResource: function isApiResource() {
      return !!this.data.meta;
    },
    currentPage: function currentPage() {
      return this.isApiResource ? this.data.meta.current_page : this.data.current_page;
    },
    firstPageUrl: function firstPageUrl() {
      return this.isApiResource ? this.data.links.first : null;
    },
    from: function from() {
      return this.isApiResource ? this.data.meta.from : this.data.from;
    },
    lastPage: function lastPage() {
      return this.isApiResource ? this.data.meta.last_page : this.data.last_page;
    },
    lastPageUrl: function lastPageUrl() {
      return this.isApiResource ? this.data.links.last : null;
    },
    nextPageUrl: function nextPageUrl() {
      return this.isApiResource ? this.data.links.next : this.data.next_page_url;
    },
    perPage: function perPage() {
      return this.isApiResource ? this.data.meta.per_page : this.data.per_page;
    },
    prevPageUrl: function prevPageUrl() {
      return this.isApiResource ? this.data.links.prev : this.data.prev_page_url;
    },
    to: function to() {
      return this.isApiResource ? this.data.meta.to : this.data.to;
    },
    total: function total() {
      return this.isApiResource ? this.data.meta.total : this.data.total;
    },
    pageRange: function pageRange() {
      if (this.limit === -1) {
        return 0;
      }

      if (this.limit === 0) {
        return this.lastPage;
      }

      var current = this.currentPage;
      var last = this.lastPage;
      var delta = this.limit;
      var left = current - delta;
      var right = current + delta + 1;
      var range = [];
      var pages = [];
      var l;

      for (var i = 1; i <= last; i++) {
        if (i === 1 || i === last || i >= left && i < right) {
          range.push(i);
        }
      }

      range.forEach(function (i) {
        if (l) {
          if (i - l === 2) {
            pages.push(l + 1);
          } else if (i - l !== 1) {
            pages.push('...');
          }
        }

        pages.push(i);
        l = i;
      });
      return pages;
    }
  },
  methods: {
    previousPage: function previousPage() {
      this.selectPage(this.currentPage - 1);
    },
    nextPage: function nextPage() {
      this.selectPage(this.currentPage + 1);
    },
    selectPage: function selectPage(page) {
      if (page === '...') {
        return;
      }

      this.$emit('pagination-change-page', page);
    }
  },
  render: function render() {
    var _this = this;

    return this.$scopedSlots.default({
      data: this.data,
      limit: this.limit,
      showDisabled: this.showDisabled,
      size: this.size,
      align: this.align,
      computed: {
        isApiResource: this.isApiResource,
        currentPage: this.currentPage,
        firstPageUrl: this.firstPageUrl,
        from: this.from,
        lastPage: this.lastPage,
        lastPageUrl: this.lastPageUrl,
        nextPageUrl: this.nextPageUrl,
        perPage: this.perPage,
        prevPageUrl: this.prevPageUrl,
        to: this.to,
        total: this.total,
        pageRange: this.pageRange
      },
      prevButtonEvents: {
        click: function click(e) {
          e.preventDefault();

          _this.previousPage();
        }
      },
      nextButtonEvents: {
        click: function click(e) {
          e.preventDefault();

          _this.nextPage();
        }
      },
      pageButtonEvents: function pageButtonEvents(page) {
        return {
          click: function click(e) {
            e.preventDefault();

            _this.selectPage(page);
          }
        };
      }
    });
  }
});
// CONCATENATED MODULE: ./src/RenderlessLaravelVuePagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_RenderlessLaravelVuePaginationvue_type_script_lang_js_ = (RenderlessLaravelVuePaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/RenderlessLaravelVuePagination.vue
var RenderlessLaravelVuePagination_render, RenderlessLaravelVuePagination_staticRenderFns




/* normalize component */

var component = normalizeComponent(
  src_RenderlessLaravelVuePaginationvue_type_script_lang_js_,
  RenderlessLaravelVuePagination_render,
  RenderlessLaravelVuePagination_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RenderlessLaravelVuePagination = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/LaravelVuePagination.vue?vue&type=script&lang=js&
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
//

/* harmony default export */ var LaravelVuePaginationvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Object,
      default: function _default() {}
    },
    limit: {
      type: Number,
      default: 0
    },
    showDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function validator(value) {
        return ['small', 'default', 'large'].indexOf(value) !== -1;
      }
    },
    align: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return ['left', 'center', 'right'].indexOf(value) !== -1;
      }
    }
  },
  methods: {
    onPaginationChangePage: function onPaginationChangePage(page) {
      this.$emit('pagination-change-page', page);
    }
  },
  components: {
    RenderlessLaravelVuePagination: RenderlessLaravelVuePagination
  }
});
// CONCATENATED MODULE: ./src/LaravelVuePagination.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_LaravelVuePaginationvue_type_script_lang_js_ = (LaravelVuePaginationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/LaravelVuePagination.vue





/* normalize component */

var LaravelVuePagination_component = normalizeComponent(
  src_LaravelVuePaginationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LaravelVuePagination = (LaravelVuePagination_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (LaravelVuePagination);



/***/ })

/******/ })["default"];
//# sourceMappingURL=laravel-vue-pagination.common.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-flux/dist/vue-flux.umd.min.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-flux/dist/vue-flux.umd.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(t,e){ true?module.exports=e():undefined})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fae3")}({"01f9":function(t,e,n){"use strict";var i=n("2d00"),r=n("5ca1"),o=n("2aba"),s=n("32e9"),a=n("84f2"),c=n("41a0"),u=n("7f20"),f=n("38fd"),l=n("2b4c")("iterator"),h=!([].keys&&"next"in[].keys()),p="@@iterator",d="keys",v="values",g=function(){return this};t.exports=function(t,e,n,m,y,b,x){c(n,e,m);var w,O,_,S=function(t){if(!h&&t in z)return z[t];switch(t){case d:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",j=y==v,T=!1,z=t.prototype,D=z[l]||z[p]||y&&z[y],P=D||S(y),C=y?j?S("entries"):P:void 0,E="Array"==e&&z.entries||D;if(E&&(_=f(E.call(new t)),_!==Object.prototype&&_.next&&(u(_,k,!0),i||"function"==typeof _[l]||s(_,l,g))),j&&D&&D.name!==v&&(T=!0,P=function(){return D.call(this)}),i&&!x||!h&&!T&&z[l]||s(z,l,P),a[e]=P,a[k]=g,y)if(w={values:j?P:S(v),keys:b?P:S(d),entries:C},x)for(O in w)O in z||o(z,O,w[O]);else r(r.P+r.F*(h||T),e,w);return w}},"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0a49":function(t,e,n){var i=n("9b43"),r=n("626a"),o=n("4bf8"),s=n("9def"),a=n("cd1c");t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,f=4==t,l=6==t,h=5==t||l,p=e||a;return function(e,a,d){for(var v,g,m=o(e),y=r(m),b=i(a,d,3),x=s(y.length),w=0,O=n?p(e,x):c?p(e,0):void 0;x>w;w++)if((h||w in y)&&(v=y[w],g=b(v,w,m),t))if(n)O[w]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return w;case 2:O.push(v)}else if(f)return!1;return l?-1:u||f?f:O}}},"0d58":function(t,e,n){var i=n("ce10"),r=n("e11e");t.exports=Object.keys||function(t){return i(t,r)}},"0fc9":function(t,e,n){var i=n("3a38"),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},1169:function(t,e,n){var i=n("2d95");t.exports=Array.isArray||function(t){return"Array"==i(t)}},1173:function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},"11e9":function(t,e,n){var i=n("52a7"),r=n("4630"),o=n("6821"),s=n("6a99"),a=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=o(t),e=s(e,!0),c)try{return u(t,e)}catch(n){}if(a(t,e))return r(!i.f.call(t,e),t[e])}},1495:function(t,e,n){var i=n("86cc"),r=n("cb7c"),o=n("0d58");t.exports=n("9e1e")?Object.defineProperties:function(t,e){r(t);var n,s=o(e),a=s.length,c=0;while(a>c)i.f(t,n=s[c++],e[n]);return t}},1654:function(t,e,n){"use strict";var i=n("71c1")(!0);n("30f1")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})}))},1691:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},1991:function(t,e,n){var i,r,o,s=n("9b43"),a=n("31f4"),c=n("fab2"),u=n("230e"),f=n("7726"),l=f.process,h=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,g=0,m={},y="onreadystatechange",b=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){b.call(t.data)};h&&p||(h=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return m[++g]=function(){a("function"==typeof t?t:Function(t),e)},i(g),g},p=function(t){delete m[t]},"process"==n("2d95")(l)?i=function(t){l.nextTick(s(b,t,1))}:v&&v.now?i=function(t){v.now(s(b,t,1))}:d?(r=new d,o=r.port2,r.port1.onmessage=x,i=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(i=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):i=y in u("script")?function(t){c.appendChild(u("script"))[y]=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(s(b,t,1),0)}),t.exports={set:h,clear:p}},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"1d36":function(t,e,n){"use strict";var i=n("9b5a"),r=n.n(i);r.a},"1dec":function(t,e,n){"use strict";var i=n("5e78"),r=n.n(i);r.a},"1ec9":function(t,e,n){var i=n("f772"),r=n("e53d").document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},"1fa8":function(t,e,n){var i=n("cb7c");t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(s){var o=t["return"];throw void 0!==o&&i(o.call(t)),s}}},"230e":function(t,e,n){var i=n("d3f4"),r=n("7726").document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},2350:function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"===typeof btoa){var o=i(r),s=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(s).concat([o]).join("\n")}return[n].join("\n")}function i(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i})).join("")},e.i=function(t,n){"string"===typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"===typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"===typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},"23c6":function(t,e,n){var i=n("2d95"),r=n("2b4c")("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(a=i(e))&&"function"==typeof e.callee?"Arguments":a}},"241e":function(t,e,n){var i=n("25eb");t.exports=function(t){return Object(i(t))}},"24c5":function(t,e,n){"use strict";var i,r,o,s,a=n("b8e3"),c=n("e53d"),u=n("d864"),f=n("40c31"),l=n("63b6"),h=n("f772"),p=n("79aa"),d=n("1173"),v=n("a22a"),g=n("f201"),m=n("4178").set,y=n("aba2")(),b=n("656e"),x=n("4439"),w=n("bc13"),O=n("cd78"),_="Promise",S=c.TypeError,k=c.process,j=k&&k.versions,T=j&&j.v8||"",z=c[_],D="process"==f(k),P=function(){},C=r=b.f,E=!!function(){try{var t=z.resolve(1),e=(t.constructor={})[n("5168")("species")]=function(t){t(P,P)};return(D||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof e&&0!==T.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(i){}}(),F=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},I=function(t,e){if(!t._n){t._n=!0;var n=t._c;y((function(){var i=t._v,r=1==t._s,o=0,s=function(e){var n,o,s,a=r?e.ok:e.fail,c=e.resolve,u=e.reject,f=e.domain;try{a?(r||(2==t._h&&L(t),t._h=1),!0===a?n=i:(f&&f.enter(),n=a(i),f&&(f.exit(),s=!0)),n===e.promise?u(S("Promise-chain cycle")):(o=F(n))?o.call(n,c,u):c(n)):u(i)}catch(l){f&&!s&&f.exit(),u(l)}};while(n.length>o)s(n[o++]);t._c=[],t._n=!1,e&&!t._h&&$(t)}))}},$=function(t){m.call(c,(function(){var e,n,i,r=t._v,o=M(t);if(o&&(e=x((function(){D?k.emit("unhandledRejection",r,t):(n=c.onunhandledrejection)?n({promise:t,reason:r}):(i=c.console)&&i.error&&i.error("Unhandled promise rejection",r)})),t._h=D||M(t)?2:1),t._a=void 0,o&&e.e)throw e.v}))},M=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){m.call(c,(function(){var e;D?k.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},N=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),I(e,!0))},R=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=F(t))?y((function(){var i={_w:n,_d:!1};try{e.call(t,u(R,i,1),u(N,i,1))}catch(r){N.call(i,r)}})):(n._v=t,n._s=1,I(n,!1))}catch(i){N.call({_w:n,_d:!1},i)}}};E||(z=function(t){d(this,z,_,"_h"),p(t),i.call(this);try{t(u(R,this,1),u(N,this,1))}catch(e){N.call(this,e)}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},i.prototype=n("5c95")(z.prototype,{then:function(t,e){var n=C(g(this,z));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=D?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&I(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=u(R,t,1),this.reject=u(N,t,1)},b.f=C=function(t){return t===z||t===s?new o(t):r(t)}),l(l.G+l.W+l.F*!E,{Promise:z}),n("45f2")(z,_),n("4c95")(_),s=n("584a")[_],l(l.S+l.F*!E,_,{reject:function(t){var e=C(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(a||!E),_,{resolve:function(t){return O(a&&this===s?z:this,t)}}),l(l.S+l.F*!(E&&n("4ee1")((function(t){z.all(t)["catch"](P)}))),_,{all:function(t){var e=this,n=C(e),i=n.resolve,r=n.reject,o=x((function(){var n=[],o=0,s=1;v(t,!1,(function(t){var a=o++,c=!1;n.push(void 0),s++,e.resolve(t).then((function(t){c||(c=!0,n[a]=t,--s||i(n))}),r)})),--s||i(n)}));return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=C(e),i=n.reject,r=x((function(){v(t,!1,(function(t){e.resolve(t).then(n.resolve,i)}))}));return r.e&&i(r.v),n.promise}})},"25eb":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},2621:function(t,e){e.f=Object.getOwnPropertySymbols},"27ee":function(t,e,n){var i=n("23c6"),r=n("2b4c")("iterator"),o=n("84f2");t.exports=n("8378").getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},2810:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".vue-flux{position:relative}.vue-flux .flux-transition{position:absolute}.vue-flux .complements,.vue-flux>.flux-image{position:absolute;top:0;left:0}.vue-flux .complements{right:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;z-index:45}",""])},"281b":function(t,e,n){"use strict";var i=n("dd9a"),r=n.n(i);r.a},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2aba":function(t,e,n){var i=n("7726"),r=n("32e9"),o=n("69a8"),s=n("ca5a")("src"),a=n("fa5b"),c="toString",u=(""+a).split(c);n("8378").inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(c&&(o(n,s)||r(n,s,t[e]?""+t[e]:u.join(String(e)))),t===i?t[e]=n:a?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,c,(function(){return"function"==typeof this&&this[s]||a.call(this)}))},"2aeb":function(t,e,n){var i=n("cb7c"),r=n("1495"),o=n("e11e"),s=n("613b")("IE_PROTO"),a=function(){},c="prototype",u=function(){var t,e=n("230e")("iframe"),i=o.length,r="<",s=">";e.style.display="none",n("fab2").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+s+"document.F=Object"+r+"/script"+s),t.close(),u=t.F;while(i--)delete u[c][o[i]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=i(t),n=new a,a[c]=null,n[s]=t):n=u(),void 0===e?n:r(n,e)}},"2b4c":function(t,e,n){var i=n("5537")("wks"),r=n("ca5a"),o=n("7726").Symbol,s="function"==typeof o,a=t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))};a.store=i},"2d00":function(t,e){t.exports=!1},"2d95":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"2fdb":function(t,e,n){"use strict";var i=n("5ca1"),r=n("d2c8"),o="includes";i(i.P+i.F*n("5147")(o),"String",{includes:function(t){return!!~r(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3024:function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"30f1":function(t,e,n){"use strict";var i=n("b8e3"),r=n("63b6"),o=n("9138"),s=n("35e8"),a=n("481b"),c=n("8f60"),u=n("45f2"),f=n("53e2"),l=n("5168")("iterator"),h=!([].keys&&"next"in[].keys()),p="@@iterator",d="keys",v="values",g=function(){return this};t.exports=function(t,e,n,m,y,b,x){c(n,e,m);var w,O,_,S=function(t){if(!h&&t in z)return z[t];switch(t){case d:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",j=y==v,T=!1,z=t.prototype,D=z[l]||z[p]||y&&z[y],P=D||S(y),C=y?j?S("entries"):P:void 0,E="Array"==e&&z.entries||D;if(E&&(_=f(E.call(new t)),_!==Object.prototype&&_.next&&(u(_,k,!0),i||"function"==typeof _[l]||s(_,l,g))),j&&D&&D.name!==v&&(T=!0,P=function(){return D.call(this)}),i&&!x||!h&&!T&&z[l]||s(z,l,P),a[e]=P,a[k]=g,y)if(w={values:j?P:S(v),keys:b?P:S(d),entries:C},x)for(O in w)O in z||o(z,O,w[O]);else r(r.P+r.F*(h||T),e,w);return w}},3100:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".vue-flux .flux-pagination{margin-bottom:.5%}.vue-flux .flux-pagination ul{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;list-style-type:none;text-align:center;position:relative}.vue-flux .flux-pagination li{display:block;margin:0 1% 1.5% 1%;cursor:pointer;width:2%;height:0;min-width:10px;min-height:10px;padding-bottom:2%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.vue-flux .flux-pagination .pagination-item{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid #fff;border-radius:50%;background-color:rgba(0,0,0,.7);-webkit-transition:background-color .2s ease-in,border .2s ease-in;transition:background-color .2s ease-in,border .2s ease-in}.vue-flux .flux-pagination .pagination-item:hover{border-color:#000;background-color:#fff}.vue-flux .flux-pagination .pagination-item.active{border-color:#fff;background-color:#fff}",""])},3113:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".flux-transition{position:relative}",""])},"31f4":function(t,e){t.exports=function(t,e,n){var i=void 0===n;switch(e.length){case 0:return i?t():t.call(n);case 1:return i?t(e[0]):t.call(n,e[0]);case 2:return i?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return i?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return i?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"32e9":function(t,e,n){var i=n("86cc"),r=n("4630");t.exports=n("9e1e")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},"32fc":function(t,e,n){var i=n("e53d").document;t.exports=i&&i.documentElement},"335c":function(t,e,n){var i=n("6b4c");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},"33a4":function(t,e,n){var i=n("84f2"),r=n("2b4c")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},"35e8":function(t,e,n){var i=n("d9f6"),r=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},"36c3":function(t,e,n){var i=n("335c"),r=n("25eb");t.exports=function(t){return i(r(t))}},3702:function(t,e,n){var i=n("481b"),r=n("5168")("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[r]===t)}},"37c8":function(t,e,n){e.f=n("2b4c")},"38fd":function(t,e,n){var i=n("69a8"),r=n("4bf8"),o=n("613b")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},"3a38":function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},"3a72":function(t,e,n){var i=n("7726"),r=n("8378"),o=n("2d00"),s=n("37c8"),a=n("86cc").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=o?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:s.f(t)})}},"3c11":function(t,e,n){"use strict";var i=n("63b6"),r=n("584a"),o=n("e53d"),s=n("f201"),a=n("cd78");i(i.P+i.R,"Promise",{finally:function(t){var e=s(this,r.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then((function(){return n}))}:t,n?function(n){return a(e,t()).then((function(){throw n}))}:t)}})},"40c3":function(t,e,n){var i=n("ce99");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("456f1641",i,!0,{sourceMap:!1,shadowMode:!1})},"40c31":function(t,e,n){var i=n("6b4c"),r=n("5168")("toStringTag"),o="Arguments"==i(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),r))?n:o?i(e):"Object"==(a=i(e))&&"function"==typeof e.callee?"Arguments":a}},4178:function(t,e,n){var i,r,o,s=n("d864"),a=n("3024"),c=n("32fc"),u=n("1ec9"),f=n("e53d"),l=f.process,h=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,g=0,m={},y="onreadystatechange",b=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},x=function(t){b.call(t.data)};h&&p||(h=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return m[++g]=function(){a("function"==typeof t?t:Function(t),e)},i(g),g},p=function(t){delete m[t]},"process"==n("6b4c")(l)?i=function(t){l.nextTick(s(b,t,1))}:v&&v.now?i=function(t){v.now(s(b,t,1))}:d?(r=new d,o=r.port2,r.port1.onmessage=x,i=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(i=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):i=y in u("script")?function(t){c.appendChild(u("script"))[y]=function(){c.removeChild(this),b.call(t)}}:function(t){setTimeout(s(b,t,1),0)}),t.exports={set:h,clear:p}},"41a0":function(t,e,n){"use strict";var i=n("2aeb"),r=n("4630"),o=n("7f20"),s={};n("32e9")(s,n("2b4c")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},"43fc":function(t,e,n){"use strict";var i=n("63b6"),r=n("656e"),o=n("4439");i(i.S,"Promise",{try:function(t){var e=r.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},4522:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".vue-flux .flux-caption{position:absolute;top:0;left:0;right:0;font-size:.8rem;line-height:1.1rem;padding:6px;color:#fff;text-align:center;background-color:rgba(0,0,0,.65)}.vue-flux .flux-caption.fade-enter,.vue-flux .flux-caption.fade-leave-to{opacity:0}.vue-flux .flux-caption.fade-enter-active{-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}",""])},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"456d":function(t,e,n){var i=n("4bf8"),r=n("0d58");n("5eda")("keys",(function(){return function(t){return r(i(t))}}))},4588:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},"45f2":function(t,e,n){var i=n("d9f6").f,r=n("07e3"),o=n("5168")("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},4630:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"465d":function(t,e,n){var i=n("3113");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("95169e72",i,!0,{sourceMap:!1,shadowMode:!1})},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"481b":function(t,e){t.exports={}},"499e":function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],a=o[1],c=o[2],u=o[3],f={id:t+":"+r,css:a,media:c,sourceMap:u};i[s]?i[s].parts.push(f):n.push(i[s]={id:s,parts:[f]})}return n}n.r(e),n.d(e,"default",(function(){return d}));var r="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},s=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,f=function(){},l=null,h="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,n,r){u=n,l=r||{};var s=i(t,e);return v(s),function(e){for(var n=[],r=0;r<s.length;r++){var a=s[r],c=o[a.id];c.refs--,n.push(c)}e?(s=i(t,e),v(s)):s=[];for(r=0;r<n.length;r++){c=n[r];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete o[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],i=o[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(m(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(r=0;r<n.parts.length;r++)s.push(m(n.parts[r]));o[n.id]={id:n.id,refs:1,parts:s}}}}function g(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function m(t){var e,n,i=document.querySelector("style["+h+'~="'+t.id+'"]');if(i){if(u)return f;i.parentNode.removeChild(i)}if(p){var r=c++;i=a||(a=g()),e=b.bind(null,i,r,!1),n=b.bind(null,i,r,!0)}else i=g(),e=x.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function b(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function x(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),l.ssrId&&t.setAttribute(h,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"4a59":function(t,e,n){var i=n("9b43"),r=n("1fa8"),o=n("33a4"),s=n("cb7c"),a=n("9def"),c=n("27ee"),u={},f={};e=t.exports=function(t,e,n,l,h){var p,d,v,g,m=h?function(){return t}:c(t),y=i(n,l,e?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(p=a(t.length);p>b;b++)if(g=e?y(s(d=t[b])[0],d[1]):y(t[b]),g===u||g===f)return g}else for(v=m.call(t);!(d=v.next()).done;)if(g=r(v,y,d.value,e),g===u||g===f)return g};e.BREAK=u,e.RETURN=f},"4bf8":function(t,e,n){var i=n("be13");t.exports=function(t){return Object(i(t))}},"4c95":function(t,e,n){"use strict";var i=n("e53d"),r=n("584a"),o=n("d9f6"),s=n("8e60"),a=n("5168")("species");t.exports=function(t){var e="function"==typeof r[t]?r[t]:i[t];s&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},"4ee1":function(t,e,n){var i=n("5168")("iterator"),r=!1;try{var o=[7][i]();o["return"]=function(){r=!0},Array.from(o,(function(){throw 2}))}catch(s){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],a=o[i]();a.next=function(){return{done:n=!0}},o[i]=function(){return a},t(o)}catch(s){}return n}},"50ed":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},5147:function(t,e,n){var i=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(r){}}return!0}},5168:function(t,e,n){var i=n("dbdb")("wks"),r=n("62a0"),o=n("e53d").Symbol,s="function"==typeof o,a=t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))};a.store=i},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"53e2":function(t,e,n){var i=n("07e3"),r=n("241e"),o=n("5559")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},"551c":function(t,e,n){"use strict";var i,r,o,s,a=n("2d00"),c=n("7726"),u=n("9b43"),f=n("23c6"),l=n("5ca1"),h=n("d3f4"),p=n("d8e8"),d=n("f605"),v=n("4a59"),g=n("ebd6"),m=n("1991").set,y=n("8079")(),b=n("a5b8"),x=n("9c80"),w=n("a25f"),O=n("bcaa"),_="Promise",S=c.TypeError,k=c.process,j=k&&k.versions,T=j&&j.v8||"",z=c[_],D="process"==f(k),P=function(){},C=r=b.f,E=!!function(){try{var t=z.resolve(1),e=(t.constructor={})[n("2b4c")("species")]=function(t){t(P,P)};return(D||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof e&&0!==T.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(i){}}(),F=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},I=function(t,e){if(!t._n){t._n=!0;var n=t._c;y((function(){var i=t._v,r=1==t._s,o=0,s=function(e){var n,o,s,a=r?e.ok:e.fail,c=e.resolve,u=e.reject,f=e.domain;try{a?(r||(2==t._h&&L(t),t._h=1),!0===a?n=i:(f&&f.enter(),n=a(i),f&&(f.exit(),s=!0)),n===e.promise?u(S("Promise-chain cycle")):(o=F(n))?o.call(n,c,u):c(n)):u(i)}catch(l){f&&!s&&f.exit(),u(l)}};while(n.length>o)s(n[o++]);t._c=[],t._n=!1,e&&!t._h&&$(t)}))}},$=function(t){m.call(c,(function(){var e,n,i,r=t._v,o=M(t);if(o&&(e=x((function(){D?k.emit("unhandledRejection",r,t):(n=c.onunhandledrejection)?n({promise:t,reason:r}):(i=c.console)&&i.error&&i.error("Unhandled promise rejection",r)})),t._h=D||M(t)?2:1),t._a=void 0,o&&e.e)throw e.v}))},M=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){m.call(c,(function(){var e;D?k.emit("rejectionHandled",t):(e=c.onrejectionhandled)&&e({promise:t,reason:t._v})}))},N=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),I(e,!0))},R=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw S("Promise can't be resolved itself");(e=F(t))?y((function(){var i={_w:n,_d:!1};try{e.call(t,u(R,i,1),u(N,i,1))}catch(r){N.call(i,r)}})):(n._v=t,n._s=1,I(n,!1))}catch(i){N.call({_w:n,_d:!1},i)}}};E||(z=function(t){d(this,z,_,"_h"),p(t),i.call(this);try{t(u(R,this,1),u(N,this,1))}catch(e){N.call(this,e)}},i=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},i.prototype=n("dcbc")(z.prototype,{then:function(t,e){var n=C(g(this,z));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=D?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&I(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new i;this.promise=t,this.resolve=u(R,t,1),this.reject=u(N,t,1)},b.f=C=function(t){return t===z||t===s?new o(t):r(t)}),l(l.G+l.W+l.F*!E,{Promise:z}),n("7f20")(z,_),n("7a56")(_),s=n("8378")[_],l(l.S+l.F*!E,_,{reject:function(t){var e=C(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(a||!E),_,{resolve:function(t){return O(a&&this===s?z:this,t)}}),l(l.S+l.F*!(E&&n("5cc5")((function(t){z.all(t)["catch"](P)}))),_,{all:function(t){var e=this,n=C(e),i=n.resolve,r=n.reject,o=x((function(){var n=[],o=0,s=1;v(t,!1,(function(t){var a=o++,c=!1;n.push(void 0),s++,e.resolve(t).then((function(t){c||(c=!0,n[a]=t,--s||i(n))}),r)})),--s||i(n)}));return o.e&&r(o.v),n.promise},race:function(t){var e=this,n=C(e),i=n.reject,r=x((function(){v(t,!1,(function(t){e.resolve(t).then(n.resolve,i)}))}));return r.e&&i(r.v),n.promise}})},5537:function(t,e,n){var i=n("8378"),r=n("7726"),o="__core-js_shared__",s=r[o]||(r[o]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n("2d00")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},5559:function(t,e,n){var i=n("dbdb")("keys"),r=n("62a0");t.exports=function(t){return i[t]||(i[t]=r(t))}},"584a":function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},"5a88":function(t,e,n){"use strict";var i=n("e983"),r=n.n(i);r.a},"5b4e":function(t,e,n){var i=n("36c3"),r=n("b447"),o=n("0fc9");t.exports=function(t){return function(e,n,s){var a,c=i(e),u=r(c.length),f=o(s,u);if(t&&n!=n){while(u>f)if(a=c[f++],a!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},"5c95":function(t,e,n){var i=n("35e8");t.exports=function(t,e,n){for(var r in e)n&&t[r]?t[r]=e[r]:i(t,r,e[r]);return t}},"5ca1":function(t,e,n){var i=n("7726"),r=n("8378"),o=n("32e9"),s=n("2aba"),a=n("9b43"),c="prototype",u=function(t,e,n){var f,l,h,p,d=t&u.F,v=t&u.G,g=t&u.S,m=t&u.P,y=t&u.B,b=v?i:g?i[e]||(i[e]={}):(i[e]||{})[c],x=v?r:r[e]||(r[e]={}),w=x[c]||(x[c]={});for(f in v&&(n=e),n)l=!d&&b&&void 0!==b[f],h=(l?b:n)[f],p=y&&l?a(h,i):m&&"function"==typeof h?a(Function.call,h):h,b&&s(b,f,h,t&u.U),x[f]!=h&&o(x,f,p),m&&w[f]!=h&&(w[f]=h)};i.core=r,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"5cc5":function(t,e,n){var i=n("2b4c")("iterator"),r=!1;try{var o=[7][i]();o["return"]=function(){r=!0},Array.from(o,(function(){throw 2}))}catch(s){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var o=[7],a=o[i]();a.next=function(){return{done:n=!0}},o[i]=function(){return a},t(o)}catch(s){}return n}},"5dbc":function(t,e,n){var i=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var o,s=e.constructor;return s!==n&&"function"==typeof s&&(o=s.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},"5e78":function(t,e,n){var i=n("fc39");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("74fff2a0",i,!0,{sourceMap:!1,shadowMode:!1})},"5eda":function(t,e,n){var i=n("5ca1"),r=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(r.Object||{})[t]||Object[t],s={};s[t]=e(n),i(i.S+i.F*o((function(){n(1)})),"Object",s)}},"613b":function(t,e,n){var i=n("5537")("keys"),r=n("ca5a");t.exports=function(t){return i[t]||(i[t]=r(t))}},"626a":function(t,e,n){var i=n("2d95");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==i(t)?t.split(""):Object(t)}},"62a0":function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},"63b6":function(t,e,n){var i=n("e53d"),r=n("584a"),o=n("d864"),s=n("35e8"),a=n("07e3"),c="prototype",u=function(t,e,n){var f,l,h,p=t&u.F,d=t&u.G,v=t&u.S,g=t&u.P,m=t&u.B,y=t&u.W,b=d?r:r[e]||(r[e]={}),x=b[c],w=d?i:v?i[e]:(i[e]||{})[c];for(f in d&&(n=e),n)l=!p&&w&&void 0!==w[f],l&&a(b,f)||(h=l?w[f]:n[f],b[f]=d&&"function"!=typeof w[f]?n[f]:m&&l?o(h,i):y&&w[f]==h?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(h):g&&"function"==typeof h?o(Function.call,h):h,g&&((b.virtual||(b.virtual={}))[f]=h,t&u.R&&x&&!x[f]&&s(x,f,h)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"656e":function(t,e,n){"use strict";var i=n("79aa");function r(t){var e,n;this.promise=new t((function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i})),this.resolve=i(e),this.reject=i(n)}t.exports.f=function(t){return new r(t)}},6762:function(t,e,n){"use strict";var i=n("5ca1"),r=n("c366")(!0);i(i.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"67ab":function(t,e,n){var i=n("ca5a")("meta"),r=n("d3f4"),o=n("69a8"),s=n("86cc").f,a=0,c=Object.isExtensible||function(){return!0},u=!n("79e5")((function(){return c(Object.preventExtensions({}))})),f=function(t){s(t,i,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,i)){if(!c(t))return"F";if(!e)return"E";f(t)}return t[i].i},h=function(t,e){if(!o(t,i)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[i].w},p=function(t){return u&&d.NEED&&c(t)&&!o(t,i)&&f(t),t},d=t.exports={KEY:i,NEED:!1,fastKey:l,getWeak:h,onFreeze:p}},6821:function(t,e,n){var i=n("626a"),r=n("be13");t.exports=function(t){return i(r(t))}},"696e":function(t,e,n){n("c207"),n("1654"),n("6c1c"),n("24c5"),n("3c11"),n("43fc"),t.exports=n("584a").Promise},"69a8":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"6a99":function(t,e,n){var i=n("d3f4");t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"6b4c":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},"6c1c":function(t,e,n){n("c367");for(var i=n("e53d"),r=n("35e8"),o=n("481b"),s=n("5168")("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var u=a[c],f=i[u],l=f&&f.prototype;l&&!l[s]&&r(l,s,u),o[u]=o.Array}},"6fc2":function(t,e,n){"use strict";var i=n("ecb3"),r=n.n(i);r.a},"71c1":function(t,e,n){var i=n("3a38"),r=n("25eb");t.exports=function(t){return function(e,n){var o,s,a=String(r(e)),c=i(n),u=a.length;return c<0||c>=u?t?"":void 0:(o=a.charCodeAt(c),o<55296||o>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):o:t?a.slice(c,c+2):s-56320+(o-55296<<10)+65536)}}},7333:function(t,e,n){"use strict";var i=n("9e1e"),r=n("0d58"),o=n("2621"),s=n("52a7"),a=n("4bf8"),c=n("626a"),u=Object.assign;t.exports=!u||n("79e5")((function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach((function(t){e[t]=t})),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=i}))?function(t,e){var n=a(t),u=arguments.length,f=1,l=o.f,h=s.f;while(u>f){var p,d=c(arguments[f++]),v=l?r(d).concat(l(d)):r(d),g=v.length,m=0;while(g>m)p=v[m++],i&&!h.call(d,p)||(n[p]=d[p])}return n}:u},7514:function(t,e,n){"use strict";var i=n("5ca1"),r=n("0a49")(5),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),i(i.P+i.F*s,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(o)},7726:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(t,e,n){var i=n("4588"),r=Math.max,o=Math.min;t.exports=function(t,e){return t=i(t),t<0?r(t+e,0):o(t,e)}},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"795b":function(t,e,n){t.exports=n("696e")},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"79e5":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"7a56":function(t,e,n){"use strict";var i=n("7726"),r=n("86cc"),o=n("9e1e"),s=n("2b4c")("species");t.exports=function(t){var e=i[t];o&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},"7bbc":function(t,e,n){var i=n("6821"),r=n("9093").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return r(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==o.call(t)?a(t):r(i(t))}},"7cd6":function(t,e,n){var i=n("40c31"),r=n("5168")("iterator"),o=n("481b");t.exports=n("584a").getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||o[i(t)]}},"7e90":function(t,e,n){var i=n("d9f6"),r=n("e4ae"),o=n("c3a1");t.exports=n("8e60")?Object.defineProperties:function(t,e){r(t);var n,s=o(e),a=s.length,c=0;while(a>c)i.f(t,n=s[c++],e[n]);return t}},"7f20":function(t,e,n){var i=n("86cc").f,r=n("69a8"),o=n("2b4c")("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,o)&&i(t,o,{configurable:!0,value:e})}},"7f7f":function(t,e,n){var i=n("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,s="name";s in r||n("9e1e")&&i(r,s,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},8079:function(t,e,n){var i=n("7726"),r=n("1991").set,o=i.MutationObserver||i.WebKitMutationObserver,s=i.process,a=i.Promise,c="process"==n("2d95")(s);t.exports=function(){var t,e,n,u=function(){var i,r;c&&(i=s.domain)&&i.exit();while(t){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,i&&i.enter()};if(c)n=function(){s.nextTick(u)};else if(!o||i.navigator&&i.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(u)}}else n=function(){r.call(i,u)};else{var l=!0,h=document.createTextNode("");new o(u).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},8378:function(t,e){var n=t.exports={version:"2.6.10"};"number"==typeof __e&&(__e=n)},8436:function(t,e){t.exports=function(){}},"84f2":function(t,e){t.exports={}},"85f2":function(t,e,n){t.exports=n("454f")},"86cc":function(t,e,n){var i=n("cb7c"),r=n("c69a"),o=n("6a99"),s=Object.defineProperty;e.f=n("9e1e")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},"87af":function(t,e,n){"use strict";var i=n("d0fe"),r=n.n(i);r.a},"8a81":function(t,e,n){"use strict";var i=n("7726"),r=n("69a8"),o=n("9e1e"),s=n("5ca1"),a=n("2aba"),c=n("67ab").KEY,u=n("79e5"),f=n("5537"),l=n("7f20"),h=n("ca5a"),p=n("2b4c"),d=n("37c8"),v=n("3a72"),g=n("d4c0"),m=n("1169"),y=n("cb7c"),b=n("d3f4"),x=n("4bf8"),w=n("6821"),O=n("6a99"),_=n("4630"),S=n("2aeb"),k=n("7bbc"),j=n("11e9"),T=n("2621"),z=n("86cc"),D=n("0d58"),P=j.f,C=z.f,E=k.f,F=i.Symbol,I=i.JSON,$=I&&I.stringify,M="prototype",L=p("_hidden"),N=p("toPrimitive"),R={}.propertyIsEnumerable,A=f("symbol-registry"),G=f("symbols"),B=f("op-symbols"),W=Object[M],V="function"==typeof F&&!!T.f,H=i.QObject,Y=!H||!H[M]||!H[M].findChild,X=o&&u((function(){return 7!=S(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=P(W,e);i&&delete W[e],C(t,e,n),i&&t!==W&&C(W,e,i)}:C,U=function(t){var e=G[t]=S(F[M]);return e._k=t,e},q=V&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},K=function(t,e,n){return t===W&&K(B,e,n),y(t),e=O(e,!0),y(n),r(G,e)?(n.enumerable?(r(t,L)&&t[L][e]&&(t[L][e]=!1),n=S(n,{enumerable:_(0,!1)})):(r(t,L)||C(t,L,_(1,{})),t[L][e]=!0),X(t,e,n)):C(t,e,n)},J=function(t,e){y(t);var n,i=g(e=w(e)),r=0,o=i.length;while(o>r)K(t,n=i[r++],e[n]);return t},Z=function(t,e){return void 0===e?S(t):J(S(t),e)},Q=function(t){var e=R.call(this,t=O(t,!0));return!(this===W&&r(G,t)&&!r(B,t))&&(!(e||!r(this,t)||!r(G,t)||r(this,L)&&this[L][t])||e)},tt=function(t,e){if(t=w(t),e=O(e,!0),t!==W||!r(G,e)||r(B,e)){var n=P(t,e);return!n||!r(G,e)||r(t,L)&&t[L][e]||(n.enumerable=!0),n}},et=function(t){var e,n=E(w(t)),i=[],o=0;while(n.length>o)r(G,e=n[o++])||e==L||e==c||i.push(e);return i},nt=function(t){var e,n=t===W,i=E(n?B:w(t)),o=[],s=0;while(i.length>s)!r(G,e=i[s++])||n&&!r(W,e)||o.push(G[e]);return o};V||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===W&&e.call(B,n),r(this,L)&&r(this[L],t)&&(this[L][t]=!1),X(this,t,_(1,n))};return o&&Y&&X(W,t,{configurable:!0,set:e}),U(t)},a(F[M],"toString",(function(){return this._k})),j.f=tt,z.f=K,n("9093").f=k.f=et,n("52a7").f=Q,T.f=nt,o&&!n("2d00")&&a(W,"propertyIsEnumerable",Q,!0),d.f=function(t){return U(p(t))}),s(s.G+s.W+s.F*!V,{Symbol:F});for(var it="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;it.length>rt;)p(it[rt++]);for(var ot=D(p.store),st=0;ot.length>st;)v(ot[st++]);s(s.S+s.F*!V,"Symbol",{for:function(t){return r(A,t+="")?A[t]:A[t]=F(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in A)if(A[e]===t)return e},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),s(s.S+s.F*!V,"Object",{create:Z,defineProperty:K,defineProperties:J,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var at=u((function(){T.f(1)}));s(s.S+s.F*at,"Object",{getOwnPropertySymbols:function(t){return T.f(x(t))}}),I&&s(s.S+s.F*(!V||u((function(){var t=F();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))),"JSON",{stringify:function(t){var e,n,i=[t],r=1;while(arguments.length>r)i.push(arguments[r++]);if(n=e=i[1],(b(e)||void 0!==t)&&!q(t))return m(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!q(e))return e}),i[1]=e,$.apply(I,i)}}),F[M][N]||n("32e9")(F[M],N,F[M].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(i.JSON,"JSON",!0)},"8b97":function(t,e,n){var i=n("d3f4"),r=n("cb7c"),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},"8ca2":function(t,e,n){"use strict";var i=n("40c3"),r=n.n(i);r.a},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,n){var i=n("5ca1"),r=n("990b"),o=n("6821"),s=n("11e9"),a=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=o(t),c=s.f,u=r(i),f={},l=0;while(u.length>l)n=c(i,e=u[l++]),void 0!==n&&a(f,e,n);return f}})},"8f60":function(t,e,n){"use strict";var i=n("a159"),r=n("aebd"),o=n("45f2"),s={};n("35e8")(s,n("5168")("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=i(s,{next:r(1,n)}),o(t,e+" Iterator")}},9093:function(t,e,n){var i=n("ce10"),r=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},9138:function(t,e,n){t.exports=n("35e8")},"96cf":function(t,e,n){var i=function(t){"use strict";var e,n=Object.prototype,i=n.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function c(t,e,n,i){var r=e&&e.prototype instanceof v?e:v,o=Object.create(r.prototype),s=new z(i||[]);return o._invoke=S(t,n,s),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(i){return{type:"throw",arg:i}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",d={};function v(){}function g(){}function m(){}var y={};y[o]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(D([])));x&&x!==n&&i.call(x,o)&&(y=x);var w=m.prototype=v.prototype=Object.create(y);function O(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t){function e(n,r,o,s){var a=u(t[n],t,r);if("throw"!==a.type){var c=a.arg,f=c.value;return f&&"object"===typeof f&&i.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,o,s)}),(function(t){e("throw",t,o,s)})):Promise.resolve(f).then((function(t){c.value=t,o(c)}),(function(t){return e("throw",t,o,s)}))}s(a.arg)}var n;function r(t,i){function r(){return new Promise((function(n,r){e(t,i,n,r)}))}return n=n?n.then(r,r):r()}this._invoke=r}function S(t,e,n){var i=f;return function(r,o){if(i===h)throw new Error("Generator is already running");if(i===p){if("throw"===r)throw o;return P()}n.method=r,n.arg=o;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===d)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=h;var c=u(t,e,n);if("normal"===c.type){if(i=n.done?p:l,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(i=p,n.method="throw",n.arg=c.arg)}}}function k(t,n){var i=t.iterator[n.method];if(i===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(i,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function D(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function n(){while(++r<t.length)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return s.next=s}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=w.constructor=m,m.constructor=g,m[a]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(_.prototype),_.prototype[s]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,i,r){var o=new _(c(e,n,i,r));return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},O(w),w[a]="Generator",w[o]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},t.values=D,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(i,r){return a.type="throw",a.arg=t,n.next=i,r&&(n.method="next",n.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var c=i.call(s,"catchLoc"),u=i.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;T(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,i){return this.delegate={iterator:D(t),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=i}catch(r){Function("r","regeneratorRuntime = r")(i)}},"990b":function(t,e,n){var i=n("9093"),r=n("2621"),o=n("cb7c"),s=n("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=i.f(o(t)),n=r.f;return n?e.concat(n(t)):e}},"9b43":function(t,e,n){var i=n("d8e8");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},"9b5a":function(t,e,n){var i=n("2810");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("66d44e81",i,!0,{sourceMap:!1,shadowMode:!1})},"9c6c":function(t,e,n){var i=n("2b4c")("unscopables"),r=Array.prototype;void 0==r[i]&&n("32e9")(r,i,{}),t.exports=function(t){r[i][t]=!0}},"9c80":function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"9def":function(t,e,n){var i=n("4588"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},"9e1e":function(t,e,n){t.exports=!n("79e5")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},a159:function(t,e,n){var i=n("e4ae"),r=n("7e90"),o=n("1691"),s=n("5559")("IE_PROTO"),a=function(){},c="prototype",u=function(){var t,e=n("1ec9")("iframe"),i=o.length,r="<",s=">";e.style.display="none",n("32fc").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+s+"document.F=Object"+r+"/script"+s),t.close(),u=t.F;while(i--)delete u[c][o[i]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=i(t),n=new a,a[c]=null,n[s]=t):n=u(),void 0===e?n:r(n,e)}},a22a:function(t,e,n){var i=n("d864"),r=n("b0dc"),o=n("3702"),s=n("e4ae"),a=n("b447"),c=n("7cd6"),u={},f={};e=t.exports=function(t,e,n,l,h){var p,d,v,g,m=h?function(){return t}:c(t),y=i(n,l,e?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(p=a(t.length);p>b;b++)if(g=e?y(s(d=t[b])[0],d[1]):y(t[b]),g===u||g===f)return g}else for(v=m.call(t);!(d=v.next()).done;)if(g=r(v,y,d.value,e),g===u||g===f)return g};e.BREAK=u,e.RETURN=f},a25f:function(t,e,n){var i=n("7726"),r=i.navigator;t.exports=r&&r.userAgent||""},a5b8:function(t,e,n){"use strict";var i=n("d8e8");function r(t){var e,n;this.promise=new t((function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i})),this.resolve=i(e),this.reject=i(n)}t.exports.f=function(t){return new r(t)}},aa77:function(t,e,n){var i=n("5ca1"),r=n("be13"),o=n("79e5"),s=n("fdef"),a="["+s+"]",c="​",u=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),l=function(t,e,n){var r={},a=o((function(){return!!s[t]()||c[t]()!=c})),u=r[t]=a?e(h):s[t];n&&(r[n]=u),i(i.P+i.F*a,"String",r)},h=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},aae3:function(t,e,n){var i=n("d3f4"),r=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},aba2:function(t,e,n){var i=n("e53d"),r=n("4178").set,o=i.MutationObserver||i.WebKitMutationObserver,s=i.process,a=i.Promise,c="process"==n("6b4c")(s);t.exports=function(){var t,e,n,u=function(){var i,r;c&&(i=s.domain)&&i.exit();while(t){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,i&&i.enter()};if(c)n=function(){s.nextTick(u)};else if(!o||i.navigator&&i.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(u)}}else n=function(){r.call(i,u)};else{var l=!0,h=document.createTextNode("");new o(u).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(i){var r={fn:i,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var i=n("cadf"),r=n("0d58"),o=n("2aba"),s=n("7726"),a=n("32e9"),c=n("84f2"),u=n("2b4c"),f=u("iterator"),l=u("toStringTag"),h=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=r(p),v=0;v<d.length;v++){var g,m=d[v],y=p[m],b=s[m],x=b&&b.prototype;if(x&&(x[f]||a(x,f,h),x[l]||a(x,l,m),c[m]=h,y))for(g in i)x[g]||o(x,g,i[g],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},b0dc:function(t,e,n){var i=n("e4ae");t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(s){var o=t["return"];throw void 0!==o&&i(o.call(t)),s}}},b447:function(t,e,n){var i=n("3a38"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},b486:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".vue-flux .flux-controls{-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.vue-flux .flux-controls.fade-enter,.vue-flux .flux-controls.fade-leave-to{opacity:0}.vue-flux .flux-controls.fade-enter-active,.vue-flux .flux-controls.fade-leave-active{-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.vue-flux .flux-controls .prev{margin-left:4%}.vue-flux .flux-controls .next{margin-right:4%}",""])},b8e3:function(t,e){t.exports=!0},bc13:function(t,e,n){var i=n("e53d"),r=i.navigator;t.exports=r&&r.userAgent||""},bcaa:function(t,e,n){var i=n("cb7c"),r=n("d3f4"),o=n("a5b8");t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},be13:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},c207:function(t,e){},c366:function(t,e,n){var i=n("6821"),r=n("9def"),o=n("77f1");t.exports=function(t){return function(e,n,s){var a,c=i(e),u=r(c.length),f=o(s,u);if(t&&n!=n){while(u>f)if(a=c[f++],a!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},c367:function(t,e,n){"use strict";var i=n("8436"),r=n("50ed"),o=n("481b"),s=n("36c3");t.exports=n("30f1")(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},c3a1:function(t,e,n){var i=n("e6f3"),r=n("1691");t.exports=Object.keys||function(t){return i(t,r)}},c5f6:function(t,e,n){"use strict";var i=n("7726"),r=n("69a8"),o=n("2d95"),s=n("5dbc"),a=n("6a99"),c=n("79e5"),u=n("9093").f,f=n("11e9").f,l=n("86cc").f,h=n("aa77").trim,p="Number",d=i[p],v=d,g=d.prototype,m=o(n("2aeb")(g))==p,y="trim"in String.prototype,b=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():h(e,3);var n,i,r,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+e}for(var s,c=e.slice(2),u=0,f=c.length;u<f;u++)if(s=c.charCodeAt(u),s<48||s>r)return NaN;return parseInt(c,i)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(m?c((function(){g.valueOf.call(n)})):o(n)!=p)?s(new v(b(e)),n,d):b(e)};for(var x,w=n("9e1e")?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;w.length>O;O++)r(v,x=w[O])&&!r(d,x)&&l(d,x,f(v,x));d.prototype=g,g.constructor=d,n("2aba")(i,p,d)}},c69a:function(t,e,n){t.exports=!n("9e1e")&&!n("79e5")((function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a}))},ca5a:function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},cadf:function(t,e,n){"use strict";var i=n("9c6c"),r=n("d53b"),o=n("84f2"),s=n("6821");t.exports=n("01f9")(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},cb7c:function(t,e,n){var i=n("d3f4");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},cd1c:function(t,e,n){var i=n("e853");t.exports=function(t,e){return new(i(t))(e)}},cd78:function(t,e,n){var i=n("e4ae"),r=n("f772"),o=n("656e");t.exports=function(t,e){if(i(t),r(e)&&e.constructor===t)return e;var n=o.f(t),s=n.resolve;return s(e),n.promise}},ce10:function(t,e,n){var i=n("69a8"),r=n("6821"),o=n("c366")(!1),s=n("613b")("IE_PROTO");t.exports=function(t,e){var n,a=r(t),c=0,u=[];for(n in a)n!=s&&i(a,n)&&u.push(n);while(e.length>c)i(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},ce99:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".vue-flux .flux-button{padding:0;width:6%;min-width:15px;min-height:15px;max-width:40px;max-height:40px}.flux-button{border:0;cursor:pointer;background-color:transparent}.flux-button:hover>svg line,.flux-button:hover>svg polyline{stroke:#ff0}.flux-button:hover>svg polygon,.flux-button:hover>svg rect{fill:#ff0}.flux-button>svg{width:100%}.flux-button>svg *{cursor:pointer}.flux-button>svg>circle{fill:rgba(0,0,0,.7)}.flux-button>svg line,.flux-button>svg polygon,.flux-button>svg polyline,.flux-button>svg rect{stroke-linecap:round;stroke-linejoin:round;stroke:#fff;stroke-width:14;fill:none}.flux-button>svg polygon,.flux-button>svg rect{fill:#fff;stroke-width:0}",""])},d0fe:function(t,e,n){var i=n("4522");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("75b79330",i,!0,{sourceMap:!1,shadowMode:!1})},d2c8:function(t,e,n){var i=n("aae3"),r=n("be13");t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},d3f4:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},d4c0:function(t,e,n){var i=n("0d58"),r=n("2621"),o=n("52a7");t.exports=function(t){var e=i(t),n=r.f;if(n){var s,a=n(t),c=o.f,u=0;while(a.length>u)c.call(t,s=a[u++])&&e.push(s)}return e}},d53b:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},d8e8:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},d9f6:function(t,e,n){var i=n("e4ae"),r=n("794b"),o=n("1bc3"),s=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dbdb:function(t,e,n){var i=n("584a"),r=n("e53d"),o="__core-js_shared__",s=r[o]||(r[o]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n("b8e3")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},dcbc:function(t,e,n){var i=n("2aba");t.exports=function(t,e,n){for(var r in e)i(t,r,e[r],n);return t}},dd9a:function(t,e,n){var i=n("dfe1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("efeeb4ea",i,!0,{sourceMap:!1,shadowMode:!1})},dfe1:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".flux-parallax img{position:absolute;visibility:hidden}",""])},e11e:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e671:function(t,e,n){"use strict";var i=n("465d"),r=n.n(i);r.a},e6f3:function(t,e,n){var i=n("07e3"),r=n("36c3"),o=n("5b4e")(!1),s=n("5559")("IE_PROTO");t.exports=function(t,e){var n,a=r(t),c=0,u=[];for(n in a)n!=s&&i(a,n)&&u.push(n);while(e.length>c)i(a,n=e[c++])&&(~o(u,n)||u.push(n));return u}},e853:function(t,e,n){var i=n("d3f4"),r=n("1169"),o=n("2b4c")("species");t.exports=function(t){var e;return r(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},e983:function(t,e,n){var i=n("f3fe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("52324f30",i,!0,{sourceMap:!1,shadowMode:!1})},ebd6:function(t,e,n){var i=n("cb7c"),r=n("d8e8"),o=n("2b4c")("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},ecb3:function(t,e,n){var i=n("3100");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("7f627c04",i,!0,{sourceMap:!1,shadowMode:!1})},f1ae:function(t,e,n){"use strict";var i=n("86cc"),r=n("4630");t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},f201:function(t,e,n){var i=n("e4ae"),r=n("79aa"),o=n("5168")("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},f3fe:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".vue-flux .flux-index{margin-bottom:2%;font-size:0;text-align:center}.vue-flux .flux-index .fade-enter,.vue-flux .flux-index .fade-leave-to{opacity:0}.vue-flux .flux-index .fade-enter-active,.vue-flux .flux-index .fade-leave-active{-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in}.vue-flux .flux-index nav{position:absolute;top:0;left:0;right:0;bottom:0;display:block;margin:0;overflow:hidden;visibility:hidden}.vue-flux .flux-index nav.visible{z-index:101;visibility:visible}.vue-flux .flux-index ul{display:block;height:100%;margin:0;margin-top:100%;padding:24px 0 0 24px;list-style-type:none;text-align:center;overflow-y:auto;background-color:#000;-webkit-transition:all .5s linear;transition:all .5s linear;font-size:0}.vue-flux .flux-index li{position:relative;display:inline-block;-webkit-box-sizing:content-box;box-sizing:content-box;margin:0 24px 24px 0;cursor:pointer;-webkit-transition:all .3s ease;transition:all .3s ease}.vue-flux .flux-index li:hover{-webkit-box-shadow:0 0 3px 2px hsla(0,0%,100%,.6);box-shadow:0 0 3px 2px hsla(0,0%,100%,.6)}.vue-flux .flux-index li.current{cursor:auto;border:1px solid #fff;-webkit-box-shadow:none;box-shadow:none}",""])},f605:function(t,e){t.exports=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t}},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(i){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(i.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},f751:function(t,e,n){var i=n("5ca1");i(i.S+i.F,"Object",{assign:n("7333")})},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},f83b:function(t,e,n){"use strict";var i=n("ffb5"),r=n.n(i);r.a},fa5b:function(t,e,n){t.exports=n("5537")("native-function-to-string",Function.toString)},fab2:function(t,e,n){var i=n("7726").document;t.exports=i&&i.documentElement},fae3:function(t,e,n){"use strict";n.r(e);var i,r={};(n.r(r),n.d(r,"TransitionFade",(function(){return ut})),n.d(r,"TransitionKenburn",(function(){return vt})),n.d(r,"TransitionSwipe",(function(){return Dt})),n.d(r,"TransitionSlide",(function(){return $t})),n.d(r,"TransitionWaterfall",(function(){return Gt})),n.d(r,"TransitionZip",(function(){return Xt})),n.d(r,"TransitionBlinds2d",(function(){return Qt})),n.d(r,"TransitionBlocks1",(function(){return oe})),n.d(r,"TransitionBlocks2",(function(){return le})),n.d(r,"TransitionConcentric",(function(){return ke})),n.d(r,"TransitionWarp",(function(){return Ce})),n.d(r,"TransitionCamera",(function(){return Re})),n.d(r,"TransitionCube",(function(){return He})),n.d(r,"TransitionBook",(function(){return Qe})),n.d(r,"TransitionFall",(function(){return sn})),n.d(r,"TransitionWave",(function(){return hn})),n.d(r,"TransitionBlinds3d",(function(){return yn})),n.d(r,"TransitionRound1",(function(){return Sn})),n.d(r,"TransitionRound2",(function(){return Pn})),n.d(r,"TransitionExplode",(function(){return Mn})),"undefined"!==typeof window)&&(n("f6fd"),(i=window.document.currentScript)&&(i=i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=i[1]));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"flux-button",staticStyle:{outline:"0"},attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[n("svg",{attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[n("circle",{attrs:{cx:"50",cy:"50",r:"49"}}),n("svg",{attrs:{viewBox:"-20 -20 140 140"}},[t._t("default")],2)])])},s=[],a={name:"FluxButton"},c=a;n("8ca2");function u(t,e,n,i,r,o,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}var f=u(c,o,s,!1,null,null,null),l=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"cube",style:t.style},t._l(t.sides,(function(t){return n("flux-image",{key:t.name,ref:t.name,refInFor:!0,style:t.style,attrs:{size:t.size,"view-size":t.viewSize,image:t.img,color:t.color,offset:t.offset}})})),1)},p=[],d=(n("8e6e"),n("cadf"),n("456d"),n("6762"),n("2fdb"),n("85f2")),v=n.n(d);function g(t,e,n){return e in t?v()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("ac4d"),n("8a81"),n("ac6a"),n("c5f6");var m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flux-image",style:t.style})},y=[];function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),v()(t,i.key,i)}}function w(t,e,n){return e&&x(t.prototype,e),n&&x(t,n),t}var O=function(){function t(e){b(this,t),this.node=e}return w(t,[{key:"getWidth",value:function(){var t=getComputedStyle(this.node).width;return parseFloat(t)}},{key:"getHeight",value:function(){var t=getComputedStyle(this.node).height;return parseFloat(t)}},{key:"size",get:function(){return{width:this.getWidth(),height:this.getHeight()}}}],[{key:"sizeFrom",value:function(e){return new t(e).size}}]),t}(),_=(n("551c"),function(){function t(e){b(this,t),g(this,"status",void 0),g(this,"index",void 0),g(this,"aspectRatio",void 0),g(this,"size",void 0),this.src=e}return w(t,[{key:"load",value:function(){var t=this;return new Promise((function(e,n){t.status&&e();var i=new Image;i.onload=function(){t.size={width:i.naturalWidth||i.width,height:i.naturalHeight||i.height},t.aspectRatio=t.size.width/t.size.height,t.status="loaded",e()},i.onerror=function(){t.status="error",n("Image ".concat(t.src," could not be loaded"))},i.src=t.src}))}},{key:"getCoverProps",value:function(t){if(t&&"loaded"===this.status){var e={size:t,aspectRatio:t.width/t.height},n={size:this.getCoverSize(e)};return n.position=this.getCoverPosition(e,n.size),n}}},{key:"getCoverSize",value:function(t){return this.aspectRatio<=t.aspectRatio?{width:t.size.width,height:t.size.width/this.aspectRatio}:{width:this.aspectRatio*t.size.height,height:t.size.height}}},{key:"getCoverPosition",value:function(t,e){return this.aspectRatio<=t.aspectRatio?{top:(t.size.height-e.height)/2,left:0}:{top:0,left:(t.size.width-e.width)/2}}}]),t}());function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var j={props:{color:String,colors:{type:Object,default:function(){return{}}},image:[String,Object],images:Object,size:{type:Object},viewSize:{type:Object,default:function(){return{}}},offset:Object,offsets:{type:Object,default:function(){return{}}},css:Object},data:function(){return{img:void 0,imgs:void 0,baseStyle:{}}},computed:{domSize:function(){return O.sizeFrom(this.$el)},sizeStyle:function(){if(!this.size)return{};var t=this.size,e=this.viewSize,n=e.width,i=void 0===n?t.width:n,r=e.height,o=void 0===r?t.height:r;return{width:i+"px",height:o+"px"}},style:function(){return k({},this.sizeStyle,{},this.colorStyle,{},this.imageStyle,{},this.css,{},this.baseStyle)}},watch:{image:function(){this.initImg()},images:function(){this.initImgs()}},created:function(){this.initImg(),this.initImgs()},methods:{initImg:function(){return this.image?this.image.src?this.img=this.image:(this.img=new _(this.image),void this.img.load()):this.img=void 0},initImgs:function(){if(!this.images)return this.imgs=void 0;var t,e={};for(var n in this.images)t=this.images[n],t.src||(t=new _(t),t.load()),e[n]=t;this.imgs=e},setCss:function(t){this.baseStyle=k({},this.baseStyle,{},t)},transform:function(t){this.$el.clientHeight,this.setCss(t)},show:function(){this.setCss({visibility:"visible"})},hide:function(){this.setCss({visibility:"hidden"})}}},T={name:"FluxImage",mixins:[j],data:function(){return{baseStyle:{overflow:"hidden"}}},computed:{colorStyle:function(){return this.color?{backgroundColor:this.color}:{}},imageStyle:function(){var t=this.img;if(!t||"loaded"!==t.status)return{};var e=t.getCoverProps(this.size||this.domSize),n=e.size,i=e.position;if(this.offset)for(var r=0,o=["top","left"];r<o.length;r++){var s=o[r];i[s]-=this.offset[s]||0}return{backgroundImage:"url(".concat(this.img.src,")"),backgroundSize:"".concat(n.width,"px ").concat(n.height,"px"),backgroundPosition:"".concat(i.left,"px ").concat(i.top,"px"),backgroundRepeat:"no-repeat"}}}},z=T,D=u(z,m,y,!1,null,null,null),P=D.exports;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var F={x:{top:"90",bottom:"-90"},y:{back:"180",backr:"180",backl:"-180",left:"-90",right:"90"}},I={x:{left:"-50",right:"50"},y:{top:"-50",bottom:"50"}},$={name:"FluxCube",components:{FluxImage:P},mixins:[j],props:{depth:{type:Number,default:0},sidesCss:{type:Object,default:function(){return{}}}},data:function(){return{sideNames:["front","back","top","bottom","left","right"],baseStyle:{transformStyle:"preserve-3d"}}},computed:{sides:function(){var t,e={},n=!0,i=!1,r=void 0;try{for(var o,s=this.definedSides[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var a=o.value;t={name:a,img:this.imgs[a],color:this.colors[a]||this.color,offset:this.offsets[a]||this.offset},t.size=E({},this.size),t.viewSize=E({},this.viewSize),["left","right"].includes(a)&&(t.viewSize.width=this.depth,t.size.width=this.depth),["top","bottom"].includes(a)&&(t.viewSize.height=this.depth,t.size.height=this.depth),t.style=E({},this.sidesCss[a],{position:"absolute",transform:this.getTransform(a),backfaceVisibility:"hidden"}),e[a]=t}}catch(c){i=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}return e},definedSides:function(){var t=this;return this.sideNames.filter((function(e){return t.sideDefined(e)}))},translateZ:function(){var t=this.size,e=t.width,n=t.height,i=this.viewSize,r=i.width,o=i.height,s=this.depth,a=s/2;return{top:a,bottom:o?o-a:n-a,left:a,right:r?r-a:e-a,back:s}}},methods:{sideDefined:function(t){return!(!this.images[t]&&!this.colors[t])},getSide:function(t){return this.$refs[t]},getTransform:function(t){var e=F.x[t]||0,n=F.y[t]||0,i=I.x[t]||0,r=I.y[t]||0,o=this.translateZ[t]||0;return"rotateX(".concat(e,"deg) rotateY(").concat(n,"deg) translate3d(").concat(i,"%, ").concat(r,"%, ").concat(o,"px)")},turn:function(t){this.transform({transform:this.getTransform(t)})},turnTop:function(){this.turn("top")},turnBack:function(){this.turn("back")},turnBottom:function(){this.turn("bottom")},turnLeft:function(){this.turn("left")},turnRight:function(){this.turn("right")}}},M=$,L=u(M,h,p,!1,null,null,null),N=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"grid",style:t.style},t._l(t.tiles,(function(e,i){return n(t.component,{key:i,ref:"tiles",refInFor:!0,tag:"component",attrs:{size:t.size,"view-size":e.viewSize,color:t.color,colors:t.colors,image:t.img,images:t.imgs,offset:e.offset,depth:t.depth,css:e.css,"sides-css":e.sidesCss}})})),1)},A=[];function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W={name:"FluxGrid",components:{FluxCube:N,FluxImage:P},mixins:[j],props:{rows:{type:Number,default:1},cols:{type:Number,default:1},depth:{type:Number,default:0},tileCss:Object},data:function(){return{baseStyle:{position:"relative"}}},computed:{component:function(){return this.images?"FluxCube":"FluxImage"},numRows:function(){return Math.ceil(parseFloat(this.rows))},numCols:function(){return Math.ceil(parseFloat(this.cols))},numTiles:function(){return this.numRows*this.numCols},tileSize:function(){return{width:Math.floor(this.size.width/this.numCols),height:Math.floor(this.size.height/this.numRows)}},tiles:function(){for(var t,e=[],n=0;n<this.numTiles;n++){t={row:this.getRowNumber(n),col:this.getColNumber(n)};var i=this.tileSize,r=i.width,o=i.height;t.row+1===this.numRows&&(o=this.size.height-t.row*o),t.col+1===this.numCols&&(r=this.size.width-t.col*r),t.viewSize={width:r,height:o},t.offset={top:t.row*this.tileSize.height,left:t.col*this.tileSize.width},t.css=B({},this.tileCss,{position:"absolute",left:t.offset.left+"px",top:t.offset.top+"px",zIndex:n+1<this.numTiles/2?n+1:this.numTiles-n}),e.push(t)}return e}},methods:{getRowNumber:function(t){return Math.floor(t/this.numCols)},getColNumber:function(t){return t%this.numCols},transform:function(t){this.$refs.tiles.forEach((function(e,n){return t(e,n)}))}}},V=W,H=u(V,R,A,!1,null,null,null),Y=H.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"parallax",style:t.style},["fixed"===t.type?n("div",{style:t.fixedParentStyle},[n("div",{style:t.fixedChildStyle})]):t._e(),"fixed"===t.type||t.loaded?t._e():n("img",{ref:"image",attrs:{src:t.src},on:{load:t.setProperties,error:t.setProperties}}),t._t("default")],2)},U=[];n("f751");function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var J={name:"FluxParallax",props:{src:{type:String,required:!0},holder:{default:function(){return window}},type:{type:String,default:"relative"},offset:{type:[Number,String],default:"100%"}},data:function(){return{loaded:!1,view:{height:void 0},parallax:{top:void 0,width:void 0,height:void 0},background:{top:void 0,left:void 0,width:void 0,height:void 0},image:{src:void 0,width:void 0,height:void 0},style:{position:"relative"},fixedParentStyle:{position:"absolute",top:0,left:0,bottom:0,right:0,clip:"rect(auto auto auto auto)"}}},computed:{parallaxSize:function(){return{width:this.$refs.parallax.clientWidth,height:this.$refs.parallax.clientHeight}},offsetHeight:function(){var t;return/^[0-9]+px$/.test(this.offset)?t={px:parseFloat(this.offset),pct:100*t.px/this.background.height}:/^[0-9]+%$/.test(this.offset)&&(t={px:Math.ceil(this.parallaxSize.height*parseFloat(this.offset)/100),pct:parseFloat(parseFloat(this.offset))}),t},backgroundHeight:function(){return this.parallaxSize.height+this.offsetHeight.px},remainderHeight:function(){return this.background.height-this.backgroundHeight},fixedChildStyle:function(){return{position:"fixed",top:0,bottom:0,left:0,right:0,background:'url("'.concat(this.src,'") no-repeat center center fixed')}}},mounted:function(){var t=this;"fixed"!==this.type&&(this.setCss({background:'url("'.concat(this.src,'") no-repeat')}),window.addEventListener("resize",this.resize,{passive:!0}),setTimeout((function(){t.holder.addEventListener("scroll",t.handleScroll,{passive:!0})})))},beforeDestroy:function(){"fixed"!==this.type&&(window.removeEventListener("resize",this.resize),this.holder.removeEventListener("scroll",this.handleScroll))},methods:{setProperties:function(){var t=this.$refs.image;(t.naturalWidth||t.width)&&Object.assign(this.image,{src:t.src,width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}),this.loaded=!0,this.resize()},resize:function(){this.view.height=this.holder.scrollHeight||this.holder.innerHeight,this.parallax=K({},this.parallax,{},this.parallaxSize,{top:this.$refs.parallax.offsetTop});var t=this.image.height/this.image.width,e=this.parallax.height/this.parallax.width;t>=e?(this.background.width=this.parallax.width,this.background.height=Math.floor(this.parallax.width*this.image.height/this.image.width)):(this.background.height=this.backgroundHeight,this.background.width=Math.floor(this.background.height*this.image.width/this.image.height)),this.setCss({backgroundSize:"".concat(this.background.width,"px ").concat(this.background.height,"px"),backgroundPosition:"center 0"}),this.handleScroll()},setCss:function(t){this.style=K({},this.style,{},t)},moveBackgroundByPct:function(t){this.remainderHeight>0&&(t=t*this.offsetHeight.pct/100+50-this.offsetHeight.pct/2),this.setCss({backgroundPositionY:t.toFixed(2)+"%"})},handleScroll:function(){if(!1!==this.loaded){var t=this.holder.scrollY||this.holder.scrollTop||this.holder.pageYOffset||0;if(this.holder!==window)return this.handleRelative(t);if(!(t+this.view.height<this.parallax.top)&&!(t>this.parallax.top+this.parallax.height)){var e=t-this.parallax.top+this.view.height;"visible"===this.type?this.handleVisible(e):"relative"===this.type&&this.handleRelative(e)}}},handleVisible:function(t){var e=0;e=t<this.parallax.height?0:t>this.view.height?100:100*(t-this.parallax.height)/(this.view.height-this.parallax.height),this.moveBackgroundByPct(e)},handleRelative:function(t){var e;e=this.holder===window?100*t/(this.view.height+this.parallax.height):100*t/(this.view.height-this.holder.clientHeight),this.moveBackgroundByPct(e)}}},Z=J,Q=(n("281b"),u(Z,X,U,!1,null,null,null)),tt=Q.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"mask",staticClass:"flux-transition",style:t.style},[t.componentName?n(t.componentName,{ref:"transition",tag:"component",attrs:{size:t.size,from:t.from,to:t.to,current:t.current,options:t.options,images:t.images}}):t._e()],1)},nt=[],it=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-image",{ref:"from",attrs:{image:t.from,size:t.size,css:t.imageCss}})}),rt=[],ot={data:function(){return{totalDuration:1}},props:{size:Object,from:{type:[String,Object],required:!0},to:[String,Object],current:Object,options:{type:Object,default:function(){return{}}}},computed:{mask:function(){return this.$parent.baseStyle}},created:function(){Object.assign(this,{direction:"next"},this.options);var t=this.direction,e={prev:this.setupPrev,next:this.setupNext};e[t]&&e[t]()},played:function(){var t=this.direction,e={prev:this.playPrev,next:this.playNext};e[t]&&e[t]()},methods:{getDelay:function(t){var e=this.direction,n={prev:this.getDelayPrev,next:this.getDelayNext};return n[e](t)},getReadyness:function(){var t=80,e=function t(e){var n=e.$children.length,i=!0,r=!1,o=void 0;try{for(var s,a=e.$children[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var c=s.value;n+=t(c)}}catch(u){r=!0,o=u}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n},n=3*e(this);return n<t?t:n}}},st={name:"TransitionFade",components:{FluxImage:P},mixins:[ot],data:function(){return{totalDuration:1200,easing:"ease-in",imageCss:{zIndex:1}}},played:function(){this.$refs.from.transform({transition:"opacity ".concat(this.totalDuration,"ms ").concat(this.easing),opacity:0})}},at=st,ct=u(at,it,rt,!1,null,null,null),ut=ct.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-image",{ref:"image",attrs:{image:t.from,size:t.size,css:t.css}})},lt=[],ht={name:"TransitionKenburn",components:{FluxImage:P},mixins:[ot],data:function(){return{totalDuration:1500,easing:"linear",transform:{},css:{}}},created:function(){this.transform=this.getTransform(),this.css.transformOrigin=this.transform.originX+" "+this.transform.originY},played:function(){this.$refs.image.transform({transition:"all ".concat(this.totalDuration,"ms ").concat(this.easing),transform:"scale(".concat(this.transform.scale,") translate(").concat(this.transform.translateX,", ").concat(this.transform.translateY,")"),opacity:0})},methods:{getTransform:function(){var t=Math.floor(4*Math.random()+1);return 1===t?{scale:"1.7",translateX:"-35%",translateY:"-35%",originX:"top",originY:"left"}:2===t?{scale:"1.7",translateX:"35%",translateY:"-35%",originX:"top",originY:"right"}:3===t?{scale:"1.7",translateX:"-35%",translateY:"35%",originX:"bottom",originY:"left"}:{scale:"1.7",translateX:"35%",translateY:"35%",originX:"bottom",originY:"right"}}}},pt=ht,dt=u(pt,ft,lt,!1,null,null,null),vt=dt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-wrapper",{ref:"wrapper",attrs:{size:t.size,css:t.wrapperCss}},[n("flux-image",{ref:"image",attrs:{image:t.from,size:t.size,css:t.imageCss}})],1)},mt=[],yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",style:t.style},[t._t("default")],2)},bt=[],xt={name:"FluxWrapper",mixins:[j],data:function(){return{baseStyle:{overflow:"hidden"}}}},wt=xt,Ot=u(wt,yt,bt,!1,null,null,null),_t=Ot.exports;function St(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function kt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?St(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var jt={name:"TransitionSwipe",components:{FluxWrapper:_t,FluxImage:P},mixins:[ot],data:function(){return{totalDuration:1400,easing:"ease-in-out",wrapperCss:{position:"absolute",top:0,display:"flex",flexWrap:"nowrap"},imageCss:{flex:"0 0 auto"}}},played:function(){this.$refs.wrapper.transform({transition:"width ".concat(this.totalDuration,"ms ").concat(this.easing),width:0})},methods:{setupPrev:function(){this.wrapperCss=kt({},this.wrapperCss,{right:0,justifyContent:"flex-end"})},setupNext:function(){this.wrapperCss=kt({},this.wrapperCss,{left:0,justifyContent:"flex-start"})}}},Tt=jt,zt=u(Tt,gt,mt,!1,null,null,null),Dt=zt.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-wrapper",{ref:"wrapper",attrs:{size:t.wrapperSize,css:t.wrapperCss}},[n("flux-image",{ref:"left",attrs:{image:t.left,size:t.size}}),n("flux-image",{ref:"right",attrs:{image:t.right,size:t.size}})],1)},Ct=[],Et={name:"TransitionSlide",components:{FluxWrapper:_t,FluxImage:P},mixins:[ot],data:function(){return{totalDuration:1400,easing:"ease-in-out",left:void 0,right:void 0,wrapperSize:{},wrapperCss:{display:"flex",flexWrap:"nowrap"}}},computed:{transition:function(){return"transform ".concat(this.totalDuration,"ms ").concat(this.easing)}},created:function(){this.wrapperSize={width:2*this.size.width,height:this.size.height}},methods:{setupPrev:function(){this.left=this.to,this.right=this.from,this.wrapperCss.transform="translateX(-50%)"},setupNext:function(){this.left=this.from,this.right=this.to},playPrev:function(){this.$refs.wrapper.transform({transition:this.transition,transform:"translateX(0)"})},playNext:function(){this.$refs.wrapper.transform({transition:this.transition,transform:"translateX(-50%)"})}}},Ft=Et,It=u(Ft,Pt,Ct,!1,null,null,null),$t=It.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,image:t.from}})},Lt=[],Nt={name:"TransitionWaterfall",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:1,cols:10,tileDuration:600,totalDuration:0,easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",tileDelay:90}},created:function(){this.totalDuration=this.tileDelay*this.cols+this.tileDuration},played:function(){var t=this;this.$refs.grid.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n),"ms"),opacity:"0.1",transform:"translateY(100%)"})}))},methods:{getDelayPrev:function(t){return(this.cols-t-1)*this.tileDelay},getDelayNext:function(t){return t*this.tileDelay}}},Rt=Nt,At=u(Rt,Mt,Lt,!1,null,null,null),Gt=At.exports,Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,image:t.from}})},Wt=[],Vt={name:"TransitionZip",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:1,cols:10,tileDuration:600,totalDuration:0,easing:"ease-in",tileDelay:80}},created:function(){this.totalDuration=this.tileDelay*this.cols+this.tileDuration},played:function(){var t=this;this.$refs.grid.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n),"ms"),opacity:"0.1",transform:"translateY(".concat(n%2?"-":"","100%)")})}))},methods:{getDelayPrev:function(t){return(this.cols-t-1)*this.tileDelay},getDelayNext:function(t){return t*this.tileDelay}}},Ht=Vt,Yt=u(Ht,Bt,Wt,!1,null,null,null),Xt=Yt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,image:t.from}})},qt=[],Kt={name:"TransitionBlinds2d",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:1,cols:10,tileDuration:800,totalDuration:0,easing:"linear",tileDelay:100}},created:function(){this.totalDuration=this.tileDelay*this.cols+this.tileDuration},played:function(){var t=this;this.$refs.grid.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n),"ms"),opacity:"0.1",transform:"scaleX(0)"})}))},methods:{getDelayPrev:function(t){return(this.cols-t-1)*this.tileDelay},getDelayNext:function(t){return t*this.tileDelay}}},Jt=Kt,Zt=u(Jt,Ut,qt,!1,null,null,null),Qt=Zt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,image:t.from}})},ee=[],ne={name:"TransitionBlocks1",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:8,cols:8,tileDuration:300,totalDuration:0,easing:"linear",tileDelay:1e3}},created:function(){if(!this.options.rows){var t=this.size.width/this.cols;this.rows=Math.floor(this.size.height/t)}this.totalDuration=this.tileDelay+this.tileDuration},played:function(){var t=this;this.$refs.grid.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n),"ms"),opacity:"0",transform:"scale(0.3, 0.3)"})}))},methods:{getDelay:function(){var t=Math.random()*this.tileDelay;return Math.floor(t)}}},ie=ne,re=u(ie,te,ee,!1,null,null,null),oe=re.exports,se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,image:t.gridImage,"tile-css":t.tileCss,css:t.gridCss}}),t.backgroundImage?n("flux-image",{ref:"background",attrs:{size:t.size,image:t.backgroundImage,css:t.backgroundCss}}):t._e()],1)},ae=[],ce={name:"TransitionBlocks2",components:{FluxGrid:Y,FluxImage:P},mixins:[ot],data:function(){return{rows:8,cols:8,tileDuration:800,totalDuration:0,easing:"ease",tileDelay:80,gridImage:void 0,tileCss:{},gridCss:{position:"absolute",top:0,left:0,zIndex:2},backgroundImage:void 0,backgroundCss:{position:"absolute",top:0,left:0,zIndex:1}}},created:function(){if(!this.options.rows){var t=this.size.width/this.cols;this.rows=Math.floor(this.size.height/t)}this.totalDuration=this.tileDelay*(this.rows+this.cols)+this.tileDuration},methods:{setupPrev:function(){this.gridImage=this.to,this.backgroundImage=this.from,this.tileCss={opacity:0,transform:"scale(0.3)"}},setupNext:function(){this.gridImage=this.from},playPrev:function(){var t=this;this.$refs.grid.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n,"prev"),"ms"),opacity:1,transform:"scale(1)"})}))},playNext:function(){var t=this;this.$refs.grid.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n,"next"),"ms"),opacity:0,transform:"scale(0.3)"})}))},getDelay:function(t,e){var n=this.$refs.grid.getRowNumber(t),i=this.$refs.grid.getColNumber(t),r=i+n;return"prev"===e&&(r=this.rows+this.cols-r-1),r*this.tileDelay}}},ue=ce,fe=u(ue,se,ae,!1,null,null,null),le=fe.exports,he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-vortex",{ref:"vortex",attrs:{size:t.size,circles:t.circles,image:t.from}})},pe=[],de=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"vortex",style:t.style},t._l(t.tiles,(function(e,i){return n("flux-image",{key:i,ref:"tiles",refInFor:!0,attrs:{size:t.size,image:t.img,offset:e.offset,css:e.css}})})),1)},ve=[];function ge(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function me(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ge(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ge(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ye={name:"FluxVortex",components:{FluxImage:P},mixins:[j],props:{circles:{type:Number,default:1},tileCss:Object},data:function(){return{baseStyle:{position:"relative",overflow:"hidden"}}},computed:{numCircles:function(){return Math.round(parseFloat(this.circles))},diag:function(){var t=this.size,e=t.width,n=t.height;return Math.ceil(Math.sqrt(e*e+n*n))},radius:function(){return Math.ceil(this.diag/2/this.numCircles)},topGap:function(){return Math.ceil(this.size.height/2-this.radius*this.numCircles)},leftGap:function(){return Math.ceil(this.size.width/2-this.radius*this.numCircles)},tiles:function(){for(var t,e=[],n=0;n<this.numCircles;n++){var i=(this.numCircles-n)*this.radius*2,r=this.radius*n;t={offset:{top:this.topGap+r,left:this.leftGap+r}},t.css=me({},this.tileCss,{position:"absolute",left:t.offset.left+"px",top:t.offset.top+"px",width:i+"px",height:i+"px",backgroundRepeat:"repeat",borderRadius:"50%",zIndex:n}),e.push(t)}return e}},methods:{transform:function(t){this.$refs.tiles.forEach((function(e,n){return t(e,n)}))}}},be=ye,xe=u(be,de,ve,!1,null,null,null),we=xe.exports,Oe={name:"TransitionConcentric",components:{FluxVortex:we},mixins:[ot],data:function(){return{circles:7,tileDuration:800,totalDuration:0,easing:"linear",tileDelay:150}},created:function(){this.totalDuration=this.tileDelay*this.circles+this.tileDuration},played:function(){var t=this,e="next"===this.direction?"90":"-90";this.$refs.vortex.transform((function(n,i){n.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(i),"ms"),opacity:"0",transform:"rotateZ(".concat(e,"deg)")})}))},methods:{getDelay:function(t){return t*this.tileDelay}}},_e=Oe,Se=u(_e,he,pe,!1,null,null,null),ke=Se.exports,je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-vortex",{ref:"vortex",attrs:{size:t.size,circles:t.circles,image:t.from}})},Te=[],ze={name:"TransitionWarp",components:{FluxVortex:we},mixins:[ot],data:function(){return{circles:7,tileDuration:800,totalDuration:0,easing:"linear",tileDelay:150}},created:function(){this.totalDuration=this.tileDelay*this.circles+this.tileDuration},played:function(){var t=this;this.$refs.vortex.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n),"ms"),opacity:"0",transform:"rotateZ(".concat(t.getDeg(n),"deg)")})}))},methods:{getDelayPrev:function(t){return(this.circles-t-1)*this.tileDelay},getDelayNext:function(t){return t*this.tileDelay},getDeg:function(t){return t%2===0?"-90":"90"}}},De=ze,Pe=u(De,je,Te,!1,null,null,null),Ce=Pe.exports,Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-wrapper",{ref:"wrapper",attrs:{size:t.wrapperSize,css:t.wrapperCss}},[n("flux-image",{ref:"image",attrs:{image:t.image,size:t.size,css:t.imageCss}})],1)},Fe=[];function Ie(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function $e(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ie(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Me={name:"TransitionCamera",components:{FluxWrapper:_t,FluxImage:P},mixins:[ot],data:function(){return{circles:2,totalDuration:900,easing:"cubic-bezier(0.385, 0, 0.795, 0.560)",backgroundColor:"#111",image:void 0,diag:void 0,wrapperSize:{},wrapperCss:{boxSizing:"border-box",position:"absolute",display:"flex",justifyContent:"center",overflow:"hidden",borderRadius:"50%"},imageCss:{alignSelf:"center",flex:"none"}}},created:function(){this.image=this.from;var t=this.size,e=t.width,n=t.height,i=this.diag=Math.ceil(Math.sqrt(e*e+n*n));this.wrapperSize={width:i,height:i},this.wrapperCss=$e({},this.wrapperCss,{border:"0 solid "+this.backgroundColor,top:(n-i)/2+"px",left:(e-i)/2+"px"})},played:function(){var t=this;this.$refs.wrapper.transform({transition:"all ".concat(this.totalDuration/2-50,"ms ").concat(this.easing," 0ms"),borderWidth:this.diag/2+"px"}),setTimeout((function(){t.$refs.image.hide(),t.$refs.wrapper.transform({transition:"all ".concat(t.totalDuration/2-50,"ms ").concat(t.easing," 0ms"),borderWidth:0})}),this.totalDuration/2+50)}},Le=Me,Ne=u(Le,Ee,Fe,!1,null,null,null),Re=Ne.exports,Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-cube",{ref:"cube",attrs:{images:t.images,size:t.size,depth:t.size.width,css:t.cubeCss}})},Ge=[],Be={name:"TransitionCube",components:{FluxCube:N},mixins:[ot],data:function(){return{totalDuration:1400,easing:"ease-out",images:void 0,cubeCss:{}}},created:function(){Object.assign(this.mask,{perspective:"1600px",overflow:"visible"}),this.cubeCss.transition="all ".concat(this.totalDuration,"ms ").concat(this.easing),this.images={front:this.from,left:this.to,right:this.to}},played:function(){this.current&&this.current.hide();var t={next:"left",prev:"right"};this.$refs.cube.turn(t[this.direction])},beforeDestroy:function(){this.current&&this.current.show()}},We=Be,Ve=u(We,Ae,Ge,!1,null,null,null),He=Ve.exports,Ye=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("flux-image",{ref:"from",attrs:{image:t.from,size:t.size,"view-size":t.viewSize,offset:t.image.offset,css:t.image.css}}),n("flux-cube",{ref:"cube",attrs:{images:t.cube.images,size:t.size,"view-size":t.viewSize,offsets:t.cube.offsets,"sides-css":t.cube.sidesCss,css:t.cube.css}})],1)},Xe=[];function Ue(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function qe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ue(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ue(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Ke={name:"TransitionBook",components:{FluxCube:N,FluxImage:P},mixins:[ot],data:function(){return{totalDuration:1200,easing:"ease-out",viewSize:{},image:{offset:{},css:{position:"absolute",top:0,left:0}},cube:{images:{},offsets:{},css:{position:"absolute",top:0,left:0}}}},computed:{halfWidth:function(){return Math.ceil(this.size.width/2)},halfWidthPx:function(){return this.halfWidth+"px"}},created:function(){Object.assign(this.mask,{perspective:"1600px",overflow:"visible"}),this.viewSize={width:Math.ceil(this.size.width/2),height:this.size.height},this.cube.images={front:this.from,back:this.to}},played:function(){this.$refs.cube.transform({transition:"transform ".concat(this.totalDuration,"ms ").concat(this.easing),transform:"rotateY(".concat(this.getDeg(),"deg)")})},methods:{setupPrev:function(){this.image.offset.left=this.halfWidth,this.image.css.left=this.halfWidthPx,this.cube.offsets.back={left:this.halfWidth},this.cube.css=qe({},this.cube.css,{transformOrigin:"right center"})},setupNext:function(){this.cube.offsets.front={left:this.halfWidth},this.cube.css=qe({},this.cube.css,{left:this.halfWidthPx,transformOrigin:"left center"})},getDeg:function(){var t={next:"-180",prev:"180"};return t[this.direction]}}},Je=Ke,Ze=u(Je,Ye,Xe,!1,null,null,null),Qe=Ze.exports,tn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-image",{ref:"image",style:t.style,attrs:{image:t.from,size:t.size}})},en=[],nn={name:"TransitionFall",components:{FluxImage:P},mixins:[ot],data:function(){return{totalDuration:1600,easing:"ease-in",style:{transformOrigin:"center bottom"}}},created:function(){Object.assign(this.mask,{perspective:"1600px",overflow:"visible"})},played:function(){this.$refs.image.transform({transition:"transform ".concat(this.totalDuration,"ms ").concat(this.easing),transform:"rotateX(-83deg)"})}},rn=nn,on=u(rn,tn,en,!1,null,null,null),sn=on.exports,an=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,images:t.images,colors:t.colors,depth:t.size.height,css:t.gridCss}})},cn=[],un={name:"TransitionWave",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:1,cols:8,tileDuration:900,totalDuration:0,easing:"cubic-bezier(0.3, -0.3, 0.735, 0.285)",tileDelay:110,sideColor:"#333",gridCss:{overflow:"visible",perspective:"1200px"},images:{},colors:{}}},created:function(){this.mask.overflow="visible",this.totalDuration=this.tileDelay*this.cols+this.tileDuration,this.images={front:this.from,top:this.to}},played:function(){var t=this;this.current&&this.current.hide(),this.colors={left:this.sideColor,right:this.sideColor},this.$refs.grid.transform((function(e,n){e.setCss({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n),"ms")}),e.turnBottom()}))},beforeDestroy:function(){this.current&&this.current.show()},methods:{getDelayPrev:function(t){return(this.cols-t-1)*this.tileDelay},getDelayNext:function(t){return t*this.tileDelay}}},fn=un,ln=u(fn,an,cn,!1,null,null,null),hn=ln.exports,pn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,images:t.images,css:t.gridCss}})},dn=[],vn={name:"TransitionBlinds3d",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:1,cols:6,tileDuration:800,totalDuration:0,easing:"ease-out",tileDelay:150,gridCss:{perspective:"800px"},images:void 0}},created:function(){this.mask.overflow="visible",this.totalDuration=this.tileDelay*this.cols+this.tileDuration,this.images={front:this.from,back:this.to}},played:function(){var t=this;this.current&&this.current.hide();var e={prev:"backl",next:"backr"};this.$refs.grid.transform((function(n,i){n.setCss({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(i),"ms")}),n.turn(e[t.direction])}))},beforeDestroy:function(){this.current&&this.current.show()},methods:{getDelayPrev:function(t){return(this.cols-t-1)*this.tileDelay},getDelayNext:function(t){return t*this.tileDelay}}},gn=vn,mn=u(gn,pn,dn,!1,null,null,null),yn=mn.exports,bn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,images:t.images,css:t.gridCss}})},xn=[],wn={name:"TransitionRound1",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:8,cols:8,tileDuration:800,totalDuration:0,easing:"ease-out",tileDelay:150,images:void 0,gridCss:{perspective:"800px"}}},created:function(){if(this.mask.overflow="visible",!this.options.rows){var t=this.size.width/this.cols;this.rows=Math.floor(this.size.height/t)}var e=this.rows>this.cols?this.rows:this.cols;this.totalDuration=this.tileDelay*e*2,this.images={front:this.from,back:this.to}},played:function(){var t=this;this.current&&this.current.hide();var e={prev:"backl",next:"backr"};this.$refs.grid.transform((function(n,i){n.setCss({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(i),"ms")}),n.turn(e[t.direction])}))},beforeDestroy:function(){this.current&&this.current.show()},methods:{getDelay:function(t){var e=this.$refs.grid,n=e.getRowNumber(t),i=e.getColNumber(t),r=i+n;return"prev"===this.direction&&(r=this.rows+this.cols-r-1),r*this.tileDelay}}},On=wn,_n=u(On,bn,xn,!1,null,null,null),Sn=_n.exports,kn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,depth:0,image:t.from,css:t.gridCss,"tile-css":t.tileCss}})},jn=[],Tn={name:"TransitionRound2",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:9,cols:9,tileDuration:800,totalDuration:0,rotateX:"-540",easing:"linear",tileDelay:100,gridCss:{perspective:"1200px"},tileCss:{backfaceVisibility:"hidden"}}},created:function(){if(this.mask.overflow="visible",!this.options.rows){var t=this.size.width/this.cols;this.rows=Math.floor(this.size.height/t)}this.totalDuration=(this.cols/2+this.rows)*(2*this.tileDelay)},played:function(){var t=this;this.$refs.grid.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n),"ms"),opacity:"0",transform:"rotateY(".concat(t.rotateX,"deg)")})}))},methods:{getDelay:function(t){var e,n,i=this.$refs.grid,r=i.getRowNumber(t),o=i.getColNumber(t);"prev"===this.direction?(e=Math.abs(this.rows/2-.5-r),n=Math.abs(this.cols-o)):(e=Math.abs(this.rows/2-.5-r),n=Math.abs(o));var s=e+n-1;return s*this.tileDelay}}},zn=Tn,Dn=u(zn,kn,jn,!1,null,null,null),Pn=Dn.exports,Cn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flux-grid",{ref:"grid",attrs:{rows:t.rows,cols:t.cols,size:t.size,image:t.from,css:t.cssGrid}})},En=[],Fn={name:"TransitionExplode",components:{FluxGrid:Y},mixins:[ot],data:function(){return{rows:9,cols:9,tileDuration:300,totalDuration:0,easing:"linear",tileDelay:100,cssGrid:{overflow:"visible"}}},created:function(){if(this.mask.overflow="visible",!this.options.rows){var t=this.size.width/this.cols;this.rows=Math.floor(this.size.height/t)}this.totalDuration=(this.cols/2+this.rows/2)*(2*this.tileDelay)},played:function(){var t=this;this.$refs.grid.transform((function(e,n){e.transform({transition:"all ".concat(t.tileDuration,"ms ").concat(t.easing," ").concat(t.getDelay(n),"ms"),borderRadius:"100%",opacity:"0",transform:"scale(1.6, 1.6)"})}))},methods:{getDelay:function(t){var e=this.$refs.grid,n=e.getRowNumber(t),i=e.getColNumber(t),r=Math.abs(this.rows/2-.5-n),o=Math.abs(this.cols/2-.5-i),s=r+o-1;return s*this.tileDelay}}},In=Fn,$n=u(In,Cn,En,!1,null,null,null),Mn=$n.exports;function Ln(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function Nn(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ln(n,!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ln(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Rn={name:"FluxTransition",components:Nn({},r),props:{size:{type:Object,required:!0},transition:{type:[String,Object],required:!0},from:{type:[String,Object],required:!0},to:{type:[String,Object],required:!0},current:Object,options:Object,images:Array},data:function(){return{baseStyle:{overflow:"hidden",perspective:"none",zIndex:3}}},computed:{style:function(){var t=this.size,e=t.width,n=t.height;return Nn({},this.baseStyle,{width:e+"px",height:n+"px"})},componentName:function(){if(this.transition.component){if(this.transition.name)return this.transition.name;var t="https://deulos.github.com/vue-flux-docs/documentation-6/Components/VueFlux";throw new ReferenceError("Transition undefined, check ".concat(t))}var e=this.transition.name||this.transition;if(e="Transition"+e[0].toUpperCase()+e.slice(1),e in r===!1)throw e=this.transition.name||this.transition,new ReferenceError("Transition ".concat(e," does not exist"));return e}},created:function(){this.transition.component&&(this.$options.components[this.componentName]=this.transition.component)},mounted:function(){var t=this;setTimeout((function(){t.$emit("ready")}),this.$refs.transition.getReadyness())},methods:{start:function(){var t=this;this.$refs.transition.$options.played.call(this.$refs.transition),this.$emit("start",{transition:this.transition,from:this.from,to:this.to,options:this.options}),setTimeout((function(){t.end()}),this.getDuration())},end:function(){this.$emit("end",{transition:this.transition,from:this.from,to:this.to,options:this.options})},getDuration:function(){return this.$refs.transition?this.$refs.transition.totalDuration:1}}},An=Rn,Gn=(n("e671"),u(An,et,nt,!1,null,null,null)),Bn=Gn.exports,Wn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"container",staticClass:"vue-flux",style:t.style,on:{mousemove:function(e){return t.toggleMouseOver(!0)},mouseleave:function(e){return t.toggleMouseOver(!1)},dblclick:function(e){return t.Display.toggleFullScreen()},touchstart:function(e){return t.Touches.start(e)},touchend:function(e){return t.Touches.end(e)}}},[t.Transitions.current?n("flux-transition",{ref:"transition",attrs:{transition:t.Transitions.current,size:t.size,from:t.Transitions.from,to:t.Transitions.to,current:t.$refs.image,options:t.Transitions.current.options,images:t.Images.imgs},on:{ready:function(e){return t.Transitions.ready()},start:function(e){return t.Transitions.start()},end:function(e){return t.Transitions.end()}}}):t._e(),t.Images.current?n("flux-image",{ref:"image",attrs:{size:t.size,image:t.Images.current}}):t._e(),t.size?n("div",{staticClass:"complements"},[t._t("preloader"),t._t("caption"),n("div",{staticStyle:{height:"48%"}}),t._t("controls"),t._t("index"),t.loaded?t._t("pagination"):t._e()],2):t._e()],1)},Vn=[],Hn=(n("96cf"),n("795b")),Yn=n.n(Hn);function Xn(t,e,n,i,r,o,s){try{var a=t[o](s),c=a.value}catch(u){return void n(u)}a.done?e(c):Yn.a.resolve(c).then(i,r)}function Un(t){return function(){var e=this,n=arguments;return new Yn.a((function(i,r){var o=t.apply(e,n);function s(t){Xn(o,i,r,s,a,"next",t)}function a(t){Xn(o,i,r,s,a,"throw",t)}s(void 0)}))}}n("7514");var qn=function(){function t(e){b(this,t),this.vf=e}return w(t,[{key:"toggleFullScreen",value:function(){this.inFullScreen?this.exitFullScreen():this.enterFullScreen()}},{key:"enterFullScreen",value:function(){var t=Un(regeneratorRuntime.mark((function t(){var e,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.vf,this.vf.config.allowFullscreen){t.next=3;break}return t.abrupt("return");case 3:n=["requestFullscreen","mozRequestFullScreen","webkitRequestFullscreen","msRequestFullscreen"],i=e.$refs.container,n.find((function(t){return t in i&&(i[t]()||!0)})),e.$emit("fullscreen-enter");case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"exitFullScreen",value:function(){var t=Un(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=this.vf,n=["exitFullscreen","mozCancelFullScreen","webkitExitFullscreen","msExitFullscreen"],n.find((function(t){return t in document&&(document[t]()||!0)})),e.$emit("fullscreen-exit");case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"inFullScreen",get:function(){var t=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"];return!!document[t.find((function(t){return t in document}))]}}]),t}(),Kn=function(){function t(){b(this,t),this.timers={}}return w(t,[{key:"set",value:function(t,e,n){this.clear(t),this.timers[t]=setTimeout(n,e)}},{key:"clear",value:function(t){var e=this,n=t?[t]:Object.keys(this.timers);n.forEach((function(t){return clearTimeout(e.timers[t])}))}}]),t}(),Jn=function(){function t(e){b(this,t),this.vf=e,this.reset(!0)}return w(t,[{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(this.last=void 0,this.transitions=[]),this.current=void 0,this.from=void 0,this.to=void 0}},{key:"update",value:function(t){this.reset(!0),this.transitions=t.map((function(t,e){return{index:e,name:t.name||t,options:t.options}})),this.last=this.transitions[this.transitions.length-1],this.vf.$emit("transitions-updated")}},{key:"run",value:function(t,e,n,i){if(this.vf.Timers.clear("transition"),t){var r=t.name||t,o=this.transitions.find((function(t){return t.name===r}));if(!o)throw new ReferenceError("Transition ".concat(t," not found"));t=JSON.parse(JSON.stringify(o))}else t=JSON.parse(JSON.stringify(this.next));t.options||(t.options={}),t.options.direction||(i||(i=e.index<n.index?"next":"prev"),t.options.direction=i),this.from=e,this.to=n,this.current=t}},{key:"ready",value:function(){this.vf.$refs.transition.start()}},{key:"start",value:function(){this.vf.Images.current=this.to,this.vf.$emit("transition-start",{transition:this.current,from:this.from,to:this.to})}},{key:"end",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.vf;this.last=this.current,this.reset(),n.$nextTick((function(){n.Images.last=n.Images.current,n.config.infinite||0!==n.Images.next.index?(n.config.autoplay&&n.Timers.set("transition",n.config.delay,(function(){n.show()})),n.$emit(e?"transition-cancel":"transition-end",{transition:t.current,from:t.from,to:t.to})):n.stop()}))}},{key:"current",get:function(){return this.$current},set:function(t){this.current&&(this.last=this.current),this.$current=t}},{key:"next",get:function(){var t=this.last.index+1;return t>=this.transitions.length&&(t=0),this.transitions[t]}}]),t}(),Zn=function(){function t(e){b(this,t),g(this,"$current",void 0),g(this,"$last",void 0),this.vf=e,this.reset(!0)}return w(t,[{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(this.$last=void 0),this.srcs=[],this.imgs=[],this.loaded=0,this.progress=0,this.preloading=!1,this.lazyloading=!1,this.$current=void 0}},{key:"update",value:function(t){this.reset(),this.srcs=t.slice(0),this.preloadStart()}},{key:"preloadStart",value:function(){var t=this,e=this.vf;this.preloading=!0;var n=this.srcs.length;e.config.lazyLoad&&(n=e.config.lazyLoadAfter);var i=this.srcs.slice(0,n);i.forEach((function(e){return t.addImg(e)})),e.$emit("images-preload-start")}},{key:"preloadEnd",value:function(){this.preloading=!1,this.vf.$emit("images-preload-end"),this.imgs.length<this.srcs.length?this.lazyLoadStart():this.removeErrorImgs(),this.vf.init()}},{key:"lazyLoadStart",value:function(){var t=this;this.lazyloading=!0;var e=this.srcs.slice(this.imgs.length);e.forEach((function(e){return t.addImg(e)})),this.vf.$emit("images-lazy-load-start")}},{key:"lazyLoadEnd",value:function(){this.lazyloading=!1,this.removeErrorImgs(),this.vf.$emit("images-lazy-load-end")}},{key:"addImg",value:function(t){var e=this,n=new _(this.vf.config.path+t);this.imgs.push(n),n.load().then((function(){e.loadSuccess(n)})).catch((function(t){e.loadError(t)}))}},{key:"loadSuccess",value:function(){if(this.loaded++,!this.current)for(var t=0;t<this.imgs.length;t++){var e=this.imgs[t].status;if("error"!==e){"loaded"===e&&(this.current=this.imgs[t]);break}}this.preloading&&this.updateProgress(),this.loaded===this.imgs.length&&(this.preloading?this.preloadEnd():this.lazyLoadEnd())}},{key:"loadError",value:function(t){console.warn(t)}},{key:"updateProgress",value:function(){this.progress=Math.ceil(100*this.loaded/this.imgs.length)||0}},{key:"removeErrorImgs",value:function(){this.imgs=this.imgs.filter((function(t){return"loaded"===t.status})),this.imgs.forEach((function(t,e){t.index=e}))}},{key:"getByIndex",value:function(t){if("next"===t)return this.next;if("prev"===t)return this.prev;if(!this.imgs[t])throw new ReferenceError("Image ".concat(t," not found"));return this.imgs[t]}},{key:"prev",get:function(){var t=this.$current.index-1;return t<0&&(t=this.imgs.length-1),this.imgs[t]}},{key:"last",get:function(){return this.$last},set:function(t){this.$last=t}},{key:"current",get:function(){return this.$current},set:function(t){this.$current&&(this.last=this.$current),this.$current=t}},{key:"next",get:function(){var t=this.$current.index+1;return t>=this.imgs.length&&(t=0),this.imgs[t]}}]),t}(),Qn=function(){function t(e){b(this,t),this.vf=e,this.startX=0,this.startY=0,this.startTime=0,this.endTime=0,this.prevTouchTime=0,this.tapThreshold=5,this.doubleTapThreshold=200,this.slideTrigger=.3}return w(t,[{key:"start",value:function(t){this.vf.config.enableGestures&&(this.startTime=Date.now(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY)}},{key:"end",value:function(t){var e=this.vf;this.prevTouchTime=this.endTime,this.endTime=Date.now();var n=t.changedTouches[0].clientX-this.startX,i=t.changedTouches[0].clientY-this.startY;this.tap(n,i)?e.toggleMouseOver(!0):e.config.enableGestures&&(this.slideRight(n)?e.show("prev"):this.slideLeft(n)&&e.show("next"))}},{key:"tap",value:function(t,e){return Math.abs(t)<this.tapThreshold&&Math.abs(e)<this.tapThreshold}},{key:"doubleTap",value:function(){return this.endTime-this.prevTouchTime<this.doubleTapThreshold}},{key:"slideLeft",value:function(t){return t<0&&t<-this.vf.size.width*this.slideTrigger}},{key:"slideRight",value:function(t){return t>0&&t>this.vf.size.width*this.slideTrigger}},{key:"slideUp",value:function(t){return t<0&&t<-this.vf.size.height*this.slideTrigger}},{key:"slideDown",value:function(t){return t>0&&t>this.vf.size.height*this.slideTrigger}}]),t}(),ti={name:"VueFlux",components:{FluxImage:P,FluxTransition:Bn},props:{options:{type:Object,default:function(){return{}}},transitions:{type:Array,required:!0},images:{type:Array,default:function(){return[]}},captions:{type:Array,default:function(){return[]}}},data:function(){return{config:{allowFullscreen:!1,allowToSkipTransition:!0,autohideTime:2500,autoplay:!1,bindKeys:!1,delay:5e3,enableGestures:!1,infinite:!0,lazyLoad:!0,lazyLoadAfter:3,path:""},size:void 0,loaded:!1,mouseOver:!1,Display:void 0,Timers:void 0,Transitions:void 0,Touches:void 0,Images:void 0}},computed:{style:function(){if(!this.size)return{};if(this.Display.inFullScreen)return{width:"100% !important",height:"100% !important"};var t=this.size,e=t.width,n=t.height;return{width:e?e+"px":"auto",height:n?n+"px":"auto"}}},watch:{options:{handler:function(){this.updateOptions()},deep:!0},transitions:function(){var t=this.config.autoplay;this.stop(!0),this.Transitions.update(this.transitions),t&&this.play()},images:function(){var t=this.config.autoplay;this.stop(!0),this.loaded=!1,this.Images.update(this.images),t&&this.play()}},created:function(){this.Display=new qn(this),this.Timers=new Kn(this),this.Images=new Zn(this),this.Touches=new Qn(this),this.Transitions=new Jn(this),this.updateOptions(),this.$emit("created")},mounted:function(){this.resize(),this.Images.update(this.images),this.Transitions.update(this.transitions),this.$emit("mounted")},beforeDestroy:function(){this.removeListeners(),this.Timers.clear(),this.$emit("destroyed")},methods:{updateOptions:function(){Object.assign(this.config,this.options),0===this.config.autohideTime&&(this.mouseOver=!0),this.removeListeners(),window.addEventListener("resize",this.resize,{passive:!0}),this.config.bindKeys&&window.addEventListener("keydown",this.keydown,{passive:!0}),this.$emit("options-updated")},resize:function(){var t=Un(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$refs.container){t.next=2;break}return t.abrupt("return");case 2:return this.Transitions.current&&this.Transitions.end(!0),this.size=void 0,t.next=6,this.$nextTick();case 6:e=O.sizeFrom(this.$refs.container),e.height||(e.height=e.width/16*9),this.size=e;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),init:function(){this.loaded=!0,!0===this.config.autoplay&&this.play(),this.$emit("ready")},toggleMouseOver:function(t){var e=this;0!==this.config.autohideTime&&(this.Timers.clear("mouseOver"),this.mouseOver=t,this.mouseOver?this.Timers.set("mouseOver",this.config.autohideTime,(function(){e.mouseOver=!1})):(this.mouseOver=!1,this.Timers.clear("mouseOver")))},play:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next",n=arguments.length>1?arguments[1]:void 0;this.config.autoplay=!0,this.Transitions.current||this.Timers.set("transition",n||this.config.delay,(function(){t.show(e)})),this.$emit("play",{index:e})},stop:function(t){this.config.autoplay=!1,this.Timers.clear("transition"),this.Transitions.current&&t&&this.Transitions.end(!0),this.$emit("stop")},show:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next",n=arguments.length>1?arguments[1]:void 0;if(this.loaded&&this.$refs.image)if(this.Transitions.current)this.config.allowToSkipTransition&&(this.Transitions.end(!0),this.$nextTick((function(){t.show(e,n)})));else{var i=this.Images.current,r=this.Images.getByIndex(e),o=["prev","next"].includes(e)?e:void 0;this.Transitions.run(n,i,r,o),this.$emit("show",{transition:n,from:i,to:r,direction:o})}},keydown:function(t){/ArrowLeft|Left/.test(t.key)?this.show("prev"):/ArrowRight|Right/.test(t.key)&&this.show("next")},removeListeners:function(){window.removeEventListener("resize",this.resize),window.removeEventListener("keydown",this.keydown)}}},ei=ti,ni=(n("1d36"),u(ei,Wn,Vn,!1,null,null,null)),ii=ni.exports,ri=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.caption?t._t("default",[n("div",{staticClass:"flux-caption"},[t._v("\n\t\t\t"+t._s(t.getCaptionText())+"\n\t\t")])],{caption:t.caption,text:t.getCaptionText()}):t._e()],2)},oi=[],si={props:{slider:Object},computed:{vf:function(){if(this.slider)return this.slider;if("VueFlux"===this.$parent.$options.name)return this.$parent;throw new ReferenceError("slider not referenced, check https://deulos.github.com/vue-flux-docs/ for help")},captions:function(){return this.vf&&this.vf.captions?this.vf.captions:{}},Transitions:function(){return this.vf.Transitions},Images:function(){return this.vf.Images}},methods:{getCaption:function(t){return void 0===t&&(t=this.Images.current.index),this.captions[t]||""},getCaptionText:function(t){var e=this.getCaption(t);return e.text||e||""}}},ai={name:"FluxCaption",mixins:[si],computed:{caption:function(){return this.vf&&this.vf.loaded?this.Transitions.current?"":this.getCaption():""}}},ci=ai,ui=(n("87af"),u(ci,ri,oi,!1,null,null,null)),fi=ui.exports,li=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.display?n("div",{staticClass:"flux-controls"},[n("flux-button",{staticClass:"prev top left",on:{click:function(e){return t.vf.show("prev")}}},[n("polyline",{attrs:{points:"64,18 22,50 64,82"}})]),t.vf.config.autoplay?t._e():n("flux-button",{staticClass:"play top",on:{click:function(e){return t.vf.play("next",1)}}},[n("polygon",{attrs:{points:"32,12 82,50 32,88"}})]),t.vf.config.autoplay?n("flux-button",{staticClass:"pause top",on:{click:function(e){return t.vf.stop()}}},[n("line",{attrs:{x1:"32",y1:"22",x2:"32",y2:"78"}}),n("line",{attrs:{x1:"68",y1:"22",x2:"68",y2:"78"}})]):t._e(),n("flux-button",{staticClass:"next top right",on:{click:function(e){return t.vf.show("next")}}},[n("polyline",{attrs:{points:"36,18 78,50 36,82"}})])],1):t._e()])},hi=[],pi={name:"FluxControls",components:{FluxButton:l},mixins:[si],computed:{display:function(){return!!this.vf&&(!!this.vf.loaded&&!!this.vf.mouseOver)},autoplayClass:function(){return this.vf&&this.vf.config.autoplay?"pause":"play"}}},di=pi,vi=(n("f83b"),u(di,li,hi,!1,null,null,null)),gi=vi.exports,mi=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.display?n("div",{staticClass:"flux-index"},[n("transition",{attrs:{name:"fade"}},[t.displayButton?n("flux-button",{staticClass:"toggle bottom left",on:{click:function(e){return t.showIndex(e)}}},t._l(t.coords,(function(e,i){return n("rect",{key:i,attrs:{x:e.x,y:e.y,width:t.buttonRectSize+"px",height:t.buttonRectSize+"px"}})})),0):t._e()],1),n("nav",{class:t.listClass,on:{click:function(e){return t.hideIndex()}}},[n("ul",{ref:"index"},t._l(t.images,(function(e,i){return n("li",{key:i,class:t.thumbClass(i),on:{click:function(e){return t.showImage(i)}}},[n("flux-image",{ref:"thumbs",refInFor:!0,attrs:{image:t.images[i],size:t.thumbSize,title:t.getCaptionText(i)}})],1)})),0)])],1):t._e()},yi=[],bi={name:"FluxIndex",components:{FluxButton:l,FluxImage:P},mixins:[si],props:{buttonRows:{type:Number,default:3},buttonCols:{type:Number,default:3},buttonRectSize:{type:Number,default:12},buttonPadding:{type:Number,default:6}},data:function(){return{visible:!1,rectSize:14,delay:500,coords:[]}},computed:{images:function(){return this.vf?this.Images.imgs:[]},display:function(){return this.vf&&this.vf.loaded},displayButton:function(){return this.vf.mouseOver},listClass:function(){var t="";return this.visible&&(t+="visible"),this.vf.mouseOver&&(t+=" mouse-over"),t},thumbSize:function(){var t=this.vf.size,e=t.width,n=t.height;return e/=4.2,n=90*e/160,e>160&&(e=160,n=90),{width:e,height:n}}},created:function(){for(var t=(100-2*this.buttonPadding-this.rectSize*this.buttonRows)/(this.buttonRows+1),e=(100-2*this.buttonPadding-this.rectSize*this.buttonCols)/(this.buttonCols+1),n=0;n<this.buttonRows;n++)for(var i=0;i<this.buttonCols;i++)this.coords.push({x:this.buttonPadding+t+t*n+this.rectSize*n,y:this.buttonPadding+e+e*i+this.rectSize*i})},methods:{showIndex:function(){this.vf.stop(),this.visible=!0;var t=this.$refs.index;this.$nextTick((function(){t.clientHeight,t.style.marginTop=0}))},hideIndex:function(t){var e=this,n=this.$refs.index;n.clientHeight,n.style.marginTop="100%",setTimeout((function(){e.visible=!1,void 0!==t&&e.showImage(t)}),this.delay)},thumbClass:function(t){return this.Images.current.index===t?"current":""},showImage:function(t){this.visible?this.hideIndex(t):this.Images.current.index!==t&&this.vf.show(t)}}},xi=bi,wi=(n("5a88"),u(xi,mi,yi,!1,null,null,null)),Oi=wi.exports,_i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.display?n("nav",{staticClass:"flux-pagination"},[n("ul",t._l(t.Images.srcs.length,(function(e){return n("li",{key:e},[t._t("default",[n("span",{staticClass:"pagination-item",class:t.getClass(e-1),attrs:{title:t.getCaptionText(e-1)},on:{click:function(n){return t.show(e-1)}}})],{item:t.getItem(e-1)})],2)})),0)]):t._e()},Si=[],ki={name:"FluxPagination",mixins:[si],computed:{display:function(){return!!this.vf}},methods:{getItem:function(t){return{index:t,title:this.getCaptionText(t),onClick:this.show,active:"active"===this.getClass(t)}},getClass:function(t){return void 0!==this.Transitions.current&&this.Transitions.from.index===t?"active":void 0===this.Transitions.current&&this.Images.current.index===t?"active":""},show:function(t,e){this.vf.show(t),e&&e.preventDefault()}}},ji=ki,Ti=(n("6fc2"),u(ji,_i,Si,!1,null,null,null)),zi=Ti.exports,Di=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preloader"},[t._t("spinner",[t.displaySpinner?n("div",{staticClass:"spinner"},[n("div",{staticClass:"pct"},[t._v("\n\t\t\t\t"+t._s(t.Images.progress)+"%\n\t\t\t")]),n("div",{staticClass:"border"})]):t._e()])],2)},Pi=[],Ci={name:"FluxPreloader",mixins:[si],props:{spinner:{type:Boolean,default:!0}},data:function(){return{transitionName:void 0,imageCss:{zIndex:13}}},computed:{displaySpinner:function(){return this.spinner&&this.vf.Images.preloading}},watch:{"vf.images":function(){var t=this.Images,e=this.Transitions;t.last&&!e.current&&(t.current=t.last)},"vf.Images.preloading":function(t){var e=this.Images;e.last&&!t&&e.current===e.last&&this.transitionStart()}},methods:{transitionStart:function(){var t=this.Images,e=this.Transitions;e.current&&e.end(!0),e.run(void 0,t.current,t.imgs[0],"next")}}},Ei=Ci,Fi=(n("1dec"),u(Ei,Di,Pi,!1,null,null,null)),Ii=Fi.exports;n.d(e,"FluxButton",(function(){return l})),n.d(e,"FluxCube",(function(){return N})),n.d(e,"FluxGrid",(function(){return Y})),n.d(e,"FluxImage",(function(){return P})),n.d(e,"FluxParallax",(function(){return tt})),n.d(e,"FluxTransition",(function(){return Bn})),n.d(e,"FluxVortex",(function(){return we})),n.d(e,"FluxWrapper",(function(){return _t})),n.d(e,"VueFlux",(function(){return ii})),n.d(e,"FluxCaption",(function(){return fi})),n.d(e,"FluxControls",(function(){return gi})),n.d(e,"FluxIndex",(function(){return Oi})),n.d(e,"FluxPagination",(function(){return zi})),n.d(e,"FluxPreloader",(function(){return Ii})),n.d(e,"BaseComplement",(function(){return si})),n.d(e,"BaseComponent",(function(){return j})),n.d(e,"BaseTransition",(function(){return ot}))},fc39:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".vue-flux .preloader{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.vue-flux .preloader .spinner{position:absolute;top:50%;left:50%;margin-top:-40px;margin-left:-40px;width:80px;height:80px;z-index:14}.vue-flux .preloader .spinner .pct{position:absolute;right:0;left:0;height:80px;line-height:80px;text-align:center;font-weight:700;z-index:1}.vue-flux .preloader .spinner .border{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;border:14px solid #f3f3f3;border-top-color:#3498db;border-bottom-color:#3498db;border-radius:50%;background-color:#f3f3f3;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},ffb5:function(t,e,n){var i=n("b486");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("fc653288",i,!0,{sourceMap:!1,shadowMode:!1})}})}));
//# sourceMappingURL=vue-flux.umd.min.js.map

/***/ }),

/***/ "./node_modules/vue-i18n/dist/vue-i18n.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * vue-i18n v8.15.4 
 * (c) 2020 kazuya kawaguchi
 * Released under the MIT License.
 */
/*  */

/**
 * constants
 */

var numberFormatKeys = [
  'style',
  'currency',
  'currencyDisplay',
  'useGrouping',
  'minimumIntegerDigits',
  'minimumFractionDigits',
  'maximumFractionDigits',
  'minimumSignificantDigits',
  'maximumSignificantDigits',
  'localeMatcher',
  'formatMatcher',
  'unit'
];

/**
 * utilities
 */

function warn (msg, err) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.warn(err.stack);
    }
  }
}

function error (msg, err) {
  if (typeof console !== 'undefined') {
    console.error('[vue-i18n] ' + msg);
    /* istanbul ignore if */
    if (err) {
      console.error(err.stack);
    }
  }
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

function isNull (val) {
  return val === null || val === undefined
}

function parseArgs () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var locale = null;
  var params = null;
  if (args.length === 1) {
    if (isObject(args[0]) || Array.isArray(args[0])) {
      params = args[0];
    } else if (typeof args[0] === 'string') {
      locale = args[0];
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      locale = args[0];
    }
    /* istanbul ignore if */
    if (isObject(args[1]) || Array.isArray(args[1])) {
      params = args[1];
    }
  }

  return { locale: locale, params: params }
}

function looseClone (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

function merge (target) {
  var arguments$1 = arguments;

  var output = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments$1[i];
    if (source !== undefined && source !== null) {
      var key = (void 0);
      for (key in source) {
        if (hasOwn(source, key)) {
          if (isObject(source[key])) {
            output[key] = merge(output[key], source[key]);
          } else {
            output[key] = source[key];
          }
        }
      }
    }
  }
  return output
}

function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/*  */

function extend (Vue) {
  if (!Vue.prototype.hasOwnProperty('$i18n')) {
    // $FlowFixMe
    Object.defineProperty(Vue.prototype, '$i18n', {
      get: function get () { return this._i18n }
    });
  }

  Vue.prototype.$t = function (key) {
    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var i18n = this.$i18n;
    return i18n._t.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this ].concat( values ))
  };

  Vue.prototype.$tc = function (key, choice) {
    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];

    var i18n = this.$i18n;
    return i18n._tc.apply(i18n, [ key, i18n.locale, i18n._getMessages(), this, choice ].concat( values ))
  };

  Vue.prototype.$te = function (key, locale) {
    var i18n = this.$i18n;
    return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
  };

  Vue.prototype.$d = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).d.apply(ref, [ value ].concat( args ))
  };

  Vue.prototype.$n = function (value) {
    var ref;

    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
    return (ref = this.$i18n).n.apply(ref, [ value ].concat( args ))
  };
}

/*  */

var mixin = {
  beforeCreate: function beforeCreate () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages = {};
            options.__i18n.forEach(function (resource) {
              localeMessages = merge(localeMessages, JSON.parse(resource));
            });
            Object.keys(localeMessages).forEach(function (locale) {
              options.i18n.mergeLocaleMessage(locale, localeMessages[locale]);
            });
          } catch (e) {
            if (true) {
              error("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }
        this._i18n = options.i18n;
        this._i18nWatcher = this._i18n.watchI18nData();
      } else if (isPlainObject(options.i18n)) {
        // component local i18n
        if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
          options.i18n.root = this.$root;
          options.i18n.formatter = this.$root.$i18n.formatter;
          options.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale;
          options.i18n.formatFallbackMessages = this.$root.$i18n.formatFallbackMessages;
          options.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn;
          options.i18n.silentFallbackWarn = this.$root.$i18n.silentFallbackWarn;
          options.i18n.pluralizationRules = this.$root.$i18n.pluralizationRules;
          options.i18n.preserveDirectiveContent = this.$root.$i18n.preserveDirectiveContent;
        }

        // init locale messages via custom blocks
        if (options.__i18n) {
          try {
            var localeMessages$1 = {};
            options.__i18n.forEach(function (resource) {
              localeMessages$1 = merge(localeMessages$1, JSON.parse(resource));
            });
            options.i18n.messages = localeMessages$1;
          } catch (e) {
            if (true) {
              warn("Cannot parse locale messages via custom blocks.", e);
            }
          }
        }

        var ref = options.i18n;
        var sharedMessages = ref.sharedMessages;
        if (sharedMessages && isPlainObject(sharedMessages)) {
          options.i18n.messages = merge(options.i18n.messages, sharedMessages);
        }

        this._i18n = new VueI18n(options.i18n);
        this._i18nWatcher = this._i18n.watchI18nData();

        if (options.i18n.sync === undefined || !!options.i18n.sync) {
          this._localeWatcher = this.$i18n.watchLocale();
        }
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      // root i18n
      this._i18n = this.$root.$i18n;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      // parent i18n
      this._i18n = options.parent.$i18n;
    }
  },

  beforeMount: function beforeMount () {
    var options = this.$options;
    options.i18n = options.i18n || (options.__i18n ? {} : null);

    if (options.i18n) {
      if (options.i18n instanceof VueI18n) {
        // init locale messages via custom blocks
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else if (isPlainObject(options.i18n)) {
        this._i18n.subscribeDataChanging(this);
        this._subscribing = true;
      } else {
        if (true) {
          warn("Cannot be interpreted 'i18n' option.");
        }
      }
    } else if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    } else if (options.parent && options.parent.$i18n && options.parent.$i18n instanceof VueI18n) {
      this._i18n.subscribeDataChanging(this);
      this._subscribing = true;
    }
  },

  beforeDestroy: function beforeDestroy () {
    if (!this._i18n) { return }

    var self = this;
    this.$nextTick(function () {
      if (self._subscribing) {
        self._i18n.unsubscribeDataChanging(self);
        delete self._subscribing;
      }

      if (self._i18nWatcher) {
        self._i18nWatcher();
        self._i18n.destroyVM();
        delete self._i18nWatcher;
      }

      if (self._localeWatcher) {
        self._localeWatcher();
        delete self._localeWatcher;
      }

      self._i18n = null;
    });
  }
};

/*  */

var interpolationComponent = {
  name: 'i18n',
  functional: true,
  props: {
    tag: {
      type: String
    },
    path: {
      type: String,
      required: true
    },
    locale: {
      type: String
    },
    places: {
      type: [Array, Object]
    }
  },
  render: function render (h, ref) {
    var data = ref.data;
    var parent = ref.parent;
    var props = ref.props;
    var slots = ref.slots;

    var $i18n = parent.$i18n;
    if (!$i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return
    }

    var path = props.path;
    var locale = props.locale;
    var places = props.places;
    var params = slots();
    var children = $i18n.i(
      path,
      locale,
      onlyHasDefaultPlace(params) || places
        ? useLegacyPlaces(params.default, places)
        : params
    );

    var tag = props.tag || 'span';
    return tag ? h(tag, data, children) : children
  }
};

function onlyHasDefaultPlace (params) {
  var prop;
  for (prop in params) {
    if (prop !== 'default') { return false }
  }
  return Boolean(prop)
}

function useLegacyPlaces (children, places) {
  var params = places ? createParamsFromPlaces(places) : {};

  if (!children) { return params }

  // Filter empty text nodes
  children = children.filter(function (child) {
    return child.tag || child.text.trim() !== ''
  });

  var everyPlace = children.every(vnodeHasPlaceAttribute);
  if ( true && everyPlace) {
    warn('`place` attribute is deprecated in next major version. Please switch to Vue slots.');
  }

  return children.reduce(
    everyPlace ? assignChildPlace : assignChildIndex,
    params
  )
}

function createParamsFromPlaces (places) {
  if (true) {
    warn('`places` prop is deprecated in next major version. Please switch to Vue slots.');
  }

  return Array.isArray(places)
    ? places.reduce(assignChildIndex, {})
    : Object.assign({}, places)
}

function assignChildPlace (params, child) {
  if (child.data && child.data.attrs && child.data.attrs.place) {
    params[child.data.attrs.place] = child;
  }
  return params
}

function assignChildIndex (params, child, index) {
  params[index] = child;
  return params
}

function vnodeHasPlaceAttribute (vnode) {
  return Boolean(vnode.data && vnode.data.attrs && vnode.data.attrs.place)
}

/*  */

var numberComponent = {
  name: 'i18n-n',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    value: {
      type: Number,
      required: true
    },
    format: {
      type: [String, Object]
    },
    locale: {
      type: String
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var parent = ref.parent;
    var data = ref.data;

    var i18n = parent.$i18n;

    if (!i18n) {
      if (true) {
        warn('Cannot find VueI18n instance!');
      }
      return null
    }

    var key = null;
    var options = null;

    if (typeof props.format === 'string') {
      key = props.format;
    } else if (isObject(props.format)) {
      if (props.format.key) {
        key = props.format.key;
      }

      // Filter out number format options only
      options = Object.keys(props.format).reduce(function (acc, prop) {
        var obj;

        if (numberFormatKeys.includes(prop)) {
          return Object.assign({}, acc, ( obj = {}, obj[prop] = props.format[prop], obj ))
        }
        return acc
      }, null);
    }

    var locale = props.locale || i18n.locale;
    var parts = i18n._ntp(props.value, locale, key, options);

    var values = parts.map(function (part, index) {
      var obj;

      var slot = data.scopedSlots && data.scopedSlots[part.type];
      return slot ? slot(( obj = {}, obj[part.type] = part.value, obj.index = index, obj.parts = parts, obj )) : part.value
    });

    return h(props.tag, {
      attrs: data.attrs,
      'class': data['class'],
      staticClass: data.staticClass
    }, values)
  }
};

/*  */

function bind (el, binding, vnode) {
  if (!assert(el, vnode)) { return }

  t(el, binding, vnode);
}

function update (el, binding, vnode, oldVNode) {
  if (!assert(el, vnode)) { return }

  var i18n = vnode.context.$i18n;
  if (localeEqual(el, vnode) &&
    (looseEqual(binding.value, binding.oldValue) &&
     looseEqual(el._localeMessage, i18n.getLocaleMessage(i18n.locale)))) { return }

  t(el, binding, vnode);
}

function unbind (el, binding, vnode, oldVNode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return
  }

  var i18n = vnode.context.$i18n || {};
  if (!binding.modifiers.preserve && !i18n.preserveDirectiveContent) {
    el.textContent = '';
  }
  el._vt = undefined;
  delete el['_vt'];
  el._locale = undefined;
  delete el['_locale'];
  el._localeMessage = undefined;
  delete el['_localeMessage'];
}

function assert (el, vnode) {
  var vm = vnode.context;
  if (!vm) {
    warn('Vue instance does not exists in VNode context');
    return false
  }

  if (!vm.$i18n) {
    warn('VueI18n instance does not exists in Vue instance');
    return false
  }

  return true
}

function localeEqual (el, vnode) {
  var vm = vnode.context;
  return el._locale === vm.$i18n.locale
}

function t (el, binding, vnode) {
  var ref$1, ref$2;

  var value = binding.value;

  var ref = parseValue(value);
  var path = ref.path;
  var locale = ref.locale;
  var args = ref.args;
  var choice = ref.choice;
  if (!path && !locale && !args) {
    warn('value type not supported');
    return
  }

  if (!path) {
    warn('`path` is required in v-t directive');
    return
  }

  var vm = vnode.context;
  if (choice) {
    el._vt = el.textContent = (ref$1 = vm.$i18n).tc.apply(ref$1, [ path, choice ].concat( makeParams(locale, args) ));
  } else {
    el._vt = el.textContent = (ref$2 = vm.$i18n).t.apply(ref$2, [ path ].concat( makeParams(locale, args) ));
  }
  el._locale = vm.$i18n.locale;
  el._localeMessage = vm.$i18n.getLocaleMessage(vm.$i18n.locale);
}

function parseValue (value) {
  var path;
  var locale;
  var args;
  var choice;

  if (typeof value === 'string') {
    path = value;
  } else if (isPlainObject(value)) {
    path = value.path;
    locale = value.locale;
    args = value.args;
    choice = value.choice;
  }

  return { path: path, locale: locale, args: args, choice: choice }
}

function makeParams (locale, args) {
  var params = [];

  locale && params.push(locale);
  if (args && (Array.isArray(args) || isPlainObject(args))) {
    params.push(args);
  }

  return params
}

var Vue;

function install (_Vue) {
  /* istanbul ignore if */
  if ( true && install.installed && _Vue === Vue) {
    warn('already installed.');
    return
  }
  install.installed = true;

  Vue = _Vue;

  var version = (Vue.version && Number(Vue.version.split('.')[0])) || -1;
  /* istanbul ignore if */
  if ( true && version < 2) {
    warn(("vue-i18n (" + (install.version) + ") need to use Vue 2.0 or later (Vue: " + (Vue.version) + ")."));
    return
  }

  extend(Vue);
  Vue.mixin(mixin);
  Vue.directive('t', { bind: bind, update: update, unbind: unbind });
  Vue.component(interpolationComponent.name, interpolationComponent);
  Vue.component(numberComponent.name, numberComponent);

  // use simple mergeStrategies to prevent i18n instance lose '__proto__'
  var strats = Vue.config.optionMergeStrategies;
  strats.i18n = function (parentVal, childVal) {
    return childVal === undefined
      ? parentVal
      : childVal
  };
}

/*  */

var BaseFormatter = function BaseFormatter () {
  this._caches = Object.create(null);
};

BaseFormatter.prototype.interpolate = function interpolate (message, values) {
  if (!values) {
    return [message]
  }
  var tokens = this._caches[message];
  if (!tokens) {
    tokens = parse(message);
    this._caches[message] = tokens;
  }
  return compile(tokens, values)
};



var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;

function parse (format) {
  var tokens = [];
  var position = 0;

  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }

      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== '}') {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === '}';

      var type = RE_TOKEN_LIST_VALUE.test(sub)
        ? 'list'
        : isClosed && RE_TOKEN_NAMED_VALUE.test(sub)
          ? 'named'
          : 'unknown';
      tokens.push({ value: sub, type: type });
    } else if (char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[(position)] !== '{') {
        text += char;
      }
    } else {
      text += char;
    }
  }

  text && tokens.push({ type: 'text', value: text });

  return tokens
}

function compile (tokens, values) {
  var compiled = [];
  var index = 0;

  var mode = Array.isArray(values)
    ? 'list'
    : isObject(values)
      ? 'named'
      : 'unknown';
  if (mode === 'unknown') { return compiled }

  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break
      case 'named':
        if (mode === 'named') {
          compiled.push((values)[token.value]);
        } else {
          if (true) {
            warn(("Type of token '" + (token.type) + "' and format of value '" + mode + "' don't match!"));
          }
        }
        break
      case 'unknown':
        if (true) {
          warn("Detect 'unknown' type of token!");
        }
        break
    }
    index++;
  }

  return compiled
}

/*  */

/**
 *  Path parser
 *  - Inspired:
 *    Vue.js Path parser
 */

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Check if an expression is a literal value.
 */

var literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function isLiteral (exp) {
  return literalValueRE.test(exp)
}

/**
 * Strip quotes from a string
 */

function stripQuotes (str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27)
    ? str.slice(1, -1)
    : str
}

/**
 * Determine the type of a character in a keypath.
 */

function getPathCharType (ch) {
  if (ch === undefined || ch === null) { return 'eof' }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
      return ch

    case 0x5F: // _
    case 0x24: // $
    case 0x2D: // -
      return 'ident'

    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0:  // No-break space
    case 0xFEFF:  // Byte Order Mark
    case 0x2028:  // Line Separator
    case 0x2029:  // Paragraph Separator
      return 'ws'
  }

  return 'ident'
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 */

function formatSubPath (path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) { return false }

  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed
}

/**
 * Parse a string path into an array of segments
 */

function parse$1 (path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c;
  var key;
  var newChar;
  var type;
  var transition;
  var action;
  var typeMap;
  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      if (key === undefined) { return false }
      key = formatSubPath(key);
      if (key === false) {
        return false
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote () {
    var nextChar = path[index + 1];
    if ((mode === IN_SINGLE_QUOTE && nextChar === "'") ||
      (mode === IN_DOUBLE_QUOTE && nextChar === '"')) {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true
    }
  }

  while (mode !== null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined
        ? c
        : newChar;
      if (action() === false) {
        return
      }
    }

    if (mode === AFTER_PATH) {
      return keys
    }
  }
}





var I18nPath = function I18nPath () {
  this._cache = Object.create(null);
};

/**
 * External parse that check for a cache hit first
 */
I18nPath.prototype.parsePath = function parsePath (path) {
  var hit = this._cache[path];
  if (!hit) {
    hit = parse$1(path);
    if (hit) {
      this._cache[path] = hit;
    }
  }
  return hit || []
};

/**
 * Get path value from path string
 */
I18nPath.prototype.getPathValue = function getPathValue (obj, path) {
  if (!isObject(obj)) { return null }

  var paths = this.parsePath(path);
  if (paths.length === 0) {
    return null
  } else {
    var length = paths.length;
    var last = obj;
    var i = 0;
    while (i < length) {
      var value = last[paths[i]];
      if (value === undefined) {
        return null
      }
      last = value;
      i++;
    }

    return last
  }
};

/*  */



var htmlTagMatcher = /<\/?[\w\s="/.':;#-\/]+>/;
var linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g;
var linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/;
var bracketsMatcher = /[()]/g;
var defaultModifiers = {
  'upper': function (str) { return str.toLocaleUpperCase(); },
  'lower': function (str) { return str.toLocaleLowerCase(); }
};

var defaultFormatter = new BaseFormatter();

var VueI18n = function VueI18n (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #290
  /* istanbul ignore if */
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  var locale = options.locale || 'en-US';
  var fallbackLocale = options.fallbackLocale || 'en-US';
  var messages = options.messages || {};
  var dateTimeFormats = options.dateTimeFormats || {};
  var numberFormats = options.numberFormats || {};

  this._vm = null;
  this._formatter = options.formatter || defaultFormatter;
  this._modifiers = options.modifiers || {};
  this._missing = options.missing || null;
  this._root = options.root || null;
  this._sync = options.sync === undefined ? true : !!options.sync;
  this._fallbackRoot = options.fallbackRoot === undefined
    ? true
    : !!options.fallbackRoot;
  this._formatFallbackMessages = options.formatFallbackMessages === undefined
    ? false
    : !!options.formatFallbackMessages;
  this._silentTranslationWarn = options.silentTranslationWarn === undefined
    ? false
    : options.silentTranslationWarn;
  this._silentFallbackWarn = options.silentFallbackWarn === undefined
    ? false
    : !!options.silentFallbackWarn;
  this._dateTimeFormatters = {};
  this._numberFormatters = {};
  this._path = new I18nPath();
  this._dataListeners = [];
  this._preserveDirectiveContent = options.preserveDirectiveContent === undefined
    ? false
    : !!options.preserveDirectiveContent;
  this.pluralizationRules = options.pluralizationRules || {};
  this._warnHtmlInMessage = options.warnHtmlInMessage || 'off';

  this._exist = function (message, key) {
    if (!message || !key) { return false }
    if (!isNull(this$1._path.getPathValue(message, key))) { return true }
    // fallback for flat key
    if (message[key]) { return true }
    return false
  };

  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }

  this._initVM({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    dateTimeFormats: dateTimeFormats,
    numberFormats: numberFormats
  });
};

var prototypeAccessors = { vm: { configurable: true },messages: { configurable: true },dateTimeFormats: { configurable: true },numberFormats: { configurable: true },availableLocales: { configurable: true },locale: { configurable: true },fallbackLocale: { configurable: true },formatFallbackMessages: { configurable: true },missing: { configurable: true },formatter: { configurable: true },silentTranslationWarn: { configurable: true },silentFallbackWarn: { configurable: true },preserveDirectiveContent: { configurable: true },warnHtmlInMessage: { configurable: true } };

VueI18n.prototype._checkLocaleMessage = function _checkLocaleMessage (locale, level, message) {
  var paths = [];

  var fn = function (level, locale, message, paths) {
    if (isPlainObject(message)) {
      Object.keys(message).forEach(function (key) {
        var val = message[key];
        if (isPlainObject(val)) {
          paths.push(key);
          paths.push('.');
          fn(level, locale, val, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(key);
          fn(level, locale, val, paths);
          paths.pop();
        }
      });
    } else if (Array.isArray(message)) {
      message.forEach(function (item, index) {
        if (isPlainObject(item)) {
          paths.push(("[" + index + "]"));
          paths.push('.');
          fn(level, locale, item, paths);
          paths.pop();
          paths.pop();
        } else {
          paths.push(("[" + index + "]"));
          fn(level, locale, item, paths);
          paths.pop();
        }
      });
    } else if (typeof message === 'string') {
      var ret = htmlTagMatcher.test(message);
      if (ret) {
        var msg = "Detected HTML in message '" + message + "' of keypath '" + (paths.join('')) + "' at '" + locale + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
        if (level === 'warn') {
          warn(msg);
        } else if (level === 'error') {
          error(msg);
        }
      }
    }
  };

  fn(level, locale, message, paths);
};

VueI18n.prototype._initVM = function _initVM (data) {
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  this._vm = new Vue({ data: data });
  Vue.config.silent = silent;
};

VueI18n.prototype.destroyVM = function destroyVM () {
  this._vm.$destroy();
};

VueI18n.prototype.subscribeDataChanging = function subscribeDataChanging (vm) {
  this._dataListeners.push(vm);
};

VueI18n.prototype.unsubscribeDataChanging = function unsubscribeDataChanging (vm) {
  remove(this._dataListeners, vm);
};

VueI18n.prototype.watchI18nData = function watchI18nData () {
  var self = this;
  return this._vm.$watch('$data', function () {
    var i = self._dataListeners.length;
    while (i--) {
      Vue.nextTick(function () {
        self._dataListeners[i] && self._dataListeners[i].$forceUpdate();
      });
    }
  }, { deep: true })
};

VueI18n.prototype.watchLocale = function watchLocale () {
  /* istanbul ignore if */
  if (!this._sync || !this._root) { return null }
  var target = this._vm;
  return this._root.$i18n.vm.$watch('locale', function (val) {
    target.$set(target, 'locale', val);
    target.$forceUpdate();
  }, { immediate: true })
};

prototypeAccessors.vm.get = function () { return this._vm };

prototypeAccessors.messages.get = function () { return looseClone(this._getMessages()) };
prototypeAccessors.dateTimeFormats.get = function () { return looseClone(this._getDateTimeFormats()) };
prototypeAccessors.numberFormats.get = function () { return looseClone(this._getNumberFormats()) };
prototypeAccessors.availableLocales.get = function () { return Object.keys(this.messages).sort() };

prototypeAccessors.locale.get = function () { return this._vm.locale };
prototypeAccessors.locale.set = function (locale) {
  this._vm.$set(this._vm, 'locale', locale);
};

prototypeAccessors.fallbackLocale.get = function () { return this._vm.fallbackLocale };
prototypeAccessors.fallbackLocale.set = function (locale) {
  this._vm.$set(this._vm, 'fallbackLocale', locale);
};

prototypeAccessors.formatFallbackMessages.get = function () { return this._formatFallbackMessages };
prototypeAccessors.formatFallbackMessages.set = function (fallback) { this._formatFallbackMessages = fallback; };

prototypeAccessors.missing.get = function () { return this._missing };
prototypeAccessors.missing.set = function (handler) { this._missing = handler; };

prototypeAccessors.formatter.get = function () { return this._formatter };
prototypeAccessors.formatter.set = function (formatter) { this._formatter = formatter; };

prototypeAccessors.silentTranslationWarn.get = function () { return this._silentTranslationWarn };
prototypeAccessors.silentTranslationWarn.set = function (silent) { this._silentTranslationWarn = silent; };

prototypeAccessors.silentFallbackWarn.get = function () { return this._silentFallbackWarn };
prototypeAccessors.silentFallbackWarn.set = function (silent) { this._silentFallbackWarn = silent; };

prototypeAccessors.preserveDirectiveContent.get = function () { return this._preserveDirectiveContent };
prototypeAccessors.preserveDirectiveContent.set = function (preserve) { this._preserveDirectiveContent = preserve; };

prototypeAccessors.warnHtmlInMessage.get = function () { return this._warnHtmlInMessage };
prototypeAccessors.warnHtmlInMessage.set = function (level) {
    var this$1 = this;

  var orgLevel = this._warnHtmlInMessage;
  this._warnHtmlInMessage = level;
  if (orgLevel !== level && (level === 'warn' || level === 'error')) {
    var messages = this._getMessages();
    Object.keys(messages).forEach(function (locale) {
      this$1._checkLocaleMessage(locale, this$1._warnHtmlInMessage, messages[locale]);
    });
  }
};

VueI18n.prototype._getMessages = function _getMessages () { return this._vm.messages };
VueI18n.prototype._getDateTimeFormats = function _getDateTimeFormats () { return this._vm.dateTimeFormats };
VueI18n.prototype._getNumberFormats = function _getNumberFormats () { return this._vm.numberFormats };

VueI18n.prototype._warnDefault = function _warnDefault (locale, key, result, vm, values, interpolateMode) {
  if (!isNull(result)) { return result }
  if (this._missing) {
    var missingRet = this._missing.apply(null, [locale, key, vm, values]);
    if (typeof missingRet === 'string') {
      return missingRet
    }
  } else {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(
        "Cannot translate the value of keypath '" + key + "'. " +
        'Use the value of keypath as default.'
      );
    }
  }

  if (this._formatFallbackMessages) {
    var parsedArgs = parseArgs.apply(void 0, values);
    return this._render(key, interpolateMode, parsedArgs.params, key)
  } else {
    return key
  }
};

VueI18n.prototype._isFallbackRoot = function _isFallbackRoot (val) {
  return !val && !isNull(this._root) && this._fallbackRoot
};

VueI18n.prototype._isSilentFallbackWarn = function _isSilentFallbackWarn (key) {
  return this._silentFallbackWarn instanceof RegExp
    ? this._silentFallbackWarn.test(key)
    : this._silentFallbackWarn
};

VueI18n.prototype._isSilentFallback = function _isSilentFallback (locale, key) {
  return this._isSilentFallbackWarn(key) && (this._isFallbackRoot() || locale !== this.fallbackLocale)
};

VueI18n.prototype._isSilentTranslationWarn = function _isSilentTranslationWarn (key) {
  return this._silentTranslationWarn instanceof RegExp
    ? this._silentTranslationWarn.test(key)
    : this._silentTranslationWarn
};

VueI18n.prototype._interpolate = function _interpolate (
  locale,
  message,
  key,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  if (!message) { return null }

  var pathRet = this._path.getPathValue(message, key);
  if (Array.isArray(pathRet) || isPlainObject(pathRet)) { return pathRet }

  var ret;
  if (isNull(pathRet)) {
    /* istanbul ignore else */
    if (isPlainObject(message)) {
      ret = message[key];
      if (typeof ret !== 'string') {
        if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
          warn(("Value of key '" + key + "' is not a string!"));
        }
        return null
      }
    } else {
      return null
    }
  } else {
    /* istanbul ignore else */
    if (typeof pathRet === 'string') {
      ret = pathRet;
    } else {
      if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallback(locale, key)) {
        warn(("Value of key '" + key + "' is not a string!"));
      }
      return null
    }
  }

  // Check for the existence of links within the translated string
  if (ret.indexOf('@:') >= 0 || ret.indexOf('@.') >= 0) {
    ret = this._link(locale, message, ret, host, 'raw', values, visitedLinkStack);
  }

  return this._render(ret, interpolateMode, values, key)
};

VueI18n.prototype._link = function _link (
  locale,
  message,
  str,
  host,
  interpolateMode,
  values,
  visitedLinkStack
) {
  var ret = str;

  // Match all the links within the local
  // We are going to replace each of
  // them with its translation
  var matches = ret.match(linkKeyMatcher);
  for (var idx in matches) {
    // ie compatible: filter custom array
    // prototype method
    if (!matches.hasOwnProperty(idx)) {
      continue
    }
    var link = matches[idx];
    var linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
    var linkPrefix = linkKeyPrefixMatches[0];
      var formatterName = linkKeyPrefixMatches[1];

    // Remove the leading @:, @.case: and the brackets
    var linkPlaceholder = link.replace(linkPrefix, '').replace(bracketsMatcher, '');

    if (visitedLinkStack.includes(linkPlaceholder)) {
      if (true) {
        warn(("Circular reference found. \"" + link + "\" is already visited in the chain of " + (visitedLinkStack.reverse().join(' <- '))));
      }
      return ret
    }
    visitedLinkStack.push(linkPlaceholder);

    // Translate the link
    var translated = this._interpolate(
      locale, message, linkPlaceholder, host,
      interpolateMode === 'raw' ? 'string' : interpolateMode,
      interpolateMode === 'raw' ? undefined : values,
      visitedLinkStack
    );

    if (this._isFallbackRoot(translated)) {
      if ( true && !this._isSilentTranslationWarn(linkPlaceholder)) {
        warn(("Fall back to translate the link placeholder '" + linkPlaceholder + "' with root locale."));
      }
      /* istanbul ignore if */
      if (!this._root) { throw Error('unexpected error') }
      var root = this._root.$i18n;
      translated = root._translate(
        root._getMessages(), root.locale, root.fallbackLocale,
        linkPlaceholder, host, interpolateMode, values
      );
    }
    translated = this._warnDefault(
      locale, linkPlaceholder, translated, host,
      Array.isArray(values) ? values : [values],
      interpolateMode
    );

    if (this._modifiers.hasOwnProperty(formatterName)) {
      translated = this._modifiers[formatterName](translated);
    } else if (defaultModifiers.hasOwnProperty(formatterName)) {
      translated = defaultModifiers[formatterName](translated);
    }

    visitedLinkStack.pop();

    // Replace the link with the translated
    ret = !translated ? ret : ret.replace(link, translated);
  }

  return ret
};

VueI18n.prototype._render = function _render (message, interpolateMode, values, path) {
  var ret = this._formatter.interpolate(message, values, path);

  // If the custom formatter refuses to work - apply the default one
  if (!ret) {
    ret = defaultFormatter.interpolate(message, values, path);
  }

  // if interpolateMode is **not** 'string' ('row'),
  // return the compiled data (e.g. ['foo', VNode, 'bar']) with formatter
  return interpolateMode === 'string' ? ret.join('') : ret
};

VueI18n.prototype._translate = function _translate (
  messages,
  locale,
  fallback,
  key,
  host,
  interpolateMode,
  args
) {
  var res =
    this._interpolate(locale, messages[locale], key, host, interpolateMode, args, [key]);
  if (!isNull(res)) { return res }

  res = this._interpolate(fallback, messages[fallback], key, host, interpolateMode, args, [key]);
  if (!isNull(res)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to translate the keypath '" + key + "' with '" + fallback + "' locale."));
    }
    return res
  } else {
    return null
  }
};

VueI18n.prototype._t = function _t (key, _locale, messages, host) {
    var ref;

    var values = [], len = arguments.length - 4;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 4 ];
  if (!key) { return '' }

  var parsedArgs = parseArgs.apply(void 0, values);
  var locale = parsedArgs.locale || _locale;

  var ret = this._translate(
    messages, locale, this.fallbackLocale, key,
    host, 'string', parsedArgs.params
  );
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to translate the keypath '" + key + "' with root locale."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return (ref = this._root).$t.apply(ref, [ key ].concat( values ))
  } else {
    return this._warnDefault(locale, key, ret, host, values, 'string')
  }
};

VueI18n.prototype.t = function t (key) {
    var ref;

    var values = [], len = arguments.length - 1;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];
  return (ref = this)._t.apply(ref, [ key, this.locale, this._getMessages(), null ].concat( values ))
};

VueI18n.prototype._i = function _i (key, locale, messages, host, values) {
  var ret =
    this._translate(messages, locale, this.fallbackLocale, key, host, 'raw', values);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to interpolate the keypath '" + key + "' with root locale."));
    }
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.i(key, locale, values)
  } else {
    return this._warnDefault(locale, key, ret, host, [values], 'raw')
  }
};

VueI18n.prototype.i = function i (key, locale, values) {
  /* istanbul ignore if */
  if (!key) { return '' }

  if (typeof locale !== 'string') {
    locale = this.locale;
  }

  return this._i(key, locale, this._getMessages(), null, values)
};

VueI18n.prototype._tc = function _tc (
  key,
  _locale,
  messages,
  host,
  choice
) {
    var ref;

    var values = [], len = arguments.length - 5;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 5 ];
  if (!key) { return '' }
  if (choice === undefined) {
    choice = 1;
  }

  var predefined = { 'count': choice, 'n': choice };
  var parsedArgs = parseArgs.apply(void 0, values);
  parsedArgs.params = Object.assign(predefined, parsedArgs.params);
  values = parsedArgs.locale === null ? [parsedArgs.params] : [parsedArgs.locale, parsedArgs.params];
  return this.fetchChoice((ref = this)._t.apply(ref, [ key, _locale, messages, host ].concat( values )), choice)
};

VueI18n.prototype.fetchChoice = function fetchChoice (message, choice) {
  /* istanbul ignore if */
  if (!message && typeof message !== 'string') { return null }
  var choices = message.split('|');

  choice = this.getChoiceIndex(choice, choices.length);
  if (!choices[choice]) { return message }
  return choices[choice].trim()
};

/**
 * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
 * @param choicesLength {number} an overall amount of available choices
 * @returns a final choice index
*/
VueI18n.prototype.getChoiceIndex = function getChoiceIndex (choice, choicesLength) {
  // Default (old) getChoiceIndex implementation - english-compatible
  var defaultImpl = function (_choice, _choicesLength) {
    _choice = Math.abs(_choice);

    if (_choicesLength === 2) {
      return _choice
        ? _choice > 1
          ? 1
          : 0
        : 1
    }

    return _choice ? Math.min(_choice, 2) : 0
  };

  if (this.locale in this.pluralizationRules) {
    return this.pluralizationRules[this.locale].apply(this, [choice, choicesLength])
  } else {
    return defaultImpl(choice, choicesLength)
  }
};

VueI18n.prototype.tc = function tc (key, choice) {
    var ref;

    var values = [], len = arguments.length - 2;
    while ( len-- > 0 ) values[ len ] = arguments[ len + 2 ];
  return (ref = this)._tc.apply(ref, [ key, this.locale, this._getMessages(), null, choice ].concat( values ))
};

VueI18n.prototype._te = function _te (key, locale, messages) {
    var args = [], len = arguments.length - 3;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 3 ];

  var _locale = parseArgs.apply(void 0, args).locale || locale;
  return this._exist(messages[_locale], key)
};

VueI18n.prototype.te = function te (key, locale) {
  return this._te(key, this.locale, this._getMessages(), locale)
};

VueI18n.prototype.getLocaleMessage = function getLocaleMessage (locale) {
  return looseClone(this._vm.messages[locale] || {})
};

VueI18n.prototype.setLocaleMessage = function setLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
    if (this._warnHtmlInMessage === 'error') { return }
  }
  this._vm.$set(this._vm.messages, locale, message);
};

VueI18n.prototype.mergeLocaleMessage = function mergeLocaleMessage (locale, message) {
  if (this._warnHtmlInMessage === 'warn' || this._warnHtmlInMessage === 'error') {
    this._checkLocaleMessage(locale, this._warnHtmlInMessage, message);
    if (this._warnHtmlInMessage === 'error') { return }
  }
  this._vm.$set(this._vm.messages, locale, merge({}, this._vm.messages[locale] || {}, message));
};

VueI18n.prototype.getDateTimeFormat = function getDateTimeFormat (locale) {
  return looseClone(this._vm.dateTimeFormats[locale] || {})
};

VueI18n.prototype.setDateTimeFormat = function setDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, format);
};

VueI18n.prototype.mergeDateTimeFormat = function mergeDateTimeFormat (locale, format) {
  this._vm.$set(this._vm.dateTimeFormats, locale, merge(this._vm.dateTimeFormats[locale] || {}, format));
};

VueI18n.prototype._localizeDateTime = function _localizeDateTime (
  value,
  locale,
  fallback,
  dateTimeFormats,
  key
) {
  var _locale = locale;
  var formats = dateTimeFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to '" + fallback + "' datetime formats from '" + locale + "' datetime formats."));
    }
    _locale = fallback;
    formats = dateTimeFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];
    var id = _locale + "__" + key;
    var formatter = this._dateTimeFormatters[id];
    if (!formatter) {
      formatter = this._dateTimeFormatters[id] = new Intl.DateTimeFormat(_locale, format);
    }
    return formatter.format(value)
  }
};

VueI18n.prototype._d = function _d (value, locale, key) {
  /* istanbul ignore if */
  if ( true && !VueI18n.availabilities.dateTimeFormat) {
    warn('Cannot format a Date value due to not supported Intl.DateTimeFormat.');
    return ''
  }

  if (!key) {
    return new Intl.DateTimeFormat(locale).format(value)
  }

  var ret =
    this._localizeDateTime(value, locale, this.fallbackLocale, this._getDateTimeFormats(), key);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to datetime localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.d(value, key, locale)
  } else {
    return ret || ''
  }
};

VueI18n.prototype.d = function d (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._d(value, locale, key)
};

VueI18n.prototype.getNumberFormat = function getNumberFormat (locale) {
  return looseClone(this._vm.numberFormats[locale] || {})
};

VueI18n.prototype.setNumberFormat = function setNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, format);
};

VueI18n.prototype.mergeNumberFormat = function mergeNumberFormat (locale, format) {
  this._vm.$set(this._vm.numberFormats, locale, merge(this._vm.numberFormats[locale] || {}, format));
};

VueI18n.prototype._getNumberFormatter = function _getNumberFormatter (
  value,
  locale,
  fallback,
  numberFormats,
  key,
  options
) {
  var _locale = locale;
  var formats = numberFormats[_locale];

  // fallback locale
  if (isNull(formats) || isNull(formats[key])) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to '" + fallback + "' number formats from '" + locale + "' number formats."));
    }
    _locale = fallback;
    formats = numberFormats[_locale];
  }

  if (isNull(formats) || isNull(formats[key])) {
    return null
  } else {
    var format = formats[key];

    var formatter;
    if (options) {
      // If options specified - create one time number formatter
      formatter = new Intl.NumberFormat(_locale, Object.assign({}, format, options));
    } else {
      var id = _locale + "__" + key;
      formatter = this._numberFormatters[id];
      if (!formatter) {
        formatter = this._numberFormatters[id] = new Intl.NumberFormat(_locale, format);
      }
    }
    return formatter
  }
};

VueI18n.prototype._n = function _n (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format a Number value due to not supported Intl.NumberFormat.');
    }
    return ''
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.format(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.format(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key) && !this._isSilentFallbackWarn(key)) {
      warn(("Fall back to number localization of root: key '" + key + "'."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n.n(value, Object.assign({}, { key: key, locale: locale }, options))
  } else {
    return ret || ''
  }
};

VueI18n.prototype.n = function n (value) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var locale = this.locale;
  var key = null;
  var options = null;

  if (args.length === 1) {
    if (typeof args[0] === 'string') {
      key = args[0];
    } else if (isObject(args[0])) {
      if (args[0].locale) {
        locale = args[0].locale;
      }
      if (args[0].key) {
        key = args[0].key;
      }

      // Filter out number format options only
      options = Object.keys(args[0]).reduce(function (acc, key) {
          var obj;

        if (numberFormatKeys.includes(key)) {
          return Object.assign({}, acc, ( obj = {}, obj[key] = args[0][key], obj ))
        }
        return acc
      }, null);
    }
  } else if (args.length === 2) {
    if (typeof args[0] === 'string') {
      key = args[0];
    }
    if (typeof args[1] === 'string') {
      locale = args[1];
    }
  }

  return this._n(value, locale, key, options)
};

VueI18n.prototype._ntp = function _ntp (value, locale, key, options) {
  /* istanbul ignore if */
  if (!VueI18n.availabilities.numberFormat) {
    if (true) {
      warn('Cannot format to parts a Number value due to not supported Intl.NumberFormat.');
    }
    return []
  }

  if (!key) {
    var nf = !options ? new Intl.NumberFormat(locale) : new Intl.NumberFormat(locale, options);
    return nf.formatToParts(value)
  }

  var formatter = this._getNumberFormatter(value, locale, this.fallbackLocale, this._getNumberFormats(), key, options);
  var ret = formatter && formatter.formatToParts(value);
  if (this._isFallbackRoot(ret)) {
    if ( true && !this._isSilentTranslationWarn(key)) {
      warn(("Fall back to format number to parts of root: key '" + key + "' ."));
    }
    /* istanbul ignore if */
    if (!this._root) { throw Error('unexpected error') }
    return this._root.$i18n._ntp(value, locale, key, options)
  } else {
    return ret || []
  }
};

Object.defineProperties( VueI18n.prototype, prototypeAccessors );

var availabilities;
// $FlowFixMe
Object.defineProperty(VueI18n, 'availabilities', {
  get: function get () {
    if (!availabilities) {
      var intlDefined = typeof Intl !== 'undefined';
      availabilities = {
        dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== 'undefined',
        numberFormat: intlDefined && typeof Intl.NumberFormat !== 'undefined'
      };
    }

    return availabilities
  }
});

VueI18n.install = install;
VueI18n.version = '8.15.4';

/* harmony default export */ __webpack_exports__["default"] = (VueI18n);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vue-flux", {
    ref: "slider",
    staticStyle: { height: "30rem" },
    attrs: {
      options: _vm.vfOptions,
      images: _vm.vfImages,
      transitions: _vm.vfTransitions,
      captions: _vm.vfCaptions
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CookiesSection.vue?vue&type=template&id=39ca7581&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CookiesSection.vue?vue&type=template&id=39ca7581& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "vue-tailwind-modal",
        {
          attrs: { showing: _vm.visible },
          on: {
            close: function($event) {
              _vm.visible = false
            }
          }
        },
        [_c("h1", [_vm._v("Hello!!!")])]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-full" }, [
        _c(
          "form",
          {
            staticClass: "bg-white rounded mt-4 mb-4",
            attrs: { method: "GET", role: "search" }
          },
          [
            _c("input", {
              attrs: { type: "hidden", name: "_token" },
              domProps: { value: _vm.csrf }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "row-auto mb-4 flex" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.search,
                    expression: "form.search"
                  }
                ],
                staticClass:
                  "shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight",
                attrs: {
                  id: "search",
                  type: "text",
                  name: "search",
                  placeholder: _vm.$t("cookies_form.search_cookies")
                },
                domProps: { value: _vm.form.search },
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    $event.preventDefault()
                    return _vm.getCookies($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "search", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline",
                  attrs: { type: "button" },
                  on: { click: _vm.getCookies }
                },
                [
                  _c(
                    "svg",
                    {
                      staticStyle: { width: "24px", height: "24px" },
                      attrs: { viewBox: "0 0 24 24" }
                    },
                    [
                      _c("path", {
                        attrs: {
                          fill: "currentColor",
                          d:
                            "M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {},
        [
          _c("table", { staticClass: "w-full table-auto mb-4 mt-4" }, [
            _c("thead", [
              _c("tr", [
                _c("th", { staticClass: "px-4 py-2 bg-red text-white" }, [
                  _vm._v(_vm._s(_vm.$t("cookies_table.name")))
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "px-4 py-2 bg-red text-white" }, [
                  _vm._v(_vm._s(_vm.$t("cookies_table.weight")))
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "px-4 py-2 bg-red text-white" }, [
                  _vm._v(_vm._s(_vm.$t("cookies_table.calories")))
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.cookies.data, function(cookie) {
                return _c(
                  "tr",
                  {
                    staticClass: "alternate-color hover:bg-gray",
                    on: { click: _vm.show }
                  },
                  [
                    _c("td", { staticClass: "px-4 py-2" }, [
                      _vm._v(_vm._s(cookie.name))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center px-4 py-2" }, [
                      _vm._v(_vm._s(cookie.weight))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center px-4 py-2" }, [
                      _vm._v(_vm._s(cookie.calories))
                    ])
                  ]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("pagination", {
            attrs: { data: _vm.cookies, limit: _vm.limit },
            on: { "pagination-change-page": _vm.getCookies }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "header",
    {
      staticClass:
        "bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 bg-orange"
    },
    [
      _c(
        "div",
        { staticClass: "flex items-center justify-between px-4 py-3 sm:p-0" },
        [
          _c(
            "div",
            { staticClass: "flex items-center flex-shrink-0 text-white mr-6" },
            [
              _c("a", { staticClass: "flex", attrs: { href: "/" } }, [
                _c(
                  "svg",
                  {
                    staticClass: "fill-current h-8 w-8 mr-2",
                    attrs: {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      xmlns: "http://www.w3.org/2000/svg"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        fill: "currentColor",
                        d:
                          "M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12C21,11.5 20.96,11 20.87,10.5C20.6,10 20,10 20,10H18V9C18,8 17,8 17,8H15V7C15,6 14,6 14,6H13V4C13,3 12,3 12,3M9.5,6A1.5,1.5 0 0,1 11,7.5A1.5,1.5 0 0,1 9.5,9A1.5,1.5 0 0,1 8,7.5A1.5,1.5 0 0,1 9.5,6M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M11.5,11A1.5,1.5 0 0,1 13,12.5A1.5,1.5 0 0,1 11.5,14A1.5,1.5 0 0,1 10,12.5A1.5,1.5 0 0,1 11.5,11M16.5,13A1.5,1.5 0 0,1 18,14.5A1.5,1.5 0 0,1 16.5,16H16.5A1.5,1.5 0 0,1 15,14.5H15A1.5,1.5 0 0,1 16.5,13M11,16A1.5,1.5 0 0,1 12.5,17.5A1.5,1.5 0 0,1 11,19A1.5,1.5 0 0,1 9.5,17.5A1.5,1.5 0 0,1 11,16Z"
                      }
                    })
                  ]
                ),
                _c(
                  "span",
                  { staticClass: "font-semibold text-xl tracking-tight" },
                  [_vm._v("Cookies Shop")]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "sm:hidden" }, [
            _c(
              "button",
              {
                staticClass:
                  "block hover:text-white hover:border-white focus:text-white focus:outline-none",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    _vm.isOpen = !_vm.isOpen
                  }
                }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "h-6 w-6 fill-current",
                    attrs: { viewBox: "0 0 24 24" }
                  },
                  [
                    _vm.isOpen
                      ? _c("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            d:
                              "M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.isOpen
                      ? _c("path", {
                          attrs: {
                            "fill-rule": "evenodd",
                            d:
                              "M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                          }
                        })
                      : _vm._e()
                  ]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "nav",
        {
          staticClass: "px-2 pt-2 pb-4 sm:flex sm:p-0 bg-orange",
          class: _vm.isOpen ? "block" : "hidden"
        },
        [
          _c(
            "a",
            {
              staticClass:
                "block px-2 py-1 text-white rounded hover:bg-red-40 ",
              attrs: { href: "/cookies" }
            },
            [_vm._v(_vm._s(_vm.cookies))]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "block px-2 py-1 text-white rounded hover:bg-red-40 ",
              attrs: { href: "/ingredients" }
            },
            [_vm._v(_vm._s(_vm.ingredients))]
          ),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "block px-2 py-1 text-white rounded hover:bg-red-40 ",
        attrs: { href: "/en" }
      },
      [_c("span", { staticClass: "flag-icon flag-icon-gb" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "block px-2 py-1 text-white rounded hover:bg-red-40 ",
        attrs: { href: "/it" }
      },
      [_c("span", { staticClass: "flag-icon flag-icon-it" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-resource/dist/vue-resource.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-resource/dist/vue-resource.esm.js ***!
  \************************************************************/
/*! exports provided: default, Url, Http, Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return Resource; });
/*!
 * vue-resource v1.5.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise$1.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p$1 = PromiseObj.prototype;

p$1.bind = function (context) {
    this.context = context;
    return this;
};

p$1.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p$1.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p$1.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return Promise.reject(reason);
    }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;
var ref$1 = [];
var slice = ref$1.slice;
var debug = false, ntick;

var inBrowser = typeof window !== 'undefined';

function Util (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

function root (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
}

/**
 * Query Parameter Transform.
 */

function query (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^{}]+)\}|([^{}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

function template (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

function xdrClient (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
                var type = ref.type;


                var status = 0;

                if (type === 'load') {
                    status = 200;
                } else if (type === 'error') {
                    status = 500;
                }

                resolve(request.respondWith(xdr.responseText, {status: status}));
            };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

function cors (request) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

}

/**
 * Form data Interceptor.
 */

function form (request) {

    if (isFormData(request.body)) {
        request.headers.delete('Content-Type');
    } else if (isObject(request.body) && request.emulateJSON) {
        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

}

/**
 * JSON Interceptor.
 */

function json (request) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    return function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    };
}

function isJson(str) {

    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};

    return start && end[start[1]].test(str);
}

/**
 * JSONP client (Browser).
 */

function jsonpClient (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

/**
 * JSONP Interceptor.
 */

function jsonp (request) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

}

/**
 * Before Interceptor.
 */

function before (request) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

}

/**
 * HTTP method override Interceptor.
 */

function method (request) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

}

/**
 * Header Interceptor.
 */

function header (request) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

}

/**
 * XMLHttp client (Browser).
 */

function xhrClient (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

                var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                });

                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                });

                resolve(response);
            };

        request.abort = function () { return xhr.abort(); };

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        // deprecated use downloadProgress
        if (isFunction(request.progress) && request.method === 'GET') {
            xhr.addEventListener('progress', request.progress);
        }

        if (isFunction(request.downloadProgress)) {
            xhr.addEventListener('progress', request.downloadProgress);
        }

        // deprecated use uploadProgress
        if (isFunction(request.progress) && /^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress);
        }

        if (isFunction(request.uploadProgress) && xhr.upload) {
            xhr.upload.addEventListener('progress', request.uploadProgress);
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
}

/**
 * Http client (Node).
 */

function nodeClient (request) {

    var client = __webpack_require__(/*! got */ 1);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                status: resp.statusCode,
                statusText: trim(resp.statusMessage)
            });

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
}

/**
 * Base client.
 */

function Client (context) {

    var reqHandlers = [sendRequest], resHandlers = [];

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        while (reqHandlers.length) {

            var handler = reqHandlers.pop();

            if (isFunction(handler)) {

                var response = (void 0), next = (void 0);

                response = handler.call(context, request, function (val) { return next = val; }) || next;

                if (isObject(response)) {
                    return new PromiseObj(function (resolve, reject) {

                        resHandlers.forEach(function (handler) {
                            response = when(response, function (response) {
                                return handler.call(context, response) || response;
                            }, reject);
                        });

                        when(response, resolve, reject);

                    }, context);
                }

                if (isFunction(response)) {
                    resHandlers.unshift(response);
                }

            } else {
                warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
            }
        }
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    return client(request);
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value) {

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name) {
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll () {
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl () {
    return Url(this);
};

Request.prototype.getBody = function getBody () {
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (plugin);



/***/ }),

/***/ "./node_modules/vue-tailwind-modal/dist/vue-tailwind-modal.common.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-tailwind-modal/dist/vue-tailwind-modal.common.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "aed7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueTailwindModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("be30");
/* harmony import */ var _node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueTailwindModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueTailwindModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_cli_service_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_vue_cli_service_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueTailwindModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "be30":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"a83b06cc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueTailwindModal.vue?vue&type=template&id=eaeb5c4e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Transition',{attrs:{"name":"fade"}},[(_vm.showing)?_c('div',{staticClass:"fixed inset-0 w-full h-screen flex items-center justify-center bg-smoke-800",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.close($event)}}},[_c('div',{staticClass:"relative max-h-screen w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 flex"},[_c('button',{staticClass:"absolute top-0 right-0 text-xl text-gray-500 my-2 mx-4",attrs:{"aria-label":"close"},on:{"click":function($event){$event.preventDefault();return _vm.close($event)}}},[_vm._v("\n        ×\n      ")]),_c('div',{staticClass:"overflow-auto max-h-screen w-full"},[_vm._t("default")],2)])]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/VueTailwindModal.vue?vue&type=template&id=eaeb5c4e&

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-service/node_modules/thread-loader/dist/cjs.js!./node_modules/@vue/cli-plugin-babel/node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/VueTailwindModal.vue?vue&type=script&lang=js&
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
/* harmony default export */ var VueTailwindModalvue_type_script_lang_js_ = ({
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  watch: {
    showing: function showing(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden');
      }

      document.querySelector('body').classList.remove('overflow-hidden');
    }
  },
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./src/VueTailwindModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VueTailwindModalvue_type_script_lang_js_ = (VueTailwindModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/VueTailwindModal.vue?vue&type=style&index=0&lang=css&
var VueTailwindModalvue_type_style_index_0_lang_css_ = __webpack_require__("aed7");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/VueTailwindModal.vue






/* normalize component */

var component = normalizeComponent(
  src_VueTailwindModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VueTailwindModal = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (VueTailwindModal);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vue-tailwind-modal.common.js.map

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flag_icon_css_css_flag_icon_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flag-icon-css/css/flag-icon.css */ "./node_modules/flag-icon-css/css/flag-icon.css");
/* harmony import */ var flag_icon_css_css_flag_icon_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flag_icon_css_css_flag_icon_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
/* harmony import */ var _vue_i18n_locales_generated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue-i18n-locales.generated */ "./resources/js/vue-i18n-locales.generated.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// require('./bootstrap');
// require('./welcome');




window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

vue__WEBPACK_IMPORTED_MODULE_3___default.a.component('carousel', __webpack_require__(/*! ./components/Carousel.vue */ "./resources/js/components/Carousel.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_3___default.a.component('navbar', __webpack_require__(/*! ./components/Navbar.vue */ "./resources/js/components/Navbar.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_3___default.a.component('cookies-section', __webpack_require__(/*! ./components/CookiesSection.vue */ "./resources/js/components/CookiesSection.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_3___default.a.component('pagination', __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js"));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//

vue__WEBPACK_IMPORTED_MODULE_3___default.a.use(vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]);
vue__WEBPACK_IMPORTED_MODULE_3___default.a.use(__webpack_require__(/*! vue-resource */ "./node_modules/vue-resource/dist/vue-resource.esm.js"));
var lang = document.documentElement.lang.substr(0, 2);
var i18n = new vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]({
  locale: lang,
  messages: _vue_i18n_locales_generated__WEBPACK_IMPORTED_MODULE_2__["default"]
});
var app = new vue__WEBPACK_IMPORTED_MODULE_3___default.a({
  el: '#app',
  i18n: i18n
});
var header = new vue__WEBPACK_IMPORTED_MODULE_3___default.a({
  el: '#header'
});

/***/ }),

/***/ "./resources/js/components/Carousel.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Carousel.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=fe98726a& */ "./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Carousel.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Carousel.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=fe98726a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Carousel.vue?vue&type=template&id=fe98726a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_fe98726a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/CookiesSection.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/CookiesSection.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CookiesSection_vue_vue_type_template_id_39ca7581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CookiesSection.vue?vue&type=template&id=39ca7581& */ "./resources/js/components/CookiesSection.vue?vue&type=template&id=39ca7581&");
/* harmony import */ var _CookiesSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookiesSection.vue?vue&type=script&lang=js& */ "./resources/js/components/CookiesSection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CookiesSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CookiesSection_vue_vue_type_template_id_39ca7581___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CookiesSection_vue_vue_type_template_id_39ca7581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CookiesSection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CookiesSection.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CookiesSection.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiesSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CookiesSection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CookiesSection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiesSection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CookiesSection.vue?vue&type=template&id=39ca7581&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/CookiesSection.vue?vue&type=template&id=39ca7581& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiesSection_vue_vue_type_template_id_39ca7581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CookiesSection.vue?vue&type=template&id=39ca7581& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CookiesSection.vue?vue&type=template&id=39ca7581&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiesSection_vue_vue_type_template_id_39ca7581___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CookiesSection_vue_vue_type_template_id_39ca7581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b& */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6dde423b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/vue-i18n-locales.generated.js":
/*!****************************************************!*\
  !*** ./resources/js/vue-i18n-locales.generated.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "en": {
    "validation": {
      "accepted": "The {attribute} must be accepted.",
      "active_url": "The {attribute} is not a valid URL.",
      "after": "The {attribute} must be a date after {date}.",
      "after_or_equal": "The {attribute} must be a date after or equal to {date}.",
      "alpha": "The {attribute} may only contain letters.",
      "alpha_dash": "The {attribute} may only contain letters, numbers, dashes and underscores.",
      "alpha_num": "The {attribute} may only contain letters and numbers.",
      "array": "The {attribute} must be an array.",
      "before": "The {attribute} must be a date before {date}.",
      "before_or_equal": "The {attribute} must be a date before or equal to {date}.",
      "between": {
        "numeric": "The {attribute} must be between {min} and {max}.",
        "file": "The {attribute} must be between {min} and {max} kilobytes.",
        "string": "The {attribute} must be between {min} and {max} characters.",
        "array": "The {attribute} must have between {min} and {max} items."
      },
      "boolean": "The {attribute} field must be true or false.",
      "confirmed": "The {attribute} confirmation does not match.",
      "date": "The {attribute} is not a valid date.",
      "date_equals": "The {attribute} must be a date equal to {date}.",
      "date_format": "The {attribute} does not match the format {format}.",
      "different": "The {attribute} and {other} must be different.",
      "digits": "The {attribute} must be {digits} digits.",
      "digits_between": "The {attribute} must be between {min} and {max} digits.",
      "dimensions": "The {attribute} has invalid image dimensions.",
      "distinct": "The {attribute} field has a duplicate value.",
      "email": "The {attribute} must be a valid email address.",
      "ends_with": "The {attribute} must end with one of the following: {values}.",
      "exists": "The selected {attribute} is invalid.",
      "file": "The {attribute} must be a file.",
      "filled": "The {attribute} field must have a value.",
      "gt": {
        "numeric": "The {attribute} must be greater than {value}.",
        "file": "The {attribute} must be greater than {value} kilobytes.",
        "string": "The {attribute} must be greater than {value} characters.",
        "array": "The {attribute} must have more than {value} items."
      },
      "gte": {
        "numeric": "The {attribute} must be greater than or equal {value}.",
        "file": "The {attribute} must be greater than or equal {value} kilobytes.",
        "string": "The {attribute} must be greater than or equal {value} characters.",
        "array": "The {attribute} must have {value} items or more."
      },
      "image": "The {attribute} must be an image.",
      "in": "The selected {attribute} is invalid.",
      "in_array": "The {attribute} field does not exist in {other}.",
      "integer": "The {attribute} must be an integer.",
      "ip": "The {attribute} must be a valid IP address.",
      "ipv4": "The {attribute} must be a valid IPv4 address.",
      "ipv6": "The {attribute} must be a valid IPv6 address.",
      "json": "The {attribute} must be a valid JSON string.",
      "lt": {
        "numeric": "The {attribute} must be less than {value}.",
        "file": "The {attribute} must be less than {value} kilobytes.",
        "string": "The {attribute} must be less than {value} characters.",
        "array": "The {attribute} must have less than {value} items."
      },
      "lte": {
        "numeric": "The {attribute} must be less than or equal {value}.",
        "file": "The {attribute} must be less than or equal {value} kilobytes.",
        "string": "The {attribute} must be less than or equal {value} characters.",
        "array": "The {attribute} must not have more than {value} items."
      },
      "max": {
        "numeric": "The {attribute} may not be greater than {max}.",
        "file": "The {attribute} may not be greater than {max} kilobytes.",
        "string": "The {attribute} may not be greater than {max} characters.",
        "array": "The {attribute} may not have more than {max} items."
      },
      "mimes": "The {attribute} must be a file of type: {values}.",
      "mimetypes": "The {attribute} must be a file of type: {values}.",
      "min": {
        "numeric": "The {attribute} must be at least {min}.",
        "file": "The {attribute} must be at least {min} kilobytes.",
        "string": "The {attribute} must be at least {min} characters.",
        "array": "The {attribute} must have at least {min} items."
      },
      "not_in": "The selected {attribute} is invalid.",
      "not_regex": "The {attribute} format is invalid.",
      "numeric": "The {attribute} must be a number.",
      "password": "The password is incorrect.",
      "present": "The {attribute} field must be present.",
      "regex": "The {attribute} format is invalid.",
      "required": "The {attribute} field is required.",
      "required_if": "The {attribute} field is required when {other} is {value}.",
      "required_unless": "The {attribute} field is required unless {other} is in {values}.",
      "required_with": "The {attribute} field is required when {values} is present.",
      "required_with_all": "The {attribute} field is required when {values} are present.",
      "required_without": "The {attribute} field is required when {values} is not present.",
      "required_without_all": "The {attribute} field is required when none of {values} are present.",
      "same": "The {attribute} and {other} must match.",
      "size": {
        "numeric": "The {attribute} must be {size}.",
        "file": "The {attribute} must be {size} kilobytes.",
        "string": "The {attribute} must be {size} characters.",
        "array": "The {attribute} must contain {size} items."
      },
      "starts_with": "The {attribute} must start with one of the following: {values}.",
      "string": "The {attribute} must be a string.",
      "timezone": "The {attribute} must be a valid zone.",
      "unique": "The {attribute} has already been taken.",
      "uploaded": "The {attribute} failed to upload.",
      "url": "The {attribute} format is invalid.",
      "uuid": "The {attribute} must be a valid UUID.",
      "custom": {
        "attribute-name": {
          "rule-name": "custom-message"
        }
      },
      "attributes": []
    },
    "cookies_table": {
      "name": "Name",
      "weight": "Weight",
      "calories": "Calories"
    },
    "auth": {
      "failed": "These credentials do not match our records.",
      "throttle": "Too many login attempts. Please try again in {seconds} seconds."
    },
    "cookies_form": {
      "search_cookies": "Search cookies..."
    },
    "navbar": {
      "cookies": "Cookies",
      "ingredients": "Ingredients"
    },
    "pagination": {
      "previous": "&laquo; Previous",
      "next": "Next &raquo;"
    },
    "passwords": {
      "reset": "Your password has been reset!",
      "sent": "We have e-mailed your password reset link!",
      "throttled": "Please wait before retrying.",
      "token": "This password reset token is invalid.",
      "user": "We can't find a user with that e-mail address."
    }
  },
  "it": {
    "cookies_table": {
      "name": "Nome",
      "weight": "Peso",
      "calories": "Calorie"
    },
    "cookies_form": {
      "search_cookies": "Cerca biscotti..."
    },
    "navbar": {
      "cookies": "Biscotti",
      "ingredients": "Ingredienti"
    }
  }
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/biagiopietro/PhpstormProjects/CookiesShop/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /home/biagiopietro/PhpstormProjects/CookiesShop/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ }),

/***/ 1:
/*!*********************!*\
  !*** got (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });