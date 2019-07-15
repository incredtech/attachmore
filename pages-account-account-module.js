(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "./src/app/pages/account/account-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ACCOUNT_COMPONENTS, AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_COMPONENTS", function() { return ACCOUNT_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/pages/account/reset-password/reset-password.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/pages/account/change-password/change-password.component.ts");
/* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ACCOUNT_COMPONENTS = [
    _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"],
    _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"]
];
var ACCOUNT_ROUTES = [
    {
        path: 'resetPassword', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordComponent"]
    },
    {
        path: 'changePassword', canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]], component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordComponent"]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ACCOUNT_ROUTES)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/pages/account/account-routing.module.ts");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT_COMPONENTS"].slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"],
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__["AmSharedModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/pages/account/change-password/change-password.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/account/change-password/change-password.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-40\">\r\n  <div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"mrg-top-100\">\r\n          <h2 class=\"heading-1 text-center \">Account Password</h2>\r\n          <ol class=\"breadcrumb  mrg-top-10 m-0\">\r\n            <li class=\"breadcrumb-item\"><a href=\"#\" class=\"font-size-16 white-200-fg\">Account</a></li>\r\n            <li class=\"breadcrumb-item active font-size-16 theme-color\">Edit Account Password</li>\r\n          </ol>\r\n        </div>\r\n        <div class=\"width-40 mrg-horizon-auto white-500-bg padding-20 border custm_pwd\">\r\n          <am-password-form type=\"CHANGE\"></am-password-form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/account/change-password/change-password.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/account/change-password/change-password.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/account/change-password/change-password.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/account/change-password/change-password.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
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

var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/pages/account/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/app/pages/account/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/reset-password/reset-password.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/account/reset-password/reset-password.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mt-40\">\r\n  <div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"mrg-top-100\">\r\n          <h2 class=\"heading-1 text-center\">Reset Password</h2>\r\n          <ol class=\"breadcrumb  mrg-top-10 m-0\">\r\n              <li class=\"breadcrumb-item\"><a href=\"#\" class=\"font-size-16 white-200-fg\">Account</a></li>\r\n              <li class=\"breadcrumb-item active font-size-16 theme-color\">Edit Account Password</li>\r\n            </ol>\r\n        </div>\r\n        <div class=\"width-40 mrg-horizon-auto white-500-bg padding-20 border custm_pwd\">\r\n          <am-password-form type=\"RESET\"></am-password-form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/account/reset-password/reset-password.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/account/reset-password/reset-password.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/account/reset-password/reset-password.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/reset-password/reset-password.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../configuration */ "./src/app/configuration/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(authService) {
        this.authService = authService;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        if (window.location.hash) {
            localStorage.setItem(_configuration__WEBPACK_IMPORTED_MODULE_2__["Common"].emailVerifyToken, window.location.hash.split('token=').pop());
        }
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/account/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/pages/account/reset-password/reset-password.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-account-module.js.map