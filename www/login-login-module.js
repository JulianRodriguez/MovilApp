(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
                    }
                ])
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper\">\n  <ion-content>\n    <div class=\"login-form-wrapper\" [formGroup]=\"loginForm\">\n      <!-- <div *ngIf=\"showError\" class=\"my-notify-error\">\n        Alias y/o Contraseña Incorrectos\n      </div> -->\n      <div class=\"alert\" *ngIf=\"showError\" >\n          <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span>\n          Alias y/o Contraseña Incorrectos.\n        </div>\n      <div>\n        <ion-item class=\"login-input\" color=\"transparent\">\n          <ion-icon name=\"person\"></ion-icon>\n          <input type=\"text\" placeholder=\"Correo\" formControlName=\"user\">\n        </ion-item>\n      </div>\n      <div>\n        <ion-item class=\"login-input\" color=\"transparent\">\n          <ion-icon name=\"lock\"></ion-icon>\n          <input type=\"password\" placeholder=\"Contraseña\" formControlName=\"password\">\n        </ion-item>   \n      </div>\n      <div class=\"divider\"></div>\n      <button class=\"login-button\" [disabled]=\"loginForm.invalid\" (click)=\"doLogin()\">\n        <ng-container *ngIf=\"!loading\">ACCEDER</ng-container>\n        <ng-container *ngIf=\"loading\">\n          <ion-spinner></ion-spinner>\n        </ng-container>\n      </button>\n      <button class=\"login-button\" (click)=\"register()\">\n        ¿Aún no tienes cuenta?\n      </button>\n    </div>\n  </ion-content>\n</div>\n\n\n<script>\nvar close = document.getElementsByClassName(\"closebtn\");\nvar i;\ndocument.write(1);\n\nfor (i = 0; i < close.length; i++) {\n  close[i].onclick = function(){\n    var div = this.parentElement;\n    div.style.opacity = \"0\";\n    setTimeout(function(){ div.style.display = \"none\"; }, 600);\n  }\n}\n</script>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: url(\"/assets/login-img.png\") no-repeat top center/cover;\n}\n.login-wrapper ion-content {\n  --background: rgba(0,0,0,0.6);\n}\n.login-wrapper .alert {\n  padding: 20px;\n  background-color: #f44336;\n  color: white;\n  opacity: 1;\n  transition: opacity 0.6s;\n  margin-bottom: 15px;\n}\n.login-wrapper .closebtn {\n  margin-left: 15px;\n  color: white;\n  font-weight: bold;\n  float: right;\n  font-size: 22px;\n  line-height: 20px;\n  cursor: pointer;\n  transition: 0.3s;\n}\n.login-wrapper .closebtn:hover {\n  color: black;\n}\n.login-wrapper .login-form-wrapper {\n  position: absolute;\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding-bottom: 50px;\n}\n.login-wrapper .login-form-wrapper .login-input {\n  display: block;\n  width: 300px;\n  height: 40px;\n  margin: 15px auto 0 auto;\n  border-bottom: 2px solid white;\n}\n.login-wrapper .login-form-wrapper .login-input input {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px;\n  border: none;\n  outline: none;\n  background: transparent;\n  color: white;\n}\n.login-wrapper .login-form-wrapper .login-input input::-moz-placeholder {\n  color: white;\n}\n.login-wrapper .login-form-wrapper .login-input input::placeholder {\n  color: white;\n}\n.login-wrapper .login-form-wrapper .login-input ion-icon {\n  color: white;\n}\n.login-wrapper .login-form-wrapper .divider {\n  height: 30px;\n}\n.login-wrapper .login-form-wrapper .login-button {\n  display: block;\n  width: 300px;\n  height: 40px;\n  margin: 15px auto 0 auto;\n  background: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  line-height: 35px;\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.login-wrapper .icon-login {\n  --background: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqcm9kcmlndWV6LmNhcmF2ZVxcRGVza3RvcFxcVEZHXFxRUl9SZWFkZXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1FQUFBO0FDQ0Y7QURDRTtFQUNFLDZCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0FKO0FERUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFO0VBQ0UsWUFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtBQ0ZKO0FESUk7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FDRk47QURJTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FESVE7RUFDRSxZQUFBO0FDRlY7QURDUTtFQUNFLFlBQUE7QUNGVjtBRE1NO0VBQ0UsWUFBQTtBQ0pSO0FEUUk7RUFDRSxZQUFBO0FDTk47QURTSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1BOO0FEV0U7RUFDRSxtQkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2xvZ2luLWltZy5wbmcnKSBuby1yZXBlYXQgdG9wIGNlbnRlci9jb3ZlcjtcblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gIH1cblxuICAuYWxlcnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnM7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAuY2xvc2VidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG4gIFxuICAuY2xvc2VidG46aG92ZXIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfSAgXG5cbiAgLmxvZ2luLWZvcm0td3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogYXV0bztcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblxuICAgIC5sb2dpbi1pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogMTVweCBhdXRvIDAgYXV0bztcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcblxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kaXZpZGVyIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAubG9naW4tYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiAxNXB4IGF1dG8gMCBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSh3aGl0ZSwgLjgpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmljb24tbG9naW57XG4gICAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbiAgfVxufSIsIi5sb2dpbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvbG9naW4taW1nLnBuZ1wiKSBuby1yZXBlYXQgdG9wIGNlbnRlci9jb3Zlcjtcbn1cbi5sb2dpbi13cmFwcGVyIGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG59XG4ubG9naW4td3JhcHBlciAuYWxlcnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5jbG9zZWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5sb2dpbi13cmFwcGVyIC5jbG9zZWJ0bjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1mb3JtLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogYXV0bztcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC5sb2dpbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMCBhdXRvO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC5sb2dpbi1pbnB1dCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLWZvcm0td3JhcHBlciAubG9naW4taW5wdXQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLWZvcm0td3JhcHBlciAubG9naW4taW5wdXQgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tZm9ybS13cmFwcGVyIC5kaXZpZGVyIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLWZvcm0td3JhcHBlciAubG9naW4tYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDE1cHggYXV0byAwIGF1dG87XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi13cmFwcGVyIC5pY29uLWxvZ2luIHtcbiAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_login_provider_login_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/login-provider/login.provider */ "./src/app/providers/login-provider/login.provider.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(loginProvider, navController) {
        this.loginProvider = loginProvider;
        this.navController = navController;
        this.showError = false;
        this.loading = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.initForm();
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var user = this.loginForm.value.user;
        var password = this.loginForm.value.password;
        this.showError = false;
        this.loading = true;
        this.loginProvider.doLogin(user, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.loading = false; }))
            .subscribe(function (resp) {
            console.log(resp);
            if (resp) {
                _this.navController.navigateRoot('/home');
            }
        }, function () {
            console.log('ERROR');
            _this.showError = true;
        });
    };
    LoginPage.prototype.cerrar = function () {
        console.log('en la funcion');
    };
    LoginPage.prototype.register = function () {
        this.navController.navigateForward('register');
    };
    LoginPage.prototype.initForm = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_login_provider_login_provider__WEBPACK_IMPORTED_MODULE_2__["LoginProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map