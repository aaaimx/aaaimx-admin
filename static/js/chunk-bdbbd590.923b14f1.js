(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bdbbd590"],{"407f":function(e,t,s){"use strict";var i={data:function(){return{loading:!1,searching:!1}},methods:{loadingFullPage:function(){return this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}}},o=i,a=void 0,n={props:{namespace:{type:String,default:""},isEdit:{type:Boolean,default:!1}},mixins:[o],methods:{validateRequire:function(e,t,s){""===t?(a.$message({message:e.field+" is required",type:"error"}),s(new Error("Required field"))):s()},handleSave:function(e){this.$notify({title:" ".concat(this.isEdit?"Updated":"Created"),dangerouslyUseHTMLString:!0,message:e,type:"success",duration:2e3})},handleError:function(){this.$message({message:"Something went wrong:( Try again",type:"error"})},handleDelete:function(){this.$message({dangerouslyUseHTMLString:!0,message:"".concat(this.namespace," was sucessfully deleted"),type:"success",showClose:!0,duration:2e3})},validateUrl:function(e,t,s){t?validURL(t)?s():(a.$message({message:"Invalid URL format",type:"error"}),s(new Error("Invalid URL"))):s()}}};t["a"]=n},4817:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"createPost-container"},[s("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:e.postForm,rules:e.rules},on:{submit:function(e){return e.preventDefault(),(!1)(e)}}},[s("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+e.postForm.active}},[s("QR",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],model:{value:e.postForm.QR,callback:function(t){e.$set(e.postForm,"QR",t)},expression:"postForm.QR"}}),e._v(" "),s("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},domProps:{textContent:e._s(e.isEdit?"Save changes":"Save")},on:{click:e.submitForm}}),e._v(" "),s("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{type:"danger"},on:{click:e.deleteCert}},[e._v("Delete "+e._s(e.namespace))])],1),e._v(" "),s("div",{staticClass:"createPost-main-container"},[s("el-row",[s("el-col",{attrs:{span:24}},[s("div",{staticClass:"postInfo-container"},[s("el-row",[s("el-col",{attrs:{span:12,xs:24}},[s("Upload",{directives:[{name:"show",rawName:"v-show",value:this.isEdit,expression:"this.isEdit"}],model:{value:e.photo,callback:function(t){e.photo=t},expression:"photo"}})],1),e._v(" "),s("el-col",{attrs:{span:12,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Facilitator:",prop:"to"}},[s("el-input",{attrs:{placeholder:"NOMBRE(S) APPELLIDO(S)",type:"text"},model:{value:e.postForm.to,callback:function(t){e.$set(e.postForm,"to",t)},expression:"postForm.to"}})],1)],1),e._v(" "),s("el-col",{attrs:{span:12,xs:24}},[s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Type:",prop:"type"}},[s("br"),e._v(" "),s("el-select",{attrs:{filterable:"","allow-create":"",placeholder:"Select type"},model:{value:e.postForm.type,callback:function(t){e.$set(e.postForm,"type",t)},expression:"postForm.type"}},e._l(e.types,(function(e){return s("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1)],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{span:12,xs:24}},[s("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.postForm.file,expression:"postForm.file"}],staticClass:"postInfo-container-item",attrs:{label:"Currently:"}},[s("a",{staticClass:"link-type",attrs:{target:"_blank",href:e.postForm.file}},[s("svg-icon",{attrs:{"icon-class":"link"}})],1)]),e._v(" "),s("el-form-item",{staticClass:"postInfo-container-item",attrs:{label:"Change:",prop:"file"}},[s("input",{ref:"file",attrs:{type:"file",id:"file"}})])],1),e._v(" "),s("qrcode",{directives:[{name:"show",rawName:"v-show",value:e.isEdit,expression:"isEdit"}],attrs:{value:e.postForm.QR,options:{width:200}}})],1)],1)])],1)],1)],1)],1)},o=[],a=(s("28a5"),s("db72")),n=s("2f62"),r=s("616f"),l={to:[{required:!0,message:"Please enter facilitator",trigger:"blur"}],type:[{required:!0,message:"Please input type",trigger:["blur","change"]}]},c=s("407f"),u={type:"RECOGNITION",to:"",QR:"",file:""},d={name:"CertificateDetail",mixins:[c["a"]],components:{QR:function(){return s.e("chunk-76f6a8a8").then(s.bind(null,"46c3"))},Upload:function(){return s.e("chunk-0c67069d").then(s.bind(null,"e955"))},MDinput:function(){return s.e("chunk-6790f463").then(s.bind(null,"1aba"))},Sticky:function(){return s.e("chunk-2d210590").then(s.bind(null,"b804"))}},data:function(){return{loading:!1,rules:l,tempRoute:{},photo:"",id:null}},computed:Object(a["a"])({},Object(n["c"])("certificates",["postForm","types"])),created:function(){this.isEdit?(this.id=this.$route.params&&this.$route.params.id,this.fetchData(this.id)):this.$store.commit("certificates/SET_CERT",u),this.tempRoute=Object.assign({},this.$route)},methods:{submitUpload:function(e){this.$refs.upload.submit()},getPhoto:function(e){try{var t=e.split("https://drive.google.com/file/d/");return t=t[1],t=t.split("/view?usp=drivesdk"),"https://drive.google.com/uc?id="+t[0]}catch(s){return""}},fetchData:function(e){var t=this,s=this.loadingFullPage();Object(r["b"])(e).then((function(e){s.close(),t.photo=t.getPhoto(e.file),t.$store.commit("certificates/SET_CERT",e)})).catch((function(e){s.close(),console.log(e)}))},submitForm:function(){var e=this;this.$refs.postForm.validate((function(t){if(!t)return console.log("error submit!!"),!1;var s;e.loading=!0;var i=new FormData;for(var o in e.$refs.file.files.length?i.append("file",e.$refs.file.files[0]):delete e.postForm.file,e.postForm)i.append(o,e.postForm[o]);s=e.isEdit?Object(r["e"])(e.id,i):Object(r["a"])(i),s.then((function(t){e.handleSave("".concat(e.namespace," <b>").concat(e.postForm.type,": ").concat(e.postForm.to,"</b> was sucessfully saved")),e.loading=!1,e.photo=e.getPhoto(t.file),e.$refs.file.value="",e.$router.push("/certificates/"+t.uuid)})).catch((function(t){e.loading=!1,console.log(t),e.handleError()}))}))},deleteCert:function(){this.handleDelete(),this.postForm.active=!1}}},p=d,m=s("2877"),f=Object(m["a"])(p,i,o,!1,null,null,null);t["a"]=f.exports},"5e36":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("Detail",{attrs:{"is-edit":!0,namespace:"Certificate"}})},o=[],a=s("4817"),n={name:"EditForm",components:{Detail:a["a"]}},r=n,l=s("2877"),c=Object(l["a"])(r,i,o,!1,null,null,null);t["default"]=c.exports}}]);