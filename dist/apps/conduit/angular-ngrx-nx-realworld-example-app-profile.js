(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-ngrx-nx-realworld-example-app-profile"],{

/***/ "../../libs/profile/src/lib/+state/profile.actions.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/+state/profile.actions.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ProfileActionTypes, GetProfile, GetProfileSuccess, GetProfileFail, Follow, FollowSuccess, FollowFail, UnFollow, UnFollowSuccess, UnFollowFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileActionTypes", function() { return ProfileActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfile", function() { return GetProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfileSuccess", function() { return GetProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfileFail", function() { return GetProfileFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Follow", function() { return Follow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowSuccess", function() { return FollowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowFail", function() { return FollowFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFollow", function() { return UnFollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFollowSuccess", function() { return UnFollowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnFollowFail", function() { return UnFollowFail; });
var ProfileActionTypes;
(function (ProfileActionTypes) {
    ProfileActionTypes["GET_PROFILE"] = "[profile] GET_PROFILE";
    ProfileActionTypes["GET_PROFILE_SUCCESS"] = "[profile] GET_PROFILE_SUCCESS";
    ProfileActionTypes["GET_PROFILE_FAIL"] = "[profile] GET_PROFILE_FAIL";
    ProfileActionTypes["FOLLOW"] = "[profile] FOLLOW";
    ProfileActionTypes["FOLLOW_SUCCESS"] = "[profile] FOLLOW_SUCCESS";
    ProfileActionTypes["FOLLOW_FAIL"] = "[profile] FOLLOW_FAIL";
    ProfileActionTypes["UNFOLLOW"] = "[profile] UNFOLLOW";
    ProfileActionTypes["UNFOLLOW_SUCCESS"] = "[profile] UNFOLLOW_SUCCESS";
    ProfileActionTypes["UNFOLLOW_FAIL"] = "[profile] UNFOLLOW_FAIL";
})(ProfileActionTypes || (ProfileActionTypes = {}));
var GetProfile = /** @class */ (function () {
    function GetProfile(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.GET_PROFILE;
    }
    return GetProfile;
}());

var GetProfileSuccess = /** @class */ (function () {
    function GetProfileSuccess(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.GET_PROFILE_SUCCESS;
    }
    return GetProfileSuccess;
}());

var GetProfileFail = /** @class */ (function () {
    function GetProfileFail(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.GET_PROFILE_FAIL;
    }
    return GetProfileFail;
}());

var Follow = /** @class */ (function () {
    function Follow(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.FOLLOW;
    }
    return Follow;
}());

var FollowSuccess = /** @class */ (function () {
    function FollowSuccess(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.FOLLOW_SUCCESS;
    }
    return FollowSuccess;
}());

var FollowFail = /** @class */ (function () {
    function FollowFail(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.FOLLOW_FAIL;
    }
    return FollowFail;
}());

var UnFollow = /** @class */ (function () {
    function UnFollow(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.UNFOLLOW;
    }
    return UnFollow;
}());

var UnFollowSuccess = /** @class */ (function () {
    function UnFollowSuccess(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.UNFOLLOW_SUCCESS;
    }
    return UnFollowSuccess;
}());

var UnFollowFail = /** @class */ (function () {
    function UnFollowFail(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.UNFOLLOW_FAIL;
    }
    return UnFollowFail;
}());



/***/ }),

/***/ "../../libs/profile/src/lib/+state/profile.effects.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/+state/profile.effects.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return ProfileEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/shared */ "../../libs/shared/src/index.ts");
/* harmony import */ var _state_profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../+state/profile.actions */ "../../libs/profile/src/lib/+state/profile.actions.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "../../libs/profile/src/lib/profile.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");








var ProfileEffects = /** @class */ (function () {
    function ProfileEffects(actions, actionsService, profileService) {
        var _this = this;
        this.actions = actions;
        this.actionsService = actionsService;
        this.profileService = profileService;
        this.getProfile = this.actions.ofType(_state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].GET_PROFILE).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["groupBy"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (group) {
            return group.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (username) {
                return _this.profileService.getProfile(username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (results) { return ({
                    type: _state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].GET_PROFILE_SUCCESS,
                    payload: results
                }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({
                        type: _state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].GET_PROFILE_FAIL,
                        payload: error
                    });
                }));
            }));
        }));
        this.follow = this.actions.ofType(_state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].FOLLOW).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (slug) {
            return _this.actionsService.followUser(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (results) { return ({
                type: _state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].FOLLOW_SUCCESS,
                payload: results
            }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({
                    type: _state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].FOLLOW_FAIL,
                    payload: error
                });
            }));
        }));
        this.unFollow = this.actions.ofType(_state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].UNFOLLOW).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(function (slug) {
            return _this.actionsService.unfollowUser(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (results) { return ({
                type: _state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].UNFOLLOW_SUCCESS,
                payload: results
            }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])({
                    type: _state_profile_actions__WEBPACK_IMPORTED_MODULE_2__["ProfileActionTypes"].UNFOLLOW_FAIL,
                    payload: error
                });
            }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileEffects.prototype, "getProfile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileEffects.prototype, "follow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileEffects.prototype, "unFollow", void 0);
    ProfileEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"],
            _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_1__["ActionsService"],
            _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
    ], ProfileEffects);
    return ProfileEffects;
}());



/***/ }),

/***/ "../../libs/profile/src/lib/+state/profile.facade.ts":
/*!***************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/+state/profile.facade.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ProfileFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFacade", function() { return ProfileFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.actions */ "../../libs/profile/src/lib/+state/profile.actions.ts");
/* harmony import */ var _profile_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.reducer */ "../../libs/profile/src/lib/+state/profile.reducer.ts");





var ProfileFacade = /** @class */ (function () {
    function ProfileFacade(store) {
        this.store = store;
        this.profile$ = this.store.select(_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["getProfile"]);
    }
    ProfileFacade.prototype.follow = function (username) {
        this.store.dispatch(new _profile_actions__WEBPACK_IMPORTED_MODULE_3__["Follow"](username));
    };
    ProfileFacade.prototype.unfollow = function (username) {
        this.store.dispatch(new _profile_actions__WEBPACK_IMPORTED_MODULE_3__["UnFollow"](username));
    };
    ProfileFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProfileFacade);
    return ProfileFacade;
}());



/***/ }),

/***/ "../../libs/profile/src/lib/+state/profile.reducer.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/+state/profile.reducer.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: profileInitialState, profileReducer, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileInitialState", function() { return profileInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileReducer", function() { return profileReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.actions */ "../../libs/profile/src/lib/+state/profile.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");



var profileInitialState = {
    username: '',
    bio: '',
    image: '',
    following: false,
    loading: false
};
function profileReducer(state, action) {
    switch (action.type) {
        case _profile_actions__WEBPACK_IMPORTED_MODULE_1__["ProfileActionTypes"].GET_PROFILE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loading: true });
        }
        case _profile_actions__WEBPACK_IMPORTED_MODULE_1__["ProfileActionTypes"].GET_PROFILE_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.payload, { loading: false });
        }
        case _profile_actions__WEBPACK_IMPORTED_MODULE_1__["ProfileActionTypes"].GET_PROFILE_FAIL: {
            return profileInitialState;
        }
        case _profile_actions__WEBPACK_IMPORTED_MODULE_1__["ProfileActionTypes"].FOLLOW_SUCCESS:
        case _profile_actions__WEBPACK_IMPORTED_MODULE_1__["ProfileActionTypes"].UNFOLLOW_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
var getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('profile');


/***/ }),

/***/ "../../libs/profile/src/lib/profile-articles.component.css":
/*!*********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile-articles.component.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3Byb2ZpbGUvc3JjL2xpYi9wcm9maWxlLWFydGljbGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/profile/src/lib/profile-articles.component.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile-articles.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-list>\n</app-article-list>"

/***/ }),

/***/ "../../libs/profile/src/lib/profile-articles.component.ts":
/*!********************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile-articles.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ProfileArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileArticlesComponent", function() { return ProfileArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ProfileArticlesComponent = /** @class */ (function () {
    function ProfileArticlesComponent() {
    }
    ProfileArticlesComponent.prototype.ngOnInit = function () { };
    ProfileArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-articles',
            template: __webpack_require__(/*! ./profile-articles.component.html */ "../../libs/profile/src/lib/profile-articles.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./profile-articles.component.css */ "../../libs/profile/src/lib/profile-articles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileArticlesComponent);
    return ProfileArticlesComponent;
}());



/***/ }),

/***/ "../../libs/profile/src/lib/profile-resolver.service.ts":
/*!******************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile-resolver.service.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ProfileResolverService, ProfileArticlesResolverService, ProfileFavoritesResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolverService", function() { return ProfileResolverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileArticlesResolverService", function() { return ProfileArticlesResolverService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFavoritesResolverService", function() { return ProfileFavoritesResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/article-list */ "../../libs/article-list/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_profile_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./+state/profile.actions */ "../../libs/profile/src/lib/+state/profile.actions.ts");






var ProfileResolverService = /** @class */ (function () {
    function ProfileResolverService(store) {
        this.store = store;
    }
    ProfileResolverService.prototype.resolve = function (route, state) {
        var username = route.params['username'];
        this.store.dispatch(new _state_profile_actions__WEBPACK_IMPORTED_MODULE_4__["GetProfile"](username));
    };
    ProfileResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ProfileResolverService);
    return ProfileResolverService;
}());

var ProfileArticlesResolverService = /** @class */ (function () {
    function ProfileArticlesResolverService(store) {
        this.store = store;
    }
    ProfileArticlesResolverService.prototype.resolve = function (route, state) {
        var username = route.params['username'];
        this.store.dispatch(new _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__["SetListConfig"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__["articleListInitialState"].listConfig, { filters: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__["articleListInitialState"].listConfig.filters, { author: username }) })));
    };
    ProfileArticlesResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ProfileArticlesResolverService);
    return ProfileArticlesResolverService;
}());

var ProfileFavoritesResolverService = /** @class */ (function () {
    function ProfileFavoritesResolverService(store) {
        this.store = store;
    }
    ProfileFavoritesResolverService.prototype.resolve = function (route, state) {
        var username = route.parent.params['username'];
        this.store.dispatch(new _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__["SetListConfig"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__["articleListInitialState"].listConfig, { filters: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__["articleListInitialState"].listConfig.filters, { favorited: username }) })));
    };
    ProfileFavoritesResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ProfileFavoritesResolverService);
    return ProfileFavoritesResolverService;
}());



/***/ }),

/***/ "../../libs/profile/src/lib/profile.component.css":
/*!************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile.component.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3Byb2ZpbGUvc3JjL2xpYi9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/profile/src/lib/profile.component.html":
/*!*************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n\n\t<div class=\"user-info\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-xs-12 col-md-10 offset-md-1\">\n\t\t\t\t\t<img [src]=\"(profile$ | async)?.image\" class=\"user-img\" />\n\t\t\t\t\t<h4 [hidden]=\"(profile$ | async).loading\">{{ (profile$ | async)?.username }}</h4>\n\t\t\t\t\t<p>{{ (profile$ | async)?.bio }}</p>\n\t\t\t\t\t<!--button [hidden]=\"(isUser$ | async)\" class=\"btn btn-sm action-btn\" [ngClass]=\"{'btn-outline-secondary': !(profile$ | async).following, 'btn-secondary': (profile$ | async).following }\"\n\t\t\t\t\t (click)=\"toggleFollowing()\">\n\t\t\t\t\t\t<i class=\"ion-plus-round\"></i>\n\t\t\t\t\t\t&nbsp; {{ (profile$ | async).following ? 'Unfollow' : 'Follow' }} {{ (profile$ | async).username }}\n\t\t\t\t\t</button-->\n\t\t\t\t\t<a [routerLink]=\"['/settings']\" [hidden]=\"!(isUser$ | async)\" class=\"btn btn-sm btn-outline-secondary action-btn\">\n\t\t\t\t\t\t<i class=\"ion-gear-a\"></i> Edit Profile Settings\n\t\t\t\t\t</a>\n\t\t\t\t\t<button class=\"btn btn-sm btn-outline-danger\" [hidden]=\"!(isUser$ | async)\" (click)=\"logout()\">\n\t\t\t\t\t\tClick here to logout.\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-xs-12 col-md-10 offset-md-1\">\n\t\t\t\t<div class=\"articles-toggle\">\n\t\t\t\t\t<ul class=\"nav nav-pills outline-active\">\n\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/profile', (profile$ | async).username]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Mis libros comprados</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t<a class=\"nav-link\" [routerLink]=\"['/profile', (profile$ | async).username, 'favorites']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Libros favoritos</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t\t<router-outlet></router-outlet>\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../libs/profile/src/lib/profile.component.ts":
/*!***********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _state_profile_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./+state/profile.facade */ "../../libs/profile/src/lib/+state/profile.facade.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(facade, authFacade) {
        this.facade = facade;
        this.authFacade = authFacade;
        this.isUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profile$ = this.facade.profile$;
        this.currentUser$ = this.authFacade.user$;
        this.profile$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.currentUser$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_a) {
            var p = _a[0], u = _a[1];
            _this.username = p.username;
            _this.following = p.following;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var p = _a[0], u = _a[1];
            return p.username === u.username;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (isUser) { return _this.isUser$.next(isUser); });
    };
    ProfileComponent.prototype.toggleFollowing = function () {
        if (this.following) {
            this.facade.unfollow(this.username);
        }
        else {
            this.facade.follow(this.username);
        }
    };
    ProfileComponent.prototype.logout = function () {
        this.authFacade.logout();
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "../../libs/profile/src/lib/profile.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./profile.component.css */ "../../libs/profile/src/lib/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_profile_facade__WEBPACK_IMPORTED_MODULE_5__["ProfileFacade"], _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["AuthFacade"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../libs/profile/src/lib/profile.module.ts":
/*!********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/article-list */ "../../libs/article-list/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/shared */ "../../libs/shared/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_profile_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/profile.effects */ "../../libs/profile/src/lib/+state/profile.effects.ts");
/* harmony import */ var _state_profile_facade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./+state/profile.facade */ "../../libs/profile/src/lib/+state/profile.facade.ts");
/* harmony import */ var _state_profile_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./+state/profile.reducer */ "../../libs/profile/src/lib/+state/profile.reducer.ts");
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile-articles.component */ "../../libs/profile/src/lib/profile-articles.component.ts");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile-resolver.service */ "../../libs/profile/src/lib/profile-resolver.service.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile.component */ "../../libs/profile/src/lib/profile.component.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile.service */ "../../libs/profile/src/lib/profile.service.ts");
















var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_ngrx_nx_realworld_example_app_article_list__WEBPACK_IMPORTED_MODULE_1__["ArticleListModule"],
                _angular_ngrx_nx_realworld_example_app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                        resolve: { ProfileResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProfileResolverService"] },
                        canActivate: [_angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]],
                        children: [
                            {
                                path: '',
                                component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_12__["ProfileArticlesComponent"],
                                resolve: { ProfileArticlesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProfileArticlesResolverService"] }
                            },
                            {
                                path: 'favorites',
                                component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_12__["ProfileArticlesComponent"],
                                resolve: { ProfileFavoritesResolverService: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProfileFavoritesResolverService"] }
                            }
                        ]
                    }
                ]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature('profile', _state_profile_reducer__WEBPACK_IMPORTED_MODULE_11__["profileReducer"], { initialState: _state_profile_reducer__WEBPACK_IMPORTED_MODULE_11__["profileInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_state_profile_effects__WEBPACK_IMPORTED_MODULE_9__["ProfileEffects"]])
            ],
            providers: [
                _state_profile_effects__WEBPACK_IMPORTED_MODULE_9__["ProfileEffects"],
                _profile_service__WEBPACK_IMPORTED_MODULE_15__["ProfileService"],
                _profile_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProfileResolverService"],
                _profile_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProfileArticlesResolverService"],
                _profile_resolver_service__WEBPACK_IMPORTED_MODULE_13__["ProfileFavoritesResolverService"],
                _state_profile_facade__WEBPACK_IMPORTED_MODULE_10__["ProfileFacade"]
            ],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], _profile_articles_component__WEBPACK_IMPORTED_MODULE_12__["ProfileArticlesComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "../../libs/profile/src/lib/profile.service.ts":
/*!*********************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/profile/src/lib/profile.service.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var ProfileService = /** @class */ (function () {
    function ProfileService(apiService) {
        this.apiService = apiService;
    }
    ProfileService.prototype.getProfile = function (username) {
        return this.apiService.get('/profiles/' + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.profile; }));
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=angular-ngrx-nx-realworld-example-app-profile.js.map