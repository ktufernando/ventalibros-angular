(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/api/src/index.ts":
/*!***************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/api/src/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: ApiModule, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api.module */ "../../libs/api/src/lib/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _lib_api_module__WEBPACK_IMPORTED_MODULE_0__["ApiModule"]; });

/* harmony import */ var _lib_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/api.service */ "../../libs/api/src/lib/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _lib_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });





/***/ }),

/***/ "../../libs/api/src/lib/api.module.ts":
/*!************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/api/src/lib/api.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "../../libs/api/src/lib/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");





var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]]
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "../../libs/api/src/lib/api.service.ts":
/*!*************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/api/src/lib/api.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.get = function (url, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"](); }
        return this.http.get("" + _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, { headers: this.headers, params: params });
    };
    ApiService.prototype.post = function (url, data) {
        if (data === void 0) { data = {}; }
        return this.http.post("" + _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, JSON.stringify(data), { headers: this.headers });
    };
    ApiService.prototype.put = function (url, data) {
        if (data === void 0) { data = {}; }
        return this.http.put("" + _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, JSON.stringify(data), { headers: this.headers });
    };
    ApiService.prototype.delete = function (url) {
        return this.http.delete("" + _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + url, { headers: this.headers });
    };
    Object.defineProperty(ApiService.prototype, "headers", {
        get: function () {
            var headersConfig = {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            };
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headersConfig);
        },
        enumerable: true,
        configurable: true
    });
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../libs/auth/src/index.ts":
/*!****************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: AuthModule, GetUser, GetUserSuccess, GetUserFail, Login, LoginSuccess, LoginFail, Register, RegisterSuccess, RegisterFail, Logout, authInitialState, authReducer, AuthFacade, AuthGuardService, LocalStorageJwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/auth.module */ "../../libs/auth/src/lib/auth.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return _lib_auth_module__WEBPACK_IMPORTED_MODULE_0__["AuthModule"]; });

/* harmony import */ var _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/auth.actions */ "../../libs/auth/src/lib/+state/auth.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["GetUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUserSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["GetUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUserFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["GetUserFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["Login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["LoginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["LoginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["Register"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterSuccess", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["RegisterSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterFail", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["RegisterFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _lib_state_auth_actions__WEBPACK_IMPORTED_MODULE_1__["Logout"]; });

/* harmony import */ var _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/auth.reducer */ "../../libs/auth/src/lib/+state/auth.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _lib_state_auth_reducer__WEBPACK_IMPORTED_MODULE_2__["authReducer"]; });

/* harmony import */ var _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/auth.facade */ "../../libs/auth/src/lib/+state/auth.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return _lib_state_auth_facade__WEBPACK_IMPORTED_MODULE_3__["AuthFacade"]; });

/* harmony import */ var _lib_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/auth-guard.service */ "../../libs/auth/src/lib/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _lib_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]; });

/* harmony import */ var _lib_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/local-storage-jwt.service */ "../../libs/auth/src/lib/local-storage-jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageJwtService", function() { return _lib_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageJwtService"]; });









/***/ }),

/***/ "../../libs/auth/src/lib/+state/auth.actions.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/+state/auth.actions.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: GetUser, GetUserSuccess, GetUserFail, Login, LoginSuccess, LoginFail, Register, RegisterSuccess, RegisterFail, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserSuccess", function() { return GetUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserFail", function() { return GetUserFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return LoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSuccess", function() { return RegisterSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFail", function() { return RegisterFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
var GetUser = /** @class */ (function () {
    function GetUser() {
        this.type = "[auth] GET_USER" /* GET_USER */;
    }
    return GetUser;
}());

var GetUserSuccess = /** @class */ (function () {
    function GetUserSuccess(payload) {
        this.payload = payload;
        this.type = "[auth] GET_USER_SUCCESS" /* GET_USER_SUCCESS */;
    }
    return GetUserSuccess;
}());

var GetUserFail = /** @class */ (function () {
    function GetUserFail(payload) {
        this.payload = payload;
        this.type = "[auth] GET_USER_FAIL" /* GET_USER_FAIL */;
    }
    return GetUserFail;
}());

var Login = /** @class */ (function () {
    function Login() {
        this.type = "[auth] LOGIN" /* LOGIN */;
    }
    return Login;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = "[auth] LOGIN_SUCCESS" /* LOGIN_SUCCESS */;
    }
    return LoginSuccess;
}());

var LoginFail = /** @class */ (function () {
    function LoginFail() {
        this.type = "[auth] LOGIN_FAIL" /* LOGIN_FAIL */;
    }
    return LoginFail;
}());

var Register = /** @class */ (function () {
    function Register() {
        this.type = "[auth] REGISTER" /* REGISTER */;
    }
    return Register;
}());

var RegisterSuccess = /** @class */ (function () {
    function RegisterSuccess(payload) {
        this.payload = payload;
        this.type = "[auth] REGISTER_SUCCESS" /* REGISTER_SUCCESS */;
    }
    return RegisterSuccess;
}());

var RegisterFail = /** @class */ (function () {
    function RegisterFail() {
        this.type = "[auth] REGISTER_FAIL" /* REGISTER_FAIL */;
    }
    return RegisterFail;
}());

var Logout = /** @class */ (function () {
    function Logout() {
        this.type = "[auth] LOGOUT" /* LOGOUT */;
    }
    return Logout;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/+state/auth.effects.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/+state/auth.effects.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "../../libs/auth/src/lib/auth.service.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.actions */ "../../libs/auth/src/lib/+state/auth.actions.ts");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../local-storage-jwt.service */ "../../libs/auth/src/lib/local-storage-jwt.service.ts");











var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions, localStorageJwtService, ngrxFormsFacade, authService, router) {
        var _this = this;
        this.actions = actions;
        this.localStorageJwtService = localStorageJwtService;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.authService = authService;
        this.router = router;
        this.getUser$ = this.actions
            .ofType("[auth] GET_USER" /* GET_USER */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (item) {
            return _this.authService.user()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) { return new _auth_actions__WEBPACK_IMPORTED_MODULE_8__["GetUserSuccess"](data.user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _auth_actions__WEBPACK_IMPORTED_MODULE_8__["GetUserFail"](error)); }));
        }));
        this.login$ = this.actions
            .ofType("[auth] LOGIN" /* LOGIN */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.ngrxFormsFacade.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["exhaustMap"])(function (_a) {
            var action = _a[0], data = _a[1];
            return _this.authService
                .login(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (user) { return new _auth_actions__WEBPACK_IMPORTED_MODULE_8__["LoginSuccess"](user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (result) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__["SetErrors"](result.error.errors)); }));
        }));
        this.loginOrRegisterSuccess$ = this.actions
            .ofType("[auth] LOGIN_SUCCESS" /* LOGIN_SUCCESS */, "[auth] REGISTER_SUCCESS" /* REGISTER_SUCCESS */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (action) {
            _this.localStorageJwtService.setItem(action.payload.token);
            _this.router.navigateByUrl('/');
        }));
        this.register$ = this.actions
            .ofType("[auth] REGISTER" /* REGISTER */)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["withLatestFrom"])(this.ngrxFormsFacade.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["exhaustMap"])(function (_a) {
            var action = _a[0], data = _a[1];
            return _this.authService
                .register(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (user) { return new _auth_actions__WEBPACK_IMPORTED_MODULE_8__["RegisterSuccess"](user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (result) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(new _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__["SetErrors"](result.error.errors)); }));
        }));
        this.logout$ = this.actions.ofType("[auth] LOGOUT" /* LOGOUT */).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (action) {
            _this.localStorageJwtService.removeItem();
            _this.router.navigateByUrl('/login');
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "getUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "login$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "loginOrRegisterSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "register$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "logout$", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"],
            _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageJwtService"],
            _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsFacade"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/+state/auth.facade.ts":
/*!*********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/+state/auth.facade.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AuthFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFacade", function() { return AuthFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.actions */ "../../libs/auth/src/lib/+state/auth.actions.ts");
/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.selectors */ "../../libs/auth/src/lib/+state/auth.selectors.ts");





var AuthFacade = /** @class */ (function () {
    function AuthFacade(store) {
        this.store = store;
        this.auht$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["authQuery"].getAuth);
        this.user$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["authQuery"].getUser);
        this.isLoggedIn$ = this.store.select(_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["authQuery"].getLoggedIn);
    }
    AuthFacade.prototype.login = function () {
        this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["Login"]());
    };
    AuthFacade.prototype.logout = function () {
        this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["Logout"]());
    };
    AuthFacade.prototype.register = function () {
        this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["Register"]());
    };
    AuthFacade.prototype.user = function () {
        this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["GetUser"]());
    };
    AuthFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthFacade);
    return AuthFacade;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/+state/auth.reducer.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/+state/auth.reducer.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: authInitialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return authInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var authInitialState = {
    loggedIn: false,
    status: 'INIT',
    user: {
        email: '',
        token: '',
        username: '',
        bio: '',
        image: ''
    }
};
function authReducer(state, action) {
    switch (action.type) {
        case "[auth] GET_USER_SUCCESS" /* GET_USER_SUCCESS */: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loggedIn: true, user: action.payload });
        }
        case "[auth] GET_USER_FAIL" /* GET_USER_FAIL */: {
            return authInitialState;
        }
        case "[auth] LOGIN" /* LOGIN */:
        case "[auth] REGISTER" /* REGISTER */: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { status: 'IN_PROGRESS' });
        }
        case "[auth] REGISTER_SUCCESS" /* REGISTER_SUCCESS */:
        case "[auth] LOGIN_SUCCESS" /* LOGIN_SUCCESS */: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loggedIn: true, status: 'INIT', user: action.payload });
        }
        case "[auth] LOGIN_FAIL" /* LOGIN_FAIL */:
        case "[auth] REGISTER_FAIL" /* REGISTER_FAIL */: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { status: 'INIT' });
        }
        case "[auth] LOGOUT" /* LOGOUT */: {
            return authInitialState;
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "../../libs/auth/src/lib/+state/auth.selectors.ts":
/*!************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/+state/auth.selectors.ts ***!
  \************************************************************************************************************************/
/*! exports provided: getAuth, getLoggedIn, getUser, authQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return getAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoggedIn", function() { return getLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authQuery", function() { return authQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");

var getAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var getLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuth, function (auth) { return auth.loggedIn; });
var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuth, function (auth) { return auth.user; });
var authQuery = {
    getAuth: getAuth,
    getLoggedIn: getLoggedIn,
    getUser: getUser
};


/***/ }),

/***/ "../../libs/auth/src/lib/auth-guard.service.ts":
/*!*********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/auth-guard.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage-jwt.service */ "../../libs/auth/src/lib/local-storage-jwt.service.ts");





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.storage.getItem().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (token) {
            if (!token) {
                _this.router.navigate(['/login']);
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageJwtService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/auth.module.ts":
/*!**************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/auth.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_auth_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/auth.effects */ "../../libs/auth/src/lib/+state/auth.effects.ts");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/auth.facade */ "../../libs/auth/src/lib/+state/auth.facade.ts");
/* harmony import */ var _state_auth_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./+state/auth.reducer */ "../../libs/auth/src/lib/+state/auth.reducer.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth-guard.service */ "../../libs/auth/src/lib/auth-guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.service */ "../../libs/auth/src/lib/auth.service.ts");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./local-storage-jwt.service */ "../../libs/auth/src/lib/local-storage-jwt.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "../../libs/auth/src/lib/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "../../libs/auth/src/lib/register/register.component.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./token-interceptor.service */ "../../libs/auth/src/lib/token-interceptor.service.ts");

















var authRouting = _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]
    }
]);
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsModule"],
                authRouting,
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('auth', _state_auth_reducer__WEBPACK_IMPORTED_MODULE_10__["authReducer"], { initialState: _state_auth_reducer__WEBPACK_IMPORTED_MODULE_10__["authInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_state_auth_effects__WEBPACK_IMPORTED_MODULE_8__["AuthEffects"]])
            ],
            providers: [
                _state_auth_effects__WEBPACK_IMPORTED_MODULE_8__["AuthEffects"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"],
                _auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _state_auth_facade__WEBPACK_IMPORTED_MODULE_9__["AuthFacade"],
                _token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
                _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_13__["LocalStorageJwtService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
                    multi: true
                }
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/auth.service.ts":
/*!***************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/auth.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(apiService) {
        this.apiService = apiService;
    }
    AuthService.prototype.user = function () {
        return this.apiService.get('/user');
    };
    AuthService.prototype.login = function (credentials) {
        return this.apiService.post('/users/login', { user: credentials }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) { return r.user; }));
    };
    AuthService.prototype.register = function (credentials) {
        return this.apiService.post('/users', { user: credentials }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) { return r.user; }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/local-storage-jwt.service.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/local-storage-jwt.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: LocalStorageJwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageJwtService", function() { return LocalStorageJwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");



var LocalStorageJwtService = /** @class */ (function () {
    function LocalStorageJwtService() {
    }
    LocalStorageJwtService.prototype.getItem = function () {
        var data = localStorage.getItem('jwtToken');
        if (data) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    LocalStorageJwtService.prototype.setItem = function (data) {
        localStorage.setItem('jwtToken', data);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
    };
    LocalStorageJwtService.prototype.removeItem = function () {
        localStorage.removeItem('jwtToken');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    LocalStorageJwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], LocalStorageJwtService);
    return LocalStorageJwtService;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/login/login.component.css":
/*!*************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/login/login.component.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2F1dGgvc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../../libs/auth/src/lib/login/login.component.html":
/*!**************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/login/login.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\n\t<div class=\"container page\">\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-md-6 offset-md-3 col-xs-12\">\n\t\t\t\t<h1 class=\"text-xs-center\">Ingreso</h1>\n\t\t\t\t<p class=\"text-xs-center\">\n\t\t\t\t\t<a [routerLink]=\"['/register']\">Necesitas una cuenta?</a>\n\t\t\t\t</p>\n\n\t\t\t\t<app-list-errors></app-list-errors>\n\n\t\t\t\t<app-dynamic-form (updateForm)=\"updateForm($event)\" [data$]=\"data$\" [structure$]=\"structure$\">\n\t\t\t\t</app-dynamic-form>\n\t\t\t\t<button (click)=\"submit()\" class=\"btn btn-lg btn-primary pull-xs-right\" type=\"submit\">\n\t\t\t\t\tIngresar\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../libs/auth/src/lib/login/login.component.ts":
/*!************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/login/login.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../+state/auth.facade */ "../../libs/auth/src/lib/+state/auth.facade.ts");





var structure = [
    {
        type: 'INPUT',
        name: 'email',
        placeholder: 'Usuario',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
    },
    {
        type: 'INPUT',
        name: 'password',
        placeholder: 'Contraseña',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        attrs: {
            type: 'password'
        }
    }
];
var LoginComponent = /** @class */ (function () {
    function LoginComponent(ngrxFormsFacade, facade) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.facade = facade;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.ngrxFormsFacade.setStructure(structure);
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
    };
    LoginComponent.prototype.updateForm = function (changes) {
        this.ngrxFormsFacade.updateData(changes);
    };
    LoginComponent.prototype.submit = function () {
        this.facade.login();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.ngrxFormsFacade.initializeForm();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "../../libs/auth/src/lib/login/login.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./login.component.css */ "../../libs/auth/src/lib/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"], _state_auth_facade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/register/register.component.css":
/*!*******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/register/register.component.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2F1dGgvc3JjL2xpYi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../../libs/auth/src/lib/register/register.component.html":
/*!********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/register/register.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-page\">\n\t<div class=\"container page\">\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-md-6 offset-md-3 col-xs-12\">\n\t\t\t\t<h1 class=\"text-xs-center\">Registro</h1>\n\t\t\t\t<p class=\"text-xs-center\">\n\t\t\t\t\t<a [routerLink]=\"['/login']\">Tenes una cuenta?</a>\n\t\t\t\t</p>\n\n\t\t\t\t<app-list-errors></app-list-errors>\n\n\t\t\t\t<app-dynamic-form (updateForm)=\"updateForm($event)\" [data$]=\"data$\" [structure$]=\"structure$\">\n\t\t\t\t</app-dynamic-form>\n\t\t\t\t<button (click)=\"submit()\" class=\"btn btn-lg btn-primary pull-xs-right\" type=\"submit\">\n\t\t\t\t\tRegistrar\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../libs/auth/src/lib/register/register.component.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/register/register.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _state_auth_facade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../+state/auth.facade */ "../../libs/auth/src/lib/+state/auth.facade.ts");





var structure = [
    {
        type: 'INPUT',
        name: 'username',
        placeholder: 'Usuario',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
    },
    {
        type: 'INPUT',
        name: 'email',
        placeholder: 'Email',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
    },
    {
        type: 'INPUT',
        name: 'password',
        placeholder: 'Contraseña',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        attrs: {
            type: 'password'
        }
    }
];
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(ngrxFormsFacade, facade) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.facade = facade;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.ngrxFormsFacade.setStructure(structure);
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
    };
    RegisterComponent.prototype.updateForm = function (changes) {
        this.ngrxFormsFacade.updateData(changes);
    };
    RegisterComponent.prototype.submit = function () {
        this.facade.register();
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        this.ngrxFormsFacade.initializeForm();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "../../libs/auth/src/lib/register/register.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./register.component.css */ "../../libs/auth/src/lib/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"], _state_auth_facade__WEBPACK_IMPORTED_MODULE_4__["AuthFacade"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../libs/auth/src/lib/token-interceptor.service.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/auth/src/lib/token-interceptor.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage-jwt.service */ "../../libs/auth/src/lib/local-storage-jwt.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(localStorage) {
        this.localStorage = localStorage;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var token;
        this.localStorage.getItem().subscribe(function (t) { return (token = t); });
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Token " + token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_local_storage_jwt_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageJwtService"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "../../libs/ngrx-error/src/index.ts":
/*!**********************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-error/src/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NgrxErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_error_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-error.module */ "../../libs/ngrx-error/src/lib/ngrx-error.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorModule", function() { return _lib_ngrx_error_module__WEBPACK_IMPORTED_MODULE_0__["NgrxErrorModule"]; });




/***/ }),

/***/ "../../libs/ngrx-error/src/lib/+state/ngrx-error.actions.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-error/src/lib/+state/ngrx-error.actions.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: NgrxErrorActionTypes, Throw401Error, Throw404Error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorActionTypes", function() { return NgrxErrorActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Throw401Error", function() { return Throw401Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Throw404Error", function() { return Throw404Error; });
var NgrxErrorActionTypes;
(function (NgrxErrorActionTypes) {
    NgrxErrorActionTypes["THROW_401_ERROR"] = "[ngrx-error] THROW_401_ERROR";
    NgrxErrorActionTypes["THROW_404_ERROR"] = "[ngrx-error] THROW_404_ERROR";
})(NgrxErrorActionTypes || (NgrxErrorActionTypes = {}));
var Throw401Error = /** @class */ (function () {
    function Throw401Error(payload) {
        this.payload = payload;
        this.type = NgrxErrorActionTypes.THROW_401_ERROR;
    }
    return Throw401Error;
}());

var Throw404Error = /** @class */ (function () {
    function Throw404Error(payload) {
        this.payload = payload;
        this.type = NgrxErrorActionTypes.THROW_404_ERROR;
    }
    return Throw404Error;
}());



/***/ }),

/***/ "../../libs/ngrx-error/src/lib/+state/ngrx-error.effects.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-error/src/lib/+state/ngrx-error.effects.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: NgrxErrorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorEffects", function() { return NgrxErrorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngrx-error.actions */ "../../libs/ngrx-error/src/lib/+state/ngrx-error.actions.ts");





var NgrxErrorEffects = /** @class */ (function () {
    function NgrxErrorEffects(actions) {
        this.actions = actions;
        this.error401 = this.actions
            .ofType(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorActionTypes"].THROW_401_ERROR)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_) { return ({ type: '[router] Go', payload: { path: ['/login'] } }); }));
        this.error404 = this.actions
            .ofType(_ngrx_error_actions__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorActionTypes"].THROW_404_ERROR)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_) { return ({ type: '[router] Go', payload: { path: ['/'] } }); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgrxErrorEffects.prototype, "error401", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgrxErrorEffects.prototype, "error404", void 0);
    NgrxErrorEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], NgrxErrorEffects);
    return NgrxErrorEffects;
}());



/***/ }),

/***/ "../../libs/ngrx-error/src/lib/+state/ngrx-error.facade.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-error/src/lib/+state/ngrx-error.facade.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: NgrxErrorFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorFacade", function() { return NgrxErrorFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-error.actions */ "../../libs/ngrx-error/src/lib/+state/ngrx-error.actions.ts");




var NgrxErrorFacade = /** @class */ (function () {
    function NgrxErrorFacade(store) {
        this.store = store;
    }
    NgrxErrorFacade.prototype.throw401Error = function (error) {
        this.store.dispatch(new _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__["Throw401Error"](error));
    };
    NgrxErrorFacade.prototype.throw404Error = function (error) {
        this.store.dispatch(new _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_3__["Throw404Error"](error));
    };
    NgrxErrorFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NgrxErrorFacade);
    return NgrxErrorFacade;
}());



/***/ }),

/***/ "../../libs/ngrx-error/src/lib/+state/ngrx-error.reducer.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-error/src/lib/+state/ngrx-error.reducer.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ngrxErrorInitialState, ngrxErrorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxErrorInitialState", function() { return ngrxErrorInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxErrorReducer", function() { return ngrxErrorReducer; });
/* harmony import */ var _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-error.actions */ "../../libs/ngrx-error/src/lib/+state/ngrx-error.actions.ts");

var ngrxErrorInitialState = {
    code: -1
};
function ngrxErrorReducer(state, action) {
    switch (action.type) {
        case _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_0__["NgrxErrorActionTypes"].THROW_401_ERROR: {
            return { code: action.payload.status, message: action.payload.message };
        }
        case _ngrx_error_actions__WEBPACK_IMPORTED_MODULE_0__["NgrxErrorActionTypes"].THROW_404_ERROR: {
            return { code: action.payload.status, message: action.payload.message };
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "../../libs/ngrx-error/src/lib/ngrx-error-interceptor.service.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-error/src/lib/ngrx-error-interceptor.service.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: NgrxErrorInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorInterceptorService", function() { return NgrxErrorInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/ngrx-error.facade */ "../../libs/ngrx-error/src/lib/+state/ngrx-error.facade.ts");






var NgrxErrorInterceptorService = /** @class */ (function () {
    function NgrxErrorInterceptorService(facade) {
        this.facade = facade;
    }
    NgrxErrorInterceptorService.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error, caught) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                switch (error.status) {
                    case 401:
                        _this.facade.throw401Error(error);
                        break;
                    case 404:
                        _this.facade.throw404Error(error);
                        break;
                    default:
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                        break;
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    NgrxErrorInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_5__["NgrxErrorFacade"]])
    ], NgrxErrorInterceptorService);
    return NgrxErrorInterceptorService;
}());



/***/ }),

/***/ "../../libs/ngrx-error/src/lib/ngrx-error.module.ts":
/*!**************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-error/src/lib/ngrx-error.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: NgrxErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxErrorModule", function() { return NgrxErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/ngrx-error.effects */ "../../libs/ngrx-error/src/lib/+state/ngrx-error.effects.ts");
/* harmony import */ var _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/ngrx-error.reducer */ "../../libs/ngrx-error/src/lib/+state/ngrx-error.reducer.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_error_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngrx-error-interceptor.service */ "../../libs/ngrx-error/src/lib/ngrx-error-interceptor.service.ts");
/* harmony import */ var _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/ngrx-error.facade */ "../../libs/ngrx-error/src/lib/+state/ngrx-error.facade.ts");









var NgrxErrorModule = /** @class */ (function () {
    function NgrxErrorModule() {
    }
    NgrxErrorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('ngrxError', _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_5__["ngrxErrorReducer"], { initialState: _state_ngrx_error_reducer__WEBPACK_IMPORTED_MODULE_5__["ngrxErrorInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorEffects"]])
            ],
            providers: [
                _state_ngrx_error_facade__WEBPACK_IMPORTED_MODULE_8__["NgrxErrorFacade"],
                _state_ngrx_error_effects__WEBPACK_IMPORTED_MODULE_4__["NgrxErrorEffects"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _ngrx_error_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["NgrxErrorInterceptorService"],
                    multi: true
                }
            ]
        })
    ], NgrxErrorModule);
    return NgrxErrorModule;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/index.ts":
/*!**********************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: NgrxFormsModule, NgrxFormsActionTypes, SetData, UpdateData, SetStructure, SetErrors, InitializeErrors, InitializeForm, ResetForm, ngrxFormsInitialState, ngrxFormsReducer, NgrxFormsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_forms_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-forms.module */ "../../libs/ngrx-forms/src/lib/ngrx-forms.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsModule", function() { return _lib_ngrx_forms_module__WEBPACK_IMPORTED_MODULE_0__["NgrxFormsModule"]; });

/* harmony import */ var _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.actions */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsActionTypes", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetData", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["SetData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateData", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["UpdateData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetStructure", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["SetStructure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetErrors", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["SetErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitializeErrors", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["InitializeErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InitializeForm", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["InitializeForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetForm", function() { return _lib_state_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["ResetForm"]; });

/* harmony import */ var _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.reducer */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsInitialState", function() { return _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsReducer", function() { return _lib_state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_2__["ngrxFormsReducer"]; });

/* harmony import */ var _lib_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/ngrx-forms.facade */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsFacade", function() { return _lib_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_3__["NgrxFormsFacade"]; });







/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.actions.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/+state/ngrx-forms.actions.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: NgrxFormsActionTypes, SetData, UpdateData, SetStructure, SetErrors, InitializeErrors, InitializeForm, ResetForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsActionTypes", function() { return NgrxFormsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetData", function() { return SetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateData", function() { return UpdateData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStructure", function() { return SetStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetErrors", function() { return SetErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeErrors", function() { return InitializeErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeForm", function() { return InitializeForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetForm", function() { return ResetForm; });
var NgrxFormsActionTypes;
(function (NgrxFormsActionTypes) {
    NgrxFormsActionTypes["SET_DATA"] = "[ngrxForms] SET_DATA";
    NgrxFormsActionTypes["UPDATE_DATA"] = "[ngrxForms] UPDATE_DATA";
    NgrxFormsActionTypes["SET_STRUCTURE"] = "[ngrxForms] SET_STRUCTURE";
    NgrxFormsActionTypes["SET_ERRORS"] = "[ngrxForms] SET_ERRORS";
    NgrxFormsActionTypes["INITIALIZE_ERRORS"] = "[ngrxForms] INITIALIZE_ERRORS";
    NgrxFormsActionTypes["INITIALIZE_FORM"] = "[ngrxForms] INITIALIZE_FORM";
    NgrxFormsActionTypes["RESET_FORM"] = "[ngrxForms] RESET_FORM";
})(NgrxFormsActionTypes || (NgrxFormsActionTypes = {}));
var SetData = /** @class */ (function () {
    function SetData(payload) {
        this.payload = payload;
        this.type = NgrxFormsActionTypes.SET_DATA;
    }
    return SetData;
}());

var UpdateData = /** @class */ (function () {
    function UpdateData(payload) {
        this.payload = payload;
        this.type = NgrxFormsActionTypes.UPDATE_DATA;
    }
    return UpdateData;
}());

var SetStructure = /** @class */ (function () {
    function SetStructure(payload) {
        this.payload = payload;
        this.type = NgrxFormsActionTypes.SET_STRUCTURE;
    }
    return SetStructure;
}());

var SetErrors = /** @class */ (function () {
    function SetErrors(payload) {
        this.payload = payload;
        this.type = NgrxFormsActionTypes.SET_ERRORS;
    }
    return SetErrors;
}());

var InitializeErrors = /** @class */ (function () {
    function InitializeErrors() {
        this.type = NgrxFormsActionTypes.INITIALIZE_ERRORS;
    }
    return InitializeErrors;
}());

var InitializeForm = /** @class */ (function () {
    function InitializeForm() {
        this.type = NgrxFormsActionTypes.INITIALIZE_FORM;
    }
    return InitializeForm;
}());

var ResetForm = /** @class */ (function () {
    function ResetForm() {
        this.type = NgrxFormsActionTypes.RESET_FORM;
    }
    return ResetForm;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.effects.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/+state/ngrx-forms.effects.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: NgrxFormsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsEffects", function() { return NgrxFormsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-forms.actions */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var NgrxFormsEffects = /** @class */ (function () {
    function NgrxFormsEffects(actions) {
        this.actions = actions;
        this.setData = this.actions
            .ofType(_ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["NgrxFormsActionTypes"].SET_DATA, _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["NgrxFormsActionTypes"].UPDATE_DATA)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return ({
            type: _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["NgrxFormsActionTypes"].INITIALIZE_ERRORS
        }); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgrxFormsEffects.prototype, "setData", void 0);
    NgrxFormsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], NgrxFormsEffects);
    return NgrxFormsEffects;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.facade.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/+state/ngrx-forms.facade.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: NgrxFormsFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsFacade", function() { return NgrxFormsFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-forms.actions */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.actions.ts");
/* harmony import */ var _ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngrx-forms.selectors */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.selectors.ts");





var NgrxFormsFacade = /** @class */ (function () {
    function NgrxFormsFacade(store) {
        this.store = store;
        this.data$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_4__["ngrxFormsQuery"].getData);
        this.structure$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_4__["ngrxFormsQuery"].getStructure);
        this.errors$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_4__["ngrxFormsQuery"].getErrors);
        this.touched$ = this.store.select(_ngrx_forms_selectors__WEBPACK_IMPORTED_MODULE_4__["ngrxFormsQuery"].getTouchedForm);
    }
    NgrxFormsFacade.prototype.setStructure = function (structure) {
        this.store.dispatch(new _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["SetStructure"](structure));
    };
    NgrxFormsFacade.prototype.setData = function (data) {
        this.store.dispatch(new _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["SetData"](data));
    };
    NgrxFormsFacade.prototype.updateData = function (data) {
        this.store.dispatch(new _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateData"](data));
    };
    NgrxFormsFacade.prototype.initializeForm = function () {
        this.store.dispatch(new _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["InitializeForm"]());
    };
    NgrxFormsFacade.prototype.initializeErrors = function () {
        this.store.dispatch(new _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["InitializeErrors"]());
    };
    NgrxFormsFacade.prototype.resetForm = function () {
        this.store.dispatch(new _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_3__["ResetForm"]());
    };
    NgrxFormsFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], NgrxFormsFacade);
    return NgrxFormsFacade;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.reducer.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/+state/ngrx-forms.reducer.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ngrxFormsInitialState, ngrxFormsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsInitialState", function() { return ngrxFormsInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsReducer", function() { return ngrxFormsReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-forms.actions */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.actions.ts");


var ngrxFormsInitialState = {
    data: {},
    structure: [],
    valid: true,
    errors: {},
    touched: false
};
function ngrxFormsReducer(state, action) {
    switch (action.type) {
        case _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsActionTypes"].SET_DATA: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: action.payload });
        }
        case _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsActionTypes"].UPDATE_DATA: {
            var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.data, action.payload);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: data, touched: true });
        }
        case _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsActionTypes"].SET_STRUCTURE: {
            var structure = action.payload.slice(0);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { structure: structure });
        }
        case _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsActionTypes"].SET_ERRORS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { errors: action.payload });
        }
        case _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsActionTypes"].INITIALIZE_ERRORS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { errors: {} });
        }
        case _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsActionTypes"].INITIALIZE_FORM: {
            return ngrxFormsInitialState;
        }
        case _ngrx_forms_actions__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsActionTypes"].RESET_FORM: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { touched: false });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.selectors.ts":
/*!************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/+state/ngrx-forms.selectors.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: getStructure, getData, isValid, getErrors, getTouchedForm, ngrxFormsQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStructure", function() { return getStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrors", function() { return getErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchedForm", function() { return getTouchedForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngrxFormsQuery", function() { return ngrxFormsQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");

var getNgrxForms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('ngrxForms');
var getStructure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, function (state) { return state.structure; });
var getData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, function (state) { return state.data; });
var isValid = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, function (state) { return state.valid; });
var getErrors = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, function (state) { return state.errors; });
var getTouchedForm = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getNgrxForms, function (state) { return state.touched; });
var ngrxFormsQuery = {
    getStructure: getStructure,
    getData: getData,
    isValid: isValid,
    getErrors: getErrors,
    getTouchedForm: getTouchedForm
};


/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/dynamic-form/dynamic-field.directive.ts":
/*!*********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/dynamic-form/dynamic-field.directive.ts ***!
  \*********************************************************************************************************************************************/
/*! exports provided: DynamicFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fields_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fields/input/input.component */ "../../libs/ngrx-forms/src/lib/fields/input/input.component.ts");
/* harmony import */ var _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fields/textarea/textarea.component */ "../../libs/ngrx-forms/src/lib/fields/textarea/textarea.component.ts");





var componentsMapper = {
    INPUT: _fields_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"],
    TEXTAREA: _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_4__["TextareaComponent"]
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnChanges = function () {
        if (this.component) {
            this.component.instance.field = this.field;
            this.component.instance.group = this.group;
        }
    };
    DynamicFieldDirective.prototype.ngOnInit = function () {
        var component = this.resolver.resolveComponentFactory(componentsMapper[this.field.type]);
        this.component = this.container.createComponent(component);
        this.component.instance.field = this.field;
        this.component.instance.group = this.group;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicFieldDirective.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appDynamicField]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.css":
/*!*********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25ncngtZm9ybXMvc3JjL2xpYi9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"dynamic-form\" [formGroup]=\"form\" autocomplete=\"off\">\n\t<ng-container *ngFor=\"let field of (structure$|async)\" appDynamicField [field]=\"field\" [group]=\"form\">\n\t</ng-container>\n</form>"

/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(fb) {
        var _this = this;
        this.fb = fb;
        this.updateForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formBuilder = function (structure) {
            var group = _this.fb.group({});
            structure.forEach(function (field) { return group.addControl(field.name, _this.control(field)); });
            return group;
        };
        this.control = function (field) {
            return _this.fb.control('', field.validator);
        };
        this.patchValue = function (_a) {
            var form = _a[0], data = _a[1];
            !!data ? form.patchValue(data, { emitEvent: false }) : form.patchValue({}, { emitEvent: false });
        };
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.structure$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.formBuilder), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (f) { return (_this.form = f); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (f) { return _this.listenFormChanges(f); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(this.patchValue);
        if (this.touchedForm$) {
            this.touchedForm$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (t) { return !t && !!_this.form; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
                .subscribe(function (_) { return _this.form.reset(); });
        }
    };
    DynamicFormComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    DynamicFormComponent.prototype.listenFormChanges = function (form) {
        var _this = this;
        form.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (changes) { return _this.updateForm.emit(changes); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DynamicFormComponent.prototype, "structure$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DynamicFormComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], DynamicFormComponent.prototype, "touchedForm$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], DynamicFormComponent.prototype, "updateForm", void 0);
    DynamicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-form',
            template: __webpack_require__(/*! ./dynamic-form.component.html */ "../../libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./dynamic-form.component.css */ "../../libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/fields/input/input.component.css":
/*!**************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/fields/input/input.component.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25ncngtZm9ybXMvc3JjL2xpYi9maWVsZHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/fields/input/input.component.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/fields/input/input.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset [formGroup]=\"group\" class=\"form-group\">\n\t<input [formControlName]=\"field?.name\" [attr.placeholder]=\"field?.placeholder\" class=\"form-control form-control-lg\" [attr.type]=\"field?.attrs?.type || 'text'\"\n\t/>\n</fieldset>"

/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/fields/input/input.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/fields/input/input.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");



var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InputComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], InputComponent.prototype, "group", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "../../libs/ngrx-forms/src/lib/fields/input/input.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./input.component.css */ "../../libs/ngrx-forms/src/lib/fields/input/input.component.css")]
        })
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/fields/textarea/textarea.component.css":
/*!********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/fields/textarea/textarea.component.css ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25ncngtZm9ybXMvc3JjL2xpYi9maWVsZHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/fields/textarea/textarea.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/fields/textarea/textarea.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset [formGroup]=\"group\" class=\"form-group\">\n\t<textarea class=\"form-control form-control-lg\" [attr.rows]=\"field?.attrs?.rows || 5\" [formControlName]=\"field?.name\" [attr.placeholder]=\"field?.placeholder\">\n\t</textarea>\n</fieldset>"

/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/fields/textarea/textarea.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/fields/textarea/textarea.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: TextareaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaComponent", function() { return TextareaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");



var TextareaComponent = /** @class */ (function () {
    function TextareaComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextareaComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], TextareaComponent.prototype, "group", void 0);
    TextareaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-textarea',
            template: __webpack_require__(/*! ./textarea.component.html */ "../../libs/ngrx-forms/src/lib/fields/textarea/textarea.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./textarea.component.css */ "../../libs/ngrx-forms/src/lib/fields/textarea/textarea.component.css")]
        })
    ], TextareaComponent);
    return TextareaComponent;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/list-errors/list-errors.component.css":
/*!*******************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/list-errors/list-errors.component.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL25ncngtZm9ybXMvc3JjL2xpYi9saXN0LWVycm9ycy9saXN0LWVycm9ycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/list-errors/list-errors.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/list-errors/list-errors.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errors?.length > 0\">\n\t<li *ngFor=\"let error of errors\">\n\t\t{{ error }}\n\t</li>\n</ul>"

/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/list-errors/list-errors.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/list-errors/list-errors.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+state/ngrx-forms.facade */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.facade.ts");




var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent(ngrxFormsFacade, changeDetectorRef) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.changeDetectorRef = changeDetectorRef;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ListErrorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngrxFormsFacade.errors$.subscribe(function (e) {
            _this.errors = Object.keys(e || {}).map(function (key) { return key + " " + e[key]; });
            _this.changeDetectorRef.markForCheck();
        });
    };
    ListErrorsComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.ngrxFormsFacade.initializeErrors();
    };
    ListErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-errors',
            template: __webpack_require__(/*! ./list-errors.component.html */ "../../libs/ngrx-forms/src/lib/list-errors/list-errors.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./list-errors.component.css */ "../../libs/ngrx-forms/src/lib/list-errors/list-errors.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_3__["NgrxFormsFacade"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());



/***/ }),

/***/ "../../libs/ngrx-forms/src/lib/ngrx-forms.module.ts":
/*!**************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-forms/src/lib/ngrx-forms.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: NgrxFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxFormsModule", function() { return NgrxFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/ngrx-forms.effects */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.effects.ts");
/* harmony import */ var _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/ngrx-forms.facade */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.facade.ts");
/* harmony import */ var _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/ngrx-forms.reducer */ "../../libs/ngrx-forms/src/lib/+state/ngrx-forms.reducer.ts");
/* harmony import */ var _dynamic_form_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dynamic-form/dynamic-field.directive */ "../../libs/ngrx-forms/src/lib/dynamic-form/dynamic-field.directive.ts");
/* harmony import */ var _dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dynamic-form/dynamic-form.component */ "../../libs/ngrx-forms/src/lib/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _fields_input_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fields/input/input.component */ "../../libs/ngrx-forms/src/lib/fields/input/input.component.ts");
/* harmony import */ var _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fields/textarea/textarea.component */ "../../libs/ngrx-forms/src/lib/fields/textarea/textarea.component.ts");
/* harmony import */ var _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-errors/list-errors.component */ "../../libs/ngrx-forms/src/lib/list-errors/list-errors.component.ts");














var NgrxFormsModule = /** @class */ (function () {
    function NgrxFormsModule() {
    }
    NgrxFormsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('ngrxForms', _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_8__["ngrxFormsReducer"], { initialState: _state_ngrx_forms_reducer__WEBPACK_IMPORTED_MODULE_8__["ngrxFormsInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsEffects"]])
            ],
            providers: [_state_ngrx_forms_effects__WEBPACK_IMPORTED_MODULE_6__["NgrxFormsEffects"], _state_ngrx_forms_facade__WEBPACK_IMPORTED_MODULE_7__["NgrxFormsFacade"]],
            declarations: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__["DynamicFormComponent"], _dynamic_form_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_9__["DynamicFieldDirective"], _fields_input_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__["TextareaComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_13__["ListErrorsComponent"]],
            entryComponents: [_fields_input_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"], _fields_textarea_textarea_component__WEBPACK_IMPORTED_MODULE_12__["TextareaComponent"]],
            exports: [_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_10__["DynamicFormComponent"], _list_errors_list_errors_component__WEBPACK_IMPORTED_MODULE_13__["ListErrorsComponent"]]
        })
    ], NgrxFormsModule);
    return NgrxFormsModule;
}());



/***/ }),

/***/ "../../libs/ngrx-router/src/index.ts":
/*!***********************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-router/src/index.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NgrxRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngrx_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngrx-router.module */ "../../libs/ngrx-router/src/lib/ngrx-router.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgrxRouterModule", function() { return _lib_ngrx_router_module__WEBPACK_IMPORTED_MODULE_0__["NgrxRouterModule"]; });




/***/ }),

/***/ "../../libs/ngrx-router/src/lib/+state/custom-serializer.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-router/src/lib/+state/custom-serializer.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        var state = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        var params = state.params;
        return { url: url, queryParams: queryParams, params: params };
    };
    return CustomSerializer;
}());



/***/ }),

/***/ "../../libs/ngrx-router/src/lib/+state/router.effects.ts":
/*!*******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-router/src/lib/+state/router.effects.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");






var RouterEffects = /** @class */ (function () {
    function RouterEffects(action$, router, location) {
        var _this = this;
        this.action$ = action$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.action$
            .ofType('[router] Go')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            return _this.router.navigate(path, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ queryParams: queryParams }, extras));
        }));
        this.navigateBack$ = this.action$.ofType('[router] Back').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.location.back(); }));
        this.navigateForward$ = this.action$.ofType('[router] Forward').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.location.forward(); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], RouterEffects);
    return RouterEffects;
}());



/***/ }),

/***/ "../../libs/ngrx-router/src/lib/ngrx-router.module.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/ngrx-router/src/lib/ngrx-router.module.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: NgrxRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxRouterModule", function() { return NgrxRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/router-store */ "../../node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_custom_serializer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./+state/custom-serializer */ "../../libs/ngrx-router/src/lib/+state/custom-serializer.ts");
/* harmony import */ var _state_router_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/router.effects */ "../../libs/ngrx-router/src/lib/+state/router.effects.ts");








var NgrxRouterModule = /** @class */ (function () {
    function NgrxRouterModule() {
    }
    NgrxRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('router', _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["routerReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_state_router_effects__WEBPACK_IMPORTED_MODULE_7__["RouterEffects"]]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' })
            ],
            providers: [_state_router_effects__WEBPACK_IMPORTED_MODULE_7__["RouterEffects"], [{ provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_4__["RouterStateSerializer"], useClass: _state_custom_serializer__WEBPACK_IMPORTED_MODULE_6__["CustomSerializer"] }]]
        })
    ], NgrxRouterModule);
    return NgrxRouterModule;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"@angular-ngrx-nx-realworld-example-app/article": [
		"../../libs/article/src/lib/article.module.ts",
		"common",
		"angular-ngrx-nx-realworld-example-app-article"
	],
	"@angular-ngrx-nx-realworld-example-app/editor": [
		"../../libs/editor/src/lib/editor.module.ts",
		"common",
		"angular-ngrx-nx-realworld-example-app-editor"
	],
	"@angular-ngrx-nx-realworld-example-app/home": [
		"../../libs/home/src/lib/home.module.ts",
		"default~angular-ngrx-nx-realworld-example-app-home~angular-ngrx-nx-realworld-example-app-profile",
		"common",
		"angular-ngrx-nx-realworld-example-app-home"
	],
	"@angular-ngrx-nx-realworld-example-app/mercadopago": [
		"../../libs/mercadopago/src/lib/mercadopago.module.ts",
		"common"
	],
	"@angular-ngrx-nx-realworld-example-app/profile": [
		"../../libs/profile/src/lib/profile.module.ts",
		"default~angular-ngrx-nx-realworld-example-app-home~angular-ngrx-nx-realworld-example-app-profile",
		"common",
		"angular-ngrx-nx-realworld-example-app-profile"
	],
	"@angular-ngrx-nx-realworld-example-app/settings": [
		"../../libs/settings/src/lib/settings.module.ts",
		"angular-ngrx-nx-realworld-example-app-settings"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NvbmR1aXQvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar [isLoggedIn]=\"isLoggedIn$ | async\" [user]=\"user$ | async\"></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(authFacade, localStorageJwtService) {
        this.authFacade = authFacade;
        this.localStorageJwtService = localStorageJwtService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user$ = this.authFacade.user$;
        this.isLoggedIn$ = this.authFacade.isLoggedIn$;
        this.localStorageJwtService
            .getItem()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (token) { return !!token; }))
            .subscribe(function (token) { return _this.authFacade.user(); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["AuthFacade"], _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["LocalStorageJwtService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-error */ "../../libs/ngrx-error/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-router */ "../../libs/ngrx-router/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ "../../node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _nrwl_nx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nrwl/nx */ "../../node_modules/@nrwl/nx/esm5/nrwl-nx.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngrx-store-freeze */ "../../node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__["ApiModule"],
                _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_2__["AuthModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _nrwl_nx__WEBPACK_IMPORTED_MODULE_11__["NxModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: '', loadChildren: '@angular-ngrx-nx-realworld-example-app/home#HomeModule' },
                    { path: 'article/:slug', loadChildren: '@angular-ngrx-nx-realworld-example-app/article#ArticleModule' },
                    { path: 'settings', loadChildren: '@angular-ngrx-nx-realworld-example-app/settings#SettingsModule' },
                    { path: 'editor', loadChildren: '@angular-ngrx-nx-realworld-example-app/editor#EditorModule' },
                    { path: 'profile/:username', loadChildren: '@angular-ngrx-nx-realworld-example-app/profile#ProfileModule' },
                    { path: 'mp/payment/success', loadChildren: '@angular-ngrx-nx-realworld-example-app/mercadopago#MercadopagoModule' }
                ], {
                    initialNavigation: 'enabled',
                    useHash: true
                }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["StoreModule"].forRoot({}, { metaReducers: !_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production ? [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_12__["storeFreeze"]] : [] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__["StoreDevtoolsModule"].instrument() : [],
                _angular_ngrx_nx_realworld_example_app_ngrx_router__WEBPACK_IMPORTED_MODULE_4__["NgrxRouterModule"],
                _angular_ngrx_nx_realworld_example_app_ngrx_error__WEBPACK_IMPORTED_MODULE_3__["NgrxErrorModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _layout_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NvbmR1aXQvc3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n\t<div class=\"container\">\n\t\t<a href=\"/\" class=\"logo-font\">conduit</a>\n\t\t<span class=\"attribution\">\n\t\t\tAn interactive learning project from\n\t\t\t<a href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design licensed under MIT.\n\t\t</span>\n\t</div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2NvbmR1aXQvc3JjL2FwcC9sYXlvdXQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light\">\n\t<div class=\"container\">\n\t\t<a class=\"navbar-brand\" routerLink=\"/\">Mercado de Libros</a>\n\t\t<!-- Logged out user -->\n\t\t<ul *ngIf=\"!isLoggedIn\" class=\"nav navbar-nav pull-xs-right\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<!-- Add \"active\" class when you're on that page\" -->\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/\">Inicio</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Ingresa</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\">Registrate</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t\t<!-- Logged in user -->\n\t\t<ul *ngIf=\"isLoggedIn\" class=\"nav navbar-nav pull-xs-right\">\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<!-- Add \"active\" class when you're on that page\" -->\n\t\t\t\t<a class=\"nav-link active\" [routerLink]=\"['/']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Inicio</a>\n\t\t\t</li>\n\t\t\t<!--li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/editor\" routerLinkActive=\"active\">\n\t\t\t\t\t<i class=\"ion-compose\"></i>&nbsp;New Post\n\t\t\t\t</a>\n\t\t\t</li-->\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/settings\" routerLinkActive=\"active\">\n\t\t\t\t\t<i class=\"ion-gear-a\"></i>&nbsp;Ajustes\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/profile', user.username]\" routerLinkActive=\"active\">\n\t\t\t\t\t<img [src]=\"user.image\" *ngIf=\"user.image\" class=\"user-pic\" /> {{ user.username }}\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavbarComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavbarComponent.prototype, "isLoggedIn", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layout/navbar/navbar.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/layout/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    api_url: 'http://localhost:3000/api'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/apps/conduit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map