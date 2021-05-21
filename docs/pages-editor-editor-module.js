(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-editor-editor-module"],{

/***/ "4A09":
/*!*******************************************************************!*\
  !*** ./src/app/pages/editor/code-editor/code-editor.component.ts ***!
  \*******************************************************************/
/*! exports provided: CodeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorComponent", function() { return CodeEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");






function CodeEditorComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.code);
} }
function CodeEditorComponent_code_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("highlighted", function CodeEditorComponent_code_12_Template_code_highlighted_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onHighlight($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lang", "html")("highlight", (tmp_1_0 = ctx_r1.codeForm.get("code")) == null ? null : tmp_1_0.value)("lineNumbers", true);
} }
class CodeEditorComponent {
    constructor(fb) {
        this.fb = fb;
        this.languageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.codeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.highlighted = false;
    }
    ngOnInit() {
        this.codeForm = this.fb.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    onHighlight(e) {
        this.language = e.language;
    }
    highlight() {
        this.highlighted = !this.highlighted;
        setTimeout(() => {
            var _a;
            this.languageChange.emit(this.language);
            this.codeChange.emit((_a = this.codeForm.get('code')) === null || _a === void 0 ? void 0 : _a.value);
        });
    }
}
CodeEditorComponent.ɵfac = function CodeEditorComponent_Factory(t) { return new (t || CodeEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CodeEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CodeEditorComponent, selectors: [["app-code-editor"]], inputs: { color: "color", code: "code", language: "language" }, outputs: { languageChange: "languageChange", codeChange: "codeChange" }, decls: 17, vars: 7, consts: [[1, "editor"], [1, "editor__container", 3, "formGroup"], [1, "editor__container__border"], [1, "editor__container__border__console"], [1, "editor__container__border__console__decoration"], [1, "dot", "red"], [1, "dot", "yellow"], [1, "dot", "green"], [1, "editor__container__border__console__content"], ["class", "editor__container__border__console__content__edit", 4, "ngIf"], [1, "editor__container__border__console__content__code"], [3, "lang", "highlight", "lineNumbers", "highlighted", 4, "ngIf"], [1, "editor__highlight"], [1, "editor__highlight__button", 3, "disabled", "click"], [1, "editor__container__border__console__content__edit"], ["formControlName", "code", 1, "editor__container__border__console__content__edit__code", 3, "value"], [3, "lang", "highlight", "lineNumbers", "highlighted"]], template: function CodeEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CodeEditorComponent_div_9_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pre", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CodeEditorComponent_code_12_Template, 1, 3, "code", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CodeEditorComponent_Template_button_click_15_listener() { return ctx.highlight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_5_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.codeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.highlighted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.highlighted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.codeForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !((tmp_5_0 = ctx.codeForm.get("code")) == null ? null : tmp_5_0.value) ? "Digite o c\u00F3digo" : ctx.highlighted ? "Editar o codigo" : "Visualizar com o highlight", " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__["Highlight"]], styles: [".editor[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.editor__container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.editor__container__border[_ngcontent-%COMP%] {\n  height: 15rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  border-radius: 0.5rem;\n}\n.editor__container__border__console[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  border-radius: 0.5rem;\n  resize: none;\n}\n.editor__container__border__console__decoration[_ngcontent-%COMP%] {\n  margin: 1rem;\n  align-self: flex-start;\n  display: flex;\n}\n.editor__container__border__console__decoration[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-right: 0.5rem;\n}\n.editor__container__border__console__decoration[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background: #ff5f56;\n}\n.editor__container__border__console__decoration[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  background: #ffbd2e;\n}\n.editor__container__border__console__decoration[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  background: #27c93f;\n}\n.editor__container__border__console__content[_ngcontent-%COMP%] {\n  width: calc(100% - 2rem);\n  height: 43.75rem;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  background: none;\n  box-shadow: none;\n  border: none;\n}\n.editor__container__border__console__content__edit[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 11.25rem;\n}\n.editor__container__border__console__content__edit__code[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-family: \"Roboto Mono\", monospace;\n  resize: none;\n  background: none;\n  color: var(--white);\n  border: none;\n  outline: none;\n}\n.editor__container__border__console__content__edit__code[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  \n}\n.editor__container__border__console__content__edit__code[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--dark-blue);\n  \n  opacity: 0.5;\n}\n.editor__container__border__console__content__edit__code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--blue-300);\n  \n  border-radius: 20px;\n  \n  border: 3px solid var(--dark-blue);\n  \n}\n.editor__container__border__console__content__code[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: flex;\n  white-space: pre-wrap;\n}\n.editor__container__border__console__content__code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: none;\n  width: 100%;\n  height: 11.25rem;\n  padding: 0;\n}\n.editor__container__border__console__content__code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  \n}\n.editor__container__border__console__content__code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--dark-blue);\n  \n  opacity: 0.5;\n}\n.editor__container__border__console__content__code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--blue-300);\n  \n  border-radius: 20px;\n  \n  border: 3px solid var(--dark-blue);\n  \n}\n.editor__highlight[_ngcontent-%COMP%] {\n  height: 3.5rem;\n  width: 100%;\n  margin-top: 2rem;\n}\n.editor__highlight__button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  color: var(--white);\n  font-size: 1rem;\n  background: rgba(80, 129, 251, 0.08);\n  border-radius: 0.5rem;\n  border: none;\n  transition: all 0.3s;\n  outline: none;\n}\n.editor__highlight__button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  color: var(--white);\n}\n.editor__highlight__button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: rgba(80, 129, 251, 0.16);\n}\n.editor__highlight__button[_ngcontent-%COMP%]:focus:not([disabled]) {\n  background: rgba(80, 129, 251, 0.24);\n}\n.editor__highlight__button[_ngcontent-%COMP%]:active:not([disabled]) {\n  background: rgba(80, 129, 251, 0.16);\n  border: 4px solid rgba(80, 129, 251, 0.24);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUNJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQ047QUFDTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBQ1I7QUFDUTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDVjtBQUNVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBQ1o7QUFFVTtFQUNFLG1CQUFBO0FBQVo7QUFHVTtFQUNFLG1CQUFBO0FBRFo7QUFJVTtFQUNFLG1CQUFBO0FBRlo7QUFNUTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpWO0FBTVU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSlo7QUFNWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSmQ7QUFPWTtFQUNFLFdBQUE7RUFBYSxrQ0FBQTtBQUozQjtBQU9ZO0VBQ0UsNEJBQUE7RUFBOEIsK0JBQUE7RUFDOUIsWUFBQTtBQUpkO0FBT1k7RUFDRSxpQ0FBQTtFQUFtQyw4QkFBQTtFQUNuQyxtQkFBQTtFQUFxQixrQ0FBQTtFQUNyQixrQ0FBQTtFQUFvQyx3Q0FBQTtBQUZsRDtBQU1VO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBSlo7QUFNWTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUpkO0FBT1k7RUFDRSxXQUFBO0VBQWEsa0NBQUE7QUFKM0I7QUFPWTtFQUNFLDRCQUFBO0VBQThCLCtCQUFBO0VBQzlCLFlBQUE7QUFKZDtBQU9ZO0VBQ0UsaUNBQUE7RUFBbUMsOEJBQUE7RUFDbkMsbUJBQUE7RUFBcUIsa0NBQUE7RUFDckIsa0NBQUE7RUFBb0Msd0NBQUE7QUFGbEQ7QUFVRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFSSjtBQVVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQVJOO0FBV0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFUTjtBQVlJO0VBQ0Usb0NBQUE7QUFWTjtBQWFJO0VBQ0Usb0NBQUE7QUFYTjtBQWNJO0VBQ0Usb0NBQUE7RUFDQSwwQ0FBQTtBQVpOIiwiZmlsZSI6ImNvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICZfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJl9fYm9yZGVyIHtcbiAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcblxuICAgICAgJl9fY29uc29sZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICByZXNpemU6IG5vbmU7XG5cbiAgICAgICAgJl9fZGVjb3JhdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgIC5kb3Qge1xuICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjVmNTY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnllbGxvdyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiZDJlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5ncmVlbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjdjOTNmO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2NvbnRlbnQge1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICAgICAgICBoZWlnaHQ6IDQzLjc1cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgICAgICAmX19lZGl0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTEuMjVyZW07XG5cbiAgICAgICAgICAgICZfX2NvZGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gTW9ub1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19jb2RlOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMnB4OyAvKiB3aWR0aCBvZiB0aGUgZW50aXJlIHNjcm9sbGJhciAqL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX19jb2RlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmx1ZSk7IC8qIGNvbG9yIG9mIHRoZSB0cmFja2luZyBhcmVhICovXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJl9fY29kZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLTMwMCk7IC8qIGNvbG9yIG9mIHRoZSBzY3JvbGwgdGh1bWIgKi9cbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDsgLyogcm91bmRuZXNzIG9mIHRoZSBzY3JvbGwgdGh1bWIgKi9cbiAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tZGFyay1ibHVlKTsgLyogY3JlYXRlcyBwYWRkaW5nIGFyb3VuZCBzY3JvbGwgdGh1bWIgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmX19jb2RlIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuXG4gICAgICAgICAgICBjb2RlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTEuMjVyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEycHg7IC8qIHdpZHRoIG9mIHRoZSBlbnRpcmUgc2Nyb2xsYmFyICovXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvZGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibHVlKTsgLyogY29sb3Igb2YgdGhlIHRyYWNraW5nIGFyZWEgKi9cbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb2RlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtMzAwKTsgLyogY29sb3Igb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAvKiByb3VuZG5lc3Mgb2YgdGhlIHNjcm9sbCB0aHVtYiAqL1xuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1kYXJrLWJsdWUpOyAvKiBjcmVhdGVzIHBhZGRpbmcgYXJvdW5kIHNjcm9sbCB0aHVtYiAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2hpZ2hsaWdodCB7XG4gICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcblxuICAgICZfX2J1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgwLCAxMjksIDI1MSwgMC4wOCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uOmRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgwLCAxMjksIDI1MSwgMC4xNik7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uOmZvY3VzOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgwLCAxMjksIDI1MSwgMC4yNCk7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg4MCwgMTI5LCAyNTEsIDAuMTYpO1xuICAgICAgYm9yZGVyOiA0cHggc29saWQgcmdiYSg4MCwgMTI5LCAyNTEsIDAuMjQpO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "GfZH":
/*!****************************************************************!*\
  !*** ./src/app/pages/editor/code-editor/code-editor.module.ts ***!
  \****************************************************************/
/*! exports provided: CodeEditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeEditorModule", function() { return CodeEditorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-highlightjs */ "OtPg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _code_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-editor.component */ "4A09");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CodeEditorModule {
}
CodeEditorModule.ɵfac = function CodeEditorModule_Factory(t) { return new (t || CodeEditorModule)(); };
CodeEditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CodeEditorModule });
CodeEditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__["HighlightModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CodeEditorModule, { declarations: [_code_editor_component__WEBPACK_IMPORTED_MODULE_3__["CodeEditorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_1__["HighlightModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]], exports: [_code_editor_component__WEBPACK_IMPORTED_MODULE_3__["CodeEditorComponent"]] }); })();


/***/ }),

/***/ "ceVp":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/editor/project-properties/project-properties.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProjectPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPropertiesComponent", function() { return ProjectPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_platform_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/platform/platform.service */ "pWPE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ProjectPropertiesComponent {
    constructor(fb, pS) {
        this.fb = fb;
        this.color = '#6BD1FF';
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.platform = pS.getPlatform();
    }
    ngOnInit() {
        this.propertiesForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            language: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            color: [this.color, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            codigo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.onColorChange();
    }
    onColorChange() {
        var _a;
        const cor = (_a = this.propertiesForm.get('color')) === null || _a === void 0 ? void 0 : _a.value;
        this.colorChange.emit(cor);
    }
    handleChange(event) {
        console.log(event);
        console.log(this.language);
        console.log(this.codigo);
    }
    sendData() {
        console.table(this.propertiesForm.value);
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (changes.language !== undefined) {
            if ((changes === null || changes === void 0 ? void 0 : changes.language.currentValue) !== '') {
                (_a = this.propertiesForm
                    .get('language')) === null || _a === void 0 ? void 0 : _a.setValue(changes.language.currentValue);
            }
        }
        if (changes.language !== undefined) {
            if (changes.codigo.currentValue !== '') {
                (_b = this.propertiesForm
                    .get('codigo')) === null || _b === void 0 ? void 0 : _b.setValue(changes.codigo.currentValue);
            }
        }
    }
}
ProjectPropertiesComponent.ɵfac = function ProjectPropertiesComponent_Factory(t) { return new (t || ProjectPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_2__["PlatformService"])); };
ProjectPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectPropertiesComponent, selectors: [["app-project-properties"]], inputs: { color: "color", language: "language", codigo: "codigo" }, outputs: { colorChange: "colorChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 8, consts: [[3, "formGroup"], [1, "options__project"], [1, "options__project__title"], ["formControlName", "name", "type", "text", "placeholder", "Nome do seu projeto", 1, "options__project__input"], ["formControlName", "description", "name", "", "placeholder", "Descri\u00E7\u00E3o do seu projeto", "id", "", "cols", "30", "rows", "2", 1, "options__project__textarea"], ["id", "personalization", 1, "options__personalization"], [1, "options__personalization__title"], [1, "not-desktop"], ["formControlName", "language", "name", "languages", "id", "languages", "placeholder", "Esperando formata\u00E7\u00E3o", 1, "options__personalization__language"], ["id", "color-input", "formControlName", "color", "type", "color", 1, "options__personalization__input", 3, "change"], ["id", "color-contet", 1, "options__personalization__color"], ["for", "color-input", "id", "pseudo-color-input", "tabindex", "0"], [1, "options__button", 3, "click"]], template: function ProjectPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Seu projeto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Personaliza\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProjectPropertiesComponent_Template_input_change_12_listener() { return ctx.onColorChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectPropertiesComponent_Template_button_click_15_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Salvar projeto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("options ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, ctx.platform), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.propertiesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.color);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".options[_ngcontent-%COMP%] {\n  margin-left: 2.5rem;\n  color: var(--white);\n}\n.options[_ngcontent-%COMP%]:not(.desktop) {\n  margin-left: 0;\n  margin-top: 2.5rem;\n}\n.options[_ngcontent-%COMP%]:not(.desktop)   #personalization[_ngcontent-%COMP%]   .not-desktop[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1rem 1fr;\n  grid-template-rows: 100%;\n}\n.options[_ngcontent-%COMP%]:not(.desktop)   #personalization[_ngcontent-%COMP%]   .not-desktop[_ngcontent-%COMP%]   #languages[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.options__project__title[_ngcontent-%COMP%], .options__personalization__title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 0.75rem;\n  margin-bottom: 1rem;\n  letter-spacing: 0.4em;\n}\n.options__project__input[_ngcontent-%COMP%], .options__project__textarea[_ngcontent-%COMP%], .options__personalization__language[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: 1rem;\n  color: var(--white);\n  width: 100%;\n  max-height: 3.5rem;\n  min-height: 2.5rem;\n  border: none;\n  border-radius: 0.5rem;\n  margin-bottom: 1rem;\n  padding: 0.875rem;\n  \n  \n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.16);\n  outline: none;\n}\n.options__project__textarea[_ngcontent-%COMP%] {\n  resize: none;\n  height: 5rem;\n}\n.options__personalization__input[_ngcontent-%COMP%] {\n  visibility: hidden;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  width: 0;\n  height: 0;\n  background-color: none;\n  cursor: default;\n  color: none;\n  border: none;\n  padding: 0;\n}\n.options__personalization__color[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid var(--white);\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  font-size: 0;\n}\n.options__personalization__color[_ngcontent-%COMP%]   #pseudo-color-input[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  display: inline-block;\n  width: 100%;\n  min-height: 3rem;\n  position: relative;\n  z-index: 1;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.3;\n}\n.options__personalization__color[_ngcontent-%COMP%]   #pseudo-color-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0px 0px 12px var(--dark-blue), 0 0 0 14px #88b8ff;\n}\n.options__project__input[_ngcontent-%COMP%]:focus, .options__project__textarea[_ngcontent-%COMP%]:focus, .options__personalization__language[_ngcontent-%COMP%]:focus, .options__button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px #88b8ff;\n}\n.options__personalization[_ngcontent-%COMP%], .options__button[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n.options__button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3.5rem;\n  background: var(--blue-300);\n  border-radius: 0.5rem;\n  border: none;\n  transition: all 0.3s;\n  color: #051d3b;\n  outline: none;\n}\n.options__button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  color: var(--white);\n}\n.options__button[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: var(--blue-200);\n}\n.options__button[_ngcontent-%COMP%]:focus:not([disabled]) {\n  background: var(--blue-100);\n}\n.options__button[_ngcontent-%COMP%]:active:not([disabled]) {\n  background: var(--blue-200);\n  border: 4px solid rgba(80, 129, 251, 0.72);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3QtcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFTTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLHdCQUFBO0FBQVI7QUFFUTtFQUNFLFlBQUE7QUFBVjtBQU1FO0VBRUUseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFMSjtBQVFFO0VBR0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDZ0MsZ0NBQUE7RUFDSCx5QkFBQTtFQUM3QixzQkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtBQVBKO0FBVUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQVJKO0FBV0U7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0tBQUEscUJBQUE7VUFBQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBVEo7QUFZRTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBVko7QUFZSTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVk47QUFhSTtFQUNFLGlFQUFBO0FBWE47QUFlRTtFQUlFLDZCQUFBO0FBaEJKO0FBbUJFO0VBRUUsa0JBQUE7QUFsQko7QUFxQkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQW5CSjtBQXNCRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXBCSjtBQXVCRTtFQUNFLDJCQUFBO0FBckJKO0FBd0JFO0VBQ0UsMkJBQUE7QUF0Qko7QUF5QkU7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FBdkJKIiwiZmlsZSI6InByb2plY3QtcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb25zIHtcbiAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcblxuICAmOm5vdCguZGVza3RvcCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcblxuICAgICNwZXJzb25hbGl6YXRpb24ge1xuICAgICAgLm5vdC1kZXNrdG9wIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMXJlbSAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcblxuICAgICAgICAjbGFuZ3VhZ2VzIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19wcm9qZWN0X190aXRsZSxcbiAgJl9fcGVyc29uYWxpemF0aW9uX190aXRsZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40ZW07XG4gIH1cblxuICAmX19wcm9qZWN0X19pbnB1dCxcbiAgJl9fcHJvamVjdF9fdGV4dGFyZWEsXG4gICZfX3BlcnNvbmFsaXphdGlvbl9fbGFuZ3VhZ2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMy41cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDIuNXJlbTtcblxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjg3NXJlbTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gICZfX3Byb2plY3RfX3RleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgaGVpZ2h0OiA1cmVtO1xuICB9XG5cbiAgJl9fcGVyc29uYWxpemF0aW9uX19pbnB1dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGNvbG9yOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgJl9fcGVyc29uYWxpemF0aW9uX19jb2xvciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDA7XG5cbiAgICAjcHNldWRvLWNvbG9yLWlucHV0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogM3JlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMztcbiAgICB9XG5cbiAgICAjcHNldWRvLWNvbG9yLWlucHV0OmZvY3VzIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEycHggdmFyKC0tZGFyay1ibHVlKSwgMCAwIDAgMTRweCAjODhiOGZmO1xuICAgIH1cbiAgfVxuXG4gICZfX3Byb2plY3RfX2lucHV0OmZvY3VzLFxuICAmX19wcm9qZWN0X190ZXh0YXJlYTpmb2N1cyxcbiAgJl9fcGVyc29uYWxpemF0aW9uX19sYW5ndWFnZTpmb2N1cyxcbiAgJl9fYnV0dG9uOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAycHggIzg4YjhmZjtcbiAgfVxuXG4gICZfX3BlcnNvbmFsaXphdGlvbixcbiAgJl9fYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gIH1cblxuICAmX19idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtMzAwKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGNvbG9yOiAjMDUxZDNiO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmX19idXR0b246ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB9XG5cbiAgJl9fYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS0yMDApO1xuICB9XG5cbiAgJl9fYnV0dG9uOmZvY3VzOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS0xMDApO1xuICB9XG5cbiAgJl9fYnV0dG9uOmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUtMjAwKTtcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDgwLCAxMjksIDI1MSwgMC43Mik7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "hUiA":
/*!***********************************************!*\
  !*** ./src/app/pages/editor/editor.module.ts ***!
  \***********************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.component */ "w/uy");
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-routing.module */ "yIvg");
/* harmony import */ var _code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-editor/code-editor.module */ "GfZH");
/* harmony import */ var _project_properties_project_properties_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-properties/project-properties.module */ "oegX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class EditorModule {
}
EditorModule.ɵfac = function EditorModule_Factory(t) { return new (t || EditorModule)(); };
EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditorRoutingModule"],
            _code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_3__["CodeEditorModule"],
            _project_properties_project_properties_module__WEBPACK_IMPORTED_MODULE_4__["ProjectPropertiesModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EditorModule, { declarations: [_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _editor_routing_module__WEBPACK_IMPORTED_MODULE_2__["EditorRoutingModule"],
        _code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_3__["CodeEditorModule"],
        _project_properties_project_properties_module__WEBPACK_IMPORTED_MODULE_4__["ProjectPropertiesModule"]], exports: [_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"]] }); })();


/***/ }),

/***/ "oegX":
/*!******************************************************************************!*\
  !*** ./src/app/pages/editor/project-properties/project-properties.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProjectPropertiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPropertiesModule", function() { return ProjectPropertiesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _project_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-properties.component */ "ceVp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ProjectPropertiesModule {
}
ProjectPropertiesModule.ɵfac = function ProjectPropertiesModule_Factory(t) { return new (t || ProjectPropertiesModule)(); };
ProjectPropertiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProjectPropertiesModule });
ProjectPropertiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProjectPropertiesModule, { declarations: [_project_properties_component__WEBPACK_IMPORTED_MODULE_2__["ProjectPropertiesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]], exports: [_project_properties_component__WEBPACK_IMPORTED_MODULE_2__["ProjectPropertiesComponent"]] }); })();


/***/ }),

/***/ "w/uy":
/*!**************************************************!*\
  !*** ./src/app/pages/editor/editor.component.ts ***!
  \**************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/platform/platform.service */ "pWPE");
/* harmony import */ var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-editor/code-editor.component */ "4A09");
/* harmony import */ var _project_properties_project_properties_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-properties/project-properties.component */ "ceVp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





class EditorComponent {
    constructor(pS) {
        this.pS = pS;
        this.color = '#6BD1FF';
        this.code = '';
        this.language = '';
        window.dispatchEvent(new Event('resize'));
        this.platform = pS.getPlatform();
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_platform_platform_service__WEBPACK_IMPORTED_MODULE_1__["PlatformService"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], decls: 4, vars: 11, consts: [[3, "code", "language", "color", "codeChange", "languageChange"], [3, "language", "color", "codigo", "colorChange"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-code-editor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("codeChange", function EditorComponent_Template_app_code_editor_codeChange_2_listener($event) { return ctx.code = $event; })("languageChange", function EditorComponent_Template_app_code_editor_languageChange_2_listener($event) { return ctx.language = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-project-properties", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorChange", function EditorComponent_Template_app_project_properties_colorChange_3_listener($event) { return ctx.color = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("editor__", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 9, ctx.platform), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.code)("language", ctx.language)("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("language", ctx.language)("color", ctx.color)("codigo", ctx.code);
    } }, directives: [_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_2__["CodeEditorComponent"], _project_properties_project_properties_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPropertiesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".editor__desktop[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0FBQUoiLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRvciB7XG4gICZfX2Rlc2t0b3Age1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "yIvg":
/*!*******************************************************!*\
  !*** ./src/app/pages/editor/editor-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorRoutingModule", function() { return EditorRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.component */ "w/uy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"],
    },
];
class EditorRoutingModule {
}
EditorRoutingModule.ɵfac = function EditorRoutingModule_Factory(t) { return new (t || EditorRoutingModule)(); };
EditorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EditorRoutingModule });
EditorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EditorRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-editor-editor-module.js.map