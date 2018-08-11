webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#head {\n  margin-top: 80px;\n}\n\n.card {\n  min-width: 30em;\n  max-width: 100em;\n  margin: 0 auto;\n  float: none;\n  background-color: transparent;\n}\n\n.card-text {\n  vertical-align: middle;\n  font-family: 'Questrial', sans-serif;\n  font-size: 17px;\n  color: white;\n  margin-bottom: 2px;\n}\n\n.card-header {\n  background-color: transparent;\n  color: gold;\n  font-family: 'Questrial', sans-serif;\n  font-size: 20px;\n}\n\n.carousel-control-prev {\n  width: 3%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n#img-coin {\n  width: 40px;\n  height: 40px;\n}\n\n#img {\n  margin-top: 30px;\n}\n\n#back {\n  text-align: center;\n  vertical-align: middle;\n}\n\na {\n  vertical-align: middle;\n  font-family: 'Questrial', sans-serif;\n  font-size: 17px;\n  color: gold;\n}\n\n.col-1 {\n  padding: 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\n  <div id=\"back\">\n    <a class=\"carousel-control-prev\" routerLink=\"/home\" role=\"button\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n\n        <div class=\"card\">\n\n          <div class=\"card-header\">What is this?</div>\n          <div class=\"card-block\">\n            <p class=\"card-text\">\n              Cryptocurrencies emerged in 2009 with the first decentralized cryptocurrency - <a href=\"https://bitcoin.org/en/\"> Bitcoin</a> .  As of today - more than 700 digital\n              currencies exist with a total market capitalization greater than 100 billion USD.</p>\n            <br>\n            <p class=\"card-text\">\n              CryptoMünze is a real-time dashboard that displays the top 10 cryptocurrencies based on currency price, market capitalization\n              and overall circulating supply - obtained from the leading cryptocurrency resource <a href=\"https://coinmarketcap.com/\">CoinMarketCap.</a></p>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"row\" id=\"img\">\n\n      <div class=\"col\">\n      \n      </div>\n\n      <div class=\"col-1\">\n        <div class=\"text-center\">\n          <a  href=\"https://github.com/marcionitao/munze/\"><img src=\"./assets/image/if_github_317712.png\" class=\"rounded\" id=\"img-coin\" alt=\"Github\"></a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#head {\n  padding: 10px;\n  background-color: transparent;\n  width: auto;\n}\n\n#img {\n  vertical-align: middle;\n  width: 50px;\n}\n\n#title {\n  color: whitesmoke;\n  font-family: 'Questrial', sans-serif;\n  font-size: 18px;\n  margin-left: 4px;\n  vertical-align: middle;\n}\n\n#about {\n  color: gold;\n  font-family: 'Questrial', sans-serif;\n  font-size: 16px;\n}\n\na {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.navbar-brand {\n  margin-left: 35px;\n}\n\n.navbar {\n  width:100%;\n  padding: 0;\n  background:none !important;\n}\n\n.navbar-toggler {\n  cursor:pointer;\n  outline:0;\n}\n\n.nav-link {\n  text-transform:uppercase;\n  font-weight:bold;\n}\n\n.nav-item {\n  padding: 0 1rem;\n}\n\n@media(max-width: 34em) {\n  .navbar-brand {\n    margin-left: 5px;\n  }\n}\n\n@media(max-width: 34em) {\n  .nav-item {\n     padding: 0;\n  }\n}\n\n@media(max-width: 34em) {\n  .nav-link {\n    margin-top: 10px;\n    font-weight:normal;\n    color:#fff !important;\n  }\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse\" id=\"head\">\n  \n    <a class=\"navbar-brand\" routerLink=\"/home\">\n      <img src=\"./assets/image/logo_2.png\" id=\"img\">\n      <span id=\"title\">CryptoMünze</span>\n   </a>\n\n   <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n           <a class=\"nav-item nav-link\" routerLink=\"/toplist\" id=\"about\" style=\"color:white;\">Top 10 List</a>\n        </li>\n        <li class=\"nav-item\">\n           <a class=\"nav-item nav-link\" routerLink=\"/about\" id=\"about\">What is this?</a>\n        </li>\n    </ul>\n  </div>\n\n</nav>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // Add to Google Analytics
    function AppComponent(router) {
        this.router = router;
        this.title = 'app works!';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                window.ga('set', 'page', event.urlAfterRedirects);
                window.ga('send', 'pageview');
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_coins_service__ = __webpack_require__("../../../../../src/app/service/coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__coins_coins_component__ = __webpack_require__("../../../../../src/app/coins/coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__coin_details_coin_details_component__ = __webpack_require__("../../../../../src/app/coin-details/coin-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__top_list_top_list_component__ = __webpack_require__("../../../../../src/app/top-list/top-list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { HttpModule } from '@angular/http';







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__coins_coins_component__["a" /* CoinsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__coin_details_coin_details_component__["a" /* CoinDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__top_list_top_list_component__["a" /* TopListComponent */],
                __WEBPACK_IMPORTED_MODULE_7_time_ago_pipe__["TimeAgoPipe"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__routing_routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_4__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_coins_service__["a" /* CoinsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/coin-details/coin-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#head {\n  margin-top: 30px;\n}\n\n.card {\n  margin: 0 auto;\n  float: none;\n  background-color: transparent;\n}\n\n.card-header {\n  background-color: transparent;\n  color: gold;\n  font-family: 'Questrial', sans-serif;\n  font-size: 23px;\n}\n\n.carousel-control-prev {\n  width: 3%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.card-block {\n  text-align: center;\n  padding: 7px;\n}\n\n.card-text {\n  font-family: 'Questrial', sans-serif;\n  font-size: 18px;\n  color: white;\n  text-align: center;\n}\n\n#img-coin {\n  width: 130px;\n  vertical-align: middle;\n  margin-bottom: 5px;\n}\n\n#currency {\n  font-family: 'Questrial', sans-serif;\n  font-size: 17px;\n  color: gold;\n  text-align: left;\n  margin-right: 5px;\n  background-color: transparent;\n  display: inline-block;\n}\n\n#dados {\n  text-align: left;\n  margin-top: 30px;\n}\n\n#price {\n  text-align: left;\n  font-family: 'Questrial', sans-serif;\n  font-size: 40px;\n  color: white;\n  display: inline-block;\n}\n\n#c_price {\n  text-align: left;\n  font-family: 'Questrial', sans-serif;\n  font-size: 17px;\n  color: gold;\n  margin-bottom: 4px;\n}\n\n#img-footer {\n  margin: 2px 5px;\n  width: 25px;\n  vertical-align: middle;\n  margin-bottom: 10px;\n}\n\n#back {\n  text-align: center;\n  vertical-align: middle;\n}\n\n#rank {\n  background-color: green;\n  border-radius: 5px;\n  color: white;\n  text-align: center!important;\n  font-family: 'Questrial', sans-serif;\n  font-size: 17px;\n}\n\n#_24h {\n  font-family: 'Questrial', sans-serif;\n  font-size: 35px;\n  margin-left: 10px!important;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coin-details/coin-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\n  <div id=\"back\">\n    <a class=\"carousel-control-prev\" routerLink=\"/home\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n  </div>\n\n  <div class=\"container\">\n    \n    <div class=\"row\">\n       <div class=\"col-5\">\n       </div>\n       <div class=\"col-4\">\n       </div>\n       <div class=\"col-3\">\n         <p id=\"currency\">Choose currency: </p>\n          <select class=\"selectpicker\" (click)=\"onChange($event.target.value)\">            \n              <option *ngFor=\"let item of currency\">{{item}}</option>\n            </select>\n        </div>\n          \n    </div>\n\n    <div class=\"row\">\n      <div class=\"card-deck\">\n\n        <div class=\"card\" *ngFor=\"let coin of coins\">\n\n          <div class=\"card-header\">{{coin.name}}</div>\n\n          <div class=\"card-block\">\n            <img *ngIf=\"coin.name == 'Bitcoin'\" src=\"./assets/image/coin-1.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Ethereum'\" src=\"./assets/image/coin-2.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'NEM'\" src=\"./assets/image/coin-3.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Stratis'\" src=\"./assets/image/coin-4.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Dash'\" src=\"./assets/image/coin-5.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Ethereum Classic'\" src=\"./assets/image/coin-6.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Litecoin'\" src=\"./assets/image/coin-7.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Monero'\" src=\"./assets/image/coin-8.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Ripple'\" src=\"./assets/image/coin-9.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'IOTA'\" src=\"./assets/image/coin-10.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Bitcoin Cash'\" src=\"./assets/image/coin-11.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'NEO'\" src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/1376.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'TRON'\" src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'qtum'\" src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/qtum.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'BitConnect'\" src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/bitconnect.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Bitcoin Gold'\" src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/bitcoin-gold.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Cardano'\" src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/2010.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'Stellar'\" src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/512.png\" id=\"img-coin\">\n            <img *ngIf=\"coin.name == 'EOS'\" src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/1765.png\" id=\"img-coin\">\n            <img *ngIf=\"(coin.name !== 'Bitcoin Cash') \n                && (coin.name !== 'Bitcoin') \n                && (coin.name !== 'Ethereum')\n                && (coin.name !== 'NEM')\n                && (coin.name !== 'Stellar')\n                && (coin.name !== 'EOS')\n                && (coin.name !== 'Stratis')\n                && (coin.name !== 'Dash')\n                && (coin.name !== 'Ethereum Classic')\n                && (coin.name !== 'Litecoin')\n                && (coin.name !== 'Monero')\n                && (coin.name !== 'Ripple')\n                && (coin.name !== 'TRON')\n                && (coin.name !== 'NEO')\n                && (coin.name !== 'Qtum')\n                && (coin.name !== 'BitConnect')\n                && (coin.name !== 'Bitcoin Gold')\n                && (coin.name !== 'Cardano')\n                && (coin.name !== 'IOTA')\" src=\"./assets/image/error.png\" id=\"img-coin\">\n            <br>\n            <span id=\"rank\"> Rank {{ coin.rank }} </span>\n          </div>\n\n          <div class=\"card-block\">\n            <p *ngIf=\"coin.name == 'Bitcoin'\" class=\"card-text\">\n              The first decentralized peer-to-peer payment network in which encryption techniques are used to regulate the generation of\n              units of currency and verify the transfer of funds, all operating independently of a central bank.\n            </p>\n            <p *ngIf=\"coin.name == 'Ethereum'\" class=\"card-text\">\n              An open-source, public, blockchain-based computing platform that enables developers to build and deploy decentralized applications.\n              Ether (ETH), the crypto token that fuels the Ethereum network acts as a tradeable cryptocurrency and is used to pay for transaction \n              fees and services on the network.\n            </p>\n            <p *ngIf=\"coin.name == 'Ripple'\" class=\"card-text\">\n              Both a digital currency (XRP) and a distributed real-time payment protocol within which that currency is transferred. Ripple's\n              distributed technology aims to enable banks to send real-time international payments across networks; to meet growing demands \n              for faster, low-cost, on-demand global payment services.\n            </p>\n            <p *ngIf=\"coin.name == 'Bitcoin Cash'\" class=\"card-text\">\n              A decentralized peer-to-peer payment network that came into existence as a result of a hard fork from the original bitcoin\n              blockchain. Bitcoin Cash emerged after some of the leading backers disagreed on how to take Bitcoin further and are utilizing \n              a new proposal that consists of a new transaction type and an increase in block limit size.\n            </p>\n            <p *ngIf=\"coin.name == 'Litecoin'\" class=\"card-text\">\n              An open-source peer-to-peer cryptocurrency that uses the scrypt proof of work algorithm as opposed to Bitcoin's hashing algorithm.\n              Litecoin was originally created to improve upon Bitcoin by speeding up transaction confirmations.\n            </p>\n            <p *ngIf=\"coin.name == 'NEM'\" class=\"card-text\">\n              A peer-to-peer cryptocurrency (XEM) and blockchain platform that has introduced new features in blockchain technology through\n              its proof-of-importance (POI) algorithm, encrypted messaging system, multisignature accounts and Eigentrust++\n              reputation system.\n            </p>\n            <p *ngIf=\"coin.name == 'TRON'\" class=\"card-text\">\n                TRON is one of the largest blockchain-based operating systems in the world.\n              </p>\n            <p *ngIf=\"coin.name == 'Ethereum Classic'\" class=\"card-text\">\n              An open-source, blockchain-based computing platform that came into existence as a result of the DAO hard-fork. Identical\n              to Ethereum up to a certain block (block 1920000), Ethereum Classic consolidated members of the Ethereum community\n              who rejected the fork.\n            </p>\n            <p *ngIf=\"coin.name == 'Dash'\" class=\"card-text\">\n              An open-source peer-to-peer cryptocurrency that offers all the features of Bitcoin as well as other capabilities which include\n              private transactions, instant transactions and decentralized governance.\n            </p>\n            <p *ngIf=\"coin.name == 'IOTA'\" class=\"card-text\">\n              A new transactional settlement and data integrity layer for the Internet of Things. IOTA is based on a new distributed ledger\n              architecture which aims to overcome inefficiencies of current Blockchain designs to introduce a new way of\n              reaching peer-to-peer consensus.\n            </p>\n            <p *ngIf=\"coin.name == 'Monero'\" class=\"card-text\">\n              An open-source cryptocurrency that is heavily focused on privacy, decentralisation and scalability. Monero is based on the\n              CryptoNote protocol and has significant algorithmic differences to Bitcoin.\n            </p>\n            <p *ngIf=\"coin.name == 'Stratis'\" class=\"card-text\">\n              Stratis is a Blockchain-as-a-service (BaaS) Platform, created to provide solutions for corporations in the financial \n              sector that want to enjoy the benefits of Blockchain technology. Stratis allows companies to create their custom blockchain\n              applications with the features they require, making the development process simpler and accelerating the development\n              lifecycle for blockchain projects.\n            </p>\n            <p *ngIf=\"coin.name == 'NEO'\" class=\"card-text\">\n              China's first original and open-source public blockchain. Initially known as Antshares, Neo aims to support multiple \n              types of digital assets as well as allow users to establish smart contracts to enhance and enrich the functions of \n              said digital assets.\n            </p>\n            <p *ngIf=\"coin.name == 'Qtum'\" class=\"card-text\">\n              Qtum is an open source Proof of Stake (PoS) blockchain application platform. Qtum’s core technology combines a fork of \n              Bitcoin Core, an Account Abstraction Layer allowing for multiple Virtual Machines including the Ethereum Virtual Machine \n              (EVM) and Proof-of-Stake consensus aimed at tackling industry use cases. \n            </p>\n            <p *ngIf=\"coin.name == 'BitConnect'\" class=\"card-text\">\n              BitConnect is an open source all in one bitcoin and crypto community platform designed to provide multiple investment \n              opportunities with cryptocurrency education where it is entirely possible to find the independence we all desire, in a \n              community of like-minded, freedom loving individuals who, like you, are seeking the possibility of income stability in \n              a very unstable world.\n            </p>\n            <p *ngIf=\"coin.name == 'Bitcoin Gold'\" class=\"card-text\">\n              Bitcoin Gold is a fork of the Bitcoin blockchain. At block 491407, Bitcoin Gold miners will begin creating blocks with \n              a new proof-of-work algorithm, and this will cause a bifurcation of the Bitcoin blockchain. The original Bitcoin blockchain \n              will continue on unaltered, but a new branch of the blockchain will split off from the original chain. The new branch is a \n              distinct blockchain with the same transaction history as Bitcoin up until the fork, but then diverges from it. As a result \n              of this process, a new cryptocurrency is born.\n            </p>\n            <p *ngIf=\"coin.name == 'Cardano'\" class=\"card-text\">\n              Cardano is a decentralised public blockchain and cryptocurrency project and is fully open source. Cardano is developing \n              a smart contract platform which seeks to deliver more advanced features than any protocol previously developed. It is the \n              first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development \n              team consists of a large global collective of expert engineers and researchers\n            </p>\n            <p *ngIf=\"coin.name == 'Stellar'\" class=\"card-text\">\n              Stellar is a platform that connects banks, payments systems, and people. Integrate to move money quickly, reliably, and \n              at almost no cost.\n            </p>\n            <p *ngIf=\"coin.name == 'EOS'\" class=\"card-text\">\n              The EOS.IO Testnet has arrived. Scalable decentralized applications can now be built and tested in a public environment.\n            </p>\n          </div>\n\n          <div class=\"card-block\">\n            <a *ngIf=\"coin.name == 'Bitcoin'\" href=\"https://bitcoin.org/bitcoin.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Bitcoin'\" href=\"https://bitcoin.org/en/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Bitcoin'\" href=\"https://github.com/bitcoin\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'Ethereum'\" href=\"https://github.com/ethereum/wiki/wiki/White-Paper\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Ethereum'\" href=\"https://www.ethereum.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Ethereum'\" href=\"https://github.com/ethereum\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'Ripple'\" href=\"https://ripple.com/files/ripple_consensus_whitepaper.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Ripple'\" href=\"https://ripple.com/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Ripple'\" href=\"https://github.com/ripple\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'Litecoin'\" href=\"https://litecoin.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Litecoin'\" href=\"https://github.com/litecoin-project\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'NEM'\" href=\"https://www.nem.io/NEM_techRef.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'NEM'\" href=\"https://www.nem.io/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'NEM'\" href=\"https://github.com/NemProject\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'Ethereum Classic'\" href=\"https://coss.io/documents/white-papers/ethereum-classic.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Ethereum Classic'\" href=\"https://ethereumclassic.github.io/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Ethereum Classic'\" href=\"https://github.com/ethereumclassic\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'Dash'\" href=\"https://www.dash.org/wp-content/uploads/2015/04/Dash-WhitepaperV1.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Dash'\" href=\"https://www.dash.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Dash'\" href=\"https://github.com/dashpay\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'IOTA'\" href=\"https://iota.org/IOTA_Whitepaper.pdf\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'IOTA'\" href=\"https://iota.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'IOTA'\" href=\"https://github.com/iotaledger\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'NEO'\" href=\"https://github.com/neo-project/neo/wiki/Whitepaper-1.1\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'NEO'\" href=\"https://neo.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'NEO'\" href=\"https://github.com/neo-project\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'Monero'\" href=\"https://getmonero.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'Monero'\" href=\"https://github.com/monero-project\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'BitConnect'\" href=\"https://bitconnect.co/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'Stellar'\" href=\"https://www.stellar.org/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'TRON'\" href=\"https://tron.network/index?lng=en\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n\n            <a *ngIf=\"coin.name == 'EOS'\" href=\"https://medium.com/eosio/eos-io-dawn-2-0-released-development-update-c19348eac3c7\"><img src=\"./assets/image/if_document_2318462.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'EOS'\" href=\"https://eos.io/\"><img src=\"./assets/image/if_office-47_809586.png\" id=\"img-footer\"></a>\n            <a *ngIf=\"coin.name == 'EOS'\" href=\"https://github.com/eosio\"><img src=\"./assets/image/if_github_317712.png\" id=\"img-footer\"></a>\n\n          </div>\n\n        </div>\n\n        <div class=\"card\" *ngFor=\"let coin of coins\">\n\n          <div class=\"card-block\" id=\"dados\" style=\"background-color: rgba(0, 0, 0, 0.2);\">\n\n            <legend id=\"c_price\">Current Price</legend>\n            <p id=\"price\" *ngIf=\"selectValue == 'USD'\" >{{coin.quotes.USD?.price | currency:'USD':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'AUD'\" >{{coin.quotes.AUD?.price | currency:'AUD':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'BRL'\" >{{coin.quotes.BRL?.price | currency:'BRL':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CAD'\" >{{coin.quotes.CAD?.price | currency:'CAD':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CHF'\" >{{coin.quotes.CHF?.price | currency:'CHF':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CNY'\" >{{coin.quotes.CNY?.price | currency:'CNY':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'EUR'\" >{{coin.quotes.EUR?.price | currency:'EUR':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'GBP'\" >{{coin.quotes.GBP?.price | currency:'GBP':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'HKD'\" >{{coin.quotes.HKD?.price | currency:'HKD':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'IDR'\" >{{coin.quotes.IDR?.price | currency:'IDR':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'INR'\" >{{coin.quotes.INR?.price | currency:'INR':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'JPY'\" >{{coin.quotes.JPY?.price | currency:'JPY':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'KRW'\" >{{coin.quotes.KRW?.price | currency:'KRW':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'MXN'\" >{{coin.quotes.MXN?.price | currency:'MXN':code:'1.2-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'RUB'\" >{{coin.quotes.RUB?.price | currency:'RUB':code:'1.2-2'}}</p>\n\n            <p id=\"_24h\" *ngIf=\"coin.quotes.USD.percent_change_24h < '0'\" style=\"color:red\">( {{coin.quotes.USD.percent_change_24h}}% &darr;)</p>\n            <p id=\"_24h\" *ngIf=\"coin.quotes.USD.percent_change_24h > '0'\" style=\"color:greenyellow\">( {{coin.quotes.USD.percent_change_24h}}% &uarr;)</p>\n            <legend id=\"c_price\">Circulating Supply</legend>\n            <p id=\"price\">{{ coin.total_supply | number: '1.0-2'}}</p>\n            <p id=\"price\" style=\"margin-left:8px;\">{{ coin.symbol }}</p>\n            \n            <legend id=\"c_price\">Volume (24h)</legend>\n            <p id=\"price\" *ngIf=\"selectValue == 'USD'\">{{coin.quotes.USD?.volume_24h | currency:'USD':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'AUD'\">{{coin.quotes.AUD?.volume_24h | currency:'AUD':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'BRL'\">{{coin.quotes.BRL?.volume_24h | currency:'BRL':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CAD'\">{{coin.quotes.CAD?.volume_24h | currency:'CAD':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CHF'\">{{coin.quotes.CHF?.volume_24h | currency:'CHF':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CNY'\">{{coin.quotes.CNY?.volume_24h | currency:'CNY':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'EUR'\">{{coin.quotes.EUR?.volume_24h | currency:'EUR':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'GBP'\">{{coin.quotes.GBP?.volume_24h | currency:'GBP':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'HKD'\">{{coin.quotes.HKD?.volume_24h | currency:'HKD':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'IDR'\">{{coin.quotes.IDR?.volume_24h | currency:'IDR':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'INR'\">{{coin.quotes.INR?.volume_24h | currency:'INR':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'JPY'\">{{coin.quotes.JPY?.volume_24h | currency:'JPY':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'KRW'\">{{coin.quotes.KRW?.volume_24h | currency:'KRW':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'MXN'\">{{coin.quotes.MXN?.volume_24h | currency:'MXN':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'RUB'\">{{coin.quotes.RUB?.volume_24h | currency:'RUB':code:'1.0-2'}}</p>\n           \n\n            <legend id=\"c_price\">Market Cap</legend>           \n            <p id=\"price\" *ngIf=\"selectValue == 'USD'\">{{ coin.quotes.USD?.market_cap | currency:'USD':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'AUD'\">{{ coin.quotes.AUD?.market_cap | currency:'AUD':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'BRL'\">{{ coin.quotes.BRL?.market_cap | currency:'BRL':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CAD'\">{{ coin.quotes.CAD?.market_cap | currency:'CAD':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CHF'\">{{ coin.quotes.CHF?.market_cap | currency:'CHF':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'CNY'\">{{ coin.quotes.CNY?.market_cap | currency:'CNY':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'EUR'\">{{ coin.quotes.EUR?.market_cap | currency:'EUR':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'GBP'\">{{ coin.quotes.GBP?.market_cap | currency:'GBP':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'HKD'\">{{ coin.quotes.HKD?.market_cap | currency:'HKD':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'IDR'\">{{ coin.quotes.IDR?.market_cap | currency:'IDR':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'INR'\">{{ coin.quotes.INR?.market_cap | currency:'INR':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'JPY'\">{{ coin.quotes.JPY?.market_cap | currency:'JPY':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'KRW'\">{{ coin.quotes.KRW?.market_cap | currency:'KRW':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'MXN'\">{{ coin.quotes.MXN?.market_cap | currency:'MXN':code:'1.0-2'}}</p>\n            <p id=\"price\" *ngIf=\"selectValue == 'RUB'\">{{ coin.quotes.RUB?.market_cap | currency:'RUB':code:'1.0-2'}}</p>\n                 \n          </div>\n\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/coin-details/coin-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_coins_service__ = __webpack_require__("../../../../../src/app/service/coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
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
        this.coins = [];
    }
    CoinDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.coinsService.getCoin(params['id']); })
            .subscribe(
        // this converte to json object to array
        function (data) {
            _this.coins = [];
            Object.keys(data)
                .map(function (key) {
                _this.coins.push(data[key]);
            });
            // item removed of array
            _this.coins.splice(1);
        });
    };
    CoinDetailsComponent.prototype.onChange = function (item) {
        var _this = this;
        console.log(item);
        this.selectValue = item;
        // get convert value coin
        this.coinsService.getCurrency(item)
            .subscribe(
        // this converte to json object to array
        function (data) {
            _this.coins = [];
            Object.keys(data)
                .map(function (key) {
                _this.coins.push(data[key]);
            });
            // item removed of array
            _this.coins.splice(1);
        });
    };
    CoinDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-coin-details',
            template: __webpack_require__("../../../../../src/app/coin-details/coin-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/coin-details/coin-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */]])
    ], CoinDetailsComponent);
    return CoinDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/coins/coins.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#head {\n  margin-top: 85px;\n  width: auto;\n}\n\n.card-columns {\n  max-width: 80em;\n  margin: 0 auto;\n  float: none;\n  margin-bottom: 20px;\n}\n\n@media (min-width: 34em) {\n  .card-columns {\n    -webkit-column-count: 2;\n    column-count: 2;\n  }\n}\n\n@media (min-width: 48em) {\n  .card-columns {\n    -webkit-column-count: 3;\n    column-count: 3;\n  }\n}\n\n@media (min-width: 62em) {\n  .card-columns {\n    -webkit-column-count: 4;\n    column-count: 4;\n  }\n}\n\n@media (min-width: 75em) {\n  .card-columns {\n    -webkit-column-count: 5;\n    column-count: 5;\n  }\n}\n\n.card {\n  height: 8.5em;\n  background-color: rgba(67, 1, 35, 1);\n  border-color: rgba(255, 255, 255, 0.2);\n}\n\n.card-inverse {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.card-header {\n /* text-align: left;*/\n  background-color: transparent;\n  padding: 5px;\n  color: white;\n  font-family: 'Questrial', sans-serif;\n  font-size: 18px;\n}\n\n.card-text {\n  vertical-align: middle;\n  font-family: 'Questrial', sans-serif;\n  font-size: 19px;\n  color: white;\n  margin-bottom: 1px;\n}\n\na {\n  cursor: pointer;\n  cursor: hand;\n}\n\n.col-8 {\n  text-align: center;\n}\n\n#img-coin {\n  width: 55px;\n  vertical-align: middle;\n}\n\n#_24 {\n  font-family: 'Questrial', sans-serif;\n  font-size: 16px;\n  margin-bottom: 5px!important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coins/coins.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\r\n\r\n  <div class=\"card-columns\">\r\n\r\n    <div class=\"card card-inverse\" *ngFor=\"let coin of coins\">\r\n\r\n      <!--<a (click)=\"coinDetails(coin.id)\">-->\r\n      <a [routerLink]=\"['/selected', coin.id]\" style=\"text-decoration:none\">\r\n        \r\n        <div class=\"card-header\">\r\n          <span>{{coin.name}}</span>\r\n          <span style=\"float: right; color:gold; font-size:13px\">{{coin.rank}}º Rank</span>\r\n        </div>\r\n\r\n        <div class=\"card-block\">\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <img *ngIf=\"coin.name == 'Bitcoin'\"  src=\"./assets/image/coin-1.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Ethereum'\"  src=\"./assets/image/coin-2.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'NEM'\"  src=\"./assets/image/coin-3.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Stratis'\"  src=\"./assets/image/coin-4.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Dash'\"  src=\"./assets/image/coin-5.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Ethereum Classic'\"  src=\"./assets/image/coin-6.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Litecoin'\"  src=\"./assets/image/coin-7.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Monero'\"  src=\"./assets/image/coin-8.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Ripple'\"  src=\"./assets/image/coin-9.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'IOTA'\"  src=\"./assets/image/coin-10.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Bitcoin Cash'\"  src=\"./assets/image/coin-11.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'NEO'\"  src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/1376.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'TRON'\"  src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Qtum'\"  src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/qtum.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'BitConnect'\"  src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/bitconnect.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Bitcoin Gold'\"  src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/bitcoin-gold.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Cardano'\"  src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/2010.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'Stellar'\"  src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/512.png\" id=\"img-coin\">\r\n              <img *ngIf=\"coin.name == 'EOS'\"  src=\"https://s2.coinmarketcap.com/static/img/coins/128x128/1765.png\" id=\"img-coin\">\r\n              <img *ngIf=\"(coin.name !== 'Bitcoin Cash') \r\n                && (coin.name !== 'Bitcoin') \r\n                && (coin.name !== 'Ethereum')\r\n                && (coin.name !== 'Stellar')\r\n                && (coin.name !== 'EOS')\r\n                && (coin.name !== 'NEM')\r\n                && (coin.name !== 'Stratis')\r\n                && (coin.name !== 'Dash')\r\n                && (coin.name !== 'Ethereum Classic')\r\n                && (coin.name !== 'Litecoin')\r\n                && (coin.name !== 'Monero')\r\n                && (coin.name !== 'Ripple')\r\n                && (coin.name !== 'NEO')\r\n                && (coin.name !== 'TRON')\r\n                && (coin.name !== 'Qtum')\r\n                && (coin.name !== 'BitConnect')\r\n                && (coin.name !== 'Bitcoin Gold')\r\n                && (coin.name !== 'Cardano')\r\n                && (coin.name !== 'IOTA')\"  src=\"./assets/image/error.png\" id=\"img-coin\">\r\n            </div>\r\n\r\n            <div class=\"col-8\">\r\n              <p class=\"card-text\">{{coin.quotes.USD.price | currency:'USD':code:'1.2-2'}}</p>\r\n              <p id=\"_24h\" *ngIf=\"coin.quotes.USD.percent_change_24h < '0'\" style=\"color:red\">{{coin.quotes.USD.percent_change_24h}}% &darr;</p>\r\n              <p id=\"_24h\" *ngIf=\"coin.quotes.USD.percent_change_24h > '0'\" style=\"color:greenyellow\">{{coin.quotes.USD.percent_change_24h}}% &uarr;</p>\r\n             \r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/coins/coins.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_coins_service__ = __webpack_require__("../../../../../src/app/service/coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
        this.coins = [];
    }
    CoinsComponent.prototype.ngOnInit = function () {
        this.getCoins();
    };
    CoinsComponent.prototype.getCoins = function () {
        var _this = this;
        this.coinsService.getCoins().subscribe(
        /*   Public API V1 CoinMarketCap
         data => {
            this.coins = data;
            // console.log(data);
          });*/
        //  Public API V2 CoinMarketCap
        // this converte to json object to array
        function (data) {
            _this.coins = [];
            Object.keys(data)
                .map(function (key) {
                _this.coins.push(data[key]);
            });
            // To order by Rank
            console.log();
            _this.coins.sort(function (a, b) { return a.rank - b.rank; });
        });
    };
    CoinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-coins',
            template: __webpack_require__("../../../../../src/app/coins/coins.component.html"),
            styles: [__webpack_require__("../../../../../src/app/coins/coins.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], CoinsComponent);
    return CoinsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__top_list_top_list_component__ = __webpack_require__("../../../../../src/app/top-list/top-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coin_details_coin_details_component__ = __webpack_require__("../../../../../src/app/coin-details/coin-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coins_coins_component__ = __webpack_require__("../../../../../src/app/coins/coins.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* RouterModule */]],
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/service/coins.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoinsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/map';
// import 'rxjs/operator/catch';

var CoinsService = (function () {
    function CoinsService(http) {
        this.http = http;
        // private headers = new Headers({ 'Content-Type': 'application/json' });
        this.urlBase_v1 = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
        this.urlBase_v2 = 'https://api.coinmarketcap.com/v2/ticker/?limit=10';
        this.urlDetails = 'https://api.coinmarketcap.com/v2/ticker';
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
    // Public API V2 CoinMarketCap
    CoinsService.prototype.getCoins = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]
            .timer(0, 5000)
            .flatMap(function () { return _this.http.get(_this.urlBase_v2); })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (res) { return res['data']; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    CoinsService.prototype.getCoin = function (id) {
        this.idCoin = id;
        var url = this.urlDetails + '/' + id + '/';
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (res) { return res; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    CoinsService.prototype.getCurrency = function (currency) {
        var url = this.urlDetails + '/' + this.idCoin + '/?convert=' + currency;
        return this.http.get(url)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* map */])(function (res) { return res; }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    // method of test
    CoinsService.prototype.getCoinCurrency = function (coin) {
        console.log('Coin: ' + coin + ' Currency: ' + this.idCoin);
    };
    CoinsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CoinsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CoinsService);
    return CoinsService;
}());



/***/ }),

/***/ "../../../../../src/app/top-list/top-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#head {\n  margin-top: 30px;\n}\n\n.carousel-control-prev {\n  width: 3%;\n   background-color: rgba(0, 0, 0, 0.2);\n}\n\n#back {\n  text-align: center;\n  vertical-align: middle;\n}\n\ntd {\n  border-bottom: 1px solid  rgba(255, 255, 255, 0.1);\n}\n\na {\n  cursor: pointer;\n  cursor: hand;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-list/top-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"head\">\n  <div id=\"back\">\n    <a class=\"carousel-control-prev\" routerLink=\"/home\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  </div>\n\n  <div class=\"container\">\n    \n    <table class=\"table table-responsive \" style=\"font-size:14px;\">\n      <thead style=\"color:azure\">\n        <tr class=\"default\">\n          <th>#</th>\n          <th>Rank</th>\n          <th>Name</th>                  \n          <th class=\"text-right\">Price</th>\n          <th class=\"text-right\">Market Cap</th>\n          <th class=\"text-right\">Volume(24h)</th>\n          <th class=\"text-right\">Circulating Supply</th>\n          <th class=\"text-center\">Change 1h</th>\n          <th class=\"text-center\">Change 24h</th>\n          <th class=\"text-center\">Change 7d</th>    \n          <th class=\"text-center\">Update Time</th>  \n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let coin of coins\" style=\"color:white;\">\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Bitcoin'\" ><img src=\"./assets/image/coin-1.png\" style=\"width:16px;\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Ethereum'\" ><img src=\"./assets/image/coin-2.png\" style=\"width:16px;\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Ripple'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/52.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Bitcoin Cash'\" ><img src=\"./assets/image/coin-11.png\" style=\"width:16px;\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'NEM'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/nem.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Litecoin'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/2.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'IOTA'\" ><img src=\"./assets/image/coin-10.png\" style=\"width:16px;\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'NEO'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/1376.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Dash'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/131.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Ethereum Classic'\" ><img src=\"https://files.coinmarketcap.com/static/img/coins/16x16/ethereum-classic.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Qtum'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/qtum.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Stratis'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/stratis.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'TRON'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/1958.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Monero'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/328.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'BitConnect'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/bitconnect.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Bitcoin Gold'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/bitcoin-gold.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Cardano'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/2010.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'Stellar'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/512.png\"></td>\n            <td class=\"text-center\" *ngIf=\"coin.name == 'EOS'\" ><img src=\"https://s2.coinmarketcap.com/static/img/coins/16x16/1765.png\"></td>\n            <td class=\"text-center\" *ngIf=\"(coin.name !== 'Bitcoin Cash') \n                                        && (coin.name !== 'Bitcoin') \n                                        && (coin.name !== 'Ethereum')\n                                        && (coin.name !== 'NEM')\n                                        && (coin.name !== 'Stratis')\n                                        && (coin.name !== 'Dash')\n                                        && (coin.name !== 'Ethereum Classic')\n                                        && (coin.name !== 'Litecoin')\n                                        && (coin.name !== 'Monero')\n                                        && (coin.name !== 'Ripple')\n                                        && (coin.name !== 'NEO')\n                                        && (coin.name !== 'TRON')\n                                        && (coin.name !== 'Qtum')\n                                        && (coin.name !== 'BitConnect')\n                                        && (coin.name !== 'Bitcoin Gold')\n                                        && (coin.name !== 'Cardano')\n                                        && (coin.name !== 'Stellar')\n                                        && (coin.name !== 'EOS')\n                                        && (coin.name !== 'IOTA')\" ><img src=\"./assets/image/error_2.png\" id=\"img-coin\">\n            </td>\n\n            <td class=\"text-center\" >{{coin.rank}}</td>\n            <td class=\"text-left\" style=\"color:gold\">\n              <!--<a (click)=\"coinDetails(coin.id)\">{{coin.name}}</a>-->\n              <a [routerLink]=\"['/selected', coin.id]\" style=\"text-decoration:none\">{{coin.name}}</a>\n            </td>         \n            <td class=\"text-right\">{{coin.quotes.USD?.price | currency:'USD':code:'1.2-2'}}</td>           \n            \n            <td class=\"text-right\">{{ coin.quotes.USD?.market_cap | currency:'USD':code:'1.0-2'}}</td>\n            <td class=\"text-right\">{{coin.quotes.USD?.volume_24h | currency:'USD':code:'1.0-2'}}</td>\n            <td class=\"text-right\">{{ coin.total_supply | number: '1.0-2'}}</td>    \n            <td  *ngIf=\"coin.quotes.USD.percent_change_1h < '0'\" style=\"color:red\" class=\"text-center\">{{coin.quotes.USD.percent_change_1h}}% &darr; </td>       \n            <td  *ngIf=\"coin.quotes.USD.percent_change_1h > '0'\" style=\"color:greenyellow\" class=\"text-center\"> {{coin.quotes.USD.percent_change_1h}}% &uarr; </td>\n            <td  *ngIf=\"coin.quotes.USD.percent_change_24h  < '0'\"style=\"color:red\" class=\"text-center\"> {{coin.quotes.USD.percent_change_24h}}% &darr; </td>\n            <td  *ngIf=\"coin.quotes.USD.percent_change_24h  > '0'\"style=\"color:greenyellow\" class=\"text-center\"> {{coin.quotes.USD.percent_change_24h}}% &uarr; </td>\n            <td  *ngIf=\"coin.quotes.USD.percent_change_7d < '0'\" style=\"color:red\" class=\"text-center\"> {{coin.quotes.USD.percent_change_7d}}% &darr; </td>\n            <td  *ngIf=\"coin.quotes.USD.percent_change_7d > '0'\" style=\"color:greenyellow\" class=\"text-center\"> {{coin.quotes.USD.percent_change_7d}}% &uarr; </td>\n            <td class=\"text-center\" style=\"color:goldenrod; font-size:12px\">{{ coin.last_updated * 1000 | timeAgo }}</td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/top-list/top-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_coins_service__ = __webpack_require__("../../../../../src/app/service/coins.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function TopListComponent(coinsService, router) {
        this.coinsService = coinsService;
        this.router = router;
    }
    TopListComponent.prototype.ngOnInit = function () {
        this.getCoins();
    };
    TopListComponent.prototype.getCoins = function () {
        var _this = this;
        this.coinsService.getCoins()
            .subscribe(
        /*coin => {
        this.coins = coin; console.log(coin)
        }*/
        // this converte to json object to array
        function (data) {
            _this.coins = [];
            Object.keys(data)
                .map(function (key) {
                _this.coins.push(data[key]);
            });
            // To order by Rank
            console.log();
            _this.coins.sort(function (a, b) { return a.rank - b.rank; });
        });
    };
    TopListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-top-list',
            template: __webpack_require__("../../../../../src/app/top-list/top-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/top-list/top-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_coins_service__["a" /* CoinsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], TopListComponent);
    return TopListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])()
    .bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map