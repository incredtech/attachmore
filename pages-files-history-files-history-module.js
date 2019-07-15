(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-files-history-files-history-module"],{

/***/ "./src/app/pages/files-history/files-history.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/files-history/files-history.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-grey mt-120\">\r\n  <div flexLayout>\r\n    <div class=\"bg-gray custm_dash\">\r\n      <div class=\"container\">\r\n        <div class=\"col-md-3 white-500-bg pr-0\">\r\n          <div class=\"pdd-btm-20 pdd-top-25 border bottom\">\r\n            <h5 class=\"font-weight-semi-bold ls-0 font-size-15 \"><img src=\"assets/images/main/billing.png\" alt=\"image\">\r\n              &nbsp; All Files</h5>\r\n            <ul class=\"mrg-left-35\">\r\n              <li>\r\n                <mat-checkbox class=\"custm_font_size\" (change)=\"filterByFileStatus(active.checked, fileStatus.Active)\"\r\n                  #active>Active Files</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"custm_font_size\" (change)=\"filterByFileStatus(expired.checked, fileStatus.Expired)\"\r\n                  #expired>Expired Files</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"custm_font_size\" (change)=\"filterByFileStatus(purged.checked, fileStatus.Purged)\"\r\n                  #purged>Purged Files</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"custm_font_size\"\r\n                  (change)=\"filterByFileStatus(archived.checked, fileStatus.Archived)\" #archived>Archived Files\r\n                </mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"custm_font_size\"\r\n                  (change)=\"filterByFileStatus(purchased.checked, fileStatus.Purchased)\" #purchased>Purchased Files\r\n                </mat-checkbox>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"pdd-btm-20 pdd-top-20 border bottom\">\r\n            <h5 class=\"font-weight-semi-bold ls-0 font-size-15\"><img src=\"assets/images/main/calender.png\" alt=\"image\">\r\n              &nbsp; Upload Date Range</h5>\r\n            <ul class=\"mrg-left-35\">\r\n              <li>\r\n                <!-- <mat-checkbox class=\"custm_font_size\">8/17/18</mat-checkbox> -->\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"startDatePicker\" [max]=\"maxDate\" placeholder=\"Start date\"\r\n                    [formControl]=\"filesFilterModel.fileType.startDate\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #startDatePicker></mat-datepicker>\r\n                </mat-form-field>\r\n              </li>\r\n              <li>\r\n                <!-- <mat-checkbox class=\"custm_font_size\">8/17/17</mat-checkbox> -->\r\n                <mat-form-field>\r\n                  <input matInput [matDatepicker]=\"endDatePicker\" [max]=\"maxDate\" placeholder=\"End date\"\r\n                    [formControl]=\"filesFilterModel.fileType.endDate\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #endDatePicker></mat-datepicker>\r\n                </mat-form-field>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"pdd-btm-20 pdd-top-20 border bottom\">\r\n            <h5 class=\"font-weight-semi-bold ls-0 font-size-15\"><img src=\"assets/images/main/file_type.png\" alt=\"image\">\r\n              &nbsp; File Type</h5>\r\n            <ul class=\"mrg-left-35\">\r\n              <li>\r\n                <mat-checkbox class=\"custm_font_size\">All Users</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"custm_font_size\">Method</mat-checkbox>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"\">\r\n            <p class=\"pdd-top-20 pdd-botttom-20\">\r\n              <button class=\"border-radius-0 main-font-family font-weight-normal mat-flat-button mat-primary\"\r\n                color=\"primary\" mat-flat-button=\"\" ng-reflect-color=\"primary\">\r\n                <span class=\"mat-button-wrapper\" (click)=\"applyFilter()\">Apply</span>\r\n                <div class=\"mat-button-ripple mat-ripple\" matripple=\"\" ng-reflect-centered=\"false\"></div>\r\n                <div class=\"mat-button-focus-overlay\"></div>\r\n              </button>\r\n              <button\r\n                class=\"border-radius-0 mrg-left-15 main-font-family font-weight-normal mat-flat-button mat-accent white-500-fg\"\r\n                color=\"accent\" mat-flat-button=\"\" ng-reflect-color=\"accent\" (click)=\"clearFilter()\">\r\n                <span class=\"mat-button-wrapper\">Clear</span>\r\n                <div class=\"mat-button-ripple mat-ripple\" matripple=\"\" ng-reflect-centered=\"false\"></div>\r\n                <div class=\"mat-button-focus-overlay\"></div>\r\n              </button>\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9 bg-gray pdd-left-30 min-height-700\">\r\n          <div class=\"mt-24 mb-24 width-100 inline-block\">\r\n            <h2 class=\"m-0 mrg-top-15 font-size-20 pull-left font-weight-semi-bold\">History</h2>\r\n            <div class=\"pull-right\" style=\"margin-top:-5px;\">\r\n              <a href=\"javascript:void(0)\" (click)=\"viewFileHistory('THUMBNAIL')\" class=\"custm_thumb_view\"\r\n                [class.active]=\"isThumbnailView\">fdjkg</a>\r\n              <a href=\"javascript:void(0)\" (click)=\"viewFileHistory('LIST')\" class=\"custm_detail_view\"\r\n                [class.active]=\"!isThumbnailView\">fdgs</a>\r\n            </div>\r\n            <div class=\"pull-right\">\r\n              <div>\r\n                <span class=\"sort_by font-size-15 mrg-right-15 font-weight-500\">Sort by:</span>\r\n                <mat-form-field class=\"custm\">\r\n                  <mat-select placeholder=\"Upload Date (Newest)\" #fileStages\r\n                    (selectionChange)=\"whenSortByFileStagesChanges(fileStages.value)\">\r\n                    <mat-option [value]=\"fileStage.NewestUpload\">Upload Date (Newest)</mat-option>\r\n                    <mat-option [value]=\"fileStage.OldestUpload\">Upload Date (Oldest)</mat-option>\r\n                    <mat-option [value]=\"fileStage.NewestExpired\">Expire Date (Newest)</mat-option>\r\n                    <mat-option [value]=\"fileStage.OldestExpired\">Expire Date (Oldest)</mat-option>\r\n                    <mat-option [value]=\"fileStage.NewestPurged\">Purge Date (Newest)</mat-option>\r\n                    <mat-option [value]=\"fileStage.OldestPurged\">Purge Date (Oldest)</mat-option>\r\n                    <mat-option [value]=\"fileStage.MostDownload\">Downloads (Most)</mat-option>\r\n                    <mat-option [value]=\"fileStage.LeastDownlaod\">Download (Least)</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-12 mb-30\" *ngIf=\"!filteredFilesHistory.length\">\r\n            No Record Found\r\n          </div>\r\n          <ng-container *ngIf=\"filteredFilesHistory.length\">\r\n            <am-thumbnail-view *ngIf=\"isThumbnailView\" [files]=\"filteredFilesHistory\"></am-thumbnail-view>\r\n            <am-list-view *ngIf=\"!isThumbnailView\" [files]=\"filteredFilesHistory\"></am-list-view>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/files-history/files-history.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/files-history/files-history.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading-1:before {\n  background-color: transparent; }\n\n.font-weight-500 {\n  font-weight: 500; }\n\n.min-height-600 {\n  min-height: 600px; }\n\n.min-height-700 {\n  min-height: 700px; }\n\n.custm_dash {\n  position: relative; }\n\n.custm_dash:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 45%;\n  height: 100%;\n  background: #fff; }\n\n.mat-checkbox-frame {\n  border: 1px solid #ccc !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsZXMtaGlzdG9yeS9DOlxcV09SS1NQQUNFXFxET1QtTkVUXFxhdHRhY2htb3JlXFxBdHRhY2hNb3JlLldlYi9zcmNcXGFwcFxccGFnZXNcXGZpbGVzLWhpc3RvcnlcXGZpbGVzLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxtQkFBa0IsRUFDckI7O0FBQ0Q7RUFDSSxZQUFXO0VBQ1gsbUJBQWtCO0VBQ2xCLE9BQUs7RUFDTCxRQUFPO0VBQ1AsV0FBVTtFQUNWLGFBQVk7RUFDWixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxrQ0FBaUMsRUFDcEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWxlcy1oaXN0b3J5L2ZpbGVzLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZy0xOmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4uZm9udC13ZWlnaHQtNTAwe1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubWluLWhlaWdodC02MDB7XHJcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcclxufVxyXG4ubWluLWhlaWdodC03MDB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxufVxyXG4uY3VzdG1fZGFzaHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY3VzdG1fZGFzaDpiZWZvcmV7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtY2hlY2tib3gtZnJhbWV7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/files-history/files-history.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/files-history/files-history.component.ts ***!
  \****************************************************************/
/*! exports provided: FilesHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesHistoryComponent", function() { return FilesHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dashboard.service */ "./src/app/services/dashboard.service.ts");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enum */ "./src/app/enum/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilesHistoryComponent = /** @class */ (function () {
    function FilesHistoryComponent(dashboardService, activatedRoute) {
        this.dashboardService = dashboardService;
        this.activatedRoute = activatedRoute;
        this.maxDate = new Date();
        this.isThumbnailView = true;
        this.fileStage = _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"];
        this.fileStatus = _enum__WEBPACK_IMPORTED_MODULE_2__["FileStatus"];
    }
    FilesHistoryComponent.prototype.ngOnInit = function () {
        this.resetFilter();
        this.filteredFilesHistory = this.filesHistory = this.activatedRoute.snapshot.data.attachmentHistory;
    };
    FilesHistoryComponent.prototype.filterByFileStatus = function (value, fileStatus) {
        if (value) {
            if (!this.filesFilterModel.fileStatus.includes(fileStatus)) {
                this.filesFilterModel.fileStatus.push(fileStatus);
            }
        }
        else {
            if (this.filesFilterModel.fileStatus.includes(fileStatus)) {
                var INDEX = this.filesFilterModel.fileStatus.findIndex(function (f) { return f === fileStatus; });
                this.filesFilterModel.fileStatus.splice(INDEX, 1);
            }
        }
    };
    FilesHistoryComponent.prototype.clearFilter = function () {
        this.resetFilter();
    };
    FilesHistoryComponent.prototype.resetFilter = function () {
        this.filesFilterModel = {
            fileStatus: [],
            fileType: {
                startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
                endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
            },
            uploadRange: []
        };
    };
    FilesHistoryComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filteredFilesHistory = this.filesHistory;
        if (this.filesFilterModel.fileStatus.length) {
            this.filteredFilesHistory = this.filteredFilesHistory.filter(function (f) { return _this.filesFilterModel.fileStatus.includes(f.status); });
        }
        if (this.filesFilterModel.fileType.startDate.value && this.filesFilterModel.fileType.endDate.value) {
            this.filteredFilesHistory = this.filteredFilesHistory
                .filter(function (f) { return new Date(f.attachmentCreationDate) <= _this.filesFilterModel.fileType.endDate.value &&
                new Date(f.attachmentCreationDate) >= _this.filesFilterModel.fileType.startDate.value; });
        }
        if (this.filesFilterModel.fileType.startDate.value) {
            this.filteredFilesHistory = this.filteredFilesHistory
                .filter(function (f) { return new Date(f.attachmentCreationDate) >= _this.filesFilterModel.fileType.startDate.value; });
        }
        if (this.filesFilterModel.fileType.endDate.value) {
            this.filteredFilesHistory = this.filteredFilesHistory
                .filter(function (f) { return new Date(f.attachmentCreationDate) <= _this.filesFilterModel.fileType.endDate.value; });
        }
    };
    FilesHistoryComponent.prototype.viewFileHistory = function (type) {
        if (type === 'THUMBNAIL') {
            this.isThumbnailView = true;
        }
        else if (type === 'LIST') {
            this.isThumbnailView = false;
        }
    };
    FilesHistoryComponent.prototype.whenSortByFileStagesChanges = function (value) {
        var _this = this;
        switch (value) {
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"].NewestUpload:
                this.filteredFilesHistory = this.filteredFilesHistory
                    .sort(function (a, b) { return _this.compareDesc(new Date(a.attachmentCreationDate), new Date(b.attachmentCreationDate)); });
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"].OldestUpload:
                this.filteredFilesHistory = this.filteredFilesHistory
                    .sort(function (a, b) { return _this.compareAsc(new Date(a.attachmentCreationDate), new Date(b.attachmentCreationDate)); });
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"].NewestExpired:
                this.filteredFilesHistory = this.filteredFilesHistory
                    .sort(function (a, b) { return _this.compareDesc(new Date(a.attachmentExpiriedOn), new Date(b.attachmentExpiriedOn)); });
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"].OldestExpired:
                this.filteredFilesHistory = this.filteredFilesHistory
                    .sort(function (a, b) { return _this.compareAsc(new Date(a.attachmentExpiriedOn), new Date(b.attachmentExpiriedOn)); });
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"].NewestPurged:
                this.filteredFilesHistory = this.filteredFilesHistory
                    .sort(function (a, b) { return _this.compareDesc(new Date(a.attachmentPurgedDate), new Date(b.attachmentPurgedDate)); });
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"].OldestPurged:
                this.filteredFilesHistory = this.filteredFilesHistory
                    .sort(function (a, b) { return _this.compareAsc(new Date(a.attachmentPurgedDate), new Date(b.attachmentPurgedDate)); });
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"].MostDownload:
                this.filteredFilesHistory = this.filteredFilesHistory
                    .sort(function (a, b) { return _this.compareDesc(a.totalDownload, b.totalDownload); });
                break;
            case _enum__WEBPACK_IMPORTED_MODULE_2__["FileStage"].LeastDownlaod:
                this.filteredFilesHistory = this.filteredFilesHistory
                    .sort(function (a, b) { return _this.compareAsc(a.totalDownload, b.totalDownload); });
                break;
        }
    };
    FilesHistoryComponent.prototype.compareAsc = function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };
    FilesHistoryComponent.prototype.compareDesc = function (a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    };
    FilesHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-files-history',
            template: __webpack_require__(/*! ./files-history.component.html */ "./src/app/pages/files-history/files-history.component.html"),
            styles: [__webpack_require__(/*! ./files-history.component.scss */ "./src/app/pages/files-history/files-history.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FilesHistoryComponent);
    return FilesHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/files-history/files-history.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/files-history/files-history.module.ts ***!
  \*************************************************************/
/*! exports provided: FilesHistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesHistoryModule", function() { return FilesHistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/am-shared.module */ "./src/app/shared/am-shared.module.ts");
/* harmony import */ var _files_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files-history.component */ "./src/app/pages/files-history/files-history.component.ts");
/* harmony import */ var _thumbnail_view_thumbnail_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thumbnail-view/thumbnail-view.component */ "./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.ts");
/* harmony import */ var _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-view/list-view.component */ "./src/app/pages/files-history/list-view/list-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FILES_HISTORY_ROUTES = [
    {
        path: '', component: _files_history_component__WEBPACK_IMPORTED_MODULE_4__["FilesHistoryComponent"]
    }
];
var FilesHistoryModule = /** @class */ (function () {
    function FilesHistoryModule() {
    }
    FilesHistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_files_history_component__WEBPACK_IMPORTED_MODULE_4__["FilesHistoryComponent"], _thumbnail_view_thumbnail_view_component__WEBPACK_IMPORTED_MODULE_5__["ThumbnailViewComponent"], _list_view_list_view_component__WEBPACK_IMPORTED_MODULE_6__["ListViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(FILES_HISTORY_ROUTES),
                _shared_am_shared_module__WEBPACK_IMPORTED_MODULE_3__["AmSharedModule"]
            ],
        })
    ], FilesHistoryModule);
    return FilesHistoryModule;
}());



/***/ }),

/***/ "./src/app/pages/files-history/list-view/list-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/files-history/list-view/list-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-30\">\r\n  <mat-card class=\"inline-block\">\r\n    <div class=\"width-100 inline-block border bottom mb-20 pdd-btm-20\" *ngFor=\"let fileHistory of files\"\r\n      (click)=\"navigateToDetails(fileHistory)\" style=\"cursor: pointer;\">\r\n      <div class=\"p-0 relative\">\r\n        <span class=\"attachment_status active\">Active</span>\r\n        <img class=\"pull-left mrg-right-15 border mrg-top-5\" [src]=\"icons[fileHistory.extension]\" alt=\"thumbnail\">\r\n        <h5 class=\"font-weight-semi-bold font-size-15 ls-0 text-uppercase m-0 pdd-top-20\"\r\n          title=\"{{fileHistory.attachmentName}}\">{{fileHistory.attachmentName}}</h5>\r\n        <p class=\"m-0 pdd-top-10 font-size-14\">Uploaded {{fileHistory.attachmentCreationDate | prepareDate:\r\n            '-'}}</p>\r\n        <p class=\"m-0 pdd-top-5 font-size-14\">{{fileHistory.attachmentSize}}MB</p>\r\n        <!-- <p class=\"m-0 pdd-top-5 font-size-13\">{{fileHistory.attachmentSize}}MB</p> -->\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/files-history/list-view/list-view.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/files-history/list-view/list-view.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attachment_status {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 5px;\n  font-size: 10px;\n  border: 1px solid;\n  padding: 1px 4px 0;\n  border-radius: 2px; }\n\n.active.attachment_status {\n  border-color: #5fb028;\n  color: #5fb028; }\n\n.attachment_status.expired {\n  border-color: #fb0e0e;\n  color: #fb0e0e; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsZXMtaGlzdG9yeS9saXN0LXZpZXcvQzpcXFdPUktTUEFDRVxcRE9ULU5FVFxcYXR0YWNobW9yZVxcQXR0YWNoTW9yZS5XZWIvc3JjXFxhcHBcXHBhZ2VzXFxmaWxlcy1oaXN0b3J5XFxsaXN0LXZpZXdcXGxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbGVzLWhpc3RvcnkvbGlzdC12aWV3L2xpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdHRhY2htZW50X3N0YXR1cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAxcHggNHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuXHJcbi5hY3RpdmUuYXR0YWNobWVudF9zdGF0dXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWZiMDI4O1xyXG4gICAgY29sb3I6ICM1ZmIwMjg7XHJcbn1cclxuXHJcbi5hdHRhY2htZW50X3N0YXR1cy5leHBpcmVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZiMGUwZTtcclxuICAgIGNvbG9yOiAjZmIwZTBlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/files-history/list-view/list-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/files-history/list-view/list-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../enum */ "./src/app/enum/index.ts");
/* harmony import */ var _untility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../untility */ "./src/app/untility/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(route) {
        this.route = route;
        this.fileStatus = _enum__WEBPACK_IMPORTED_MODULE_2__["FileStatus"];
        this.icons = _untility__WEBPACK_IMPORTED_MODULE_3__["ICONS_MAPPER"];
    }
    ListViewComponent.prototype.ngOnInit = function () {
    };
    /**
   * Navigate to Attachment Details
   * @param fileHistory
   */
    ListViewComponent.prototype.navigateToDetails = function (fileHistory) {
        this.route.navigate(['attachmentDetails', fileHistory.attachmentId], { queryParams: { userType: fileHistory.sentBy === 'WebSent' ? _enum__WEBPACK_IMPORTED_MODULE_2__["UserType"].Normal : _enum__WEBPACK_IMPORTED_MODULE_2__["UserType"].GuestLink } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ListViewComponent.prototype, "files", void 0);
    ListViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-list-view',
            template: __webpack_require__(/*! ./list-view.component.html */ "./src/app/pages/files-history/list-view/list-view.component.html"),
            styles: [__webpack_require__(/*! ./list-view.component.scss */ "./src/app/pages/files-history/list-view/list-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListViewComponent);
    return ListViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-30\">\r\n  <div class=\"col-md-3 mb-30\" *ngFor=\"let fileHistory of files\" (click)=\"navigateToDetails(fileHistory)\"\r\n    style=\"cursor: pointer;\">\r\n    <mat-card>\r\n      <div class=\"p-0 text-center\">\r\n        <span class=\"attachment_status active\">{{ fileStatus[fileHistory.status] }}</span>\r\n        <img class=\"pdd-top-10 min-height-106\" [src]=\"icons[fileHistory.extension]\" alt=\"thumbnail\">\r\n        <h5 class=\"font-weight-semi-bold font-size-15 ls-0 text-uppercase m-0 pdd-top-20 ellipsis\" title=\"{{fileHistory.attachmentName}}\">{{fileHistory.attachmentName}}</h5>\r\n        <p class=\"m-0 pdd-top-10 font-size-13\">Uploaded {{fileHistory.attachmentCreationDate | prepareDate:\r\n          '-'}}</p>\r\n        <p class=\"m-0 pdd-top-5 font-size-13\">{{fileHistory.attachmentSize}}MB</p>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attachment_status {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 5px;\n  font-size: 10px;\n  border: 1px solid;\n  padding: 1px 4px 0;\n  border-radius: 2px; }\n\n.active.attachment_status {\n  border-color: #5fb028;\n  color: #5fb028; }\n\n.attachment_status.expired {\n  border-color: #fb0e0e;\n  color: #fb0e0e; }\n\n.min-height-106 {\n  min-height: 106px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsZXMtaGlzdG9yeS90aHVtYm5haWwtdmlldy9DOlxcV09SS1NQQUNFXFxET1QtTkVUXFxhdHRhY2htb3JlXFxBdHRhY2hNb3JlLldlYi9zcmNcXGFwcFxccGFnZXNcXGZpbGVzLWhpc3RvcnlcXHRodW1ibmFpbC12aWV3XFx0aHVtYm5haWwtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLFlBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksc0JBQXFCO0VBQ3JCLGVBQWMsRUFDakI7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbGVzLWhpc3RvcnkvdGh1bWJuYWlsLXZpZXcvdGh1bWJuYWlsLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmF0dGFjaG1lbnRfc3RhdHVzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDFweCA0cHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmFjdGl2ZS5hdHRhY2htZW50X3N0YXR1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM1ZmIwMjg7XHJcbiAgICBjb2xvcjogIzVmYjAyODtcclxufVxyXG5cclxuLmF0dGFjaG1lbnRfc3RhdHVzLmV4cGlyZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmIwZTBlO1xyXG4gICAgY29sb3I6ICNmYjBlMGU7XHJcbn1cclxuLm1pbi1oZWlnaHQtMTA2e1xyXG4gICAgbWluLWhlaWdodDogMTA2cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.ts ***!
  \********************************************************************************/
/*! exports provided: ThumbnailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailViewComponent", function() { return ThumbnailViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../enum */ "./src/app/enum/index.ts");
/* harmony import */ var _untility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../untility */ "./src/app/untility/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThumbnailViewComponent = /** @class */ (function () {
    function ThumbnailViewComponent(route) {
        this.route = route;
        this.fileStatus = _enum__WEBPACK_IMPORTED_MODULE_2__["FileStatus"];
        this.icons = _untility__WEBPACK_IMPORTED_MODULE_3__["ICONS_MAPPER"];
    }
    ThumbnailViewComponent.prototype.ngOnInit = function () {
    };
    /**
    * Navigate to Attachment Details
    * @param fileHistory
    */
    ThumbnailViewComponent.prototype.navigateToDetails = function (fileHistory) {
        this.route.navigate(['attachmentDetails', fileHistory.attachmentId], { queryParams: { userType: fileHistory.sentBy === 'WebSent' ? _enum__WEBPACK_IMPORTED_MODULE_2__["UserType"].Normal : _enum__WEBPACK_IMPORTED_MODULE_2__["UserType"].GuestLink } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ThumbnailViewComponent.prototype, "files", void 0);
    ThumbnailViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'am-thumbnail-view',
            template: __webpack_require__(/*! ./thumbnail-view.component.html */ "./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.html"),
            styles: [__webpack_require__(/*! ./thumbnail-view.component.scss */ "./src/app/pages/files-history/thumbnail-view/thumbnail-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThumbnailViewComponent);
    return ThumbnailViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-files-history-files-history-module.js.map