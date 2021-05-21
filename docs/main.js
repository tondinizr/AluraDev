(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/welintonr/Documentos/Personal/alura-challenge/src/main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_platform_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/platform/platform.service */ "pWPE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






function MenuComponent_div_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_div_1_h2_1_Template, 2, 0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const plat_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", plat_r1 === "desktop");
} }
const _c0 = function () { return ["/editor"]; };
const _c1 = function () { return ["/comunidade"]; };
class MenuComponent {
    constructor(pS) {
        this.faCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCode"];
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUsers"];
        this.platform = pS.getPlatform();
    }
    ngOnInit() { }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_2__["PlatformService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 13, vars: 9, consts: [[1, "menu"], [4, "ngIf"], ["routerLinkActive", "active", 1, "menu__link", 3, "routerLink"], [1, "menu__link__container"], [1, "menu__link__container__icon", 3, "icon"], [1, "menu__link__text"], ["class", "menu__content__title", 4, "ngIf"], [1, "menu__content__title"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Editor de C\u00F3digo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Comunidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, ctx.platform));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faUsers);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  color: var(--white);\n}\n.menu__content__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  margin-bottom: 1rem;\n  letter-spacing: 0.4em;\n}\n.menu__link[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  opacity: 0.56;\n  transition: opacity 0.3s;\n}\n.menu__link__container[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n  background-color: var(--blue-300);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1rem;\n}\n.menu__link__container__icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.menu__link__text[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.menu__link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVNO0VBQ0UsaUJBQUE7QUFBUjtBQUlJO0VBQ0UsaUJBQUE7QUFGTjtBQU1FO0VBQ0UsWUFBQTtBQUpKO0FBT0U7RUFDRSxVQUFBO0FBTEoiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcblxuICAmX19jb250ZW50X190aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40ZW07XG4gIH1cblxuICAmX19saW5rIHtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBvcGFjaXR5OiAwLjU2O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcblxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtMzAwKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuXG4gICAgICAmX19pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19saW5rOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICAuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/platform/platform.service */ "pWPE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "lCy9");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _author_author_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../author/author.component */ "UdLj");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu/menu.component */ "0oYm");









function HeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-author", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("author", ctx_r0.author);
} }
function HeaderComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_12_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("actived", ctx_r3.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r3.faBars);
} }
function HeaderComponent_div_12_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_12_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.clearSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r4.faTimes);
} }
function HeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HeaderComponent_div_12_div_1_Template, 2, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HeaderComponent_div_12_div_4_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.valueSearch === "" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx_r1.platform) === "tablet" || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx_r1.platform) === "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.valueSearch != "" && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, ctx_r1.platform) === "tablet");
} }
function HeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_18_Template_nav_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.stopPropagation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-menu", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "hr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-author", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r2.isOpen ? "open" : "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("actived", ctx_r2.isOpen)("mobile", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 7, ctx_r2.platform) === "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.faTimes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("author", ctx_r2.author);
} }
class HeaderComponent {
    constructor(pS) {
        this.pS = pS;
        this.valueSearch = '';
        this.isOpen = false;
        this.search = false;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.faAngleUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAngleUp"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBars"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTimes"];
        this.author = {
            name: 'Harry',
            avatarUrl: '../../../assets/User/Photo.png',
        };
        this.platform = pS.getPlatform();
    }
    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
    toggleSearch() {
        this.search = !this.search;
        this.clearSearch();
    }
    clearSearch() {
        this.valueSearch = '';
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_2__["PlatformService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 20, vars: 22, consts: [[1, "header__container"], [1, "header__container__logo"], ["routerLink", "/"], ["src", "../../../assets/Logo.svg", "alt", "Alura Dev"], [1, "header__container__tools"], [1, "header__container__tools__search-bar", 3, "value", "valueChange"], [1, "header__container__tools__search"], [3, "icon", "click"], ["class", "header__container__avatar", 4, "ngIf"], ["class", "header__container__Menu", 4, "ngIf"], ["id", "search__mobile", 1, "search__mobile"], [1, "search__mobile__bar", 3, "value", "valueChange"], [1, "search__mobile__content", 3, "click"], [1, "search__mobile__content__icon", 3, "icon"], ["class", "menu__overlay", 3, "ngClass", "click", 4, "ngIf"], [1, "header__container__avatar"], [3, "author"], [1, "header__container__Menu"], [3, "click", 4, "ngIf"], [3, "click"], ["clas", "menu", 3, "icon"], [3, "icon"], [1, "menu__overlay", 3, "ngClass", "click"], [1, "menu__overlay__toggle"], [1, "menu__overlay__toggle__close", 3, "icon"], [1, "menu__overlay__nav", 3, "click"], [1, "menu__overlay__nav__navigation"], [1, "menu__overlay__nav__separator"], [1, "menu__overlay__nav__user", 3, "author"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-search-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function HeaderComponent_Template_app_search_bar_valueChange_7_listener($event) { return ctx.valueSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_fa_icon_click_9_listener() { return ctx.toggleSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 6, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-search-bar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function HeaderComponent_Template_app_search_bar_valueChange_15_listener($event) { return ctx.valueSearch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_16_listener() { return ctx.clearSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 8, 9, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("header__", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 14, ctx.platform), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.search ? ctx.faAngleUp : ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 16, ctx.platform) === "desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 18, ctx.platform) != "desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("closed", !ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.valueSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.valueSearch === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 20, ctx.platform) != "desktop");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_4__["SearchBarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _author_author_component__WEBPACK_IMPORTED_MODULE_7__["AuthorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["#search__mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header[_ngcontent-%COMP%] {\n  color: var(--white);\n  transition: all 0.3s;\n}\n\n.header__desktop[_ngcontent-%COMP%]   .header__container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 3.5rem;\n  margin: 2rem;\n}\n\n.header__desktop[_ngcontent-%COMP%]   .header__container__icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.header__desktop__avatar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.header__desktop__Menu[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n  font-size: 1.5rem;\n}\n\n.header__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem;\n}\n\n.header__container__logo[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.header__container__tools__search[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header__container__avatar[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.header__container__Menu[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  justify-content: flex-end;\n  font-size: 1.5rem;\n  color: var(--white);\n}\n\n.header__tablet[_ngcontent-%COMP%]   .header__container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 3fr 8fr auto;\n  grid-template-rows: 3.5rem;\n  margin: 2rem;\n  column-gap: 2rem;\n}\n\n.header__tablet[_ngcontent-%COMP%]   .header__container__Menu[_ngcontent-%COMP%]   .actived[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 1s linear;\n}\n\n.header__mobile[_ngcontent-%COMP%]   .header__container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 4fr 1fr 1fr;\n  grid-template-rows: 3.5rem;\n  margin: 1rem 2rem;\n}\n\n.header__mobile[_ngcontent-%COMP%]   .header__container__Menu[_ngcontent-%COMP%]   .actived[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 1s linear;\n}\n\n.header__mobile[_ngcontent-%COMP%]   .header__container__tools__search-bar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.header__mobile[_ngcontent-%COMP%]   .header__container__tools__search[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n  color: var(--white);\n}\n\n.header__mobile[_ngcontent-%COMP%]   #search__mobile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0 2rem;\n  margin-bottom: 2rem;\n  height: 100%;\n  visibility: visible;\n  opacity: 1;\n  transition: width 0.3s;\n  transition: height 0.3s;\n  transition: visibility 0s linear 0s, opacity 300ms;\n}\n\n.header__mobile[_ngcontent-%COMP%]   #search__mobile.closed[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 0;\n  height: 0;\n  opacity: 0;\n  margin-bottom: 0;\n}\n\n.header__mobile[_ngcontent-%COMP%]   #search__mobile[_ngcontent-%COMP%]   .search__mobile__bar[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.header__mobile[_ngcontent-%COMP%]   #search__mobile[_ngcontent-%COMP%]   .search__mobile__content[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 100%;\n  margin-left: 1rem;\n  transition: all 0.5s;\n  display: flex;\n  opacity: 1;\n}\n\n.header__mobile[_ngcontent-%COMP%]   #search__mobile[_ngcontent-%COMP%]   .search__mobile__content.disabled[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  margin-left: 0;\n  opacity: 0;\n}\n\n.header__mobile[_ngcontent-%COMP%]   #search__mobile[_ngcontent-%COMP%]   .search__mobile__content__icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n  color: var(--white);\n}\n\n.menu__overlay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200vh;\n  overflow: hidden;\n  position: fixed;\n  display: flex;\n  top: 0;\n  right: 0;\n  text-align: center;\n  transition: all 0.5s;\n  z-index: 3;\n  -webkit-backdrop-filter: blur(0.1rem);\n          backdrop-filter: blur(0.1rem);\n  background-color: rgba(0, 0, 0, 0.53);\n  box-shadow: -13px 0px 21px 10px rgba(0, 0, 0, 0.53);\n}\n\n.menu__overlay.close[_ngcontent-%COMP%] {\n  width: 0;\n  position: fixed;\n  right: 0;\n  box-shadow: none;\n}\n\n.menu__overlay__toggle[_ngcontent-%COMP%] {\n  color: var(--white);\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  height: 3rem;\n}\n\n.menu__overlay__toggle__close[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--white);\n  margin-top: 3rem;\n  margin-right: 2rem;\n  opacity: 0;\n}\n\n.menu__overlay__toggle__close.actived[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 1s linear;\n}\n\n.menu__overlay__toggle__close.mobile[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.menu__overlay__nav[_ngcontent-%COMP%] {\n  background: #2d415b;\n  border-radius: 8px;\n  position: absolute;\n  right: 0;\n  height: 70vh;\n  margin: 1.25rem;\n  padding: 1.25rem;\n  margin-top: 6rem;\n}\n\n.menu__overlay__nav__navigation[_ngcontent-%COMP%] {\n  margin: 1.25rem;\n}\n\n.menu__overlay__nav__separator[_ngcontent-%COMP%] {\n  width: 12.875rem;\n  opacity: 0.08;\n  border: 1px solid var(--white);\n  margin: 0;\n  margin-bottom: 1rem;\n}\n\n.menu__overlay__nav__user[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFSTtFQUNFLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUVNO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFBUjs7QUFJSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUZOOztBQUtJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBSE47O0FBT0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUxKOztBQU9JO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFMTjs7QUFTTTtFQUNFLGFBQUE7QUFQUjs7QUFXSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBVE47O0FBWUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVZOOztBQWVJO0VBQ0UsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFiTjs7QUFnQlE7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUFkVjs7QUFxQkk7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBbkJOOztBQXNCUTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtBQXBCVjs7QUF5QlE7RUFDRSxhQUFBO0FBdkJWOztBQTBCUTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUF4QlY7O0FBNkJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrREFBQTtBQTNCTjs7QUE2Qk07RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBM0JSOztBQThCTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBNUJSOztBQStCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBN0JSOztBQThCUTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUE1QlY7O0FBK0JRO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQTdCVjs7QUFvQ0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBR0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLHFDQUFBO0VBQ0EsbURBQUE7QUFuQ0Y7O0FBcUNFO0VBQ0UsUUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFuQ0o7O0FBeUNFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXZDSjs7QUF5Q0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQXZDTjs7QUF5Q007RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUF2Q1I7O0FBMENNO0VBQ0UsZ0JBQUE7QUF4Q1I7O0FBNkNFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTNDSjs7QUE2Q0k7RUFDRSxlQUFBO0FBM0NOOztBQThDSTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBNUNOOztBQStDSTtFQUNFLFNBQUE7QUE3Q04iLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaF9fbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICZfX2Rlc2t0b3Age1xuICAgIC5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMy41cmVtO1xuICAgICAgbWFyZ2luOiAycmVtO1xuXG4gICAgICAmX19pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fYXZhdGFyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgICZfX01lbnUge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG4gIH1cblxuICAmX19jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMnJlbTtcblxuICAgICZfX2xvZ28ge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgfVxuXG4gICAgJl9fdG9vbHMge1xuICAgICAgJl9fc2VhcmNoIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19hdmF0YXIge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAmX19NZW51IHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIH1cbiAgfVxuXG4gICZfX3RhYmxldCB7XG4gICAgLmhlYWRlcl9fY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA4ZnIgYXV0bztcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMy41cmVtO1xuICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgY29sdW1uLWdhcDogMnJlbTtcblxuICAgICAgJl9fTWVudSB7XG4gICAgICAgIC5hY3RpdmVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgbGluZWFyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbW9iaWxlIHtcbiAgICAuaGVhZGVyX19jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmciAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuNXJlbTtcbiAgICAgIG1hcmdpbjogMXJlbSAycmVtO1xuXG4gICAgICAmX19NZW51IHtcbiAgICAgICAgLmFjdGl2ZWQge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJl9fdG9vbHMge1xuICAgICAgICAmX19zZWFyY2gtYmFyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fc2VhcmNoIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICNzZWFyY2hfX21vYmlsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMCAycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcztcbiAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMzAwbXM7XG5cbiAgICAgICYuY2xvc2VkIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoX19tb2JpbGVfX2JhciB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2hfX21vYmlsZV9fY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmX19pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubWVudV9fb3ZlcmxheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHotaW5kZXg6IDM7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvL29wYWNpdHk6IDAuNTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuMXJlbSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41Myk7XG4gIGJveC1zaGFkb3c6IC0xM3B4IDBweCAyMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcblxuICAmLmNsb3NlIHtcbiAgICB3aWR0aDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gICYub3BlbiB7XG4gIH1cblxuICAmX190b2dnbGUge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcblxuICAgICZfX2Nsb3NlIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgJi5hY3RpdmVkIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICYubW9iaWxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19uYXYge1xuICAgIGJhY2tncm91bmQ6ICMyZDQxNWI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDcwdmg7XG4gICAgbWFyZ2luOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgbWFyZ2luLXRvcDogNnJlbTtcblxuICAgICZfX25hdmlnYXRpb24ge1xuICAgICAgbWFyZ2luOiAxLjI1cmVtO1xuICAgIH1cblxuICAgICZfX3NlcGFyYXRvciB7XG4gICAgICB3aWR0aDogMTIuODc1cmVtO1xuICAgICAgb3BhY2l0eTogMC4wODtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgJl9fdXNlciB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CB82":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-template/page-template.component.ts ***!
  \****************************************************************/
/*! exports provided: PageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTemplateComponent", function() { return PageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_platform_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/platform/platform.service */ "pWPE");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["*"];
class PageTemplateComponent {
    constructor(pS) {
        this.platform = pS.getPlatform();
    }
    ngOnInit() { }
}
PageTemplateComponent.ɵfac = function PageTemplateComponent_Factory(t) { return new (t || PageTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"])); };
PageTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageTemplateComponent, selectors: [["app-page-template"]], ngContentSelectors: _c0, decls: 6, vars: 5, consts: [[1, "main__sidebar"], [1, "main__sidebar__menu"], [1, "main__content"]], template: function PageTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.platform));
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["main[_ngcontent-%COMP%] {\n  margin: 2rem;\n}\n\n.desktop[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n  grid-template-rows: auto;\n}\n\n.mobile[_ngcontent-%COMP%], .tablet[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.mobile[_ngcontent-%COMP%]   .main__sidebar__menu[_ngcontent-%COMP%], .tablet[_ngcontent-%COMP%]   .main__sidebar__menu[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BhZ2UtdGVtcGxhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQUNGOztBQUVBOztFQUVFLGFBQUE7QUFDRjs7QUFFSTs7RUFDRSxhQUFBO0FBQ04iLCJmaWxlIjoicGFnZS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBtYXJnaW46IDJyZW07XG59XG5cbi5kZXNrdG9wIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG59XG5cbi5tb2JpbGUsXG4udGFibGV0IHtcbiAgbWFyZ2luLXRvcDogMDtcblxuICAubWFpbl9fc2lkZWJhciB7XG4gICAgJl9fbWVudSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "G+Iz":
/*!************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.module.ts ***!
  \************************************************************/
/*! exports provided: SearchBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarModule", function() { return SearchBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _search_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-bar.component */ "lCy9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SearchBarModule {
}
SearchBarModule.ɵfac = function SearchBarModule_Factory(t) { return new (t || SearchBarModule)(); };
SearchBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SearchBarModule });
SearchBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchBarModule, { declarations: [_search_bar_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]], exports: [_search_bar_component__WEBPACK_IMPORTED_MODULE_2__["SearchBarComponent"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_platform_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/platform/platform.service */ "pWPE");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _pages_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-template/page-template.component */ "CB82");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor(pS) {
        this.pS = pS;
        this.title = 'alura-challenge';
        this.platform = '';
        this.isOpen = false;
    }
    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
    }
    onResize() {
        this.changeWidht(window.innerWidth);
    }
    changeWidht(width) {
        if (width <= 576) {
            this.platform = 'Mobile';
        }
        else if (width <= 810) {
            this.platform = 'Tablet';
        }
        else {
            this.platform = 'Desktop';
        }
        setTimeout(() => {
            this.pS.setPlatform(this.platform.toLowerCase());
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-page-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _pages_page_template_page_template_component__WEBPACK_IMPORTED_MODULE_3__["PageTemplateComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UdLj":
/*!*******************************************************!*\
  !*** ./src/app/components/author/author.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/"]; };
class AuthorComponent {
    constructor() { }
    ngOnInit() { }
}
AuthorComponent.ɵfac = function AuthorComponent_Factory(t) { return new (t || AuthorComponent)(); };
AuthorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthorComponent, selectors: [["app-author"]], inputs: { author: "author" }, decls: 4, vars: 5, consts: [[1, "link", 3, "routerLink"], [3, "src", "alt"]], template: function AuthorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Foto usu\u00E1rio ", ctx.author.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.author.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author.name);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".link[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  width: 106px;\n  height: 56px;\n  justify-content: center;\n  border-radius: 8px;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  transition: all 0.3s;\n}\n.link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F1dGhvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UsaUJBQUE7QUFDSjtBQUdBO0VBQ0UscUNBQUE7QUFBRiIsImZpbGUiOiJhdXRob3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGluayB7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwNnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gIHAge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG59XG5cbi5saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "VWfz":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-template/page-template.module.ts ***!
  \*************************************************************/
/*! exports provided: PageTemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTemplateModule", function() { return PageTemplateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-template.component */ "CB82");
/* harmony import */ var src_app_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/menu/menu.module */ "Z/MT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PageTemplateModule {
}
PageTemplateModule.ɵfac = function PageTemplateModule_Factory(t) { return new (t || PageTemplateModule)(); };
PageTemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PageTemplateModule });
PageTemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_2__["MenuModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PageTemplateModule, { declarations: [_page_template_component__WEBPACK_IMPORTED_MODULE_1__["PageTemplateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_components_menu_menu_module__WEBPACK_IMPORTED_MODULE_2__["MenuModule"]], exports: [_page_template_component__WEBPACK_IMPORTED_MODULE_1__["PageTemplateComponent"]] }); })();


/***/ }),

/***/ "WinS":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.component */ "2MiI");
/* harmony import */ var _search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-bar/search-bar.module */ "G+Iz");
/* harmony import */ var _author_author_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../author/author.module */ "f0Vt");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.module */ "Z/MT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_5__["SearchBarModule"],
            _author_author_module__WEBPACK_IMPORTED_MODULE_6__["AuthorModule"],
            _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__["MenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _search_bar_search_bar_module__WEBPACK_IMPORTED_MODULE_5__["SearchBarModule"],
        _author_author_module__WEBPACK_IMPORTED_MODULE_6__["AuthorModule"],
        _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__["MenuModule"]], exports: [_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]] }); })();


/***/ }),

/***/ "Z/MT":
/*!************************************************!*\
  !*** ./src/app/components/menu/menu.module.ts ***!
  \************************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.component */ "0oYm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class MenuModule {
}
MenuModule.ɵfac = function MenuModule_Factory(t) { return new (t || MenuModule)(); };
MenuModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MenuModule });
MenuModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MenuModule, { declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeModule"]], exports: [_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"]] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var highlightjs_line_numbers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlightjs-line-numbers.js */ "gPJM");
/* harmony import */ var highlightjs_line_numbers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlightjs_line_numbers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.module */ "WinS");
/* harmony import */ var _pages_page_template_page_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-template/page-template.module */ "VWfz");
/* harmony import */ var _services_platform_platform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/platform/platform.service */ "pWPE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        _services_platform_platform_service__WEBPACK_IMPORTED_MODULE_7__["PlatformService"],
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__["HIGHLIGHT_OPTIONS"],
            useValue: {
                lineNumbers: true,
            },
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
            _pages_page_template_page_template_module__WEBPACK_IMPORTED_MODULE_6__["PageTemplateModule"],
            ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__["HighlightModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _components_header_header_module__WEBPACK_IMPORTED_MODULE_5__["HeaderModule"],
        _pages_page_template_page_template_module__WEBPACK_IMPORTED_MODULE_6__["PageTemplateModule"],
        ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__["HighlightModule"]] }); })();


/***/ }),

/***/ "f0Vt":
/*!****************************************************!*\
  !*** ./src/app/components/author/author.module.ts ***!
  \****************************************************/
/*! exports provided: AuthorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorModule", function() { return AuthorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _author_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author.component */ "UdLj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthorModule {
}
AuthorModule.ɵfac = function AuthorModule_Factory(t) { return new (t || AuthorModule)(); };
AuthorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AuthorModule });
AuthorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthorModule, { declarations: [_author_component__WEBPACK_IMPORTED_MODULE_2__["AuthorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_author_component__WEBPACK_IMPORTED_MODULE_2__["AuthorComponent"]] }); })();


/***/ }),

/***/ "lCy9":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SearchBarComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    update(event) {
        this.value = event;
        this.valueChange.emit(event);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], inputs: { value: "value" }, outputs: { valueChange: "valueChange" }, decls: 2, vars: 1, consts: [[1, "form"], ["id", "Search", "type", "text", "name", "BusqueAlgo", "placeholder", "Busque por Algo", 1, "form__input", 3, "ngModel", "ngModelChange"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_1_listener($event) { return ctx.update($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".form[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.form__input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: var(--bg-normal);\n  border: none;\n  border-radius: 8px;\n  padding: 1rem;\n  color: var(--white);\n  outline: 0;\n}\n.form__input[_ngcontent-%COMP%]:hover, .form__input[_ngcontent-%COMP%]:focus {\n  background-color: var(--bg-hover);\n  transition: background-color 0.5s;\n}\n.form__input[_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  color: transparent;\n}\n.form__input[_ngcontent-%COMP%]:focus:-moz-placeholder {\n  color: transparent;\n}\n.form__input[_ngcontent-%COMP%]:focus::-moz-placeholder {\n  color: transparent;\n}\n.form__input[_ngcontent-%COMP%]:focus:-ms-input-placeholder {\n  color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUNKO0FBRUU7RUFFRSxpQ0FBQTtFQUNBLGlDQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0FBTEoiLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmX19pbnB1dCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLW5vcm1hbCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuXG4gICZfX2lucHV0OmhvdmVyLFxuICAmX19pbnB1dDpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctaG92ZXIpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgfVxuXG4gICZfX2lucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmX19pbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAmX19pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgJl9faW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "pWPE":
/*!*******************************************************!*\
  !*** ./src/app/services/platform/platform.service.ts ***!
  \*******************************************************/
/*! exports provided: PlatformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformService", function() { return PlatformService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlatformService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    setPlatform(platform) {
        this.subject.next(platform);
    }
    clearData() {
        this.subject.next();
    }
    getPlatform() {
        return this.subject.asObservable();
    }
}
PlatformService.ɵfac = function PlatformService_Factory(t) { return new (t || PlatformService)(); };
PlatformService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlatformService, factory: PlatformService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'editor',
    },
    {
        path: 'comunidade',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-comunidade-comunidade-module */ "pages-comunidade-comunidade-module").then(__webpack_require__.bind(null, /*! ./pages/comunidade/comunidade.module */ "IcoD")).then((m) => m.ComunidadeModule),
    },
    {
        path: 'editor',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-editor-editor-module */ "pages-editor-editor-module").then(__webpack_require__.bind(null, /*! ./pages/editor/editor.module */ "hUiA")).then((m) => m.EditorModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map