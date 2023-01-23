/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/features/carousel.js":
/*!**********************************!*\
  !*** ./src/features/carousel.js ***!
  \**********************************/
/***/ (() => {

const buttonLeft = document.querySelector(".btn-left");
const buttonRight = document.querySelector(".btn-right");
buttonLeft.addEventListener("click", event => {
  console.log(event.target);
});
buttonRight.addEventListener("click", event => {
  console.log(event.target);
  scrollRight();
});
buttonLeft.addEventListener("click", event => {
  console.log(event.target);
  scrollLeft();
});
const listResto = document.querySelector(".list-resto");
listResto.classList.add("scroll");
const boxResto = document.querySelector(".box-resto");
let limit = 0;
let debut = 0;
let index = 0;
function scrollRight() {
  console.log(listResto);
  const tab = Array.from(listResto.querySelectorAll(".resto"));
  console.log(tab);
  const dim = tab.map(element => element.offsetLeft);
  console.log(dim);
  limit = dim[dim.length - 1];
  debut = dim[0];
  console.log(limit);
  console.log(index);
  if (index <= limit) {
    index += 200;
    listResto.style.transform = `translate(-${index}px)`;
  } else {
    index = limit;
    listResto.style.transform = `translate(-${index}px)`;
  }
}
function scrollLeft() {
  console.log("debut 0:", debut);
  console.log("index 0:", index);
  index -= 200;
  listResto.style.transform = `translate(-${index}px)`;
  if (index < debut) {
    console.log("debut 1:", debut);
    index = debut;
    listResto.style.transform = `translate(-${index}px)`;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg */ "./src/assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody,\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n}\n\n* {\n  font-family: var(--font-family);\n}\n\np,\na,\ndiv,\nspan {\n  font-size: 1.6rem;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nh1,\nh2,\nh3,\nh4,\np,\ndiv,\na,\ninput,\nspan {\n  color: var(--color-text);\n  font-family: var(--font-family);\n}\n\nh2,\nh3,\nh4 {\n  font-size: 2.5rem;\n  padding: 2rem;\n  font-weight: 700;\n}\n\nbutton {\n  font-size: 1.6rem;\n}\n\n:root {\n  --color-green-dark: #10ac84;\n  --color-green-light: #1dd1a1;\n  --color-fond: #22a6b3;\n  --color-violet-dark: #be2edd;\n  --color-violet-light: #ff9ff3;\n  --color-gray-light: #ecf0f1;\n  --color-gray-dark: #95a5a6;\n  --background-icon: #341f97;\n  --color-degrade-violet: linear-gradient(\n    var(--color-violet-dark),\n    var(--color-violet-light)\n  );\n  --color-orangered: #ff4757;\n  --background-header: linear-gradient(#656d79, #dfe4ea);\n  --font-family: \"Noto Sans\", sans-serif;\n  --font-familly-logo: \"Shrikhand\", cursive;\n  --font-family-montserat: \"Montserrat\", sans-serif;\n  --color-btn: #ffff;\n  --color-text: #130f40;\n  --box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,\n    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;\n}\n\n.btn {\n  padding: 1.5rem 2rem;\n  background: var(--color-gray-dark);\n  border: none;\n  border-radius: 3rem;\n  color: var(--color-btn);\n  cursor: pointer;\n}\n.btn-degrade {\n  background: var(--color-degrade-violet);\n}\n.btn-right {\n  font-size: 2.5rem;\n  line-height: 1.8rem;\n}\n.btn-left {\n  font-size: 2.5rem;\n  line-height: 1.8rem;\n}\n.btn-round {\n  border-radius: 50%;\n  padding: 0.5rem 1.2rem;\n}\n.btn-orangered {\n  background: var(--color-orangered);\n}\n\n.box-like {\n  display: inline-block;\n  z-index: 1;\n  position: relative;\n  cursor: pointer;\n}\n.box-like:hover span:nth-child(2) {\n  transform: scale(1);\n  transition: 0.5s transform ease-in-out;\n}\n.box-like span {\n  position: absolute;\n  font-size: 3rem;\n  padding: 0 1rem;\n  right: 0;\n  background-image: var(--color-degrade-violet);\n  background-color: var(--color-violet-dark);\n  background-size: 100%;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n}\n.box-like span:nth-child(2) {\n  transform: scale(0);\n  transition: 0.5s transform ease-in;\n  transform-origin: center;\n}\n\n.box-modal {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  background: rgba(10, 10, 10, 0.8);\n}\n\n.modal {\n  position: absolute;\n  top: 2rem;\n  background: white;\n}\n\n.scroll {\n  transition: 0.3s transform linear;\n}\n\n.container {\n  display: grid;\n  grid: \"header header header\" auto \"main main main\" 1fr \"footer footer footer\" auto/1fr 1fr 1fr;\n}\n.container header {\n  grid-area: header;\n  background: var(--color-fond);\n}\n.container main {\n  grid-area: main;\n}\n.container footer {\n  grid-area: footer;\n  background: #2f3542;\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  padding: 1rem;\n}\n@media screen and (max-width: 840px) {\n  .container footer {\n    flex-direction: column;\n    align-items: start;\n  }\n}\n.container footer h2,\n.container footer span,\n.container footer p {\n  color: white;\n  word-spacing: 0.5rem;\n}\n.container footer i {\n  padding: 0 1rem;\n}\n.container footer h2 {\n  font-size: 3rem;\n  font-family: var(--font-familly-logo);\n}\n\n.box-header {\n  display: flex;\n  justify-content: space-between;\n  padding: 2.5rem;\n  align-items: center;\n}\n@media screen and (max-width: 560px) {\n  .box-header {\n    flex-flow: row wrap;\n    justify-content: center;\n  }\n}\n.box-header .box-logo {\n  flex: 0 0 30%;\n}\n@media screen and (max-width: 1030px) {\n  .box-header .box-logo {\n    flex-basis: auto;\n  }\n}\n.box-header .box-logo a {\n  font-size: 3rem;\n  font-family: var(--font-familly-logo);\n  color: white;\n}\n.box-header .box-menu {\n  flex-basis: 30%;\n}\n@media screen and (max-width: 1030px) {\n  .box-header .box-menu {\n    flex-basis: auto;\n    text-align: center;\n  }\n  .box-header .box-menu::before {\n    font-family: \"Font Awesome 5 Free\";\n    font-weight: 900;\n    content: \"\\f0c9\";\n    font-size: 3rem;\n    color: white;\n  }\n}\n.box-header .box-menu ul {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-evenly;\n}\n@media screen and (max-width: 1030px) {\n  .box-header .box-menu ul {\n    display: none;\n  }\n}\n.box-header .box-menu ul li {\n  padding: 0 1rem;\n}\n.box-header .box-menu a {\n  color: white;\n}\n\n.research {\n  flex: 0 0 40%;\n  text-align: center;\n  position: relative;\n}\n@media screen and (max-width: 1030px) {\n  .research {\n    flex-basis: 60%;\n    text-align: left;\n  }\n}\n@media screen and (max-width: 560px) {\n  .research {\n    flex-basis: 90%;\n  }\n}\n.research input {\n  outline: none;\n  border: 0;\n  border-radius: 1.5rem;\n  padding: 0.8rem 0;\n  padding-left: 3rem;\n  width: 90%;\n}\n.research span {\n  position: absolute;\n  left: 7%;\n  top: 0.6rem;\n  margin-right: 0.5rem;\n}\n@media screen and (max-width: 1030px) {\n  .research span {\n    left: 2%;\n  }\n}\n\n.contact {\n  display: flex;\n  flex-basis: 60%;\n  align-items: baseline;\n  justify-content: space-evenly;\n}\n@media screen and (max-width: 840px) {\n  .contact {\n    flex-direction: column;\n  }\n}\n\n.box-presentation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center center/cover;\n}\n.box-presentation h1 {\n  text-align: center;\n  padding: 1.5rem 0;\n  font-size: 4rem;\n  color: white;\n  text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;\n}\n.box-presentation p {\n  font-size: 3rem;\n  text-align: center;\n  color: white;\n  text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;\n}\n.box-presentation button {\n  margin: 3rem 0;\n}\n\n.separator {\n  height: 0.5rem;\n  background: var(--background-header);\n}\n\n.content-scroll {\n  overflow: hidden;\n}\n\n.fct {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  color: #7158e2;\n}\n@media screen and (max-width: 1200px) {\n  .fct {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.fct ul {\n  display: flex;\n  flex: auto;\n  padding: 1rem;\n  justify-content: space-around;\n}\n@media screen and (max-width: 840px) {\n  .fct ul {\n    flex-flow: row wrap;\n    align-items: baseline;\n    justify-content: start;\n  }\n  .fct ul li {\n    padding: 1.5rem;\n  }\n}\n@media screen and (max-width: 560px) {\n  .fct ul {\n    align-items: initial;\n  }\n}\n.fct div.btn {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid var(--color-gray-light);\n}\n.fct .number {\n  position: absolute;\n  left: -1.4rem;\n  bottom: 1rem;\n  background: var(--color-fond);\n  color: white;\n}\n.fct .icon,\n.fct .description {\n  padding: 0 0.5rem;\n}\n\n.box-restaurant {\n  background: var(--color-gray-light);\n}\n\n.list-restaurant {\n  display: flex;\n  justify-content: center;\n  background: white;\n}\n.list-restaurant .btn-right,\n.list-restaurant .btn-left {\n  flex: 0 0 10%;\n  text-align: center;\n  display: flex;\n  z-index: 1;\n  align-items: center;\n  justify-content: center;\n}\n.list-restaurant .box-resto {\n  padding: 2rem;\n  max-width: 130rem;\n  overflow: hidden;\n  margin: 2rem 0;\n}\n.list-restaurant .box-resto .list-resto {\n  display: flex;\n}\n.list-restaurant .box-resto .resto {\n  flex: 0 0 40rem;\n  border: 1px solid var(--color-gray-light);\n  background: white;\n  margin: 1rem;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n  border-top-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n}\n@media screen and (max-width: 560px) {\n  .list-restaurant .box-resto .resto {\n    flex: 0 0 100%;\n  }\n}\n.list-restaurant .box-resto .resto img {\n  width: 100%;\n  border-top-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n}\n.list-restaurant .box-resto .resto-title {\n  font-weight: 700;\n}\n.list-restaurant .box-resto .resto-ville {\n  color: var(--color-gray-dark);\n}\n.list-restaurant .box-resto .resto .resto-description {\n  border-top-left-radius: 3rem;\n  border-top-right-radius: 3rem;\n  padding: 2rem;\n  position: relative;\n  top: -3rem;\n  background: white;\n}\n.list-restaurant .box-resto .resto .box-btn {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem;\n  line-height: 2;\n}\n\n.box {\n  width: 100%;\n  height: 100vh;\n}\n.box img {\n  width: 100%;\n  height: 40rem;\n}", "",{"version":3,"sources":["webpack://./src/scss/_reset.scss","webpack://./src/scss/index.scss","webpack://./src/scss/_base.scss","webpack://./src/scss/_variables.scss","webpack://./src/scss/_classes.scss","webpack://./src/scss/style.scss","webpack://./src/scss/_media.scss"],"names":[],"mappings":"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","sourcesContent":["html,\r\nbody,\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n","@import \"./style.scss\";\r\n\r\n.box-presentation {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: url(\"../assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg\")\r\n    center center/cover;\r\n  h1 {\r\n    text-align: center;\r\n    padding: 1.5rem 0;\r\n    font-size: 4rem;\r\n    // font-family: var(--font-familly-logo);\r\n    color: white;\r\n    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;\r\n  }\r\n  p {\r\n    font-size: 3rem;\r\n    text-align: center;\r\n    color: white;\r\n    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;\r\n  }\r\n  button {\r\n    margin: 3rem 0;\r\n  }\r\n}\r\n.separator {\r\n  height: 0.5rem;\r\n  background: var(--background-header);\r\n}\r\n.content-scroll {\r\n  overflow: hidden;\r\n}\r\n.fct {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  color: #7158e2;\r\n  @media screen and (max-width: 1200px) {\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n  }\r\n\r\n  ul {\r\n    display: flex;\r\n    flex: auto;\r\n    padding: 1rem;\r\n    justify-content: space-around;\r\n    @include intermediare {\r\n      flex-flow: row wrap;\r\n      align-items: baseline;\r\n      justify-content: start;\r\n      li {\r\n        padding: 1.5rem;\r\n      }\r\n    }\r\n    @include sm {\r\n      align-items: initial;\r\n    }\r\n  }\r\n  div.btn {\r\n    position: relative;\r\n    background: #ffffff;\r\n    border: 1px solid var(--color-gray-light);\r\n  }\r\n  .number {\r\n    position: absolute;\r\n    left: -1.4rem;\r\n    bottom: 1rem;\r\n    background: var(--color-fond);\r\n    color: white;\r\n  }\r\n  .icon,\r\n  .description {\r\n    padding: 0 0.5rem;\r\n  }\r\n}\r\n.box-restaurant {\r\n  background: var(--color-gray-light);\r\n}\r\n.list-restaurant {\r\n  display: flex;\r\n  justify-content: center;\r\n  background: white;\r\n\r\n  .btn-right,\r\n  .btn-left {\r\n    flex: 0 0 10%;\r\n    text-align: center;\r\n    display: flex;\r\n    z-index: 1;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  .box-resto {\r\n    padding: 2rem;\r\n    max-width: 130rem;\r\n    overflow: hidden;\r\n\r\n    margin: 2rem 0;\r\n    .list-resto {\r\n      display: flex;\r\n    }\r\n    .resto {\r\n      flex: 0 0 40rem;\r\n      border: 1px solid var(--color-gray-light);\r\n      background: white;\r\n      margin: 1rem;\r\n      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\r\n      border-top-left-radius: 3rem;\r\n      border-top-right-radius: 3rem;\r\n      @include sm {\r\n        flex: 0 0 100%;\r\n      }\r\n\r\n      img {\r\n        width: 100%;\r\n        border-top-left-radius: 3rem;\r\n        border-top-right-radius: 3rem;\r\n      }\r\n      &-title {\r\n        font-weight: 700;\r\n      }\r\n      &-ville {\r\n        color: var(--color-gray-dark);\r\n      }\r\n      .resto-description {\r\n        border-top-left-radius: 3rem;\r\n        border-top-right-radius: 3rem;\r\n        padding: 2rem;\r\n        position: relative;\r\n        top: -3rem;\r\n        background: white;\r\n      }\r\n      .box-btn {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        padding: 1rem;\r\n        line-height: 2;\r\n      }\r\n    }\r\n  }\r\n}\r\n.box {\r\n  width: 100%;\r\n  height: 100vh;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: 40rem;\r\n  }\r\n}\r\n",":root {\r\n  font-size: 62.5%;\r\n}\r\n* {\r\n  font-family: var(--font-family);\r\n}\r\np,\r\na,\r\ndiv,\r\nspan {\r\n  font-size: 1.6rem;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\nul {\r\n  list-style: none;\r\n}\r\n// h1 {\r\n//   font-size: 3rem;\r\n// }\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\ndiv,\r\na,\r\ninput,\r\nspan {\r\n  color: var(--color-text);\r\n  font-family: var(--font-family);\r\n}\r\nh2,\r\nh3,\r\nh4 {\r\n  font-size: 2.5rem;\r\n  padding: 2rem;\r\n  font-weight: 700;\r\n}\r\nbutton {\r\n  font-size: 1.6rem;\r\n}\r\n",":root {\r\n  --color-green-dark: #10ac84;\r\n  --color-green-light: #1dd1a1;\r\n  --color-fond: #22a6b3;\r\n  --color-violet-dark: #be2edd;\r\n  --color-violet-light: #ff9ff3;\r\n  --color-gray-light: #ecf0f1;\r\n  --color-gray-dark: #95a5a6;\r\n  --background-icon: #341f97;\r\n  --color-degrade-violet: linear-gradient(\r\n    var(--color-violet-dark),\r\n    var(--color-violet-light)\r\n  );\r\n  --color-orangered: #ff4757;\r\n  --background-header: linear-gradient(#656d79, #dfe4ea);\r\n  --font-family: \"Noto Sans\", sans-serif;\r\n  --font-familly-logo: \"Shrikhand\", cursive;\r\n  --font-family-montserat: \"Montserrat\", sans-serif;\r\n  --color-btn: #ffff;\r\n  --color-text: #130f40;\r\n  --box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,\r\n    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;\r\n  //rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n",".btn {\r\n  padding: 1.5rem 2rem;\r\n  background: var(--color-gray-dark);\r\n  border: none;\r\n  border-radius: 3rem;\r\n  color: var(--color-btn);\r\n  cursor: pointer;\r\n  &-degrade {\r\n    background: var(--color-degrade-violet);\r\n  }\r\n  &-right {\r\n    font-size: 2.5rem;\r\n    line-height: 1.8rem;\r\n  }\r\n  &-left {\r\n    font-size: 2.5rem;\r\n    line-height: 1.8rem;\r\n  }\r\n  &-round {\r\n    border-radius: 50%;\r\n    padding: 0.5rem 1.2rem;\r\n  }\r\n  &-orangered {\r\n    background: var(--color-orangered);\r\n  }\r\n}\r\n.box-like {\r\n  display: inline-block;\r\n  z-index: 1;\r\n  position: relative;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    span:nth-child(2) {\r\n      transform: scale(1);\r\n      transition: 0.5s transform ease-in-out;\r\n    }\r\n  }\r\n  span {\r\n    position: absolute;\r\n    font-size: 3rem;\r\n    padding: 0 1rem;\r\n    right: 0;\r\n    background-image: var(--color-degrade-violet);\r\n    background-color: var(--color-violet-dark);\r\n    background-size: 100%;\r\n    -webkit-background-clip: text;\r\n    -moz-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    -moz-text-fill-color: transparent;\r\n  }\r\n\r\n  span:nth-child(2) {\r\n    transform: scale(0);\r\n    transition: 0.5s transform ease-in;\r\n    transform-origin: center;\r\n  }\r\n}\r\n.box-modal {\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  background: rgba(10, 10, 10, 0.8);\r\n}\r\n.modal {\r\n  position: absolute;\r\n  top: 2rem;\r\n  background: white;\r\n}\r\n.scroll {\r\n  transition: 0.3s transform linear;\r\n}\r\n","@import \"./reset\";\r\n@import \"./base\";\r\n@import \"./variables\";\r\n@import \"./classes\";\r\n@import \"./media\";\r\n\r\n.container {\r\n  display: grid;\r\n  grid:\r\n    \"header header header\" auto\r\n    \"main main main\" 1fr\r\n    \"footer footer footer\" auto/1fr 1fr 1fr;\r\n\r\n  header {\r\n    grid-area: header;\r\n    background: var(--color-fond);\r\n  }\r\n  main {\r\n    grid-area: main;\r\n  }\r\n  footer {\r\n    grid-area: footer;\r\n    background: #2f3542;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: start;\r\n    padding: 1rem;\r\n    @include intermediare {\r\n      flex-direction: column;\r\n      align-items: start;\r\n    }\r\n    h2,\r\n    span,\r\n    p {\r\n      color: white;\r\n      word-spacing: 0.5rem;\r\n    }\r\n    i {\r\n      padding: 0 1rem;\r\n    }\r\n    h2 {\r\n      font-size: 3rem;\r\n      font-family: var(--font-familly-logo);\r\n    }\r\n  }\r\n}\r\n.box-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 2.5rem;\r\n  align-items: center;\r\n  @include sm() {\r\n    flex-flow: row wrap;\r\n    justify-content: center;\r\n  }\r\n  .box-logo {\r\n    flex: 0 0 30%;\r\n    @include xl() {\r\n      flex-basis: auto;\r\n    }\r\n    a {\r\n      font-size: 3rem;\r\n      font-family: var(--font-familly-logo);\r\n      color: white;\r\n    }\r\n  }\r\n  .box-menu {\r\n    flex-basis: 30%;\r\n    @include xl() {\r\n      flex-basis: auto;\r\n      text-align: center;\r\n      &::before {\r\n        font-family: \"Font Awesome 5 Free\";\r\n        font-weight: 900;\r\n        content: \"\\f0c9\";\r\n        font-size: 3rem;\r\n\r\n        color: white;\r\n      }\r\n    }\r\n\r\n    ul {\r\n      display: flex;\r\n      align-items: baseline;\r\n      justify-content: space-evenly;\r\n      @include xl() {\r\n        display: none;\r\n      }\r\n      li {\r\n        padding: 0 1rem;\r\n      }\r\n    }\r\n    a {\r\n      color: white;\r\n    }\r\n  }\r\n}\r\n\r\n.research {\r\n  flex: 0 0 40%;\r\n  text-align: center;\r\n  position: relative;\r\n  @include xl() {\r\n    flex-basis: 60%;\r\n    text-align: left;\r\n  }\r\n  @include sm() {\r\n    flex-basis: 90%;\r\n  }\r\n\r\n  input {\r\n    outline: none;\r\n    border: 0;\r\n    border-radius: 1.5rem;\r\n    padding: 0.8rem 0;\r\n    padding-left: 3rem;\r\n    width: 90%;\r\n  }\r\n  span {\r\n    position: absolute;\r\n    left: 7%;\r\n    top: 0.6rem;\r\n    margin-right: 0.5rem;\r\n    @include xl {\r\n      left: 2%;\r\n    }\r\n  }\r\n}\r\n.contact {\r\n  display: flex;\r\n  flex-basis: 60%;\r\n  align-items: baseline;\r\n  justify-content: space-evenly;\r\n  @include intermediare {\r\n    flex-direction: column;\r\n  }\r\n}\r\n","@mixin xl() {\r\n  @media screen and (max-width: 1030px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin sm() {\r\n  @media screen and (max-width: 560px) {\r\n    @content;\r\n  }\r\n}\r\n@mixin intermediare {\r\n  @media screen and (max-width: 840px) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4f8ff417d5edf70e6c0.jpg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _features_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/carousel */ "./src/features/carousel.js");
/* harmony import */ var _features_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_features_carousel__WEBPACK_IMPORTED_MODULE_1__);


const list = document.querySelector(".list-resto");
const container = document.querySelector(".container");
const consulterResto = () => {
  const tabResto = list.querySelectorAll(".resto");
  tabResto.forEach(element => {
    element.querySelector(".btn-orangered").addEventListener("click", event => {
      const boxModal = document.createElement("div");
      boxModal.classList.add("box-modal");
      const modal = document.createElement("div");
      modal.classList.add("modal");
      const box = document.createElement("div");
      // let box = element.cloneNode(true);
      box.classList.add("box");
      console.log(box);
      console.log(event.target.textContent);
      modal.append(box);
      boxModal.append(modal);
      container.append(boxModal);
      box.innerHTML = `
          <section class="box-resto">
            <div class="img">
            <img class="box__image" src="./assets/images/toa-heftiba-DQKerTsQwi0-unsplash.jpg" alt="photo-resto">
        </div>
            <h2 class="box-resto__titre">À la française <span><i class="far fa-heart"></i></span></h2>
         
            <section class="box-resto__entree">
                <div class="ma-map ">
                    <div class="titre-entree titre_entree">
                        <h3>entrées</h3>
                    </div>
                    
                    <div class="plat entree-1">
                        <div class="titre">
                            <strong>Tartare de poulpe acidulé</strong><br/>
                            Aux Zests d'orange
                        </div>
                        <div class="extension">
                             <span><strong>25€</strong></span> 
                            <span><i class="fas fa-check-circle"></i></span>
                        </div>
                    </div>
                  
                    <div class="plat entree-2">
                         <div class="titre"><strong>Velouté de légumes d'antan</strong><br/>
                            Carotte,panais,topinambour
                        </div>
                        <div class="extension">
                            <span><strong>35€</strong></span> 
                            <span><i class="fas fa-check-circle"></i></span>
                        </div>
                           
                    </div>
                    <div class="plat entree-3">
                            <div class="titre">
                                <strong>Soupe à l'oignon</strong><br/>
                                Revisitée
        
                            </div>
                           
                            <div class="extension">
                                <span><strong>20€</strong></span>
                                <span><i class="fas fa-check-circle"></i></span>
                            </div>
                    </div>
                </div>
            </section>
            <section class="box-resto__plat">
                <div class="ma-map ">
                    <div class="titre-entree titre_plat">
                        <h3>plats</h3>
                    </div>
                    
                    <div class="plat plat-1">
                        <div class="titre">
                            <strong>Coquilles Saint-Jacques</strong><br/>
                            Accompagnées d'une purée de panais
                        </div>
                        <div class="extension">
                             <span><strong>40€</strong></span> 
                            <span><i class="fas fa-check-circle"></i></span>
                        </div>
                    </div>
                  
                    <div class="plat plat-2">
                         <div class="titre"><strong>Magret de canard</strong><br/>
                            Et parmentier de pommes de terres
                        </div>
                        <div class="extension">
                            <span><strong>35€</strong></span> 
                            <span><i class="fas fa-check-circle"></i></span>
                        </div>
                           
                    </div>
                    <div class="plat plat-3">
                            <div class="titre">
                                <strong>Pigeonneau d-Ille-et-Vilaine</strong><br/>
                                Sur son lit de gnocchis aux légumes
        
                            </div>
                           
                            <div class="extension">
                                <span><strong>44€</strong></span>
                                <span><i class="fas fa-check-circle"></i></span>
                            </div>
                    </div>
                </div>
               
            </section>
            <section class="box-resto__dessert">
                <div class="ma-map ">
                    <div class="titre-entree titre_dessert">
                        <h3>déssert</h3>
                    </div>
                    
                    <div class="plat dessert-1">
                        <div class="titre">
                            <strong>Pétales de violettes glacées</strong><br/>
                           Et purée de noisettes
                        </div>
                        <div class="extension">
                            <span><strong>18€</strong></span> 
                            <span><i class="fas fa-check-circle"></i></span>
                        </div>
                    </div>
                  
                    <div class="plat dessert-2">
                         <div class="titre"><strong>Fondant au chocolat</strong><br/>
                            Revisitée
                        </div>
                        <div class="extension">
                            <span><strong>22€</strong></span> 
                            <span><i class="fas fa-check-circle"></i></span>
                        </div>
                           
                    </div>
                    <div class="plat dessert-3">
                            <div class="titre">
                                <strong>Millefeuille croustillant</strong><br/>
                                Myrtilles et pâte d'amande
        
                            </div>
                           
                            <div class="extension">
                                <span><strong>23€</strong></span>
                                <span><i class="fas fa-check-circle"></i></span>
                            </div>
                    </div>
                </div>
            </section>
            <button class="btn btn--margin">Commander</button>


        </section>

        `;
    });
  });
};
consulterResto();
})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map