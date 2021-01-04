(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["certificates~events"],{1962:function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return l}));var i=a("780a");function s(t){return Object(i["a"])({url:"/events/",method:"GET",params:t})}function r(){return Object(i["a"])({url:"/events/future/",method:"GET"})}function n(t){return Object(i["a"])({url:`/events/${t}/`,method:"GET"})}function o(t){return Object(i["a"])({url:"/events/",method:"POST",data:t})}function c(t,e){return Object(i["a"])({url:`/events/${t}/`,method:"PUT",data:e})}function l(t){return Object(i["a"])({url:`/events/${t}/`,method:"DELETE"})}},"1e1d":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section is-title-bar"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("ul",t._l(t.titleStack,(function(e,i){return a("li",{key:i},[t._v(" "+t._s(e)+" ")])})),0)])]),a("EventModal",{attrs:{"is-active":t.isModalActive},on:{cancel:t.cancel}}),a("div",{staticClass:"level-right"},[a("div",{staticClass:"level-item"},[a("div",{staticClass:"buttons is-right"},[a("a",{staticClass:"button is-light",on:{click:function(e){t.isModalActive=!0}}},[a("b-icon",{attrs:{icon:"calendar-week","custom-size":"default"}}),a("span",[t._v("Create event")])],1)])])])],1)])},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":"",width:700,scroll:"keep"},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("New Event")])]),a("section",{staticClass:"modal-card-body"},[a("EventForm",{ref:"form"})],1),a("footer",{staticClass:"modal-card-foot"},[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading},on:{click:function(e){return e.preventDefault(),t.confirm(e)}}},[t._v(" Create event")]),a("button",{staticClass:"button is-danger",on:{click:t.cancel}},[t._v("Cancel")])],1)])])},n=[],o=a("6882"),c={name:"EventModal",components:{EventForm:o["a"]},props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data(){return{isLoading:!1,isModalActive:!1}},methods:{cancel(){this.$emit("cancel")},async confirm(){this.isLoading=!0,await this.$refs.form.submit(),this.isLoading=!1,this.isModalActive=!1,this.$emit("confirm")}},watch:{isActive(t){this.isModalActive=t},isModalActive(t){t||this.cancel()}}},l=c,d=(a("f572"),a("2877")),u=Object(d["a"])(l,r,n,!1,null,null,null),m=u.exports,v={name:"TitleBar",components:{EventModal:m},data(){return{isModalActive:!1}},props:{titleStack:{type:Array,default:()=>[]}},methods:{cancel(){this.isModalActive=!1}}},f=v,p=Object(d["a"])(f,i,s,!1,null,null,null);e["a"]=p.exports},"2e81":function(t,e,a){"use strict";var i=a("34fa"),s=a.n(i);s.a},"34fa":function(t,e,a){},"503b":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-hero-bar"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[a("h1",{staticClass:"title is-3"},[t._t("default")],2)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[a("div",{staticClass:"level-item"},[t._t("right")],2)])])])])},s=[],r={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},n=r,o=a("2877"),c=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=c.exports},"5f5f":function(t,e,a){},6882:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{label:"Title",message:"Event name"}},[a("b-input",{attrs:{readonly:t.event,placeholder:"e.g. SINABIA 2019",name:"title",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("b-field",{attrs:{horizontal:"",label:"Place",message:"Event location"}},[a("b-select",{attrs:{placeholder:"Select location",expanded:""},model:{value:t.form.place,callback:function(e){t.$set(t.form,"place",e)},expression:"form.place"}},[a("option",{attrs:{value:"Online"}},[t._v("Online")]),a("option",{attrs:{value:"ITM"}},[t._v("ITM")]),a("option",{attrs:{value:"G4"}},[t._v("G4")]),a("option",{attrs:{value:"Norte"}},[t._v("Norte")]),a("option",{attrs:{value:"Poniente"}},[t._v("Poniente")]),a("option",{attrs:{value:""}},[t._v("Other")])])],1),a("b-field",{attrs:{horizontal:"",label:"Type",message:"Event type"}},[a("b-select",{attrs:{placeholder:"Select a type",expanded:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("option",{attrs:{value:"Workshop"}},[t._v("Workshop")]),a("option",{attrs:{value:"Course"}},[t._v("Course")]),a("option",{attrs:{value:"Webinar"}},[t._v("Webinar")]),a("option",{attrs:{value:"Simposium"}},[t._v("Simposium")]),a("option",{attrs:{value:""}},[t._v("Other")])])],1),a("b-field",{attrs:{horizontal:"",label:"Division",message:"Division event"}},[a("b-select",{attrs:{placeholder:"Select division",expanded:""},model:{value:t.form.division,callback:function(e){t.$set(t.form,"division",e)},expression:"form.division"}},t._l(t.$store.state.divisions,(function(t){return a("option",{key:t.id,attrs:{label:t.name},domProps:{value:t.id}})})),0)],1),t.form.isPublic?t._e():a("b-field",{attrs:{label:"Corum",message:"Number of particpants",horizontal:""}},[a("b-input",{attrs:{name:"max",min:"1",max:"100",type:"number"},model:{value:t.form.corum,callback:function(e){t.$set(t.form,"corum",e)},expression:"form.corum"}})],1),a("b-field",{attrs:{horizontal:""}},[a("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-link"},model:{value:t.form.open_to_public,callback:function(e){t.$set(t.form,"open_to_public",e)},expression:"form.open_to_public"}},[t._v(" Open to the public ")])],1),a("b-field",{attrs:{horizontal:"",label:"Date start",message:"Event start"}},[a("b-datetimepicker",{attrs:{placeholder:"Select a datetime...",icon:"calendar-today",locale:t.locale,timepicker:{hourFormat:t.hourFormat}},model:{value:t.date_start,callback:function(e){t.date_start=e},expression:"date_start"}})],1),a("b-field",{attrs:{horizontal:"",label:"Date end",message:"Event end"}},[a("b-datetimepicker",{attrs:{placeholder:"Select a datetime...",icon:"calendar-today",locale:t.locale,timepicker:{hourFormat:t.hourFormat}},model:{value:t.date_end,callback:function(e){t.date_end=e},expression:"date_end"}})],1),a("b-field",{attrs:{label:"Hours",message:"Total hours (CC)",horizontal:""}},[a("b-input",{attrs:{name:"max",min:"0",max:"100",type:"number"},model:{value:t.form.hours,callback:function(e){t.$set(t.form,"hours",e)},expression:"form.hours"}})],1),a("b-field",{attrs:{label:"Description"}},[a("b-input",{attrs:{rows:10,type:"textarea"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t.event?a("b-field",[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("Save changes")])],1):t._e()],1)},s=[],r=a("1962");const n={title:"",corum:0,hours:0,published:!1,open_to_public:!1,date_start:null,date_end:null,description:"",type:"",place:"",flyer:"",division:null};var o={name:"EventForm",props:["event"],data(){return{form:{},isLoading:!1,hourFormat:void 0,locale:void 0,date_start:null,date_end:null}},created(){this.event&&(this.date_start=new Date(this.event.date_start),this.date_end=new Date(this.event.date_end)),this.form=this.event||n},methods:{async submit(){this.isLoading=!0;try{if(this.form.date_start=this.date_start,this.form.date_end=this.date_end,this.event)await Object(r["f"])(this.event.id,this.form),this.$buefy.snackbar.open({message:"Event updated",queue:!1});else{const t=await Object(r["a"])(this.form);this.$buefy.snackbar.open({message:"Event created",queue:!1}),this.form=n,this.$router.push("/events/"+t.id)}}catch(t){console.log(t),this.$buefy.toast.open({message:"Something went wrong :(... Try again!",type:"is-danger",queue:!1})}finally{this.isLoading=!1}}}},c=o,l=a("2877"),d=Object(l["a"])(c,i,s,!1,null,null,null);e["a"]=d.exports},8644:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{model:{value:t.isImageModalActive,callback:function(e){t.isImageModalActive=e},expression:"isImageModalActive"}},[a("ImagePreview",{attrs:{size:1.2,cert:t.cert}})],1),"card"===t.styleMode?a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("ImagePreview",{attrs:{size:.35,cert:t.cert},on:{click:function(e){t.isImageModalActive=!0}}})],1),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-6"},[t._v(" "+t._s(t.cert.to)+" ")]),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])]),"card"===t.styleMode?a("footer",{staticClass:"card-footer"},[a("router-link",{staticClass:"card-footer-item",attrs:{to:{name:"certificate.edit",params:{id:t.cert.uuid}}}},[a("b-icon",{attrs:{size:"is-small",icon:"pencil"}})],1),a("a",{staticClass:"card-footer-item",attrs:{href:t.cert.QR,target:"_blank"}},[a("b-icon",{attrs:{size:"is-small",icon:"qrcode"}})],1),a("a",{staticClass:"card-footer-item"},[a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1)],1)],1):t._e()]):a("div",{staticClass:"card"},[a("div",{staticClass:"card-image is-hidden-desktop"},[a("ImagePreview",{attrs:{size:1.2,cert:t.cert}})],1),a("div",{staticClass:"card-content"},[a("article",{staticClass:"media"},[a("div",{staticClass:"media-left is-hidden-mobile",on:{click:function(e){t.isImageModalActive=!0}}},[a("ImagePreview",{attrs:{width:"200px",size:.23,cert:t.cert}})],1),a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("strong",{on:{click:function(e){t.isImageModalActive=!0}}},[t._v(t._s(t.cert.to))]),t._v(" "),a("small",[t._v(t._s(t.cert.uuid))]),a("copy-to-clipboard",{attrs:{text:t.cert.uuid}},[a("b-icon",{attrs:{size:"is-small",icon:"clipboard"}})],1),a("br"),a("div",{domProps:{innerHTML:t._s(t.cert.description)}}),a("br"),a("b-tag",{attrs:{type:"is-primary"}},[t._v(t._s(t.cert.type))])],1)])])])])],1)},s=[],r=a("bfa4"),n={props:{cert:{type:Object},styleMode:{type:String,default:"card"}},components:{ImagePreview:r["a"]},data(){return{isImageModalActive:!1}}},o=n,c=(a("2e81"),a("2877")),l=Object(c["a"])(o,i,s,!1,null,"42bde7b1",null);e["a"]=l.exports},a6c5:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"g",(function(){return c})),a.d(e,"h",(function(){return l})),a.d(e,"e",(function(){return d})),a.d(e,"f",(function(){return u}));var i=a("780a");function s(){return Object(i["a"])({url:"/storage/?folder=certificates",method:"GET"})}function r(t){return Object(i["a"])({url:"/certificates/",method:"GET",params:t})}function n(t){return Object(i["a"])({url:`/certificates/${t}/`,method:"GET"})}function o(t){return Object(i["a"])({url:"/certificates/",method:"POST",data:t})}function c(t,e){return Object(i["a"])({url:`/certificates/${t}/`,method:"PUT",data:e})}function l(t,e){return Object(i["a"])({url:`/certificates/${t}/upload/`,method:"PATCH",headers:{"Content-Type":"multipart/form-data"},data:e})}function d(t,e){return Object(i["a"])({url:`/certificates/${t}/`,method:"PATCH",data:{published:e}})}function u(t){return Object(i["a"])({url:`/certificates/${t}/`,method:"DELETE"})}},bfa4:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card cert"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"is-4by3"},[a("img",{staticClass:"cert-img",attrs:{width:t.width,src:t.cert.file,alt:"Placeholder image"}}),t.cert.has_custom_file?t._e():a("div",{staticClass:"description",style:{"font-size":t.size+"vw",position:t.position},domProps:{innerHTML:t._s(t.cert.description)}})])])])},s=[],r={props:["cert","size","position","width"]},n=r,o=(a("f627"),a("2877")),c=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=c.exports},d360:function(t,e,a){},f572:function(t,e,a){"use strict";var i=a("5f5f"),s=a.n(i);s.a},f627:function(t,e,a){"use strict";var i=a("d360"),s=a.n(i);s.a},fa9b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Confirm action")])]),a("section",{staticClass:"modal-card-body"},[a("p",[t._v("This will permanently delete "),a("b",[t._v(t._s(t.trashObjectName))])]),a("p",[t._v("Action can not be undone.")])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("Cancel")]),a("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("Delete")])])])])},s=[],r={name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data(){return{isModalActive:!1}},methods:{cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm")}},watch:{isActive(t){this.isModalActive=t},isModalActive(t){t||this.cancel()}}},n=r,o=a("2877"),c=Object(o["a"])(n,i,s,!1,null,null,null);e["a"]=c.exports},fab6:function(t,e){t.exports={data(){return{total:0,list:[],checkedRows:[],defaultOpenedDetails:[],trashObject:null,isModalActive:!1,isLoading:!1,sortOrder:"desc",defaultSortOrder:"desc"}},mounted(){this.getData()},watch:{listQuery:{handler(){this.getData()},deep:!0}},computed:{trashObjectName(){return this.trashObject?this.trashObject.name:null}},methods:{onSort(t,e){let a=t;this.sortField=t,this.sortOrder=e,"desc"===e&&(a="-"+t),this.listQuery.ordering=a},onCollapse(t){this.defaultOpenedDetails=[t[this.key]]},trashModal(t){this.trashObject=t,this.isModalActive=!0},trashCancel(){this.isModalActive=!1}}}}}]);
//# sourceMappingURL=certificates~events.0ae62237.js.map