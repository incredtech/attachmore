(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-upload-progress-upload-progress-module"],{

/***/ "./src/app/pages/upload-progress/upload-progress.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/upload-progress/upload-progress.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fs-hero hero-img pdd-btm-30\" style=\"background-image: url(assets/images/bg/bg1.jpg)\">\r\n  <div class=\"dark-overlay\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 mrg-top-95 text-center \">\r\n          <div class=\"width-60 bg-opaque upload-banner p-10 mrg-horizon-auto mrg-top-10 display-flex\">\r\n            <!-- <p class=\"white-500-fg font-weight-bold\" *ngIf=\"!uploadService.uploadComplete\">{{phrase}}</p>\r\n              <p class=\"white-500-fg font-weight-bold\" >{{phrase}}</p> -->\r\n            <div class=\"m-10 p-10 white-bg width-100 pull-left \"\r\n              *ngIf=\"userType != usertTypeEnum.GuestLink || !uploadService.uploadComplete\">\r\n              <h4 class=\"theme-text\"> {{uploadService.uploadComplete ? 'Upload Complete' : 'Uploading '}}</h4>\r\n              <p class=\"font-weight-bold\">\r\n                <am-attachment-name [attachment]=\"attachment\"></am-attachment-name>\r\n              </p>\r\n              <am-upload-spinner></am-upload-spinner>\r\n              <div *ngIf=\"usertTypeEnum.GuestLink != userType\">\r\n                <am-download-link [name]=\"attachmentService.url | async\"></am-download-link>\r\n                <label class=\"pt-16 text-center\" fxLayoutAlign=\"start\">Link Options:</label>\r\n                <am-settings></am-settings>\r\n                <button mat-flat-button color=\"primary\" (click)=\"cancelOrViewDownload()\"\r\n                  class=\"border-radius-0  white-500-fg mrg-right-10 mrg-top-30\"\r\n                  target=\"_blank\">{{uploadService.uploadComplete? 'View Download': 'Cancel Upload'}}</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"m-10 p-10 width-100 pull-left \"\r\n              *ngIf=\"userType == usertTypeEnum.GuestLink && uploadService.uploadComplete\">\r\n              <h4 class=\"white-500-fg\">Guest upload</h4>\r\n              <h4 class=\"white-500-fg font-size-24 mrg-top-20\">\r\n                {{uploadService.uploadComplete ? 'Upload Completed' : 'Uploading '}}</h4>\r\n              <div class=\"white-bg\">\r\n                <div class=\"img-gallery\">\r\n                  <am-file *ngFor=\"let file of uploadService.uploader.queue;\" [uploadedFile]=\"file\"\r\n                    [userType]=\"usertTypeEnum.GuestLink\"></am-file>\r\n                </div>\r\n                <p class=\"font-weight-bold\">\r\n                  Notification of the completed upload has been sent on Email.\r\n                </p>\r\n                <p class=\"pdd-btm-10 green-500-fg font-weight-bold\">\r\n                  Thank You\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/upload-progress/upload-progress.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/upload-progress/upload-progress.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-text {\n  position: absolute;\n  top: 43px;\n  left: 25px;\n  line-height: 22px;\n  font-size: 14px;\n  font-family: Montserrat;\n  width: 100px;\n  text-align: center;\n  font-weight: 600;\n  color: #666;\n  letter-spacing: 0.2px; }\n\n.position-relative {\n  position: relative; }\n\n.mat-tab-label {\n  background: #e5e5e5; }\n\n.fs-hero {\n  height: 100%; }\n\n.img-gallery {\n  display: flex;\n  flex-wrap: wrap;\n  place-content: start start;\n  position: relative;\n  height: 200px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXBsb2FkLXByb2dyZXNzL0M6XFxXT1JLU1BBQ0VcXERPVC1ORVRcXGF0dGFjaG1vcmVcXEF0dGFjaE1vcmUuV2ViL3NyY1xcYXBwXFxwYWdlc1xcdXBsb2FkLXByb2dyZXNzXFx1cGxvYWQtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsVUFBUztFQUNULFdBQVU7RUFDVixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZix3QkFBdUI7RUFDdkIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsWUFBVztFQUNYLHNCQUFxQixFQUN4Qjs7QUFFRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGFBQVksRUFDZjs7QUFDRDtFQUNJLGNBQWE7RUFDYixnQkFBZTtFQUNmLDJCQUEwQjtFQUMxQixtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGVBQWMsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy91cGxvYWQtcHJvZ3Jlc3MvdXBsb2FkLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXItdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQzcHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcclxufVxyXG5cclxuLnBvc2l0aW9uLXJlbGF0aXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm1hdC10YWItbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG5cclxuLmZzLWhlcm8ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbWctZ2FsbGVyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGxhY2UtY29udGVudDogc3RhcnQgc3RhcnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/upload-progress/upload-progress.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/upload-progress/upload-progress.component.ts ***!
  \********************************************************************/
/*! exports provided: UploadProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProgressComponent", function() { return UploadProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_attachment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/attachment.service */ "./src/app/services/attachment.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../enum */ "./src/app/enum/index.ts");
/* harmony import */ var _shared_pipes_prepare_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/prepare-date.pipe */ "./src/app/shared/pipes/prepare-date.pipe.ts");
/* harmony import */ var _services_phrase_generator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/phrase-generator.service */ "./src/app/services/phrase-generator.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/dialog.service */ "./src/app/services/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UploadProgressComponent = /** @class */ (function () {
    function UploadProgressComponent(uploadService, attachmentService, phraseGeneratorService, dialogService, activateRoute, router, el) {
        this.uploadService = uploadService;
        this.attachmentService = attachmentService;
        this.phraseGeneratorService = phraseGeneratorService;
        this.dialogService = dialogService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.el = el;
        this.usertTypeEnum = _enum__WEBPACK_IMPORTED_MODULE_4__["UserType"];
        this.attachment = {
            attachmentId: 0,
            name: '',
            totalSize: 0,
            totalCount: 0,
            creationDate: new Date(),
            expiryDate: new Date(),
            userId: 123,
            accountId: 2,
            status: _enum__WEBPACK_IMPORTED_MODULE_4__["FileStatus"].Active,
            downloadUrl: window.location.origin + "/download",
            deletionDate: new Date()
        };
    }
    UploadProgressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.queryParams.subscribe(function (res) {
            _this.userType = res.userType;
            // tslint:disable-next-line:triple-equals
            if (_this.userType != _this.usertTypeEnum.GuestLink) {
                _this.phraseGeneratorService.generatePharse();
                _this.getPhrase();
            }
        });
        this.uploadService.uploadComplete = false;
        this.attachment.totalSize = this.uploadService.filesSize;
        this.attachment.totalCount = this.uploadService.uploader.queue.length;
        this.prepareFileName();
        this.getAttachmentAndStartUplaod();
    };
    UploadProgressComponent.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.scrollIntoView();
    };
    UploadProgressComponent.prototype.prepareFileName = function () {
        if (this.uploadService.uploader.queue.length > 1) {
            this.attachment.name =
                this.uploadService.uploader.queue.length + ' Files ' + new _shared_pipes_prepare_date_pipe__WEBPACK_IMPORTED_MODULE_5__["PrepareDatePipe"]().transform(new Date());
        }
        else {
            this.attachment.name = this.uploadService.uploader.queue[0].file.name.split('.').shift();
        }
    };
    /**
     * Get Attachment Details from server and then start uplaod
     */
    UploadProgressComponent.prototype.getAttachmentAndStartUplaod = function () {
        var _this = this;
        if (!this.uploadService.uploader.queue.length) {
            return;
        }
        this.attachmentService.getAttachment(this.attachment).subscribe(function (res) {
            _this.attachment.attachmentId = res.attachmentId;
            _this.uploadService.startUpload(res.attachmentId);
        });
    };
    /**
     * Get Phrase
     */
    UploadProgressComponent.prototype.getPhrase = function () {
        this.phrase = this.phraseGeneratorService.randomPhrase();
    };
    /**
     * Cancel or view Download
     */
    UploadProgressComponent.prototype.cancelOrViewDownload = function () {
        var _this = this;
        if (this.uploadService.uploadComplete) {
            // this.router.navigate(['../download', this.uploadService.attachmentId], { relativeTo: this.activateRoute });
            window.open(location.origin + "/download/" + this.uploadService.attachmentId);
        }
        else {
            this.dialogService.confirmationDialog({
                title: 'Confirmation',
                message: 'Are you sure to Cancel?',
                subMessage: 'Do you really want to cancel the upload?'
            }).subscribe(function (res) {
                if (res) {
                    _this.router.navigate(['../'], { relativeTo: _this.activateRoute });
                }
            });
        }
    };
    /**
     * lifecycle event fires when component is destroying
     */
    UploadProgressComponent.prototype.ngOnDestroy = function () {
        this.uploadService.reset();
        this.uploadService.uploader.clearQueue();
    };
    UploadProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-upload-progress',
            template: __webpack_require__(/*! ./upload-progress.component.html */ "./src/app/pages/upload-progress/upload-progress.component.html"),
            styles: [__webpack_require__(/*! ./upload-progress.component.scss */ "./src/app/pages/upload-progress/upload-progress.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_3__["UploadService"],
            _services_attachment_service__WEBPACK_IMPORTED_MODULE_2__["AttachmentService"],
            _services_phrase_generator_service__WEBPACK_IMPORTED_MODULE_6__["PhraseGeneratorService"],
            _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UploadProgressComponent);
    return UploadProgressComponent;
}());



/***/ }),

/***/ "./src/app/pages/upload-progress/upload-progress.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/upload-progress/upload-progress.module.ts ***!
  \*****************************************************************/
/*! exports provided: UploadProgressModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadProgressModule", function() { return UploadProgressModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-progress.component */ "./src/app/pages/upload-progress/upload-progress.component.ts");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UPLOAD_PROGRESS_ROUTES = [
    {
        path: '', component: _upload_progress_component__WEBPACK_IMPORTED_MODULE_3__["UploadProgressComponent"]
    }
];
var UploadProgressModule = /** @class */ (function () {
    function UploadProgressModule() {
    }
    UploadProgressModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_upload_progress_component__WEBPACK_IMPORTED_MODULE_3__["UploadProgressComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(UPLOAD_PROGRESS_ROUTES), _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_4__["AmSharedModule"]]
        })
    ], UploadProgressModule);
    return UploadProgressModule;
}());



/***/ }),

/***/ "./src/app/services/phrase-generator.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/phrase-generator.service.ts ***!
  \******************************************************/
/*! exports provided: PhraseGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhraseGeneratorService", function() { return PhraseGeneratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhraseGeneratorService = /** @class */ (function () {
    function PhraseGeneratorService(authService) {
        this.authService = authService;
        this.phrases = [];
    }
    /**
     * generate phrases
     */
    PhraseGeneratorService.prototype.generatePharse = function () {
        this.phrases = [
            "Hi " + this.authService.userInfo.user.firstName + ", Know any good jokes? Wait! Clean ones please.",
            "Hi " + this.authService.userInfo.user.firstName + ", You are such a data slinger.",
            "Hi " + this.authService.userInfo.user.firstName + ", Do you like action movies or romantic comedies?",
            "Hi " + this.authService.userInfo.user.firstName + ", If you just had one wish, you would?",
            "Hi " + this.authService.userInfo.user.firstName + ", How did you ever survive with out us?",
            "Hi " + this.authService.userInfo.user.firstName + ", We think transferring large files is cool. Is that nerdy?",
            "Hi " + this.authService.userInfo.user.firstName + ", Do you think the Mona Lisa is an overrated painting?",
            "Hi " + this.authService.userInfo.user.firstName + ", I think this is the beginning of a beautiful friendship.",
            "Hi " + this.authService.userInfo.user.firstName + ", Sometimes everything works out just like you planned it.",
            "Hi " + this.authService.userInfo.user.firstName + ", When are we going to lunch. It\u2019s our treat, right?",
            "Hi " + this.authService.userInfo.user.firstName + ", Did you see that game last night? I can\u2019t believe they won.",
            "Hi " + this.authService.userInfo.user.firstName + ", It\u2019s really cool that your socks match your shirt. Snappy.",
            "Hi " + this.authService.userInfo.user.firstName + ", We are so glad you are with us today. Thanks for uploading.",
            "Hi " + this.authService.userInfo.user.firstName + ", I am really good at jumping rope, but just on the first jump."
        ];
    };
    /**
     * Random Phrase
     */
    PhraseGeneratorService.prototype.randomPhrase = function () {
        return this.phrases[this.randomNumber()];
    };
    /**
     * Generate Random Number between 1 and 5
     */
    PhraseGeneratorService.prototype.randomNumber = function () {
        return Math.ceil(Math.random() * this.phrases.length);
    };
    PhraseGeneratorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PhraseGeneratorService);
    return PhraseGeneratorService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-upload-progress-upload-progress-module.js.map