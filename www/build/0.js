webpackJsonp([0],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerPageModule", function() { return AddCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_customer__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCustomerPageModule = /** @class */ (function () {
    function AddCustomerPageModule() {
    }
    AddCustomerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_customer__["a" /* AddCustomerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_customer__["a" /* AddCustomerPage */]),
            ],
        })
    ], AddCustomerPageModule);
    return AddCustomerPageModule;
}());

//# sourceMappingURL=add-customer.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_customerList_customer_list_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCustomerPage = /** @class */ (function () {
    function AddCustomerPage(navCtrl, navParams, customerListService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customerListService = customerListService;
        this.customer = {
            nom: '',
            typeCliente: '',
            adresse: '',
            telephone: undefined
        };
        this.customerList = [];
    }
    AddCustomerPage.prototype.addCustomer = function (customer) {
        var _this = this;
        this.customerListService.createCustomer(customer).then(function (ref) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */], { key: ref.key });
        });
    };
    AddCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-customer',template:/*ion-inline-start:"C:\_workspace\maquPro\src\pages\customer\add-customer\add-customer.html"*/'k<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Ajouter une cliente</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n      <ion-input [(ngModel)]="customer.nom" type="text" placeholder="Nom de la cliente"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="customer.typeCliente" type="text" placeholder="Type de cliente"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="customer.adresse" type="text" placeholder="Adresse de la cliente"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input [(ngModel)]="customer.telephone" type="tel" placeholder="Numéro"></ion-input>\n      </ion-item>\n    <button ion-button block (click)="addCustomer(customer)"> Ajouter</button>\n\n</ion-content>'/*ion-inline-end:"C:\_workspace\maquPro\src\pages\customer\add-customer\add-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_customerList_customer_list_service__["a" /* CustomerListService */]])
    ], AddCustomerPage);
    return AddCustomerPage;
}());

//# sourceMappingURL=add-customer.js.map

/***/ })

});
//# sourceMappingURL=0.js.map