(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~angular-ngrx-nx-realworld-example-app-home~angular-ngrx-nx-realworld-example-app-profile"],{

/***/ "../../libs/article-list/src/index.ts":
/*!************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: ArticleListModule, articleListInitialState, articleListReducer, ArticleListActionTypes, SetListPage, SetListConfig, LoadArticles, LoadArticlesSuccess, LoadArticlesFail, Favorite, FavoriteSuccess, FavoriteFail, UnFavorite, UnFavoriteSuccess, UnFavoriteFail, ArticleListFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_article_list_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/article-list.module */ "../../libs/article-list/src/lib/article-list.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListModule", function() { return _lib_article_list_module__WEBPACK_IMPORTED_MODULE_0__["ArticleListModule"]; });

/* harmony import */ var _lib_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/+state/article-list.reducer */ "../../libs/article-list/src/lib/+state/article-list.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articleListInitialState", function() { return _lib_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_1__["articleListInitialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "articleListReducer", function() { return _lib_state_article_list_reducer__WEBPACK_IMPORTED_MODULE_1__["articleListReducer"]; });

/* harmony import */ var _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/+state/article-list.actions */ "../../libs/article-list/src/lib/+state/article-list.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListActionTypes", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["ArticleListActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetListPage", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["SetListPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SetListConfig", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["SetListConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadArticles", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["LoadArticles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadArticlesSuccess", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["LoadArticlesSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadArticlesFail", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["LoadArticlesFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Favorite", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["Favorite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteSuccess", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["FavoriteSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteFail", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["FavoriteFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnFavorite", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["UnFavorite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnFavoriteSuccess", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["UnFavoriteSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnFavoriteFail", function() { return _lib_state_article_list_actions__WEBPACK_IMPORTED_MODULE_2__["UnFavoriteFail"]; });

/* harmony import */ var _lib_state_article_list_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/+state/article-list.facade */ "../../libs/article-list/src/lib/+state/article-list.facade.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListFacade", function() { return _lib_state_article_list_facade__WEBPACK_IMPORTED_MODULE_3__["ArticleListFacade"]; });







/***/ }),

/***/ "../../libs/article-list/src/lib/+state/article-list.actions.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/+state/article-list.actions.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ArticleListActionTypes, SetListPage, SetListConfig, LoadArticles, LoadArticlesSuccess, LoadArticlesFail, Favorite, FavoriteSuccess, FavoriteFail, UnFavorite, UnFavoriteSuccess, UnFavoriteFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListActionTypes", function() { return ArticleListActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetListPage", function() { return SetListPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetListConfig", function() { return SetListConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadArticles", function() { return LoadArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadArticlesSuccess", function() { return LoadArticlesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadArticlesFail", function() { return LoadArticlesFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Favorite", function() { return Favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteSuccess", function() { return FavoriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteFail", function() { return FavoriteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFavorite", function() { return UnFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFavoriteSuccess", function() { return UnFavoriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFavoriteFail", function() { return UnFavoriteFail; });
var ArticleListActionTypes;
(function (ArticleListActionTypes) {
    ArticleListActionTypes["SET_LIST_PAGE"] = "[article-list] SET_LIST_PAGE";
    ArticleListActionTypes["SET_LIST_CONFIG"] = "[article-list] SET_LIST_CONFIG";
    ArticleListActionTypes["LOAD_ARTICLES"] = "[article-list] LOAD_ARTICLES";
    ArticleListActionTypes["LOAD_ARTICLES_SUCCESS"] = "[article-list] LOAD_ARTICLES_SUCCESS";
    ArticleListActionTypes["LOAD_ARTICLES_FAIL"] = "[article-list] LOAD_ARTICLES_FAIL";
    ArticleListActionTypes["FAVORITE"] = "[article-list] FAVORITE";
    ArticleListActionTypes["FAVORITE_SUCCESS"] = "[article-list] FAVORITE_SUCCESS";
    ArticleListActionTypes["FAVORITE_FAIL"] = "[article-list] FAVORITE_FAIL";
    ArticleListActionTypes["UNFAVORITE"] = "[article-list] UNFAVORITE";
    ArticleListActionTypes["UNFAVORITE_SUCCESS"] = "[article-list] UNFAVORITE_SUCCESS";
    ArticleListActionTypes["UNFAVORITE_FAIL"] = "[article-list] UNFAVORITE_FAIL";
})(ArticleListActionTypes || (ArticleListActionTypes = {}));
var SetListPage = /** @class */ (function () {
    function SetListPage(payload) {
        this.payload = payload;
        this.type = '[article-list] SET_LIST_PAGE';
    }
    return SetListPage;
}());

var SetListConfig = /** @class */ (function () {
    function SetListConfig(payload) {
        this.payload = payload;
        this.type = '[article-list] SET_LIST_CONFIG';
    }
    return SetListConfig;
}());

var LoadArticles = /** @class */ (function () {
    function LoadArticles() {
        this.type = '[article-list] LOAD_ARTICLES';
    }
    return LoadArticles;
}());

var LoadArticlesSuccess = /** @class */ (function () {
    function LoadArticlesSuccess(payload) {
        this.payload = payload;
        this.type = '[article-list] LOAD_ARTICLES_SUCCESS';
    }
    return LoadArticlesSuccess;
}());

var LoadArticlesFail = /** @class */ (function () {
    function LoadArticlesFail(payload) {
        this.payload = payload;
        this.type = '[article-list] LOAD_ARTICLES_FAIL';
    }
    return LoadArticlesFail;
}());

var Favorite = /** @class */ (function () {
    function Favorite(payload) {
        this.payload = payload;
        this.type = '[article-list] FAVORITE';
    }
    return Favorite;
}());

var FavoriteSuccess = /** @class */ (function () {
    function FavoriteSuccess(payload) {
        this.payload = payload;
        this.type = '[article-list] FAVORITE_SUCCESS';
    }
    return FavoriteSuccess;
}());

var FavoriteFail = /** @class */ (function () {
    function FavoriteFail(payload) {
        this.payload = payload;
        this.type = '[article-list] FAVORITE_FAIL';
    }
    return FavoriteFail;
}());

var UnFavorite = /** @class */ (function () {
    function UnFavorite(payload) {
        this.payload = payload;
        this.type = '[article-list] UNFAVORITE';
    }
    return UnFavorite;
}());

var UnFavoriteSuccess = /** @class */ (function () {
    function UnFavoriteSuccess(payload) {
        this.payload = payload;
        this.type = '[article-list] UNFAVORITE_SUCCESS';
    }
    return UnFavoriteSuccess;
}());

var UnFavoriteFail = /** @class */ (function () {
    function UnFavoriteFail(payload) {
        this.payload = payload;
        this.type = '[article-list] UNFAVORITE_FAIL';
    }
    return UnFavoriteFail;
}());



/***/ }),

/***/ "../../libs/article-list/src/lib/+state/article-list.effects.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/+state/article-list.effects.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ArticleListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListEffects", function() { return ArticleListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/shared */ "../../libs/shared/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _article_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../article-list.service */ "../../libs/article-list/src/lib/article-list.service.ts");
/* harmony import */ var _article_list_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article-list.actions */ "../../libs/article-list/src/lib/+state/article-list.actions.ts");
/* harmony import */ var _article_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./article-list.facade */ "../../libs/article-list/src/lib/+state/article-list.facade.ts");










var ArticleListEffects = /** @class */ (function () {
    function ArticleListEffects(actions, articleListService, actionsService, facade) {
        var _this = this;
        this.actions = actions;
        this.articleListService = articleListService;
        this.actionsService = actionsService;
        this.facade = facade;
        this.setListPage = this.actions
            .ofType(_article_list_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleListActionTypes"].SET_LIST_PAGE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return ({ type: _article_list_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleListActionTypes"].LOAD_ARTICLES }); }));
        this.setListTag = this.actions
            .ofType(_article_list_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleListActionTypes"].SET_LIST_CONFIG)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _article_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadArticles"](); }));
        this.loadArticles = this.actions.ofType(_article_list_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleListActionTypes"].LOAD_ARTICLES).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.facade.listConfig$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (_a) {
            var _ = _a[0], config = _a[1];
            return _this.articleListService.query(config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (results) {
                return new _article_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadArticlesSuccess"]({
                    articles: results.articles,
                    articlesCount: results.articlesCount
                });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _article_list_actions__WEBPACK_IMPORTED_MODULE_7__["LoadArticlesFail"](error)); }));
        }));
        this.favorite = this.actions
            .ofType(_article_list_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleListActionTypes"].FAVORITE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (slug) {
            return _this.actionsService
                .favorite(slug)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (results) { return new _article_list_actions__WEBPACK_IMPORTED_MODULE_7__["FavoriteSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _article_list_actions__WEBPACK_IMPORTED_MODULE_7__["FavoriteFail"](error)); }));
        }));
        this.unFavorite = this.actions
            .ofType(_article_list_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleListActionTypes"].UNFAVORITE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (slug) {
            return _this.actionsService
                .unfavorite(slug)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (results) { return new _article_list_actions__WEBPACK_IMPORTED_MODULE_7__["UnFavoriteSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _article_list_actions__WEBPACK_IMPORTED_MODULE_7__["UnFavoriteFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleListEffects.prototype, "setListPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleListEffects.prototype, "setListTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleListEffects.prototype, "loadArticles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleListEffects.prototype, "favorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleListEffects.prototype, "unFavorite", void 0);
    ArticleListEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _article_list_service__WEBPACK_IMPORTED_MODULE_6__["ArticleListService"],
            _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_1__["ActionsService"],
            _article_list_facade__WEBPACK_IMPORTED_MODULE_8__["ArticleListFacade"]])
    ], ArticleListEffects);
    return ArticleListEffects;
}());



/***/ }),

/***/ "../../libs/article-list/src/lib/+state/article-list.facade.ts":
/*!*************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/+state/article-list.facade.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: ArticleListFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListFacade", function() { return ArticleListFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _article_list_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article-list.selectors */ "../../libs/article-list/src/lib/+state/article-list.selectors.ts");
/* harmony import */ var _article_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-list.actions */ "../../libs/article-list/src/lib/+state/article-list.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");






var ArticleListFacade = /** @class */ (function () {
    function ArticleListFacade(store) {
        this.store = store;
        this.articles$ = this.store.select(_article_list_selectors__WEBPACK_IMPORTED_MODULE_3__["articleListQuery"].getArticles);
        this.listConfig$ = this.store.select(_article_list_selectors__WEBPACK_IMPORTED_MODULE_3__["articleListQuery"].getListConfig);
        this.isLoading$ = this.store.select(_article_list_selectors__WEBPACK_IMPORTED_MODULE_3__["articleListQuery"].isLoading);
        this.articlesCount$ = this.store.select(_article_list_selectors__WEBPACK_IMPORTED_MODULE_3__["articleListQuery"].getArticlesCount);
        this.totalPages$ = this.articlesCount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.listConfig$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var articlesCount = _a[0], config = _a[1];
            return Array.from(new Array(Math.ceil(articlesCount / config.filters.limit)), function (val, index) { return index + 1; });
        }));
    }
    ArticleListFacade.prototype.favorite = function (slug) {
        this.store.dispatch(new _article_list_actions__WEBPACK_IMPORTED_MODULE_4__["Favorite"](slug));
    };
    ArticleListFacade.prototype.unFavorite = function (slug) {
        this.store.dispatch(new _article_list_actions__WEBPACK_IMPORTED_MODULE_4__["UnFavorite"](slug));
    };
    ArticleListFacade.prototype.navigateToArticle = function (slug) {
        this.store.dispatch({ type: '[router] Go', payload: { path: ['/article', slug] } });
    };
    ArticleListFacade.prototype.setPage = function (page) {
        this.store.dispatch(new _article_list_actions__WEBPACK_IMPORTED_MODULE_4__["SetListPage"](page));
    };
    ArticleListFacade.prototype.setListConfig = function (config) {
        this.store.dispatch(new _article_list_actions__WEBPACK_IMPORTED_MODULE_4__["SetListConfig"](config));
    };
    ArticleListFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ArticleListFacade);
    return ArticleListFacade;
}());



/***/ }),

/***/ "../../libs/article-list/src/lib/+state/article-list.reducer.ts":
/*!**************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/+state/article-list.reducer.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: articleListInitialState, articleListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleListInitialState", function() { return articleListInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleListReducer", function() { return articleListReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _article_list_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-list.actions */ "../../libs/article-list/src/lib/+state/article-list.actions.ts");


var articleListInitialState = {
    listConfig: {
        type: 'ALL',
        currentPage: 1,
        filters: {
            limit: 10
        }
    },
    articles: {
        entities: [],
        articlesCount: 0,
        loaded: false,
        loading: false
    }
};
function articleListReducer(state, action) {
    switch (action.type) {
        case _article_list_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleListActionTypes"].SET_LIST_PAGE: {
            var filters = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.listConfig.filters, { offset: state.listConfig.filters.limit * (action.payload - 1) });
            var listConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.listConfig, { currentPage: action.payload, filters: filters });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { listConfig: listConfig });
        }
        case _article_list_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleListActionTypes"].SET_LIST_CONFIG: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { listConfig: action.payload });
        }
        case _article_list_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleListActionTypes"].LOAD_ARTICLES: {
            var articles = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.articles, { loading: true });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { articles: articles });
        }
        case _article_list_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleListActionTypes"].LOAD_ARTICLES_SUCCESS: {
            var articles = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.articles, { entities: action.payload.articles, articlesCount: action.payload.articlesCount, loading: false, loaded: true });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { articles: articles });
        }
        case _article_list_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleListActionTypes"].LOAD_ARTICLES_FAIL: {
            var articles = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.articles, { entities: [], articlesCount: 0, loading: false, loaded: true });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { articles: articles });
        }
        case _article_list_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleListActionTypes"].FAVORITE_SUCCESS:
        case _article_list_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleListActionTypes"].UNFAVORITE_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { articles: replaceArticle(state.articles, action.payload) });
        }
        default: {
            return state;
        }
    }
}
function replaceArticle(articles, payload) {
    var articleIndex = articles.entities.findIndex(function (a) { return a.slug === payload.slug; });
    var entities = articles.entities.slice(0, articleIndex).concat([
        Object.assign({}, articles.entities[articleIndex], payload)
    ], articles.entities.slice(articleIndex + 1));
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, articles, { entities: entities, loading: false, loaded: true });
}


/***/ }),

/***/ "../../libs/article-list/src/lib/+state/article-list.selectors.ts":
/*!****************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/+state/article-list.selectors.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: getListConfig, getArticles, getArticlesCount, isLoading, articleListQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListConfig", function() { return getListConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticles", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticlesCount", function() { return getArticlesCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleListQuery", function() { return articleListQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");

var getArticleList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('articleList');
var getListConfig = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticleList, function (state) { return state.listConfig; });
var getArticles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticleList, function (state) { return state.articles.entities; });
var getArticlesCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticleList, function (state) { return state.articles.articlesCount; });
var isLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticleList, function (state) { return state.articles.loading; });
var articleListQuery = {
    getListConfig: getListConfig,
    getArticles: getArticles,
    getArticlesCount: getArticlesCount,
    isLoading: isLoading
};


/***/ }),

/***/ "../../libs/article-list/src/lib/article-list-item/article-list-item.component.css":
/*!*********************************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/article-list-item/article-list-item.component.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2FydGljbGUtbGlzdC9zcmMvbGliL2FydGljbGUtbGlzdC1pdGVtL2FydGljbGUtbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/article-list/src/lib/article-list-item/article-list-item.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/article-list-item/article-list-item.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-preview\">\n\t<div class=\"article-meta\">\n\t\t<a>\n\t\t\t<img [src]=\"article.author.image\" />\n\t\t</a>\n\t\t<div class=\"info\">\n\t\t\t<span class=\"author\">\n\t\t\t\t{{ article.author.name }}\n\t\t\t</span>\n\t\t\t<span class=\"date\">\n\t\t\t\t{{ article.createdAt | date: 'longDate' }}\n\t\t\t</span>\n\t\t</div>\n\t\t<button [ngClass]=\"{'btn-outline-primary': !article.favorited, 'btn-primary': article.favorited }\" class=\"btn btn-sm pull-xs-right\"\n\t\t (click)=\"toggleFavorite(article)\">\n\t\t\t<i class=\"ion-heart\"></i>\n\t\t\t<div class=\"info\">{{article.favoritesCount}}</div>\n\t\t</button>\n\t</div>\n\t<a (click)=navigateToArticle.emit(article.slug) class=\"preview-link\">\n\t\t<h1>{{article.title}}</h1>\n\t\t<p>{{article.description}}</p>\n\t\t<span>Ver más...</span>\n\t\t<ul class=\"tag-list\">\n\t\t\t<li class=\"tag-default tag-pill tag-outline\" *ngFor=\"let tag of article.tagList\">\n\t\t\t\t{{ tag }}\n\t\t\t</li>\n\t\t</ul>\n\t</a>\n</div>"

/***/ }),

/***/ "../../libs/article-list/src/lib/article-list-item/article-list-item.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/article-list-item/article-list-item.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: ArticleListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListItemComponent", function() { return ArticleListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ArticleListItemComponent = /** @class */ (function () {
    function ArticleListItemComponent() {
        this.favorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.navigateToArticle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ArticleListItemComponent.prototype.toggleFavorite = function (article) {
        if (article.favorited) {
            this.unFavorite.emit(article.slug);
        }
        else {
            this.favorite.emit(article.slug);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleListItemComponent.prototype, "article", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleListItemComponent.prototype, "favorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleListItemComponent.prototype, "unFavorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleListItemComponent.prototype, "navigateToArticle", void 0);
    ArticleListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-list-item',
            template: __webpack_require__(/*! ./article-list-item.component.html */ "../../libs/article-list/src/lib/article-list-item/article-list-item.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./article-list-item.component.css */ "../../libs/article-list/src/lib/article-list-item/article-list-item.component.css")]
        })
    ], ArticleListItemComponent);
    return ArticleListItemComponent;
}());



/***/ }),

/***/ "../../libs/article-list/src/lib/article-list.component.css":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/article-list.component.css ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-article-preview {\n  margin-top: 1.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvYXJ0aWNsZS1saXN0L3NyYy9saWIvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoibGlicy9hcnRpY2xlLWxpc3Qvc3JjL2xpYi9hcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtYXJ0aWNsZS1wcmV2aWV3IHtcbiAgbWFyZ2luLXRvcDogMS41ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "../../libs/article-list/src/lib/article-list.component.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/article-list.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-article-preview\" [hidden]=\"!(isLoading$ | async)\">\n\tBuscando libros...\n</div>\n\n<div class=\"app-article-preview\" [hidden]=\"(isLoading$ | async) || (articles$ | async).length > 0\">\n\tNo hay libros aquí... todavía.\n</div>\n\n<app-article-list-item [hidden]=\"isLoading$ | async\" (navigateToArticle)=\"navigateToArticle($event)\" (unFavorite)=\"unFavorite($event)\"\n (favorite)=\"favorite($event)\" *ngFor=\"let article of articles$ | async\" [article]=\"article\">\n</app-article-list-item>\n\n<app-pager (setPage)=\"setPage($event)\" [hidden]=\"(totalPages$|async)?.length <= 1 || (isLoading$ | async)\" [currentPage]=\"(listConfig$ | async).currentPage\"\n [totalPages]=\"totalPages$|async\"></app-pager>"

/***/ }),

/***/ "../../libs/article-list/src/lib/article-list.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/article-list.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_article_list_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./+state/article-list.facade */ "../../libs/article-list/src/lib/+state/article-list.facade.ts");



var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(facade) {
        this.facade = facade;
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        this.totalPages$ = this.facade.totalPages$;
        this.articles$ = this.facade.articles$;
        this.listConfig$ = this.facade.listConfig$;
        this.isLoading$ = this.facade.isLoading$;
    };
    ArticleListComponent.prototype.favorite = function (slug) {
        this.facade.favorite(slug);
    };
    ArticleListComponent.prototype.unFavorite = function (slug) {
        this.facade.unFavorite(slug);
    };
    ArticleListComponent.prototype.navigateToArticle = function (slug) {
        this.facade.navigateToArticle(slug);
    };
    ArticleListComponent.prototype.setPage = function (page) {
        this.facade.setPage(page);
    };
    ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "../../libs/article-list/src/lib/article-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./article-list.component.css */ "../../libs/article-list/src/lib/article-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_article_list_facade__WEBPACK_IMPORTED_MODULE_2__["ArticleListFacade"]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "../../libs/article-list/src/lib/article-list.module.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/article-list.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ArticleListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListModule", function() { return ArticleListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/shared */ "../../libs/shared/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_article_list_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/article-list.effects */ "../../libs/article-list/src/lib/+state/article-list.effects.ts");
/* harmony import */ var _state_article_list_facade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/article-list.facade */ "../../libs/article-list/src/lib/+state/article-list.facade.ts");
/* harmony import */ var _state_article_list_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/article-list.reducer */ "../../libs/article-list/src/lib/+state/article-list.reducer.ts");
/* harmony import */ var _article_list_item_article_list_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article-list-item/article-list-item.component */ "../../libs/article-list/src/lib/article-list-item/article-list-item.component.ts");
/* harmony import */ var _article_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-list.component */ "../../libs/article-list/src/lib/article-list.component.ts");
/* harmony import */ var _article_list_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article-list.service */ "../../libs/article-list/src/lib/article-list.service.ts");













var ArticleListModule = /** @class */ (function () {
    function ArticleListModule() {
    }
    ArticleListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('articleList', _state_article_list_reducer__WEBPACK_IMPORTED_MODULE_9__["articleListReducer"], { initialState: _state_article_list_reducer__WEBPACK_IMPORTED_MODULE_9__["articleListInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_state_article_list_effects__WEBPACK_IMPORTED_MODULE_7__["ArticleListEffects"]])
            ],
            declarations: [_article_list_component__WEBPACK_IMPORTED_MODULE_11__["ArticleListComponent"], _article_list_item_article_list_item_component__WEBPACK_IMPORTED_MODULE_10__["ArticleListItemComponent"]],
            providers: [_article_list_service__WEBPACK_IMPORTED_MODULE_12__["ArticleListService"], _state_article_list_effects__WEBPACK_IMPORTED_MODULE_7__["ArticleListEffects"], _state_article_list_facade__WEBPACK_IMPORTED_MODULE_8__["ArticleListFacade"]],
            exports: [_article_list_component__WEBPACK_IMPORTED_MODULE_11__["ArticleListComponent"]]
        })
    ], ArticleListModule);
    return ArticleListModule;
}());



/***/ }),

/***/ "../../libs/article-list/src/lib/article-list.service.ts":
/*!*******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article-list/src/lib/article-list.service.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: ArticleListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListService", function() { return ArticleListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");




var ArticleListService = /** @class */ (function () {
    function ArticleListService(apiService) {
        this.apiService = apiService;
    }
    ArticleListService.prototype.query = function (config) {
        return this.apiService.get('/articles' + (config.type === 'FEED' ? '/feed' : ''), this.toHttpParams(config.filters));
    };
    ArticleListService.prototype.toHttpParams = function (params) {
        return Object.getOwnPropertyNames(params).reduce(function (p, key) { return p.set(key, params[key]); }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
    };
    ArticleListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ArticleListService);
    return ArticleListService;
}());



/***/ }),

/***/ "../../libs/shared/src/index.ts":
/*!******************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/shared/src/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: SharedModule, ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared.module */ "../../libs/shared/src/lib/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _lib_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _lib_actions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/actions.service */ "../../libs/shared/src/lib/actions.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return _lib_actions_service__WEBPACK_IMPORTED_MODULE_1__["ActionsService"]; });





/***/ }),

/***/ "../../libs/shared/src/lib/actions.service.ts":
/*!********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/shared/src/lib/actions.service.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ActionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsService", function() { return ActionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var ActionsService = /** @class */ (function () {
    function ActionsService(apiService) {
        this.apiService = apiService;
    }
    ActionsService.prototype.followUser = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.profile; }));
    };
    ActionsService.prototype.unfollowUser = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.profile; }));
    };
    ActionsService.prototype.favorite = function (slug) {
        return this.apiService.post('/articles/' + slug + '/favorite').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.article; }));
    };
    ActionsService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.article; }));
    };
    ActionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ "../../libs/shared/src/lib/pager/pager.component.css":
/*!***************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/shared/src/lib/pager/pager.component.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-link {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hhcmVkL3NyYy9saWIvcGFnZXIvcGFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJsaWJzL3NoYXJlZC9zcmMvbGliL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"

/***/ }),

/***/ "../../libs/shared/src/lib/pager/pager.component.html":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/shared/src/lib/pager/pager.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"pagination\">\n\t<li class=\"page-item\" [ngClass]=\"{'active': pageNumber === currentPage}\" *ngFor=\"let pageNumber of totalPages\" (click)=\"setPage.emit(pageNumber)\">\n\t\t<a class=\"page-link\">{{ pageNumber }}</a>\n\t</li>\n</ul>"

/***/ }),

/***/ "../../libs/shared/src/lib/pager/pager.component.ts":
/*!**************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/shared/src/lib/pager/pager.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PagerComponent.prototype, "currentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PagerComponent.prototype, "totalPages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PagerComponent.prototype, "setPage", void 0);
    PagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pager',
            template: __webpack_require__(/*! ./pager.component.html */ "../../libs/shared/src/lib/pager/pager.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./pager.component.css */ "../../libs/shared/src/lib/pager/pager.component.css")]
        })
    ], PagerComponent);
    return PagerComponent;
}());



/***/ }),

/***/ "../../libs/shared/src/lib/shared.module.ts":
/*!******************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/shared/src/lib/shared.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pager_pager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pager/pager.component */ "../../libs/shared/src/lib/pager/pager.component.ts");
/* harmony import */ var _actions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions.service */ "../../libs/shared/src/lib/actions.service.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__["PagerComponent"]],
            exports: [_pager_pager_component__WEBPACK_IMPORTED_MODULE_3__["PagerComponent"]],
            providers: [_actions_service__WEBPACK_IMPORTED_MODULE_4__["ActionsService"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~angular-ngrx-nx-realworld-example-app-home~angular-ngrx-nx-realworld-example-app-profile.js.map