webpackJsonp([0],{

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerPageModule", function() { return AddCustomerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_customer__ = __webpack_require__(439);
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

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_cliente_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_customerList_customer_list_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(134);
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
        this.customer = new __WEBPACK_IMPORTED_MODULE_2__models_cliente_model__["a" /* Cliente */]();
        this.customerList = [];
    }
    AddCustomerPage.prototype.addCustomer = function (customer) {
        var _this = this;
        this.customerListService.createCustomer(customer).then(function (ref) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */], { key: ref.key });
        });
    };
    AddCustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-customer',template:/*ion-inline-start:"C:\_workspace\maquPro\src\pages\customer\add-customer\add-customer.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Ajouter une cliente</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content inset>\n    <ion-item>\n        <div item-start>\n            <ion-label color="primary" stacked>Prénom</ion-label>\n            <ion-input [(ngModel)]="customer.prenom" type="text" placeholder="Prénom"></ion-input>\n        </div>\n        <div item-end>\n            <ion-label color="primary" stacked>Nom</ion-label>\n            <ion-input [(ngModel)]="customer.nom" type="text" placeholder="Nom"></ion-input>\n        </div>\n    </ion-item>\n    <ion-item>\n        <ion-label>Type de Cliente</ion-label>\n        <ion-select [(ngModel)]="customer.typeCliente" interface="popover">\n            <ion-option value="black">black</ion-option>\n            <ion-option value="régulière">régulière</ion-option>\n            <ion-option value="occasionnelle">occasionnelle</ion-option>\n            <ion-option value="privilège">privilège</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>Anniversaire</ion-label>\n        <ion-datetime displayFormat="DD/MM/YYYY" pickerFormat="DDDD MMMM YYYY" [(ngModel)]="birthday"></ion-datetime>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" stacked>Téléphone n°1</ion-label>\n        <ion-input [(ngModel)]="customer.telephone.num1" type="tel" placeholder="06 12 34 56 78"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" stacked>Téléphone n°2</ion-label>\n        <ion-input [(ngModel)]="customer.telephone.num2" type="tel" placeholder="01 23 45 67 89"></ion-input>\n    </ion-item>\n    <ion-item>\n        <div item-start style="width: 30vw">\n            <ion-label color="primary" stacked>Numéro </ion-label>\n            <ion-input [(ngModel)]="customer.adresse.numero" placeholder="123" type="text"></ion-input>\n        </div>\n        <div item-end style="width: 70vw">\n            <ion-label color="primary" stacked>Complément </ion-label>\n            <ion-input [(ngModel)]="customer.adresse.complement" placeholder="Résidence Bob Marley" type="text"></ion-input>\n        </div>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" stacked>Rue</ion-label>\n        <ion-input [(ngModel)]="customer.adresse.rue" type="text" placeholder="Avenue du Yaourt"></ion-input>\n    </ion-item>\n    <ion-item item-start>\n        <div item-start style="width: 30vw">\n            <ion-label color="primary" stacked>Code Postal </ion-label>\n            <ion-input [(ngModel)]="customer.adresse.codePostal" type="text" placeholder="91000"></ion-input>\n        </div>\n        <div item-end style="width: 70vw">\n            <ion-label color="primary" stacked>Ville </ion-label>\n            <ion-input [(ngModel)]="customer.adresse.ville" type="text" placeholder="LA VILLE"></ion-input>\n        </div>\n    </ion-item>\n    <ion-item>\n        <ion-label color="primary" stacked>Notes </ion-label>\n        <ion-input [(ngModel)]="customer.adresse.notes" type="text" placeholder="interphone, étage, etc..."></ion-input>\n    </ion-item>\n    <ion-item></ion-item>\n    <ion-item>\n        <ion-label>Prestations</ion-label>\n        <ion-select [(ngModel)]="customer.prestations" multiple="true">\n            <ion-option>Epilation</ion-option>\n            <ion-option>Maquillage</ion-option>\n            <ion-option>Soins</ion-option>\n            <ion-option>Regard</ion-option>\n            <ion-option>Ongles</ion-option>\n        </ion-select>\n    </ion-item>\n    <ion-item *ngFor="let prest of customer.prestations">\n        <div style="text-align:center">{{prest}}</div>\n    </ion-item>\n    <ion-item></ion-item>\n    <button ion-button block (click)="addCustomer(customer)"> Ajouter</button>\n\n</ion-content>'/*ion-inline-end:"C:\_workspace\maquPro\src\pages\customer\add-customer\add-customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_customerList_customer_list_service__["a" /* CustomerListService */]])
    ], AddCustomerPage);
    return AddCustomerPage;
}());

//# sourceMappingURL=add-customer.js.map

/***/ })

});
//# sourceMappingURL=0.js.map