(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["events"],{"057f":function(t,e,a){var i=a("fc6a"),s=a("241c").f,n={}.toString,r="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return s(t)}catch(e){return r.slice()}};t.exports.f=function(t){return r&&"[object Window]"==n.call(t)?o(t):s(i(t))}},1962:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"d",(function(){return c}));var i=a("780a");function s(t){return Object(i["a"])({url:"/events/",method:"GET",params:t})}function n(t){return Object(i["a"])({url:"/events/".concat(t,"/"),method:"GET"})}function r(t){return Object(i["a"])({url:"/events/",method:"POST",data:t})}function o(t,e){return Object(i["a"])({url:"/events/".concat(t,"/"),method:"PUT",data:e})}function c(t){return Object(i["a"])({url:"/events/".concat(t,"/"),method:"DELETE"})}},"1e1d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",t._l(t.titleStack,(function(e,i){return a("li",{key:i},[t._v(" "+t._s(e)+" ")])})),0)])]),a("EventModal",{attrs:{"is-active":t.isModalActive},on:{cancel:t.cancel}}),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-light",on:{click:function(e){t.isModalActive=!0}}},[a("b-icon",{attrs:{icon:"calendar-week","custom-size":"default"}}),a("span",[t._v("Create event")])],1)])])])],1)])},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":"",width:700,scroll:"keep"},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("New Event")])]),a("section",{staticClass:"modal-card-body"},[a("EventForm",{ref:"form"})],1),a("footer",{staticClass:"modal-card-foot"},[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading},on:{click:function(e){return e.preventDefault(),t.confirm(e)}}},[t._v(" Create event")]),a("button",{staticClass:"button is-danger",on:{click:t.cancel}},[t._v("Cancel")])],1)])])},r=[],o=(a("96cf"),a("1da1")),c=a("6882"),l={name:"EventModal",components:{EventForm:c["a"]},props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isLoading:!1,isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$refs.form.submit();case 3:t.isLoading=!1,t.isModalActive=!1,t.$emit("confirm");case 6:case"end":return e.stop()}}),e)})))()}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},u=l,d=(a("f572"),a("2877")),f=Object(d["a"])(u,n,r,!1,null,null,null),m=f.exports,p={name:"TitleBar",components:{EventModal:m},data:function(){return{isModalActive:!1}},props:{titleStack:{type:Array,default:function(){return[]}}},methods:{cancel:function(){this.isModalActive=!1}}},b=p,v=Object(d["a"])(b,i,s,!1,null,null,null);e["a"]=v.exports},"503b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title is-3"},[t._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[t._t("right")],2)])])])])},s=[],n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},r=n,o=a("2877"),c=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=c.exports},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"5ac0":function(t,e,a){},"5f5f":function(t,e,a){},6882:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{label:"Title",message:"Event name"}},[a("b-input",{attrs:{placeholder:"e.g. SINABIA 2019",name:"title",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("b-field",{attrs:{horizontal:"",label:"Place",message:"Event location"}},[a("b-select",{attrs:{placeholder:"Select location",expanded:""},model:{value:t.form.place,callback:function(e){t.$set(t.form,"place",e)},expression:"form.place"}},[a("option",{attrs:{value:"Online"}},[t._v("Online")]),a("option",{attrs:{value:"ITM"}},[t._v("ITM")]),a("option",{attrs:{value:"G4"}},[t._v("G4")]),a("option",{attrs:{value:"Norte"}},[t._v("Norte")]),a("option",{attrs:{value:"Poniente"}},[t._v("Poniente")]),a("option",{attrs:{value:""}},[t._v("Other")])])],1),a("b-field",{attrs:{horizontal:"",label:"Type",message:"Event type"}},[a("b-select",{attrs:{placeholder:"Select a type",expanded:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("option",{attrs:{value:"Workshop"}},[t._v("Workshop")]),a("option",{attrs:{value:"Course"}},[t._v("Course")]),a("option",{attrs:{value:"Webinar"}},[t._v("Webinar")]),a("option",{attrs:{value:"Simposium"}},[t._v("Simposium")]),a("option",{attrs:{value:""}},[t._v("Other")])])],1),a("b-field",{attrs:{horizontal:"",label:"Division",message:"Division event"}},[a("b-select",{attrs:{placeholder:"Select division",expanded:""},model:{value:t.form.division,callback:function(e){t.$set(t.form,"division",e)},expression:"form.division"}},t._l(t.$store.state.divisions,(function(t){return a("option",{key:t.id,attrs:{label:t.name},domProps:{value:t.id}})})),0)],1),t.form.open_to_public?t._e():a("b-field",{attrs:{label:"Quorum",message:"Max participants",horizontal:""}},[a("b-input",{attrs:{name:"max",min:"0",max:"100",type:"number"},model:{value:t.form.corum,callback:function(e){t.$set(t.form,"corum",e)},expression:"form.corum"}})],1),a("b-field",{attrs:{horizontal:""}},[a("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-link"},model:{value:t.form.open_to_public,callback:function(e){t.$set(t.form,"open_to_public",e)},expression:"form.open_to_public"}},[t._v(" Open to the public ")])],1),a("b-field",{attrs:{horizontal:"",label:"Date start",message:"Event start"}},[a("b-datetimepicker",{attrs:{placeholder:"Select a datetime...",icon:"calendar-today",locale:t.locale,timepicker:{hourFormat:t.hourFormat}},model:{value:t.date_start,callback:function(e){t.date_start=e},expression:"date_start"}})],1),a("b-field",{attrs:{horizontal:"",label:"Date end",message:"Event end"}},[a("b-datetimepicker",{attrs:{placeholder:"Select a datetime...",icon:"calendar-today",locale:t.locale,timepicker:{hourFormat:t.hourFormat}},model:{value:t.date_end,callback:function(e){t.date_end=e},expression:"date_end"}})],1),a("b-field",{attrs:{label:"Hours",message:"Total hours (CC)",horizontal:""}},[a("b-input",{attrs:{name:"max",min:"0",max:"100",type:"number"},model:{value:t.form.hours,callback:function(e){t.$set(t.form,"hours",e)},expression:"form.hours"}})],1),a("b-field",{attrs:{label:"Description"}},[a("b-input",{attrs:{rows:10,type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t.event?a("b-field",[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("Save changes")])],1):t._e()],1)},s=[],n=(a("96cf"),a("1da1")),r=a("1962"),o={title:"",corum:0,hours:0,published:!1,open_to_public:!1,date_start:null,date_end:null,description:"",type:"",place:"",flyer:"",division:null},c={name:"EventForm",props:["event"],data:function(){return{form:{},isLoading:!1,hourFormat:void 0,locale:void 0,date_start:null,date_end:null}},created:function(){this.event&&(this.date_start=new Date(this.event.date_start),this.date_end=new Date(this.event.date_end)),this.form=this.event||o},methods:{submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isLoading=!0,e.prev=1,t.form.date_start=t.date_start,t.form.date_end=t.date_end,t.form.open_to_public&&(t.form.corum=0),!t.event){e.next=11;break}return e.next=8,Object(r["e"])(t.event.id,t.form);case 8:t.$buefy.snackbar.open({message:"Event updated",queue:!1}),e.next=17;break;case 11:return e.next=13,Object(r["a"])(t.form);case 13:a=e.sent,t.$buefy.snackbar.open({message:"Event created",queue:!1}),t.form=o,t.$router.push("/events/"+a.id);case 17:e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](1),console.log(e.t0),t.$buefy.toast.open({message:"Something went wrong :(... Try again!",type:"is-danger",queue:!1});case 23:return e.prev=23,t.isLoading=!1,e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[1,19,23,26]])})))()}}},l=c,u=a("2877"),d=Object(u["a"])(l,i,s,!1,null,null,null);e["a"]=d.exports},"746f":function(t,e,a){var i=a("428f"),s=a("5135"),n=a("e538"),r=a("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});s(e,t)||r(e,t,{value:n.f(t)})}},"85b4":function(t,e,a){"use strict";var i=a("5ac0"),s=a.n(i);s.a},8644:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{model:{value:t.isImageModalActive,callback:function(e){t.isImageModalActive=e},expression:"isImageModalActive"}},[a("ImagePreview",{attrs:{size:1.2,cert:t.cert}})],1),"card"===t.styleMode?a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("ImagePreview",{attrs:{size:.35,cert:t.cert},on:{click:function(e){t.isImageModalActive=!0}}})],1),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-6"},[t._v(" "+t._s(t.cert.to)+" ")]),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])]),"card"===t.styleMode?a("footer",{staticClass:"card-footer"},[a("router-link",{staticClass:"card-footer-item",attrs:{to:{name:"certificate.edit",params:{id:t.cert.uuid}}}},[a("b-icon",{attrs:{size:"is-small",icon:"pencil"}})],1),a("a",{staticClass:"card-footer-item",attrs:{href:t.cert.QR,target:"_blank"}},[a("b-icon",{attrs:{size:"is-small",icon:"qrcode"}})],1),a("a",{staticClass:"card-footer-item"},[a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1)],1)],1):t._e()]):a("div",{staticClass:"card"},[a("div",{staticClass:"card-image is-hidden-desktop"},[a("ImagePreview",{attrs:{size:1.2,cert:t.cert}})],1),a("div",{staticClass:"card-content"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left is-hidden-mobile",on:{click:function(e){t.isImageModalActive=!0}}},[a("ImagePreview",{attrs:{width:"200px",size:.23,cert:t.cert}})],1),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("strong",{on:{click:function(e){t.isImageModalActive=!0}}},[t._v(t._s(t.cert.to))]),t._v(" "),a("small",[t._v(t._s(t.cert.uuid))]),a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1),a("br"),a("div",{domProps:{textContent:t._s(t.cert.description)}}),a("br"),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])])])])],1)},s=[],n=a("bfa4"),r={props:{cert:{type:Object},styleMode:{type:String,default:"card"}},components:{ImagePreview:n["a"]},data:function(){return{isImageModalActive:!1}}},o=r,c=(a("85b4"),a("2877")),l=Object(c["a"])(o,i,s,!1,null,"1f409f33",null);e["a"]=l.exports},a4d3:function(t,e,a){"use strict";var i=a("23e7"),s=a("da84"),n=a("d066"),r=a("c430"),o=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),d=a("5135"),f=a("e8b5"),m=a("861d"),p=a("825a"),b=a("7b0b"),v=a("fc6a"),h=a("c04e"),g=a("5c6c"),y=a("7c73"),_=a("df75"),w=a("241c"),C=a("057f"),k=a("7418"),O=a("06cf"),j=a("9bf2"),x=a("d1e7"),S=a("9112"),E=a("6eeb"),P=a("5692"),A=a("f772"),M=a("d012"),D=a("90e3"),$=a("b622"),T=a("e538"),Q=a("746f"),L=a("d44e"),z=a("69f3"),I=a("b727").forEach,R=A("hidden"),N="Symbol",F="prototype",q=$("toPrimitive"),B=z.set,G=z.getterFor(N),W=Object[F],H=s.Symbol,J=n("JSON","stringify"),U=O.f,V=j.f,X=C.f,K=x.f,Y=P("symbols"),Z=P("op-symbols"),tt=P("string-to-symbol-registry"),et=P("symbol-to-string-registry"),at=P("wks"),it=s.QObject,st=!it||!it[F]||!it[F].findChild,nt=o&&u((function(){return 7!=y(V({},"a",{get:function(){return V(this,"a",{value:7}).a}})).a}))?function(t,e,a){var i=U(W,e);i&&delete W[e],V(t,e,a),i&&t!==W&&V(W,e,i)}:V,rt=function(t,e){var a=Y[t]=y(H[F]);return B(a,{type:N,tag:t,description:e}),o||(a.description=e),a},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,a){t===W&&ct(Z,e,a),p(t);var i=h(e,!0);return p(a),d(Y,i)?(a.enumerable?(d(t,R)&&t[R][i]&&(t[R][i]=!1),a=y(a,{enumerable:g(0,!1)})):(d(t,R)||V(t,R,g(1,{})),t[R][i]=!0),nt(t,i,a)):V(t,i,a)},lt=function(t,e){p(t);var a=v(e),i=_(a).concat(pt(a));return I(i,(function(e){o&&!dt.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=h(t,!0),a=K.call(this,e);return!(this===W&&d(Y,e)&&!d(Z,e))&&(!(a||!d(this,e)||!d(Y,e)||d(this,R)&&this[R][e])||a)},ft=function(t,e){var a=v(t),i=h(e,!0);if(a!==W||!d(Y,i)||d(Z,i)){var s=U(a,i);return!s||!d(Y,i)||d(a,R)&&a[R][i]||(s.enumerable=!0),s}},mt=function(t){var e=X(v(t)),a=[];return I(e,(function(t){d(Y,t)||d(M,t)||a.push(t)})),a},pt=function(t){var e=t===W,a=X(e?Z:v(t)),i=[];return I(a,(function(t){!d(Y,t)||e&&!d(W,t)||i.push(Y[t])})),i};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),a=function(t){this===W&&a.call(Z,t),d(this,R)&&d(this[R],e)&&(this[R][e]=!1),nt(this,e,g(1,t))};return o&&st&&nt(W,e,{configurable:!0,set:a}),rt(e,t)},E(H[F],"toString",(function(){return G(this).tag})),E(H,"withoutSetter",(function(t){return rt(D(t),t)})),x.f=dt,j.f=ct,O.f=ft,w.f=C.f=mt,k.f=pt,T.f=function(t){return rt($(t),t)},o&&(V(H[F],"description",{configurable:!0,get:function(){return G(this).description}}),r||E(W,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),I(_(at),(function(t){Q(t)})),i({target:N,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var a=H(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:mt,getOwnPropertySymbols:pt}),i({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(b(t))}}),J){var bt=!c||u((function(){var t=H();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));i({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,a){var i,s=[t],n=1;while(arguments.length>n)s.push(arguments[n++]);if(i=e,(m(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),s[1]=e,J.apply(null,s)}})}H[F][q]||S(H[F],q,H[F].valueOf),L(H,N),M[R]=!0},a6c5:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return l})),a.d(e,"e",(function(){return u})),a.d(e,"f",(function(){return d}));var i=a("780a");function s(){return Object(i["a"])({url:"/storage/?folder=certificates",method:"GET"})}function n(t){return Object(i["a"])({url:"/certificates/",method:"GET",params:t})}function r(t){return Object(i["a"])({url:"/certificates/".concat(t,"/"),method:"GET"})}function o(t){return Object(i["a"])({url:"/certificates/",method:"POST",data:t})}function c(t,e){return Object(i["a"])({url:"/certificates/".concat(t,"/"),method:"PUT",data:e})}function l(t,e){return Object(i["a"])({url:"/certificates/".concat(t,"/upload/"),method:"PATCH",headers:{"Content-Type":"multipart/form-data"},data:e})}function u(t,e){return Object(i["a"])({url:"/certificates/".concat(t,"/"),method:"PATCH",data:{published:e}})}function d(t){return Object(i["a"])({url:"/certificates/".concat(t,"/"),method:"DELETE"})}},aa38:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-field",{attrs:{label:(t.event.type||"Title")+": "+t.event.title+" ("+(t.event.place||"AAAIMX")+")"}},[a("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t._f("longDate")(t.event.date_start))+" - "+t._s(t._f("longDate")(t.event.date_end))+" ("+t._s(t.event.hours||0)+" horas para CC) ")])]),a("b-field",{attrs:{label:"Aditional information"}},[a("p",{directives:[{name:"linkified",rawName:"v-linkified"}],staticClass:"subtitle is-6",staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:t._s(t.event.description)}})]),a("b-field",{attrs:{label:"Availability (Participants)"}},[a("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.event.corum||"No establecido")+" ")])])],1)},s=[],n={props:["event"]},r=n,o=a("2877"),c=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=c.exports},aa9c:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" Events "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:"/"},slot:"right"},[t._v(" Dashboard ")])],1),a("section",{staticClass:"section is-main-section"},[a("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[a("clients-table-sample",{attrs:{"data-url":"/data-sources/clients.json",checkable:!0}})],1)],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Events",icon:"calendar-multiple","has-button-slot":!0}},[a("action-button",{attrs:{slot:"button",icon:"autorenew",label:"Clear filters"},on:{"button-click":t.clearFilters},slot:"button"}),a("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[a("form",{attrs:{slot:"left"},slot:"left"},[a("SearchInput",{attrs:{listQuery:t.listQuery}})],1),a("div",{staticClass:"columns",attrs:{slot:"right"},slot:"right"},[a("b-field",{staticClass:"ml-2"},[a("b-datepicker",{attrs:{type:"month",icon:"calendar-today",size:"is-small",placeholder:"Click to select...",range:""},model:{value:t.listQuery.range,callback:function(e){t.$set(t.listQuery,"range",e)},expression:"listQuery.range"}})],1),a("b-field",{staticClass:"ml-2"},[a("b-select",{attrs:{placeholder:"Type",size:"is-small",expanded:""},model:{value:t.listQuery.type,callback:function(e){t.$set(t.listQuery,"type",e)},expression:"listQuery.type"}},[a("option",{attrs:{value:"Workshop"}},[t._v("Workshop")]),a("option",{attrs:{value:"Course"}},[t._v("Course")]),a("option",{attrs:{value:"Webinar"}},[t._v("Webinar")]),a("option",{attrs:{value:"Simposium"}},[t._v("Simposium")]),a("option",{attrs:{value:""}},[t._v("All")])])],1),a("b-field",{staticClass:"ml-2"},[a("b-select",{attrs:{placeholder:"Place",size:"is-small",expanded:""},model:{value:t.listQuery.place,callback:function(e){t.$set(t.listQuery,"place",e)},expression:"listQuery.place"}},[a("option",{attrs:{value:"Online"}},[t._v("Online")]),a("option",{attrs:{value:"ITM"}},[t._v("ITM")]),a("option",{attrs:{value:"G4"}},[t._v("G4")]),a("option",{attrs:{value:"Norte"}},[t._v("Norte")]),a("option",{attrs:{value:"Poniente"}},[t._v("Poniente")]),a("option",{attrs:{value:""}},[t._v("All")])])],1),a("b-field",{staticClass:"ml-2"},[a("b-select",{attrs:{placeholder:"Division",size:"is-small",expanded:""},model:{value:t.listQuery.division,callback:function(e){t.$set(t.listQuery,"division",e)},expression:"listQuery.division"}},t._l(t.$store.state.divisions,(function(t){return a("option",{key:t.id,attrs:{label:t.name},domProps:{value:t.id}})})),0)],1)],1)]),a("div",[a("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),a("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!0,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!0,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(t){return[a("EventPreview",{attrs:{event:t.row}}),a("hr"),a("CertList",{ref:"certlist",attrs:{event:t.row.title}})]}}])},[a("b-table-column",{attrs:{label:"Event",field:"title",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[[a("router-link",{attrs:{tag:"a",to:"/events/"+e.row.id}},[a("small",[t._v(t._s(e.row.title.slice(0,50)))])])]]}}])}),a("b-table-column",{attrs:{label:"Type",field:"type",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",[t._v(t._s(e.row.type))])]}}])}),a("b-table-column",{attrs:{label:"Division",field:"division",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",[t._v(t._s(e.row.division?e.row.division.name:"AAAIMX"))])]}}])}),a("b-table-column",{attrs:{label:"Place",field:"place",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",[t._v(t._s(e.row.place))])]}}])}),a("b-table-column",{attrs:{label:"Date start",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.date_start}},[t._v(t._s(new Date(e.row.date_start).toLocaleDateString()))])]}}])}),a("b-table-column",{attrs:{label:"Date end",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.date_end}},[t._v(t._s(new Date(e.row.date_end).toLocaleDateString()))])]}}])}),a("b-table-column",{attrs:{label:"Hours",field:"hours",centered:"",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("small",[t._v(t._s(e.row.hours))])]}}])}),a("b-table-column",{attrs:{"custom-key":"actions",label:"Actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"buttons"},[a("router-link",{staticClass:"button is-small is-primary",attrs:{to:{name:"event.edit",params:{id:e.row.id}}}},[a("b-tooltip",{attrs:{type:"is-link",label:"Edit event"}},[a("b-icon",{attrs:{icon:"calendar-edit",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-light",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.sendMessageReminder(e.row)}}},[a("b-tooltip",{attrs:{type:"is-primary",label:"Send a Discord"}},[a("b-icon",{attrs:{icon:"discord",size:"is-small"}})],1)],1),a("button",{staticClass:"button is-small is-info",attrs:{type:"button"}},[a("b-tooltip",{attrs:{type:"is-info",label:"Participants"}},[a("b-icon",{attrs:{icon:"download",size:"is-small"}})],1)],1)],1)]}}])}),a("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[a("EmptyData",{attrs:{isLoading:t.isLoading}})],1),a("div",{staticStyle:{padding:"1%"},attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"column is-one-third-desktop"},[a("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var i=e.active;return a("button",{staticClass:"button is-primary is-small"},[a("span",[t._v("Actions")]),a("b-icon",{attrs:{icon:i?"menu-up":"menu-down"}})],1)}}])},[a("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[a("div",{staticClass:"media has-text-dark"},[a("b-icon",{staticClass:"media-left",attrs:{type:"is-primary",icon:"file-excel"}}),a("div",{staticClass:"media-content"},[a("h3",[t._v("Export as excel")])])],1)])],1)],1),a("Pagination",{staticClass:"column",attrs:{listQuery:t.listQuery,total:t.total}})],1)])],1)],1)],1)},r=[],o=(a("96cf"),a("1da1")),c=a("1962"),l=a("b743"),u=a("fa9b"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.certificates.length?a("div",[a("div",{staticClass:"columns is-multiline is-desktop"},t._l(t.certificates,(function(t){return a("div",{key:t.uuid,staticClass:"column is-half-tablet is-one-quarter-desktop"},[a("CertPreview",{attrs:{cert:t,"hide-description":""}})],1)})),0),a("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1):t._e()},f=[],m=a("5530"),p=a("8644"),b=a("a6c5"),v={props:["event"],components:{CertPreview:p["a"]},data:function(){return{certificates:[],total:0,isLoading:!1,listQuery:{page:1,limit:10,offset:0}}},mounted:function(){this.getData(this.event.id)},watch:{listQuery:{handler:function(t){this.getData(this.event.id)},deep:!0}},methods:{getData:function(t){var e=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(b["c"])(Object(m["a"])({event:t},this.listQuery)).then((function(t){e.certificates=t.results,e.total=t.count}))}}},h=v,g=a("2877"),y=Object(g["a"])(h,d,f,!1,null,null,null),_=y.exports,w=a("aa38"),C=a("fab6"),k=a.n(C),O={name:"EventsTable",components:{ModalBox:u["a"],CertList:_,EventPreview:w["a"]},mixins:[k.a],data:function(){return{listQuery:{search:"",ordering:null,page:1,limit:10,offset:0},key:"id",sortField:"date_start",defaultSortOrder:"desc",certificates:[],current_event:""}},methods:{clearFilters:function(){this.listQuery={search:"",ordering:null,page:1,limit:10,offset:0},this.sortField="date_start",this.defaultSortOrder="asc"},actionSample:function(){this.$buefy.toast.open({message:"Everything OK!",type:"is-info",queue:!1})},getData:function(){var t=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(c["c"])(this.listQuery).then((function(e){t.isLoading=!1,t.total=e.count,t.list=e.results})).catch((function(e){t.isLoading=!1,t.$buefy.toast.open({message:"Error: ".concat(e.message),type:"is-danger"})}))},sendMessageReminder:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.isLoading=!0,a.prev=1,a.next=4,Object(l["c"])(t);case 4:e.$buefy.snackbar.open({message:"Message sent to Discord",queue:!1}),a.next=11;break;case 7:a.prev=7,a.t0=a["catch"](1),console.log(a.t0),e.$buefy.toast.open({type:"is-danger",message:"Something went wrong :(. Try later!!!",queue:!1});case 11:return a.prev=11,e.isLoading=!1,a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[1,7,11,14]])})))()},trashConfirm:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["d"])(t.trashObject.id);case 2:t.$buefy.snackbar.open({message:"Event removed",queue:!1}),t.isModalActive=!1,t.getData();case 5:case"end":return e.stop()}}),e)})))()}}},j=O,x=Object(g["a"])(j,n,r,!1,null,null,null),S=x.exports,E=a("1e1d"),P=a("503b"),A={name:"Events",components:{HeroBar:P["a"],TitleBar:E["a"],ClientsTableSample:S},computed:{titleStack:function(){return["Admin","Events"]}},methods:{actionSample:function(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},M=A,D=Object(g["a"])(M,i,s,!1,null,null,null);e["default"]=D.exports},b743:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return l}));a("d3b7");var i=a("bc3a"),s=a.n(i);console.log("https://aaaimx-discord.herokuapp.com/api","production");var n=s.a.create({baseURL:"https://aaaimx-discord.herokuapp.com/api",mode:"cors",credentials:"same-origin"});n.interceptors.response.use((function(t){return 200!==t.status&&201!==t.status&&204!==t.status?(401===t.status||t.status,Promise.reject(new Error(t.message||"Error"))):t.data}),(function(t){var e=t.response,a=t.message;return console.log(e,a),401===e.status||e.status,Promise.reject(e)}));var r=n;function o(){return r({url:"/members/",method:"GET"})}function c(t){return r({url:"/messages/events/reminder/",method:"POST",data:t})}function l(t){return r({url:"/messages/certificates/new/",method:"POST",data:t})}},bfa4:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card cert",attrs:{id:"printarea"}},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"is-4by3"},[a("img",{staticClass:"cert-img",attrs:{width:t.width,src:t.cert.file+"?dummy="+Math.random(),alt:"Placeholder image"}})])])])},s=[],n={props:["cert","size","position","width"],methods:{generateReport:function(){var t=new jsPDF,e=document.getElementById("printarea").innerHTML;console.log(e),t.html(e,{callback:function(t){t.save()},x:10,y:10})}}},r=n,o=(a("f627"),a("2877")),c=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=c.exports},d360:function(t,e,a){},dbb4:function(t,e,a){var i=a("23e7"),s=a("83ab"),n=a("56ef"),r=a("fc6a"),o=a("06cf"),c=a("8418");i({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,a,i=r(t),s=o.f,l=n(i),u={},d=0;while(l.length>d)a=s(i,e=l[d++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var i=a("23e7"),s=a("d039"),n=a("fc6a"),r=a("06cf").f,o=a("83ab"),c=s((function(){r(1)})),l=!o||c;i({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return r(n(t),e)}})},e538:function(t,e,a){var i=a("b622");e.f=i},f572:function(t,e,a){"use strict";var i=a("5f5f"),s=a.n(i);s.a},f627:function(t,e,a){"use strict";var i=a("d360"),s=a.n(i);s.a},fa9b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},s=[],n={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}}},r=n,o=a("2877"),c=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=c.exports},fab6:function(t,e,a){a("b0c0"),t.exports={data:function(){return{total:0,list:[],checkedRows:[],defaultOpenedDetails:[],trashObject:null,isModalActive:!1,isLoading:!1,sortOrder:"desc",defaultSortOrder:"desc"}},mounted:function(){this.getData()},watch:{listQuery:{handler:function(){this.getData()},deep:!0}},computed:{trashObjectName:function(){return this.trashObject?this.trashObject.name:null}},methods:{onSort:function(t,e){var a=t;this.sortField=t,this.sortOrder=e,"desc"===e&&(a="-"+t),this.listQuery.ordering=a},onCollapse:function(t){this.defaultOpenedDetails=[t[this.key]]},trashModal:function(t){this.trashObject=t,this.isModalActive=!0},trashCancel:function(){this.isModalActive=!1}}}}}]);
//# sourceMappingURL=events-legacy.04ca973e.js.map