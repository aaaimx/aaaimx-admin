(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["certificates"],{"41f3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("title-bar",{attrs:{"title-stack":t.titleStack}}),s("hero-bar",[t._v(" Certificates "),s("router-link",{attrs:{slot:"right",to:"/"},slot:"right"},[s("b-button",{attrs:{"icon-left":"pencil-plus",type:"is-success"}},[t._v(" New certificate ")])],1)],1),s("section",{staticClass:"section is-main-section"},[s("card-component",{staticClass:"has-table"},[s("Table")],1)],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:t.total+" Certificates",icon:"certificate","has-button-slot":!0}},[s("action-button",{attrs:{slot:"button",icon:"autorenew",label:"Clear filters"},on:{"button-click":t.clearFilters},slot:"button"}),s("card-toolbar",{staticClass:"is-upper",attrs:{slot:"toolbar"},slot:"toolbar"},[s("div",{staticClass:"buttons has-addons",attrs:{slot:"left"},slot:"left"},[s("button",{staticClass:"button is-link",class:{"is-active":"RECOGNITION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="RECOGNITION"}}},[t._v(" RECOGNITION ")]),s("button",{staticClass:"button is-link",class:{"is-active":"APPRECIATION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="APPRECIATION"}}},[t._v(" APPRECIATION ")]),s("button",{staticClass:"button is-link",class:{"is-active":"PARTICIPATION"===t.listQuery.type},on:{click:function(e){t.listQuery.type="PARTICIPATION"}}},[t._v(" PARTICIPATION ")])]),s("form",{attrs:{slot:"right"},slot:"right"},[s("SearchInput",{attrs:{listQuery:t.listQuery}})],1)]),s("div",[s("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),s("b-table",{attrs:{data:t.list,striped:!0,hoverable:!0,bordered:!1,narrowed:!0,checkable:!0,"checked-rows":t.checkedRows,detailed:!0,"show-detail-icon":!0,"detail-key":t.key,"opened-detailed":t.defaultOpenedDetails,"backend-pagination":"",total:t.total,paginated:!1,loading:t.isLoading,"current-page":t.listQuery.page,"per-page":t.listQuery.limit,"backend-sorting":"","default-sort-direction":t.defaultSortOrder,"default-sort":[t.sortField,t.sortOrder]},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e},"details-open":t.onCollapse,sort:t.onSort},scopedSlots:t._u([{key:"detail",fn:function(t){return[s("Preview",{attrs:{cert:t.row,styleMode:"single"}})]}}])},[s("b-table-column",{attrs:{label:"To",field:"to",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[[s("router-link",{attrs:{tag:"a",to:"/certificates/"+e.row.uuid}},[s("small",[t._v(t._s(e.row.to))])])]]}}])}),s("b-table-column",{attrs:{label:"Type",sortable:"",field:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",[t._v(t._s(e.row.type))])]}}])}),s("b-table-column",{attrs:{label:"Event",sortable:"",field:"event"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.event?s("small",[t._v(t._s(e.row.event.length>15?e.row.event.slice(0,15)+"...":e.row.event))]):s("small",{staticClass:"has-text-grey is-abbr-like"},[t._v("No event")])]}}])}),s("b-table-column",{attrs:{label:"Date",field:"created_at"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("small",{staticClass:"has-text-grey is-abbr-like",attrs:{title:e.row.created_at}},[t._v(t._s(new Date(e.row.created_at).toLocaleDateString()))])]}}])}),s("b-table-column",{attrs:{field:"published",label:"Status",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",{staticClass:"tag is-rounded",class:{"is-success":e.row.published,"is-danger":!e.row.published}},[t._v(" "+t._s(e.row.published?"Online":"Draft")+" ")])]}}])}),s("b-table-column",{attrs:{"custom-key":"actions","cell-class":"is-actions-cell"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"buttons is-right"},[s("a",{staticClass:"button is-small is-info",attrs:{tag:"a",target:"_blank",href:"https://www.aaaimx.org/certificates/?id="+e.row.uuid}},[s("b-icon",{attrs:{icon:"eye",size:"is-small"}})],1),s("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),t.trashModal(e.row)}}},[s("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)])]}}])}),s("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[s("EmptyData",{attrs:{isLoading:t.isLoading}})],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("div",{staticClass:"is-flex is-justify-content-space-between"},[s("div",{staticStyle:{margin:"0.5rem"}},[s("b-dropdown",{attrs:{"append-to-body":"","aria-role":"list"},scopedSlots:t._u([{key:"trigger",fn:function(e){var a=e.active;return s("button",{staticClass:"button is-primary is-small"},[s("span",[t._v("Actions")]),s("b-icon",{attrs:{icon:a?"menu-up":"menu-down"}})],1)}}])},[s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[s("div",{staticClass:"media has-text-dark"},[s("b-icon",{staticClass:"media-left",attrs:{type:"is-success",icon:"web"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Publish selected")])])],1)]),s("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[s("div",{staticClass:"media has-text-dark"},[s("b-icon",{staticClass:"media-left",attrs:{type:"is-danger",icon:"web"}}),s("div",{staticClass:"media-content"},[s("h3",[t._v("Mark as draft")])])],1)])],1)],1),s("Pagination",{attrs:{listQuery:t.listQuery,total:t.total}})],1)])],1)],1)],1)},r=[],l=(s("96cf"),s("1da1")),n=s("a6c5"),c=s("fa9b"),u=s("8644"),d=s("fab6"),f=s.n(d),b={name:"CertificatesTable",components:{ModalBox:c["a"],Preview:u["a"]},mixins:[f.a],data:function(){return{listQuery:{type:"",ordering:null,page:1,limit:10,offset:0},key:"uuid",sortField:"date_created",defaultSortOrder:"asc"}},methods:{handleClick:function(t){console.log(t),this.listQuery.type=t},clearFilters:function(){this.listQuery={type:"",ordering:null,page:1,limit:10,offset:0},this.sortField="date_created",this.defaultSortOrder="asc"},actionSample:function(){this.$router.push("/certificates/new")},getData:function(){var t=this;this.isLoading=!0,this.listQuery.offset=this.listQuery.limit*(this.listQuery.page-1),Object(n["c"])(this.listQuery).then((function(e){t.list=e.results,t.total=e.count,t.isLoading=!1}))},trashConfirm:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isModalActive=!1,e.prev=1,e.next=4,Object(n["f"])(t.trashObject.uuid);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),console.log(e.t0);case 9:return e.prev=9,t.getData(),e.finish(9);case 12:t.$buefy.snackbar.open({message:"Confirmed",queue:!1});case 13:case"end":return e.stop()}}),e,null,[[1,6,9,12]])})))()}}},p=b,m=s("2877"),h=Object(m["a"])(p,o,r,!1,null,null,null),y=h.exports,v=s("1e1d"),w=s("503b"),g={name:"Certificates",components:{HeroBar:w["a"],TitleBar:v["a"],Table:y},computed:{titleStack:function(){return["Admin","Certificates"]}},methods:{actionSample:function(){this.$buefy.toast.open({message:"Some action",type:"is-info",queue:!1})}}},k=g,C=Object(m["a"])(k,a,i,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=certificates-legacy.0c38dd5d.js.map