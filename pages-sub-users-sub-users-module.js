(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-users-sub-users-module"],{

/***/ "./src/app/pages/sub-users/sub-users.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/sub-users/sub-users.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-gray mt-90\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12 pdd-top-20 \">\r\n          <h3 class=\"display-inline mrg-top-3\">Sub Users</h3>\r\n          <div class=\"pull-right display-inline\">\r\n           <span class=\"font-size-14\">Your Attachmore account supports upto 5 users. Need More? </span>\r\n           <a href=\"#\" class=\"font-size-14 text-behance pdd-left-10 pdd-right-10\">View Plans</a>\r\n           <button mat-flat-button color=\"primary\" class=\"border-radius-0 line-height-40 ver_align_top white-500-fg mrg-left-10 display-inline font-size-12\" (click)=\"createGuestLink()\">\r\n           Add Sub User</button>\r\n          </div>\r\n        </div>\r\n            <!-- <p class=\"col-md-12 pdd-top-10\">\r\n                You can set up sub users for your Attachmore account. Each sub user can transfer data through your account by installing the Attachmore software or by using Web Send from Attachmore's website.\r\n              </p> -->\r\n      </div>\r\n    </div>\r\n    <div flexLayout>\r\n      <div class=\"bg-gray custm_dash\">\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card padding-20 mrg-top-20 min-height-400\">\r\n                <div class=\"table-responsive\">\r\n                  <table class=\"table table-hover\">\r\n                    <thead class=\"grey-300-bg\">\r\n                      <tr>\r\n                        <th>Email</th>\r\n                        <th>Name</th>\r\n                        <th>Create date</th>\r\n                        <th>Status</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>admin@atmo.re</td>\r\n                            <td class=\"text-capitalize\">Lary David</td>\r\n                            <td>Apr 8, 2019</td>\r\n                            <td class=\"text-capitalize\">Pending</td>\r\n                          </tr>                     \r\n                           <tr>\r\n                              <td>admin@atmo.re</td>\r\n                              <td class=\"text-capitalize\">Mark Dev</td>\r\n                              <td>Apr 8, 2019</td>\r\n                              <td class=\"text-capitalize\">Active</td>\r\n                            </tr>                     \r\n                             <tr>\r\n                                <td>admin@atmo.re</td>\r\n                                <td class=\"text-capitalize\">Lary David</td>\r\n                                <td>Apr 8, 2019</td>\r\n                                <td class=\"text-capitalize\">Pending</td>\r\n                              </tr>\r\n                      <tr *ngIf=\"guestLinks && guestLinks.length\">\r\n                        <td colspan=\"6\" class=\"text-center pdd-top-120 pdd-btm-130 font-size-24 font-weight-bold\">No Guest Link Found !!</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  \r\n"

/***/ }),

/***/ "./src/app/pages/sub-users/sub-users.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/sub-users/sub-users.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table > tbody > tr > td {\n  padding: 15px;\n  font-size: 14px;\n  background: #f6f4f4; }\n\n.table > thead > tr > th {\n  font-size: 15px;\n  padding: 15px;\n  font-weight: 600;\n  border-right: 1px solid #fff; }\n\n.table > tbody > tr > td {\n  border-top: 1px solid #fff;\n  border-right: 1px solid #fff; }\n\n.border-right-none {\n  border-right: none !important; }\n\n.min-height-400 {\n  min-height: 400px; }\n\n.mrg-top-3 {\n  margin-top: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ViLXVzZXJzL0M6XFxXT1JLU1BBQ0VcXERPVC1ORVRcXGF0dGFjaG1vcmVcXEF0dGFjaE1vcmUuV2ViL3NyY1xcYXBwXFxwYWdlc1xcc3ViLXVzZXJzXFxzdWItdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxnQkFBYztFQUNkLGNBQWE7RUFDYixpQkFBZTtFQUNmLDZCQUE0QixFQUMvQjs7QUFDRDtFQUNJLDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDL0I7O0FBQ0Q7RUFFSSw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFFRyxrQkFBZ0IsRUFDbEI7O0FBQ0Q7RUFFSSxnQkFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Yi11c2Vycy9zdWItdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY0ZjQ7XHJcbn1cclxuLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoIHtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbn1cclxuLnRhYmxlID4gdGJvZHkgPiB0ciA+IHRkIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcclxufVxyXG4uYm9yZGVyLXJpZ2h0LW5vbmVcclxue1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1pbi1oZWlnaHQtNDAwXHJcbntcclxuICAgbWluLWhlaWdodDo0MDBweDtcclxufVxyXG4ubXJnLXRvcC0zXHJcbntcclxuICAgIG1hcmdpbi10b3A6NnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/sub-users/sub-users.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/sub-users/sub-users.component.ts ***!
  \********************************************************/
/*! exports provided: SubUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubUsersComponent", function() { return SubUsersComponent; });
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

var SubUsersComponent = /** @class */ (function () {
    function SubUsersComponent() {
    }
    SubUsersComponent.prototype.ngOnInit = function () {
    };
    SubUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-sub-users',
            template: __webpack_require__(/*! ./sub-users.component.html */ "./src/app/pages/sub-users/sub-users.component.html"),
            styles: [__webpack_require__(/*! ./sub-users.component.scss */ "./src/app/pages/sub-users/sub-users.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubUsersComponent);
    return SubUsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/sub-users/sub-users.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/sub-users/sub-users.module.ts ***!
  \*****************************************************/
/*! exports provided: SubUsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubUsersModule", function() { return SubUsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
/* harmony import */ var _sub_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-users.component */ "./src/app/pages/sub-users/sub-users.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SUB_USERS_ROUTES = [
    {
        path: '', component: _sub_users_component__WEBPACK_IMPORTED_MODULE_4__["SubUsersComponent"]
    }
];
var SubUsersModule = /** @class */ (function () {
    function SubUsersModule() {
    }
    SubUsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sub_users_component__WEBPACK_IMPORTED_MODULE_4__["SubUsersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(SUB_USERS_ROUTES),
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__["AmSharedModule"]
            ]
        })
    ], SubUsersModule);
    return SubUsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sub-users-sub-users-module.js.map