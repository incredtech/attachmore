(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activity-logs-activity-logs-module"],{

/***/ "./src/app/pages/activity-logs/activity-logs.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/activity-logs/activity-logs.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-grey mt-90\">\r\n    <div flexLayout>\r\n      <div class=\"bg-gray\">\r\n        <div class=\"container\">\r\n          <div class=\"col-md-12 bg-gray pdd-left-30 min-height-700\">\r\n            <div class=\"mt-24 width-100 inline-block\">\r\n              <h2 class=\"mb-10 m-0 font-size-20 font-weight-semi-bold\">History - File Details - Acitivity Log</h2>\r\n              <mat-icon class=\"font-size-18 pdd-left-10 mat-icon material-icons ng-star-inserted\" role=\"img\" aria-hidden=\"true\">edit</mat-icon>\r\n              <span class=\"font-weight-light color-444 font-size-16 pdd-left-15 pdd-right-15\">|</span>\r\n              <span class=\"font-size-13 font-weight-normal\">Size 0 MB | 1 File</span>\r\n            </div>\r\n            <div>\r\n                <div class=\"card padding-20 mrg-top-20\">\r\n                    <div class=\"table-responsive\">\r\n                      <table class=\"table table-bordered mb-0 custm_log_table\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>Date / Time</th>\r\n                            <th>Action</th>\r\n                            <th>Details</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <td>8/17/18 , 11:55AM<br>\r\n                                Pacific Time</td>\r\n                            <td>Uploaded</td>\r\n                            <td>Files uploaded by &lt;User&gt; using &lt;Method&gt; -  Download Link was set to expire after x Download or on \r\n                                Expire Date.  File was set to archive.   No download requirements were set. \r\n                                </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>8/17/18</td>\r\n                            <td>Download</td>\r\n                            <td>Download by IP Address – 2255.11.1123.56</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>8/19/18</td>\r\n                            <td>Download</td>\r\n                            <td></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td></td>\r\n                            <td>Options Edited</td>\r\n                            <td></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td></td>\r\n                            <td>Expired</td>\r\n                            <td></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td></td>\r\n                            <td>Purged</td>\r\n                            <td></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n            </div> \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/pages/activity-logs/activity-logs.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/activity-logs/activity-logs.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".font-weight-500 {\n  font-weight: 500; }\n\n.max-width-100 {\n  max-width: 100%; }\n\n.min-height-600 {\n  min-height: 600px; }\n\n.min-height-700 {\n  min-height: 700px; }\n\n.color-444 {\n  color: #444444 !important; }\n\n.color-666 {\n  color: #666666 !important; }\n\n.custm_log_table.table {\n  border-color: #fff;\n  background: #f9f9f9; }\n\n.custm_log_table.table thead {\n  background: #e1e1e1; }\n\n.custm_log_table.table > thead > tr > th,\n.table.custm_log_table > tbody > tr > td {\n  padding: 15px;\n  border-color: #fff;\n  min-width: 175px;\n  font-size: 16px;\n  color: #444444;\n  font-weight: 600; }\n\n.table.custm_log_table > tbody > tr > td {\n  font-size: 14px;\n  color: #777777;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWN0aXZpdHktbG9ncy9DOlxcV09SS1NQQUNFXFxET1QtTkVUXFxhdHRhY2htb3JlXFxBdHRhY2hNb3JlLldlYi9zcmNcXGFwcFxccGFnZXNcXGFjdGl2aXR5LWxvZ3NcXGFjdGl2aXR5LWxvZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLDBCQUF5QixFQUM1Qjs7QUFDRDtFQUNJLG1CQUFrQjtFQUNsQixvQkFBbUIsRUFDdEI7O0FBQ0Q7RUFDSSxvQkFBbUIsRUFDdEI7O0FBRUQ7O0VBRUksY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixlQUFjO0VBQ2QsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0VBQ2QsaUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWN0aXZpdHktbG9ncy9hY3Rpdml0eS1sb2dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtd2VpZ2h0LTUwMHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLm1heC13aWR0aC0xMDB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1pbi1oZWlnaHQtNjAwe1xyXG4gICAgbWluLWhlaWdodDogNjAwcHg7XHJcbn1cclxuLm1pbi1oZWlnaHQtNzAwe1xyXG4gICAgbWluLWhlaWdodDogNzAwcHg7XHJcbn1cclxuLmNvbG9yLTQ0NHtcclxuICAgIGNvbG9yOiAjNDQ0NDQ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yLTY2NntcclxuICAgIGNvbG9yOiAjNjY2NjY2ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmN1c3RtX2xvZ190YWJsZS50YWJsZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG59XHJcbi5jdXN0bV9sb2dfdGFibGUudGFibGUgdGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxO1xyXG59XHJcblxyXG4uY3VzdG1fbG9nX3RhYmxlLnRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLFxyXG4udGFibGUuY3VzdG1fbG9nX3RhYmxlID4gdGJvZHkgPiB0ciA+IHRke1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICAgIG1pbi13aWR0aDogMTc1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0gXHJcbi50YWJsZS5jdXN0bV9sb2dfdGFibGUgPiB0Ym9keSA+IHRyID4gdGR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/activity-logs/activity-logs.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/activity-logs/activity-logs.component.ts ***!
  \****************************************************************/
/*! exports provided: ActivityLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogsComponent", function() { return ActivityLogsComponent; });
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

var ActivityLogsComponent = /** @class */ (function () {
    function ActivityLogsComponent() {
    }
    ActivityLogsComponent.prototype.ngOnInit = function () {
    };
    ActivityLogsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-activity-logs',
            template: __webpack_require__(/*! ./activity-logs.component.html */ "./src/app/pages/activity-logs/activity-logs.component.html"),
            styles: [__webpack_require__(/*! ./activity-logs.component.scss */ "./src/app/pages/activity-logs/activity-logs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivityLogsComponent);
    return ActivityLogsComponent;
}());



/***/ }),

/***/ "./src/app/pages/activity-logs/activity-logs.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/activity-logs/activity-logs.module.ts ***!
  \*************************************************************/
/*! exports provided: ActivityLogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityLogsModule", function() { return ActivityLogsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
/* harmony import */ var _activity_logs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-logs.component */ "./src/app/pages/activity-logs/activity-logs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ACTIVITY_LOGS_ROUTES = [
    {
        path: '', component: _activity_logs_component__WEBPACK_IMPORTED_MODULE_4__["ActivityLogsComponent"]
    }
];
var ActivityLogsModule = /** @class */ (function () {
    function ActivityLogsModule() {
    }
    ActivityLogsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_activity_logs_component__WEBPACK_IMPORTED_MODULE_4__["ActivityLogsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ACTIVITY_LOGS_ROUTES),
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__["AmSharedModule"]
            ],
        })
    ], ActivityLogsModule);
    return ActivityLogsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-activity-logs-activity-logs-module.js.map