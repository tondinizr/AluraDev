(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comunidade-comunidade-module"],{

/***/ "IcoD":
/*!*******************************************************!*\
  !*** ./src/app/pages/comunidade/comunidade.module.ts ***!
  \*******************************************************/
/*! exports provided: ComunidadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunidadeModule", function() { return ComunidadeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comunidade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunidade.component */ "uuFC");
/* harmony import */ var _comunidade_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comunidade-routing.module */ "eKSc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ComunidadeModule {
}
ComunidadeModule.ɵfac = function ComunidadeModule_Factory(t) { return new (t || ComunidadeModule)(); };
ComunidadeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComunidadeModule });
ComunidadeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _comunidade_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComunidadeRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComunidadeModule, { declarations: [_comunidade_component__WEBPACK_IMPORTED_MODULE_1__["ComunidadeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _comunidade_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComunidadeRoutingModule"]], exports: [_comunidade_component__WEBPACK_IMPORTED_MODULE_1__["ComunidadeComponent"]] }); })();


/***/ }),

/***/ "eKSc":
/*!***************************************************************!*\
  !*** ./src/app/pages/comunidade/comunidade-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ComunidadeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunidadeRoutingModule", function() { return ComunidadeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _comunidade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunidade.component */ "uuFC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _comunidade_component__WEBPACK_IMPORTED_MODULE_1__["ComunidadeComponent"],
    },
];
class ComunidadeRoutingModule {
}
ComunidadeRoutingModule.ɵfac = function ComunidadeRoutingModule_Factory(t) { return new (t || ComunidadeRoutingModule)(); };
ComunidadeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComunidadeRoutingModule });
ComunidadeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComunidadeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "uuFC":
/*!**********************************************************!*\
  !*** ./src/app/pages/comunidade/comunidade.component.ts ***!
  \**********************************************************/
/*! exports provided: ComunidadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunidadeComponent", function() { return ComunidadeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ComunidadeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComunidadeComponent.ɵfac = function ComunidadeComponent_Factory(t) { return new (t || ComunidadeComponent)(); };
ComunidadeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComunidadeComponent, selectors: [["app-comunidade"]], decls: 2, vars: 0, template: function ComunidadeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " comunidade works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb211bmlkYWRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-comunidade-comunidade-module.js.map