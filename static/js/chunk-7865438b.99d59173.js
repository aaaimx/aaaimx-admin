(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7865438b"],{"0792":function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return n}));var s=o("61f7"),a={required:!0,message:"This field is required",trigger:"blur"},r={validator:function(e,t,o){!Object(s["d"])(t)&&t.trim()?o(new Error("Please enter the correct email")):o()}},n={validator:function(e,t,o){t.length?o():o(new Error("The password can not be less than 6 digits"))}}},"407f":function(e,t,o){"use strict";var s={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}},a=s,r=o("532b"),n=void 0,i={props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},mixins:[a],created:function(){this.$store.commit("app/SET_STEPS",r["a"])},methods:{validateRequire:function(e,t,o){""===t?(n.$message({message:e.field+" is required",type:"error"}),o(new Error("Required field"))):o()},handleSave:function(e){this.$notify({title:" ".concat(this.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:e,type:"success",duration:2e3})},handleError:function(){this.$message({message:"Something went wrong:( Try again",type:"error"})},handleDelete:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3})},validateUrl:function(e,t,o){t?validURL(t)?o():(n.$message({message:"Invalid URL format",type:"error"}),o(new Error("Invalid URL"))):o()}}};t["a"]=i},"46b7":function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.active}},[o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:e.deleteProject}},[e._v("Delete project")])],1),e._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"grid-content bg-purple-dark"})])],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:12}},[o("div",{staticClass:"grid-content bg-purple"})]),e._v(" "),o("el-col",{attrs:{span:12}},[o("div",{staticClass:"grid-content bg-purple-light"})])],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:24}},[o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:24,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Title:",prop:"title"}},[o("el-input",{attrs:{placeholder:"i.e: Segmentación de regiones basado en atributos de textura de datos bidimensionales...",type:"textarea",rows:"3"},model:{value:e.postForm.title,callback:function(t){e.$set(e.postForm,"title",t)},expression:"postForm.title"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:12,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Start date:",prop:"start"}},[o("br"),e._v(" "),o("el-date-picker",{attrs:{format:"MMM dd, yyyy","value-format":"yyyy-MM-dd",type:"date",placeholder:"Pick a day"},model:{value:e.postForm.start,callback:function(t){e.$set(e.postForm,"start",t)},expression:"postForm.start"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:12,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"End date:",prop:"end"}},[o("br"),e._v(" "),o("el-date-picker",{attrs:{format:"MMM dd, yyyy","value-format":"yyyy-MM-dd",type:"date",placeholder:"Pick a day"},model:{value:e.postForm.end,callback:function(t){e.$set(e.postForm,"end",t)},expression:"postForm.end"}})],1)],1),e._v(" "),o("el-col",{attrs:{span:12,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Institute:",prop:"institute"}},[o("br"),e._v(" "),o("el-select",{attrs:{filterable:"",clearable:"",placeholder:"Select institute"},model:{value:e.postForm.institute,callback:function(t){e.$set(e.postForm,"institute",t)},expression:"postForm.institute"}},e._l(e.partners,(function(t){return o("el-option",{key:t.uuid,attrs:{label:t.alias,value:t.uuid}},[o("small",{staticStyle:{color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.name))])])})),1)],1)],1),e._v(" "),o("el-col",{attrs:{span:12,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Responsable:",prop:"responsible"}},[o("br"),e._v(" "),o("el-select",{attrs:{remote:"",clearable:"",filterable:"","remote-method":e.fetchMember,placeholder:"Select responsible person"},model:{value:e.postForm.responsible,callback:function(t){e.$set(e.postForm,"responsible",t)},expression:"postForm.responsible"}},e._l(e.collaborators,(function(e){return o("el-option",{key:e.name,attrs:{label:e.name+" "+e.surname,value:e.name}})})),1),e._v(" "),o("MemberModal")],1)],1),e._v(" "),o("el-col",{attrs:{span:12,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Áreas de interés:",prop:"lines"}},[o("br"),e._v(" "),o("el-select",{attrs:{multiple:"",placeholder:"Select interest areas"},model:{value:e.postForm.lines,callback:function(t){e.$set(e.postForm,"lines",t)},expression:"postForm.lines"}},e._l(e.lines,(function(t){return o("el-option",{key:t.id,attrs:{label:t.topic.slice(0,30).concat("..."),value:t.id}},[e._v(e._s(t.topic))])})),1),e._v(" "),o("LineModal")],1)],1),e._v(" "),o("el-col",{attrs:{span:12,xs:24}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Collaborators:",prop:"collaborators"}},[o("br"),e._v(" "),o("el-select",{attrs:{remote:"",multiple:"",filterable:"","remote-method":e.fetchMember,placeholder:"Select collaborators"},model:{value:e.postForm.collaborators,callback:function(t){e.$set(e.postForm,"collaborators",t)},expression:"postForm.collaborators"}},e._l(e.collaborators,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name+" "+e.surname,value:e.id}})})),1),e._v(" "),o("MemberModal")],1)],1)],1)],1)])],1)],1)],1)],1)},a=[],r=(o("5df3"),o("ac6a"),o("db72")),n=o("2f62"),i=o("24d2"),l=o("8194"),c=o("407f"),p=o("0792"),d={title:[p["c"]],start:[p["c"]]},u={title:"",start:"",end:"",in_charge:"",institute:"",collaborators:[],lines:[]},m={name:"ProjectDetail",mixins:[c["a"]],components:{MDinput:function(){return o.e("chunk-6790f463").then(o.bind(null,"1aba"))},LineModal:function(){return o.e("chunk-2d0e13f0").then(o.bind(null,"7a2b"))},MemberModal:function(){return o.e("chunk-42601475").then(o.bind(null,"dbfb"))},Sticky:function(){return o.e("chunk-2d210590").then(o.bind(null,"b804"))}},data:function(){return{loading:!1,rules:d,tempRoute:{},id:null,collaborators:[]}},computed:Object(r["a"])({},Object(n["c"])("members",["partners"]),{},Object(n["c"])("projects",["postForm","lines"])),created:function(){this.lines.length||this.$store.dispatch("projects/fetchLines"),this.partners.length||this.$store.dispatch("members/fetchPartners"),this.isEdit?(this.id=this.$route.params&&this.$route.params.id,this.fetchData(this.id)):this.$store.commit("projects/SET_PROJECT",u),this.tempRoute=Object.assign({},this.$route)},methods:{fetchMember:function(e){var t=this;Object(l["c"])({name:e}).then((function(e){t.collaborators=e.results}))},fetchData:function(e){var t=this,o=this.loadingFullPage();Object(i["e"])(e).then((function(e){var s=[];e.collaborators.forEach((function(e){s.push(Object(l["b"])(e))})),Promise.all(s).then((function(e){t.collaborators=e,o.close()})),t.$store.commit("projects/SET_PROJECT",e)})).catch((function(e){o.close()}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){if(!t)return!1;var o;e.loading=!0,o=e.isEdit?Object(i["f"])(e.postForm):Object(i["a"])(e.postForm),o.then((function(t){e.handleSave("".concat(e.namespace," <b>").concat(e.postForm.title,"</b> was sucessfully saved")),e.loading=!1,e.$router.push("/projects/"+t.uuid)})).catch((function(t){e.loading=!1,e.handleError()}))}))},deleteProject:function(){this.handleError(),this.postForm.active=!1}}},b=m,f=o("2877"),h=Object(f["a"])(b,s,a,!1,null,null,null);t["a"]=h.exports},"532b":function(e,t,o){"use strict";o.d(t,"b",(function(){return s})),o.d(t,"a",(function(){return a}));var s=[{element:".filter-container",popover:{title:"Table filters",description:"Filter by name, title, status or some important field. Also navigate to <b>Create page</b> to register new item.",position:"bottom"}},{element:".el-table",popover:{title:"Table",description:"Resources, items, list, result of filters applied.",position:"top"}},{element:".el-select--mini",popover:{title:"Quick actions",description:"Actions to alter selected rows. Such us delete multiple items or change some field. First select rows, then choose an option & click <b>Go</b> button.",position:"top"}},{element:".pagination-container",popover:{title:"Pagination",description:"Choose items quantity or page will be listed.",position:"top"}}],a=[{element:".postInfo-container",popover:{title:"Create/Update Form",description:'Edit or enter each field and click <b>Save/Save changes</b>. <br>\n        <span style="color: red;">*</span> Indicates required field and can not be empty.\n        ',position:"top"}},{element:".el-button--success",popover:{title:"Save button",description:'Click this button when all required fields or changes are ready and wait to save into database. <br>\n      Input errors will be displayed in <span style="color: red;">red</span>.\n      \n      ',position:"left"}}]},f88e:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("Detail",{attrs:{"is-edit":!0,namespace:"Project"}})},a=[],r=o("46b7"),n={name:"EditForm",components:{Detail:r["a"]}},i=n,l=o("2877"),c=Object(l["a"])(i,s,a,!1,null,null,null);t["default"]=c.exports}}]);