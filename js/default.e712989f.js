(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default"],{"5a0c":function(e,t,s){!function(t,s){e.exports=s()}(0,(function(){"use strict";var e="millisecond",t="second",s="minute",i="hour",a="day",n="week",o="month",r="quarter",l="year",c="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(e,t,s){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(s)+e},f={s:h,z:function(e){var t=-e.utcOffset(),s=Math.abs(t),i=Math.floor(s/60),a=s%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(a,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var i=12*(s.year()-t.year())+(s.month()-t.month()),a=t.clone().add(i,o),n=s-a<0,r=t.clone().add(i+(n?-1:1),o);return+(-(i+(s-a)/(n?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(u){return{M:o,y:l,w:n,d:a,D:c,h:i,m:s,s:t,ms:e,Q:r}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},p="en",v={};v[p]=m;var b=function(e){return e instanceof w},g=function(e,t,s){var i;if(!e)return p;if("string"==typeof e)v[e]&&(i=e),t&&(v[e]=t,i=e);else{var a=e.name;v[a]=e,i=a}return!s&&i&&(p=i),i||!s&&p},y=function(e,t){if(b(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new w(s)},$=f;$.l=g,$.i=b,$.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function m(e){this.$L=this.$L||g(e.locale,null,!0),this.parse(e)}var h=m.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var a=i[2]-1||0,n=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return $},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(e,t){var s=y(e);return this.startOf(t)<=s&&s<=this.endOf(t)},h.isAfter=function(e,t){return y(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<y(e)},h.$g=function(e,t,s){return $.u(e)?this[t]:this.set(s,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,r){var u=this,d=!!$.u(r)||r,m=$.p(e),h=function(e,t){var s=$.w(u.$u?Date.UTC(u.$y,t,e):new Date(u.$y,t,e),u);return d?s:s.endOf(a)},f=function(e,t){return $.w(u.toDate()[e].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),u)},p=this.$W,v=this.$M,b=this.$D,g="set"+(this.$u?"UTC":"");switch(m){case l:return d?h(1,0):h(31,11);case o:return d?h(1,v):h(0,v+1);case n:var y=this.$locale().weekStart||0,w=(p<y?p+7:p)-y;return h(d?b-w:b+(6-w),v);case a:case c:return f(g+"Hours",0);case i:return f(g+"Minutes",1);case s:return f(g+"Seconds",2);case t:return f(g+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(n,r){var u,d=$.p(n),m="set"+(this.$u?"UTC":""),h=(u={},u[a]=m+"Date",u[c]=m+"Date",u[o]=m+"Month",u[l]=m+"FullYear",u[i]=m+"Hours",u[s]=m+"Minutes",u[t]=m+"Seconds",u[e]=m+"Milliseconds",u)[d],f=d===a?this.$D+(r-this.$W):r;if(d===o||d===l){var p=this.clone().set(c,1);p.$d[h](f),p.init(),this.$d=p.set(c,Math.min(this.$D,p.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[$.p(e)]()},h.add=function(e,r){var c,u=this;e=Number(e);var d=$.p(r),m=function(t){var s=y(u);return $.w(s.date(s.date()+Math.round(t*e)),u)};if(d===o)return this.set(o,this.$M+e);if(d===l)return this.set(l,this.$y+e);if(d===a)return m(1);if(d===n)return m(7);var h=(c={},c[s]=6e4,c[i]=36e5,c[t]=1e3,c)[d]||1,f=this.$d.getTime()+e*h;return $.w(f,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=$.z(this),a=this.$locale(),n=this.$H,o=this.$m,r=this.$M,l=a.weekdays,c=a.months,u=function(e,i,a,n){return e&&(e[i]||e(t,s))||a[i].substr(0,n)},m=function(e){return $.s(n%12||12,e,"0")},h=a.meridiem||function(e,t,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:$.s(r+1,2,"0"),MMM:u(a.monthsShort,r,c,3),MMMM:u(c,r),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:u(a.weekdaysMin,this.$W,l,2),ddd:u(a.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(n),HH:$.s(n,2,"0"),h:m(1),hh:m(2),a:h(n,o,!0),A:h(n,o,!1),m:String(o),mm:$.s(o,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:i};return s.replace(d,(function(e,t){return t||f[e]||i.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(e,c,u){var d,m=$.p(c),h=y(e),f=6e4*(h.utcOffset()-this.utcOffset()),p=this-h,v=$.m(this,h);return v=(d={},d[l]=v/12,d[o]=v,d[r]=v/3,d[n]=(p-f)/6048e5,d[a]=(p-f)/864e5,d[i]=p/36e5,d[s]=p/6e4,d[t]=p/1e3,d)[m]||p,u?v:$.a(v)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return v[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),i=g(e,t,!0);return i&&(s.$L=i),s},h.clone=function(){return $.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},m}(),A=w.prototype;return y.prototype=A,[["$ms",e],["$s",t],["$m",s],["$H",i],["$W",a],["$M",o],["$y",l],["$D",c]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),y.extend=function(e,t){return e(t,w,y),y},y.locale=g,y.isDayjs=b,y.unix=function(e){return y(1e3*e)},y.en=v[p],y.Ls=v,y}))},"7b3d":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("nav-bar"),s("aside-menu",{class:{"has-secondary":!!e.menuSecondary},attrs:{menu:e.menuList,"menu-bottom":e.menuBottom},on:{"menu-click":e.menuClick}}),e.menuSecondary?s("aside-menu",{attrs:{menu:e.menuSecondary,"is-secondary":!0,label:e.menuSecondaryLabel,icon:e.menuSecondaryIcon},on:{"menu-click":e.menuClick,close:e.menuSecondaryCloseClick}}):e._e(),s("router-view"),s("aside-right"),s("bottom-nav"),s("footer-bar"),s("overlay")],1)},a=[],n=s("2f62"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{directives:[{name:"show",rawName:"v-show",value:e.isNavBarVisible,expression:"isNavBarVisible"}],staticClass:"navbar is-fixed-top",attrs:{id:"navbar-main"}},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item is-desktop-icon-only is-hidden-touch",attrs:{title:e.toggleTooltip},on:{click:function(t){return t.preventDefault(),e.menuToggle(t)}}},[s("b-icon",{attrs:{icon:e.menuToggleIcon}})],1),s("a",{staticClass:"navbar-item is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuToggleMobile(t)}}},[s("b-icon",{attrs:{icon:e.menuToggleMobileIcon}})],1)]),s("div",{staticClass:"navbar-brand is-right"},[s("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.updatesToggle(t)}}},[s("b-icon",{attrs:{icon:"bell","custom-size":"default"}})],1),s("a",{staticClass:"navbar-item navbar-item-menu-toggle is-hidden-desktop",on:{click:function(t){return t.preventDefault(),e.menuNavBarToggle(t)}}},[s("b-icon",{attrs:{icon:e.menuNavBarToggleIcon,"custom-size":"default"}})],1)]),s("div",{staticClass:"navbar-menu fadeIn animated faster",class:{"is-active":e.isMenuNavBarActive}},[s("div",{staticClass:"navbar-end"},[s("nav-bar-menu",{staticClass:"has-divider has-user-avatar"},[s("user-avatar"),s("div",{staticClass:"is-user-name"},[s("span",[e._v(e._s(e.userName))])]),s("div",{staticClass:"navbar-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/profile","exact-active-class":"is-active"}},[s("b-icon",{attrs:{icon:"account","custom-size":"default"}}),s("span",[e._v("My Profile")])],1),s("hr",{staticClass:"navbar-divider"}),s("a",{staticClass:"navbar-item is-hidden-mobile",on:{click:e.logout}},[s("b-icon",{attrs:{icon:"logout",type:"is-danger","custom-size":"default"}}),s("span",{staticClass:"has-text-danger"},[e._v("Log Out")])],1)],1)],1),s("a",{staticClass:"navbar-item has-divider is-desktop-icon-only",class:{"is-active":e.isAsideRightVisible},attrs:{title:"Updates"},on:{click:function(t){return t.preventDefault(),e.updatesToggle(t)}}},[s("b-icon",{class:{"has-update-mark":e.hasUpdates},attrs:{icon:"bell","custom-size":"default"}}),s("span",[e._v("Updates")])],1),s("a",{staticClass:"navbar-item is-desktop-icon-only has-text-danger",attrs:{title:"Log out"},on:{click:e.logout}},[s("b-icon",{attrs:{icon:"logout","custom-size":"default"}}),s("span",[e._v("Log out")])],1)],1)])])},r=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navbar-item has-dropdown has-dropdown-with-icons",class:{"is-hoverable":e.isHoverable,"is-active":e.isDropdownActive},on:{click:e.toggle}},[s("a",{staticClass:"navbar-link is-arrowless"},[e._t("default"),s("b-icon",{attrs:{icon:e.toggleDropdownIcon,"custom-size":"default"}})],2),e._t("dropdown")],2)},c=[],u={name:"NavBarMenu",props:{isHoverable:{type:Boolean,default:!1}},data(){return{isDropdownActive:!1}},computed:{toggleDropdownIcon(){return this.isDropdownActive?"chevron-up":"chevron-down"}},created(){window.addEventListener("click",this.forceClose)},beforeDestroy(){window.removeEventListener("click",this.forceClose)},methods:{toggle(){this.isHoverable||(this.isDropdownActive=!this.isDropdownActive)},forceClose(e){this.$el.contains(e.target)||(this.isDropdownActive=!1)}}},d=u,m=s("2877"),h=Object(m["a"])(d,l,c,!1,null,null,null),f=h.exports,p=s("808f"),v={name:"NavBar",components:{UserAvatar:p["a"],NavBarMenu:f},data(){return{isMenuNavBarActive:!1}},computed:{menuNavBarToggleIcon(){return this.isMenuNavBarActive?"close":"dots-vertical"},menuToggleMobileIcon(){return this.isAsideMobileExpanded?"backburger":"forwardburger"},menuToggleIcon(){return this.isAsideExpanded?"backburger":"forwardburger"},toggleTooltip(){return this.isAsideExpanded?"Collapse":"Expand"},darkModeToggleIcon(){return this.isDarkModeActive?"white-balance-sunny":"weather-night"},...Object(n["b"])(["isNavBarVisible","isAsideExpanded","isAsideMobileExpanded","isAsideRightVisible","isDarkModeActive","userName","hasUpdates"])},methods:{menuToggle(){this.$store.commit("asideStateToggle")},menuToggleMobile(){this.$store.commit("asideMobileStateToggle")},menuNavBarToggle(){this.isMenuNavBarActive=!this.isMenuNavBarActive},updatesToggle(){this.$store.commit("asideRightToggle")},darkModeToggle(){this.$store.commit("darkModeToggle")},async logout(){await this.$store.dispatch("logout"),window.location.reload(),this.$buefy.snackbar.open({message:"Log out clicked",queue:!1})}}},b=v,g=Object(m["a"])(b,o,r,!1,null,null,null),y=g.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"navbar is-fixed-bottom is-hidden-tablet"},[s("div",{staticClass:"navbar-brand is-flex is-justify-content-space-around"},e._l(e.menuList,(function(t){return s("router-link",{key:t.name,staticClass:"navbar-item",attrs:{tag:"a",to:t.to}},[s("b-icon",{attrs:{type:{"is-white":e.$route.name!==t.name},icon:t.icon}})],1)})),1)])},w=[],A=[{to:"/",name:"home",icon:"home"},{to:"/certificates",name:"certificates",icon:"certificate"},{to:"/events",name:"events",icon:"calendar"},{to:"/profile",name:"profile",icon:"account"}],S={data(){return{menuList:A}}},_=S,C=Object(m["a"])(_,$,w,!1,null,null,null),k=C.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{directives:[{name:"show",rawName:"v-show",value:e.isAsideVisible,expression:"isAsideVisible"}],staticClass:"aside is-placed-left",class:{"is-expanded":e.isAsideExpanded||e.isSecondary,"is-secondary":e.isSecondary}},[s("aside-tools",{attrs:{"has-close":e.isSecondary,icon:e.icon},on:{close:e.close}},[e.isSecondary?e.label?s("span",[e._v(e._s(e.label))]):e._e():s("span",[e.isAsideExpanded||e.isAsideMobileExpanded?[s("b",[e._v("AAAIMX")]),e._v(" Admin ")]:[s("b",[e._v("AAAIMX")])]],2)]),s("div",{ref:"menuContainer",staticClass:"menu-container",on:{mouseenter:e.psUpdate}},[s("div",{staticClass:"menu is-menu-main"},[e._l(e.menu,(function(t,i){return["string"===typeof t?s("p",{key:i,staticClass:"menu-label"},[e._v(e._s(t))]):s("aside-menu-list",{key:i,attrs:{"is-secondary":e.isSecondary,menu:t},on:{"menu-click":e.menuClick}})]}))],2)]),s("div",{staticClass:"menu is-menu-bottom is-primary"},[s("aside-menu-list",{attrs:{menu:e.menuBottom},on:{"menu-click":e.menuClick}})],1)],1)},M=[],D=s("b7f5"),O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"aside-tools",class:{"has-icon":!!e.icon}},[s("div",{staticClass:"aside-tools-label"},[e.icon?s("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._t("default")],2),e.hasClose?s("a",{staticClass:"aside-close",on:{click:e.close}},[s("b-icon",{attrs:{icon:"close","custom-size":"default"}})],1):e._e()])},T=[],I={name:"AsideTools",props:{icon:{type:String,default:null},label:{type:String,default:null},hasClose:{type:Boolean,default:!1}},methods:{close(){this.$emit("close")}}},E=I,L=Object(m["a"])(E,O,T,!1,null,null,null),B=L.exports,j=s("b50f"),N={name:"AsideMenu",components:{AsideMenuList:j["default"],AsideTools:B},props:{menu:{type:Array,default:()=>[]},menuBottom:{type:Array,default:()=>[]},isSecondary:{type:Boolean,default:!1},label:{type:String,default:null},icon:{type:String,default:null}},computed:{...Object(n["b"])(["isAsideVisible","isAsideExpanded","isAsideMobileExpanded"])},mounted(){this.ps=new D["a"](this.$refs.menuContainer)},methods:{menuClick(e){this.$emit("menu-click",e)},psUpdate(){this.ps&&this.ps.update()},close(){this.$emit("close")}}},U=N,F=Object(m["a"])(U,x,M,!1,null,null,null),H=F.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{directives:[{name:"show",rawName:"v-show",value:e.isFooterBarVisible,expression:"isFooterBarVisible"}],staticClass:"footer"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"level"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item"},[e._v("© "+e._s(e.year)+", AAAIMX")])]),e._m(0)])])])},z=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"level-right"},[s("div",{staticClass:"level-item"},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:"https://www.aaaimx.org"}},[s("img",{attrs:{src:"https://www.aaaimx.org/img/sprites/aaaimx-transparent.png",alt:"",srcset:""}})])])])])}],Y=s("5a0c"),J=s.n(Y),P={name:"FooterBar",computed:{year(){return J()().year()},...Object(n["b"])(["isFooterBarVisible"])}},W=P,K=Object(m["a"])(W,V,z,!1,null,null,null),R=K.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.isOverlayVisible?s("div",{staticClass:"ui-overlay",on:{click:e.close}}):e._e()},Z=[],X={name:"Overlay",computed:{...Object(n["b"])(["isOverlayVisible"])},methods:{close(){this.$store.commit("overlayToggle",!1)}}},q=X,Q=Object(m["a"])(q,G,Z,!1,null,null,null),ee=Q.exports,te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{staticClass:"aside is-placed-right"},[s("div",{ref:"container",staticClass:"aside-container",on:{mouseenter:e.psUpdate}},[s("aside-updates",{on:{"data-updated":e.psInit}})],1)])},se=[],ie=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",e._l(e.items,(function(t){return s("aside-updates-item",{key:t.id,attrs:{status:t.status,icon:t.icon,ago:t.ago}},[s("p",[e._v(e._s(t.text))])])})),1)},ae=[],ne=s("bc3a"),oe=s.n(ne),re=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[e._t("default")],2),s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"level-item"},[e.icon?s("span",{staticClass:"tag is-small",class:e.status},[s("b-icon",{attrs:{icon:e.icon,size:"is-small"}})],1):e._e()]),e.ago?s("div",{staticClass:"level-item"},[s("small",[e._v(e._s(e.ago))])]):e._e()])])])])},le=[],ce={name:"AsideUpdatesItem",props:{icon:{type:String,default:null},status:{type:String,default:"is-info"},ago:{type:String,default:null}}},ue=ce,de=Object(m["a"])(ue,re,le,!1,null,null,null),me=de.exports,he={name:"AsideUpdates",components:{AsideUpdatesItem:me},data(){return{items:[]}},mounted(){this.getData()},methods:{getData(){oe.a.get("/data-sources/updates.json").then(e=>{this.items=e.data.data,this.$emit("data-updated"),this.$store.commit("basic",{key:"hasUpdates",value:!0})}).catch(e=>{console.log(e)})}}},fe=he,pe=Object(m["a"])(fe,ie,ae,!1,null,null,null),ve=pe.exports,be={name:"AsideRight",components:{AsideUpdates:ve},computed:{...Object(n["b"])(["isAsideRightVisible"])},methods:{psInit(){this.ps=new D["a"](this.$refs.container)},psUpdate(){this.ps&&this.ps.update()}}},ge=be,ye=Object(m["a"])(ge,te,se,!1,null,null,null),$e=ye.exports,we=[{href:"https://www.aaaimx.org/",label:"www.aaaimx.org",external:!0,icon:"web"},{href:"https://www.facebook.com/aaaimx",label:"AAAI Student Chapter",external:!0,icon:"facebook"},{href:"https://www.instagram.com/aaaimx/",label:"@aaaimx",external:!0,icon:"instagram"},{href:"https://www.linkedin.com/company/aaaimx/",label:"in/aaaimx",external:!0,icon:"linkedin"},{href:"https://github.com/aaaimx",label:"AAAIMX",external:!0,icon:"github-circle"}],Ae=["General",[{to:"/",icon:"desktop-mac",label:"Dashboard"},{to:"/certificates",icon:"certificate",label:"Certificates"},{to:"/events",icon:"calendar",label:"Events"}],"Social links",we,"Committee links",[{href:"https://drive.google.com/drive/u/0/folders/1_I5r8bEjjtLP-JUomPv2RpFyLLT5s5yo",label:"Shared Drive",external:!0,icon:"google-drive"},{href:"https://docs.google.com/forms/d/1NPUSMUQm5l8FJHPw5AowO3h4mGzE2lnR34vcbGbct3A/edit",label:"Events (Google Form)",external:!0,icon:"format-list-bulleted"},{href:"https://docs.google.com/spreadsheets/d/1MYYRaFOsy1-oljzJaoPAYk6k6kZLJQPw9d_fIl9e0AI/edit#gid=730085670",label:"Activities (Spreadsheet)",external:!0,icon:"google-spreadsheet"},{href:"https://drive.google.com/file/d/1GAFKWsyFI81-DGsdlJxUsJ6ZsYApqLGs/view",label:"Events Protocol",external:!0,icon:"file-word-box"}],"Developer links",[{href:"https://github.com/disoftw",label:"Software Division",external:!0,icon:"github-circle"},{href:"https://hpanel.hostinger.com/hosting/aaaimx.org/",label:"Hostinger",external:!0,icon:"web-box"},{href:"https://us-files.hostinger.mx/",label:"AAAIMX FTP",external:!0,icon:"file-cloud"},{href:"https://aaaimx-admin.herokuapp.com/",label:"Django Admin",external:!0,icon:"application"},{href:"https://aaaimx-admin.herokuapp.com/api/",label:"API Docs",external:!0,icon:"file-document"}]],Se={name:"App",components:{AsideRight:$e,Overlay:ee,FooterBar:R,AsideMenu:H,NavBar:y,BottomNav:k},data(){return{menuSecondary:null,menuSecondaryLabel:null,menuSecondaryIcon:null,menuList:Ae}},computed:{menuBottom(){return[{action:"logout",icon:"logout",label:"Log out",state:"info"}]},...Object(n["b"])(["isOverlayVisible"])},mounted(){this.$store.commit("darkModeEnable"),this.$store.dispatch("getData"),this.$store.commit("user",{name:"Admin",email:"admin@aaaimx.org",avatar:"https://avatars.dicebear.com/4.5/api/bottts/mxssssssssssssssssss.svg"})},methods:{async menuClick(e){e.menuSecondary?(this.menuSecondary=e.menuSecondary,this.menuSecondaryLabel=e.menuSecondaryLabel?e.menuSecondaryLabel:null,this.menuSecondaryIcon=e.menuSecondaryIcon?e.menuSecondaryIcon:null,this.$store.commit("asideActiveForcedKeyToggle",e),this.$store.commit("overlayToggle",!0)):e.action&&("logout"===e.action?(await this.$store.dispatch("logout"),window.location.reload(),this.$buefy.toast.open({message:"Log out clicked",type:"is-danger",queue:!1})):"dark-mode-toggle"===e.action&&this.$store.commit("darkModeEnable"))},menuSecondaryCloseClick(){this.$store.commit("overlayToggle",!1)},menuSecondaryClose(){this.menuSecondary=this.menuSecondaryLabel=this.menuSecondaryIcon=null,this.$store.commit("asideActiveForcedKeyToggle",null)}},watch:{isOverlayVisible(e){e||this.menuSecondaryClose()}}},_e=Se,Ce=Object(m["a"])(_e,i,a,!1,null,null,null);t["default"]=Ce.exports},"808f":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"is-user-avatar"},[s("img",{attrs:{src:e.newUserAvatar,alt:e.userName}})])},a=[],n=(s("5319"),s("2f62")),o={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:{newUserAvatar(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;let e="somename";return this.userName&&(e=this.userName.replace(/[^a-z0-9]+/i,"")),`https://avatars.dicebear.com/v2/human/${e}.svg?options[mood][]=happy`},...Object(n["b"])(["userAvatar","userName"])}},r=o,l=s("2877"),c=Object(l["a"])(r,i,a,!1,null,null,null);t["a"]=c.exports},b50f:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",{class:{"menu-list":!e.isSubmenuList}},e._l(e.menu,(function(t,i){return s("aside-menu-item",{key:i,attrs:{"is-secondary":e.isSecondary,item:t},on:{"menu-click":e.menuClick}})})),1)},a=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",{class:{"is-active":e.isDropdownActive}},[s(e.componentIs,{tag:"component",class:e.componentClass,attrs:{to:e.itemTo,target:{_blank:e.item.external},href:e.itemHref,title:e.componentTitle,"exact-active-class":e.componentActiveClass},on:{click:e.menuClick}},[e.item.icon?s("b-icon",{class:{"has-update-mark":e.item.updateMark},attrs:{icon:e.item.icon,"custom-size":"default"}}):e._e(),e.item.label?s("span",{class:{"menu-item-label":!!e.item.icon}},[e._v(e._s(e.item.label))]):e._e(),e.hasSubmenuIcon?s("div",{staticClass:"submenu-icon"},[s("b-icon",{attrs:{icon:e.submenuIcon,"custom-size":"default"}})],1):e._e()],1),e.hasDropdown?s("aside-menu-list",{attrs:{menu:e.item.menu,isSubmenuList:!0}}):e._e()],1)},o=[],r=s("2f62"),l={name:"AsideMenuItem",components:{AsideMenuList:()=>Promise.resolve().then(s.bind(null,"b50f"))},props:{item:{type:Object,default:null},isSecondary:{type:Boolean,default:!1}},data(){return{isDropdownActive:!1}},methods:{menuClick(){this.$emit("menu-click",this.item),this.hasDropdown&&(this.isDropdownActive=!this.isDropdownActive,this.isSecondary||this.isAsideMobileExpanded||this.$store.commit("asideStateToggle",!0))}},computed:{componentIs(){return this.item.to?"router-link":"a"},hasSubmenuIcon(){return this.hasDropdown||this.item.menuSecondary},hasDropdown(){return!!this.item.menu},submenuIcon(){return this.item.menuSecondary?"chevron-right":this.isDropdownActive?"minus":"plus"},itemTo(){return this.item.to?this.item.to:null},itemHref(){return this.item.href?this.item.href:null},componentTitle(){return!this.isAsideExpanded&&this.item.label?this.item.label:null},componentClass(){const e={"has-icon":!!this.item.icon,"has-submenu-icon":this.hasSubmenuIcon};return this.item.state&&(e["is-state-"+this.item.state]=!0,e["is-hoverable"]=!0),this.asideActiveForcedKey&&this.item.menuSecondaryKey&&this.asideActiveForcedKey===this.item.menuSecondaryKey&&(e["is-active"]=!0),e},componentActiveClass(){return this.asideActiveForcedKey?null:"is-active"},...Object(r["b"])(["asideActiveForcedKey","isAsideExpanded"])},watch:{isAsideExpanded(e){e||(this.isDropdownActive=!1)}}},c=l,u=s("2877"),d=Object(u["a"])(c,n,o,!1,null,null,null),m=d.exports,h={name:"AsideMenuList",components:{AsideMenuItem:m},props:{isSubmenuList:{type:Boolean,default:!1},isSecondary:{type:Boolean,default:!1},menu:{type:Array,default:()=>[]}},methods:{menuClick(e){this.$emit("menu-click",e)}}},f=h,p=Object(u["a"])(f,i,a,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=default.e712989f.js.map