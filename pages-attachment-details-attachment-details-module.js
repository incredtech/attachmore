(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-attachment-details-attachment-details-module"],{

/***/ "./src/app/pages/attachment-details/attachment-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attachment-details/attachment-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-grey mt-120\">\r\n  <div flexLayout>\r\n    <div class=\"bg-gray custm_dash\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-3 white-500-bg pr-0\">\r\n          <div class=\"width-100 inline-block pdd-btm-20 pdd-top-20 border bottom\">\r\n            <img class=\"pull-left mrg-right-10\" [src]=\"icons[attachment.extension]\" alt=\"thumbnail\">\r\n            <h5 class=\"font-weight-semi-bold ls-0 mt-30 color-444\">{{attachment.name}}</h5>\r\n            <p class=\"color-666 ls-0 font-weight-500\">Status: <span class=\"primary-500-fg\">{{ fileStatus[attachment.status]}}</span></p>\r\n          </div>\r\n          <div class=\"pdd-btm-20 pdd-top-25 border bottom\">\r\n            <h5 class=\"font-weight-semi-bold ls-0\"><img src=\"assets/images/main/calender.png\" alt=\"image\"> &nbsp;\r\n              Upload Date Range</h5>\r\n            <ul class=\"mrg-left-35\">\r\n              <li class=\"font-size-14\">{{ attachment.createdOn | date : 'MM/dd/yyyy'}}</li>\r\n              <li class=\"font-size-14 font-weight-500 mrg-top-10\">Expires on</li>\r\n              <li class=\"font-size-14 mrg-top-5\">{{ attachment.expiredOn | date: 'MM/dd/yyyy'}}</li>\r\n              <li class=\"font-size-14 font-weight-500 mrg-top-10\">Purges on</li>\r\n              <li class=\"font-size-14 mrg-top-5\">{{ attachment.purgedOn | date: 'MM/dd/yyyy'}}</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"pdd-btm-20 pdd-top-25 border bottom\">\r\n            <h5 class=\"font-weight-semi-bold ls-0\"><img src=\"assets/images/main/dwnload.png\" alt=\"image\"> &nbsp;\r\n              Downloads</h5>\r\n            <ul class=\"mrg-left-35\">\r\n              <li class=\"font-size-14\">{{attachment.totalDownload}} of {{attachment.downloadLimit}}</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"pdd-btm-20 pdd-top-25 border bottom\">\r\n            <h5 class=\"font-weight-semi-bold ls-0\"><img src=\"assets/images/main/pay.png\" alt=\"image\"> &nbsp; Payments</h5>\r\n            <ul class=\"mrg-left-35\">\r\n              <li class=\"font-size-14\">${{attachment.payments}}</li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"pdd-btm-20 pdd-top-25\">\r\n            <h5 class=\"font-weight-semi-bold ls-0\"><img src=\"assets/images/main/upload_by.png\" alt=\"image\"> &nbsp;\r\n              Uploaded by</h5>\r\n            <ul class=\"mrg-left-35\">\r\n              <!-- <li class=\"font-size-14\">{{attachment.uploadedBy}}</li> -->\r\n              <li class=\"font-size-14\" *ngIf=\"userTypeEnum.Normal == userType\">Web Send</li>\r\n              <li class=\"font-size-14\" *ngIf=\"userTypeEnum.GuestLink == userType\">Guest</li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9 bg-gray pdd-left-30 min-height-700\">\r\n          <div class=\"mt-24 mb-24 width-100 inline-block\">\r\n            <h2 class=\"mt-0 mb-10 font-size-20 font-weight-semi-bold\">History - File Details</h2>\r\n            <!-- <p class=\"mrg-top-15 font-weight-500 font-size-16 color-444\"> {{ attachment.attachmentName}} \r\n                <a href=\"javasrcipt:void()\" class=\"pdd-left-5 pdd-right-10\"><img src=\"assets/images/main/edit_icon.png\" alt=\"icon\"></a>  -->\r\n            <am-attachment-name [attachment]=\"attachment\" class=\"inline-block\"></am-attachment-name>\r\n            <span class=\"font-weight-light color-444 font-size-16 pdd-left-15 pdd-right-15\">|</span>\r\n            <span class=\"font-size-13 font-weight-normal\">Size {{ attachment.attachmentSize }} MB | {{\r\n              attachment.filesDetail?.length }} {{attachment.filesDetail?.length === 1 ? 'File' : 'Files'}}</span>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-3 mb-30\" *ngFor=\"let attachmentDetail of attachment.filesDetail\">\r\n              <mat-card>\r\n                <div class=\"p-0 text-center\">\r\n                  <!-- <img src=\"assets/images/main/ppt.png\" alt=\"Excel\"> -->\r\n                  <ng-template [ngIf]=\"attachmentDetail.isImage\" [ngIfElse]=\"otherfiles\">\r\n                    <img [src]=\"attachmentDetail.fileURL\" alt=\"thumbnail\" class=\"max-width-100\">\r\n                  </ng-template>\r\n                  <ng-template #otherfiles>\r\n                    <img [src]=\"icons[attachmentDetail.extension]\" alt=\"thumbnail\" class=\"max-width-100\">\r\n                  </ng-template>\r\n                  <p class=\"m-0 pdd-top-15 color-666 font-size-13 font-weight-500 lh-1-1 ls-0 ellipsis\">{{attachmentDetail.fileName}}</p>\r\n                </div>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n          <div class=\"card p-20\">\r\n            <div class=\"mb-10\">\r\n              <am-download-link [name]=\"attachment.downloadURL\"></am-download-link>\r\n            </div>\r\n            <div>\r\n              <am-settings [expirySettings]=\"expirySettings\" [notificationSettings]=\"notificationSettings\"\r\n              [securitySettings]=\"securitySettings\"></am-settings>\r\n            </div>\r\n            <div class=\"detail_active_log mt-30\">\r\n                  <h4 class=\"font-size-16 font-weight-semi-bold color-444\">Activity Log</h4>\r\n                  <ul class=\"pdd-vertical-10 border mb-30 font-size-15 font-weight-500 color-444\">\r\n                    <li>File Set to Archive on 1/18/18 at 3.30 pm  by Mark Dev.</li>\r\n                    <li>Download Notification 1/18/18 at 2:35pm sent to sms to 858-837-2491</li>\r\n                    <li>Downloaded on 1/18/18 at 2:35pm (PT) by IP address 1.12331.2155921 by email address &lt;form data&gt; from \r\n                        www.atmo.re/1231234</li>\r\n                    <li>Download Notification 1/18/18 at 2:35pm sent to sms to 858-837-2491</li>\r\n                  </ul>\r\n                  <h4 class=\"font-size-16 m-0 font-weight-semi-bold color-444\">Assigned Download Page</h4>\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Attachmore Default\" class=\"font-size-15\">\r\n                      <mat-option value=\"5\">5</mat-option>\r\n                      <mat-option value=\"4\">4</mat-option>\r\n                      <mat-option value=\"3\">3</mat-option>\r\n                      <mat-option value=\"2\">2</mat-option>\r\n                      <mat-option value=\"1\">1</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/attachment-details/attachment-details.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/attachment-details/attachment-details.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading-1:before {\n  background-color: transparent; }\n\n.font-weight-500 {\n  font-weight: 500; }\n\n.max-width-100 {\n  max-width: 100%; }\n\n.min-height-600 {\n  min-height: 600px; }\n\n.min-height-700 {\n  min-height: 700px; }\n\n.color-444 {\n  color: #444444 !important; }\n\n.color-666 {\n  color: #666666 !important; }\n\n.custm_dash {\n  position: relative; }\n\n.custm_dash:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 45%;\n  height: 100%;\n  background: #fff; }\n\n.attachment_status {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 5px;\n  font-size: 10px;\n  border: 1px solid;\n  padding: 1px 4px 0;\n  border-radius: 2px; }\n\n.active.attachment_status {\n  border-color: #5fb028;\n  color: #5fb028; }\n\n.attachment_status.expired {\n  border-color: #fb0e0e;\n  color: #fb0e0e; }\n\n.mat-checkbox-frame {\n  border: 1px solid #ccc !important; }\n\n.expiry-tab .mat-form-field {\n  width: 28%; }\n\n.detail_active_log ul li {\n  padding: 5px 10px 5px 40px;\n  position: relative; }\n\n.detail_active_log ul li:before {\n  content: \"\";\n  position: absolute;\n  width: 16px;\n  height: 9px;\n  border-bottom: 3px solid #2e71f0;\n  border-left: 3px solid #2e71f0;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  left: 12px;\n  top: 9px;\n  box-sizing: border-box; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXR0YWNobWVudC1kZXRhaWxzL0M6XFxXT1JLU1BBQ0VcXERPVC1ORVRcXGF0dGFjaG1vcmVcXEF0dGFjaE1vcmUuV2ViL3NyY1xcYXBwXFxwYWdlc1xcYXR0YWNobWVudC1kZXRhaWxzXFxhdHRhY2htZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsT0FBSztFQUNMLFFBQU87RUFDUCxXQUFVO0VBQ1YsYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGtDQUFpQyxFQUNwQzs7QUFDRDtFQUNJLFdBQ0osRUFBQzs7QUFFRDtFQUNJLDJCQUEwQjtFQUMxQixtQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxZQUFXO0VBQ1gsaUNBQWdDO0VBQ2hDLCtCQUE4QjtFQUM5QixrQ0FBeUI7VUFBekIsMEJBQXlCO0VBQ3pCLFdBQVU7RUFDVixTQUFRO0VBQ1IsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXR0YWNobWVudC1kZXRhaWxzL2F0dGFjaG1lbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nLTE6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5mb250LXdlaWdodC01MDB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5tYXgtd2lkdGgtMTAwe1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5taW4taGVpZ2h0LTYwMHtcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5taW4taGVpZ2h0LTcwMHtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG59XHJcbi5jb2xvci00NDR7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvci02NjZ7XHJcbiAgICBjb2xvcjogIzY2NjY2NiAhaW1wb3J0YW50O1xyXG59XHJcbi5jdXN0bV9kYXNoe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jdXN0bV9kYXNoOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uYXR0YWNobWVudF9zdGF0dXMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMXB4IDRweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYWN0aXZlLmF0dGFjaG1lbnRfc3RhdHVzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzVmYjAyODtcclxuICAgIGNvbG9yOiAjNWZiMDI4O1xyXG59XHJcblxyXG4uYXR0YWNobWVudF9zdGF0dXMuZXhwaXJlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmYjBlMGU7XHJcbiAgICBjb2xvcjogI2ZiMGUwZTtcclxufVxyXG4ubWF0LWNoZWNrYm94LWZyYW1le1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xyXG59XHJcbi5leHBpcnktdGFiIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMjglXHJcbn1cclxuXHJcbi5kZXRhaWxfYWN0aXZlX2xvZyB1bCBsaSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggNDBweDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcbi5kZXRhaWxfYWN0aXZlX2xvZyB1bCBsaTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzJlNzFmMDtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzJlNzFmMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/attachment-details/attachment-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/attachment-details/attachment-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: AttachmentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDetailsComponent", function() { return AttachmentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _untility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../untility */ "./src/app/untility/index.ts");
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enum */ "./src/app/enum/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AttachmentDetailsComponent = /** @class */ (function () {
    function AttachmentDetailsComponent(route, dashboardService) {
        this.route = route;
        this.dashboardService = dashboardService;
        this.attachment = {};
        this.icons = _untility__WEBPACK_IMPORTED_MODULE_3__["ICONS_MAPPER"];
        this.fileStatus = src_app_enum__WEBPACK_IMPORTED_MODULE_4__["FileStatus"];
        this.expirySettings = {};
        this.notificationSettings = {};
        this.securitySettings = {};
        this.userTypeEnum = src_app_enum__WEBPACK_IMPORTED_MODULE_4__["UserType"];
    }
    AttachmentDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (res) {
            _this.userType = res.userType;
        });
        this.route.params.subscribe(function (res) {
            _this.dashboardService.getAttachmentDetails(+res.id).subscribe(function (response) {
                _this.getFilesExtension(response);
                _this.intializeSettings(response);
            });
        });
    };
    AttachmentDetailsComponent.prototype.intializeSettings = function (attachmentPreview) {
        this.expirySettings = {
            attachmentId: attachmentPreview.attachmentId,
            downloadsLimit: attachmentPreview.downloadLimit,
            expiryDate: moment__WEBPACK_IMPORTED_MODULE_5__(attachmentPreview.expiredOn),
            deletionDate: moment__WEBPACK_IMPORTED_MODULE_5__(attachmentPreview.deleteAfter)
        };
        this.notificationSettings = {
            attachmentId: attachmentPreview.attachmentId,
            whenExpired: attachmentPreview.whenExpired,
            whenDownload: attachmentPreview.whenDownload,
            byEmail: attachmentPreview.byEmail,
            byText: attachmentPreview.byText,
            notifyInfo: [{
                    notifyType: '1',
                    NotiicationSendOn: ''
                }]
        };
        this.securitySettings = {
            attachmentId: attachmentPreview.attachmentId,
            accessPassword: attachmentPreview.accessPassword,
            accessEmail: attachmentPreview.accessEmail,
            accessName: attachmentPreview.accessName,
            accessCompany: attachmentPreview.accessCompany,
            accessContactNumber: attachmentPreview.accessContectNumber,
            accessPayment: attachmentPreview.accessPayment
        };
    };
    /**
     * Get files extension
     * @param res
     */
    AttachmentDetailsComponent.prototype.getFilesExtension = function (attachmentPreview) {
        attachmentPreview.filesDetail.forEach(function (file) {
            file.extension = file.fileName.split('.').pop().toLowerCase();
            file.isImage = file.fileType.includes('image');
        });
        this.attachment = this.getAttachmentExtension(attachmentPreview);
    };
    /**
    * Get Attachment extension
    * @param attachmentPreview
    */
    AttachmentDetailsComponent.prototype.getAttachmentExtension = function (attachmentPreview) {
        if (attachmentPreview.filesDetail.length === 1) {
            attachmentPreview.extension = attachmentPreview.filesDetail[0].extension;
            attachmentPreview.isImage = attachmentPreview.filesDetail[0].isImage;
        }
        else if (attachmentPreview.filesDetail.length > 1) {
            attachmentPreview.extension = 'zip';
            attachmentPreview.isImage = false;
        }
        else {
            attachmentPreview.extension = null;
            attachmentPreview.isImage = false;
        }
        return attachmentPreview;
    };
    AttachmentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-attachment-details',
            template: __webpack_require__(/*! ./attachment-details.component.html */ "./src/app/pages/attachment-details/attachment-details.component.html"),
            styles: [__webpack_require__(/*! ./attachment-details.component.scss */ "./src/app/pages/attachment-details/attachment-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], AttachmentDetailsComponent);
    return AttachmentDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/attachment-details/attachment-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/attachment-details/attachment-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: AttachmentDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachmentDetailsModule", function() { return AttachmentDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
/* harmony import */ var _attachment_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attachment-details.component */ "./src/app/pages/attachment-details/attachment-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ATTACHMENTDETAILS_ROUTES = [
    {
        path: ':id', component: _attachment_details_component__WEBPACK_IMPORTED_MODULE_4__["AttachmentDetailsComponent"]
    }
];
var AttachmentDetailsModule = /** @class */ (function () {
    function AttachmentDetailsModule() {
    }
    AttachmentDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_attachment_details_component__WEBPACK_IMPORTED_MODULE_4__["AttachmentDetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ATTACHMENTDETAILS_ROUTES),
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__["AmSharedModule"]
            ],
        })
    ], AttachmentDetailsModule);
    return AttachmentDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-attachment-details-attachment-details-module.js.map