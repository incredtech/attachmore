(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-security-security-module"],{

/***/ "./src/app/pages/security/security-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/security/security-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SECURITY_COMPONENTS, SecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECURITY_COMPONENTS", function() { return SECURITY_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function() { return SecurityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _security_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security.component */ "./src/app/pages/security/security.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SECURITY_COMPONENTS = [
    _security_component__WEBPACK_IMPORTED_MODULE_2__["SecurityComponent"]
];
var SECURITY_ROUTES = [
    {
        path: '', component: _security_component__WEBPACK_IMPORTED_MODULE_2__["SecurityComponent"]
    }
];
var SecurityRoutingModule = /** @class */ (function () {
    function SecurityRoutingModule() {
    }
    SecurityRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(SECURITY_ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SecurityRoutingModule);
    return SecurityRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/security/security.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/security/security.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <section class=\"section-1 mt-120\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"content-block-1 mb-40 row\">\r\n            <h2 class=\"heading-1 text-center WhiteBg\">Security</h2>\r\n            <p class=\"text-center font-weight-semi-bold color-444 font-size-18 width-30 mrg-horizon-auto pdd-horizon-10\">Enjoy peace of mind. You're safe and secure with Attachmore.</p>\r\n          </div>\r\n          <div>\r\n            <h4 class=\"font-weight-semi-bold mb-20\">Secure File Transfer and Storage </h4>\r\n            <p>In today's Internet. security is vitally important. Whether you are using Attachmore for personal or business needs it's important that your files are secure. Attachmore takes important steps to ensure the files you transfer with our service are secure and only accessible by those you want to access them.</p>\r\n            <h4 class=\"font-weight-semi-bold mrg-top-30 mb-20\">Operations and Data Handling</h4>\r\n            <p>All items uploaded to Attachmore servers are stored in an encrypted format. Attachmore employees do not have access to open or view uploaded items. The data is only accessible from the item's download page. A file ID is assigned to the item at the time of upload. The generated file ID is used as an encryption/decryption key. Attachmore employees do not have access to your download pages or file IDs. The only people who can access the uploaded items are you. the sender. and the recipients of the download link.</p>\r\n            <h4 class=\"font-weight-semi-bold mrg-top-30 mb-20\">Credential Download Options</h4>\r\n            <p>Items uploaded to Attachmore are accessible to anyone with access to the item's download page. If the sender's recipients forward the item's download links to others. they will have the ability to retrieve the uploaded items from the download page. To prevent unauthorized access. the sender can choose to implement credentials that a visitor to the download page must enter to download the item. The sender can choose to require an email address. a specific email address. or a password. The sender or account holder can apply these rules to all items transferred through their Attachmore account or on an item-by-item basis.</p>\r\n            <h4 class=\"font-weight-semi-bold mrg-top-30 mb-20\">256-bit SSL Encrypted Transfer</h4>\r\n            <p>The sender or recipient can choose to upload and download items using 256-bit SSL security. This technology. which is commonly used in secure online transactions. encrypts the communication channel between the users computer and the Attachmore server. Using SSL encryption prevents a third party from intercepting the communication between the users computer and Attachmore servers. By default all Attachmore uploads and download occur over https which means 256-bit SSL security is in use.</p>\r\n            <h4 class=\"font-weight-semi-bold mrg-top-30 mb-20\">Automatic Expirations and Disabling</h4>\r\n            <p>All items transferred with Attachmore are available from the item's download page for a specified number of downloads and days. After either of these are reached. the item will no longer be available from the download page. Expired items will he purged from Attachmore's storage infrastructure within 90 days. The sender of the item has the ability to disable the item and customize its availability settings at any time.</p>\r\n            <h4 class=\"font-weight-semi-bold mrg-top-30 mb-20\">HIPPA Compliance</h4>\r\n            <p>Attachmore has the ability for the sender to transfer data and meet HIPAA requirements. HIPPA requires five technical safeguard standards when transferring data which are: access control. audit controls. integrity. person or entity authentication and transmission security. To meet HIPPA standards when transferring files with Attachmore be sure to: \r\n              <br> &nbsp; &nbsp; 1. Use HTTPS \r\n              <br> &nbsp; &nbsp; 2. Upload only using https. generate https download links</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"section-2  free-trial\" style=\"background-image:url(assets/images/bg/free-trial.jpg); background-size: 100%;\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"pdd-vertical-10 pdd-horizon-70 text-center\">\r\n              <div class=\"text-center\">\r\n                <h2 class=\"no-mrg-top white-500-fg font-size-40\">Get started with 30 Day Free Trial</h2>\r\n                <p class=\"width-80 mrg-horizon-auto mrg-top-20 white-500-fg\">Attachmore is the best tool to send and share files.</p>\r\n                <div class=\"form-group mrg-top-30\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6 col-md-offset-3\">\r\n                      <div class=\"icon-input\">\r\n                          <mat-form-field class=\"example-full-width\">\r\n                              <input matInput placeholder=\"Your mail here\">\r\n                            </mat-form-field>\r\n                          \r\n                        <!-- <input type=\"email\" class=\"form-control width-75\" placeholder=\"Your mail here\"> -->\r\n                        <!-- <i class=\"ei ei-email\"></i> -->\r\n                        <a href=\"\" class=\"btn btn-theme btn-md inline-submit mrg-top-10\">Next </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"section-1\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <h2 class=\"text-center\">Learn More About</h2>\r\n              <div class=\"relative mrg-top-30\">\r\n                <h5 class=\"font-size-16 font-weight-semi-bold\">Integrating Attachmore</h5>\r\n                <p class=\"ls-0 pdd-right-120\">If you have a website then integrate Attachmore so file exchanges happen on your website and within your brand or persona. Recipients can download and visitors can send you files.</p>\r\n                <button class=\"border-radius-0 cstm_readmore mrg-top-15 pdd-horizon-18 readmore mat-stroked-button mat-accent\" color=\"accent\" mat-stroked-button=\"\" ng-reflect-color=\"accent\"><span class=\"mat-button-wrapper\">Read More</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div></button>\r\n              </div>\r\n              <div class=\"relative mrg-top-30\">\r\n                <h5 class=\"font-size-16 font-weight-semi-bold\">Right Click Upload</h5>\r\n                <p class=\"ls-0 pdd-right-120\">Be more productive with our Right Click Upload software. Select and Upload files from anywhere on your computer without signing into the Attachmore website.</p>\r\n                <button class=\"border-radius-0 cstm_readmore mrg-top-15 pdd-horizon-18 readmore mat-stroked-button mat-accent\" color=\"accent\" mat-stroked-button=\"\" ng-reflect-color=\"accent\"><span class=\"mat-button-wrapper\">Read More</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div></button>\r\n              </div>\r\n              <div class=\"relative mrg-top-30\">\r\n                <h5 class=\"font-size-16 font-weight-semi-bold\">Team Accounts</h5>\r\n                <p class=\"ls-0 pdd-right-120\">Support your entire team with your Attachmore account. Setup additional administrators or sub-users. Keep all your file communications referenceable in one place.</p>\r\n                <button class=\"border-radius-0 mrg-top-15 cstm_readmore pdd-horizon-18 readmore mat-stroked-button mat-accent\" color=\"accent\" mat-stroked-button=\"\" ng-reflect-color=\"accent\"><span class=\"mat-button-wrapper\">Read More</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\" ng-reflect-centered=\"false\" ng-reflect-disabled=\"false\" ng-reflect-trigger=\"[object HTMLButtonElement]\"></div><div class=\"mat-button-focus-overlay\"></div></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n  "

/***/ }),

/***/ "./src/app/pages/security/security.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/security/security.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading-1:before {\n  background-color: transparent; }\n\n.font-weight-500 {\n  font-weight: 500; }\n\n.color-444 {\n  color: #444444 !important; }\n\n.color-666 {\n  color: #666666 !important; }\n\n.custm_dash {\n  position: relative; }\n\n.custm_dash:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 45%;\n  height: 100%;\n  background: #fff; }\n\n.attachment_status {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 5px;\n  font-size: 10px;\n  border: 1px solid;\n  padding: 1px 4px 0;\n  border-radius: 2px; }\n\n.active.attachment_status {\n  border-color: #5fb028;\n  color: #5fb028; }\n\n.attachment_status.expired {\n  border-color: #fb0e0e;\n  color: #fb0e0e; }\n\n.mat-checkbox-frame {\n  border: 1px solid #ccc !important; }\n\n.expiry-tab .mat-form-field {\n  width: 28%; }\n\n.features-block-1 .round-images {\n  background: #2E71F0;\n  border-radius: 50%;\n  padding: 15px;\n  width: 60px;\n  text-align: center;\n  margin-right: 20px;\n  margin-bottom: 15px;\n  color: #fff;\n  font-size: 22px;\n  font-weight: 600; }\n\n.heading-1.WhiteBg:before {\n  background-color: #fff !important; }\n\n.cstm_readmore {\n  position: absolute;\n  top: 0;\n  right: 0; }\n\n.heightMin {\n  min-height: 130px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VjdXJpdHkvQzpcXFdPUktTUEFDRVxcRE9ULU5FVFxcYXR0YWNobW9yZVxcQXR0YWNoTW9yZS5XZWIvc3JjXFxhcHBcXHBhZ2VzXFxzZWN1cml0eVxcc2VjdXJpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSwwQkFBeUIsRUFDNUI7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLE9BQUs7RUFDTCxRQUFPO0VBQ1AsV0FBVTtFQUNWLGFBQVk7RUFDWixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVE7RUFDUixZQUFXO0VBQ1gsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsbUJBQWtCO0VBQ2xCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLHNCQUFxQjtFQUNyQixlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxrQ0FBaUMsRUFDcEM7O0FBQ0Q7RUFDSSxXQUNKLEVBQUM7O0FBQ0Q7RUFDSSxvQkFwRGtCO0VBcURsQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixZQUFVO0VBQ1YsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxrQ0FBaUMsRUFDcEM7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFNBQVEsRUFDWDs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY3VyaXR5L3NlY3VyaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktY29sb3I6IzJFNzFGMDtcclxuLmhlYWRpbmctMTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmZvbnQtd2VpZ2h0LTUwMHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLmNvbG9yLTQ0NHtcclxuICAgIGNvbG9yOiAjNDQ0NDQ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yLTY2NntcclxuICAgIGNvbG9yOiAjNjY2NjY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RtX2Rhc2h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmN1c3RtX2Rhc2g6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5hdHRhY2htZW50X3N0YXR1cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxcHggNHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5hY3RpdmUuYXR0YWNobWVudF9zdGF0dXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWZiMDI4O1xyXG4gICAgY29sb3I6ICM1ZmIwMjg7XHJcbn1cclxuXHJcbi5hdHRhY2htZW50X3N0YXR1cy5leHBpcmVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZiMGUwZTtcclxuICAgIGNvbG9yOiAjZmIwZTBlO1xyXG59XHJcbi5tYXQtY2hlY2tib3gtZnJhbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV4cGlyeS10YWIgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAyOCVcclxufVxyXG4uZmVhdHVyZXMtYmxvY2stMSAucm91bmQtaW1hZ2Vze1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktY29sb3I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5oZWFkaW5nLTEuV2hpdGVCZzpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcbi5jc3RtX3JlYWRtb3Jle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLmhlaWdodE1pbntcclxuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/security/security.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/security/security.component.ts ***!
  \******************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
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

var SecurityComponent = /** @class */ (function () {
    function SecurityComponent() {
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    SecurityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-security',
            template: __webpack_require__(/*! ./security.component.html */ "./src/app/pages/security/security.component.html"),
            styles: [__webpack_require__(/*! ./security.component.scss */ "./src/app/pages/security/security.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SecurityComponent);
    return SecurityComponent;
}());



/***/ }),

/***/ "./src/app/pages/security/security.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/security/security.module.ts ***!
  \***************************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./security-routing.module */ "./src/app/pages/security/security-routing.module.ts");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: _security_routing_module__WEBPACK_IMPORTED_MODULE_2__["SECURITY_COMPONENTS"].slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _security_routing_module__WEBPACK_IMPORTED_MODULE_2__["SecurityRoutingModule"],
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__["AmSharedModule"],
            ]
        })
    ], SecurityModule);
    return SecurityModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-security-security-module.js.map