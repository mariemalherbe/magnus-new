(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-home-page></app-home-page>\n<app-steps></app-steps>\n<app-slider></app-slider>\n<app-fonctionnement></app-fonctionnement>\n<app-contact></app-contact>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _steps_steps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./steps/steps.component */ "./src/app/steps/steps.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _fonctionnement_fonctionnement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonctionnement/fonctionnement.component */ "./src/app/fonctionnement/fonctionnement.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
                _steps_steps_component__WEBPACK_IMPORTED_MODULE_4__["StepsComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"],
                _fonctionnement_fonctionnement_component__WEBPACK_IMPORTED_MODULE_6__["FonctionnementComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contact\">\n<div class=\"links\">\n  <button class=\"button_line\">Discover Magnus API</button>\n  <button class=\"button_regular\">Download the app</button>\n</div>\n\n<div class=\"block_title\">\n    <h1 class=\"title\">Contact</h1>\n    <h2 class=\"subtitle\">Call us maybe !</h2>\n</div>\n\n<div class=\"list_contact\">\n  <ul>\n    <li class=\"social_item\">\n      <img src=\"../assets/imgs/telephone.svg\" alt=\"\">\n        <p>09 72 62 66 91</p>\n    </li>\n    <li class=\"social_item\">\n      <img src=\"../assets/imgs/pin.svg\" alt=\"\">\n        <p>24, avenue Marceau - 75008 Paris</p>\n    </li>\n    <li class=\"social_item\">\n      <img src=\"../assets/imgs/mail.svg\" alt=\"\">\n        <p>contact@uppli.fr</p>\n    </li>\n  </ul>\n\n  <div class=\"social\">\n    <img src=\"../assets/imgs/twitter.svg\" alt=\"\">\n    <p>@Uppli_io</p>\n  </div>\n</div>\n\n\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\n.contact .links {\n  width: 100vw;\n  height: 290px;\n  background: linear-gradient(#582CFF, #7571F4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-position: center; }\n\n@media screen and (max-width: 1030px) {\n    .contact .links {\n      height: 50vh;\n      flex-direction: column;\n      justify-content: space-around; } }\n\n.contact .links .button_line {\n    width: 240px;\n    height: 65px;\n    background: none;\n    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);\n    color: white;\n    border: 1px solid white;\n    font-family: Helvetica;\n    color: white;\n    font-weight: 200;\n    font-size: 1.25em;\n    border-radius: 32.5px;\n    outline: none;\n    margin-right: 50px; }\n\n@media screen and (max-width: 1030px) {\n      .contact .links .button_line {\n        margin-right: inherit; } }\n\n.contact .links .button_regular {\n    width: 240px;\n    height: 65px;\n    background: white;\n    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);\n    color: #6D5EF7 !important;\n    border: none;\n    font-family: Helvetica;\n    color: white;\n    font-weight: 200;\n    font-size: 1.25em;\n    border-radius: 32.5px;\n    outline: none; }\n\n.contact h2 {\n  width: 50vw; }\n\n.contact h1 {\n  color: #373633; }\n\n.contact .block_title {\n  margin-top: 100px;\n  margin-left: 8vw; }\n\n.contact .list_contact {\n  margin-top: 100px;\n  position: relative;\n  margin-left: 8vw; }\n\n.contact .list_contact ul {\n    margin-right: 300px; }\n\n@media screen and (max-width: 1030px) {\n      .contact .list_contact ul {\n        margin-right: inherit; } }\n\n.contact .list_contact ul li {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center; }\n\n@media screen and (max-width: 1030px) {\n        .contact .list_contact ul li {\n          flex-direction: column;\n          margin-bottom: 25px; } }\n\n.contact .list_contact ul li p {\n        font-size: 1.625em;\n        font-weight: 400; }\n\n@media screen and (max-width: 1030px) {\n          .contact .list_contact ul li p {\n            text-align: center; } }\n\n.contact .list_contact .social {\n    position: absolute;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 25vw;\n    height: 25vw;\n    box-shadow: 0px 1px 100px 0px rgba(96, 246, 213, 0.22);\n    border-radius: 25vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n\n@media screen and (max-width: 1030px) {\n      .contact .list_contact .social {\n        position: relative;\n        width: 85vw;\n        height: 85vw;\n        border-radius: 85vw; } }\n\n.contact .list_contact .social p {\n      font-size: 3em;\n      font-weight: 600;\n      margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
        sr.reveal('.title', { delay: 200, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.subtitle', { delay: 300, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.paragraph', { delay: 500, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.social_item', { delay: 500, duration: 750, origin: 'right' }, 100);
        sr.reveal('.social', { delay: 750, duration: 500, opacity: 0 });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/fonctionnement/fonctionnement.component.html":
/*!**************************************************************!*\
  !*** ./src/app/fonctionnement/fonctionnement.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"steps\">\n  <div class=\"block_title\">\n    <h1 class=\"title\">How it works ?</h1>\n    <h2 class=\"subtitle\">Since we are very nice, we let you know some secrets about Magnus !</h2>\n  </div>\n\n  <div class=\"block_detail\">\n    <div class=\"block_detail--left\">\n      <img class=\"img\" src=\"../assets/imgs/iphone8.png\" alt=\"\">\n    </div>\n    <div class=\"block_detail--right\">\n      <ul>\n        <li class=\"list_item\">\n            <div>\n                <img src=\"../assets/imgs/signal.svg\" alt=\"\">\n                <span>No signal</span>\n            </div>\n          <p>With magnus you need no Wifi, no Bluetooth, no 4G…\n              And find your way in big indoor spaces !\n          </p>\n        </li>\n        <li class=\"list_item\">\n            <div>\n                <img src=\"../assets/imgs/boussole.svg\" alt=\"\">\n                <span>Geomagnetisme</span>\n            </div>\n            <p>Our solution uses geomagnetisme to locate you without using any signal.\n                It’s safe and economic !\n            </p>\n        </li>\n        <li class=\"list_item\">\n          <div>\n              <img src=\"../assets/imgs/boussole2.svg\" alt=\"\">\n              <span>Collect</span>\n          </div>\n            <p>The Magnus API collects and analyzes environmental data to locate you inside a building. This data can be also matched with strategically positioned Bluetooth beacons for higher precision.\n            </p>\n        </li>\n      </ul>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/fonctionnement/fonctionnement.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/fonctionnement/fonctionnement.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh2 {\n  width: 50vw;\n  margin: 1em auto;\n  text-align: center; }\n\nh1 {\n  color: #373633;\n  text-align: center; }\n\n.block_title {\n  margin-top: 100px;\n  margin-left: 8em; }\n\n@media screen and (max-width: 1030px) {\n    .block_title {\n      margin-left: inherit; } }\n\n.block_detail {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw; }\n\n@media screen and (max-width: 1030px) {\n    .block_detail {\n      flex-direction: column; } }\n\n.block_detail--left {\n    width: 40%;\n    height: 100%;\n    align-items: center; }\n\n@media screen and (max-width: 1030px) {\n      .block_detail--left {\n        display: flex;\n        align-items: center;\n        justify-content: center; } }\n\n.block_detail--left img {\n      width: 30vw; }\n\n.block_detail--right {\n    width: 40%; }\n\n@media screen and (max-width: 1030px) {\n      .block_detail--right {\n        width: 85vw; } }\n\n.block_detail--right ul li {\n      margin: 100px 0px; }\n\n@media screen and (max-width: 1030px) {\n        .block_detail--right ul li {\n          margin: inherit;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n          margin-bottom: 25px; } }\n\n.block_detail--right ul li div {\n        display: flex;\n        align-items: center; }\n\n@media screen and (max-width: 1030px) {\n          .block_detail--right ul li div {\n            flex-direction: column; } }\n\n.block_detail--right ul li div span {\n          font-family: Helvetica;\n          font-size: 3em;\n          color: #373633;\n          font-weight: 600;\n          margin-left: 1em; }\n\n@media screen and (max-width: 1030px) {\n            .block_detail--right ul li div span {\n              margin-left: inherit;\n              text-align: center; } }\n\n.block_detail--right ul li p {\n        max-width: 415px;\n        margin-top: 60px;\n        font-weight: 400;\n        line-height: 27px; }\n\n@media screen and (max-width: 1030px) {\n          .block_detail--right ul li p {\n            text-align: center; } }\n"

/***/ }),

/***/ "./src/app/fonctionnement/fonctionnement.component.ts":
/*!************************************************************!*\
  !*** ./src/app/fonctionnement/fonctionnement.component.ts ***!
  \************************************************************/
/*! exports provided: FonctionnementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FonctionnementComponent", function() { return FonctionnementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FonctionnementComponent = /** @class */ (function () {
    function FonctionnementComponent() {
    }
    FonctionnementComponent.prototype.ngOnInit = function () {
        sr.reveal('.title', { delay: 100, origin: 'bottom', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.subtitle', { delay: 200, origin: 'bottom', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.list_item', { delay: 500, duration: 750, origin: 'right' }, 100);
        sr.reveal('.img', { delay: 300, scale: 0.5, ease: 'ease-in-out', duration: 1000 });
    };
    FonctionnementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fonctionnement',
            template: __webpack_require__(/*! ./fonctionnement.component.html */ "./src/app/fonctionnement/fonctionnement.component.html"),
            styles: [__webpack_require__(/*! ./fonctionnement.component.scss */ "./src/app/fonctionnement/fonctionnement.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FonctionnementComponent);
    return FonctionnementComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"homepage\">\n  <div class=\"side_left\">\n    <div class=\"side_left-content\">\n      <h1 class=\"title\">Magnus</h1>\n      <h3 class=\"subtitle\">Troubles finding your way ? </h3>\n      <p class=\"paragraph\">Magnus API is uppli's solution for indoor navigation and positioning without the need of GPS or any expensive infrastructure.</p>\n      <button class=\"button\">Meet your friends</button>\n    </div>\n  </div>\n  <img class=\"logo\" src=\"../assets/imgs/pinRoom.svg\" alt=\"\">\n  <div class=\"side_right\">\n    <div class=\"side_right-overlay\"></div>\n    <video loop autoplay playsinline>\n      <source src=\"../../assets/video/magnusfinal.mp4\">\n    </video>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.scss":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\n.homepage {\n  height: 85vh;\n  min-height: 800px;\n  width: 100vw;\n  position: relative;\n  display: flex; }\n\n@media screen and (max-width: 820px) {\n    .homepage {\n      flex-direction: column;\n      height: auto; } }\n\n.homepage .side_left {\n    height: 100%;\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column; }\n\n@media screen and (max-width: 820px) {\n      .homepage .side_left {\n        width: 100%; } }\n\n.homepage .side_left-content {\n      margin: 8vw auto;\n      width: 65%; }\n\n.homepage .side_left-content h1 {\n        margin-bottom: 10pt; }\n\n@media screen and (max-width: 820px) {\n          .homepage .side_left-content h1 {\n            margin-top: 50px; } }\n\n.homepage .side_left-content h3 {\n        margin-bottom: 35pt; }\n\n.homepage .side_left-content button {\n        width: 240px;\n        height: 65px;\n        background: linear-gradient(#582CFF, #7571F4);\n        box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);\n        color: white;\n        border: none;\n        font-family: Helvetica;\n        color: white;\n        font-weight: 200;\n        font-size: 1.25em;\n        border-radius: 32.5px;\n        outline: none;\n        margin-top: 100pt; }\n\n.homepage .logo {\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 3; }\n\n@media screen and (max-width: 820px) {\n      .homepage .logo {\n        display: none; } }\n\n.homepage .side_right {\n    height: 100%;\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n    position: relative; }\n\n@media screen and (max-width: 820px) {\n      .homepage .side_right {\n        width: 100%; } }\n\n.homepage .side_right-overlay {\n      background-color: #373633;\n      z-index: 2;\n      opacity: 0.5;\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 100%;\n      height: 100%; }\n\n.homepage .side_right video {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: contain;\n         object-fit: contain; }\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
        window.sr = ScrollReveal();
        sr.reveal('.logo', { origin: 'top', });
        sr.reveal('.title', { delay: 200, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.subtitle', { delay: 300, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.paragraph', { delay: 500, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.button', { delay: 1000, origin: 'bottom', distance: '200px', ease: 'ease-in-out', duration: 750 });
        sr.reveal('.side_right', { delay: 300, origin: 'bottom', scale: 0.8, ease: 'ease-in-out', duration: 500 });
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.scss */ "./src/app/home-page/home-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.html":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section_slider\">\n    <div class=\"block_title\">\n        <h1 class=\"title\">Why use it ?</h1>\n        <h2 class=\"subtitle\">Thanks to its engine, Magnus can tell you where you are and where to go even inside complex buildings without relying on GPS signal or expensive infrastructures,</h2>\n        <h4 class=\"subtitle\">you just need to enjoy the journey !</h4>\n      </div>\n\n      <div class=\"block_testimony\">\n        <div class=\"block_inner\">\n          <div class=\"block_inner--left\">\n            <p class=\"block_place\">Mairie de Paris</p>\n            <p class=\"block_event\">Hacking de l'hôtel de ville</p>\n            <p class=\"block_city\">Paris</p>\n            <p class=\"block_description\">The Mairie the Paris launched in mid-march its special event the « Hacking of hotel de ville ».\n              …</p>\n          </div>\n\n          <div class=\"block_inner--right\"></div>\n        </div>\n      </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/slider/slider.component.scss":
/*!**********************************************!*\
  !*** ./src/app/slider/slider.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  color: #373633; }\n\nh2 {\n  width: 50vw;\n  margin-top: 1em; }\n\n.block_title {\n  margin-left: 8vw;\n  margin-top: 100px; }\n\n.block_testimony {\n  width: 100vw;\n  height: 85vh;\n  min-height: 785px;\n  margin-top: 100px;\n  background: #6D5EF7;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.block_testimony .block_inner {\n    background-color: white;\n    width: 80vw;\n    height: 65vh;\n    min-height: 530px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n\n@media screen and (max-width: 820px) {\n      .block_testimony .block_inner {\n        flex-direction: column; } }\n\n.block_testimony .block_inner--left {\n      width: 30%;\n      padding: 30px; }\n\n@media screen and (max-width: 820px) {\n        .block_testimony .block_inner--left {\n          width: 85%; } }\n\n.block_testimony .block_inner--left .block_place {\n        font-size: 1.125em;\n        font-weight: 400; }\n\n.block_testimony .block_inner--left .block_event {\n        font-size: 1.125em; }\n\n.block_testimony .block_inner--left .block_city {\n        font-size: 1.125em;\n        font-weight: 400;\n        color: #57F5D2;\n        margin: 25px 0px; }\n\n.block_testimony .block_inner--right {\n      width: 70%;\n      height: 100%;\n      background-image: url('hacking.png');\n      background-size: cover;\n      background-position: center; }\n\n@media screen and (max-width: 820px) {\n        .block_testimony .block_inner--right {\n          width: 85%; } }\n"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
        sr.reveal('.title', { delay: 200, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.subtitle', { delay: 300, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.paragraph', { delay: 500, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.block_testimony', { delay: 300, scale: 0.5, ease: 'ease-in-out', duration: 1000 });
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/steps/steps.component.html":
/*!********************************************!*\
  !*** ./src/app/steps/steps.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"steps\">\n  <div class=\"block_title\">\n    <h1 class=\"title\">What can you do ?</h1>\n    <h2 class=\"subtitle\">Here are all the incredible things our super product can do for you :</h2>\n  </div>\n  <div class=\"block_detail\">\n    <div class=\"block_detail-left\">\n      <div class=\"block_title block_anim\">\n          <p class=\"number\">1</p>\n          <h4>Map your space</h4>\n      </div>\n\n      <div class=\"block_description\">\n        <p class=\"paragraph\">Magnus lets you map your space. Add walls, rooms, and even your hallways if you want to ! </p>\n        <img class=\"img\" src=\"../assets/imgs/capture.png\" alt=\"\">\n      </div>\n    </div>\n\n\n    <div class=\"block_detail-right\">\n        <div class=\"block_title block_anim\">\n            <p class=\"number\">2</p>\n            <h4>Add POIs</h4>\n        </div>\n\n        <div class=\"block_description\">\n          <p class=\"paragraph\">After that, you can add any point of interest you want. Then, let your users go to these points !</p>\n          <img class=\"img\" src=\"../assets/imgs/capture.png\" alt=\"\">\n        </div>\n      </div>\n\n\n      <div class=\"block_detail-left\">\n          <div class=\"block_title block_anim\">\n              <p class=\"number\">3</p>\n              <h4>Get your indoor itinirary</h4>\n          </div>\n\n          <div class=\"block_description\">\n            <p class=\"paragraph\">Thanks to its powerful engine, Magnus geolocalize you into your space and give you the best way to go to the point/room/hallway you selected</p>\n            <img class=\"img\" src=\"../assets/imgs/capture.png\" alt=\"\">\n          </div>\n        </div>\n\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/steps/steps.component.scss":
/*!********************************************!*\
  !*** ./src/app/steps/steps.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\n\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1;\n  overflow: hidden; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  font-family: Helvetica;\n  font-size: 3em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh4 {\n  font-family: Helvetica;\n  font-size: 2em;\n  color: #6D5EF7;\n  font-weight: 600; }\n\nh3 {\n  font-family: Helvetica;\n  font-size: 1.5em;\n  color: #373633;\n  font-weight: 400; }\n\nh2 {\n  font-family: Helvetica;\n  font-size: 2.25em;\n  color: #DFDFDF;\n  font-weight: 200;\n  line-height: 2em; }\n\n@media screen and (max-width: 1030px) {\n    h2 {\n      width: 100vw !important; } }\n\np {\n  font-family: Helvetica;\n  font-size: 1em;\n  color: #373633;\n  font-weight: 200;\n  line-height: 1.5em; }\n\nh1 {\n  color: #373633;\n  margin-left: 8vw; }\n\nh2 {\n  margin-left: 8vw;\n  width: 50vw;\n  margin-top: 1em; }\n\n.steps {\n  margin-top: 80px; }\n\n.steps .block_detail {\n    margin-top: 80px; }\n\n.steps .block_detail-left {\n      margin-top: 80px; }\n\n.steps .block_detail-left .block_title {\n        margin-left: 8vw;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center; }\n\n.steps .block_detail-left .block_title p {\n          color: white;\n          background: linear-gradient(#582CFF, #7571F4);\n          width: 65px;\n          height: 65px;\n          border-radius: 35px;\n          text-align: center;\n          font-size: 3em;\n          font-weight: bold;\n          margin-right: 0.5em; }\n\n.steps .block_detail-left .block_description {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center; }\n\n@media screen and (max-width: 820px) {\n          .steps .block_detail-left .block_description {\n            display: block;\n            margin-left: 8vw;\n            margin-top: 25px; } }\n\n.steps .block_detail-left .block_description img {\n          width: 50vw; }\n\n@media screen and (max-width: 820px) {\n            .steps .block_detail-left .block_description img {\n              margin: 0 auto;\n              display: block; } }\n\n.steps .block_detail-left .block_description p {\n          width: 20vw;\n          font-size: 1.2em;\n          font-weight: 400;\n          margin-right: 10em;\n          line-height: 2em; }\n\n@media screen and (max-width: 820px) {\n            .steps .block_detail-left .block_description p {\n              width: 100%;\n              margin-bottom: 15px; } }\n\n.steps .block_detail-right {\n      margin-top: 80px; }\n\n.steps .block_detail-right .block_title {\n        margin-right: 8vw;\n        display: flex;\n        justify-content: flex-start;\n        align-items: center;\n        flex-direction: row-reverse; }\n\n.steps .block_detail-right .block_title p {\n          color: white;\n          background: linear-gradient(#582CFF, #7571F4);\n          width: 65px;\n          height: 65px;\n          border-radius: 35px;\n          text-align: center;\n          font-size: 3em;\n          font-weight: bold;\n          margin-left: 0.5em; }\n\n.steps .block_detail-right .block_description {\n        display: flex;\n        justify-content: flex-end;\n        align-items: center;\n        flex-direction: row-reverse; }\n\n@media screen and (max-width: 820px) {\n          .steps .block_detail-right .block_description {\n            display: block;\n            margin-right: 8vw;\n            margin-top: 25px; } }\n\n.steps .block_detail-right .block_description img {\n          width: 50vw; }\n\n@media screen and (max-width: 820px) {\n            .steps .block_detail-right .block_description img {\n              margin: 0 auto;\n              display: block; } }\n\n.steps .block_detail-right .block_description p {\n          width: 20vw;\n          font-size: 1.2em;\n          font-weight: 400;\n          margin-left: 10em;\n          text-align: right;\n          line-height: 2em; }\n\n@media screen and (max-width: 820px) {\n            .steps .block_detail-right .block_description p {\n              width: 100%;\n              margin-bottom: 15px;\n              margin-left: 0em; } }\n"

/***/ }),

/***/ "./src/app/steps/steps.component.ts":
/*!******************************************!*\
  !*** ./src/app/steps/steps.component.ts ***!
  \******************************************/
/*! exports provided: StepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsComponent", function() { return StepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StepsComponent = /** @class */ (function () {
    function StepsComponent() {
    }
    StepsComponent.prototype.ngOnInit = function () {
        sr.reveal('.title', { delay: 200, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.block_anim', { delay: 100, opacity: 0, ease: 'ease-in-out', duration: 500 });
        sr.reveal('.subtitle', { delay: 300, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.paragraph', { delay: 500, origin: 'left', distance: '200px', ease: 'ease-in-out', duration: 500 });
        sr.reveal('.img', { delay: 300, origin: 'right', distance: '200px', ease: 'ease-in-out', duration: 1000 });
    };
    StepsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-steps',
            template: __webpack_require__(/*! ./steps.component.html */ "./src/app/steps/steps.component.html"),
            styles: [__webpack_require__(/*! ./steps.component.scss */ "./src/app/steps/steps.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StepsComponent);
    return StepsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mariemalherbe/Desktop/magnus-new/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map