import{e as w,v as L,w as q}from"./chunk-EF42ZVTH.js";import{$ as M,$a as b,$b as E,Ha as r,Mb as x,Na as m,Oa as a,Pa as l,Qa as S,Ra as v,Rb as F,Sa as T,U as c,Ua as y,W as C,Wa as h,Wb as D,Xa as p,Zb as u,_ as f,_b as P,ac as N,bc as V,cc as I,dc as j,ec as G,fc as R,hb as O,qa as _,ya as s}from"./chunk-BYLOUW66.js";function z(n,i){if(n&1){let d=y();v(0),a(1,"p-dropdown",3),h("onChange",function(o){f(d);let t=p();return M(t.onColorChange(o.value))}),l(),T()}if(n&2){let d=p();s(1),r("options",d.colors)}}function A(n,i){if(n&1&&(a(0,"div"),S(1,"img",4),l()),n&2){let d=p();s(1),r("src","./assets/images/tesla-"+d.selectedModelForDisplayPhoto+"/"+d.selectedColor+".jpg",_)}}var oe=(()=>{let i=class i{constructor(){this.activatedRoute=c(w),this.sharedService=c(D),this.fb=c(j),this.subscription=[],this.colors=[],this.models=[],this.selectedTesla={model:void 0,color:void 0},this.selectedModel="",this.selectedColor="",this.selectedModelForDisplayPhoto="",this.selectForm=this.fb.group({model:["",[u.required]],color:["",[u.required]]})}ngOnInit(){this.loadModels()}loadModels(){this.subscription.push(this.activatedRoute.data.subscribe(e=>{this.models=e.models}))}onModelChange(e){this.selectedModel=e,this.colors=this.getColorsForSelectedModel(),this.selectedTesla.model=this.getSelectedModelObject(this.selectedModel),this.sharedService.setSelectedTesla(this.selectedTesla),this.selectedModelForDisplayPhoto=e.toLowerCase()}getSelectedModelObject(e){return this.models.find(o=>o.code===e)}onColorChange(e){this.selectedColor=e;let o=this.models.find(t=>t.code===this.selectedModel&&t.colors.some(g=>g.code===e));o&&(this.selectedTesla.color=o.colors.find(t=>t.code===e),this.sharedService.setSelectedTesla(this.selectedTesla))}getColorsForSelectedModel(){if(this.selectedModel){let e=this.models.find(o=>o.code===this.selectedModel);if(e&&e.colors)return e.colors}return[]}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=C({type:i,selectors:[["app-tesla-step-one"]],standalone:!0,features:[O],decls:7,vars:4,consts:[["novalidate","",3,"formGroup"],["id","modelSelect","formControlName","model","placeholder","Choose a model","name","model","optionLabel","description","optionValue","code","appendTo","body",3,"options","onChange"],[4,"ngIf"],["id","colorSelect","placeholder","Choose a color","formControlName","color","name","model","optionLabel","description","optionValue","code","appendTo","body",3,"options","onChange"],["alt","",3,"src"]],template:function(o,t){o&1&&(a(0,"section")(1,"h1"),b(2,"Step 1: Choose your Model and color"),l(),a(3,"form",0)(4,"p-dropdown",1),h("onChange",function(k){return t.onModelChange(k.value)}),l(),m(5,z,2,1,"ng-container",2),l(),m(6,A,2,1,"div",2),l()),o&2&&(s(3),r("formGroup",t.selectForm),s(1),r("options",t.models),s(1),r("ngIf",t.selectedModel),s(1),r("ngIf",t.selectedTesla.color))},dependencies:[q,L,G,N,P,E,R,V,I,F,x],styles:["section[_ngcontent-%COMP%]{width:800px;padding:37px 35%}section[_ngcontent-%COMP%]   #modelSelect[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   #colorSelect[_ngcontent-%COMP%]{width:290px!important;margin:0 40px;outline:none}section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:100px}form[_ngcontent-%COMP%]{background-color:transparent}"],changeDetection:0});let n=i;return n})();export{oe as a};
