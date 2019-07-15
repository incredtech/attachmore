(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-download-download-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./src/app/pages/download/download.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/download/download.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fs-hero hero-img pdd-btm-30\" style=\"background-image: url(assets/images/bg/bg1.jpg)\">\r\n  <div class=\"dark-overlay\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 mrg-top-125 text-center \">\r\n          <div class=\"width-65 bg-opaque upload-banner p-10 mrg-horizon-auto \">\r\n            <div class=\"m-10 p-20\">\r\n              <p class=\"font-weight-bold font-size-18 white-500-fg m-0\"> File Download</p>\r\n              <am-download-preview [attachmentId]=\"attachmentId\"></am-download-preview>\r\n              <button mat-flat-button color=\"accent\" (click)=\"whenDownloadClicked()\" class=\"white-500-fg mrg-top-20 border-radius-0\">Download</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/download/download.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/download/download.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dw-text {\n  margin: 0 0 5px 0;\n  font-weight: 500 !important;\n  padding: 0;\n  font-family: Montserrat; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG93bmxvYWQvQzpcXFdPUktTUEFDRVxcRE9ULU5FVFxcYXR0YWNobW9yZVxcQXR0YWNoTW9yZS5XZWIvc3JjXFxhcHBcXHBhZ2VzXFxkb3dubG9hZFxcZG93bmxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsNEJBQTJCO0VBQzNCLFdBQVU7RUFDVix3QkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHctdGV4dCB7XHJcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/download/download.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/download/download.component.ts ***!
  \******************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_attachment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/attachment.service */ "./src/app/services/attachment.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DownloadComponent = /** @class */ (function () {
    function DownloadComponent(route, dialogService, attachmentService, settingService) {
        this.route = route;
        this.dialogService = dialogService;
        this.attachmentService = attachmentService;
        this.settingService = settingService;
        this.attachmentId = 0;
        this.securitySettings = {};
    }
    DownloadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.attachmentId = res.attachmentId;
            _this.getSecuritySettings();
        });
    };
    /**
     * Get Secuirty Settings
     */
    DownloadComponent.prototype.getSecuritySettings = function () {
        var _this = this;
        this.settingService.getSecuritySettings(this.attachmentId).subscribe(function (res) {
            _this.securitySettings = res;
        });
    };
    /**
     * Download file when button clicked
     */
    DownloadComponent.prototype.whenDownloadClicked = function () {
        var _this = this;
        if (this.securitySettings.accessEmail || this.securitySettings.accessPassword) {
            this.dialogService.downloadAttachmentDialog(this.securitySettings).subscribe(function (res) {
                if (res) {
                    _this.downloadAttachment(res);
                }
            });
        }
        else {
            this.downloadAttachment({ accessEmail: '', password: '' });
        }
    };
    /**
     * Download Attachment
     * @param downloadAttachmentDetails
     */
    DownloadComponent.prototype.downloadAttachment = function (downloadAttachmentDetails) {
        var _this = this;
        var JSON_DATA = __assign({ attachmentId: this.attachmentId }, downloadAttachmentDetails);
        this.attachmentService.downloadAttachment(JSON_DATA).subscribe(function (res) {
            if (_this.attachmentService.attachment.fileDetails && _this.attachmentService.attachment.fileDetails.length) {
                if (_this.attachmentService.attachment.fileDetails.length > 1) {
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(res, _this.attachmentService.attachment.attachmentName + ".zip");
                }
                else {
                    Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(res, _this.attachmentService.attachment.attachmentName + "." + _this.attachmentService.attachment.fileDetails[0].extension);
                }
            }
        });
    };
    DownloadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-download',
            template: __webpack_require__(/*! ./download.component.html */ "./src/app/pages/download/download.component.html"),
            styles: [__webpack_require__(/*! ./download.component.scss */ "./src/app/pages/download/download.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            _services_attachment_service__WEBPACK_IMPORTED_MODULE_3__["AttachmentService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], DownloadComponent);
    return DownloadComponent;
}());



/***/ }),

/***/ "./src/app/pages/download/download.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/download/download.module.ts ***!
  \***************************************************/
/*! exports provided: DownloadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadModule", function() { return DownloadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _download_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download.component */ "./src/app/pages/download/download.component.ts");
/* harmony import */ var src_app_shared_am_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DOWNLOAD_ROUTES = [
    {
        path: ':attachmentId', component: _download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"]
    }
];
var DownloadModule = /** @class */ (function () {
    function DownloadModule() {
    }
    DownloadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_download_component__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(DOWNLOAD_ROUTES), src_app_shared_am_shared_module__WEBPACK_IMPORTED_MODULE_4__["AmSharedModule"]]
        })
    ], DownloadModule);
    return DownloadModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-download-download-module.js.map