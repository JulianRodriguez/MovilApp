(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/providers/register-provider/register.provider.ts":
/*!******************************************************************!*\
  !*** ./src/app/providers/register-provider/register.provider.ts ***!
  \******************************************************************/
/*! exports provided: RegisterProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterProvider", function() { return RegisterProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_provider_api_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-provider/api.provider */ "./src/app/providers/api-provider/api.provider.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var RegisterProvider = /** @class */ (function () {
    function RegisterProvider(api) {
        this.api = api;
    }
    RegisterProvider.prototype.checkEmail = function (value) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = { headers: headers,
            withCredentials: true };
        console.log('Estamos en checkEmail');
        console.log(value);
        return this.api.get('check_email?value=' + value, options);
    };
    RegisterProvider.prototype.checkUser = function (value) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = { headers: headers,
            withCredentials: true };
        return this.api.get('check_user?value=' + value, options);
    };
    RegisterProvider.prototype.register = function (username, email, password) {
        console.log(email);
        console.log(username);
        console.log(password);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
        var options = { headers: headers,
            withCredentials: true };
        var idRole = 2;
        return this.api.post('user', { username: username, password: password, email: email, idRole: idRole }, options);
    };
    RegisterProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_provider_api_provider__WEBPACK_IMPORTED_MODULE_2__["ApiProvider"]])
    ], RegisterProvider);
    return RegisterProvider;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
                    }
                ])
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"register-wrapper\">\r\n    <ion-content>\r\n    <div class=\"login-form-wrapper\">\r\n        Registro\r\n        <ion-icon class=\"logout-icon\" name=\"arrow-round-back\" (click)=\"goBack()\"></ion-icon>\r\n    </div>\r\n    <ion-content>\r\n        <div [formGroup]=\"registerForm\">\r\n            <input type=\"text\" formControlName=\"email\" placeholder=\"Email\">\r\n            <input type=\"text\" formControlName=\"alias\" placeholder=\"Alias\">\r\n            <input type=\"password\" formControlName=\"password\" placeholder=\"Contraseña\">\r\n        </div>\r\n        <button type=\"button\" (click)=\"doRegister()\">REGISTRARSE</button>\r\n    </ion-content>\r\n</div> -->\r\n\r\n\r\n<div class=\"register-wrapper\">\r\n        <ion-content>\r\n          <!-- <div class=\"login-form-wrapper\">\r\n               Registro\r\n              <ion-icon class=\"logout-icon\" name=\"arrow-round-back\" (click)=\"goBack()\"></ion-icon>\r\n          </div> -->\r\n\r\n          <div class=\"register-form-wrapper\" [formGroup]=\"registerForm\">\r\n            <div class=\"form-inputs\">\r\n              <div class=\"form-group\">\r\n                <ion-icon name=\"person\"></ion-icon>\r\n                <input type=\"text\" placeholder=\"Alias\" formControlName=\"alias\">\r\n              </div>\r\n              <div *ngIf=\"registerForm.get('alias').errors && registerForm.get('alias').dirty && registerForm.get('alias').value?.length > 0\" class=\"alert alert-danger\">\r\n                      <span class=\"texto\">Tamaño minimo 6.</span> \r\n                </div>\r\n                <div *ngIf=\"userExists\" class=\"alert alert-danger\">\r\n                    <span class=\"texto\">Alias en uso</span> \r\n              </div>\r\n              <!-- <div class=\"register-input\">\r\n                  <ion-icon name=\"mail\"></ion-icon>\r\n                  <input type=\"text\" placeholder=\"Email\" formControlName=\"email\">\r\n                  <span *ngIf=\"registerForm.get('email').errors && registerForm.get('email').dirty\" style=\"color:red\">Ingrese un email válido</span>\r\n              </div> -->\r\n              <div class=\"form-group\">\r\n                      <ion-icon name=\"mail\"></ion-icon>\r\n                      <input class=\"form-control\" formControlName=\"email\" type=\"text\" placeholder=\"Email\">\r\n              </div>\r\n                  <div *ngIf=\"registerForm.get('email').errors && registerForm.get('email').dirty && registerForm.get('email').value?.length > 0\" class=\"alert alert-danger\">\r\n                      <span class=\"texto\">Formato no valido.</span> \r\n                  </div>\r\n                  <div *ngIf=\"emailExists\" class=\"alert alert-danger\">\r\n                      <span class=\"texto\">Correo en uso</span> \r\n                </div>\r\n              <div class=\"form-group\">\r\n                <ion-icon name=\"lock\"></ion-icon>\r\n                <input type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\">\r\n              </div>\r\n                <div *ngIf=\"registerForm.get('password').errors && registerForm.get('password').dirty && registerForm.get('password').value?.length > 0\" class=\"alert alert-danger\">\r\n                        <span class=\"texto\">Tamaño minimo 6.</span> \r\n                  </div>\r\n              <div class=\"divider\"></div>\r\n              <button class=\"register-button\" [disabled]=\"registerForm.invalid || userExists || emailExists\" (click)=\"doregister()\">\r\n                REGISTRARSE\r\n              </button>\r\n              <button class=\"register-button\" (click)=\"goBack()\">\r\n                CANCELAR\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ion-content>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: url(\"/assets/login-img.png\") no-repeat top center/cover;\n}\n.register-wrapper ion-content {\n  --background: rgba(0,0,0,0.6);\n}\n.register-wrapper .texto {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.register-wrapper .alert {\n  background-color: #f44336;\n  color: white;\n  opacity: 1;\n  transition: opacity 0.6s;\n  margin-bottom: 15px;\n}\n.register-wrapper .closebtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.register-wrapper .closebtn:hover {\n  color: black;\n}\n.register-wrapper .register-form-wrapper {\n  position: absolute;\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding-bottom: 50px;\n  margin: 10px;\n}\n.register-wrapper .register-form-wrapper .form-group {\n  position: relative;\n  width: 300px;\n  height: 40px;\n  margin: 10px auto;\n  border-bottom: 2px solid white;\n}\n.register-wrapper .register-form-wrapper .form-group input {\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  padding-left: 35px;\n  border: none;\n  color: white;\n}\n.register-wrapper .register-form-wrapper .form-group input:focus {\n  outline: none;\n}\n.register-wrapper .register-form-wrapper .form-group input::-moz-placeholder {\n  color: white;\n}\n.register-wrapper .register-form-wrapper .form-group input::placeholder {\n  color: white;\n}\n.register-wrapper .register-form-wrapper .form-group ion-icon {\n  position: absolute;\n  top: 5px;\n  left: 0;\n  font-size: 25px;\n  color: white;\n}\n.register-wrapper .register-form-wrapper .divider {\n  height: 30px;\n}\n.register-wrapper .register-form-wrapper .register-button {\n  display: block;\n  width: 300px;\n  height: 40px;\n  margin: 15px auto 0 auto;\n  background: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  line-height: 35px;\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxqcm9kcmlndWV6LmNhcmF2ZVxcRGVza3RvcFxcVEZHXFxRUl9SZWFkZXIvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQkE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxtRUFBQTtBQ3JCRjtBRHVCRTtFQUNFLDZCQUFBO0FDckJKO0FEd0JFO0VBQ0UsYUFBQTtFQUNELHVCQUFBO0VBQ0EsbUJBQUE7QUN0Qkg7QUR5QkU7RUFFRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ3hCSjtBRDBCRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3hCSjtBRDJCRTtFQUNFLFlBQUE7QUN6Qko7QURrQ0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNoQ0o7QURtQ0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ2pDTjtBRG1DTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDakNSO0FEbUNRO0VBQ0UsYUFBQTtBQ2pDVjtBRG9DUTtFQUNFLFlBQUE7QUNsQ1Y7QURpQ1E7RUFDRSxZQUFBO0FDbENWO0FEc0NNO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDcENSO0FEd0NJO0VBQ0UsWUFBQTtBQ3RDTjtBRHlDSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUN2Q04iLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAucmVnaXN0ZXItd3JhcHBlciB7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuICBcclxuLy8gICAgIC5oZWFkZXIge1xyXG4vLyAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbi8vICAgICAgIGNvbG9yOiAjMDA3OWM4O1xyXG4vLyAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbi8vICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuLy8gICAgICAgLmxvZ291dC1pY29uIHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbi8vICAgICAgICAgdG9wOiA4cHg7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLnJlZ2lzdGVyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2xvZ2luLWltZy5wbmcnKSBuby1yZXBlYXQgdG9wIGNlbnRlci9jb3ZlcjtcclxuXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgfVxyXG5cclxuICAudGV4dG8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQge1xyXG4gICAgLy8gcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLmNsb3NlYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1pbnB1dHMge1xyXG5cclxuICB9XHJcbiAgXHJcbiAgXHJcblxyXG4gIC5yZWdpc3Rlci1mb3JtLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcblxyXG5cclxuICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdmlkZXIge1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luOiAxNXB4IGF1dG8gMCBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKHdoaXRlLCAuOCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuICB9XHJcbn0iLCIucmVnaXN0ZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2xvZ2luLWltZy5wbmdcIikgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXI7XG59XG4ucmVnaXN0ZXItd3JhcHBlciBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xufVxuLnJlZ2lzdGVyLXdyYXBwZXIgLnRleHRvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVnaXN0ZXItd3JhcHBlciAuYWxlcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5yZWdpc3Rlci13cmFwcGVyIC5jbG9zZWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5yZWdpc3Rlci13cmFwcGVyIC5jbG9zZWJ0bjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5yZWdpc3Rlci13cmFwcGVyIC5yZWdpc3Rlci1mb3JtLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5yZWdpc3Rlci13cmFwcGVyIC5yZWdpc3Rlci1mb3JtLXdyYXBwZXIgLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xufVxuLnJlZ2lzdGVyLXdyYXBwZXIgLnJlZ2lzdGVyLWZvcm0td3JhcHBlciAuZm9ybS1ncm91cCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnJlZ2lzdGVyLXdyYXBwZXIgLnJlZ2lzdGVyLWZvcm0td3JhcHBlciAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucmVnaXN0ZXItd3JhcHBlciAucmVnaXN0ZXItZm9ybS13cmFwcGVyIC5mb3JtLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5yZWdpc3Rlci13cmFwcGVyIC5yZWdpc3Rlci1mb3JtLXdyYXBwZXIgLmZvcm0tZ3JvdXAgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5yZWdpc3Rlci13cmFwcGVyIC5yZWdpc3Rlci1mb3JtLXdyYXBwZXIgLmRpdmlkZXIge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ucmVnaXN0ZXItd3JhcHBlciAucmVnaXN0ZXItZm9ybS13cmFwcGVyIC5yZWdpc3Rlci1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvIDAgYXV0bztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_login_provider_login_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/login-provider/login.provider */ "./src/app/providers/login-provider/login.provider.ts");
/* harmony import */ var _providers_register_provider_register_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/register-provider/register.provider */ "./src/app/providers/register-provider/register.provider.ts");






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navController, loginProvider, registerProvider) {
        this.navController = navController;
        this.loginProvider = loginProvider;
        this.registerProvider = registerProvider;
        this.emailExists = false;
        this.userExists = false;
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.initializeForm();
    };
    RegisterPage.prototype.goBack = function () {
        this.navController.navigateBack('login');
    };
    RegisterPage.prototype.doregister = function () {
        var _this = this;
        var _a = this.registerForm.value, email = _a.email, alias = _a.alias, password = _a.password;
        this.registerProvider.register(this.registerForm.get('alias').value, this.registerForm.get('email').value, this.registerForm.get('password').value).subscribe(function (resp) {
            console.log(resp);
            _this.navController.navigateRoot('login');
        });
    };
    RegisterPage.prototype.initializeForm = function () {
        var _this = this;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            alias: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
        });
        this.registerForm.get('email').valueChanges.subscribe(function (value) {
            console.log(value);
            _this.emailExists = false;
            console.log('No igual');
            _this.registerProvider.checkEmail(value).subscribe(function (exists) {
                console.log('Valor del exists');
                console.log(exists);
                if (exists) {
                    _this.emailExists = true;
                }
            });
        });
        this.registerForm.get('alias').valueChanges.subscribe(function (value) {
            console.log(value);
            _this.userExists = false;
            console.log('Username');
            _this.registerProvider.checkUser(value).subscribe(function (exists) {
                console.log('Exists dle username');
                console.log(exists);
                if (exists) {
                    _this.userExists = true;
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _providers_login_provider_login_provider__WEBPACK_IMPORTED_MODULE_4__["LoginProvider"],
            _providers_register_provider_register_provider__WEBPACK_IMPORTED_MODULE_5__["RegisterProvider"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map