(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-subusers-add-subusers-module"],{

/***/ "./src/app/pages/add-subusers/add-subusers.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/add-subusers/add-subusers.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-subusers works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/add-subusers/add-subusers.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/add-subusers/add-subusers.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1zdWJ1c2Vycy9hZGQtc3VidXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/add-subusers/add-subusers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/add-subusers/add-subusers.component.ts ***!
  \**************************************************************/
/*! exports provided: AddSubusersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubusersComponent", function() { return AddSubusersComponent; });
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

var AddSubusersComponent = /** @class */ (function () {
    function AddSubusersComponent() {
    }
    AddSubusersComponent.prototype.ngOnInit = function () {
    };
    AddSubusersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-add-subusers',
            template: __webpack_require__(/*! ./add-subusers.component.html */ "./src/app/pages/add-subusers/add-subusers.component.html"),
            styles: [__webpack_require__(/*! ./add-subusers.component.scss */ "./src/app/pages/add-subusers/add-subusers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddSubusersComponent);
    return AddSubusersComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-subusers/add-subusers.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-subusers/add-subusers.module.ts ***!
  \***********************************************************/
/*! exports provided: AddSubusersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubusersModule", function() { return AddSubusersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
/* harmony import */ var _add_subusers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-subusers.component */ "./src/app/pages/add-subusers/add-subusers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ADD_SUBUSERS_ROUTES = [
    {
        path: '', component: _add_subusers_component__WEBPACK_IMPORTED_MODULE_4__["AddSubusersComponent"]
    }
];
var AddSubusersModule = /** @class */ (function () {
    function AddSubusersModule() {
    }
    AddSubusersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_subusers_component__WEBPACK_IMPORTED_MODULE_4__["AddSubusersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ADD_SUBUSERS_ROUTES),
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__["AmSharedModule"]
            ]
        })
    ], AddSubusersModule);
    return AddSubusersModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-subusers-add-subusers-module.js.map