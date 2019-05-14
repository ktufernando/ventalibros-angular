(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-ngrx-nx-realworld-example-app-article"],{

/***/ "../../libs/article/src/lib/+state/article.actions.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/+state/article.actions.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ArticleActionTypes, LoadArticle, LoadArticleSuccess, LoadArticleFail, DeleteArticle, DeleteArticleFail, InitializeArticle, LoadComments, LoadCommentsSuccess, LoadCommentsFail, Favorite, FavoriteSuccess, FavoriteFail, UnFavorite, UnFavoriteSuccess, UnFavoriteFail, Follow, FollowSuccess, FollowFail, UnFollow, UnFollowSuccess, UnFollowFail, AddComment, AddCommentFail, AddCommentSuccess, DeleteComment, DeleteCommentFail, DeleteCommentSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleActionTypes", function() { return ArticleActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadArticle", function() { return LoadArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadArticleSuccess", function() { return LoadArticleSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadArticleFail", function() { return LoadArticleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteArticle", function() { return DeleteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteArticleFail", function() { return DeleteArticleFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitializeArticle", function() { return InitializeArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadComments", function() { return LoadComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCommentsSuccess", function() { return LoadCommentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadCommentsFail", function() { return LoadCommentsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Favorite", function() { return Favorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteSuccess", function() { return FavoriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteFail", function() { return FavoriteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFavorite", function() { return UnFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFavoriteSuccess", function() { return UnFavoriteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFavoriteFail", function() { return UnFavoriteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Follow", function() { return Follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowSuccess", function() { return FollowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowFail", function() { return FollowFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFollow", function() { return UnFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFollowSuccess", function() { return UnFollowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFollowFail", function() { return UnFollowFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComment", function() { return AddComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentFail", function() { return AddCommentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentSuccess", function() { return AddCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteComment", function() { return DeleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCommentFail", function() { return DeleteCommentFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCommentSuccess", function() { return DeleteCommentSuccess; });
var ArticleActionTypes;
(function (ArticleActionTypes) {
    ArticleActionTypes["LOAD_ARTICLE"] = "[article] LOAD_ARTICLE";
    ArticleActionTypes["LOAD_ARTICLE_SUCCESS"] = "[article] LOAD_ARTICLE_SUCCESS";
    ArticleActionTypes["LOAD_ARTICLE_FAIL"] = "[article] LOAD_ARTICLE_FAIL";
    ArticleActionTypes["DELETE_ARTICLE"] = "[article] DELETE_ARTICLE";
    ArticleActionTypes["DELETE_ARTICLE_FAIL"] = "[article] DELETE_ARTICLE_FAIL";
    ArticleActionTypes["INITIALIZE_ARTICLE"] = "[article] INITIALIZE_ARTICLE";
    ArticleActionTypes["LOAD_COMMENTS"] = "[article] LOAD_COMMENTS";
    ArticleActionTypes["LOAD_COMMENTS_SUCCESS"] = "[article] LOAD_COMMENTS_SUCCESS";
    ArticleActionTypes["LOAD_COMMENTS_FAIL"] = "[article] LOAD_COMMENTS_FAIL";
    ArticleActionTypes["FAVORITE"] = "[article] FAVORITE";
    ArticleActionTypes["FAVORITE_SUCCESS"] = "[article] FAVORITE_SUCCESS";
    ArticleActionTypes["FAVORITE_FAIL"] = "[article] FAVORITE_FAIL";
    ArticleActionTypes["UNFAVORITE"] = "[article] UNFAVORITE";
    ArticleActionTypes["UNFAVORITE_SUCCESS"] = "[article] UNFAVORITE_SUCCESS";
    ArticleActionTypes["UNFAVORITE_FAIL"] = "[article] UNFAVORITE_FAIL";
    ArticleActionTypes["FOLLOW"] = "[article] FOLLOW";
    ArticleActionTypes["FOLLOW_SUCCESS"] = "[article] FOLLOW_SUCCESS";
    ArticleActionTypes["FOLLOW_FAIL"] = "[article] FOLLOW_FAIL";
    ArticleActionTypes["UNFOLLOW"] = "[article] UNFOLLOW";
    ArticleActionTypes["UNFOLLOW_SUCCESS"] = "[article] UNFOLLOW_SUCCESS";
    ArticleActionTypes["UNFOLLOW_FAIL"] = "[article] UNFOLLOW_FAIL";
    ArticleActionTypes["ADD_COMMENT"] = "[article] ADD_COMMENT";
    ArticleActionTypes["ADD_COMMENT_FAIL"] = "[article] ADD_COMMENT_FAIL";
    ArticleActionTypes["ADD_COMMENT_SUCCESS"] = "[article] ADD_COMMENT_SUCCESS";
    ArticleActionTypes["DELETE_COMMENT"] = "[article] DELETE_COMMENT";
    ArticleActionTypes["DELETE_COMMENT_FAIL"] = "[article] DELETE_COMMENT_FAIL";
    ArticleActionTypes["DELETE_COMMENT_SUCCESS"] = "[article] DELETE_COMMENT_SUCCESS";
})(ArticleActionTypes || (ArticleActionTypes = {}));
var LoadArticle = /** @class */ (function () {
    function LoadArticle(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.LOAD_ARTICLE;
    }
    return LoadArticle;
}());

var LoadArticleSuccess = /** @class */ (function () {
    function LoadArticleSuccess(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.LOAD_ARTICLE_SUCCESS;
    }
    return LoadArticleSuccess;
}());

var LoadArticleFail = /** @class */ (function () {
    function LoadArticleFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.LOAD_ARTICLE_FAIL;
    }
    return LoadArticleFail;
}());

var DeleteArticle = /** @class */ (function () {
    function DeleteArticle(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.DELETE_ARTICLE;
    }
    return DeleteArticle;
}());

var DeleteArticleFail = /** @class */ (function () {
    function DeleteArticleFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.DELETE_ARTICLE_FAIL;
    }
    return DeleteArticleFail;
}());

var InitializeArticle = /** @class */ (function () {
    function InitializeArticle() {
        this.type = ArticleActionTypes.INITIALIZE_ARTICLE;
    }
    return InitializeArticle;
}());

var LoadComments = /** @class */ (function () {
    function LoadComments(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.LOAD_COMMENTS;
    }
    return LoadComments;
}());

var LoadCommentsSuccess = /** @class */ (function () {
    function LoadCommentsSuccess(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.LOAD_COMMENTS_SUCCESS;
    }
    return LoadCommentsSuccess;
}());

var LoadCommentsFail = /** @class */ (function () {
    function LoadCommentsFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.LOAD_COMMENTS_FAIL;
    }
    return LoadCommentsFail;
}());

var Favorite = /** @class */ (function () {
    function Favorite(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.FAVORITE;
    }
    return Favorite;
}());

var FavoriteSuccess = /** @class */ (function () {
    function FavoriteSuccess(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.FAVORITE_SUCCESS;
    }
    return FavoriteSuccess;
}());

var FavoriteFail = /** @class */ (function () {
    function FavoriteFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.FAVORITE_FAIL;
    }
    return FavoriteFail;
}());

var UnFavorite = /** @class */ (function () {
    function UnFavorite(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.UNFAVORITE;
    }
    return UnFavorite;
}());

var UnFavoriteSuccess = /** @class */ (function () {
    function UnFavoriteSuccess(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.UNFAVORITE_SUCCESS;
    }
    return UnFavoriteSuccess;
}());

var UnFavoriteFail = /** @class */ (function () {
    function UnFavoriteFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.UNFAVORITE_FAIL;
    }
    return UnFavoriteFail;
}());

var Follow = /** @class */ (function () {
    function Follow(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.FOLLOW;
    }
    return Follow;
}());

var FollowSuccess = /** @class */ (function () {
    function FollowSuccess(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.FOLLOW_SUCCESS;
    }
    return FollowSuccess;
}());

var FollowFail = /** @class */ (function () {
    function FollowFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.FOLLOW_FAIL;
    }
    return FollowFail;
}());

var UnFollow = /** @class */ (function () {
    function UnFollow(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.UNFOLLOW;
    }
    return UnFollow;
}());

var UnFollowSuccess = /** @class */ (function () {
    function UnFollowSuccess(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.UNFOLLOW_SUCCESS;
    }
    return UnFollowSuccess;
}());

var UnFollowFail = /** @class */ (function () {
    function UnFollowFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.UNFOLLOW_FAIL;
    }
    return UnFollowFail;
}());

var AddComment = /** @class */ (function () {
    function AddComment(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.ADD_COMMENT;
    }
    return AddComment;
}());

var AddCommentFail = /** @class */ (function () {
    function AddCommentFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.ADD_COMMENT_FAIL;
    }
    return AddCommentFail;
}());

var AddCommentSuccess = /** @class */ (function () {
    function AddCommentSuccess(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.ADD_COMMENT_SUCCESS;
    }
    return AddCommentSuccess;
}());

var DeleteComment = /** @class */ (function () {
    function DeleteComment(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.DELETE_COMMENT;
    }
    return DeleteComment;
}());

var DeleteCommentFail = /** @class */ (function () {
    function DeleteCommentFail(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.DELETE_COMMENT_FAIL;
    }
    return DeleteCommentFail;
}());

var DeleteCommentSuccess = /** @class */ (function () {
    function DeleteCommentSuccess(payload) {
        this.payload = payload;
        this.type = ArticleActionTypes.DELETE_COMMENT_SUCCESS;
    }
    return DeleteCommentSuccess;
}());



/***/ }),

/***/ "../../libs/article/src/lib/+state/article.effects.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/+state/article.effects.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ArticleEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEffects", function() { return ArticleEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article.service */ "../../libs/article/src/lib/article.service.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/shared */ "../../libs/shared/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./article.actions */ "../../libs/article/src/lib/+state/article.actions.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");










var ArticleEffects = /** @class */ (function () {
    function ArticleEffects(actions, articleService, actionsService, ngrxFormsFacade) {
        var _this = this;
        this.actions = actions;
        this.articleService = articleService;
        this.actionsService = actionsService;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.loadArticle = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].LOAD_ARTICLE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (action) {
            return _this.articleService
                .get(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) { return new _article_actions__WEBPACK_IMPORTED_MODULE_7__["LoadArticleSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _article_actions__WEBPACK_IMPORTED_MODULE_7__["LoadArticleFail"](error)); }));
        }));
        this.loadComments = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].LOAD_COMMENTS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (action) {
            return _this.articleService
                .getComments(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) { return new _article_actions__WEBPACK_IMPORTED_MODULE_7__["LoadCommentsSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _article_actions__WEBPACK_IMPORTED_MODULE_7__["LoadCommentsFail"](error)); }));
        }));
        this.deleteArticle = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].DELETE_ARTICLE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (action) {
            return _this.articleService
                .deleteArticle(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return ({ type: '[router] Go', payload: { path: ['/'] } }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _article_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteArticleFail"](error)); }));
        }));
        this.addComment = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].ADD_COMMENT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.ngrxFormsFacade.data$, this.ngrxFormsFacade.structure$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (_a) {
            var slug = _a[0], data = _a[1], structure = _a[2];
            return _this.articleService
                .addComment(slug, data.comment)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (comment) { return [new _article_actions__WEBPACK_IMPORTED_MODULE_7__["AddCommentSuccess"](comment), new _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_8__["ResetForm"]()]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (result) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_8__["SetErrors"](result.error.errors)); }));
        }));
        this.deleteComment = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].DELETE_COMMENT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (data) {
            return _this.articleService
                .deleteComment(data.commentId, data.slug)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_) { return new _article_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteCommentSuccess"](data.commentId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _article_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteCommentFail"](error)); }));
        }));
        this.follow = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].FOLLOW)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (slug) {
            return _this.actionsService
                .followUser(slug)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) { return new _article_actions__WEBPACK_IMPORTED_MODULE_7__["FollowSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _article_actions__WEBPACK_IMPORTED_MODULE_7__["FollowFail"](error)); }));
        }));
        this.unFollow = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].UNFOLLOW)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (slug) {
            return _this.actionsService
                .unfollowUser(slug)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) { return new _article_actions__WEBPACK_IMPORTED_MODULE_7__["UnFollowSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _article_actions__WEBPACK_IMPORTED_MODULE_7__["UnFollowFail"](error)); }));
        }));
        this.favorite = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].FAVORITE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (slug) {
            return _this.actionsService
                .favorite(slug)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) { return new _article_actions__WEBPACK_IMPORTED_MODULE_7__["FavoriteSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _article_actions__WEBPACK_IMPORTED_MODULE_7__["FavoriteFail"](error)); }));
        }));
        this.unFavorite = this.actions
            .ofType(_article_actions__WEBPACK_IMPORTED_MODULE_7__["ArticleActionTypes"].UNFAVORITE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (slug) {
            return _this.actionsService
                .unfavorite(slug)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (results) { return new _article_actions__WEBPACK_IMPORTED_MODULE_7__["UnFavoriteSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _article_actions__WEBPACK_IMPORTED_MODULE_7__["UnFavoriteFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "loadArticle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "loadComments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "deleteArticle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "addComment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "deleteComment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "follow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "unFollow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "favorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleEffects.prototype, "unFavorite", void 0);
    ArticleEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"],
            _article_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"],
            _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_2__["ActionsService"],
            _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_8__["NgrxFormsFacade"]])
    ], ArticleEffects);
    return ArticleEffects;
}());



/***/ }),

/***/ "../../libs/article/src/lib/+state/article.facade.ts":
/*!***************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/+state/article.facade.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ArticleFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleFacade", function() { return ArticleFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article.actions */ "../../libs/article/src/lib/+state/article.actions.ts");
/* harmony import */ var _article_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article.selectors */ "../../libs/article/src/lib/+state/article.selectors.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_editor_src_lib_state_editor_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/editor/src/lib/+state/editor.actions */ "../../libs/editor/src/lib/+state/editor.actions.ts");






var ArticleFacade = /** @class */ (function () {
    function ArticleFacade(store) {
        this.store = store;
        this.article$ = this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_4__["articleQuery"].getArticleData);
        this.comments$ = this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_4__["articleQuery"].getComments);
        this.articleLoaded$ = this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_4__["articleQuery"].getArticleLoaded);
        this.authorUsername$ = this.store.select(_article_selectors__WEBPACK_IMPORTED_MODULE_4__["articleQuery"].getAuthorUsername);
    }
    ArticleFacade.prototype.loadArticle = function (slug) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["LoadArticle"](slug));
    };
    ArticleFacade.prototype.loadComments = function (slug) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["LoadComments"](slug));
    };
    ArticleFacade.prototype.follow = function (username) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["Follow"](username));
    };
    ArticleFacade.prototype.unfollow = function (username) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["UnFollow"](username));
    };
    ArticleFacade.prototype.favorite = function (slug) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["Favorite"](slug));
    };
    ArticleFacade.prototype.unfavorite = function (slug) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["UnFavorite"](slug));
    };
    ArticleFacade.prototype.delete = function (slug) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteArticle"](slug));
    };
    ArticleFacade.prototype.deleteComment = function (data) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteComment"](data));
    };
    ArticleFacade.prototype.submit = function (slug) {
        this.store.dispatch(new _article_actions__WEBPACK_IMPORTED_MODULE_3__["AddComment"](slug));
    };
    ArticleFacade.prototype.initializeArticle = function () {
        this.store.dispatch(new _angular_ngrx_nx_realworld_example_app_editor_src_lib_state_editor_actions__WEBPACK_IMPORTED_MODULE_5__["InitializeArticle"]());
    };
    ArticleFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ArticleFacade);
    return ArticleFacade;
}());



/***/ }),

/***/ "../../libs/article/src/lib/+state/article.reducer.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/+state/article.reducer.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: articleInitialState, articleReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleInitialState", function() { return articleInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleReducer", function() { return articleReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _article_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article.actions */ "../../libs/article/src/lib/+state/article.actions.ts");


var articleInitialState = {
    data: {
        slug: '',
        title: '',
        description: '',
        body: '',
        tagList: [],
        createdAt: '',
        updatedAt: '',
        favorited: false,
        favoritesCount: 0,
        images: [],
        author: {
            name: '',
            image: ''
        }
    },
    comments: [],
    loaded: false,
    loading: false
};
function articleReducer(state, action) {
    if (state === void 0) { state = articleInitialState; }
    switch (action.type) {
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].LOAD_ARTICLE_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: action.payload, loaded: true, loading: false });
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].LOAD_ARTICLE_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: articleInitialState.data, loaded: false, loading: false });
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].ADD_COMMENT_SUCCESS: {
            var comments = [action.payload].concat(state.comments);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { comments: comments });
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].DELETE_COMMENT_SUCCESS: {
            var comments = state.comments.filter(function (item) { return item.id !== action.payload; });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { comments: comments });
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].INITIALIZE_ARTICLE: {
            return articleInitialState;
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].DELETE_ARTICLE_FAIL: {
            return articleInitialState;
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].LOAD_COMMENTS_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { comments: action.payload });
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].LOAD_COMMENTS_FAIL: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { comments: articleInitialState.comments });
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].FOLLOW_SUCCESS:
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].UNFOLLOW_SUCCESS: {
            var data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.data);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: data });
        }
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].FAVORITE_SUCCESS:
        case _article_actions__WEBPACK_IMPORTED_MODULE_1__["ArticleActionTypes"].UNFAVORITE_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: action.payload });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "../../libs/article/src/lib/+state/article.selectors.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/+state/article.selectors.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: getArticleData, getComments, getArticleLoaded, getAuthorUsername, articleQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleData", function() { return getArticleData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticleLoaded", function() { return getArticleLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthorUsername", function() { return getAuthorUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articleQuery", function() { return articleQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");

var getArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('article');
var getArticleData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticle, function (state) { return state.data; });
var getComments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticle, function (state) { return state.comments; });
var getArticleLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticle, function (state) { return state.loaded; });
var getAuthorUsername = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getArticle, function (state) { return state.data.author.name; });
var articleQuery = {
    getArticleData: getArticleData,
    getComments: getComments,
    getArticleLoaded: getArticleLoaded,
    getAuthorUsername: getAuthorUsername
};


/***/ }),

/***/ "../../libs/article/src/lib/add-comment/add-comment.component.css":
/*!****************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/add-comment/add-comment.component.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2FydGljbGUvc3JjL2xpYi9hZGQtY29tbWVudC9hZGQtY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "../../libs/article/src/lib/add-comment/add-comment.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/add-comment/add-comment.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-list-errors>\n</app-list-errors>\n\n<div class=\"card comment-form\">\n\t<app-dynamic-form class=\"card-block\" (updateForm)=\"updateForm.emit($event)\" [data$]=\"data$\" [structure$]=\"structure$\" [touchedForm$]=\"touchedForm$\">\n\t</app-dynamic-form>\n\t<div class=\"card-footer\">\n\t\t<img [hidden]=\"!currentUser.image\" [src]=\"currentUser.image\" class=\"comment-author-img\" />\n\t\t<button (click)=\"submit.emit(article.slug)\" class=\"btn btn-sm btn-primary\" type=\"submit\">\n\t\t\tEnviar Comentario\n\t\t</button>\n\t</div>\n</div>"

/***/ }),

/***/ "../../libs/article/src/lib/add-comment/add-comment.component.ts":
/*!***************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/add-comment/add-comment.component.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");



var AddCommentComponent = /** @class */ (function () {
    function AddCommentComponent() {
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddCommentComponent.prototype, "article", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddCommentComponent.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AddCommentComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AddCommentComponent.prototype, "structure$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AddCommentComponent.prototype, "touchedForm$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddCommentComponent.prototype, "submit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddCommentComponent.prototype, "updateForm", void 0);
    AddCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-comment',
            template: __webpack_require__(/*! ./add-comment.component.html */ "../../libs/article/src/lib/add-comment/add-comment.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./add-comment.component.css */ "../../libs/article/src/lib/add-comment/add-comment.component.css")]
        })
    ], AddCommentComponent);
    return AddCommentComponent;
}());



/***/ }),

/***/ "../../libs/article/src/lib/article-comment/article-comment.component.css":
/*!************************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article-comment/article-comment.component.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2FydGljbGUvc3JjL2xpYi9hcnRpY2xlLWNvbW1lbnQvYXJ0aWNsZS1jb21tZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/article/src/lib/article-comment/article-comment.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article-comment/article-comment.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n\t<div class=\"card-block\">\n\t\t<p class=\"card-text\">{{ comment.body }}</p>\n\t</div>\n\t<div class=\"card-footer\">\n\t\t<a class=\"comment-author\" [routerLink]=\"['/profile', comment.author.username]\">\n\t\t\t<img [src]=\"comment.author.image\" class=\"comment-author-img\" />\n\t\t</a>\n\t\t&nbsp;\n\t\t<a class=\"comment-author\" [routerLink]=\"['/profile', comment.author.username]\">\n\t\t\t{{ comment.author.username }}\n\t\t</a>\n\t\t<span class=\"date-posted\">\n\t\t\t{{ comment.createdAt | date: 'longDate' }}\n\t\t</span>\n\t\t<span class=\"mod-options\" [hidden]=\"currentUser.username !== comment.author.username\">\n\t\t\t<i class=\"ion-trash-a\" (click)=\"delete.emit({commentId: comment.id, slug: article.slug})\"></i>\n\t\t</span>\n\t</div>\n</div>"

/***/ }),

/***/ "../../libs/article/src/lib/article-comment/article-comment.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article-comment/article-comment.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ArticleCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCommentComponent", function() { return ArticleCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ArticleCommentComponent = /** @class */ (function () {
    function ArticleCommentComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleCommentComponent.prototype, "currentUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleCommentComponent.prototype, "comment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleCommentComponent.prototype, "article", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleCommentComponent.prototype, "delete", void 0);
    ArticleCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-comment',
            template: __webpack_require__(/*! ./article-comment.component.html */ "../../libs/article/src/lib/article-comment/article-comment.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./article-comment.component.css */ "../../libs/article/src/lib/article-comment/article-comment.component.css")]
        })
    ], ArticleCommentComponent);
    return ArticleCommentComponent;
}());



/***/ }),

/***/ "../../libs/article/src/lib/article-guard.service.ts":
/*!***************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article-guard.service.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ArticleGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleGuardService", function() { return ArticleGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_article_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/article.facade */ "../../libs/article/src/lib/+state/article.facade.ts");




var ArticleGuardService = /** @class */ (function () {
    function ArticleGuardService(facade) {
        this.facade = facade;
    }
    ArticleGuardService.prototype.waitForArticleToLoad = function () {
        return this.facade.articleLoaded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (loaded) { return loaded; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1));
    };
    ArticleGuardService.prototype.canActivate = function (route) {
        var _this = this;
        var slug = route.params['slug'];
        this.facade.loadArticle(slug);
        return this.waitForArticleToLoad().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return _this.facade.loadComments(slug); }));
    };
    ArticleGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_article_facade__WEBPACK_IMPORTED_MODULE_3__["ArticleFacade"]])
    ], ArticleGuardService);
    return ArticleGuardService;
}());



/***/ }),

/***/ "../../libs/article/src/lib/article-meta/article-meta.component.css":
/*!******************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article-meta/article-meta.component.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2FydGljbGUvc3JjL2xpYi9hcnRpY2xlLW1ldGEvYXJ0aWNsZS1tZXRhLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/article/src/lib/article-meta/article-meta.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article-meta/article-meta.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-meta\">\n\t<a [routerLink]=\"['/profile', article.author.username]\">\n\t\t<img [src]=\"article.author.image\" />\n\t</a>\n\t<div class=\"info\">\n\t\t<a class=\"author\" [routerLink]=\"['/profile', article.author.username]\">\n\t\t\t{{ article.author.username }}\n\t\t</a>\n\t\t<span class=\"date\">{{ article.createdAt | date: 'longDate' }}</span>\n\t</div>\n\n\t\n\t<span [hidden]=\"canModify\">\n\t\t<button class=\"btn btn-sm btn-outline-primary\" [ngClass]=\"{'btn-outline-primary': !article.favorited,\n\t\t'btn-primary': article.favorited }\" (click)=\"toggleFavorite()\">\n\t\t\t<i class=\"ion-heart\"></i>\n\t\t\t&nbsp; Favorito\n\t\t\t<span class=\"counter\">({{ article.favoritesCount }})</span>\n\t\t</button>\n\t</span>\n\n</div>"

/***/ }),

/***/ "../../libs/article/src/lib/article-meta/article-meta.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article-meta/article-meta.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: ArticleMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return ArticleMetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ArticleMetaComponent = /** @class */ (function () {
    function ArticleMetaComponent() {
        this.follow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unfollow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unfavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.favorite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ArticleMetaComponent.prototype.toggleFavorite = function () {
        if (this.article.favorited) {
            this.unfavorite.emit(this.article.slug);
        }
        else {
            this.favorite.emit(this.article.slug);
        }
    };
    ArticleMetaComponent.prototype.toggleFollow = function () {
        /*if (this.article.author.following) {
          this.unfollow.emit(this.article.author.username);
        } else {
          this.follow.emit(this.article.author.username);
        }*/
    };
    ArticleMetaComponent.prototype.deleteArticle = function () {
        this.delete.emit(this.article.slug);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleMetaComponent.prototype, "article", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ArticleMetaComponent.prototype, "isAuthenticated", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ArticleMetaComponent.prototype, "canModify", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleMetaComponent.prototype, "follow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleMetaComponent.prototype, "unfollow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleMetaComponent.prototype, "unfavorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleMetaComponent.prototype, "favorite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ArticleMetaComponent.prototype, "delete", void 0);
    ArticleMetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-meta',
            template: __webpack_require__(/*! ./article-meta.component.html */ "../../libs/article/src/lib/article-meta/article-meta.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./article-meta.component.css */ "../../libs/article/src/lib/article-meta/article-meta.component.css")]
        })
    ], ArticleMetaComponent);
    return ArticleMetaComponent;
}());



/***/ }),

/***/ "../../libs/article/src/lib/article.component.css":
/*!************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2FydGljbGUvc3JjL2xpYi9hcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/article/src/lib/article.component.html":
/*!*************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-page\">\n\t<div class=\"banner\">\n\t\t<div class=\"container\">\n\t\t\t<h1>{{ (article$|async).title }}</h1>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<app-article-meta [article]=\"article$ | async\" (follow)=\"follow($event)\" (unfollow)=\"unfollow($event)\" (favorite)=\"favorite($event)\"(unfavorite)=\"unfavorite($event)\" (delete)=\"delete($event)\" [canModify]=\"canModify\">\n\t\t\t\t\t</app-article-meta>\n\t\t\t\t\t<button *ngIf=\"article$ | async; let article; else loading\" (click)=\"buy(article.slug)\" class=\"btn btn-lg btn-warning pull-xs-right\" type=\"button\">\n\t\t\t\t\t\tComprar\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container page\">\n\t\t<div class=\"row article-content\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<div [innerHTML]=\"(article$ | async)?.body | markdown\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<button *ngIf=\"article$ | async; let article; else loading\" (click)=\"buy(article.slug)\" class=\"btn btn-lg btn-warning pull-xs-right\" type=\"button\">\n\t\t\t\t\tComprar\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<hr />\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 offset-md-2\">\n\n\t\t\t\t<app-add-comment *ngIf=\"(isAuthenticated$ | async)\" [article]=\"article$ | async\" [data$]=\"data$\" [structure$]=\"structure$\"\n\t\t\t\t [currentUser]=\"currentUser$ | async\" [touchedForm$]=\"touchedForm$\" (submit)=\"submit($event)\" (updateForm)=\"updateForm($event)\">\n\t\t\t\t</app-add-comment>\n\n\t\t\t\t<div *ngIf=\"!(isAuthenticated$ | async)\">\n\t\t\t\t\t<a [routerLink]=\"['/login']\">Ingresa</a> o\n\t\t\t\t\t<a [routerLink]=\"['/register']\">Registrate</a> para enviar un comentario.\n\t\t\t\t</div>\n\n\t\t\t\t<app-article-comment *ngFor=\"let comment of (comments$ | async)\" [currentUser]=\"currentUser$|async\" (delete)=\"deleteComment($event)\"\n\t\t\t\t [article]=\"article$ | async\" [comment]=\"comment\"></app-article-comment>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "../../libs/article/src/lib/article.component.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_mercadopago__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/mercadopago */ "../../libs/mercadopago/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_article_facade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./+state/article.facade */ "../../libs/article/src/lib/+state/article.facade.ts");








var structure = [
    {
        type: 'TEXTAREA',
        name: 'comment',
        placeholder: 'Escribi un comentario...',
        attrs: {
            rows: 3
        }
    }
];
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(ngrxFormsFacade, facade, auhtFacade, mpService) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.facade = facade;
        this.auhtFacade = auhtFacade;
        this.mpService = mpService;
        this.canModify = false;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.article$ = this.facade.article$;
        this.comments$ = this.facade.comments$;
        this.isAuthenticated$ = this.auhtFacade.isLoggedIn$;
        this.currentUser$ = this.auhtFacade.user$;
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
        this.touchedForm$ = this.ngrxFormsFacade.touched$;
        this.ngrxFormsFacade.setStructure(structure);
        this.ngrxFormsFacade.setData('');
        this.auhtFacade.auht$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (auth) { return auth.loggedIn; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.facade.authorUsername$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (_a) {
            var auth = _a[0], username = _a[1];
            _this.canModify = auth.user.username === username;
        });
    };
    ArticleComponent.prototype.follow = function (username) {
        this.facade.follow(username);
    };
    ArticleComponent.prototype.unfollow = function (username) {
        this.facade.unfollow(username);
    };
    ArticleComponent.prototype.favorite = function (slug) {
        this.facade.favorite(slug);
    };
    ArticleComponent.prototype.unfavorite = function (slug) {
        this.facade.unfavorite(slug);
    };
    ArticleComponent.prototype.delete = function (slug) {
        this.facade.delete(slug);
    };
    ArticleComponent.prototype.deleteComment = function (data) {
        this.facade.deleteComment(data);
    };
    ArticleComponent.prototype.submit = function (slug) {
        this.facade.submit(slug);
    };
    ArticleComponent.prototype.updateForm = function (changes) {
        this.ngrxFormsFacade.updateData(changes);
    };
    ArticleComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.facade.initializeArticle();
    };
    ArticleComponent.prototype.buy = function (slug) {
        this.mpService.getPaymentLink(slug).subscribe(function (link) {
            window.location.href = link;
        });
        ;
    };
    ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-article',
            template: __webpack_require__(/*! ./article.component.html */ "../../libs/article/src/lib/article.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./article.component.css */ "../../libs/article/src/lib/article.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_3__["NgrxFormsFacade"],
            _state_article_facade__WEBPACK_IMPORTED_MODULE_7__["ArticleFacade"],
            _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["AuthFacade"],
            _angular_ngrx_nx_realworld_example_app_mercadopago__WEBPACK_IMPORTED_MODULE_2__["MercadopagoService"]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "../../libs/article/src/lib/article.module.ts":
/*!********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/shared */ "../../libs/shared/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_article_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/article.effects */ "../../libs/article/src/lib/+state/article.effects.ts");
/* harmony import */ var _state_article_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/article.facade */ "../../libs/article/src/lib/+state/article.facade.ts");
/* harmony import */ var _state_article_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./+state/article.reducer */ "../../libs/article/src/lib/+state/article.reducer.ts");
/* harmony import */ var _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-comment/add-comment.component */ "../../libs/article/src/lib/add-comment/add-comment.component.ts");
/* harmony import */ var _article_comment_article_comment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./article-comment/article-comment.component */ "../../libs/article/src/lib/article-comment/article-comment.component.ts");
/* harmony import */ var _article_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./article-guard.service */ "../../libs/article/src/lib/article-guard.service.ts");
/* harmony import */ var _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./article-meta/article-meta.component */ "../../libs/article/src/lib/article-meta/article-meta.component.ts");
/* harmony import */ var _article_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./article.component */ "../../libs/article/src/lib/article.component.ts");
/* harmony import */ var _article_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./article.service */ "../../libs/article/src/lib/article.service.ts");
/* harmony import */ var _markdown_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./markdown.pipe */ "../../libs/article/src/lib/markdown.pipe.ts");


















var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{ path: '', component: _article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"], canActivate: [_article_guard_service__WEBPACK_IMPORTED_MODULE_13__["ArticleGuardService"]] }]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('article', _state_article_reducer__WEBPACK_IMPORTED_MODULE_10__["articleReducer"], { initialState: _state_article_reducer__WEBPACK_IMPORTED_MODULE_10__["articleInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_state_article_effects__WEBPACK_IMPORTED_MODULE_8__["ArticleEffects"]]),
                _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsModule"],
                _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            providers: [_state_article_effects__WEBPACK_IMPORTED_MODULE_8__["ArticleEffects"], _article_service__WEBPACK_IMPORTED_MODULE_16__["ArticleService"], _article_guard_service__WEBPACK_IMPORTED_MODULE_13__["ArticleGuardService"], _state_article_facade__WEBPACK_IMPORTED_MODULE_9__["ArticleFacade"]],
            declarations: [_article_component__WEBPACK_IMPORTED_MODULE_15__["ArticleComponent"], _article_meta_article_meta_component__WEBPACK_IMPORTED_MODULE_14__["ArticleMetaComponent"], _article_comment_article_comment_component__WEBPACK_IMPORTED_MODULE_12__["ArticleCommentComponent"], _markdown_pipe__WEBPACK_IMPORTED_MODULE_17__["MarkdownPipe"], _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_11__["AddCommentComponent"]]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "../../libs/article/src/lib/article.service.ts":
/*!*********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/article.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var ArticleService = /** @class */ (function () {
    function ArticleService(apiService) {
        this.apiService = apiService;
    }
    ArticleService.prototype.get = function (slug) {
        return this.apiService.get('/articles/' + slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.article; }));
    };
    ArticleService.prototype.getComments = function (slug) {
        return this.apiService.get("/articles/" + slug + "/comments").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comments; }));
    };
    ArticleService.prototype.deleteArticle = function (slug) {
        return this.apiService.delete('/articles/' + slug);
    };
    ArticleService.prototype.deleteComment = function (commentId, slug) {
        return this.apiService.delete("/articles/" + slug + "/comments/" + commentId);
    };
    ArticleService.prototype.addComment = function (slug, payload) {
        if (payload === void 0) { payload = ''; }
        return this.apiService
            .post("/articles/" + slug + "/comments", { comment: { body: payload } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comment; }));
    };
    ArticleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "../../libs/article/src/lib/markdown.pipe.ts":
/*!*******************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/article/src/lib/markdown.pipe.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: MarkdownPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPipe", function() { return MarkdownPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "../../node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);



var MarkdownPipe = /** @class */ (function () {
    function MarkdownPipe() {
    }
    MarkdownPipe.prototype.transform = function (content) {
        return marked__WEBPACK_IMPORTED_MODULE_2__(content, { sanitize: true });
    };
    MarkdownPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'markdown' })
    ], MarkdownPipe);
    return MarkdownPipe;
}());



/***/ }),

/***/ "../../libs/mercadopago/src/index.ts":
/*!***********************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/mercadopago/src/index.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MercadopagoService, MercadopagoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_mercadopago_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/mercadopago.service */ "../../libs/mercadopago/src/lib/mercadopago.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MercadopagoService", function() { return _lib_mercadopago_service__WEBPACK_IMPORTED_MODULE_0__["MercadopagoService"]; });

/* harmony import */ var _lib_mercadopago_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/mercadopago.module */ "../../libs/mercadopago/src/lib/mercadopago.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MercadopagoModule", function() { return _lib_mercadopago_module__WEBPACK_IMPORTED_MODULE_1__["MercadopagoModule"]; });





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



/***/ }),

/***/ "../../node_modules/marked/lib/marked.js":
/*!***************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/node_modules/marked/lib/marked.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

;(function(root) {
'use strict';

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  paragraph: /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
  text: /^[^\n]+/
};

block._label = /(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b';

block.html = edit(block.html)
  .replace('comment', /<!--[\s\S]*?-->/)
  .replace('closed', /<(tag)[\s\S]+?<\/\1>/)
  .replace('closing', /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/)
  .replace(/tag/g, block._tag)
  .getRegex();

block.paragraph = edit(block.paragraph)
  .replace('hr', block.hr)
  .replace('heading', block.heading)
  .replace('lheading', block.lheading)
  .replace('tag', '<' + block._tag)
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = edit(block.paragraph)
  .replace('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  .getRegex();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  src = src.replace(/^ +$/gm, '');
  var next,
      loose,
      cap,
      bull,
      b,
      item,
      space,
      i,
      tag,
      l,
      isordered;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      isordered = bull.length > 1;

      this.tokens.push({
        type: 'list_start',
        ordered: isordered,
        start: isordered ? +bull : ''
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      tag = cap[1].toLowerCase();
      if (!this.tokens.links[tag]) {
        this.tokens.links[tag] = {
          href: cap[2],
          title: cap[3]
        };
      }
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
};

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;

inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex()

inline._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = edit(inline.link)
  .replace('inside', inline._inside)
  .replace('href', inline._href)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('inside', inline._inside)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/)
    .replace('email', inline._email)
    .getRegex(),
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: edit(inline.text)
    .replace(']|', '~]|')
    .replace('|', '|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&\'*+/=?^_`{\\|}~-]+@|')
    .getRegex()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('{2,}', '*').getRegex()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = '',
      link,
      text,
      href,
      cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      cap[0] = this.rules._backpedal.exec(cap[0])[0];
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href),
      title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = '',
      l = text.length,
      i = 0,
      ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return text;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return text;
    }
  }
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  if (this.options.baseUrl && !originIndependentUrl.test(href)) {
    href = resolveUrl(this.options.baseUrl, href);
  }
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */

function TextRenderer() {}

// no need for block level renderers

TextRenderer.prototype.strong =
TextRenderer.prototype.em =
TextRenderer.prototype.codespan =
TextRenderer.prototype.del =
TextRenderer.prototype.text = function (text) {
  return text;
}

TextRenderer.prototype.link =
TextRenderer.prototype.image = function(href, title, text) {
  return '' + text;
}

TextRenderer.prototype.br = function() {
  return '';
}

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  // use an InlineLexer with a TextRenderer to extract pure text
  this.inlineText = new InlineLexer(
    src.links,
    merge({}, this.options, {renderer: new TextRenderer()})
  );
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        unescape(this.inlineText.output(this.token.text)));
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = '',
          body = '',
          i,
          row,
          cell,
          j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      body = '';
      var ordered = this.token.ordered,
          start = this.token.start;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered, start);
    }
    case 'list_item_start': {
      body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return {
    replace: function(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function() {
      return new RegExp(regex, opt);
    }
  };
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = base.replace(/[^/]*$/, '');
    }
  }
  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}
var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

/**
 * Marked
 */

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight,
        tokens,
        pending,
        i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer(),
  xhtml: false,
  baseUrl: null
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else {}
})(this || (typeof window !== 'undefined' ? window : global));


/***/ })

}]);
//# sourceMappingURL=angular-ngrx-nx-realworld-example-app-article.js.map