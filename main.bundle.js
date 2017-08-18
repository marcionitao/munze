webpackJsonp([1,4],{

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 148;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(220),
        styles: [__webpack_require__(215)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_routing_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_coins_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__coins_coins_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__coin_details_coin_details_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__top_list_top_list_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__coins_coins_component__["a" /* CoinsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__coin_details_coin_details_component__["a" /* CoinDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__top_list_top_list_component__["a" /* TopListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__routing_routing_module__["a" /* RoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__service_coins_service__["a" /* CoinsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__top_list_top_list_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coin_details_coin_details_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coins_coins_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__coins_coins_component__["a" /* CoinsComponent */] },
    { path: 'selected/:id', component: __WEBPACK_IMPORTED_MODULE_2__coin_details_coin_details_component__["a" /* CoinDetailsComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'toplist', component: __WEBPACK_IMPORTED_MODULE_0__top_list_top_list_component__["a" /* TopListComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */]],
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "#head {\r\n  margin-top: 80px;\r\n}\r\n\r\n.card {\r\n  min-width: 30em;\r\n  max-width: 100em;\r\n  margin: 0 auto;\r\n  float: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.card-text {\r\n  vertical-align: middle;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 17px;\r\n  color: white;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.card-header {\r\n  background-color: transparent;\r\n  color: gold;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 20px;\r\n}\r\n\r\n.carousel-control-prev {\r\n  width: 3%;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#img-coin {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n#img {\r\n  margin-top: 30px;\r\n}\r\n\r\n#back {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\na {\r\n  vertical-align: middle;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 17px;\r\n  color: gold;\r\n}\r\n\r\n.col-1 {\r\n  padding: 1px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "#head {\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  width: auto;\r\n}\r\n\r\n#img {\r\n  vertical-align: middle;\r\n  width: 50px;\r\n  margin-left: 30px;\r\n}\r\n\r\n#title {\r\n  color: whitesmoke;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 18px;\r\n  margin-left: 4px;\r\n  vertical-align: middle;\r\n}\r\n\r\n#about {\r\n  color: gold;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 16px;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\n.navbar-brand {\r\n  margin-left: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "#head {\r\n  margin-top: 30px;\r\n}\r\n\r\n.card {\r\n  margin: 0 auto;\r\n  float: none;\r\n  background-color: transparent;\r\n}\r\n\r\n.card-header {\r\n  background-color: transparent;\r\n  color: gold;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 23px;\r\n}\r\n\r\n.carousel-control-prev {\r\n  width: 3%;\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card-block {\r\n  text-align: center;\r\n  padding: 7px;\r\n}\r\n\r\n.card-text {\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 18px;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n#img-coin {\r\n  width: 160px;\r\n  vertical-align: middle;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#currency {\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 17px;\r\n  color: gold;\r\n  text-align: left;\r\n  margin-right: 5px;\r\n  background-color: transparent;\r\n  display: inline-block;\r\n}\r\n\r\n#dados {\r\n  text-align: left;\r\n  margin-top: 30px;\r\n}\r\n\r\n#price {\r\n  text-align: left;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 40px;\r\n  color: white;\r\n  display: inline-block;\r\n}\r\n\r\n#c_price {\r\n  text-align: left;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 17px;\r\n  color: gold;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n#img-footer {\r\n  margin: 2px 5px;\r\n  width: 25px;\r\n  vertical-align: middle;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#back {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n#rank {\r\n  background-color: green;\r\n  border-radius: 5px;\r\n  color: white;\r\n  text-align: center!important;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 17px;\r\n}\r\n\r\n#_24h {\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 35px;\r\n  margin-left: 10px!important;\r\n  display: inline-block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "#head {\r\n  margin-top: 85px;\r\n  width: auto;\r\n}\r\n\r\n.card-columns {\r\n  max-width: 80em;\r\n  margin: 0 auto;\r\n  float: none;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media (min-width: 34em) {\r\n  .card-columns {\r\n    -webkit-column-count: 2;\r\n    column-count: 2;\r\n  }\r\n}\r\n\r\n@media (min-width: 48em) {\r\n  .card-columns {\r\n    -webkit-column-count: 3;\r\n    column-count: 3;\r\n  }\r\n}\r\n\r\n@media (min-width: 62em) {\r\n  .card-columns {\r\n    -webkit-column-count: 4;\r\n    column-count: 4;\r\n  }\r\n}\r\n\r\n@media (min-width: 75em) {\r\n  .card-columns {\r\n    -webkit-column-count: 5;\r\n    column-count: 5;\r\n  }\r\n}\r\n\r\n.card {\r\n  height: 8.5em;\r\n  background-color: rgba(67, 1, 35, 1);\r\n  border-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.card-inverse {\r\n  background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.card-header {\r\n /* text-align: left;*/\r\n  background-color: transparent;\r\n  padding: 5px;\r\n  color: white;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 18px;\r\n}\r\n\r\n.card-text {\r\n  vertical-align: middle;\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 19px;\r\n  color: white;\r\n  margin-bottom: 1px;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\n\r\n.col-8 {\r\n  text-align: center;\r\n}\r\n\r\n#img-coin {\r\n  width: 55px;\r\n  vertical-align: middle;\r\n}\r\n\r\n#_24 {\r\n  font-family: 'Questrial', sans-serif;\r\n  font-size: 16px;\r\n  margin-bottom: 5px!important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)(false);
// imports


// module
exports.push([module.i, "#head {\r\n  margin-top: 30px;\r\n}\r\n\r\n.carousel-control-prev {\r\n  width: 3%;\r\n   background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#back {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\n<div id=\"back\">\n  <a class=\"carousel-control-prev\" [routerLink]=\"['/home']\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <div class=\"card\">\n\n        <div class=\"card-header\">What is this?</div>\n        <div class=\"card-block\">\n          <p class=\"card-text\">\n            Cryptocurrencies emerged in 2009 with the first decentralized cryptocurrency - <a href=\"https://bitcoin.org/en/\"> Bitcoin</a> .  As of today - more than 700 digital\n            currencies exist with a total market capitalization greater than 100 billion USD.</p>\n          <br>\n          <p class=\"card-text\">\n            CryptoMünze is a real-time dashboard that displays the top 10 cryptocurrencies based on currency price, market capitalization\n            and overall circulating supply - obtained from the leading cryptocurrency resource <a href=\"https://coinmarketcap.com/\">CoinMarketCap.</a></p>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"row\" id=\"img\">\n\n    <div class=\"col\">\n     \n    </div>\n\n    <div class=\"col-1\">\n      <div class=\"text-center\">\n        <a href=\"https://angular.io/\"><img src=\"./assets/image/ang.png\" class=\"rounded\" id=\"img-coin\" alt=\"Angular\"></a>\n      </div>\n    </div>\n\n    <div class=\"col-1\">\n       <div class=\"text-center\">\n        <a href=\"https://www.npmjs.com/\"><img src=\"./assets/image/npm.png\" class=\"rounded\" id=\"img-coin\" alt=\"NPM\"></a>\n      </div>\n    </div>\n\n    <div class=\"col-1\">\n       <div class=\"text-center\">\n        <a href=\"https://v4-alpha.getbootstrap.com/\"><img src=\"./assets/image/bootstrap.png\" class=\"rounded\" id=\"img-coin\" alt=\"Bootstrap\"></a>\n      </div>\n    </div>\n\n    <div class=\"col-1\">\n       <div class=\"text-center\">\n        <a  href=\"https://github.com/marcionitao/munze/\"><img src=\"./assets/image/if_github_317712.png\" class=\"rounded\" id=\"img-coin\" alt=\"Github\"></a>\n      </div>\n    </div>\n\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\" id=\"head\">\n\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n     <img src=\"./assets/image/logo_2.png\" id=\"img\">\n     <span id=\"title\">CryptoMünze</span>\n  </a>\n\n\n  <div class=\"collapse navbar-collapse justify-content-end\">\n\n    <div class=\"nav navbar-nav\">\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/toplist']\" id=\"about\" style=\"color:white;\">Top 10 List</a>\n        <a class=\"nav-item nav-link\" [routerLink]=\"['/about']\" id=\"about\">What is this?</a>\n    </div>\n  </div>\n\n</nav>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\r\n  <div id=\"back\">\r\n    <a class=\"carousel-control-prev\" [routerLink]=\"['/home']\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    \r\n    <div class=\"row\">\r\n       <div class=\"col-5\">\r\n       </div>\r\n       <div class=\"col-4\">\r\n       </div>\r\n       <div class=\"col-3\">\r\n         <p id=\"currency\">Choose currency: </p>\r\n          <select class=\"selectpicker\" (click)=\"onChange($event.target.value)\">            \r\n              <option *ngFor=\"let item of currency\">{{item}}</option>\r\n            </select>\r\n        </div>\r\n          \r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"card-deck\">\r\n\r\n        <div class=\"card\" *ngFor=\"let coin of coins\">\r\n\r\n          <div class=\"card-header\">{{coin.name}}</div>\r\n\r\n          <div class=\"card-block\">\r\n            <img *ngIf=\"coin.name == 'Bitcoin'\" src=\"./assets/image/coin-1.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'Ethereum'\" src=\"./assets/image/coin-2.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'NEM'\" src=\"./assets/image/coin-3.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'Stratis'\" src=\"./assets/image/coin-4.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'Dash'\" src=\"./assets/image/coin-5.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'Ethereum Classic'\" src=\"./assets/image/coin-6.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'Litecoin'\" src=\"./assets/image/coin-7.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'Monero'\" src=\"./assets/image/coin-8.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'Ripple'\" src=\"./assets/image/coin-9.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'IOTA'\" src=\"./assets/image/coin-10.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'Bitcoin Cash'\" src=\"./assets/image/coin-11.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'NEO'\" src=\"https://files.coinmarketcap.com/static/img/coins/128x128/neo.png\" id=\"img-coin\">\r\n            <img *ngIf=\"coin.name == 'qtum'\" src=\"https://files.coinmarketcap.com/static/img/coins/128x128/qtum.png\" id=\"img-coin\">\r\n            <img *ngIf=\"(coin.name !== 'Bitcoin Cash') \r\n                && (coin.name !== 'Bitcoin') \r\n                && (coin.name !== 'Ethereum')\r\n                && (coin.name !== 'NEM')\r\n                && (coin.name !== 'Stratis')\r\n                && (coin.name !== 'Dash')\r\n                && (coin.name !== 'Ethereum Classic')\r\n                && (coin.name !== 'Litecoin')\r\n                && (coin.name !== 'Monero')\r\n                && (coin.name !== 'Ripple')\r\n                && (coin.name !== 'NEO')\r\n                && (coin.name !== 'Qtum')\r\n                && (coin.name !== 'IOTA')\" src=\"./assets/image/error.png\" id=\"img-coin\">\r\n            <br>\r\n            <span id=\"rank\"> Rank {{ coin.rank }} </span>\r\n          </div>\r\n\r\n          <div class=\"card-block\">\r\n            <p *ngIf=\"coin.name == 'Bitcoin'\" class=\"card-text\">\r\n              The first decentralized peer-to-peer payment network in which encryption techniques are used to regulate the generation of\r\n              units of currency and verify the transfer of funds, all operating independently of a central bank.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'Ethereum'\" class=\"card-text\">\r\n              An open-source, public, blockchain-based computing platform that enables developers to build and deploy decentralized applications.\r\n              Ether (ETH), the crypto token that fuels the Ethereum network acts as a tradeable cryptocurrency and is used to pay for transaction \r\n              fees and services on the network.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'Ripple'\" class=\"card-text\">\r\n              Both a digital currency (XRP) and a distributed real-time payment protocol within which that currency is transferred. Ripple's\r\n              distributed technology aims to enable banks to send real-time international payments across networks; to meet growing demands \r\n              for faster, low-cost, on-demand global payment services.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'Bitcoin Cash'\" class=\"card-text\">\r\n              A decentralized peer-to-peer payment network that came into existence as a result of a hard fork from the original bitcoin\r\n              blockchain. Bitcoin Cash emerged after some of the leading backers disagreed on how to take Bitcoin further and are utilizing \r\n              a new proposal that consists of a new transaction type and an increase in block limit size.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'Litecoin'\" class=\"card-text\">\r\n              An open-source peer-to-peer cryptocurrency that uses the scrypt proof of work algorithm as opposed to Bitcoin's hashing algorithm.\r\n              Litecoin was originally created to improve upon Bitcoin by speeding up transaction confirmations.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'NEM'\" class=\"card-text\">\r\n              A peer-to-peer cryptocurrency (XEM) and blockchain platform that has introduced new features in blockchain technology through\r\n              its proof-of-importance (POI) algorithm, encrypted messaging system, multisignature accounts and Eigentrust++\r\n              reputation system.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'Ethereum Classic'\" class=\"card-text\">\r\n              An open-source, blockchain-based computing platform that came into existence as a result of the DAO hard-fork. Identical\r\n              to Ethereum up to a certain block (block 1920000), Ethereum Classic consolidated members of the Ethereum community\r\n              who rejected the fork.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'Dash'\" class=\"card-text\">\r\n              An open-source peer-to-peer cryptocurrency that offers all the features of Bitcoin as well as other capabilities which include\r\n              private transactions, instant transactions and decentralized governance.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'IOTA'\" class=\"card-text\">\r\n              A new transactional settlement and data integrity layer for the Internet of Things. IOTA is based on a new distributed ledger\r\n              architecture which aims to overcome inefficiencies of current Blockchain designs to introduce a new way of\r\n              reaching peer-to-peer consensus.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'Monero'\" class=\"card-text\">\r\n              An open-source cryptocurrency that is heavily focused on privacy, decentralisation and scalability. Monero is based on the\r\n              CryptoNote protocol and has significant algorithmic differences to Bitcoin.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'Stratis'\" class=\"card-text\">\r\n              Stratis is a Blockchain-as-a-service (BaaS) Platform, created to provide solutions for corporations in the financial \r\n              sector that want to enjoy the benefits of Blockchain technology. Stratis allows companies to create their custom blockchain\r\n              applications with the features they require, making the development process simpler and accelerating the development\r\n              lifecycle for blockchain projects.\r\n            </p>\r\n            <p *ngIf=\"coin.name == 'NEO'\" class=\"card-text\">\r\n              China's first original and open-source public blockchain. Initially known as Antshares, Neo aims to support multiple \r\n              types of digital assets as well as allow users to establish smart contracts to enhance and enrich the functions of \r\n              said digital assets.\r\n            </p>\r\n              <p *ngIf=\"coin.name == 'Qtum'\" class=\"card-text\">\r\n              Qtum is an open source Proof of Stake (PoS) blockchain application platform. Qtum’s core technology combines a fork of \r\n              Bitcoin Core, an Account Abstraction Layer allowing for multiple Virtual Machines including the Ethereum Virtual Machine \r\n              (EVM) and Proof-of-Stake consensus aimed at tackling industry use cases. \r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"card-block\">\r\n            <a *ngIf=\"coin.name == 'Bitcoin'\" href=\"https://bitcoin.org/bitcoin.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Bitcoin'\" href=\"https://bitcoin.org/en/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Bitcoin'\" href=\"https://github.com/bitcoin\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'Ethereum'\" href=\"https://github.com/ethereum/wiki/wiki/White-Paper\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Ethereum'\" href=\"https://www.ethereum.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Ethereum'\" href=\"https://github.com/ethereum\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'Ripple'\" href=\"https://ripple.com/files/ripple_consensus_whitepaper.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Ripple'\" href=\"https://ripple.com/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Ripple'\" href=\"https://github.com/ripple\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'Litecoin'\" href=\"https://litecoin.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Litecoin'\" href=\"https://github.com/litecoin-project\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'NEM'\" href=\"https://www.nem.io/NEM_techRef.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'NEM'\" href=\"https://www.nem.io/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'NEM'\" href=\"https://github.com/NemProject\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'Ethereum Classic'\" href=\"https://coss.io/documents/white-papers/ethereum-classic.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Ethereum Classic'\" href=\"https://ethereumclassic.github.io/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Ethereum Classic'\" href=\"https://github.com/ethereumclassic\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'Dash'\" href=\"https://www.dash.org/wp-content/uploads/2015/04/Dash-WhitepaperV1.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Dash'\" href=\"https://www.dash.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Dash'\" href=\"https://github.com/dashpay\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'IOTA'\" href=\"https://iota.org/IOTA_Whitepaper.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'IOTA'\" href=\"https://iota.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'IOTA'\" href=\"https://github.com/iotaledger\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'NEO'\" href=\"https://github.com/neo-project/neo/wiki/Whitepaper-1.1\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'NEO'\" href=\"https://neo.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'NEO'\" href=\"https://github.com/neo-project\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n\r\n            <a *ngIf=\"coin.name == 'Monero'\" href=\"https://getmonero.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\r\n            <a *ngIf=\"coin.name == 'Monero'\" href=\"https://github.com/monero-project\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"card\" *ngFor=\"let coin of coins\">\r\n\r\n          <div class=\"card-block\" id=\"dados\" style=\"background-color: rgba(0, 0, 0, 0.2);\">\r\n\r\n            <legend id=\"c_price\">Current Price</legend>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'USD'\" >{{coin.price_usd | currency:'USD':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'AUD'\" >{{coin.price_aud | currency:'AUD':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'BRL'\" >{{coin.price_brl | currency:'BRL':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CAD'\" >{{coin.price_cad | currency:'CAD':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CHF'\" >{{coin.price_chf | currency:'CHF':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CNY'\" >{{coin.price_cny | currency:'CNY':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'EUR'\" >{{coin.price_eur | currency:'EUR':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'GBP'\" >{{coin.price_gbp | currency:'GBP':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'HKD'\" >{{coin.price_hkd | currency:'HKD':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'IDR'\" >{{coin.price_idr | currency:'IDR':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'INR'\" >{{coin.price_inr | currency:'INR':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'JPY'\" >{{coin.price_jpy | currency:'JPY':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'KRW'\" >{{coin.price_krw | currency:'KRW':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'MXN'\" >{{coin.price_mxn | currency:'MXN':true:'1.2-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'RUB'\" >{{coin.price_rub | currency:'RUB':true:'1.2-2'}}</p>\r\n\r\n            <p id=\"_24h\" *ngIf=\"coin.percent_change_24h < '0'\" style=\"color:red\">( {{coin.percent_change_24h}}% &darr;)</p>\r\n            <p id=\"_24h\" *ngIf=\"coin.percent_change_24h > '0'\" style=\"color:greenyellow\">( {{coin.percent_change_24h}}% &uarr;)</p>\r\n            <legend id=\"c_price\">Circulating Supply</legend>\r\n            <p id=\"price\">{{ coin.available_supply | number: '1.0-2'}}</p>\r\n            <p id=\"price\" style=\"margin-left:8px;\">{{ coin.symbol }}</p>\r\n            \r\n            <legend id=\"c_price\">Volume (24h)</legend>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'USD'\">{{coin['24h_volume_usd'] | currency:'USD':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'AUD'\">{{coin['24h_volume_aud'] | currency:'AUD':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'BRL'\">{{coin['24h_volume_brl'] | currency:'BRL':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CAD'\">{{coin['24h_volume_cad'] | currency:'CAD':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CHF'\">{{coin['24h_volume_chf'] | currency:'CHF':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CNY'\">{{coin['24h_volume_cny'] | currency:'CNY':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'EUR'\">{{coin['24h_volume_eur'] | currency:'EUR':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'GBP'\">{{coin['24h_volume_gbp'] | currency:'GBP':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'HKD'\">{{coin['24h_volume_hkd'] | currency:'HKD':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'IDR'\">{{coin['24h_volume_idr'] | currency:'IDR':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'INR'\">{{coin['24h_volume_inr'] | currency:'INR':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'JPY'\">{{coin['24h_volume_jpy'] | currency:'JPY':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'KRW'\">{{coin['24h_volume_krw'] | currency:'KRW':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'MXN'\">{{coin['24h_volume_mxn'] | currency:'MXN':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'RUB'\">{{coin['24h_volume_rub'] | currency:'RUB':true:'1.0-2'}}</p>\r\n           \r\n\r\n            <legend id=\"c_price\">Market Cap</legend>           \r\n            <p id=\"price\" *ngIf=\"selectValue == 'USD'\">{{ coin.market_cap_usd | currency:'USD':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'AUD'\">{{ coin.market_cap_aud | currency:'AUD':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'BRL'\">{{ coin.market_cap_brl | currency:'BRL':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CAD'\">{{ coin.market_cap_cad | currency:'CAD':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CHF'\">{{ coin.market_cap_chf | currency:'CHF':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'CNY'\">{{ coin.market_cap_cny | currency:'CNY':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'EUR'\">{{ coin.market_cap_eur | currency:'EUR':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'GBP'\">{{ coin.market_cap_gbp | currency:'GBP':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'HKD'\">{{ coin.market_cap_hkd | currency:'HKD':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'IDR'\">{{ coin.market_cap_idr | currency:'IDR':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'INR'\">{{ coin.market_cap_inr | currency:'INR':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'JPY'\">{{ coin.market_cap_jpy | currency:'JPY':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'KRW'\">{{ coin.market_cap_krw | currency:'KRW':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'MXN'\">{{ coin.market_cap_mxn | currency:'MXN':true:'1.0-2'}}</p>\r\n            <p id=\"price\" *ngIf=\"selectValue == 'RUB'\">{{ coin.market_cap_rub | currency:'RUB':true:'1.0-2'}}</p>\r\n         \r\n         \r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\n\n  <div class=\"card-columns\">\n\n    <div class=\"card card-inverse\" *ngFor=\"let coin of coins\">\n\n      <a (click)=\"coinDetails(coin.id)\">\n        \n        <div class=\"card-header\">\n          <span>{{coin.name}}</span>\n          <span style=\"float: right; color:gold; font-size:13px\">{{coin.rank}}º Rank</span>\n        </div>\n\n        <div class=\"card-block\">\n          \n          <div class=\"row\">\n            <div class=\"col-4\">\n              <img *ngIf=\"coin.name == 'Bitcoin'\"  src=\"./assets/image/coin-1.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Ethereum'\"  src=\"./assets/image/coin-2.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'NEM'\"  src=\"./assets/image/coin-3.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Stratis'\"  src=\"./assets/image/coin-4.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Dash'\"  src=\"./assets/image/coin-5.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Ethereum Classic'\"  src=\"./assets/image/coin-6.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Litecoin'\"  src=\"./assets/image/coin-7.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Monero'\"  src=\"./assets/image/coin-8.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Ripple'\"  src=\"./assets/image/coin-9.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'IOTA'\"  src=\"./assets/image/coin-10.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Bitcoin Cash'\"  src=\"./assets/image/coin-11.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'NEO'\"  src=\"https://files.coinmarketcap.com/static/img/coins/128x128/neo.png\" id=\"img-coin\">\n              <img *ngIf=\"coin.name == 'Qtum'\"  src=\"https://files.coinmarketcap.com/static/img/coins/128x128/qtum.png\" id=\"img-coin\">\n              <img *ngIf=\"(coin.name !== 'Bitcoin Cash') \n                && (coin.name !== 'Bitcoin') \n                && (coin.name !== 'Ethereum')\n                && (coin.name !== 'NEM')\n                && (coin.name !== 'Stratis')\n                && (coin.name !== 'Dash')\n                && (coin.name !== 'Ethereum Classic')\n                && (coin.name !== 'Litecoin')\n                && (coin.name !== 'Monero')\n                && (coin.name !== 'Ripple')\n                && (coin.name !== 'NEO')\n                && (coin.name !== 'Qtum')\n                && (coin.name !== 'IOTA')\"  src=\"./assets/image/error.png\" id=\"img-coin\">\n            </div>\n\n            <div class=\"col-8\">\n              <p class=\"card-text\">{{coin.price_usd | currency:'USD':true:'1.2-2'}}</p>\n              <p id=\"_24h\" *ngIf=\"coin.percent_change_24h < '0'\" style=\"color:red\">{{coin.percent_change_24h}}% &darr;</p>\n              <p id=\"_24h\" *ngIf=\"coin.percent_change_24h > '0'\" style=\"color:greenyellow\">{{coin.percent_change_24h}}% &uarr;</p>\n             \n            </div>\n          </div>\n\n        </div>\n      </a>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\n  <div id=\"back\">\n    <a class=\"carousel-control-prev\" [routerLink]=\"['/home']\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  </div>\n\n  <div class=\"container\">\n    \n    <table class=\"table table-responsive \" style=\"font-size:14px;\">\n      <thead style=\"color:azure\">\n        <tr class=\"default\">\n          <th>#</th>\n          <th>Rank</th>\n          <th>Name</th>                  \n          <th class=\"text-right\">Price</th>\n          <th class=\"text-right\">Market Cap</th>\n          <th class=\"text-right\">Volume(24h)</th>\n          <th class=\"text-right\">Circulating Supply</th>\n          <th class=\"text-center\">Change 1h</th>\n          <th class=\"text-center\">Change 24h</th>\n          <th class=\"text-center\">Change 7d</th>    \n          <th class=\"text-center\">Update Time</th>  \n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let coin of coins\" style=\"color:white\">\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Bitcoin'\" ><img src=\"./assets/image/coin-1.png\" style=\"width:16px;\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Ethereum'\" ><img src=\"./assets/image/coin-2.png\" style=\"width:16px;\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Ripple'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/ripple.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Bitcoin Cash'\" ><img src=\"./assets/image/coin-11.png\" style=\"width:16px;\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'NEM'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/nem.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Litecoin'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/litecoin.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'IOTA'\" ><img src=\"./assets/image/coin-10.png\" style=\"width:16px;\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'NEO'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/neo.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Dash'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/dash.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Ethereum Classic'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/ethereum-classic.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Qtum'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/qtum.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Stratis'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/stratis.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Monero'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/monero.png\"></td>\n\n            <td class=\"text-center\">{{coin.rank}}</td>\n            <td class=\"text-left\" style=\"color:gold\">{{coin.name}}</td>         \n            <td class=\"text-right\">{{coin.price_usd | currency:'USD':true:'1.2-2'}}</td>           \n            \n            <td class=\"text-right\">{{coin.market_cap_usd | currency:'USD':true:'1.0-2'}}</td>\n            <td class=\"text-right\">{{coin['24h_volume_usd'] | currency:'USD':true:'1.0-2'}}</td>\n            <td class=\"text-right\">{{coin.available_supply | number: '1.0-2'}}</td>    \n            <td  *ngIf=\"coin.percent_change_1h < '0'\" style=\"color:red\" class=\"text-center\">{{coin.percent_change_1h}}% &darr; </td>       \n            <td  *ngIf=\"coin.percent_change_1h > '0'\" style=\"color:greenyellow\" class=\"text-center\"> {{coin.percent_change_1h}}% &uarr; </td>\n            <td  *ngIf=\"coin.percent_change_24h < '0'\"style=\"color:red\" class=\"text-center\"> {{coin.percent_change_24h}}% &darr; </td>\n            <td  *ngIf=\"coin.percent_change_24h > '0'\"style=\"color:greenyellow\" class=\"text-center\"> {{coin.percent_change_24h}}% &uarr; </td>\n            <td  *ngIf=\"coin.percent_change_7d < '0'\" style=\"color:red\" class=\"text-center\"> {{coin.percent_change_7d}}% &darr; </td>\n            <td  *ngIf=\"coin.percent_change_7d > '0'\" style=\"color:greenyellow\" class=\"text-center\"> {{coin.percent_change_7d}}}% &uarr; </td>\n            <td class=\"text-center\" style=\"color:goldenrod\">{{ coin.last_updated * 1000 | date :'HH:mm:ss'  }}</td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n  \n</div>\n"

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CoinsService = (function () {
    function CoinsService(http) {
        this.http = http;
        // private headers = new Headers({ 'Content-Type': 'application/json' });
        this.urlBase = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
        this.urlDetails = 'https://api.coinmarketcap.com/v1/ticker';
    }
    /*
      getCoins() {
        return this.http.get(this.urlBase)
        .map(response => response.json())
        .catch(this.handleError);
      }
    */
    /* It will do GET request in server API location in 5000 mileseconds.
    So we will have our data updated in real time */
    CoinsService.prototype.getCoins = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .timer(0, 5000)
            .flatMap(function () { return _this.http.get(_this.urlBase); })
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CoinsService.prototype.getCoin = function (id) {
        this.idCoin = id;
        var url = this.urlDetails + '/' + id + '/';
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CoinsService.prototype.getCurrency = function (currency) {
        var url = this.urlDetails + '/' + this.idCoin + '/?convert=' + currency;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    // method of test
    CoinsService.prototype.getCoinCurrency = function (coin) {
        console.log('Coin: ' + coin + ' Currency: ' + this.idCoin);
    };
    CoinsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CoinsService;
}());
CoinsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CoinsService);

var _a;
//# sourceMappingURL=coins.service.js.map

/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(219),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_coins_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Location } from '@angular/common';

var CoinDetailsComponent = (function () {
    function CoinDetailsComponent(route, coinsService) {
        this.route = route;
        this.coinsService = coinsService;
        this.selectValue = 'USD';
        this.currency = ['USD', 'AUD', 'BRL', 'CAD', 'CHF', 'CNY', 'EUR', 'GBP', 'HKD', 'IDR', 'INR', 'JPY', 'KRW', 'MXN', 'RUB'];
    }
    CoinDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.coinsService.getCoin(params['id']); })
            .subscribe(function (coin) { _this.coins = coin; });
    };
    CoinDetailsComponent.prototype.onChange = function (item) {
        var _this = this;
        console.log(item);
        this.selectValue = item;
        // get convert value coin
        this.coinsService.getCurrency(item)
            .subscribe(function (coin) { _this.coins = coin; console.log(_this.coins); });
    };
    return CoinDetailsComponent;
}());
CoinDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-coin-details',
        template: __webpack_require__(221),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */]) === "function" && _b || Object])
], CoinDetailsComponent);

var _a, _b;
//# sourceMappingURL=coin-details.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_coins_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CoinsComponent = (function () {
    // selectedCoin: Coins;
    function CoinsComponent(coinsService, router) {
        this.coinsService = coinsService;
        this.router = router;
    }
    CoinsComponent.prototype.ngOnInit = function () {
        this.getCoins();
    };
    CoinsComponent.prototype.getCoins = function () {
        var _this = this;
        this.coinsService.getCoins().subscribe(function (data) {
            _this.coins = data;
            // console.log(data);
        });
    };
    CoinsComponent.prototype.coinDetails = function (id) {
        this.router.navigate(['/selected', id]);
    };
    return CoinsComponent;
}());
CoinsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-coins',
        template: __webpack_require__(222),
        styles: [__webpack_require__(217)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CoinsComponent);

var _a, _b;
//# sourceMappingURL=coins.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_coins_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopListComponent = (function () {
    function TopListComponent(coinsService) {
        this.coinsService = coinsService;
    }
    TopListComponent.prototype.ngOnInit = function () {
        this.getCoins();
    };
    TopListComponent.prototype.getCoins = function () {
        var _this = this;
        this.coinsService.getCoins()
            .subscribe(function (coin) { _this.coins = coin; console.log(coin); });
    };
    return TopListComponent;
}());
TopListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'app-top-list',
        template: __webpack_require__(223),
        styles: [__webpack_require__(218)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */]) === "function" && _a || Object])
], TopListComponent);

var _a;
//# sourceMappingURL=top-list.component.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.bundle.js.map