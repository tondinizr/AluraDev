(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{hUiA:function(o,e,n){"use strict";n.r(e),n.d(e,"EditorModule",function(){return f});var t=n("ofXK"),r=n("tyNb"),i=n("fXoL"),c=n("pWPE"),_=n("3Pt+"),a=n("OtPg");function d(o,e){if(1&o&&(i.Rb(0,"div",14),i.Pb(1,"textarea",15),i.Qb()),2&o){const o=i.ac();i.Cb(1),i.fc("value",o.code)}}function l(o,e){if(1&o){const o=i.Sb();i.Rb(0,"code",16),i.Yb("highlighted",function(e){return i.lc(o),i.ac().onHighlight(e)}),i.Qb()}if(2&o){const o=i.ac();let e=null;i.fc("lang","html")("highlight",null==(e=o.codeForm.get("code"))?null:e.value)("lineNumbers",!0)}}let s=(()=>{class o{constructor(o){this.fb=o,this.languageChange=new i.n,this.codeChange=new i.n,this.highlighted=!1}ngOnInit(){this.codeForm=this.fb.group({code:["",[_.k.required]]})}onHighlight(o){this.language=o.language}highlight(){this.highlighted=!this.highlighted,setTimeout(()=>{var o;this.languageChange.emit(this.language),this.codeChange.emit(null===(o=this.codeForm.get("code"))||void 0===o?void 0:o.value)})}}return o.\u0275fac=function(e){return new(e||o)(i.Ob(_.b))},o.\u0275cmp=i.Ib({type:o,selectors:[["app-code-editor"]],inputs:{color:"color",code:"code",language:"language"},outputs:{languageChange:"languageChange",codeChange:"codeChange"},decls:17,vars:7,consts:[[1,"editor"],[1,"editor__container",3,"formGroup"],[1,"editor__container__border"],[1,"editor__container__border__console"],[1,"editor__container__border__console__decoration"],[1,"dot","red"],[1,"dot","yellow"],[1,"dot","green"],[1,"editor__container__border__console__content"],["class","editor__container__border__console__content__edit",4,"ngIf"],[1,"editor__container__border__console__content__code"],[3,"lang","highlight","lineNumbers","highlighted",4,"ngIf"],[1,"editor__highlight"],[1,"editor__highlight__button",3,"disabled","click"],[1,"editor__container__border__console__content__edit"],["formControlName","code",1,"editor__container__border__console__content__edit__code",3,"value"],[3,"lang","highlight","lineNumbers","highlighted"]],template:function(o,e){if(1&o&&(i.Rb(0,"div",0),i.Rb(1,"form",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.Rb(4,"div",4),i.Pb(5,"div",5),i.Pb(6,"div",6),i.Pb(7,"div",7),i.Qb(),i.Rb(8,"div",8),i.qc(9,d,2,1,"div",9),i.Rb(10,"pre",10),i.sc(11,"              "),i.qc(12,l,1,3,"code",11),i.sc(13,"\n            "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"div",12),i.Rb(15,"button",13),i.Yb("click",function(){return e.highlight()}),i.sc(16),i.Qb(),i.Qb(),i.Qb()),2&o){let o=null;i.Cb(1),i.fc("formGroup",e.codeForm),i.Cb(1),i.pc("background",e.color),i.Cb(7),i.fc("ngIf",!e.highlighted),i.Cb(3),i.fc("ngIf",e.highlighted),i.Cb(3),i.fc("disabled",!e.codeForm.valid),i.Cb(1),i.uc(" ",null!=(o=e.codeForm.get("code"))&&o.value?e.highlighted?"Editar o codigo":"Visualizar com o highlight":"Digite o c\xf3digo"," ")}},directives:[_.l,_.g,_.d,t.k,_.a,_.f,_.c,a.b],styles:[".editor[_ngcontent-%COMP%]{width:100%}.editor__container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.editor__container__border[_ngcontent-%COMP%]{height:15rem;padding:2rem}.editor__container__border[_ngcontent-%COMP%], .editor__container__border__console[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;border-radius:.5rem}.editor__container__border__console[_ngcontent-%COMP%]{flex-direction:column;width:100%;height:100%;background-color:#000;resize:none}.editor__container__border__console__decoration[_ngcontent-%COMP%]{margin:1rem;align-self:flex-start;display:flex}.editor__container__border__console__decoration[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;margin-right:.5rem}.editor__container__border__console__decoration[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%]{background:#ff5f56}.editor__container__border__console__decoration[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%]{background:#ffbd2e}.editor__container__border__console__decoration[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%]{background:#27c93f}.editor__container__border__console__content[_ngcontent-%COMP%]{width:calc(100% - 2rem);height:43.75rem;border-radius:.5rem;margin-bottom:1rem;font-style:normal;font-weight:400;font-size:.875rem;line-height:1.125rem;background:none;box-shadow:none;border:none}.editor__container__border__console__content__edit[_ngcontent-%COMP%]{display:flex;width:100%;height:11.25rem}.editor__container__border__console__content__edit__code[_ngcontent-%COMP%]{width:100%;height:100%;font-family:Roboto Mono,monospace;resize:none;background:none;color:var(--white);border:none;outline:none}.editor__container__border__console__content__edit__code[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}.editor__container__border__console__content__edit__code[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--dark-blue);opacity:.5}.editor__container__border__console__content__edit__code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--blue-300);border-radius:20px;border:3px solid var(--dark-blue)}.editor__container__border__console__content__code[_ngcontent-%COMP%]{max-width:100%;max-height:100%;display:flex;white-space:pre-wrap}.editor__container__border__console__content__code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:none;width:100%;height:11.25rem;padding:0}.editor__container__border__console__content__code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]::-webkit-scrollbar{width:12px}.editor__container__border__console__content__code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:var(--dark-blue);opacity:.5}.editor__container__border__console__content__code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:var(--blue-300);border-radius:20px;border:3px solid var(--dark-blue)}.editor__highlight[_ngcontent-%COMP%]{height:3.5rem;width:100%;margin-top:2rem}.editor__highlight__button[_ngcontent-%COMP%]{width:100%;height:100%;color:var(--white);font-size:1rem;background:rgba(80,129,251,.08);border-radius:.5rem;border:none;transition:all .3s;outline:none}.editor__highlight__button[_ngcontent-%COMP%]:disabled{opacity:.4;color:var(--white)}.editor__highlight__button[_ngcontent-%COMP%]:hover:not([disabled]){background:rgba(80,129,251,.16)}.editor__highlight__button[_ngcontent-%COMP%]:focus:not([disabled]){background:rgba(80,129,251,.24)}.editor__highlight__button[_ngcontent-%COMP%]:active:not([disabled]){background:rgba(80,129,251,.16);border:4px solid rgba(80,129,251,.24)}"]}),o})();var g=n("2Ojh");let b=(()=>{class o{constructor(o,e,n,t){this.fb=o,this.codeService=n,this.router=t,this.color="",this.colorChange=new i.n,this.count=0,this.colors=["#6BD1FF","#9AFF6B","#6B83FF","#FFC46B","#FF6BCD"],this.platform=e.getPlatform()}ngOnInit(){this.propertiesForm=this.fb.group({name:["",[_.k.required]],description:["",[_.k.required]],language:["",[_.k.required]],color:["",[_.k.required]],codigo:["",[_.k.required]]}),this.onColorChange()}sendData(){var o=Object.assign(Object.assign({},this.propertiesForm.value),{socialData:{comments:0,likes:0,liked:!1}});this.codeService.addCode(o).subscribe(o=>{this.router.navigate(["comunidade",{id:o.id}])})}onColorChange(){var o;const e=this.colors[this.count];this.count<this.colors.length-1?this.count++:this.count=0,this.color=e,this.colorChange.emit(e),null===(o=this.propertiesForm.get("color"))||void 0===o||o.setValue(e)}ngOnChanges(o){var e,n;void 0!==o.language&&""!==(null==o?void 0:o.language.currentValue)&&(null===(e=this.propertiesForm.get("language"))||void 0===e||e.setValue(o.language.currentValue)),void 0!==o.language&&""!==o.codigo.currentValue&&(null===(n=this.propertiesForm.get("codigo"))||void 0===n||n.setValue(o.codigo.currentValue))}}return o.\u0275fac=function(e){return new(e||o)(i.Ob(_.b),i.Ob(c.a),i.Ob(g.a),i.Ob(r.b))},o.\u0275cmp=i.Ib({type:o,selectors:[["app-project-properties"]],inputs:{color:"color",language:"language",codigo:"codigo"},outputs:{colorChange:"colorChange"},features:[i.Ab],decls:16,vars:9,consts:[[3,"formGroup"],[1,"options__project"],[1,"options__project__title"],["formControlName","name","type","text","placeholder","Nome do seu projeto",1,"options__project__input"],["formControlName","description","name","","placeholder","Descri\xe7\xe3o do seu projeto","id","","cols","30","rows","2",1,"options__project__textarea"],["id","personalization",1,"options__personalization"],[1,"options__personalization__title"],[1,"not-desktop"],["formControlName","language","name","languages","id","languages","placeholder","Esperando formata\xe7\xe3o",1,"options__personalization__language"],["id","color",1,"options__personalization__color",3,"click"],[1,"options__personalization__color__selector"],[1,"options__button",3,"disabled","click"]],template:function(o,e){1&o&&(i.Rb(0,"form",0),i.bc(1,"async"),i.Rb(2,"div",1),i.Rb(3,"h2",2),i.sc(4,"Seu projeto"),i.Qb(),i.Pb(5,"input",3),i.Pb(6,"textarea",4),i.Qb(),i.Rb(7,"div",5),i.Rb(8,"h2",6),i.sc(9,"Personaliza\xe7\xe3o"),i.Qb(),i.Rb(10,"section",7),i.Pb(11,"input",8),i.Rb(12,"button",9),i.Yb("click",function(){return e.onColorChange()}),i.Pb(13,"div",10),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"button",11),i.Yb("click",function(){return e.sendData()}),i.sc(15,"Salvar projeto"),i.Qb(),i.Qb()),2&o&&(i.Fb("options ",i.cc(1,7,e.platform),""),i.fc("formGroup",e.propertiesForm),i.Cb(13),i.pc("background",e.color),i.Cb(1),i.fc("disabled",!e.propertiesForm.valid))},directives:[_.l,_.g,_.d,_.a,_.f,_.c],pipes:[t.b],styles:[".options[_ngcontent-%COMP%]{margin-left:2.5rem;color:var(--white)}.options[_ngcontent-%COMP%]:not(.desktop){margin-left:0;margin-top:2.5rem}.options[_ngcontent-%COMP%]:not(.desktop)   #personalization[_ngcontent-%COMP%]   .not-desktop[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:100%;column-gap:1rem}.options[_ngcontent-%COMP%]:not(.desktop)   #personalization[_ngcontent-%COMP%]   .not-desktop[_ngcontent-%COMP%]   #languages[_ngcontent-%COMP%]{height:100%}.options__personalization__title[_ngcontent-%COMP%], .options__project__title[_ngcontent-%COMP%]{text-transform:uppercase;font-size:.75rem;margin-bottom:1rem;letter-spacing:.4em}.options__personalization__language[_ngcontent-%COMP%], .options__project__input[_ngcontent-%COMP%], .options__project__textarea[_ngcontent-%COMP%]{font-family:Inter,sans-serif;font-size:1rem;color:var(--white);width:100%;max-height:3.5rem;min-height:2.5rem;border:none;border-radius:.5rem;margin-bottom:1rem;padding:.875rem;box-sizing:border-box;background:hsla(0,0%,100%,.16);outline:none}.options__project__textarea[_ngcontent-%COMP%]{resize:none;height:5rem}.options__personalization__input[_ngcontent-%COMP%]{visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:0;height:0;background-color:none;cursor:default;color:none;border:none;padding:0}.options__personalization__color[_ngcontent-%COMP%]{width:100%;height:3.5rem;border:1px solid #fff;border-radius:.5rem;font-size:0;outline:none;background:var(--dark-blue);padding:.5rem;transition:padding .1s,border .2s}.options__personalization__color__selector[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:.25rem}.options__personalization__color[_ngcontent-%COMP%]:active{padding:0;border:0}.options__button[_ngcontent-%COMP%]:focus, .options__personalization__color[_ngcontent-%COMP%]:active, .options__personalization__language[_ngcontent-%COMP%]:focus, .options__project__input[_ngcontent-%COMP%]:focus, .options__project__textarea[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 2px #88b8ff;transition:box-shadow .3s}.options__button[_ngcontent-%COMP%], .options__personalization[_ngcontent-%COMP%]{margin-top:1.5rem}.options__button[_ngcontent-%COMP%]{width:100%;height:3.5rem;background:var(--blue-300);border-radius:.5rem;border:none;transition:all .3s;color:#051d3b;outline:none}.options__button[_ngcontent-%COMP%]:disabled{opacity:.4;color:var(--white)}.options__button[_ngcontent-%COMP%]:hover:not([disabled]){background:var(--blue-200)}.options__button[_ngcontent-%COMP%]:focus:not([disabled]){background:var(--blue-100)}.options__button[_ngcontent-%COMP%]:active:not([disabled]){background:var(--blue-200);border:4px solid rgba(80,129,251,.72)}"]}),o})();const u=[{path:"",component:(()=>{class o{constructor(o){this.pS=o,this.color="#6BD1FF",this.code="",this.language="",window.dispatchEvent(new Event("resize")),this.platform=o.getPlatform()}}return o.\u0275fac=function(e){return new(e||o)(i.Ob(c.a))},o.\u0275cmp=i.Ib({type:o,selectors:[["app-editor"]],decls:4,vars:11,consts:[[3,"code","language","color","codeChange","languageChange"],[3,"language","color","codigo","colorChange"]],template:function(o,e){1&o&&(i.Rb(0,"section"),i.bc(1,"async"),i.Rb(2,"app-code-editor",0),i.Yb("codeChange",function(o){return e.code=o})("languageChange",function(o){return e.language=o}),i.Qb(),i.Rb(3,"app-project-properties",1),i.Yb("colorChange",function(o){return e.color=o}),i.Qb(),i.Qb()),2&o&&(i.Fb("editor__",i.cc(1,9,e.platform),""),i.Cb(2),i.fc("code",e.code)("language",e.language)("color",e.color),i.Cb(1),i.fc("language",e.language)("color",e.color)("codigo",e.code))},directives:[s,b],pipes:[t.b],styles:[".editor__desktop[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr;grid-template-rows:auto}"]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.Mb({type:o}),o.\u0275inj=i.Lb({imports:[[r.e.forChild(u)],r.e]}),o})(),p=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.Mb({type:o}),o.\u0275inj=i.Lb({imports:[[t.c,a.c,_.j]]}),o})(),m=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.Mb({type:o}),o.\u0275inj=i.Lb({imports:[[t.c,_.j,r.e]]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.Mb({type:o}),o.\u0275inj=i.Lb({imports:[[t.c,h,p,m]]}),o})()}}]);