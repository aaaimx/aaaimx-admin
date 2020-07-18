(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b45493ec"],{"5aad":function(t,e,i){},c0a0:function(t,e,i){"use strict";var s=i("5aad"),n=i.n(s);n.a},f9dc:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container"},[i("h3",[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"editor-container"},[i("dnd-list",{attrs:{list1:t.advisors,list2:t.list2,"list1-title":"advisors","list2-title":""}})],1),t._v(" "),i("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"","remote-method":t.getMember,loading:t.loading,clearable:"",placeholder:"Selector advisor"},model:{value:t.advisor,callback:function(e){t.advisor=e},expression:"advisor"}},t._l(t.options,(function(t){return i("el-option",{key:t.id,attrs:{label:t.surname+" "+t.name,value:t.id}})})),1),t._v(" "),i("el-button",{attrs:{icon:"el-icon-check",type:"success",circle:"",size:"mini"},on:{click:function(e){return t.addAdvisor()}}}),t._v(" "),i("MemberModal")],1)},n=[],r=(i("7f7f"),i("6b54"),i("96cf"),i("3b8d")),a=i("db72"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dndList"},[i("div",{staticClass:"dndList-list",style:{width:t.width1}},[i("draggable",{staticClass:"dragArea",attrs:{"set-data":t.setData,list:t.list1,group:"article"}},[t._l(t.list1,(function(e,s){return i("div",{key:e.id,staticClass:"list-complete-item"},[i("div",{staticClass:"list-complete-item-handle"},[t._v("\n          "+t._s(e.surname)+", "+t._s(e.name)+" "),i("sup",{staticClass:"link-type"},[t._v(t._s(++s))])]),t._v(" "),i("div",{staticStyle:{position:"absolute",right:"0px"}},[i("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(i){return t.deleteEle(e)}}},[i("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])})),t._v(" "),t.list1.length?t._e():i("aside",[t._v("No advisors")])],2),t._v(" "),i("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{icon:"el-icon-circle-check-outline",size:"small",type:"success"},on:{click:function(e){return t.saveAdvisors()}}},[t._v("Save advisor")]),t._v(" "),i("el-button",{attrs:{icon:"el-icon-refresh",size:"small",type:"primary"},on:{click:function(e){return t.sort()}}},[t._v("Reset order")])],1)])},l=[],c=(i("ac4d"),i("8a81"),i("5df3"),i("ac6a"),i("55dd"),i("1980")),d=i.n(c),u=i("780a");function f(t){return Object(u["a"])({url:"/advisors/",method:"POST",data:t})}function v(t){return Object(u["a"])({url:"/advisors/".concat(t.id,"/"),method:"PATCH",data:t})}function h(t,e){return Object(u["a"])({url:"/advisors/".concat(t,"/"),method:"DELETE",data:e})}var p={name:"DndList",components:{draggable:d.a},data:function(){return{loading:!1}},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"100%"}},mounted:function(){this.sort()},methods:{sort:function(){var t=function(t,e){return t.position>e.position?1:-1};this.list1.sort(t)},isNotInList1:function(t){return this.list1.every((function(e){return t.id!==e.id}))},isNotInList2:function(t){return this.list2.every((function(e){return t.id!==e.id}))},saveAdvisors:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=[],this.loading=!0,this.list1.forEach((function(t,i,s){t.id&&e.push(v({id:t.id,position:++i}))})),Promise.all(e).then((function(t){i.$notify({title:"Updated",dangerouslyUseHTMLString:!0,message:"<b>Research Advisors</b> was sucessfully saved",type:"success",duration:2e3}),i.loading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteEle:function(t){var e=this,i=!0,s=!1,n=void 0;try{for(var r,a=this.list1[Symbol.iterator]();!(i=(r=a.next()).done);i=!0){var o=r.value;if(o.id===t.id){var l=this.list1.indexOf(o);this.list1.splice(l,1),o.id&&h(o.id).then((function(t){e.$message({dangerouslyUseHTMLString:!0,message:"Advisor removed",type:"warning",showClose:!0,duration:2e3})}));break}}}catch(c){s=!0,n=c}finally{try{i||null==a.return||a.return()}finally{if(s)throw n}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){var e=!0,i=!1,s=void 0;try{for(var n,r=this.list2[Symbol.iterator]();!(e=(n=r.next()).done);e=!0){var a=n.value;if(a.id===t.id){var o=this.list2.indexOf(a);this.list2.splice(o,1);break}}}catch(l){i=!0,s=l}finally{try{e||null==r.return||r.return()}finally{if(i)throw s}}this.isNotInList1(t)&&this.list1.push(t)},setData:function(t){t.setData("Text","")}}},m=p,g=(i("c0a0"),i("2877")),b=Object(g["a"])(m,o,l,!1,null,"0d5c0d19",null),y=b.exports,_=i("8194"),w=i("828d"),k=i("2f62"),x={name:"DndListDemo",components:{DndList:y,MemberModal:function(){return i.e("chunk-42601475").then(i.bind(null,"dbfb"))}},props:{title:{type:String,default:"list1"},advisors:{type:Array,default:function(){return[]}}},data:function(){return{list1:[],list2:[],options:[],loading:!1,advisor:""}},computed:Object(a["a"])({},Object(k["c"])("members",["collaborators"])),methods:{getMember:function(t){var e=this;this.loading=!0,Object(w["a"])(t).then((function(t){e.options=t.results,e.loading=!1}))},addAdvisor:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,i,s,n,r,a,o,l,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.advisor.toString().trim()){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(_["b"])(this.advisor);case 4:if(e=t.sent,i=e.name,s=e.surname,n=e.id,r=this.$route.params.id,a=this.advisors.filter((function(t){return t.name==i&&t.surname==s})),a.length){t.next=16;break}return o={name:i,surname:s,member:n,research:r,position:this.advisors.length+1},t.next=12,f(o);case 12:l=t.sent,c=Object.assign({},o,l),this.advisors.push(c),this.$message({dangerouslyUseHTMLString:!0,message:"Advisor created",some:c,type:"success",showClose:!0,duration:2e3});case 16:this.advisor="";case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},S=x,O=Object(g["a"])(S,s,n,!1,null,null,null);e["default"]=O.exports}}]);