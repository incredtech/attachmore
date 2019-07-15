(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-guest-links-guest-links-module"],{

/***/ "./src/app/pages/guest-links/guest-links.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/guest-links/guest-links.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-grey mt-110\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h3 class=\"display-inline mrg-top-10\">Guest Links</h3>\r\n        <form class=\"pull-right display-inline\">\r\n          <label class=\"ver_align_top pdd-top-10\">Name Guest Link</label>   \r\n          <div class=\"display-inline mrg-right-10\">\r\n              <input type=\"text\" required placeholder=\"Enter Name\"\r\n              class=\"mrg-left-10 form-control \" [formControl]=\"linkName\">  \r\n              <am-bt-input-error-msg [control]=\"linkName\" class=\"mrg-btm-10 mrg-left-10 display-inline \"></am-bt-input-error-msg>\r\n           </div>      \r\n          <button mat-flat-button color=\"primary\"\r\n            class=\"border-radius-0 line-height-40 ver_align_top white-500-fg mrg-left-10 display-inline  \" (click)=\"createGuestLink()\">\r\n            Create Guest Link</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div flexLayout>\r\n    <div class=\"bg-gray custm_dash\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"card padding-20 mrg-top-20 min-height-400\">\r\n              <h4 class=\"m-0 mrg-btm-15\">Guest Link History</h4>\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table table-hover\">\r\n                  <thead class=\"grey-300-bg\">\r\n                    <tr>\r\n                      <th>Link Name</th>\r\n                      <th>Create Date</th>\r\n                      <th>Expire date</th>\r\n                      <th>Status</th>\r\n                      <th>Usage</th>\r\n                      <th>Options</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let guestLink of guestLinks\">\r\n                      <td class=\"text-capitalize\">{{ guestLink.linkName }}</td>\r\n                      <td>{{ guestLink.creationDate | date }}</td>\r\n                      <td>{{ guestLink.expirySettings.expirationDate | date }}</td>\r\n                      <td class=\"text-capitalize\">{{ guestLinkStatus[guestLink.status] }}</td>\r\n                      <td>2 of 5</td>\r\n                      <td class=\"border-right-none\">\r\n                        <a class=\"text-behance\" routerLink=\"/filesHistory\" [queryParams]=\"{ userType: userTypeEnum.GuestLink, guestLink: guestLink.guestLinkID}\"> View Files |</a>\r\n                        <a class=\"text-behance cursor-pointer\" (click)=\"disableGuestLink(guestLink)\"> {{guestLink.status === guestLinkStatus.disable ? 'Enable' : 'Disable'}} | </a>\r\n                        <a class=\"text-behance pdd-top-10 cursor-pointer\" (click)=\"editGuestLink(guestLink)\">Edit </a>\r\n                      </td>\r\n                      <!-- <td>\r\n                        <table>\r\n                            <tr>\r\n                               <td>\r\n                                  <a class=\"text-behance\" routerLink=\"/filesHistory\" [queryParams]=\"{ userType: userTypeEnum.GuestLink, guestLink: guestLink.guestLinkID}\"> View Files |</a>\r\n                                </td>\r\n                               <td>\r\n                                  <a class=\"text-behance cursor-pointer\" (click)=\"disableGuestLink(guestLink)\"> Disable |</a>\r\n                                </td>\r\n                               <td>\r\n                                  <a class=\"text-behance pdd-top-10 cursor-pointer\" (click)=\"editGuestLink(guestLink)\">Edit </a>\r\n                                </td>\r\n                            </tr>\r\n                        </table>\r\n                      </td> -->\r\n                    </tr>\r\n                    <tr *ngIf=\"guestLinks && !guestLinks.length\">\r\n                      <td colspan=\"6\" class=\"text-center pdd-top-120 pdd-btm-130 font-size-24 font-weight-bold\">No Guest Link Found !!</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/guest-links/guest-links.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/guest-links/guest-links.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table > tbody > tr > td {\n  padding: 15px;\n  font-size: 14px;\n  background: #f6f4f4; }\n\n.table > thead > tr > th {\n  font-size: 15px;\n  padding: 15px;\n  font-weight: 600;\n  border-right: 1px solid #fff; }\n\n.line-height-40 {\n  line-height: 40px; }\n\n.ver_align_top {\n  vertical-align: top !important; }\n\n.table > tbody > tr > td {\n  border-top: 1px solid #fff;\n  border-right: 1px solid #fff; }\n\n.border-right-none {\n  border-right: none !important; }\n\n.min-height-400 {\n  min-height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3Vlc3QtbGlua3MvQzpcXFdPUktTUEFDRVxcRE9ULU5FVFxcYXR0YWNobW9yZVxcQXR0YWNoTW9yZS5XZWIvc3JjXFxhcHBcXHBhZ2VzXFxndWVzdC1saW5rc1xcZ3Vlc3QtbGlua3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBYztFQUNkLGNBQWE7RUFDYixpQkFBZTtFQUNmLDZCQUE0QixFQUMvQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLCtCQUE4QixFQUNqQzs7QUFDRDtFQUNJLDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBQ0Q7RUFFSSw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFFRyxrQkFBZ0IsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ndWVzdC1saW5rcy9ndWVzdC1saW5rcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSA+IHRib2R5ID4gdHIgPiB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZjRmNDtcclxufVxyXG4udGFibGUgPiB0aGVhZCA+IHRyID4gdGgge1xyXG4gICAgZm9udC1zaXplOjE1cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxufVxyXG4ubGluZS1oZWlnaHQtNDB7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG4udmVyX2FsaWduX3RvcHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3AgIWltcG9ydGFudDtcclxufVxyXG4udGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcbi5ib3JkZXItcmlnaHQtbm9uZVxyXG57XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ubWluLWhlaWdodC00MDBcclxue1xyXG4gICBtaW4taGVpZ2h0OjQwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/guest-links/guest-links.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/guest-links/guest-links.component.ts ***!
  \************************************************************/
/*! exports provided: GuestLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestLinksComponent", function() { return GuestLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_guest_links_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/guest-links.service */ "./src/app/services/guest-links.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/enum */ "./src/app/enum/index.ts");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var src_app_configuration_success_msg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/configuration/success.msg */ "./src/app/configuration/success.msg.ts");
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







var GuestLinksComponent = /** @class */ (function () {
    function GuestLinksComponent(guestLinksService, dialogService, notificationService, guestLinkService) {
        this.guestLinksService = guestLinksService;
        this.dialogService = dialogService;
        this.notificationService = notificationService;
        this.guestLinkService = guestLinkService;
        this.linkName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.userTypeEnum = src_app_enum__WEBPACK_IMPORTED_MODULE_4__["UserType"];
        this.guestLinkStatus = src_app_enum__WEBPACK_IMPORTED_MODULE_4__["GuestLinkStatus"];
    }
    GuestLinksComponent.prototype.ngOnInit = function () {
        this.loadGuestLink();
    };
    /**
     * load Guest link
     */
    GuestLinksComponent.prototype.loadGuestLink = function () {
        var _this = this;
        this.guestLinksService.getGuestLinks().subscribe(function (res) {
            _this.guestLinks = res;
        });
    };
    GuestLinksComponent.prototype.createGuestLink = function () {
        if (this.linkName.invalid) {
            return false;
        }
        var currentDate = new Date();
        var guestLink = {};
        guestLink.linkName = this.linkName.value;
        guestLink.status = 1;
        guestLink.linkUrl = '';
        guestLink.expirySettings = {
            uploadLimit: 250,
            numberOfUses: 5,
            expirationDate: new Date(currentDate.setDate(currentDate.getDate() + 5)),
            creationDate: new Date()
        };
        guestLink.notifySettings = {
            onDownloaded: false,
            onExpired: false,
            byEmail: false,
            byText: false,
            creationDate: new Date()
        };
        guestLink.securitySettings = {
            email: false,
            company: false,
            name: false,
            phone: false,
            password: false,
            passwordProtectedPage: false,
            creationDate: new Date()
        };
        this.openGuestLink(guestLink, 'add');
    };
    GuestLinksComponent.prototype.editGuestLink = function (guestLink) {
        guestLink.notifySettings = {
            onDownloaded: false,
            onExpired: false,
            byEmail: false,
            byText: false,
            creationDate: new Date()
        };
        this.openGuestLink(guestLink, 'edit');
    };
    GuestLinksComponent.prototype.disableGuestLink = function (guestLink) {
        var _this = this;
        if (guestLink.status === src_app_enum__WEBPACK_IMPORTED_MODULE_4__["GuestLinkStatus"].active) {
            this.dialogService.confirmationDialog({
                title: 'Disable Guest link',
                message: 'Are you sure to want to disable link?',
                buttonSuccessText: 'Yes'
            }).subscribe(function (res) {
                if (res) {
                    _this.callApiToDisableLink(guestLink);
                }
            });
        }
        else {
            this.callApiToDisableLink(guestLink);
        }
    };
    GuestLinksComponent.prototype.callApiToDisableLink = function (guestLink) {
        var _this = this;
        var link = __assign({}, guestLink);
        link.status = link.status === src_app_enum__WEBPACK_IMPORTED_MODULE_4__["GuestLinkStatus"].disable ? src_app_enum__WEBPACK_IMPORTED_MODULE_4__["GuestLinkStatus"].active : src_app_enum__WEBPACK_IMPORTED_MODULE_4__["GuestLinkStatus"].disable;
        this.guestLinkService.generateGuestLinks(link).subscribe(function (result) {
            if (result) {
                _this.loadGuestLink();
                _this.notificationService.notify(src_app_configuration_success_msg__WEBPACK_IMPORTED_MODULE_6__["MESSAGES"].guestLinkNotification.replace('{0}', result.status === src_app_enum__WEBPACK_IMPORTED_MODULE_4__["GuestLinkStatus"].disable ? 'disabled' : 'Enabled'));
            }
        });
    };
    GuestLinksComponent.prototype.openGuestLink = function (guestLink, type) {
        var _this = this;
        this.dialogService.guestLinkDialog(guestLink).subscribe(function (res) {
            // if (res) {
            _this.loadGuestLink();
            _this.notificationService.notify(src_app_configuration_success_msg__WEBPACK_IMPORTED_MODULE_6__["MESSAGES"].guestLinkNotification.replace('{0}', type === 'add' ? 'added' : 'updated'));
            // }
        });
    };
    GuestLinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-guest-links',
            template: __webpack_require__(/*! ./guest-links.component.html */ "./src/app/pages/guest-links/guest-links.component.html"),
            styles: [__webpack_require__(/*! ./guest-links.component.scss */ "./src/app/pages/guest-links/guest-links.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_guest_links_service__WEBPACK_IMPORTED_MODULE_1__["GuestLinksService"],
            src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _services_guest_links_service__WEBPACK_IMPORTED_MODULE_1__["GuestLinksService"]])
    ], GuestLinksComponent);
    return GuestLinksComponent;
}());



/***/ }),

/***/ "./src/app/pages/guest-links/guest-links.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/guest-links/guest-links.module.ts ***!
  \*********************************************************/
/*! exports provided: GuestLinksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestLinksModule", function() { return GuestLinksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
/* harmony import */ var _guest_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guest-links.component */ "./src/app/pages/guest-links/guest-links.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GUEST_LINK_ROUTES = [
    {
        path: '', component: _guest_links_component__WEBPACK_IMPORTED_MODULE_4__["GuestLinksComponent"]
    }
];
var GuestLinksModule = /** @class */ (function () {
    function GuestLinksModule() {
    }
    GuestLinksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_guest_links_component__WEBPACK_IMPORTED_MODULE_4__["GuestLinksComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(GUEST_LINK_ROUTES),
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__["AmSharedModule"]
            ]
        })
    ], GuestLinksModule);
    return GuestLinksModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-guest-links-guest-links-module.js.map