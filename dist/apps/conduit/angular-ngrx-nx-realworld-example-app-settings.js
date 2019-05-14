(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-ngrx-nx-realworld-example-app-settings"],{

/***/ "../../libs/settings/src/lib/+state/settings.actions.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/settings/src/lib/+state/settings.actions.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SettingsActionTypes, EditSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return SettingsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSettings", function() { return EditSettings; });
var SettingsActionTypes;
(function (SettingsActionTypes) {
    SettingsActionTypes["EDIT_SETTINGS"] = "[settings] EDIT_SETTINGS";
})(SettingsActionTypes || (SettingsActionTypes = {}));
var EditSettings = /** @class */ (function () {
    function EditSettings() {
        this.type = SettingsActionTypes.EDIT_SETTINGS;
    }
    return EditSettings;
}());



/***/ }),

/***/ "../../libs/settings/src/lib/+state/settings.effects.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/settings/src/lib/+state/settings.effects.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SettingsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return SettingsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../settings.service */ "../../libs/settings/src/lib/settings.service.ts");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings.actions */ "../../libs/settings/src/lib/+state/settings.actions.ts");









var SettingsEffects = /** @class */ (function () {
    function SettingsEffects(actions, settingsService, authFacade, ngrxFormsFacade) {
        var _this = this;
        this.actions = actions;
        this.settingsService = settingsService;
        this.authFacade = authFacade;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.editSettings = this.actions.ofType(_settings_actions__WEBPACK_IMPORTED_MODULE_8__["SettingsActionTypes"].EDIT_SETTINGS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.ngrxFormsFacade.data$, this.authFacade.user$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var _ = _a[0], data = _a[1], user = _a[2];
            return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { image: data.image, username: data.username, bio: data.bio, pass: data.pass, email: data.email }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (data) {
            return _this.settingsService
                .update(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (result) { return [new _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["GetUser"](), { type: '[router] Go', payload: { path: ['profile', result.username] } }]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (result) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__["SetErrors"](result.error.errors)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SettingsEffects.prototype, "editSettings", void 0);
    SettingsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _settings_service__WEBPACK_IMPORTED_MODULE_7__["SettingsService"],
            _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["AuthFacade"],
            _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsFacade"]])
    ], SettingsEffects);
    return SettingsEffects;
}());



/***/ }),

/***/ "../../libs/settings/src/lib/+state/settings.reducer.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/settings/src/lib/+state/settings.reducer.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: settingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
function settingsReducer(state, action) {
    switch (action.type) {
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "../../libs/settings/src/lib/settings.module.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/settings/src/lib/settings.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "../../libs/settings/src/lib/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_settings_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/settings.effects */ "../../libs/settings/src/lib/+state/settings.effects.ts");
/* harmony import */ var _state_settings_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./+state/settings.reducer */ "../../libs/settings/src/lib/+state/settings.reducer.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "../../libs/settings/src/lib/settings/settings.component.ts");












var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: '', pathMatch: 'full', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], canActivate: [_angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]] }
                ]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('settings', _state_settings_reducer__WEBPACK_IMPORTED_MODULE_10__["settingsReducer"], { initialState: {} }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_state_settings_effects__WEBPACK_IMPORTED_MODULE_9__["SettingsEffects"]])
            ],
            declarations: [_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"]],
            providers: [_state_settings_effects__WEBPACK_IMPORTED_MODULE_9__["SettingsEffects"], _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "../../libs/settings/src/lib/settings.service.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/settings/src/lib/settings.service.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var SettingsService = /** @class */ (function () {
    function SettingsService(apiService) {
        this.apiService = apiService;
    }
    SettingsService.prototype.update = function (user) {
        return this.apiService.put('/user', { user: user }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.user; }));
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "../../libs/settings/src/lib/settings/settings.component.css":
/*!***********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/settings/src/lib/settings/settings.component.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-button-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2V0dGluZ3Mvc3JjL2xpYi9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtDQUMzQiIsImZpbGUiOiJsaWJzL3NldHRpbmdzL3NyYy9saWIvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIl19 */"

/***/ }),

/***/ "../../libs/settings/src/lib/settings/settings.component.html":
/*!************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/settings/src/lib/settings/settings.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings-page\">\n\t<div class=\"container page\">\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-md-6 offset-md-3 col-xs-12\">\n\t\t\t\t<h1 class=\"text-xs-center\">Your Settings</h1>\n\n\t\t\t\t<app-list-errors></app-list-errors>\n\n\t\t\t\t<app-dynamic-form (updateForm)=\"updateForm($event)\" [data$]=\"data$\" [structure$]=\"structure$\">\n\t\t\t\t</app-dynamic-form>\n\t\t\t\t<div class=\"edit-button-container\">\n\t\t\t\t\t<button (click)=\"submit()\" class=\"btn btn-lg btn-primary pull-xs-right\" type=\"submit\">\n\t\t\t\t\t\tUpdate Settings\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t\t<hr />\n\n\t\t\t\t<!--button class=\"btn btn-outline-danger\" (click)=\"logout()\">\n\t\t\t\t\tOr click here to logout.\n\t\t\t\t</button-->\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../libs/settings/src/lib/settings/settings.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/settings/src/lib/settings/settings.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_settings_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../+state/settings.actions */ "../../libs/settings/src/lib/+state/settings.actions.ts");








var structure = [
    {
        type: 'INPUT',
        name: 'image',
        placeholder: 'URL of profile picture',
        validator: []
    },
    {
        type: 'INPUT',
        name: 'username',
        placeholder: 'Your Name',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
    },
    {
        type: 'TEXTAREA',
        name: 'bio',
        placeholder: 'Short bio about you',
        validator: []
    },
    {
        type: 'INPUT',
        name: 'email',
        placeholder: 'Email',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
    },
    {
        type: 'INPUT',
        name: 'password',
        placeholder: 'New Password',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        attrs: {
            type: 'password'
        }
    }
];
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(store, router, authFacade, ngrxFormsFacade) {
        this.store = store;
        this.router = router;
        this.authFacade = authFacade;
        this.ngrxFormsFacade = ngrxFormsFacade;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngrxFormsFacade.setStructure(structure);
        this.authFacade.user$.subscribe(function (user) { return _this.ngrxFormsFacade.setData(user); });
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
    };
    SettingsComponent.prototype.updateForm = function (changes) {
        this.ngrxFormsFacade.updateData(changes);
    };
    SettingsComponent.prototype.submit = function () {
        this.store.dispatch(new _state_settings_actions__WEBPACK_IMPORTED_MODULE_7__["EditSettings"]());
    };
    SettingsComponent.prototype.logout = function () {
        this.authFacade.logout();
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "../../libs/settings/src/lib/settings/settings.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./settings.component.css */ "../../libs/settings/src/lib/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["AuthFacade"],
            _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsFacade"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=angular-ngrx-nx-realworld-example-app-settings.js.map