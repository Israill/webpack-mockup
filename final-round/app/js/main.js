/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/brands.js":
/*!**********************!*\
  !*** ./js/brands.js ***!
  \**********************/
/***/ (() => {

var itemArray = document.querySelectorAll(".brands-content-item");
var mediaQuery = window.matchMedia("(min-width: 1426px)");

function handleTabletChange(e) {
  var btn = document.getElementById("brands-btn");
  var btnDt = document.getElementById("brands-btn-dt");

  if (e.matches) {
    document.getElementById("button-text-dt").textContent = "Показать все";

    var moreItemsDt = function moreItemsDt() {
      for (var i = 6; i < itemArray.length; i++) {
        itemArray[i].style.display = "block";
      }

      document.getElementById("button-text-dt").textContent = "Скрыть";
      btnDt.removeEventListener("click", moreItemsDt);
      btnDt.addEventListener("click", lessItemsDt);
    };

    var lessItemsDt = function lessItemsDt() {
      document.getElementById("button-text-dt").textContent = "Показать все";

      for (var i = 8; i < itemArray.length; i++) {
        itemArray[i].style.display = "none";
      }

      btnDt.removeEventListener("click", lessItemsDt);
      btnDt.addEventListener("click", moreItemsDt);
    };

    for (var i = 6; i < itemArray.length; i++) {
      itemArray[i].style.display = "none";
    }

    for (var _i = 6; _i < 8; _i++) {
      itemArray[_i].style.display = "block";
    }

    btnDt.addEventListener("click", moreItemsDt);
  } else {
    document.getElementById("button-text").textContent = "Показать все";

    var moreItems = function moreItems() {
      document.getElementById("button-text").textContent = "Скрыть";

      for (var _i2 = 6; _i2 < itemArray.length; _i2++) {
        itemArray[_i2].style.display = "block";
      }

      btnDt.removeEventListener("click", moreItems);
      btn.addEventListener("click", lessItems, {
        once: true
      });
    };

    var lessItems = function lessItems() {
      document.getElementById("button-text").textContent = "Показать все";

      for (var _i3 = 6; _i3 < itemArray.length; _i3++) {
        itemArray[_i3].style.display = "none";
      }

      btnDt.removeEventListener("click", lessItems);
      btn.addEventListener("click", moreItems);
    };

    btn.addEventListener("click", moreItems);

    for (var _i4 = 6; _i4 < itemArray.length; _i4++) {
      itemArray[_i4].style.display = "none";
    }
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

/***/ }),

/***/ "./js/feedback.js":
/*!************************!*\
  !*** ./js/feedback.js ***!
  \************************/
/***/ (() => {

document.getElementById("message").addEventListener("click", function () {
  document.querySelector(".feedback-wrapper").style.display = "block";
  document.querySelector(".feedback-tb").style.display = "block";
  var feedbackItem = document.querySelectorAll(".feedback-form__item");
  feedbackItem[0].style.display = "block";
  feedbackItem[2].style.display = "block";
  feedbackItem[3].style.display = "block";
  document.querySelector(".title--feedback").textContent = "Обратная связь";
});
document.getElementById("message-dt").addEventListener("click", function () {
  document.querySelector(".feedback-wrapper").style.display = "block";
  document.querySelector(".feedback-tb").style.display = "block";
  var feedbackItem = document.querySelectorAll(".feedback-form__item");
  feedbackItem[0].style.display = "block";
  feedbackItem[2].style.display = "block";
  feedbackItem[3].style.display = "block";
  document.querySelector(".title--feedback").textContent = "Обратная связь";
});
document.getElementById("closed-feedback").addEventListener("click", function () {
  document.querySelector(".feedback-wrapper").style.display = "none";
  document.querySelector(".feedback-tb").style.display = "none";
});
document.getElementById("feedback-tb").addEventListener("click", function () {
  document.querySelector(".feedback-wrapper").style.display = "none";
  document.querySelector(".feedback-tb").style.display = "none";
});
document.getElementById("call").addEventListener("click", function () {
  document.querySelector(".feedback-wrapper").style.display = "block";
  document.querySelector(".feedback-tb").style.display = "block";
  var feedbackItem = document.querySelectorAll(".feedback-form__item");
  feedbackItem[0].style.display = "none";
  feedbackItem[2].style.display = "none";
  feedbackItem[3].style.display = "none";
  document.querySelector(".title--feedback").textContent = "Заказать звонок";
});
document.getElementById("call-dt").addEventListener("click", function () {
  document.querySelector(".feedback-wrapper").style.display = "block";
  document.querySelector(".feedback-tb").style.display = "block";
  var feedbackItem = document.querySelectorAll(".feedback-form__item");
  feedbackItem[0].style.display = "none";
  feedbackItem[2].style.display = "none";
  feedbackItem[3].style.display = "none";
  document.querySelector(".title--feedback").textContent = "Заказать звонок";
}); // const mediaQuery = window.matchMedia("(min-width: 1465px)");
// function handleTabletChange(e) {
//   if (e.matches) {
//   }
// }
// mediaQuery.addListener(handleTabletChange);
// handleTabletChange(mediaQuery);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/focus-visible/dist/focus-visible */ "../node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var _node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_focus_visible_dist_focus_visible__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swiper */ "./js/swiper.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.js */ "./js/sidebar.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sidebar_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback.js */ "./js/feedback.js");
/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_feedback_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _technique_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./technique.js */ "./js/technique.js");
/* harmony import */ var _technique_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_technique_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _brands_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./brands.js */ "./js/brands.js");
/* harmony import */ var _brands_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_brands_js__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./js/sidebar.js":
/*!***********************!*\
  !*** ./js/sidebar.js ***!
  \***********************/
/***/ (() => {

document.getElementById("sidebar").addEventListener("click", function () {
  document.querySelector(".sidebar-wrapper").style.display = "block";
  document.querySelector(".sidebar-tb").style.display = "block"; //   document.querySelector(".navbar__item--dt").style.display = "block";
  //   document.querySelector(".navbar__item--line-tb").style.display = "none";
  //   const navbarContainer = document.querySelector(".navbar-container");
  //   const navbarBurger = document.querySelector(".navbar-burger");
  //   const navbarBurgerNav = document.querySelector(".navbar-burger-nav");
  //   navbarContainer.style.display = "flex";
  //   navbarContainer.style.flexDirection = "column";
  //   navbarContainer.style.justifyContent = "space-between";
  //   navbarContainer.style.padding = "0";
  //   navbarContainer.style.border = "none";
  //   navbarContainer.style.height = "100vh";
  //   navbarContainer.style.minHeight = "800px";
  //   navbarBurger.style.padding = "30px 22px"
  //   navbarBurger.style.maxWidth = "360px"
  //   navbarBurger.style.minWidth = "320px"
  //   navbarBurger.style.justifyContent = "space-between"
  //   navbarBurgerNav.style.display = "block"
  //   document.querySelectorAll(".navbar__item")[2].style.display = "none";
  //   document.querySelectorAll(".navbar__item")[3].style.display = "none";
  //   document.querySelectorAll(".navbar__item--mb")[0].style.display = "block";
  //   document.querySelectorAll(".navbar__item--mb")[1].style.display = "block";
  //   document.querySelectorAll(".navbar__item--mb")[2].style.display = "block";
  //   document.querySelector(".navbar__item--line-mb").style.display = "none";
  //   document.querySelector(".mail").style.display = "block";
  //   document.querySelector(".phone-num").style.display = "block";
  //   document.querySelector(".lang").style.display = "block";
  //   document.querySelector(".lang").style.display = "flex";
});
document.getElementById("closed").addEventListener("click", function () {
  document.querySelector(".sidebar-wrapper").style.display = "none";
  document.querySelector(".sidebar-tb").style.display = "none";
});
document.getElementById("sidebar-tb").addEventListener("click", function () {
  document.querySelector(".sidebar-wrapper").style.display = "none";
  document.querySelector(".sidebar-tb").style.display = "none";
});

/***/ }),

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/scss */ "../node_modules/swiper/swiper.scss");
/* harmony import */ var swiper_scss_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/scss/pagination */ "../node_modules/swiper/modules/pagination/pagination.scss");
/* harmony import */ var swiper_scss_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/scss/navigation */ "../node_modules/swiper/modules/navigation/navigation.scss");
var _Swiper;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Swiper styles




var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.swiper', (_Swiper = {
  // Optional parameters
  loop: true,
  spaceBetween: 15,
  effect: "slide",
  speed: 400,
  slidesPerView: "auto",
  // autoplay: {
  //   stopOnLastSlide: true,
  //   delay: 2000,
  // },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  // Navigation arrows
  navigation: {
    clickable: true
  },
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination]
}, _defineProperty(_Swiper, "slidesPerView", "auto"), _defineProperty(_Swiper, "keyboardControl", true), _defineProperty(_Swiper, "paginationClickable", true), _Swiper));

/***/ }),

/***/ "./js/technique.js":
/*!*************************!*\
  !*** ./js/technique.js ***!
  \*************************/
/***/ (() => {

var itemArray = document.querySelectorAll(".technique-content-item");
var mediaQuery = window.matchMedia("(min-width: 1426px)");

function handleTabletChange(e) {
  var btn = document.getElementById("technique-btn");
  var btnDt = document.getElementById("technique-btn-dt");
  var img = document.getElementById("technique-btn__img");
  var imgDt = document.getElementById("technique-btn__img--dt");

  if (e.matches) {
    document.getElementById("technique-btn__text--dt").textContent = "Показать все";

    var moreItemsDt = function moreItemsDt() {
      document.getElementById("technique-btn__text--dt").textContent = "Скрыть";

      for (var i = 8; i < itemArray.length; i++) {
        itemArray[i].style.display = "block";
      }

      btnDt.removeEventListener("click", moreItemsDt);
      btnDt.addEventListener("click", lessItemsDt);
    };

    var lessItemsDt = function lessItemsDt() {
      document.getElementById("technique-btn__text--dt").textContent = "Показать все";

      for (var i = 8; i < itemArray.length; i++) {
        itemArray[i].style.display = "none";
      }

      btnDt.removeEventListener("click", lessItemsDt);
      btnDt.addEventListener("click", moreItemsDt);
    };

    for (var i = 6; i < itemArray.length; i++) {
      itemArray[i].style.display = "none";
    }

    for (var _i = 6; _i < 8; _i++) {
      itemArray[_i].style.display = "block";
    }

    btnDt.addEventListener("click", moreItemsDt);
  } else {
    document.getElementById("technique-btn__text").textContent = "Показать все";

    var moreItems = function moreItems() {
      document.getElementById("technique-btn__text").textContent = "Скрыть";

      for (var _i2 = 6; _i2 < itemArray.length; _i2++) {
        itemArray[_i2].style.display = "block";
      }

      btnDt.removeEventListener("click", moreItems);
      btn.addEventListener("click", lessItems, {
        once: true
      });
    };

    var lessItems = function lessItems() {
      document.getElementById("technique-btn__text").textContent = "Показать все";

      for (var _i3 = 6; _i3 < itemArray.length; _i3++) {
        itemArray[_i3].style.display = "none";
      }

      btnDt.removeEventListener("click", lessItems);
      btn.addEventListener("click", moreItems);
    };

    btn.addEventListener("click", moreItems);

    for (var _i4 = 6; _i4 < itemArray.length; _i4++) {
      itemArray[_i4].style.display = "none";
    }
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ "./assets/favicon.ico"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mobileImg/burgerclose.svg */ "./img/mobileImg/burgerclose.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mobileImg/Groupcps.svg */ "./img/mobileImg/Groupcps.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mobileImg/searchsearch.svg */ "./img/mobileImg/searchsearch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/navbar/call.svg */ "./img/navbar/call.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/navbar/chat.svg */ "./img/navbar/chat.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/navbar/profile.svg */ "./img/navbar/profile.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/goside.svg */ "./img/swiper/goside.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mobileImg/burgerburger.svg */ "./img/mobileImg/burgerburger.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mobileImg/repairremont.svg */ "./img/mobileImg/repairremont.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mobileImg/checkstatus.svg */ "./img/mobileImg/checkstatus.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/mobileImg/expand.svg */ "./img/mobileImg/expand.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Picture CopybigCPS.png */ "./img/Picture CopybigCPS.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapLenovo.svg */ "./img/swiper/BitmapLenovo.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/goline.svg */ "./img/swiper/goline.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapSamsung.svg */ "./img/swiper/BitmapSamsung.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapApple.svg */ "./img/swiper/BitmapApple.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapViewSonic.svg */ "./img/swiper/BitmapViewSonic.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapBosch.svg */ "./img/swiper/BitmapBosch.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapHP.svg */ "./img/swiper/BitmapHP.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapAcer.svg */ "./img/swiper/BitmapAcer.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ./img/swiper/BitmapSony.svg */ "./img/swiper/BitmapSony.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ./img/more.svg */ "./img/more.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_21___);
var ___HTML_LOADER_REPLACEMENT_22___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_22___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\" />\n    <title>final-mockup</title>\n  </head>\n  <body>\n    <div class=\"wrapper\">\n\n      <div class=\"sidebar-wrapper\">\n        <div class=\"sidebar\">\n          <div class=\"navbar-container-sidebar\">\n            <div class=\"navbar-burger\">\n              <img\n                id=\"closed\"\n                class=\"navbar__item\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\"\n                alt=\"burger\"\n              />\n              <img\n                class=\"navbar__item\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n                alt=\"cps\"\n              />\n            </div>\n            <div class=\"navbar-services-wrapper\">\n              <img\n                class=\"navbar__item\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n                alt=\"search\"\n              />\n            </div>\n          </div>\n\n          <div class=\"navbar-burger-nav\">\n            <ul class=\"nav\">\n              <li><a class=\"nav__item\" href=\"#\">Ремонт техники</a></li>\n              <li><a class=\"nav__item\" href=\"#\">Услуги и сервисы</a></li>\n              <li>\n                <a class=\"nav__item\" href=\"#\">Корпоративным клиентам</a>\n              </li>\n              <li><a class=\"nav__item\" href=\"#\">Продавцам техники</a></li>\n              <li><a class=\"nav__item\" href=\"#\">Партнерам</a></li>\n              <li><a class=\"nav__item\" href=\"#\">Производителям</a></li>\n              <li>\n                <a class=\"nav__item\" href=\"#\">Наши сервисные центры</a>\n              </li>\n              <li><a class=\"nav__item\" href=\"#\">Контакты</a></li>\n            </ul>\n          </div>\n\n          <div class=\"navbar-services-wrapper-sidebar\">\n            <div class=\"navbar-services\">\n              <img\n              id=\"call\"\n                class=\"navbar__item--mb\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n                alt=\"\"\n              />\n              <img\n              id=\"message\"\n                class=\"navbar__item--mb\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n                alt=\"\"\n              />\n              <img\n                class=\"navbar__item--mb\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                alt=\"\"\n              />\n            </div>\n            <div class=\"mail\">\n              <a href=\"mail@cps.com\">mail@cps.com</a>\n            </div>\n            <div class=\"phone-num\">\n              <a href=\"”tel:+78008908900”\">8 800 890 8900</a>\n            </div>\n            <div>\n              <ul class=\"lang\">\n                <li class=\"lang__item\">RU</li>\n                <li class=\"lang__item\">EN</li>\n                <li class=\"lang__item\">CH</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div id=\"sidebar-tb\" class=\"sidebar-tb\"></div>\n\n      <div class=\"feedback-wrapper\">\n        <div class=\"closed-feedback\">\n          <img id=\"closed-feedback\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n        </div>\n        <div id=\"feedback\" class=\"feedback\">\n          <div class=\"title\">\n            <h1 class=\"title--feedback\"></h1>\n          </div>\n          <form class=\"feedback-form\">\n            <div class=\"feedback-form-block\">\n              <div class=\"feedback-form__item\">\n                <input placeholder=\"Имя\" type=\"text\" name=\"username\" required />\n              </div>\n              <div class=\"feedback-form__item\">\n                <input\n                  placeholder=\"Телефон\"\n                  type=\"text\"\n                  name=\"usernumber\"\n                  required\n                />\n              </div>\n              <div class=\"feedback-form__item\">\n                <input\n                  placeholder=\"Электронная почта\"\n                  type=\"text\"\n                  name=\"usermail\"\n                />\n              </div>\n              <div class=\"feedback-form__item\">\n                <textarea placeholder=\"Сообщение\" name=\"usermessage\" ></textarea>\n              </div>\n              <div class=\"feedback-form__item\">\n                <p>Нажимая “отправить”, вы даете согласие на <span> обработку персональных данных </span> и соглашаетесь с нашей <span> политикой конфиденциальности</span></p>\n              </div>\n\n              <div class=\"feedback-form__item\">\n                <button>\n                  ОТПРАВИТЬ\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                </button>\n              </div>\n              </div>\n            </div>\n          </form>\n      </div>\n\n      <div class=\"feedback-tb\" id=\"feedback-tb\"></div>\n\n      <header class=\"navbar\">\n        <div class=\"navbar-container\">\n          <div class=\"navbar-burger-wrapper\">\n            <div class=\"navbar-burger\">\n              <img\n                id=\"sidebar\"\n                class=\"navbar__item\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\"\n                alt=\"burger\"\n              />\n              <div class=\"navbar__item--line-tb\"></div>\n              <img\n                class=\"navbar__item\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\"\n                alt=\"cps\"\n              />\n              <img\n                class=\"navbar__item--dt\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\"\n                alt=\"\"\n              />\n            </div>\n\n            <div class=\"navbar-burger-nav-wrapper\">\n              <div class=\"navbar-burger-nav\">\n                <ul class=\"nav\">\n                  <li><a class=\"nav__item\" href=\"#\">Ремонт техники</a></li>\n                  <li><a class=\"nav__item\" href=\"#\">Услуги и сервисы</a></li>\n                  <li>\n                    <a class=\"nav__item\" href=\"#\">Корпоративным клиентам</a>\n                  </li>\n                  <li><a class=\"nav__item\" href=\"#\">Продавцам техники</a></li>\n                  <li><a class=\"nav__item\" href=\"#\">Партнерам</a></li>\n                  <li><a class=\"nav__item\" href=\"#\">Производителям</a></li>\n                  <li>\n                    <a class=\"nav__item\" href=\"#\">Наши сервисные центры</a>\n                  </li>\n                  <li><a class=\"nav__item\" href=\"#\">Контакты</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"navbar-services-wrapper\">\n            <div class=\"navbar-services\">\n              <img\n              id=\"call-dt\"\n                class=\"navbar__item--mb\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\"\n                alt=\"\"\n              />\n              <img\n              id=\"message-dt\"\n                class=\"navbar__item--mb\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\"\n                alt=\"\"\n              />\n              <img\n                class=\"navbar__item--mb\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                alt=\"\"\n              />\n              <div class=\"navbar__item--line-mb\"></div>\n              <img\n                class=\"navbar__item\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\"\n                alt=\"remont\"\n              />\n              <img\n                class=\"navbar__item\"\n                src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\"\n                alt=\"search\"\n              />\n            </div>\n            <div class=\"mail\">\n              <a href=\"mail@cps.com\">mail@cps.com</a>\n            </div>\n            <div class=\"phone-num\">\n              <a href=\"”tel:+78008908900”\">8 800 890 8900</a>\n            </div>\n            <div>\n              <ul class=\"lang\">\n                <li class=\"lang__item\">RU</li>\n                <li class=\"lang__item\">EN</li>\n                <li class=\"lang__item\">CH</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </header>\n\n      <div class=\"main\">\n        <main>\n          <section class=\"services\">\n            <div class=\"title\">\n              <h1>Услуги и сервисы</h1>\n              <div class=\"navbar-dt\">\n                <div class=\"navbar-dt__item\">\n                  <p>Оставить заявку</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"\" />\n                </div>\n                <div class=\"navbar-dt__item\">\n                  <p>Статус ремонта</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"\" />\n                </div>\n              </div>\n            </div>\n            <nav class=\"services-nav\">\n              <a href=\"#\" class=\"services-nav__item\">Ремонтируемые бренды</a>\n              <a href=\"#\" class=\"services-nav__item\">Дополнительные услуги</a>\n              <a href=\"#\" class=\"services-nav__item\">Цены на услуги</a>\n              <a href=\"#\" class=\"services-nav__item\"\n                >Адреса сервисных центров</a\n              >\n              <a href=\"#\" class=\"services-nav__item\">Специальные цены</a>\n              <a href=\"#\" class=\"services-nav__item services-nav__item--dt\"\n                >Отзывы</a\n              >\n            </nav>\n            <div class=\"services-content\">\n              <div class=\"services-content__text\">\n                <span class=\"services-content__mb\">\n                  Мы являемся авторизованным сервисным центром по ремонту\n                  техники Dell. Только у нас вы можете отремонтировать свой\n                  ноутбук Dell с официальной гарантией производителя.\n                </span>\n                <br />\n                <br />\n                <span class=\"services-content__tb\">\n                  Мы успешно работаем с 1992 года и заслужили репутацию\n                  надежного партнера\n                </span>\n                <span class=\"services-content__dt\">\n                  , что подтверждает большое количество постоянных клиентов. Мы\n                  гордимся тем, что к нам обращаются по рекомендациям и, в свою\n                  очередь, советуют нас родным и близким.\n                </span>\n                <p></p>\n                <div class=\"services-content__btn\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"expand\" />\n                  <button>Читать далее</button>\n                </div>\n              </div>\n              <div class=\"services-content__img\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"bigCPS\" />\n              </div>\n            </div>\n          </section>\n\n          <section class=\"brands\">\n            <div class=\"subtitle\">\n              <h3>Ремонт техники различных брендов</h3>\n            </div>\n            <div class=\"swiper\">\n              <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" />\n                  <img\n                    class=\"button-next\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                    alt=\"\"\n                  />\n                </div>\n                <div class=\"swiper-slide\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" />\n                  <img\n                    class=\"button-next\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                    alt=\"\"\n                  />\n                </div>\n                <div class=\"swiper-slide\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" />\n                  <img\n                    class=\"button-next\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                    alt=\"\"\n                  />\n                </div>\n                <div class=\"swiper-slide\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"\" />\n                  <img\n                    class=\"button-next\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                    alt=\"\"\n                  />\n                </div>\n                <div class=\"swiper-slide\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" />\n                  <img\n                    class=\"button-next\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                    alt=\"\"\n                  />\n                </div>\n                <div class=\"swiper-slide\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\n                  <img\n                    class=\"button-next\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                    alt=\"\"\n                  />\n                </div>\n                <div class=\"swiper-slide\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\" />\n                  <img\n                    class=\"button-next\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                    alt=\"\"\n                  />\n                </div>\n                <div class=\"swiper-slide\">\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                  <img\n                    class=\"button-next\"\n                    src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\"\n                    alt=\"\"\n                  />\n                </div>\n              </div>\n              <div class=\"swiper-pagination\"></div>\n\n              <div class=\"swiper-pagination\"></div>\n            </div>\n            <div class=\"brands-content-wrapper\">\n              <div class=\"brands-content\">\n                <div class=\"brands-content-item\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item brands-content-item_dt\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item brands-content-item_dt\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item brands-content-item_dt\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item brands-content-item_dt\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"brands-content-item brands-content-item_dt\">\n                  <div class=\"brands-content-item__wrapper\">\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"\" />\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n              </div>\n              <button id=\"brands-btn\">\n                <img id=\"button-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" />\n                <p id=\"button-text\">Показать все</p>\n              </button>\n              <button id=\"brands-btn-dt\">\n                <img id=\"button-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" />\n                <p id=\"button-text-dt\">Показать все</p>\n              </button>\n            </div>\n          </section>\n\n          <section class=\"technique\">\n            <div class=\"subtitle\">\n              <h3>Ремонт различных видов техники</h3>\n            </div>\n            <div class=\"swiper\">\n              <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                  <p>Ремонт ноутбуков</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                </div>\n                <div class=\"swiper-slide\">\n                  <p>Ремонт планшетов</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                </div>\n                <div class=\"swiper-slide\">\n                  <p>Ремонт ПК</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                </div>\n                <div class=\"swiper-slide\">\n                  <p>Ремонт мониторов</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                </div>\n                <div class=\"swiper-slide\">\n                  <p>Ремонт ноутбуков</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                </div>\n                <div class=\"swiper-slide\">\n                  <p>Ремонт планшетов</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                </div>\n                <div class=\"swiper-slide\">\n                  <p>Ремонт ПК</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                </div>\n                <div class=\"swiper-slide\">\n                  <p>Ремонт мониторов</p>\n                  <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                </div>\n              </div>\n              <div class=\"swiper-pagination\"></div>\n            </div>\n\n            <div class=\"technique-content-wrapper\">\n              <div class=\"technique-content\">\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт ноутбуков</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт планшетов</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт ПК</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт мониторов</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт ноутбуков</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт планшетов</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт ПК</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт мониторов</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт ноутбуков</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт планшетов</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n                <div class=\"technique-content-item\">\n                  <div class=\"technique-content-item__wrapper\">\n                    <p>Ремонт ПК</p>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"\" />\n                  </div>\n                </div>\n              </div>\n              <button id=\"technique-btn\">\n                <img id=\"technique-btn__img\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" />\n                <p id=\"technique-btn__text\">Показать все</p>\n              </button>\n              <button id=\"technique-btn-dt\">\n                <img id=\"technique-btn__img--dt\" src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"\" />\n                <p id=\"technique-btn__text--dt\">Показать все</p>\n              </button>\n              \n            </div>\n          </section>\n\n          <section class=\"price\">\n            <div class=\"subtitle\">\n              <h3>Цены на услуги</h3>\n            </div>\n            <div class=\"swiper\">\n              <div class=\"swiper-wrapper\">\n                <div class=\"swiper-slide\">\n                  <div class=\"swiper-slide__service\">\n                    <span>Ремонтные услуги</span>\n                    <p>Тестирование с выдачей технического заключения</p>\n                  </div>\n                  <div class=\"swiper-slide__price\">\n                    <span>Цена</span>\n                    <p>Бесплатно</p>\n                  </div>\n                  <div class=\"swiper-slide__time\">\n                    <div>\n                      <span>Срок</span>\n                      <p>30-120 мин</p>\n                    </div>\n                    <button>\n                      Заказать\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                    </button>\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"swiper-slide__service\">\n                    <span>Ремонтные услуги</span>\n                    <p>Диагностика</p>\n                  </div>\n                  <div class=\"swiper-slide__price\">\n                    <span>Цена</span>\n                    <p>Бесплатно</p>\n                  </div>\n                  <div class=\"swiper-slide__time\">\n                    <div>\n                      <span>Срок</span>\n                      <p>30 мин</p>\n                    </div>\n                    <button>\n                      Заказать\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                    </button>\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"swiper-slide__service\">\n                    <span>Ремонтные услуги</span>\n                    <p>Замена дисплея</p>\n                  </div>\n                  <div class=\"swiper-slide__price\">\n                    <span>Цена</span>\n                    <p>1 000 ₽</p>\n                  </div>\n                  <div class=\"swiper-slide__time\">\n                    <div>\n                      <span>Срок</span>\n                      <p>30-120 мин</p>\n                    </div>\n                    <button>\n                      Заказать\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                    </button>\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"swiper-slide__service\">\n                    <span>Ремонтные услуги</span>\n                    <p>Замена полифонического динамика</p>\n                  </div>\n                  <div class=\"swiper-slide__price\">\n                    <span>Цена</span>\n                    <p>1 000 ₽</p>\n                  </div>\n                  <div class=\"swiper-slide__time\">\n                    <div>\n                      <span>Срок</span>\n                      <p>30-120 мин</p>\n                    </div>\n                    <button>\n                      Заказать\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                    </button>\n                  </div>\n                </div>\n                <div class=\"swiper-slide\">\n                  <div class=\"swiper-slide__service\">\n                    <span>Ремонтные услуги</span>\n                    <p>Замена программного обеспечения</p>\n                  </div>\n                  <div class=\"swiper-slide__price\">\n                    <span>Цена</span>\n                    <p>1 000 ₽</p>\n                  </div>\n                  <div class=\"swiper-slide__time\">\n                    <div>\n                      <span>Срок</span>\n                      <p>30-120 мин</p>\n                    </div>\n                    <button>\n                      Заказать\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"swiper-pagination\"></div>\n            </div>\n            <div class=\"price-content-wrapper\">\n              <div class=\"price-content\">\n                <table>\n                  <tr>\n                    <th>Ремонтные услуги</th>\n                    <th>Цена</th>\n                    <th>Срок</th>\n                    <th></th>\n                  </tr>\n                  <tr>\n                    <td>Диагностика</td>\n                    <td>Бесплатно</td>\n                    <td>30 мин</td>\n                    <td>\n                      <button>\n                        Заказать\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                      </button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Замена дисплея</td>\n                    <td>1 000 ₽</td>\n                    <td>30-120 мин</td>\n                    <td>\n                      <button>\n                        Заказать\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                      </button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Замена полифонического динамика</td>\n                    <td>1 000 ₽</td>\n                    <td>30-120 мин</td>\n                    <td>\n                      <button>\n                        Заказать\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                      </button>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>Тестирование с выдачей технического заключения</td>\n                    <td>1 000 ₽</td>\n                    <td>30-120 мин</td>\n                    <td>\n                      <button>\n                        Заказать\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                      </button>\n                    </td>\n                  </tr>\n                  <tr class=\"tr-no-line\">\n                    <td>Замена программного обеспечения</td>\n                    <td>1 000 ₽</td>\n                    <td>30-120 мин</td>\n                    <td>\n                      <button>\n                        Заказать\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"\" />\n                      </button>\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </div>\n          </section>\n        </main>\n\n        <footer>\n          <div class=\"footer__content\">\n            <p>\n              Все цены указаны с учетом НДС. Стоимость ремонта указана на\n              единичную услугу. Для получения коммерческого предложения на\n              постоянное обслуживание, оставьте заявку.\n            </p>\n            <button class=\"footer__btn\">\n              <span> Получить коммерческое предложение </span>\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_22___ + "\" alt=\"\" />\n            </button>\n          </div>\n          <div class=\"footer__info\">\n            <p>\n              © 2019 CPS <br />\n              Разработано командой Apesong\n            </p>\n            <p>Политика конфиденциальности</p>\n            <p>\n              Информация, размещенная на данной странице, не является публичной\n              офертой\n            </p>\n          </div>\n        </footer>\n      </div>\n    </div>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/favicon.ico":
/*!****************************!*\
  !*** ./assets/favicon.ico ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./img/Picture CopybigCPS.png":
/*!************************************!*\
  !*** ./img/Picture CopybigCPS.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Picture CopybigCPS.png";

/***/ }),

/***/ "./img/mobileImg/Groupcps.svg":
/*!************************************!*\
  !*** ./img/mobileImg/Groupcps.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/Groupcps.svg";

/***/ }),

/***/ "./img/mobileImg/burgerburger.svg":
/*!****************************************!*\
  !*** ./img/mobileImg/burgerburger.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burgerburger.svg";

/***/ }),

/***/ "./img/mobileImg/burgerclose.svg":
/*!***************************************!*\
  !*** ./img/mobileImg/burgerclose.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/burgerclose.svg";

/***/ }),

/***/ "./img/mobileImg/checkstatus.svg":
/*!***************************************!*\
  !*** ./img/mobileImg/checkstatus.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/checkstatus.svg";

/***/ }),

/***/ "./img/mobileImg/expand.svg":
/*!**********************************!*\
  !*** ./img/mobileImg/expand.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/expand.svg";

/***/ }),

/***/ "./img/mobileImg/repairremont.svg":
/*!****************************************!*\
  !*** ./img/mobileImg/repairremont.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/repairremont.svg";

/***/ }),

/***/ "./img/mobileImg/searchsearch.svg":
/*!****************************************!*\
  !*** ./img/mobileImg/searchsearch.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/searchsearch.svg";

/***/ }),

/***/ "./img/more.svg":
/*!**********************!*\
  !*** ./img/more.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/more.svg";

/***/ }),

/***/ "./img/navbar/call.svg":
/*!*****************************!*\
  !*** ./img/navbar/call.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/call.svg";

/***/ }),

/***/ "./img/navbar/chat.svg":
/*!*****************************!*\
  !*** ./img/navbar/chat.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/chat.svg";

/***/ }),

/***/ "./img/navbar/profile.svg":
/*!********************************!*\
  !*** ./img/navbar/profile.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/profile.svg";

/***/ }),

/***/ "./img/swiper/BitmapAcer.svg":
/*!***********************************!*\
  !*** ./img/swiper/BitmapAcer.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapAcer.svg";

/***/ }),

/***/ "./img/swiper/BitmapApple.svg":
/*!************************************!*\
  !*** ./img/swiper/BitmapApple.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapApple.svg";

/***/ }),

/***/ "./img/swiper/BitmapBosch.svg":
/*!************************************!*\
  !*** ./img/swiper/BitmapBosch.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapBosch.svg";

/***/ }),

/***/ "./img/swiper/BitmapHP.svg":
/*!*********************************!*\
  !*** ./img/swiper/BitmapHP.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapHP.svg";

/***/ }),

/***/ "./img/swiper/BitmapLenovo.svg":
/*!*************************************!*\
  !*** ./img/swiper/BitmapLenovo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapLenovo.svg";

/***/ }),

/***/ "./img/swiper/BitmapSamsung.svg":
/*!**************************************!*\
  !*** ./img/swiper/BitmapSamsung.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapSamsung.svg";

/***/ }),

/***/ "./img/swiper/BitmapSony.svg":
/*!***********************************!*\
  !*** ./img/swiper/BitmapSony.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapSony.svg";

/***/ }),

/***/ "./img/swiper/BitmapViewSonic.svg":
/*!****************************************!*\
  !*** ./img/swiper/BitmapViewSonic.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/BitmapViewSonic.svg";

/***/ }),

/***/ "./img/swiper/goline.svg":
/*!*******************************!*\
  !*** ./img/swiper/goline.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/goline.svg";

/***/ }),

/***/ "./img/swiper/goside.svg":
/*!*******************************!*\
  !*** ./img/swiper/goside.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/goside.svg";

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_html-loader_dist_runtim-967972"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map