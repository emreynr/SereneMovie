import{i as v,j as l,k as p,l as m}from"../../../_chunks/chunk-DSFBFIIU.js";import{c as e,f,g as i,h as n,i as s,j as u}from"../../../_chunks/chunk-7V7WNOD5.js";var R=f(u(),1);var d=f(u(),1);var o=f(u(),1);var w,y,D;w=[o.Decorators.registerClass("MovieTutorial.MovieDB.PersonDialog"),o.Decorators.panel()];var t=class t extends(D=o.EntityDialog){constructor(){super(...arguments);this.form=new l(this.idPrefix)}getFormKey(){return l.formKey}getRowDefinition(){return p}getService(){return m.baseUrl}afterLoadEntity(){super.afterLoadEntity(),this.form.MoviesGrid.personId=this.entityId}};y=i(D),t=s(y,0,"PersonDialog",w,t),e(t,"PersonDialog"),n(y,1,t);var c=t;var x,g,M;x=[d.Decorators.registerClass("MovieTutorial.MovieDB.PersonGrid")];var r=class r extends(M=d.EntityGrid){getColumnsKey(){return v.columnsKey}getDialogType(){return c}getRowDefinition(){return p}getService(){return m.baseUrl}};g=i(M),r=s(g,0,"PersonGrid",x,r),e(r,"PersonGrid"),n(g,1,r);var a=r;var B=e(()=>(0,R.gridPageInit)(a),"default");export{B as default};
//# sourceMappingURL=PersonPage.js.map