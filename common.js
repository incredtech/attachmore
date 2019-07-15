(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/bg-img-refresh.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/bg-img-refresh.service.ts ***!
  \****************************************************/
/*! exports provided: BgImgRefreshService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgImgRefreshService", function() { return BgImgRefreshService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BgImgRefreshService = /** @class */ (function () {
    function BgImgRefreshService() {
        this.imagePath = 'assets/images/bg/';
        this.imageBaseName = 'bg';
        this.imageExtension = '.jpg';
        this.fileCount = 5;
    }
    /**
     * Url of Image
     */
    BgImgRefreshService.prototype.imageUrl = function () {
        var number = this.randomNumber();
        return "url(" + this.randomImagePath(number) + ")";
    };
    /**
     * Random Path of Image
     * @param random
     */
    BgImgRefreshService.prototype.randomImagePath = function (random) {
        return this.imagePath.concat(this.imageBaseName, random.toString(), this.imageExtension);
    };
    /**
     * Generate Random Number between 1 and 5
     */
    BgImgRefreshService.prototype.randomNumber = function () {
        return Math.ceil(Math.random() * this.fileCount);
    };
    BgImgRefreshService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], BgImgRefreshService);
    return BgImgRefreshService;
}());



/***/ }),

/***/ "./src/app/services/navigation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = /** @class */ (function () {
    function NavigationService(router) {
        this.router = router;
        var routes = this.router.config;
    }
    NavigationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigationService);
    return NavigationService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map