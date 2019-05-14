(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["angular-ngrx-nx-realworld-example-app-editor"],{

/***/ "../../libs/editor/src/lib/+state/editor.effects.ts":
/*!**************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/+state/editor.effects.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: EditorEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorEffects", function() { return EditorEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editor.service */ "../../libs/editor/src/lib/editor.service.ts");
/* harmony import */ var _editor_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.actions */ "../../libs/editor/src/lib/+state/editor.actions.ts");









var EditorEffects = /** @class */ (function () {
    function EditorEffects(actions, ngrxFormsFacade, editorService) {
        var _this = this;
        this.actions = actions;
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.editorService = editorService;
        this.editor = this.actions
            .ofType(_editor_actions__WEBPACK_IMPORTED_MODULE_7__["EditorActionsType"].PUBLISH_ARTICLE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.ngrxFormsFacade.data$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (_a) {
            var _ = _a[0], data = _a[1];
            return _this.editorService
                .publishArticle(data)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) { return ({ type: '[router] Go', payload: { path: ['article', result.slug] } }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (result) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["SetErrors"](result.error.errors)); }));
        }));
        this.loadArticle = this.actions
            .ofType(_editor_actions__WEBPACK_IMPORTED_MODULE_7__["EditorActionsType"].LOAD_ARTICLE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (action) {
            return _this.editorService
                .get(action.payload)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (results) { return new _editor_actions__WEBPACK_IMPORTED_MODULE_7__["LoadArticleSuccess"](results); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _editor_actions__WEBPACK_IMPORTED_MODULE_7__["LoadArticleFail"](error)); }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorEffects.prototype, "editor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditorEffects.prototype, "loadArticle", void 0);
    EditorEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"],
            _editor_service__WEBPACK_IMPORTED_MODULE_6__["EditorService"]])
    ], EditorEffects);
    return EditorEffects;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/+state/editor.facade.ts":
/*!*************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/+state/editor.facade.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: EditorFacade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorFacade", function() { return EditorFacade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _editor_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.actions */ "../../libs/editor/src/lib/+state/editor.actions.ts");
/* harmony import */ var _editor_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.selectors */ "../../libs/editor/src/lib/+state/editor.selectors.ts");





var EditorFacade = /** @class */ (function () {
    function EditorFacade(store) {
        this.store = store;
        this.article$ = this.store.select(_editor_selectors__WEBPACK_IMPORTED_MODULE_4__["editorQuery"].getArticle);
    }
    EditorFacade.prototype.loadArticle = function (slug) {
        this.store.dispatch(new _editor_actions__WEBPACK_IMPORTED_MODULE_3__["LoadArticle"](slug));
    };
    EditorFacade.prototype.loadArticleSuccess = function (results) {
        this.store.dispatch(new _editor_actions__WEBPACK_IMPORTED_MODULE_3__["LoadArticleSuccess"](results));
    };
    EditorFacade.prototype.loadArticleFail = function (error) {
        this.store.dispatch(new _editor_actions__WEBPACK_IMPORTED_MODULE_3__["LoadArticleFail"](error));
    };
    EditorFacade.prototype.publishArticle = function () {
        this.store.dispatch(new _editor_actions__WEBPACK_IMPORTED_MODULE_3__["PublishArticle"]());
    };
    EditorFacade.prototype.initializeArticle = function () {
        this.store.dispatch(new _editor_actions__WEBPACK_IMPORTED_MODULE_3__["InitializeArticle"]());
    };
    EditorFacade = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], EditorFacade);
    return EditorFacade;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/+state/editor.reducer.ts":
/*!**************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/+state/editor.reducer.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: editorInitialState, editorReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorInitialState", function() { return editorInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorReducer", function() { return editorReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _editor_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.actions */ "../../libs/editor/src/lib/+state/editor.actions.ts");


var editorInitialState = {
    article: {
        slug: '',
        title: '',
        description: '',
        body: '',
        tagList: [],
        createdAt: '',
        updatedAt: '',
        favorited: false,
        images: [],
        favoritesCount: 0,
        author: {
            name: '',
            image: ''
        }
    }
};
function editorReducer(state, action) {
    switch (action.type) {
        case _editor_actions__WEBPACK_IMPORTED_MODULE_1__["EditorActionsType"].LOAD_ARTICLE_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { article: action.payload });
        }
        case _editor_actions__WEBPACK_IMPORTED_MODULE_1__["EditorActionsType"].LOAD_ARTICLE_FAIL:
        case _editor_actions__WEBPACK_IMPORTED_MODULE_1__["EditorActionsType"].INITIALIZE_ARTICLE: {
            return editorInitialState;
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "../../libs/editor/src/lib/+state/editor.selectors.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/+state/editor.selectors.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: getArticle, editorQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArticle", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editorQuery", function() { return editorQuery; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");

var getEditor = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('editor');
var getArticle = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getEditor, function (state) { return state.article; });
var editorQuery = {
    getArticle: getArticle
};


/***/ }),

/***/ "../../libs/editor/src/lib/article-editor/article-editor.component.css":
/*!*********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/article-editor/article-editor.component.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2VkaXRvci9zcmMvbGliL2FydGljbGUtZWRpdG9yL2FydGljbGUtZWRpdG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "../../libs/editor/src/lib/article-editor/article-editor.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/article-editor/article-editor.component.html ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editor-page\">\n\t<div class=\"container page\">\n\t\t<div class=\"row\">\n\n\t\t\t<div class=\"col-md-10 offset-md-1 col-xs-12\">\n\n\t\t\t\t<app-list-errors></app-list-errors>\n\n\t\t\t\t<app-dynamic-form (updateForm)=\"updateForm($event)\" [data$]=\"data$\" [structure$]=\"structure$\">\n\t\t\t\t</app-dynamic-form>\n\n\t\t\t\t<button class=\"btn btn-lg pull-xs-right btn-primary\" type=\"button\" (click)=\"submit()\">\n\t\t\t\t\tPublish Article\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../libs/editor/src/lib/article-editor/article-editor.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/article-editor/article-editor.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: ArticleEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleEditorComponent", function() { return ArticleEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _state_editor_facade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../+state/editor.facade */ "../../libs/editor/src/lib/+state/editor.facade.ts");






var structure = [
    {
        type: 'INPUT',
        name: 'title',
        placeholder: 'Article Title',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
    },
    {
        type: 'INPUT',
        name: 'description',
        placeholder: "What's this article about?",
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
    },
    {
        type: 'TEXTAREA',
        name: 'body',
        placeholder: 'Write your article (in markdown)',
        validator: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
    },
    {
        type: 'INPUT',
        name: 'tagList',
        placeholder: 'Enter Tags',
        validator: []
    }
];
var ArticleEditorComponent = /** @class */ (function () {
    function ArticleEditorComponent(ngrxFormsFacade, router, facade) {
        this.ngrxFormsFacade = ngrxFormsFacade;
        this.router = router;
        this.facade = facade;
    }
    ArticleEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngrxFormsFacade.setStructure(structure);
        this.data$ = this.ngrxFormsFacade.data$;
        this.structure$ = this.ngrxFormsFacade.structure$;
        this.facade.article$.subscribe(function (article) { return _this.ngrxFormsFacade.setData(article); });
    };
    ArticleEditorComponent.prototype.updateForm = function (changes) {
        this.ngrxFormsFacade.updateData(changes);
    };
    ArticleEditorComponent.prototype.submit = function () {
        this.facade.publishArticle();
    };
    ArticleEditorComponent.prototype.ngOnDestroy = function () {
        this.ngrxFormsFacade.initializeForm();
        this.facade.initializeArticle();
    };
    ArticleEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-article-editor',
            template: __webpack_require__(/*! ./article-editor.component.html */ "../../libs/editor/src/lib/article-editor/article-editor.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./article-editor.component.css */ "../../libs/editor/src/lib/article-editor/article-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_1__["NgrxFormsFacade"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _state_editor_facade__WEBPACK_IMPORTED_MODULE_5__["EditorFacade"]])
    ], ArticleEditorComponent);
    return ArticleEditorComponent;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/editor-resolver.service.ts":
/*!****************************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/editor-resolver.service.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: EditorResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorResolverService", function() { return EditorResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _state_editor_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./+state/editor.facade */ "../../libs/editor/src/lib/+state/editor.facade.ts");




var EditorResolverService = /** @class */ (function () {
    function EditorResolverService(facade) {
        this.facade = facade;
    }
    EditorResolverService.prototype.resolve = function (route, state) {
        var slug = route.params['slug'];
        if (slug) {
            this.facade.loadArticle(slug);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    };
    EditorResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_state_editor_facade__WEBPACK_IMPORTED_MODULE_3__["EditorFacade"]])
    ], EditorResolverService);
    return EditorResolverService;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/editor.module.ts":
/*!******************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/editor.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/auth */ "../../libs/auth/src/index.ts");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/ngrx-forms */ "../../libs/ngrx-forms/src/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_editor_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./+state/editor.effects */ "../../libs/editor/src/lib/+state/editor.effects.ts");
/* harmony import */ var _state_editor_facade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./+state/editor.facade */ "../../libs/editor/src/lib/+state/editor.facade.ts");
/* harmony import */ var _state_editor_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./+state/editor.reducer */ "../../libs/editor/src/lib/+state/editor.reducer.ts");
/* harmony import */ var _article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./article-editor/article-editor.component */ "../../libs/editor/src/lib/article-editor/article-editor.component.ts");
/* harmony import */ var _editor_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./editor-resolver.service */ "../../libs/editor/src/lib/editor-resolver.service.ts");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editor.service */ "../../libs/editor/src/lib/editor.service.ts");














var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_ngrx_nx_realworld_example_app_ngrx_forms__WEBPACK_IMPORTED_MODULE_2__["NgrxFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_11__["ArticleEditorComponent"],
                        resolve: { EditorResolverService: _editor_resolver_service__WEBPACK_IMPORTED_MODULE_12__["EditorResolverService"] },
                        canActivate: [_angular_ngrx_nx_realworld_example_app_auth__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
                    },
                    { path: ':slug', component: _article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_11__["ArticleEditorComponent"], resolve: { EditorResolverService: _editor_resolver_service__WEBPACK_IMPORTED_MODULE_12__["EditorResolverService"] } }
                ]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('editor', _state_editor_reducer__WEBPACK_IMPORTED_MODULE_10__["editorReducer"], { initialState: _state_editor_reducer__WEBPACK_IMPORTED_MODULE_10__["editorInitialState"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_state_editor_effects__WEBPACK_IMPORTED_MODULE_8__["EditorEffects"]])
            ],
            declarations: [_article_editor_article_editor_component__WEBPACK_IMPORTED_MODULE_11__["ArticleEditorComponent"]],
            providers: [_state_editor_effects__WEBPACK_IMPORTED_MODULE_8__["EditorEffects"], _editor_service__WEBPACK_IMPORTED_MODULE_13__["EditorService"], _editor_resolver_service__WEBPACK_IMPORTED_MODULE_12__["EditorResolverService"], _state_editor_facade__WEBPACK_IMPORTED_MODULE_9__["EditorFacade"]]
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "../../libs/editor/src/lib/editor.service.ts":
/*!*******************************************************************************************************************!*\
  !*** /home/fer/sources/propio/libros/angular-ngrx-nx-realworld-example-app/libs/editor/src/lib/editor.service.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-ngrx-nx-realworld-example-app/api */ "../../libs/api/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");




var EditorService = /** @class */ (function () {
    function EditorService(apiService) {
        this.apiService = apiService;
    }
    EditorService.prototype.publishArticle = function (article) {
        if (article.slug) {
            return this.apiService.put('/articles/' + article.slug, { article: article }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.article; }));
        }
        return this.apiService.post('/articles/', { article: article }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.article; }));
    };
    EditorService.prototype.get = function (slug) {
        return this.apiService.get('/articles/' + slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.article; }));
    };
    EditorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_ngrx_nx_realworld_example_app_api__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], EditorService);
    return EditorService;
}());



/***/ })

}]);
//# sourceMappingURL=angular-ngrx-nx-realworld-example-app-editor.js.map