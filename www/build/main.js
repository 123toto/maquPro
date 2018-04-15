webpackJsonp([2],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
/* unused harmony export Adresse */
/* unused harmony export Telephone */
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.telephone = new Telephone();
        this.adresse = new Adresse();
    }
    return Cliente;
}());

var Adresse = /** @class */ (function () {
    function Adresse() {
    }
    return Adresse;
}());

var Telephone = /** @class */ (function () {
    function Telephone() {
    }
    return Telephone;
}());

//# sourceMappingURL=cliente.model.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__customer_customer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_customerList_customer_list_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__customer_modify_customer_modify_customer__ = __webpack_require__(135);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListPage = /** @class */ (function () {
    function ListPage(fdb, navCtrl, actionSheetCtrl, customerListService) {
        this.fdb = fdb;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.customerListService = customerListService;
        this.customersList = this.customerListService
            .getCustomersList()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    ListPage.prototype.seeCustomer = function (event, cliente) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__customer_customer__["a" /* CustomerPage */], { customer: cliente });
    };
    ListPage.prototype.presentActionSheet = function (customer) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modifier fiche cliente ?',
            cssClass: '',
            buttons: [
                {
                    text: 'Supprimer',
                    role: 'delete',
                    cssClass: '',
                    handler: function () {
                        _this.customerListService.deleteCustomer(customer);
                        console.log('delete clicked');
                    }
                }, {
                    text: 'Modifier',
                    role: 'modify',
                    cssClass: '',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__customer_modify_customer_modify_customer__["a" /* ModifyCustomerPage */], { customer: customer });
                        console.log('edit clicked');
                    }
                }, {
                    text: 'Annuler',
                    role: 'cancel',
                    cssClass: '',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\_workspace\maquPro\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mes Clientes</ion-title>\n\n  </ion-navbar>\n  <ion-fab top right>\n    <button ion-fab mini navPush="AddCustomerPage">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-header>\n<ion-content>\n\n  <ion-list>\n      <ion-item-sliding *ngFor="let customer of customersList | async">\n        <ion-item (click)="seeCustomer($event, customer)">\n          <ion-avatar item-start>\n            <img src="../assets/imgs/rose.jpg">\n          </ion-avatar>          \n          {{customer?.prenom}}\n          {{customer?.nom}}\n          <div item-end>\n            {{customer?.typeCliente}}\n          </div>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary">\n            <ion-icon name="text"></ion-icon>\n            SMS\n          </button>\n          <button ion-button color="secondary">\n            <ion-icon name="call"></ion-icon>\n            Appeler            \n          </button>\n        </ion-item-options>\n        <ion-item-options side="left">\n          <button ion-button color="light" (click)="presentActionSheet(customer)">\n            <ion-icon name="ios-more" ></ion-icon>\n            Plus\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\_workspace\maquPro\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__["a" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_controller__["a" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_customerList_customer_list_service__["a" /* CustomerListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_customerList_customer_list_service__["a" /* CustomerListService */]) === "function" && _d || Object])
    ], ListPage);
    return ListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cliente_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customerList_customer_list_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModifyCustomerPage = /** @class */ (function () {
    function ModifyCustomerPage(navCtrl, navParams, customerListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerListService = customerListService;
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__models_cliente_model__["a" /* Cliente */]();
        this.customer = this.navParams.get('customer');
    }
    // modifyCustomer(customer: Cliente) {
    //   this.customerListService.createCustomer(customer);
    //   this.navCtrl.pop();
    // }
    ModifyCustomerPage.prototype.modifyCustomer = function (customer) {
        this.customerListService.updateCustomer(customer);
        this.navCtrl.pop();
    };
    ModifyCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modify-customer',template:/*ion-inline-start:"C:\_workspace\maquPro\src\pages\customer\modify-customer\modify-customer.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Modifier une cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content inset>\n  <ion-item>\n    <div item-start>\n        <ion-label color="primary" stacked>Prénom</ion-label>\n        <ion-input [(ngModel)]="customer.prenom" type="text" placeholder="Prénom"></ion-input>    \n    </div>\n    <div item-end>\n        <ion-label color="primary" stacked>Nom</ion-label>\n        <ion-input [(ngModel)]="customer.nom" type="text" placeholder="Nom"></ion-input>    \n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-label>Type de Cliente</ion-label>\n    <ion-select [(ngModel)]="customer.typeCliente" interface="popover">\n      <ion-option value="black">black</ion-option>\n      <ion-option value="régulière">régulière</ion-option>\n      <ion-option value="occasionnelle">occasionnelle</ion-option>\n      <ion-option value="privilège">privilège</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Anniversaire</ion-label>\n    <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DDDD MMMM YYYY" [(ngModel)]="birthday"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Téléphone n°1</ion-label>\n    <ion-input [(ngModel)]="customer.telephone.num1" type="tel" placeholder="06 12 34 56 78"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Téléphone n°2</ion-label>\n    <ion-input [(ngModel)]="customer.telephone.num2" type="tel" placeholder="01 23 45 67 89"></ion-input>\n  </ion-item>\n  <ion-item>\n    <div item-start style="width: 30vw">\n      <ion-label color="primary" stacked>Numéro </ion-label>\n      <ion-input [(ngModel)]="customer.adresse.numero" placeholder="123" type="text"></ion-input>\n    </div>\n    <div item-end style="width: 70vw">\n      <ion-label color="primary" stacked>Complément </ion-label>\n      <ion-input [(ngModel)]="customer.adresse.complement" placeholder="Résidence Bob Marley" type="text"></ion-input>\n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Rue</ion-label>\n    <ion-input [(ngModel)]="customer.adresse.rue" type="text" placeholder="Avenue du Yaourt"></ion-input>\n  </ion-item>\n  <ion-item item-start>\n    <div item-start style="width: 30vw">\n      <ion-label color="primary" stacked>Code Postal </ion-label>\n      <ion-input [(ngModel)]="customer.adresse.codePostal" type="text" placeholder="91000"></ion-input>\n    </div>\n    <div item-end style="width: 70vw">\n      <ion-label color="primary" stacked>Ville </ion-label>\n      <ion-input [(ngModel)]="customer.adresse.ville" type="text" placeholder="LA VILLE"></ion-input>\n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-label color="primary" stacked>Notes </ion-label>\n    <ion-input [(ngModel)]="customer.adresse.notes" type="text" placeholder="interphone, étage, etc..."></ion-input>\n  </ion-item>\n  <ion-item></ion-item>\n  \n  <ion-item>\n        <ion-label>Prestations</ion-label>\n        <ion-select [(ngModel)]="customer.prestations" multiple="true">\n          <ion-option>Epilation</ion-option>\n          <ion-option>Maquillage</ion-option>\n          <ion-option>Soins</ion-option>\n          <ion-option>Regard</ion-option>\n          <ion-option>Ongles</ion-option>\n        </ion-select>\n  </ion-item>\n  <ion-item *ngFor="let prest of customer.prestations">\n    <div style="text-align:center">{{prest}}</div>\n  </ion-item>\n  \n\n\n\n  <ion-item></ion-item>\n  <button ion-button block (click)="modifyCustomer(customer)"> Modifier</button>\n\n</ion-content>'/*ion-inline-end:"C:\_workspace\maquPro\src\pages\customer\modify-customer\modify-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_customerList_customer_list_service__["a" /* CustomerListService */]])
    ], ModifyCustomerPage);
    return ModifyCustomerPage;
}());

//# sourceMappingURL=modify-customer.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/customer/add-customer/add-customer.module": [
		437,
		0
	],
	"../pages/customer/modify-customer/modify-customer.module": [
		438,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerPage = /** @class */ (function () {
    function CustomerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.customer = new __WEBPACK_IMPORTED_MODULE_3__models_cliente_model__["a" /* Cliente */]();
        this.customer = navParams.get('customer');
    }
    CustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer',template:/*ion-inline-start:"C:\_workspace\maquPro\src\pages\customer\customer.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{customer?.prenom}} {{customer?.nom}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content inset>\n\n  <ion-item>\n\n    <div item-start>\n\n      <ion-label color="primary" stacked>Prénom</ion-label>\n\n      <ion-input [(ngModel)]="customer.prenom" type="text" placeholder="Prénom" readonly></ion-input>\n\n    </div>\n\n    <div item-end>\n\n      <ion-label color="primary" stacked>Nom</ion-label>\n\n      <ion-input [(ngModel)]="customer.nom" type="text" placeholder="Nom" readonly></ion-input>\n\n    </div>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Type de Cliente</ion-label>\n\n    <ion-select [(ngModel)]="customer.typeCliente" interface="popover" disabled>\n\n      <ion-option value="black">black</ion-option>\n\n      <ion-option value="régulière">régulière</ion-option>\n\n      <ion-option value="occasionnelle">occasionnelle</ion-option>\n\n      <ion-option value="privilège">privilège</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Anniversaire</ion-label>\n\n    <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DDDD MMMM YYYY" [(ngModel)]="birthday" disabled></ion-datetime>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Téléphone n°1</ion-label>\n\n    <ion-input [(ngModel)]="customer.telephone.num1" type="tel" placeholder="06 12 34 56 78" readonly></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Téléphone n°2</ion-label>\n\n    <ion-input [(ngModel)]="customer.telephone.num2" type="tel" placeholder="01 23 45 67 89" readonly></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <div item-start style="width: 30vw">\n\n      <ion-label color="primary" stacked>Numéro </ion-label>\n\n      <ion-input [(ngModel)]="customer.adresse.numero" placeholder="123" type="text" readonly></ion-input>\n\n    </div>\n\n    <div item-end style="width: 70vw">\n\n      <ion-label color="primary" stacked>Complément </ion-label>\n\n      <ion-input [(ngModel)]="customer.adresse.complement" placeholder="Résidence Bob Marley" type="text" readonly></ion-input>\n\n    </div>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Rue</ion-label>\n\n    <ion-input [(ngModel)]="customer.adresse.rue" type="text" placeholder="Avenue du Yaourt" readonly></ion-input>\n\n  </ion-item>\n\n  <ion-item item-start>\n\n    <div item-start style="width: 30vw">\n\n      <ion-label color="primary" stacked>Code Postal </ion-label>\n\n      <ion-input [(ngModel)]="customer.adresse.codePostal" type="text" placeholder="91000" readonly></ion-input>\n\n    </div>\n\n    <div item-end style="width: 70vw">\n\n      <ion-label color="primary" stacked>Ville </ion-label>\n\n      <ion-input [(ngModel)]="customer.adresse.ville" type="text" placeholder="LA VILLE" readonly></ion-input>\n\n    </div>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label color="primary" stacked>Notes </ion-label>\n\n    <ion-input [(ngModel)]="customer.adresse.notes" type="text" placeholder="interphone, étage, etc..." readonly></ion-input>\n\n  </ion-item>\n\n  <ion-item></ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Prestations</ion-label>\n\n    <ion-select [(ngModel)]="customer.prestations" multiple="true" disabled>\n\n      <ion-option>Epilation</ion-option>\n\n      <ion-option>Maquillage</ion-option>\n\n      <ion-option>Soins</ion-option>\n\n      <ion-option>Regard</ion-option>\n\n      <ion-option>Ongles</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item *ngFor="let prest of customer.prestations">\n\n    <div style="text-align:center">{{prest}}</div>\n\n  </ion-item>\n\n\n\n  <ion-item></ion-item>\n\n  <!-- <button ion-button block (click)="modifyCustomer(customer)"> Modifier</button> -->\n\n\n\n</ion-content>'/*ion-inline-end:"C:\_workspace\maquPro\src\pages\customer\customer.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular_navigation_nav_params__["a" /* NavParams */]) === "function" && _b || Object])
    ], CustomerPage);
    return CustomerPage;
    var _a, _b;
}());

//# sourceMappingURL=customer.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\_workspace\maquPro\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Acceuil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\_workspace\maquPro\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_credentials__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_customerList_customer_list_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_customer_modify_customer_modify_customer__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MaquPro */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_customer_modify_customer_modify_customer__["a" /* ModifyCustomerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MaquPro */], {
                    monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
                    monthShortNames: ['jan', 'fev', 'mar', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'],
                    dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
                    dayShortNames: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
                    cancelText: "Annuler",
                    doneText: "Valider"
                }, {
                    links: [
                        { loadChildren: '../pages/customer/add-customer/add-customer.module#AddCustomerPageModule', name: 'AddCustomerPage', segment: 'add-customer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/customer/modify-customer/modify-customer.module#ModifyCustomerPageModule', name: 'ModifyCustomerPage', segment: 'modify-customer', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_0__firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MaquPro */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_customer_customer__["a" /* CustomerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_customer_modify_customer_modify_customer__["a" /* ModifyCustomerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_customerList_customer_list_service__["a" /* CustomerListService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBdnptFVNfPk8KZBgl_03if4HmDpevD-hU",
    authDomain: "maqupro-624bb.firebaseapp.com",
    databaseURL: "https://maqupro-624bb.firebaseio.com",
    projectId: "maqupro-624bb",
    storageBucket: "maqupro-624bb.appspot.com",
    messagingSenderId: "58317910299"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaquPro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaquPro = /** @class */ (function () {
    function MaquPro(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Acceuil', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Mes Clientes', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MaquPro.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MaquPro.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MaquPro.prototype, "nav", void 0);
    MaquPro = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\_workspace\maquPro\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\_workspace\maquPro\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MaquPro);
    return MaquPro;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerListService = /** @class */ (function () {
    function CustomerListService(afDb) {
        this.afDb = afDb;
        this.customerListRef = this.afDb.list('clientes-list');
    }
    CustomerListService.prototype.getCustomersList = function () {
        console.log(this.customerListRef);
        return this.customerListRef;
    };
    CustomerListService.prototype.createCustomer = function (customer) {
        return this.customerListRef.push(customer);
    };
    CustomerListService.prototype.updateCustomer = function (customer) {
        return this.customerListRef.update(customer.key, customer);
    };
    CustomerListService.prototype.deleteCustomer = function (customer) {
        return this.customerListRef.remove(customer.key);
    };
    CustomerListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], CustomerListService);
    return CustomerListService;
    var _a;
}());

//# sourceMappingURL=customer-list.service.js.map

/***/ })

},[279]);
//# sourceMappingURL=main.js.map