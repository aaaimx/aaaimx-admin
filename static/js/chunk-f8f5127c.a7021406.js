(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8f5127c"],{"0792":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var r=n("61f7"),a={required:!0,message:"This field is required",trigger:"blur"},s={validator:function(e,t,n){!Object(r["d"])(t)&&t.trim()?n(new Error("Please enter the correct email")):n()}},i={validator:function(e,t,n){t.length?n():n(new Error("The password can not be less than 6 digits"))}}},"3aad":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Detail",{attrs:{"is-edit":!0,namespace:"Member"}})},a=[],s=n("8888"),i={name:"EditForm",components:{Detail:s["a"]}},o=i,l=n("2877"),c=Object(l["a"])(o,r,a,!1,null,null,null);t["default"]=c.exports},"407f":function(e,t,n){"use strict";var r={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}},a=r,s=n("532b"),i=void 0,o={props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},mixins:[a],created:function(){this.$store.commit("app/SET_STEPS",s["a"])},methods:{validateRequire:function(e,t,n){""===t?(i.$message({message:e.field+" is required",type:"error"}),n(new Error("Required field"))):n()},handleSave:function(e){this.$notify({title:" ".concat(this.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:e,type:"success",duration:2e3})},handleError:function(){this.$message({message:"Something went wrong:( Try again",type:"error"})},handleDelete:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3})},validateUrl:function(e,t,n){t?validURL(t)?n():(i.$message({message:"Invalid URL format",type:"error"}),n(new Error("Invalid URL"))):n()}}};t["a"]=o},"532b":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=[{element:".filter-container",popover:{title:"Table filters",description:"Filter by name, title, status or some important field. Also navigate to <b>Create page</b> to register new item.",position:"bottom"}},{element:".el-table",popover:{title:"Table",description:"Resources, items, list, result of filters applied.",position:"top"}},{element:".el-select--mini",popover:{title:"Quick actions",description:"Actions to alter selected rows. Such us delete multiple items or change some field. First select rows, then choose an option & click <b>Go</b> button.",position:"top"}},{element:".pagination-container",popover:{title:"Pagination",description:"Choose items quantity or page will be listed.",position:"top"}}],a=[{element:".postInfo-container",popover:{title:"Create/Update Form",description:'Edit or enter each field and click <b>Save/Save changes</b>. <br>\n        <span style="color: red;">*</span> Indicates required field and can not be empty.\n        ',position:"top"}},{element:".el-button--success",popover:{title:"Save button",description:'Click this button when all required fields or changes are ready and wait to save into database. <br>\n      Input errors will be displayed in <span style="color: red;">red</span>.\n      \n      ',position:"left"}}]},8888:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"createPost-container"},[n("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[n("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.active}},[n("Status",{model:{value:e.postForm.active,callback:function(t){e.$set(e.postForm,"active",t)},expression:"postForm.active"}}),e._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),n("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:e.deleteMember}},[e._v("Delete member")])],1),e._v(" "),n("div",{staticClass:"createPost-main-container"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("div",{staticClass:"postInfo-container"},[n("el-row",[n("el-col",{attrs:{span:8,lg:7,xs:24}},[n("Upload",{model:{value:e.postForm.thumbnailFile,callback:function(t){e.$set(e.postForm,"thumbnailFile",t)},expression:"postForm.thumbnailFile"}})],1),e._v(" "),n("el-col",{attrs:{span:8,xs:24}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Name:",prop:"name"}},[n("el-input",{attrs:{placeholder:"Nombre(s)",type:"text"},model:{value:e.postForm.name,callback:function(t){e.$set(e.postForm,"name",t)},expression:"postForm.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8,xs:24}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Surname:",prop:"surname"}},[n("el-input",{attrs:{placeholder:"apellidoP-apellidoM",type:"text"},model:{value:e.postForm.surname,callback:function(t){e.$set(e.postForm,"surname",t)},expression:"postForm.surname"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8,xs:24}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Email (Optional):",prop:"email"}},[n("el-input",{attrs:{type:"email",placeholder:"Enter valid email"},model:{value:e.postForm.email,callback:function(t){e.$set(e.postForm,"email",t)},expression:"postForm.email"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8,xs:24}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Adscription:",prop:"adscription"}},[n("br"),e._v(" "),n("el-select",{attrs:{clearable:"",placeholder:"Select institute"},model:{value:e.postForm.adscription,callback:function(t){e.$set(e.postForm,"adscription",t)},expression:"postForm.adscription"}},e._l(e.partners,(function(t){return n("el-option",{key:t.uuid,attrs:{label:t.alias,value:t.uuid}},[n("small",{staticStyle:{color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.name))])])})),1)],1)],1),e._v(" "),n("el-col",{attrs:{span:24,lg:12}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Role / Charge:",prop:"charge"}},[n("el-checkbox",{staticClass:"filter-item",model:{value:e.postForm.board,callback:function(t){e.$set(e.postForm,"board",t)},expression:"postForm.board"}},[e._v("Board")]),e._v(" "),n("el-checkbox",{staticClass:"filter-item",model:{value:e.postForm.committee,callback:function(t){e.$set(e.postForm,"committee",t)},expression:"postForm.committee"}},[e._v("Committee")]),e._v(" "),n("el-input",{attrs:{placeholder:"Co-Chair / ITM Researcher",type:"text"},model:{value:e.postForm.charge,callback:function(t){e.$set(e.postForm,"charge",t)},expression:"postForm.charge"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:8,lg:12}},[n("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Divisions:",prop:"divisions"}},[n("br"),e._v(" "),n("el-select",{attrs:{multiple:"",placeholder:"Select divisions"},model:{value:e.postForm.divisions,callback:function(t){e.$set(e.postForm,"divisions",t)},expression:"postForm.divisions"}},e._l(e.divisions,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1)],1)])],1)],1)],1)],1)},a=[],s=(n("7f7f"),n("96cf"),n("3b8d")),i=n("db72"),o=n("2f62"),l=n("8194"),c=n("0792"),u={name:[c["c"]],surname:[c["c"]],email:[c["a"]]},p=n("407f"),m={name:"",surname:"",email:"",active:!1,board:!1,committee:!1,thumbnailUrl:"",thumbnailFile:null,charge:"",adscription:null,membership:null,divisions:[],roles:[]},d={name:"MemberDetail",mixins:[p["a"]],components:{Status:function(){return n.e("chunk-2d0aeb74").then(n.bind(null,"0af3"))},Upload:function(){return n.e("chunk-c1c0cdbe").then(n.bind(null,"70a2"))},MDinput:function(){return n.e("chunk-6790f463").then(n.bind(null,"1aba"))},Sticky:function(){return n.e("chunk-2d210590").then(n.bind(null,"b804"))}},data:function(){return{loading:!1,rules:u,tempRoute:{},id:null,photo:""}},computed:Object(i["a"])({},Object(o["c"])("members",["postForm","partners","divisions","roles"])),created:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.divisions.length){e.next=3;break}return e.next=3,this.$store.dispatch("members/fetchDivisions");case 3:if(this.partners.length){e.next=6;break}return e.next=6,this.$store.dispatch("members/fetchPartners");case 6:if(!this.isEdit){e.next=11;break}return e.next=9,this.fetchData(this.$route.params.id);case 9:e.next=12;break;case 11:this.$store.commit("members/SET_MEMBER",m);case 12:this.tempRoute=Object.assign({},this.$route);case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{fetchData:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.loadingFullPage(),e.prev=1,e.next=4,Object(l["b"])(t);case 4:r=e.sent,this.$store.commit("members/SET_MEMBER",r),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](1);case 10:return e.prev=10,n.close(),e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[1,8,10,13]])})));function t(t){return e.apply(this,arguments)}return t}(),submitForm:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs.postForm.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n){e.next=25;break}if(r=t.loadingFullPage(),s=t.postForm,e.prev=3,!t.isEdit){e.next=10;break}return e.next=7,Object(l["e"])(s);case 7:a=e.sent,e.next=13;break;case 10:return e.next=12,Object(l["a"])(s);case 12:a=e.sent;case 13:t.$router.push("/members/"+a.id),t.handleSave("".concat(t.namespace," <b>").concat(t.postForm.surname,", ").concat(t.postForm.name,"</b> was sucessfully saved")),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](3),t.handleError();case 20:return e.prev=20,r.close(),e.finish(20);case 23:e.next=26;break;case 25:return e.abrupt("return",!1);case 26:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),deleteMember:function(){this.handleDelete(),this.postForm.active=!1}}},f=d,b=n("2877"),h=Object(b["a"])(f,r,a,!1,null,null,null);t["a"]=h.exports}}]);