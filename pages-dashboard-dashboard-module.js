(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-grey mt-120\">\r\n  <div flexLayout>\r\n    <div class=\"bg-gray custm_dash\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-3 white-500-bg pr-0\">\r\n          <div class=\"border bottom\">\r\n            <div class=\"user_profile pdd-btm-30 pdd-top-30 width-100 inline-block\">\r\n              <div class=\"user_img\">\r\n                <img src=\"assets/images/main/admin.jpg\" alt=\"User image\" >\r\n              </div>\r\n              <div class=\"user_detail\">\r\n                <h5 class=\"font-weight-500 m-0 mt-10 color-444\">Hi {{authService.userInfo?.user.firstName}}</h5>\r\n                <p class=\"mb-0 pdd-top-5\">Administrator</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"border bottom\">\r\n            <p class=\"pdd-top-20 pdd-botttom-20 color-444 font-weight-500\"><img src=\"assets/images/main/bell.png\" alt=\"image\"> &nbsp; Status: <span class=\"primary-500-fg\">Active</span></p>\r\n          </div>\r\n          <div class=\"border bottom\">\r\n            <p class=\"pdd-top-20 pdd-botttom-20 color-444 font-weight-500\"><img src=\"assets/images/main/users.png\" alt=\"image\"> &nbsp; Sub Users: <span class=\"color-666\">1 of 5</span></p>\r\n          </div>\r\n          <div class=\"border bottom\">\r\n            <p class=\"pdd-top-20 pdd-botttom-20 color-444 font-weight-500\"><img src=\"assets/images/main/billing.png\" alt=\"image\"> &nbsp; Next Billing:  <span class=\"color-666\">01/01/18</span></p>\r\n          </div>\r\n          <div class=\"border bottom\">\r\n            <p class=\"pdd-top-20 pdd-botttom-20 color-444 font-weight-500\"><img src=\"assets/images/main/card.png\" alt=\"image\"> &nbsp; Card on File:  <span class=\"color-666\">7575</span></p>\r\n          </div>\r\n          <div class=\"border bottom\">\r\n            <p class=\"pdd-top-20 pdd-botttom-20 color-444 font-weight-500\"><img src=\"assets/images/main/calender.png\" alt=\"image\"> &nbsp; Expires:  <span class=\"color-666\">01/18</span></p>\r\n          </div>\r\n          <div class=\"\">\r\n            <p class=\"pdd-top-20 pdd-botttom-20\">\r\n              <button class=\"border-radius-0 main-font-family font-weight-normal mat-flat-button mat-primary\" color=\"primary\" mat-flat-button=\"\" ng-reflect-color=\"primary\"><span class=\"mat-button-wrapper\">Update</span><div class=\"mat-button-ripple mat-ripple\" matripple=\"\" ng-reflect-centered=\"false\"></div><div class=\"mat-button-focus-overlay\"></div></button>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9 bg-gray pdd-left-30\">\r\n          <h2 class=\"mt-24 mb-24 font-size-20 font-weight-semi-bold\">Dashboard</h2>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12 mb-30\">\r\n              <mat-card>\r\n                <div class=\"pdd-btm-5 pdd-left-15 pdd-right-100 pdd-top-5\">\r\n                  <h4 class=\"font-weight-semi-bold\">Used {{dataUsage.usage}}GB of {{ dataUsage.totalData }}GB Storage Limit</h4>\r\n                  <p class=\"font-size-15 font-weight-500\">The monthly upload limit refreshes to 10240.00MB in 11 days.<br>\r\n                    You can transfer 10240.00MB over the next 11 days.</p>\r\n                </div>\r\n                <div class=\"dash_img\">\r\n                  <mat-progress-spinner class=\"cstm_progress\" color=\"primary\" mode=\"determinate\" value=\"{{dataUsage.usagePercentage}}\">\r\n                  </mat-progress-spinner>\r\n                  <span class=\"data_used\">\r\n                    {{dataUsage.usagePercentage}}%\r\n                  </span>\r\n                </div>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mb-30\">\r\n            <div class=\"col-md-4\" (click)=\"navigateToFileHistory()\" style=\"cursor: pointer\">\r\n              <mat-card>\r\n                <div class=\"p-5\">\r\n                  <h2 class=\"font-weight-semi-bold pdd-btm-10 m-0 primary-500-fg font-size-35\">{{dashboard?.uploads}}</h2>\r\n                  <h5 class=\"font-size-16 text-uppercase font-weight-500\">Recent Uploads</h5>\r\n                  <p>Last 30 Days</p>\r\n                </div>\r\n                <div class=\"dash_img\"><img src=\"assets/images/main/upload.png\" alt=\"image\" /></div>\r\n              </mat-card>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <mat-card>\r\n                <div class=\"p-5\">\r\n                  <h2 class=\"font-weight-semi-bold pdd-btm-10 m-0 primary-500-fg font-size-35\">{{dashboard?.downloads}}</h2>\r\n                  <h5 class=\"font-size-16 text-uppercase font-weight-500\">Recent Downloads</h5>\r\n                  <p>Last 30 Days</p>\r\n                </div>\r\n                <div class=\"dash_img\"><img src=\"assets/images/main/download.png\" alt=\"image\" /></div>\r\n              </mat-card>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <mat-card>\r\n                <div class=\"p-5\">\r\n                  <h2 class=\"font-weight-semi-bold pdd-btm-10 m-0 primary-500-fg font-size-35\">{{dashboard?.filesreceived}}</h2>\r\n                  <h5 class=\"font-size-16 text-uppercase font-weight-500\">Files Received</h5>\r\n                  <p>Last 30 Days</p>\r\n                </div>\r\n                <div class=\"dash_img\"><img src=\"assets/images/main/mail_rec.png\" alt=\"image\" /></div>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mb-30\">\r\n            <div class=\"col-md-4\">\r\n              <mat-card>\r\n                <div class=\"p-5\">\r\n                  <h2 class=\"font-weight-semi-bold pdd-btm-10 m-0 primary-500-fg font-size-35\">{{dashboard?.expiringlinks}}</h2>\r\n                  <h5 class=\"font-size-16 text-uppercase font-weight-500\">Expiring Links</h5>\r\n                  <p>In the next 30 Days</p>\r\n                </div>\r\n                <div class=\"dash_img\"><img src=\"assets/images/main/link.png\" alt=\"image\" /></div>\r\n              </mat-card>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <mat-card>\r\n                <div class=\"p-5\">\r\n                  <h2 class=\"font-weight-semi-bold pdd-btm-10 m-0 primary-500-fg font-size-35\">{{dashboard?.filespurging}}</h2>\r\n                  <h5 class=\"font-size-16 text-uppercase font-weight-500\">Files Purging</h5>\r\n                  <p>In the next 30 days</p>\r\n                </div>\r\n                <div class=\"dash_img\"><img src=\"assets/images/main/file.png\" alt=\"image\" /></div>\r\n              </mat-card>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <mat-card>\r\n                <div class=\"p-5\">\r\n                  <h2 class=\"font-weight-semi-bold pdd-btm-10 m-0 primary-500-fg font-size-35\">${{dashboard?.purchasedfiles}}</h2>\r\n                  <h5 class=\"font-size-16 text-uppercase font-weight-500\">Purchased Files</h5>\r\n                  <p>Last 90 Days</p>\r\n                </div>\r\n                <div class=\"dash_img\"><img src=\"assets/images/main/cart.png\" alt=\"image\" /></div>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading-1:before {\n  background-color: transparent; }\n\n.dash_img {\n  position: absolute;\n  right: 20px;\n  top: 20px; }\n\n.font-weight-500 {\n  font-weight: 500 !important; }\n\n.user_img {\n  float: left;\n  width: 30%; }\n\n.user_img img {\n    max-width: 100%; }\n\n.user_detail {\n  float: left;\n  width: 70%; }\n\n.color-444 {\n  color: #444; }\n\n.color-666 {\n  color: #666; }\n\n.custm_dash {\n  position: relative; }\n\n.custm_dash:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 45%;\n  height: 100%;\n  background: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxXT1JLU1BBQ0VcXERPVC1ORVRcXGF0dGFjaG1vcmVcXEF0dGFjaE1vcmUuV2ViL3NyY1xcYXBwXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLFVBQVMsRUFDWjs7QUFFRDtFQUNJLDRCQUEyQixFQUM5Qjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxXQUFVLEVBS2I7O0FBUEQ7SUFLUSxnQkFBZSxFQUNsQjs7QUFFTDtFQUNJLFlBQVc7RUFDWCxXQUFVLEVBQ2I7O0FBQ0Q7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLE9BQUs7RUFDTCxRQUFPO0VBQ1AsV0FBVTtFQUNWLGFBQVk7RUFDWixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmctMTpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmRhc2hfaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZm9udC13ZWlnaHQtNTAwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG59XHJcbi51c2VyX2ltZ3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuXHJcbiAgICBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbi51c2VyX2RldGFpbHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4uY29sb3ItNDQ0e1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbn1cclxuLmNvbG9yLTY2NntcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59XHJcbi5jdXN0bV9kYXNoe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jdXN0bV9kYXNoOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../enum */ "./src/app/enum/index.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService, authService, route) {
        this.dashboardService = dashboardService;
        this.authService = authService;
        this.route = route;
        this.userDetail = {};
        this.dataUsage = {};
        this.userStatus = _enum__WEBPACK_IMPORTED_MODULE_3__["UserStatus"];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getStats().subscribe(function (res) {
            _this.dashboard = res;
        });
        this.dashboardService.getUserDetails().subscribe(function (res) {
            _this.userDetail = res;
        });
        this.dashboardService.getDataUsage().subscribe(function (res) {
            _this.dataUsage = res;
            _this.dataUsage.usagePercentage = Math.round((_this.dataUsage.usage / _this.dataUsage.totalData) * 100);
        });
    };
    /**
     * Navigate To File History
     */
    DashboardComponent.prototype.navigateToFileHistory = function () {
        this.route.navigate(['/filesHistory']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DASHBOARD_ROUTES = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(DASHBOARD_ROUTES),
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_4__["AmSharedModule"]
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map