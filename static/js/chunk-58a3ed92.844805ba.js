(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58a3ed92"],{"05ad":function(e,t,n){},"0792":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var o=n("61f7"),s={required:!0,message:"This field is required",trigger:"blur"},i={validator:function(e,t,n){Object(o["d"])(t)?n():n(new Error("Please enter the correct email"))}},a={validator:function(e,t,n){t.length?n():n(new Error("The password can not be less than 6 digits"))}}},"1ffc":function(e,t,n){},"336c":function(e,t,n){"use strict";var o=n("1ffc"),s=n.n(o);s.a},7017:function(e,t,n){"use strict";(function(e){var t=n("0792");e.exports={username:[t["c"]],password:[t["c"],t["b"]]}}).call(this,n("dd40")(e))},"793e":function(e,t,n){"use strict";var o=n("05ad"),s=n.n(o);s.a},"83c1":function(e,t,n){},9067:function(e,t,n){},"9ed6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[e._v("Login Form")])]),e._v(" "),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),n("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(t){e.capsTooltip=!1}},nativeOn:{keyup:[function(t){return e.checkCapslock(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}]},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),n("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),e._v(" "),n("el-button",{staticStyle:{width:"100%","background-color":"#800000","border-style":"none","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Login")])],1),e._v(" "),n("el-dialog",{attrs:{title:"Or connect with",visible:e.showDialog},on:{"update:visible":function(t){e.showDialog=t}}},[e._v("\n    Can not be simulated on local, so please combine you own business simulation! ! !\n    "),n("br"),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("social-sign")],1)],1)},s=[],i=(n("ac6a"),n("456d"),n("7017")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(t){return e.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),e._v("\n    WeChat\n  ")]),e._v(" "),n("div",{staticClass:"sign-btn",on:{click:function(t){return e.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),e._v("\n    QQ\n  ")])])},r=[],c={name:"SocialSignin",methods:{wechatHandleClick:function(e){alert("ok")},tencentHandleClick:function(e){alert("ok")}}},l=c,u=(n("d9fb"),n("2877")),d=Object(u["a"])(l,a,r,!1,null,"7309fbbb",null),p=d.exports,f={name:"Login",components:{SocialSign:p},data:function(){return{loginForm:{username:"",password:""},loginRules:i["default"],passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(e){var t=e.query;t&&(this.redirect=t.redirect,this.otherQuery=this.getOtherQuery(t))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.shiftKey,n=e.key;n&&1===n.length&&(this.capsTooltip=!!(t&&n>="a"&&n<="z"||!t&&n>="A"&&n<="Z")),"CapsLock"===n&&!0===this.capsTooltip&&(this.capsTooltip=!1)},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1}))}))},getOtherQuery:function(e){return Object.keys(e).reduce((function(t,n){return"redirect"!==n&&(t[n]=e[n]),t}),{})}}},h=f,g=(n("793e"),n("336c"),n("df97"),Object(u["a"])(h,o,s,!1,null,"4c84b632",null));t["default"]=g.exports},d9fb:function(e,t,n){"use strict";var o=n("9067"),s=n.n(o);s.a},dd40:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},df97:function(e,t,n){"use strict";var o=n("83c1"),s=n.n(o);s.a}}]);