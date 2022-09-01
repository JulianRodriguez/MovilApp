(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/barcode-scanner/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: BarcodeScanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScanner", function() { return BarcodeScanner; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var BarcodeScanner = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE',
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "encode", {}, arguments); };
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    return BarcodeScanner;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2JhcmNvZGUtc2Nhbm5lci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtSHBDLGtDQUFpQjs7O1FBQ25ELFlBQU0sR0FLRjtZQUNGLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7OztJQVVGLDZCQUFJLGFBQUMsT0FBK0I7SUFZcEMsK0JBQU0sYUFBQyxJQUFZLEVBQUUsSUFBUzs7Ozs7OztnQkFsQy9CLFVBQVU7O3lCQW5IWDtFQW9Ib0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU2Nhbm5lck9wdGlvbnMge1xuICAvKipcbiAgICogUHJlZmVyIGZyb250IGNhbWVyYS4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAgICovXG4gIHByZWZlckZyb250Q2FtZXJhPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvdyBmbGlwIGNhbWVyYSBidXR0b24uIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXG4gICAqL1xuICBzaG93RmxpcENhbWVyYUJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3cgdG9yY2ggYnV0dG9uLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxuICAgKi9cbiAgc2hvd1RvcmNoQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRGlzYWJsZSBhbmltYXRpb25zLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlQW5pbWF0aW9ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3VjY2VzcyBiZWVwLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXG4gICAqL1xuICBkaXNhYmxlU3VjY2Vzc0JlZXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBQcm9tcHQgdGV4dC4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cbiAgICovXG4gIHByb21wdD86IHN0cmluZztcblxuICAvKipcbiAgICogRm9ybWF0cyBzZXBhcmF0ZWQgYnkgY29tbWFzLiBEZWZhdWx0cyB0byBhbGwgZm9ybWF0cyBleGNlcHQgYFBERl80MTdgIGFuZCBgUlNTX0VYUEFOREVEYC5cbiAgICovXG4gIGZvcm1hdHM/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9yaWVudGF0aW9uLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LiBDYW4gYmUgc2V0IHRvIGBwb3J0cmFpdGAgb3IgYGxhbmRzY2FwZWAuIERlZmF1bHRzIHRvIG5vbmUgc28gdGhlIHVzZXIgY2FuIHJvdGF0ZSB0aGUgcGhvbmUgYW5kIHBpY2sgYW4gb3JpZW50YXRpb24uXG4gICAqL1xuICBvcmllbnRhdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogTGF1bmNoIHdpdGggdGhlIHRvcmNoIHN3aXRjaGVkIG9uIChpZiBhdmFpbGFibGUpLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgdG9yY2hPbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNhdmUgc2NhbiBoaXN0b3J5LiBEZWZhdWx0cyB0byBgZmFsc2VgLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LlxuICAgKi9cbiAgc2F2ZUhpc3Rvcnk/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IHNjYW5uZWQgdGV4dCBmb3IgWCBtcy4gMCBzdXBwcmVzc2VzIGl0IGVudGlyZWx5LCBkZWZhdWx0IDE1MDAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXG4gICAqL1xuICByZXN1bHREaXNwbGF5RHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5SZXN1bHQge1xuICBmb3JtYXQ6XG4gICAgfCAnUVJfQ09ERSdcbiAgICB8ICdEQVRBX01BVFJJWCdcbiAgICB8ICdVUENfRSdcbiAgICB8ICdVUENfQSdcbiAgICB8ICdFQU5fOCdcbiAgICB8ICdFQU5fMTMnXG4gICAgfCAnQ09ERV8xMjgnXG4gICAgfCAnQ09ERV8zOSdcbiAgICB8ICdDT0RFXzkzJ1xuICAgIHwgJ0NPREFCQVInXG4gICAgfCAnSVRGJ1xuICAgIHwgJ1JTUzE0J1xuICAgIHwgJ1JTU19FWFBBTkRFRCdcbiAgICB8ICdQREZfNDE3J1xuICAgIHwgJ0FaVEVDJ1xuICAgIHwgJ01TSSc7XG4gIGNhbmNlbGxlZDogYm9vbGVhbjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEJhcmNvZGUgU2Nhbm5lclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgQmFyY29kZSBTY2FubmVyIFBsdWdpbiBvcGVucyBhIGNhbWVyYSB2aWV3IGFuZCBhdXRvbWF0aWNhbGx5IHNjYW5zIGEgYmFyY29kZSwgcmV0dXJuaW5nIHRoZSBkYXRhIGJhY2sgdG8geW91LlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhcmNvZGVTY2FubmVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9iYXJjb2RlLXNjYW5uZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMuYmFyY29kZVNjYW5uZXIuc2NhbigpLnRoZW4oYmFyY29kZURhdGEgPT4ge1xuICogIGNvbnNvbGUubG9nKCdCYXJjb2RlIGRhdGEnLCBiYXJjb2RlRGF0YSk7XG4gKiB9KS5jYXRjaChlcnIgPT4ge1xuICogXHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnIpO1xuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBCYXJjb2RlU2Nhbm5lck9wdGlvbnNcbiAqIEJhcmNvZGVTY2FuUmVzdWx0XG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFyY29kZVNjYW5uZXInLFxuICBwbHVnaW46ICdwaG9uZWdhcC1wbHVnaW4tYmFyY29kZXNjYW5uZXInLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYmFyY29kZVNjYW5uZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCYXJjb2RlU2Nhbm5lciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgRW5jb2RlOiB7XG4gICAgVEVYVF9UWVBFOiBzdHJpbmc7XG4gICAgRU1BSUxfVFlQRTogc3RyaW5nO1xuICAgIFBIT05FX1RZUEU6IHN0cmluZztcbiAgICBTTVNfVFlQRTogc3RyaW5nO1xuICB9ID0ge1xuICAgIFRFWFRfVFlQRTogJ1RFWFRfVFlQRScsXG4gICAgRU1BSUxfVFlQRTogJ0VNQUlMX1RZUEUnLFxuICAgIFBIT05FX1RZUEU6ICdQSE9ORV9UWVBFJyxcbiAgICBTTVNfVFlQRTogJ1NNU19UWVBFJyxcbiAgfTtcblxuICAvKipcbiAgICogT3BlbiB0aGUgYmFyY29kZSBzY2FubmVyLlxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggc2Nhbm5lciBkYXRhLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxuICB9KVxuICBzY2FuKG9wdGlvbnM/OiBCYXJjb2RlU2Nhbm5lck9wdGlvbnMpOiBQcm9taXNlPEJhcmNvZGVTY2FuUmVzdWx0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgZGF0YSBpbnRvIGEgYmFyY29kZS5cbiAgICogTk9URTogbm90IHdlbGwgc3VwcG9ydGVkIG9uIEFuZHJvaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVHlwZSBvZiBlbmNvZGluZ1xuICAgKiBAcGFyYW0ge2FueX0gZGF0YSBEYXRhIHRvIGVuY29kZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmNvZGUodHlwZTogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _providers_product_provider_product_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/product-provider/product.provider */ "./src/app/providers/product-provider/product.provider.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            providers: [
                _providers_product_provider_product_provider__WEBPACK_IMPORTED_MODULE_7__["ProductProvider"],
                _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_8__["BarcodeScanner"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\n  <div class=\"header\">\n    Últimos escaneos\n    <ion-icon class=\"logout-icon\" name=\"log-out\" (click)=\"logout()\"></ion-icon>\n  </div>\n  <ion-content>\n    <div class=\"no-products\" *ngIf=\"products?.length === 0\">\n      No hay escaneos previos\n    </div>\n    <div class=\"qr-list-wrapper\" *ngIf=\"products.length > 0\">\n      <div class=\"product-element\" *ngFor=\"let product of products\" (click)=\"openDetail(product)\">\n        <div class=\"product-image\">\n          <img [src]=\"product.image\">\n        </div>\n        <div class=\"product-title\">\n          <div>{{ product.title }}</div>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n  <div class=\"footer\">\n    <button class=\"scan-button\" (click)=\"scanQR()\">Escanear QR</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-wrapper {\n  width: 100%;\n  height: 100%;\n}\n.home-wrapper .header {\n  height: 50px;\n  text-align: center;\n  line-height: 45px;\n  color: #0079c8;\n  font-weight: bold;\n  background: white;\n  position: relative;\n}\n.home-wrapper .header .logout-icon {\n  font-size: 30px;\n  position: absolute;\n  right: 10px;\n  top: 8px;\n  color: red;\n}\n.home-wrapper .no-products {\n  text-align: center;\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n.home-wrapper ion-content {\n  --background: transparent;\n  height: calc(100% - 120px);\n}\n.home-wrapper ion-content .qr-list-wrapper {\n  background: white;\n  height: 100%;\n  top: -10px;\n  position: relative;\n  padding-top: 15px;\n}\n.home-wrapper ion-content .qr-list-wrapper .product-element {\n  width: 90%;\n  margin: 10px auto;\n  position: relative;\n  height: 65px;\n  overflow: hidden;\n  border: 1px solid rgb(233, 233, 233);\n  border-radius: 7px;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);\n}\n.home-wrapper ion-content .qr-list-wrapper .product-element .product-image {\n  position: absolute;\n  width: 70px;\n  left: 0;\n}\n.home-wrapper ion-content .qr-list-wrapper .product-element .product-image img {\n  width: 70px;\n  height: 70px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.home-wrapper ion-content .qr-list-wrapper .product-element .product-title {\n  height: 65px;\n  display: flex;\n  align-items: center;\n  padding-left: 85px;\n}\n.home-wrapper ion-content .qr-wrapper {\n  background: transparent;\n  position: absolute;\n  top: 0px;\n  right: 0;\n  bottom: 120px;\n  left: 0;\n  display: flex;\n  align-items: center;\n}\n.home-wrapper ion-content .qr-wrapper .bars {\n  width: 300px;\n  height: 300px;\n  margin: 0 auto;\n}\n.home-wrapper ion-content .qr-wrapper .bars .bar {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n}\n.home-wrapper ion-content .qr-wrapper .bars .bar:nth-child(1) {\n  border-top: 5px solid rgba(255, 255, 255, 0.7);\n  border-left: 5px solid rgba(255, 255, 255, 0.7);\n  margin: 0 100px 100px 0;\n}\n.home-wrapper ion-content .qr-wrapper .bars .bar:nth-child(2) {\n  border-top: 5px solid rgba(255, 255, 255, 0.7);\n  border-right: 5px solid rgba(255, 255, 255, 0.7);\n  margin: 0 0 100px 0;\n}\n.home-wrapper ion-content .qr-wrapper .bars .bar:nth-child(3) {\n  border-bottom: 5px solid rgba(255, 255, 255, 0.7);\n  border-left: 5px solid rgba(255, 255, 255, 0.7);\n  margin: 0 100px 0 0;\n}\n.home-wrapper ion-content .qr-wrapper .bars .bar:nth-child(4) {\n  border-bottom: 5px solid rgba(255, 255, 255, 0.7);\n  border-right: 5px solid rgba(255, 255, 255, 0.7);\n}\n.home-wrapper .footer {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 70px;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);\n  background: white;\n}\n.home-wrapper .footer .scan-button {\n  display: block;\n  width: 95%;\n  height: 50px;\n  margin: 10px auto;\n  background: #0079c8;\n  text-align: center;\n  line-height: 45px;\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n  border-radius: 5px;\n}\n.home-wrapper .footer .scan-button:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGpyb2RyaWd1ZXouY2FyYXZlXFxEZXNrdG9wXFxURkdcXFFSX1JlYWRlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQ047QURHRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUU7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FDRko7QURJSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRk47QURJTTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FDRlI7QURJUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUNGVjtBRElVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDRlo7QURNUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0pWO0FEU0k7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1BOO0FEU007RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNQUjtBRFNRO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1BWO0FEU1U7RUFDRSw4Q0FBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7QUNQWjtBRFVVO0VBQ0UsOENBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDUlo7QURXVTtFQUNFLGlEQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtBQ1RaO0FEWVU7RUFDRSxpREFBQTtFQUNBLGdEQUFBO0FDVlo7QURpQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGlCQUFBO0FDZko7QURpQkk7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2ZOO0FEaUJNO0VBQ0UsYUFBQTtBQ2ZSIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIGNvbG9yOiAjMDA3OWM4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAubG9nb3V0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgIHRvcDogOHB4O1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5vLXByb2R1Y3RzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjBweCk7XHJcblxyXG4gICAgLnFyLWxpc3Qtd3JhcHBlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcblxyXG4gICAgICAucHJvZHVjdC1lbGVtZW50IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuXHJcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG5cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDg1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnFyLXdyYXBwZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMTIwcHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAuYmFycyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgIC5iYXIge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCByZ2JhKHdoaXRlLCAwLjcpO1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYmEod2hpdGUsIDAuNyk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMDBweCAxMDBweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEod2hpdGUsIDAuNyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYmEod2hpdGUsIDAuNyk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwMHB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgcmdiYSh3aGl0ZSwgMC43KTtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZ2JhKHdoaXRlLCAwLjcpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMTAwcHggMCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHJnYmEod2hpdGUsIDAuNyk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYmEod2hpdGUsIDAuNyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICAuc2Nhbi1idXR0b24ge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogIzAwNzljODtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufSIsIi5ob21lLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhvbWUtd3JhcHBlciAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBjb2xvcjogIzAwNzljODtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaG9tZS13cmFwcGVyIC5oZWFkZXIgLmxvZ291dC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDhweDtcbiAgY29sb3I6IHJlZDtcbn1cbi5ob21lLXdyYXBwZXIgLm5vLXByb2R1Y3RzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaG9tZS13cmFwcGVyIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjBweCk7XG59XG4uaG9tZS13cmFwcGVyIGlvbi1jb250ZW50IC5xci1saXN0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmhvbWUtd3JhcHBlciBpb24tY29udGVudCAucXItbGlzdC13cmFwcGVyIC5wcm9kdWN0LWVsZW1lbnQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDY1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzMsIDIzMywgMjMzKTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uaG9tZS13cmFwcGVyIGlvbi1jb250ZW50IC5xci1saXN0LXdyYXBwZXIgLnByb2R1Y3QtZWxlbWVudCAucHJvZHVjdC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGxlZnQ6IDA7XG59XG4uaG9tZS13cmFwcGVyIGlvbi1jb250ZW50IC5xci1saXN0LXdyYXBwZXIgLnByb2R1Y3QtZWxlbWVudCAucHJvZHVjdC1pbWFnZSBpbWcge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5ob21lLXdyYXBwZXIgaW9uLWNvbnRlbnQgLnFyLWxpc3Qtd3JhcHBlciAucHJvZHVjdC1lbGVtZW50IC5wcm9kdWN0LXRpdGxlIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDg1cHg7XG59XG4uaG9tZS13cmFwcGVyIGlvbi1jb250ZW50IC5xci13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDEyMHB4O1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUtd3JhcHBlciBpb24tY29udGVudCAucXItd3JhcHBlciAuYmFycyB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uaG9tZS13cmFwcGVyIGlvbi1jb250ZW50IC5xci13cmFwcGVyIC5iYXJzIC5iYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5ob21lLXdyYXBwZXIgaW9uLWNvbnRlbnQgLnFyLXdyYXBwZXIgLmJhcnMgLmJhcjpudGgtY2hpbGQoMSkge1xuICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgbWFyZ2luOiAwIDEwMHB4IDEwMHB4IDA7XG59XG4uaG9tZS13cmFwcGVyIGlvbi1jb250ZW50IC5xci13cmFwcGVyIC5iYXJzIC5iYXI6bnRoLWNoaWxkKDIpIHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBtYXJnaW46IDAgMCAxMDBweCAwO1xufVxuLmhvbWUtd3JhcHBlciBpb24tY29udGVudCAucXItd3JhcHBlciAuYmFycyAuYmFyOm50aC1jaGlsZCgzKSB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBtYXJnaW46IDAgMTAwcHggMCAwO1xufVxuLmhvbWUtd3JhcHBlciBpb24tY29udGVudCAucXItd3JhcHBlciAuYmFycyAuYmFyOm50aC1jaGlsZCg0KSB7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cbi5ob21lLXdyYXBwZXIgLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5ob21lLXdyYXBwZXIgLmZvb3RlciAuc2Nhbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYmFja2dyb3VuZDogIzAwNzljODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaG9tZS13cmFwcGVyIC5mb290ZXIgLnNjYW4tYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_product_provider_product_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/product-provider/product.provider */ "./src/app/providers/product-provider/product.provider.ts");
/* harmony import */ var _providers_nav_params_nav_params_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/nav-params/nav-params.provider */ "./src/app/providers/nav-params/nav-params.provider.ts");
/* harmony import */ var _providers_local_storage_local_storage_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/local-storage/local-storage.provider */ "./src/app/providers/local-storage/local-storage.provider.ts");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");







var HomePage = /** @class */ (function () {
    function HomePage(qrScanner, alertController, productProvider, navParamsProvider, navController, localStorageProvider) {
        this.qrScanner = qrScanner;
        this.alertController = alertController;
        this.productProvider = productProvider;
        this.navParamsProvider = navParamsProvider;
        this.navController = navController;
        this.localStorageProvider = localStorageProvider;
        this.scanning = false;
    }
    HomePage.prototype.ngOnInit = function () {
        var products = this.localStorageProvider.getItem('products');
        this.products = products ? products : [];
    };
    HomePage.prototype.scanQR = function () {
        var _this = this;
        var options = {
            preferFrontCamera: false,
            showFlipCameraButton: false,
            showTorchButton: false,
            torchOn: false,
            resultDisplayDuration: 500,
            formats: 'QR_CODE, PDF_417',
            orientation: 'portrait'
        };
        this.qrScanner.scan(options).then(function (res) {
            console.log(res);
            var result = res['text'];
            if (result && result !== '') {
                _this.scanning = false;
                _this.loadProduct(result);
            }
        }).catch(function (err) {
            _this.showModal();
        });
    };
    HomePage.prototype.openDetail = function (product) {
        this.navParamsProvider.params = product;
        this.navController.navigateForward('/details');
    };
    HomePage.prototype.logout = function () {
        this.navController.navigateRoot('login');
    };
    HomePage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '¡Error!',
                            message: 'Ha ocurrido un error al escanear el código QR, por favor, inténtalo de nuevo',
                            buttons: [
                                {
                                    text: 'Rechazar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        alert.dismiss();
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function () {
                                        alert.dismiss();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadProduct = function (code) {
        var _this = this;
        this.productProvider.loadProduct(code)
            .subscribe(function (product) {
            _this.navParamsProvider.params = product;
            _this.setItemInMemory(product);
            _this.navController.navigateForward('/details');
        });
    };
    HomePage.prototype.setItemInMemory = function (product) {
        var products = this.localStorageProvider.getItem('products');
        var itemExists = false;
        if (products) {
            products.forEach(function (productElement) {
                if (productElement.id === product.id) {
                    itemExists = true;
                }
            });
        }
        else {
            products = [product];
        }
        if (!itemExists) {
            products.push(product);
            this.localStorageProvider.setItem('products', products);
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _providers_product_provider_product_provider__WEBPACK_IMPORTED_MODULE_3__["ProductProvider"],
            _providers_nav_params_nav_params_provider__WEBPACK_IMPORTED_MODULE_4__["NavParamsProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _providers_local_storage_local_storage_provider__WEBPACK_IMPORTED_MODULE_5__["LocalStorageProvider"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/providers/local-storage/local-storage.provider.ts":
/*!*******************************************************************!*\
  !*** ./src/app/providers/local-storage/local-storage.provider.ts ***!
  \*******************************************************************/
/*! exports provided: LocalStorageProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageProvider", function() { return LocalStorageProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalStorageProvider = /** @class */ (function () {
    function LocalStorageProvider() {
    }
    LocalStorageProvider.prototype.setItem = function (key, value) {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    LocalStorageProvider.prototype.getItem = function (key) {
        var item = localStorage.getItem(key);
        return item && item.includes('{') ? JSON.parse(item) : item;
    };
    LocalStorageProvider.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LocalStorageProvider);
    return LocalStorageProvider;
}());



/***/ }),

/***/ "./src/app/providers/product-provider/product.provider.ts":
/*!****************************************************************!*\
  !*** ./src/app/providers/product-provider/product.provider.ts ***!
  \****************************************************************/
/*! exports provided: ProductProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductProvider", function() { return ProductProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_provider_api_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-provider/api.provider */ "./src/app/providers/api-provider/api.provider.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ProductProvider = /** @class */ (function () {
    function ProductProvider(api) {
        this.api = api;
    }
    ProductProvider.prototype.loadProduct = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'withCredentials': 'true'
        });
        return this.api.get('product/' + id, { headers: headers });
    };
    ProductProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_provider_api_provider__WEBPACK_IMPORTED_MODULE_2__["ApiProvider"]])
    ], ProductProvider);
    return ProductProvider;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map