(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8f5127c"],{"0792":function(e,t,o){"use strict";o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return n}));var i=o("61f7"),s={required:!0,message:"This field is required",trigger:"blur"},a={validator:function(e,t,o){!Object(i["d"])(t)&&t.trim()?o(new Error("Please enter the correct email")):o()}},n={validator:function(e,t,o){t.length?o():o(new Error("The password can not be less than 6 digits"))}}},"3aad":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Detail",{attrs:{"is-edit":!0,namespace:"Member"}})},s=[],a=o("8888"),n={name:"EditForm",components:{Detail:a["a"]}},r=n,l=o("2877"),c=Object(l["a"])(r,i,s,!1,null,null,null);t["default"]=c.exports},"407f":function(e,t,o){"use strict";var i={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}},s=i,a=o("532b"),n=void 0,r={props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},mixins:[s],created:function(){this.$store.commit("app/SET_STEPS",a["a"])},methods:{validateRequire:function(e,t,o){""===t?(n.$message({message:e.field+" is required",type:"error"}),o(new Error("Required field"))):o()},handleSave:function(e){this.$notify({title:" ".concat(this.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:e,type:"success",duration:2e3})},handleError:function(){this.$message({message:"Something went wrong:( Try again",type:"error"})},handleDelete:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3})},validateUrl:function(e,t,o){t?validURL(t)?o():(n.$message({message:"Invalid URL format",type:"error"}),o(new Error("Invalid URL"))):o()}}};t["a"]=r},"532b":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"a",(function(){return s}));var i=[{element:".filter-container",popover:{title:"Table filters",description:"Filter by name, title, status or some important field. Also navigate to <b>Create page</b> to register new item.",position:"bottom"}},{element:".el-table",popover:{title:"Table",description:"Resources, items, list, result of filters applied.",position:"top"}},{element:".el-select--mini",popover:{title:"Quick actions",description:"Actions to alter selected rows. Such us delete multiple items or change some field. First select rows, then choose an option & click <b>Go</b> button.",position:"top"}},{element:".pagination-container",popover:{title:"Pagination",description:"Choose items quantity or page will be listed.",position:"top"}}],s=[{element:".postInfo-container",popover:{title:"Create/Update Form",description:'Edit or enter each field and click <b>Save/Save changes</b>. <br>\n        <span style="color: red;">*</span> Indicates required field and can not be empty.\n        ',position:"top"}},{element:".el-button--success",popover:{title:"Save button",description:'Click this button when all required fields or changes are ready and wait to save into database. <br>\n      Input errors will be displayed in <span style="color: red;">red</span>.\n      \n      ',position:"left"}}]},8888:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.active}},[o("Status",{model:{value:e.postForm.active,callback:function(t){e.$set(e.postForm,"active",t)},expression:"postForm.active"}}),e._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:e.deleteMember}},[e._v("Delete member")])],1),e._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:8,lg:7,xs:24}},[o("Upload",{model:{value:e.postForm.thumbnailFile,callback:function(t){e.$set(e.postForm,"thumbnailFile",t)},expression:"postForm.thumbnailFile"}})],1),e._v(" "),o("el-col",{attrs:{span:8,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Name:",prop:"name"}},[o("el-input",{attrs:{placeholder:"Nombre(s)",type:"text"},model:{value:e.postForm.name,callback:function(t){e.$set(e.postForm,"name",t)},expression:"postForm.name"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:8,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Surname:",prop:"surname"}},[o("el-input",{attrs:{placeholder:"apellidoP-apellidoM",type:"text"},model:{value:e.postForm.surname,callback:function(t){e.$set(e.postForm,"surname",t)},expression:"postForm.surname"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:8,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Email (Optional):",prop:"email"}},[o("el-input",{attrs:{type:"email",placeholder:"Enter valid email"},model:{value:e.postForm.email,callback:function(t){e.$set(e.postForm,"email",t)},expression:"postForm.email"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:8,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Adscription:",prop:"adscription"}},[o("br"),e._v(" "),o("el-select",{attrs:{clearable:"",placeholder:"Select institute"},model:{value:e.postForm.adscription,callback:function(t){e.$set(e.postForm,"adscription",t)},expression:"postForm.adscription"}},e._l(e.partners,(function(t){return o("el-option",{key:t.uuid,attrs:{label:t.alias,value:t.uuid}},[o("small",{staticStyle:{color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.name))])])})),1)],1)],1),e._v(" "),o("el-col",{attrs:{span:24,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Role / Charge:",prop:"charge"}},[o("el-checkbox",{staticClass:"filter-item",model:{value:e.postForm.board,callback:function(t){e.$set(e.postForm,"board",t)},expression:"postForm.board"}},[e._v("Board")]),e._v(" "),o("el-checkbox",{staticClass:"filter-item",model:{value:e.postForm.committee,callback:function(t){e.$set(e.postForm,"committee",t)},expression:"postForm.committee"}},[e._v("Committee")]),e._v(" "),o("el-input",{attrs:{placeholder:"Co-Chair / ITM Researcher",type:"text"},model:{value:e.postForm.charge,callback:function(t){e.$set(e.postForm,"charge",t)},expression:"postForm.charge"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:8,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Divisions:",prop:"divisions"}},[o("br"),e._v(" "),o("el-select",{attrs:{multiple:"",placeholder:"Select divisions"},model:{value:e.postForm.divisions,callback:function(t){e.$set(e.postForm,"divisions",t)},expression:"postForm.divisions"}},e._l(e.divisions,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1)],1)])],1)],1)],1)],1)},s=[],a=(o("7f7f"),o("28a5"),o("db72")),n=o("2f62"),r=o("8194"),l=o("0792"),c={name:[l["c"]],surname:[l["c"]],email:[l["a"]]},m=o("407f"),p={name:"",surname:"",email:"",active:!1,board:!1,committee:!1,thumbnailUrl:"",thumbnailFile:null,charge:"",adscription:null,membership:null,divisions:[],roles:[]},u={name:"MemberDetail",mixins:[m["a"]],components:{Status:function(){return o.e("chunk-2d0aeb74").then(o.bind(null,"0af3"))},Upload:function(){return o.e("chunk-c1c0cdbe").then(o.bind(null,"70a2"))},MDinput:function(){return o.e("chunk-6790f463").then(o.bind(null,"1aba"))},Sticky:function(){return o.e("chunk-2d210590").then(o.bind(null,"b804"))}},data:function(){return{loading:!1,rules:c,tempRoute:{},id:null,photo:""}},computed:Object(a["a"])({},Object(n["c"])("members",["postForm","partners","divisions","roles"])),created:function(){this.divisions.length||this.$store.dispatch("members/fetchDivisions"),this.partners.length||this.$store.dispatch("members/fetchPartners"),this.isEdit?(this.id=this.$route.params&&this.$route.params.id,this.fetchData(this.id)):this.$store.commit("members/SET_MEMBER",p),this.tempRoute=Object.assign({},this.$route)},methods:{getPhoto:function(e){try{var t=e.split("https://drive.google.com/file/d/");return t=t[1],t=t.split("/view?usp=drivesdk"),"https://drive.google.com/uc?id="+t[0]}catch(o){return""}},fetchData:function(e){var t=this,o=this.loadingFullPage();Object(r["b"])(e).then((function(e){o.close(),e.thumbnailFile=t.getPhoto(e.thumbnailFile),t.$store.commit("members/SET_MEMBER",e)})).catch((function(e){o.close()}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){if(!t)return!1;var o;e.loading=!0;var i=e.postForm;delete i.thumbnailFile,o=e.isEdit?Object(r["e"])(i):Object(r["a"])(i),o.then((function(t){e.loading=!1,e.$router.push("/members/"+t.id),e.handleSave("".concat(e.namespace," <b>").concat(e.postForm.name," ").concat(e.postForm.surname,"</b> was sucessfully saved"))})).catch((function(t){e.loading=!1,e.handleError()}))}))},deleteMember:function(){this.handleDelete(),this.postForm.active=!1}}},d=u,h=o("2877"),f=Object(h["a"])(d,i,s,!1,null,null,null);t["a"]=f.exports}}]);