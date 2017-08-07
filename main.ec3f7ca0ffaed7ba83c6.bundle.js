webpackJsonp([1,4],{1:function(e,n,t){e.exports=t("x35b")},"3dPW":function(e,n){e.exports='<div id="head">\n\n  <div class="card-columns">\n\n    <div class="card card-inverse" *ngFor="let coin of coins">\n\n      <a (click)="coinDetails(coin.id)">\n        \n        <div class="card-header">\n          <span id="title">{{coin.name}}</span>\n        </div>\n\n        <div class="card-block">\n          \n          <div class="row">\n            <div class="col-4">\n              <img *ngIf="coin.name == \'Bitcoin\'"  src="./assets/image/coin-1.png" id="img-coin">\n              <img *ngIf="coin.name == \'Ethereum\'"  src="./assets/image/coin-2.png" id="img-coin">\n              <img *ngIf="coin.name == \'NEM\'"  src="./assets/image/coin-3.png" id="img-coin">\n              <img *ngIf="coin.name == \'Stratis\'"  src="./assets/image/coin-4.png" id="img-coin">\n              <img *ngIf="coin.name == \'Dash\'"  src="./assets/image/coin-5.png" id="img-coin">\n              <img *ngIf="coin.name == \'Ethereum Classic\'"  src="./assets/image/coin-6.png" id="img-coin">\n              <img *ngIf="coin.name == \'Litecoin\'"  src="./assets/image/coin-7.png" id="img-coin">\n              <img *ngIf="coin.name == \'Monero\'"  src="./assets/image/coin-8.png" id="img-coin">\n              <img *ngIf="coin.name == \'Ripple\'"  src="./assets/image/coin-9.png" id="img-coin">\n              <img *ngIf="coin.name == \'IOTA\'"  src="./assets/image/coin-10.png" id="img-coin">\n              <img *ngIf="coin.name == \'Bitcoin Cash\'"  src="./assets/image/coin-11.png" id="img-coin">\n              <img *ngIf="coin.name == \'NEO\'"  src="https://files.coinmarketcap.com/static/img/coins/128x128/neo.png" id="img-coin">\n              <img *ngIf="coin.name == \'Qtum\'"  src="https://files.coinmarketcap.com/static/img/coins/128x128/qtum.png" id="img-coin">\n              <img *ngIf="(coin.name !== \'Bitcoin Cash\') \n                && (coin.name !== \'Bitcoin\') \n                && (coin.name !== \'Ethereum\')\n                && (coin.name !== \'NEM\')\n                && (coin.name !== \'Stratis\')\n                && (coin.name !== \'Dash\')\n                && (coin.name !== \'Ethereum Classic\')\n                && (coin.name !== \'Litecoin\')\n                && (coin.name !== \'Monero\')\n                && (coin.name !== \'Ripple\')\n                && (coin.name !== \'NEO\')\n                && (coin.name !== \'Qtum\')\n                && (coin.name !== \'IOTA\')"  src="./assets/image/error.png" id="img-coin">\n            </div>\n\n            <div class="col-8">\n              <p class="card-text">{{coin.price_usd | currency:\'USD\':true:\'1.2-2\'}}</p>\n              <p id="_24h" *ngIf="coin.percent_change_24h < \'0\'" style="color:red">{{coin.percent_change_24h}}% &darr;</p>\n              <p id="_24h" *ngIf="coin.percent_change_24h > \'0\'" style="color:greenyellow">{{coin.percent_change_24h}}% &uarr;</p>\n             \n            </div>\n          </div>\n\n        </div>\n      </a>\n    </div>\n\n  </div>\n\n</div>\n'},"4QKn":function(e,n){e.exports='<div id="head">\n<div id="back">\n  <a class="carousel-control-prev" [routerLink]="[\'/home\']" role="button" data-slide="prev">\n    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n    <span class="sr-only">Previous</span>\n  </a>\n</div>\n\n<div class="container">\n  <div class="row">\n    <div class="col-12">\n\n      <div class="card">\n\n        <div class="card-header">What is this?</div>\n        <div class="card-block">\n          <p class="card-text">\n            Cryptocurrencies emerged in 2009 with the first decentralized cryptocurrency - <a href="https://bitcoin.org/en/"> Bitcoin</a> .  As of today - more than 700 digital\n            currencies exist with a total market capitalization greater than 100 billion USD.</p>\n          <br>\n          <p class="card-text">\n            CryptoMünze is a real-time dashboard that displays the top 10 cryptocurrencies based on currency price, market capitalization\n            and overall circulating supply - obtained from the leading cryptocurrency resource <a href="https://coinmarketcap.com/">CoinMarketCap.</a></p>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="row" id="img">\n\n    <div class="col">\n     \n    </div>\n\n    <div class="col-1">\n      <div class="text-center">\n        <a href="https://angular.io/"><img src="./assets/image/ang.png" class="rounded" id="img-coin" alt="Angular"></a>\n      </div>\n    </div>\n\n    <div class="col-1">\n       <div class="text-center">\n        <a href="https://www.npmjs.com/"><img src="./assets/image/npm.png" class="rounded" id="img-coin" alt="NPM"></a>\n      </div>\n    </div>\n\n    <div class="col-1">\n       <div class="text-center">\n        <a href="https://v4-alpha.getbootstrap.com/"><img src="./assets/image/bootstrap.png" class="rounded" id="img-coin" alt="Bootstrap"></a>\n      </div>\n    </div>\n\n    <div class="col-1">\n       <div class="text-center">\n        <a  href="https://github.com/"><img src="./assets/image/if_github_317712.png" class="rounded" id="img-coin" alt="Github"></a>\n      </div>\n    </div>\n\n  </div>\n</div>\n</div>\n'},"5xMp":function(e,n){e.exports='<nav class="navbar navbar-toggleable-md navbar-light bg-faded" id="head">\n\n  <a class="navbar-brand" [routerLink]="[\'/home\']">\n     <img src="./assets/image/logo_2.png" id="img">\n     <span id="title">CryptoMünze</span>\n  </a>\n\n\n  <div class="collapse navbar-collapse justify-content-end">\n\n    <div class="nav navbar-nav">\n        <a class="nav-item nav-link" [routerLink]="[\'/toplist\']" id="about" style="color:white;">TopList</a>\n        <a class="nav-item nav-link" [routerLink]="[\'/about\']" id="about">What is this?</a>\n    </div>\n  </div>\n\n</nav>\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n'},Iksp:function(e,n,t){"use strict";var i=t("2Je8"),r=t("tmYn"),c=t("w5p2"),o=t("Qbdm"),a=t("3j3K"),s=t("NVOs"),p=t("Fzro"),l=t("YWx4"),d=t("kmQv"),g=t("v8+f"),f=t("QdDP"),m=t("hIDW");t.d(n,"a",function(){return h});var u=this&&this.__decorate||function(e,n,t,i){var r,c=arguments.length,o=c<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(n,t,o):r(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},h=function(){function e(){}return e}();h=u([t.i(a.b)({declarations:[l.a,d.a,g.a,f.a,m.a],imports:[o.a,s.a,p.a,i.a,r.a],providers:[c.a],bootstrap:[l.a]})],h)},MOVZ:function(e,n){function t(e){throw new Error("Cannot find module '"+e+"'.")}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="MOVZ"},MXaZ:function(e,n){e.exports='<div id="head">\n  <div id="back">\n    <a class="carousel-control-prev" [routerLink]="[\'/home\']" role="button" data-slide="prev">\n    <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n    <span class="sr-only">Previous</span>\n  </a>\n  </div>\n\n  <div class="container">\n    \n    <table class="table table-responsive" style="font-size:15px">\n      <thead style="color:azure">\n        <tr class="default">\n          <th>Rank</th>\n          <th>Name</th>                  \n          <th>Price</th>\n          <th>Market cap usd</th>\n          <th>Available supply</th>\n          <th>Percent change 1h</th>\n          <th>Percent change 24h</th>\n          <th>Percent change 7d</th>    \n        </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor="let coin of coins" style="color:white">\n            <td  class="text-center">{{coin.rank}}</td>\n            <td class="text-left" style="color:gold">{{coin.name}}</td>         \n            <td class="text-right">{{coin.price_usd | currency:\'USD\':true:\'1.2-2\'}}</td>           \n            \n            <td class="text-right">{{coin.market_cap_usd | currency:\'USD\':true:\'1.0-2\'}}</td>\n            <td class="text-right">{{coin.available_supply | number: \'1.0-2\'}}</td>    \n            <td  *ngIf="coin.percent_change_1h < \'0\'" style="color:red" class="text-center">{{coin.percent_change_1h}}% &darr; </td>       \n            <td  *ngIf="coin.percent_change_1h > \'0\'" style="color:greenyellow" class="text-center"> {{coin.percent_change_1h}}% &uarr; </td>\n            <td  *ngIf="coin.percent_change_24h < \'0\'"style="color:red" class="text-center"> {{coin.percent_change_24h}}% &darr; </td>\n            <td  *ngIf="coin.percent_change_24h > \'0\'"style="color:greenyellow" class="text-center"> {{coin.percent_change_24h}}% &uarr; </td>\n            <td  *ngIf="coin.percent_change_7d < \'0\'" style="color:red" class="text-center"> {{coin.percent_change_7d}}}% &darr; </td>\n            <td  *ngIf="coin.percent_change_7d > \'0\'" style="color:greenyellow" class="text-center"> {{coin.percent_change_7d}}}% &uarr; </td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n  \n</div>\n'},QdDP:function(e,n,t){"use strict";var i=t("3j3K");t.d(n,"a",function(){return o});var r=this&&this.__decorate||function(e,n,t,i){var r,c=arguments.length,o=c<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(n,t,o):r(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},c=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},o=function(){function e(){}return e.prototype.ngOnInit=function(){},e}();o=r([t.i(i._14)({selector:"app-about",template:t("4QKn"),styles:[t("gkki")]}),c("design:paramtypes",[])],o)},YWx4:function(e,n,t){"use strict";var i=t("3j3K");t.d(n,"a",function(){return c});var r=this&&this.__decorate||function(e,n,t,i){var r,c=arguments.length,o=c<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(n,t,o):r(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},c=function(){function e(){this.title="app works!"}return e}();c=r([t.i(i._14)({selector:"app-root",template:t("5xMp"),styles:[t("okgc")]})],c)},gkki:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,"#head{margin-top:80px}.card{min-width:30em;max-width:100em;margin:0 auto;float:none;background-color:transparent}.card-text{vertical-align:middle;font-size:17px;color:#fff;margin-bottom:2px}.card-header,.card-text{font-family:Questrial,sans-serif}.card-header{background-color:transparent;color:gold;font-size:20px}.carousel-control-prev{width:3%;background-color:rgba(0,0,0,.2)}#img-coin{width:40px;height:40px}#img{margin-top:30px}#back{text-align:center}#back,a{vertical-align:middle}a{font-family:Questrial,sans-serif;font-size:17px;color:gold}.col-1{padding:1px}",""]),e.exports=e.exports.toString()},hIDW:function(e,n,t){"use strict";var i=t("w5p2"),r=t("3j3K");t.d(n,"a",function(){return a});var c=this&&this.__decorate||function(e,n,t,i){var r,c=arguments.length,o=c<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(n,t,o):r(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},a=function(){function e(e){this.coinsService=e}return e.prototype.ngOnInit=function(){this.getCoins()},e.prototype.getCoins=function(){var e=this;this.coinsService.getCoins().subscribe(function(n){e.coins=n,console.log(n)})},e}();a=c([t.i(r._14)({selector:"app-top-list",template:t("MXaZ"),styles:[t("lRtR")]}),o("design:paramtypes",["function"==typeof(s=void 0!==i.a&&i.a)&&s||Object])],a);var s},k1AU:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,"#head{margin-top:85px;width:auto}.card-columns{max-width:80em;margin:0 auto;float:none;margin-bottom:20px}@media (min-width:34em){.card-columns{-webkit-column-count:2;column-count:2}}@media (min-width:48em){.card-columns{-webkit-column-count:3;column-count:3}}@media (min-width:62em){.card-columns{-webkit-column-count:4;column-count:4}}@media (min-width:75em){.card-columns{-webkit-column-count:5;column-count:5}}.card{height:8.5em;background-color:#430123;border-color:hsla(0,0%,100%,.2)}.card-inverse{background-color:rgba(0,0,0,.2)}.card-header{text-align:center;background-color:transparent;padding:5px}.card-text{vertical-align:middle;font-family:Questrial,sans-serif;font-size:19px;color:#fff;margin-bottom:1px}a{cursor:pointer;cursor:hand}.col-8{text-align:center}#title{color:#fff;font-family:Questrial,sans-serif;font-size:18px;margin-bottom:3px!important}#img-coin{width:55px;vertical-align:middle}#_24{font-family:Questrial,sans-serif;font-size:16px;margin-bottom:5px!important}",""]),e.exports=e.exports.toString()},kZql:function(e,n,t){"use strict";t.d(n,"a",function(){return i});var i={production:!0}},kmQv:function(e,n,t){"use strict";var i=t("w5p2"),r=t("3j3K"),c=t("5oXY");t.d(n,"a",function(){return s});var o=this&&this.__decorate||function(e,n,t,i){var r,c=arguments.length,o=c<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(n,t,o):r(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},s=function(){function e(e,n){this.coinsService=e,this.router=n}return e.prototype.ngOnInit=function(){this.getCoins()},e.prototype.getCoins=function(){var e=this;this.coinsService.getCoins().subscribe(function(n){e.coins=n})},e.prototype.coinDetails=function(e){this.router.navigate(["/selected",e])},e}();s=o([t.i(r._14)({selector:"app-coins",template:t("3dPW"),styles:[t("k1AU")]}),a("design:paramtypes",["function"==typeof(p=void 0!==i.a&&i.a)&&p||Object,"function"==typeof(l=void 0!==c.c&&c.c)&&l||Object])],s);var p,l},lRtR:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,"#head{margin-top:30px}.carousel-control-prev{width:3%;background-color:rgba(0,0,0,.2)}#back{text-align:center;vertical-align:middle}",""]),e.exports=e.exports.toString()},okgc:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,"#head{padding:10px;background-color:transparent;width:auto}#img{width:50px;margin-left:30px}#img,#title{vertical-align:middle}#title{color:#f5f5f5;font-size:18px;margin-left:4px}#about,#title{font-family:Questrial,sans-serif}#about{color:gold;font-size:16px}a{cursor:pointer;cursor:hand}.navbar-brand{margin-left:30px}",""]),e.exports=e.exports.toString()},tmYn:function(e,n,t){"use strict";var i=t("hIDW"),r=t("QdDP"),c=t("v8+f"),o=t("kmQv"),a=t("3j3K"),s=t("2Je8"),p=t("5oXY");t.d(n,"a",function(){return g});var l=this&&this.__decorate||function(e,n,t,i){var r,c=arguments.length,o=c<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(n,t,o):r(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},d=[{path:"home",component:o.a},{path:"selected/:id",component:c.a},{path:"about",component:r.a},{path:"toplist",component:i.a},{path:"",pathMatch:"full",redirectTo:"home"},{path:"**",pathMatch:"full",redirectTo:"home"}],g=function(){function e(){}return e}();g=l([t.i(a.b)({imports:[s.a,p.a.forRoot(d)],declarations:[],exports:[p.a]})],g)},twex:function(e,n,t){n=e.exports=t("FZ+f")(!1),n.push([e.i,"#head{margin-top:30px}.card{margin:0 auto;float:none}.card,.card-header{background-color:transparent}.card-header{color:gold;font-family:Questrial,sans-serif;font-size:23px}.carousel-control-prev{width:3%;background-color:rgba(0,0,0,.2)}.card-block{text-align:center;padding:7px}.card-text{font-family:Questrial,sans-serif;font-size:18px;color:#fff;text-align:center}#img-coin{width:160px;vertical-align:middle;margin-bottom:5px}#currency{font-family:Questrial,sans-serif;font-size:17px;color:gold;text-align:left;margin-right:5px;background-color:transparent;display:inline-block}#dados{text-align:left;margin-top:30px}#price{font-size:50px;display:inline-block}#c_price,#price{text-align:left;font-family:Questrial,sans-serif;color:#fff}#c_price{font-size:17px;margin-bottom:4px}#img-footer{margin:2px 5px;width:25px;margin-bottom:10px}#back,#img-footer{vertical-align:middle}#back{text-align:center}#rank{background-color:green;border-radius:5px;color:#fff;text-align:center!important;font-size:17px}#_24h,#rank{font-family:Questrial,sans-serif}#_24h{font-size:35px;margin-left:10px!important;display:inline-block}",""]),e.exports=e.exports.toString()},"v8+f":function(e,n,t){"use strict";var i=t("w5p2"),r=t("3j3K"),c=t("5oXY"),o=t("uCY4");t.n(o);t.d(n,"a",function(){return p});var a=this&&this.__decorate||function(e,n,t,i){var r,c=arguments.length,o=c<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(n,t,o):r(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},s=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},p=function(){function e(e,n){this.route=e,this.coinsService=n,this.selectValue="USD",this.currency=["USD","AUD","BRL","CAD","CHF","CNY","EUR","GBP","HKD","IDR","INR","JPY","KRW","MXN","RUB"]}return e.prototype.ngOnInit=function(){var e=this;this.route.params.switchMap(function(n){return e.coinsService.getCoin(n.id)}).subscribe(function(n){e.coins=n})},e.prototype.onChange=function(e){var n=this;console.log(e),this.selectValue=e,this.coinsService.getCurrency(e).subscribe(function(e){n.coins=e,console.log(n.coins)})},e}();p=a([t.i(r._14)({selector:"app-coin-details",template:t("vIqC"),styles:[t("twex")]}),s("design:paramtypes",["function"==typeof(l=void 0!==c.b&&c.b)&&l||Object,"function"==typeof(d=void 0!==i.a&&i.a)&&d||Object])],p);var l,d},vIqC:function(e,n){e.exports='<div id="head">\r\n  <div id="back">\r\n    <a class="carousel-control-prev" [routerLink]="[\'/home\']" role="button" data-slide="prev">\r\n        <span class="carousel-control-prev-icon" aria-hidden="true"></span>\r\n        <span class="sr-only">Previous</span>\r\n      </a>\r\n  </div>\r\n\r\n  <div class="container">\r\n    \r\n    <div class="row">\r\n       <div class="col-5">\r\n       </div>\r\n       <div class="col-4">\r\n       </div>\r\n       <div class="col-3">\r\n         <p id="currency">Choose currency: </p>\r\n          <select class="selectpicker" (click)="onChange($event.target.value)">            \r\n              <option *ngFor="let item of currency">{{item}}</option>\r\n            </select>\r\n        </div>\r\n          \r\n    </div>\r\n\r\n    <div class="row">\r\n      <div class="card-deck">\r\n\r\n        <div class="card" *ngFor="let coin of coins">\r\n\r\n          <div class="card-header">{{coin.name}}</div>\r\n\r\n          <div class="card-block">\r\n            <img *ngIf="coin.name == \'Bitcoin\'" src="./assets/image/coin-1.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'Ethereum\'" src="./assets/image/coin-2.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'NEM\'" src="./assets/image/coin-3.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'Stratis\'" src="./assets/image/coin-4.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'Dash\'" src="./assets/image/coin-5.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'Ethereum Classic\'" src="./assets/image/coin-6.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'Litecoin\'" src="./assets/image/coin-7.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'Monero\'" src="./assets/image/coin-8.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'Ripple\'" src="./assets/image/coin-9.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'IOTA\'" src="./assets/image/coin-10.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'Bitcoin Cash\'" src="./assets/image/coin-11.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'NEO\'" src="https://files.coinmarketcap.com/static/img/coins/128x128/neo.png" id="img-coin">\r\n            <img *ngIf="coin.name == \'NEO\'" src="https://files.coinmarketcap.com/static/img/coins/128x128/qtum.png" id="img-coin">\r\n            <img *ngIf="(coin.name !== \'Bitcoin Cash\') \r\n                && (coin.name !== \'Bitcoin\') \r\n                && (coin.name !== \'Ethereum\')\r\n                && (coin.name !== \'NEM\')\r\n                && (coin.name !== \'Stratis\')\r\n                && (coin.name !== \'Dash\')\r\n                && (coin.name !== \'Ethereum Classic\')\r\n                && (coin.name !== \'Litecoin\')\r\n                && (coin.name !== \'Monero\')\r\n                && (coin.name !== \'Ripple\')\r\n                && (coin.name !== \'NEO\')\r\n                && (coin.name !== \'Qtum\')\r\n                && (coin.name !== \'IOTA\')" src="./assets/image/error.png" id="img-coin">\r\n            <br>\r\n            <span id="rank"> Rank {{ coin.rank }} </span>\r\n          </div>\r\n\r\n          <div class="card-block">\r\n            <p *ngIf="coin.name == \'Bitcoin\'" class="card-text">\r\n              The first decentralized peer-to-peer payment network in which encryption techniques are used to regulate the generation of\r\n              units of currency and verify the transfer of funds, all operating independently of a central bank.\r\n            </p>\r\n            <p *ngIf="coin.name == \'Ethereum\'" class="card-text">\r\n              An open-source, public, blockchain-based computing platform that enables developers to build and deploy decentralized applications.\r\n              Ether (ETH), the crypto token that fuels the Ethereum network acts as a tradeable cryptocurrency and is used to pay for transaction \r\n              fees and services on the network.\r\n            </p>\r\n            <p *ngIf="coin.name == \'Ripple\'" class="card-text">\r\n              Both a digital currency (XRP) and a distributed real-time payment protocol within which that currency is transferred. Ripple\'s\r\n              distributed technology aims to enable banks to send real-time international payments across networks; to meet growing demands \r\n              for faster, low-cost, on-demand global payment services.\r\n            </p>\r\n            <p *ngIf="coin.name == \'Bitcoin Cash\'" class="card-text">\r\n              A decentralized peer-to-peer payment network that came into existence as a result of a hard fork from the original bitcoin\r\n              blockchain. Bitcoin Cash emerged after some of the leading backers disagreed on how to take Bitcoin further and are utilizing \r\n              a new proposal that consists of a new transaction type and an increase in block limit size.\r\n            </p>\r\n            <p *ngIf="coin.name == \'Litecoin\'" class="card-text">\r\n              An open-source peer-to-peer cryptocurrency that uses the scrypt proof of work algorithm as opposed to Bitcoin\'s hashing algorithm.\r\n              Litecoin was originally created to improve upon Bitcoin by speeding up transaction confirmations.\r\n            </p>\r\n            <p *ngIf="coin.name == \'NEM\'" class="card-text">\r\n              A peer-to-peer cryptocurrency (XEM) and blockchain platform that has introduced new features in blockchain technology through\r\n              its proof-of-importance (POI) algorithm, encrypted messaging system, multisignature accounts and Eigentrust++\r\n              reputation system.\r\n            </p>\r\n            <p *ngIf="coin.name == \'Ethereum Classic\'" class="card-text">\r\n              An open-source, blockchain-based computing platform that came into existence as a result of the DAO hard-fork. Identical\r\n              to Ethereum up to a certain block (block 1920000), Ethereum Classic consolidated members of the Ethereum community\r\n              who rejected the fork.\r\n            </p>\r\n            <p *ngIf="coin.name == \'Dash\'" class="card-text">\r\n              An open-source peer-to-peer cryptocurrency that offers all the features of Bitcoin as well as other capabilities which include\r\n              private transactions, instant transactions and decentralized governance.\r\n            </p>\r\n            <p *ngIf="coin.name == \'IOTA\'" class="card-text">\r\n              A new transactional settlement and data integrity layer for the Internet of Things. IOTA is based on a new distributed ledger\r\n              architecture which aims to overcome inefficiencies of current Blockchain designs to introduce a new way of\r\n              reaching peer-to-peer consensus.\r\n            </p>\r\n            <p *ngIf="coin.name == \'Monero\'" class="card-text">\r\n              An open-source cryptocurrency that is heavily focused on privacy, decentralisation and scalability. Monero is based on the\r\n              CryptoNote protocol and has significant algorithmic differences to Bitcoin.\r\n            </p>\r\n            <p *ngIf="coin.name == \'Stratis\'" class="card-text">\r\n              Stratis is a Blockchain-as-a-service (BaaS) Platform, created to provide solutions for corporations in the financial \r\n              sector that want to enjoy the benefits of Blockchain technology. Stratis allows companies to create their custom blockchain\r\n              applications with the features they require, making the development process simpler and accelerating the development\r\n              lifecycle for blockchain projects.\r\n            </p>\r\n            <p *ngIf="coin.name == \'NEO\'" class="card-text">\r\n              China\'s first original and open-source public blockchain. Initially known as Antshares, Neo aims to support multiple \r\n              types of digital assets as well as allow users to establish smart contracts to enhance and enrich the functions of \r\n              said digital assets.\r\n            </p>\r\n              <p *ngIf="coin.name == \'Qtum\'" class="card-text">\r\n              Qtum is an open source Proof of Stake (PoS) blockchain application platform. Qtum’s core technology combines a fork of \r\n              Bitcoin Core, an Account Abstraction Layer allowing for multiple Virtual Machines including the Ethereum Virtual Machine \r\n              (EVM) and Proof-of-Stake consensus aimed at tackling industry use cases. \r\n            </p>\r\n          </div>\r\n\r\n          <div class="card-block">\r\n            <a *ngIf="coin.name == \'Bitcoin\'" href="https://bitcoin.org/bitcoin.pdf"><img src="./assets/image/if_document_2318462.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Bitcoin\'" href="https://bitcoin.org/en/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Bitcoin\'" href="https://github.com/bitcoin"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'Ethereum\'" href="https://github.com/ethereum/wiki/wiki/White-Paper"><img src="./assets/image/if_document_2318462.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Ethereum\'" href="https://www.ethereum.org/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Ethereum\'" href="https://github.com/ethereum"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'Ripple\'" href="https://ripple.com/files/ripple_consensus_whitepaper.pdf"><img src="./assets/image/if_document_2318462.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Ripple\'" href="https://ripple.com/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Ripple\'" href="https://github.com/ripple"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'Litecoin\'" href="https://litecoin.org/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Litecoin\'" href="https://github.com/litecoin-project"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'NEM\'" href="https://www.nem.io/NEM_techRef.pdf"><img src="./assets/image/if_document_2318462.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'NEM\'" href="https://www.nem.io/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'NEM\'" href="https://github.com/NemProject"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'Ethereum Classic\'" href="https://coss.io/documents/white-papers/ethereum-classic.pdf"><img src="./assets/image/if_document_2318462.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Ethereum Classic\'" href="https://ethereumclassic.github.io/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Ethereum Classic\'" href="https://github.com/ethereumclassic"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'Dash\'" href="https://www.dash.org/wp-content/uploads/2015/04/Dash-WhitepaperV1.pdf"><img src="./assets/image/if_document_2318462.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Dash\'" href="https://www.dash.org/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Dash\'" href="https://github.com/dashpay"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'IOTA\'" href="https://iota.org/IOTA_Whitepaper.pdf"><img src="./assets/image/if_document_2318462.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'IOTA\'" href="https://iota.org/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'IOTA\'" href="https://github.com/iotaledger"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'NEO\'" href="https://github.com/neo-project/neo/wiki/Whitepaper-1.1"><img src="./assets/image/if_document_2318462.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'NEO\'" href="https://neo.org/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'NEO\'" href="https://github.com/neo-project"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n\r\n            <a *ngIf="coin.name == \'Monero\'" href="https://getmonero.org/"><img src="./assets/image/if_office-47_809586.png" id="img-footer"></a>\r\n            <a *ngIf="coin.name == \'Monero\'" href="https://github.com/monero-project"><img src="./assets/image/if_github_317712.png" id="img-footer"></a>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class="card" *ngFor="let coin of coins">\r\n\r\n          <div class="card-block" id="dados">\r\n\r\n            <legend id="c_price">Current Price</legend>\r\n            <p id="price" *ngIf="selectValue == \'USD\'" >{{coin.price_usd | currency:\'USD\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'AUD\'" >{{coin.price_aud | currency:\'AUD\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'BRL\'" >{{coin.price_brl | currency:\'BRL\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'CAD\'" >{{coin.price_cad | currency:\'CAD\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'CHF\'" >{{coin.price_chf | currency:\'CHF\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'CNY\'" >{{coin.price_cny | currency:\'CNY\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'EUR\'" >{{coin.price_eur | currency:\'EUR\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'GBP\'" >{{coin.price_gbp | currency:\'GBP\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'HKD\'" >{{coin.price_hkd | currency:\'HKD\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'IDR\'" >{{coin.price_idr | currency:\'IDR\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'INR\'" >{{coin.price_inr | currency:\'INR\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'JPY\'" >{{coin.price_jpy | currency:\'JPY\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'KRW\'" >{{coin.price_krw | currency:\'KRW\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'MXN\'" >{{coin.price_mxn | currency:\'MXN\':true:\'1.2-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'RUB\'" >{{coin.price_rub | currency:\'RUB\':true:\'1.2-2\'}}</p>\r\n\r\n            <p id="_24h" *ngIf="coin.percent_change_24h < \'0\'" style="color:red">( {{coin.percent_change_24h}}% &darr;)</p>\r\n            <p id="_24h" *ngIf="coin.percent_change_24h > \'0\'" style="color:greenyellow">( {{coin.percent_change_24h}}% &uarr;)</p>\r\n            <legend id="c_price">Circulating Supply</legend>\r\n            <p id="price">{{ coin.available_supply | number: \'1.0-2\'}}</p>\r\n            <p id="price" style="margin-left:8px;">{{ coin.symbol }}</p>\r\n           \r\n            <legend id="c_price">Market Cap</legend>           \r\n            <p id="price" *ngIf="selectValue == \'USD\'">{{ coin.market_cap_usd | currency:\'USD\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'AUD\'">{{ coin.market_cap_aud | currency:\'AUD\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'BRL\'">{{ coin.market_cap_brl | currency:\'BRL\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'CAD\'">{{ coin.market_cap_cad | currency:\'CAD\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'CHF\'">{{ coin.market_cap_chf | currency:\'CHF\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'CNY\'">{{ coin.market_cap_cny | currency:\'CNY\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'EUR\'">{{ coin.market_cap_eur | currency:\'EUR\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'GBP\'">{{ coin.market_cap_gbp | currency:\'GBP\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'HKD\'">{{ coin.market_cap_hkd | currency:\'HKD\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'IDR\'">{{ coin.market_cap_idr | currency:\'IDR\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'INR\'">{{ coin.market_cap_inr | currency:\'INR\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'JPY\'">{{ coin.market_cap_jpy | currency:\'JPY\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'KRW\'">{{ coin.market_cap_krw | currency:\'KRW\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'MXN\'">{{ coin.market_cap_mxn | currency:\'MXN\':true:\'1.0-2\'}}</p>\r\n            <p id="price" *ngIf="selectValue == \'RUB\'">{{ coin.market_cap_rub | currency:\'RUB\':true:\'1.0-2\'}}</p>\r\n         \r\n         \r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},w5p2:function(e,n,t){"use strict";var i=t("3j3K"),r=t("Fzro"),c=t("Gvdl"),o=(t.n(c),t("+pb+")),a=(t.n(o),t("6Yye"));t.n(a);t.d(n,"a",function(){return l});var s=this&&this.__decorate||function(e,n,t,i){var r,c=arguments.length,o=c<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,n,t,i);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(c<3?r(o):c>3?r(n,t,o):r(n,t))||o);return c>3&&o&&Object.defineProperty(n,t,o),o},p=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function e(e){this.http=e,this.headers=new r.b({"Content-Type":"application/json"}),this.urlBase="https://api.coinmarketcap.com/v1/ticker/?limit=10",this.urlDetails="https://api.coinmarketcap.com/v1/ticker"}return e.prototype.getCoins=function(){var e=this;return c.Observable.timer(0,5e3).flatMap(function(){return e.http.get(e.urlBase)}).map(function(e){return e.json()}).catch(this.handleError)},e.prototype.getCoin=function(e){this.idCoin=e;var n=this.urlDetails+"/"+e;return this.http.get(n).map(function(e){return e.json()}).catch(this.handleError)},e.prototype.getCurrency=function(e){var n=this.urlDetails+"/"+this.idCoin+"/?convert="+e;return this.http.get(n).map(function(e){return e.json()}).catch(this.handleError)},e.prototype.getCoinCurrency=function(e){console.log("Coin: "+e+" Currency: "+this.idCoin)},e.prototype.handleError=function(e){return console.error("An error occurred",e),Promise.reject(e.message||e)},e}();l=s([t.i(i.c)(),p("design:paramtypes",["function"==typeof(d=void 0!==r.c&&r.c)&&d||Object])],l);var d},x35b:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("3j3K"),r=t("O61y"),c=t("Iksp");t("kZql").a.production&&t.i(i.a)(),t.i(r.a)().bootstrapModule(c.a)}},[1]);