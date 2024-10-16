import{c as t,f as i,j as o}from"./chunk-7V7WNOD5.js";var D=i(o(),1);var q=class q extends D.ColumnsBase{};t(q,"LanguageColumns"),q.columnsKey="Administration.Language",q.Fields=(0,D.fieldsProxy)();var b=q;var P=i(o(),1);var u=class u{static getLookup(){return(0,P.getLookup)("Administration.Language")}static async getLookupAsync(){return(0,P.getLookupAsync)("Administration.Language")}};t(u,"LanguageRow"),u.idProperty="Id",u.nameProperty="LanguageName",u.localTextPrefix="Administration.Language",u.lookupKey="Administration.Language",u.deletePermission="Administration:Translation",u.insertPermission="Administration:Translation",u.readPermission="Administration:Translation",u.updatePermission="Administration:Translation",u.Fields=(0,P.fieldsProxy)();var C=u;var N=i(o(),1),T;(e=>(e.baseUrl="Administration/Language",e.Methods={Create:"Administration/Language/Create",Update:"Administration/Language/Update",Delete:"Administration/Language/Delete",Retrieve:"Administration/Language/Retrieve",List:"Administration/Language/List"},["Create","Update","Delete","Retrieve","List"].forEach(s=>{e[s]=function(a,p,r){return(0,N.serviceRequest)(e.baseUrl+"/"+s,a,p,r)}})))(T||(T={}));var E=i(o(),1);var k=class k extends E.ColumnsBase{};t(k,"RoleColumns"),k.columnsKey="Administration.Role",k.Fields=(0,E.fieldsProxy)();var h=k;var S=i(o(),1);var l=class l{static getLookup(){return(0,S.getLookup)("Administration.Role")}static async getLookupAsync(){return(0,S.getLookupAsync)("Administration.Role")}};t(l,"RoleRow"),l.idProperty="RoleId",l.nameProperty="RoleName",l.localTextPrefix="Administration.Role",l.lookupKey="Administration.Role",l.deletePermission="Administration:Security",l.insertPermission="Administration:Security",l.readPermission="Administration:Security",l.updatePermission="Administration:Security",l.Fields=(0,S.fieldsProxy)();var K=l;var F=i(o(),1),M;(e=>(e.baseUrl="Administration/Role",e.Methods={Create:"Administration/Role/Create",Update:"Administration/Role/Update",Delete:"Administration/Role/Delete",Retrieve:"Administration/Role/Retrieve",List:"Administration/Role/List"},["Create","Update","Delete","Retrieve","List"].forEach(s=>{e[s]=function(a,p,r){return(0,F.serviceRequest)(e.baseUrl+"/"+s,a,p,r)}})))(M||(M={}));var w=i(o(),1),B;(e=>(e.baseUrl="Administration/Translation",e.Methods={List:"Administration/Translation/List",Update:"Administration/Translation/Update"},["List","Update"].forEach(s=>{e[s]=function(a,p,r){return(0,w.serviceRequest)(e.baseUrl+"/"+s,a,p,r)}})))(B||(B={}));var O=i(o(),1);var I=class I extends O.ColumnsBase{};t(I,"UserColumns"),I.columnsKey="Administration.User",I.Fields=(0,O.fieldsProxy)();var G=I;var A=i(o(),1);var c=class c{static getLookup(){return(0,A.getLookup)("Administration.User")}static async getLookupAsync(){return(0,A.getLookupAsync)("Administration.User")}};t(c,"UserRow"),c.idProperty="UserId",c.isActiveProperty="IsActive",c.nameProperty="Username",c.localTextPrefix="Administration.User",c.lookupKey="Administration.User",c.deletePermission="Administration:Security",c.insertPermission="Administration:Security",c.readPermission="Administration:Security",c.updatePermission="Administration:Security",c.Fields=(0,A.fieldsProxy)();var H=c;var z=i(o(),1),j;(e=>(e.baseUrl="Administration/User",e.Methods={Create:"Administration/User/Create",Update:"Administration/User/Update",Delete:"Administration/User/Delete",Retrieve:"Administration/User/Retrieve",List:"Administration/User/List"},["Create","Update","Delete","Retrieve","List"].forEach(s=>{e[s]=function(a,p,r){return(0,z.serviceRequest)(e.baseUrl+"/"+s,a,p,r)}})))(j||(j={}));var g=i(o(),1);var x=class x extends g.PrefixedContext{constructor(m){if(super(m),!x.init){x.init=!0;var e=g.StringEditor;(0,g.initFormType)(x,["LanguageId",e,"LanguageName",e])}}};t(x,"LanguageForm"),x.formKey="Administration.Language";var J=x;var Q;(e=>(e.Security="Administration:Security",e.Translation="Administration:Translation"))(Q||(Q={}));var U=i(o(),1);var L=class L extends U.PrefixedContext{constructor(m){if(super(m),!L.init){L.init=!0;var e=U.StringEditor;(0,U.initFormType)(L,["RoleName",e])}}};t(L,"RoleForm"),L.formKey="Administration.Role";var V=L;var X=i(o(),1);var R=class R{};t(R,"RolePermissionRow"),R.idProperty="RolePermissionId",R.nameProperty="PermissionKey",R.localTextPrefix="Administration.RolePermission",R.deletePermission="Administration:Security",R.insertPermission="Administration:Security",R.readPermission="Administration:Security",R.updatePermission="Administration:Security",R.Fields=(0,X.fieldsProxy)();var W=R;var Z=i(o(),1),Y;(e=>(e.baseUrl="Administration/RolePermission",e.Methods={Update:"Administration/RolePermission/Update",List:"Administration/RolePermission/List"},["Update","List"].forEach(s=>{e[s]=function(a,p,r){return(0,Z.serviceRequest)(e.baseUrl+"/"+s,a,p,r)}})))(Y||(Y={}));var n=i(o(),1);var v=class v extends n.PrefixedContext{constructor(m){if(super(m),!v.init){v.init=!0;var e=n.StringEditor,s=n.EmailAddressEditor,a=n.LookupEditor,p=n.ImageUploadEditor,r=n.PasswordEditor,ae=n.BooleanEditor;(0,n.initFormType)(v,["Username",e,"DisplayName",e,"Email",s,"Roles",a,"UserImage",p,"Password",r,"PasswordConfirm",r,"Source",e,"IsActive",ae])}}};t(v,"UserForm"),v.formKey="Administration.User";var $=v;var ee=i(o(),1);var y=class y{};t(y,"UserPermissionRow"),y.idProperty="UserPermissionId",y.nameProperty="PermissionKey",y.localTextPrefix="Administration.UserPermission",y.deletePermission="Administration:Security",y.insertPermission="Administration:Security",y.readPermission="Administration:Security",y.updatePermission="Administration:Security",y.Fields=(0,ee.fieldsProxy)();var _=y;var se=i(o(),1),te;(e=>(e.baseUrl="Administration/UserPermission",e.Methods={Update:"Administration/UserPermission/Update",List:"Administration/UserPermission/List",ListRolePermissions:"Administration/UserPermission/ListRolePermissions",ListPermissionKeys:"Administration/UserPermission/ListPermissionKeys"},["Update","List","ListRolePermissions","ListPermissionKeys"].forEach(s=>{e[s]=function(a,p,r){return(0,se.serviceRequest)(e.baseUrl+"/"+s,a,p,r)}})))(te||(te={}));var oe=i(o(),1);var f=class f{};t(f,"UserRoleRow"),f.idProperty="UserRoleId",f.localTextPrefix="Administration.UserRole",f.deletePermission="Administration:Security",f.insertPermission="Administration:Security",f.readPermission="Administration:Security",f.updatePermission="Administration:Security",f.Fields=(0,oe.fieldsProxy)();var ie=f;var ne=i(o(),1),re;(e=>(e.baseUrl="Administration/UserRole",e.Methods={Update:"Administration/UserRole/Update",List:"Administration/UserRole/List"},["Update","List"].forEach(s=>{e[s]=function(a,p,r){return(0,ne.serviceRequest)(e.baseUrl+"/"+s,a,p,r)}})))(re||(re={}));export{b as a,J as b,C as c,T as d,h as e,V as f,Y as g,K as h,M as i,B as j,G as k,$ as l,te as m,H as n,j as o};
//# sourceMappingURL=chunk-D4YOU4F6.js.map
