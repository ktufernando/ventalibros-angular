(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-ngrx-nx-realworld-example-app-home"],{

/***/ "../../libs/home/src/lib/+state/home.actions.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/+state/home.actions.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: HomeActionsType, LoadTags, LoadTagsSuccess, LoadTagsFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeActionsType", function() { return HomeActionsType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTags", function() { return LoadTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTagsSuccess", function() { return LoadTagsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadTagsFail", function() { return LoadTagsFail; });
var HomeActionsType;
(function (HomeActionsType) {
    HomeActionsType["LOAD_TAGS"] = "[home] LOAD_TAGS";
    HomeActionsType["LOAD_TAGS_SUCCESS"] = "[home] LOAD_TAGS_SUCCESS";
    HomeActionsType["LOAD_TAGS_FAIL"] = "[home] LOAD_TAGS_FAIL";
})(HomeActionsType || (HomeActionsType = {}));
var LoadTags = /** @class */ (function () {
    function LoadTags() {
        this.type = HomeActionsType.LOAD_TAGS;
    }
    return LoadTags;
}());

var LoadTagsSuccess = /** @class */ (function () {
    function LoadTagsSuccess(payload) {
        this.payload = payload;
        this.type = HomeActionsType.LOAD_TAGS_SUCCESS;
    }
    return LoadTagsSuccess;
}());

var LoadTagsFail = /** @class */ (function () {
    function LoadTagsFail(payload) {
        this.payload = payload;
        this.type = HomeActionsType.LOAD_TAGS_FAIL;
    }
    return LoadTagsFail;
}());



/***/ }),

/***/ "../../libs/home/src/lib/+state/home.effects.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/+state/home.effects.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: HomeEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeEffects", function() { return HomeEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home.service */ "../../libs/home/src/lib/home.service.ts");
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.actions */ "../../libs/home/src/lib/+state/home.actions.ts");







var HomeEffects = /** @class */ (function () {
    function HomeEffects(actions, homeService) {
        var _this = this;
        this.actions = actions;
        this.homeService = homeService;
        this.loadTags = this.actions
            .ofType(_home_actions__WEBPACK_IMPORTED_MODULE_6__["HomeActionsType"].LOAD_TAGS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.homeService
                .getTags()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (results) { return new _home_actions__WEBPACK_IMPORTED_MODULE_6__["LoadTagsSuccess"](results.tags); }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _home_actions__WEBPACK_IMPORTED_MODULE_6__["LoadTagsFail"](error)); })));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HomeEffects.prototype, "loadTags", void 0);
    HomeEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"], _home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"]])
    ], HomeEffects);
    return HomeEffects;
}());



/***/ }),

/***/ "../../libs/home/src/lib/+state/home.facade.ts":
/*!*********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/+state/home.facade.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: HomeFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFacade", function() { return HomeFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _home_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.selectors */ "../../libs/home/src/lib/+state/home.selectors.ts");
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.actions */ "../../libs/home/src/lib/+state/home.actions.ts");





var HomeFacade = /** @class */ (function () {
    function HomeFacade(store) {
        this.store = store;
        this.home$ = this.store.select(_home_selectors__WEBPACK_IMPORTED_MODULE_3__["homeQuery"].getHome);
        this.tags$ = this.store.select(_home_selectors__WEBPACK_IMPORTED_MODULE_3__["homeQuery"].getTags);
    }
    HomeFacade.prototype.loadTags = function () {
        this.store.dispatch(new _home_actions__WEBPACK_IMPORTED_MODULE_4__["LoadTags"]());
    };
    HomeFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HomeFacade);
    return HomeFacade;
}());



/***/ }),

/***/ "../../libs/home/src/lib/+state/home.reducer.ts":
/*!**********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/+state/home.reducer.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: homeInitialState, homeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeInitialState", function() { return homeInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeReducer", function() { return homeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.actions */ "../../libs/home/src/lib/+state/home.actions.ts");


var homeInitialState = {
    tags: []
};
function homeReducer(state, action) {
    if (state === void 0) { state = homeInitialState; }
    switch (action.type) {
        case _home_actions__WEBPACK_IMPORTED_MODULE_1__["HomeActionsType"].LOAD_TAGS_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { tags: action.payload });
        }
        case _home_actions__WEBPACK_IMPORTED_MODULE_1__["HomeActionsType"].LOAD_TAGS_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { tags: [] });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "../../libs/home/src/lib/+state/home.selectors.ts":
/*!************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/+state/home.selectors.ts ***!
  \************************************************************************************************************************/
/*! exports provided: getHome, getTags, homeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHome", function() { return getHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeQuery", function() { return homeQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");

var getHome = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('home');
var getTags = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getHome, function (state) { return state.tags; });
var homeQuery = {
    getTags: getTags,
    getHome: getHome
};


/***/ }),

/***/ "../../libs/home/src/lib/home-resolver.service.ts":
/*!************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/home-resolver.service.ts ***!
  \************************************************************************************************************************/
/*! exports provided: HomeResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResolverService", function() { return HomeResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _state_home_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/home.facade */ "../../libs/home/src/lib/+state/home.facade.ts");




var HomeResolverService = /** @class */ (function () {
    function HomeResolverService(facade) {
        this.facade = facade;
    }
    HomeResolverService.prototype.resolve = function (route, state) {
        this.facade.loadTags();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    HomeResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_home_facade__WEBPACK_IMPORTED_MODULE_3__["HomeFacade"]])
    ], HomeResolverService);
    return HomeResolverService;
}());



/***/ }),

/***/ "../../libs/home/src/lib/home.component.css":
/*!******************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/home.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  cursor: pointer;\n}\n\n.tag-pill {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvaG9tZS9zcmMvbGliL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJsaWJzL2hvbWUvc3JjL2xpYi9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWctcGlsbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "../../libs/home/src/lib/home.component.html":
/*!*******************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/home.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\n\n\t<div class=\"banner\">\n\t\t<div class=\"container\">\n\t\t\t<h1 class=\"logo-font\">Mercado de libros</h1>\n\t\t\t<p>El lugar donde podes conseguir libros ilegalmente.</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container page\">\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-md-9\">\n\t\t\t\t<div class=\"feed-toggle\">\n\t\t\t\t\t<ul class=\"nav nav-pills outline-active\">\n\t\t\t\t\t\t<!--li class=\"nav-item\">\n\t\t\t\t\t\t\t<a [ngClass]=\"{'active': (listConfig$|async)?.type === 'FEED'}\" class=\"nav-link\" (click)=\"setListTo('FEED')\">Your Feed</a>\n\t\t\t\t\t\t</li-->\n\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t<a [ngClass]=\"{'active': (listConfig$|async)?.type === 'ALL' && !(listConfig$|async).filters?.tag}\" class=\"nav-link\" (click)=\"setListTo('ALL')\">Nuestra colección</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"nav-item\" [hidden]=\"!(listConfig$|async).filters?.tag\">\n\t\t\t\t\t\t\t<a class=\"nav-link active\">\n\t\t\t\t\t\t\t\t<i class=\"ion-pound\"></i> {{ (listConfig$|async).filters?.tag }}\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<app-article-list></app-article-list>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-md-3\">\n\t\t\t\t<div class=\"sidebar\">\n\t\t\t\t\t<app-tags-list (setListTag)=\"setListTag($event)\" [tags]=\"(tags$ | async)\"></app-tags-list>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n\n</div>"

/***/ }),

/***/ "../../libs/home/src/lib/home.component.ts":
/*!*****************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/home.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/article-list */ "../../libs/article-list/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _state_home_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/home.facade */ "../../libs/home/src/lib/+state/home.facade.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(facade, router, articleListFacade, authFacade) {
        this.facade = facade;
        this.router = router;
        this.articleListFacade = articleListFacade;
        this.authFacade = authFacade;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authFacade.isLoggedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (isLoggedIn) {
            _this.isAuthenticated = isLoggedIn;
            _this.getArticles();
        });
        this.listConfig$ = this.articleListFacade.listConfig$;
        this.tags$ = this.facade.tags$;
    };
    HomeComponent.prototype.setListTo = function (type) {
        if (type === void 0) { type = 'ALL'; }
        this.articleListFacade.setListConfig(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_5__["articleListInitialState"].listConfig, { type: type }));
    };
    HomeComponent.prototype.getArticles = function () {
        this.setListTo('ALL');
    };
    HomeComponent.prototype.setListTag = function (tag) {
        this.articleListFacade.setListConfig(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_5__["articleListInitialState"].listConfig, { filters: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_5__["articleListInitialState"].listConfig.filters, { tag: tag }) }));
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "../../libs/home/src/lib/home.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./home.component.css */ "../../libs/home/src/lib/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_home_facade__WEBPACK_IMPORTED_MODULE_7__["HomeFacade"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_5__["ArticleListFacade"],
            _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_6__["AuthFacade"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../libs/home/src/lib/home.module.ts":
/*!**************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/home.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/article-list */ "../../libs/article-list/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_home_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/home.effects */ "../../libs/home/src/lib/+state/home.effects.ts");
/* harmony import */ var _state_home_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/home.facade */ "../../libs/home/src/lib/+state/home.facade.ts");
/* harmony import */ var _state_home_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/home.reducer */ "../../libs/home/src/lib/+state/home.reducer.ts");
/* harmony import */ var _home_resolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-resolver.service */ "../../libs/home/src/lib/home-resolver.service.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home.component */ "../../libs/home/src/lib/home.component.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home.service */ "../../libs/home/src/lib/home.service.ts");
/* harmony import */ var _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tags-list/tags-list.component */ "../../libs/home/src/lib/tags-list/tags-list.component.ts");














var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__["ArticleListModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', pathMatch: 'full', component: _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], resolve: { HomeResolverService: _home_resolver_service__WEBPACK_IMPORTED_MODULE_10__["HomeResolverService"] } }
                ]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('home', _state_home_reducer__WEBPACK_IMPORTED_MODULE_9__["homeReducer"], { initialState: _state_home_reducer__WEBPACK_IMPORTED_MODULE_9__["homeInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_home_effects__WEBPACK_IMPORTED_MODULE_7__["HomeEffects"]])
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _tags_list_tags_list_component__WEBPACK_IMPORTED_MODULE_13__["TagsListComponent"]],
            providers: [_state_home_effects__WEBPACK_IMPORTED_MODULE_7__["HomeEffects"], _home_resolver_service__WEBPACK_IMPORTED_MODULE_10__["HomeResolverService"], _home_service__WEBPACK_IMPORTED_MODULE_12__["HomeService"], _state_home_facade__WEBPACK_IMPORTED_MODULE_8__["HomeFacade"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../libs/home/src/lib/home.service.ts":
/*!***************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/home.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");



var HomeService = /** @class */ (function () {
    function HomeService(apiService) {
        this.apiService = apiService;
    }
    HomeService.prototype.getTags = function () {
        return this.apiService.get('/tags');
    };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../libs/home/src/lib/tags-list/tags-list.component.css":
/*!*********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/tags-list/tags-list.component.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2hvbWUvc3JjL2xpYi90YWdzLWxpc3QvdGFncy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/home/src/lib/tags-list/tags-list.component.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/tags-list/tags-list.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Popular Tags</p>\n\n<div class=\"tag-list\">\n\t<a *ngFor=\"let tag of tags\" (click)=\"setListTag.emit(tag)\" class=\"tag-pill tag-default\">{{tag}}</a>\n</div>"

/***/ }),

/***/ "../../libs/home/src/lib/tags-list/tags-list.component.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/home/src/lib/tags-list/tags-list.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: TagsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsListComponent", function() { return TagsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var TagsListComponent = /** @class */ (function () {
    function TagsListComponent() {
        this.setListTag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TagsListComponent.prototype, "tags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], TagsListComponent.prototype, "setListTag", void 0);
    TagsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tags-list',
            template: __webpack_require__(/*! ./tags-list.component.html */ "../../libs/home/src/lib/tags-list/tags-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./tags-list.component.css */ "../../libs/home/src/lib/tags-list/tags-list.component.css")]
        })
    ], TagsListComponent);
    return TagsListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=angular-ngrx-nx-realworld-example-app-home.js.map