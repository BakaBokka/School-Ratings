(this.webpackJsonpschools=this.webpackJsonpschools||[]).push([[0],{101:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(11),c=r.n(s),o=(r(90),r(15)),i=r(137),l=r(153),n=r(154),d=r(139),j=r(157),b=r(141),h=r(3),u=Object(i.a)({root:{width:"100%",marginBottom:"20px"}});var p=function(e){var t=u(),r=Object(a.useState)(0),s=Object(o.a)(r,2),c=s[0],i=s[1];return Object(h.jsx)(d.a,{className:t.root,children:Object(h.jsxs)(j.a,{value:c,onChange:function(t,r){i(r),console.log(r),0===r?e.setTableType("mos"):1===r?e.setTableType("spb"):e.setTableType("ru")},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(h.jsx)(b.a,{label:"\u0428\u043a\u043e\u043b\u044b \u041c\u043e\u0441\u043a\u0432\u044b"}),Object(h.jsx)(b.a,{label:"\u0428\u043a\u043e\u043b\u044b \u041f\u0438\u0442\u0435\u0440\u0430"}),Object(h.jsx)(b.a,{label:"\u0428\u043a\u043e\u043b\u044b \u0420\u043e\u0441\u0441\u0438\u0438"})]})})},O=r(34),g=r(146),x=r(150),m=r(149),f=r(151),v=r(152),w=r(147),k=r(155),y=r(62),C=r.n(y),P=r(142),F=r(64),S=r.n(F),R=r(63),T=r.n(R),G=r(61),H=r.n(G),I=r(16),N=Object(i.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}})),z=function(e){var t=N(),r=Object(I.a)(),a=e.count,s=e.page,c=e.rowsPerPage,o=e.onChangePage;return Object(h.jsxs)("div",{className:t.root,children:[Object(h.jsx)(P.a,{onClick:function(e){o(e,0)},disabled:0===s,"aria-label":"first page",children:"rtl"===r.direction?Object(h.jsx)(H.a,{}):Object(h.jsx)(C.a,{})}),Object(h.jsx)(P.a,{onClick:function(e){o(e,s-1)},disabled:0===s,"aria-label":"previous page",children:"rtl"===r.direction?Object(h.jsx)(T.a,{}):Object(h.jsx)(S.a,{})}),Object(h.jsx)(P.a,{onClick:function(e){o(e,s+1)},disabled:s>=Math.ceil(a/c)-1,"aria-label":"next page",children:"rtl"===r.direction?Object(h.jsx)(S.a,{}):Object(h.jsx)(T.a,{})}),Object(h.jsx)(P.a,{onClick:function(e){o(e,Math.max(0,Math.ceil(a/c)-1))},disabled:s>=Math.ceil(a/c)-1,"aria-label":"last page",children:"rtl"===r.direction?Object(h.jsx)(C.a,{}):Object(h.jsx)(H.a,{})})]})},L=r(148),M=r(159),B=r(7),D=r(4),E=r(158),A=r(14),J=r(73),_=r.n(J),W=Object(i.a)((function(e){return{search:Object(B.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(A.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(A.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(B.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}})),q=function(e){var t=e.preGlobalFilteredRows,r=e.globalFilter,a=e.setGlobalFilter,s=W(),c=t.length;return Object(h.jsxs)("div",{className:s.search,children:[Object(h.jsx)("div",{className:s.searchIcon,children:Object(h.jsx)(_.a,{})}),Object(h.jsx)(E.a,{value:r||"",onChange:function(e){a(e.target.value||void 0)},placeholder:"".concat(c," records..."),classes:{root:s.inputRoot,input:s.inputInput},inputProps:{"aria-label":"search"}})]})},K=r(143),Q=r(144),U=Object(i.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(A.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{}}})),V=function(e){var t=U(),r=e.numSelected,a=e.preGlobalFilteredRows,s=e.setGlobalFilter,c=e.globalFilter;return Object(h.jsxs)(K.a,{className:Object(D.a)(t.root,Object(B.a)({},t.highlight,r>0)),children:[Object(h.jsx)(Q.a,{className:t.title,variant:"h6",id:"tableTitle",children:"\u041f\u043e\u0438\u0441\u043a:"}),Object(h.jsx)(q,{preGlobalFilteredRows:a,globalFilter:c,setGlobalFilter:s})]})},X=r(156),Y=r(145),Z=Object(i.a)({container:{width:"100%",display:"flex",flexDirection:"column",marginTop:"10px"}});var $=function(e){var t=e.open,r=e.branches,a=Z();return Object(h.jsx)(Y.a,{in:t,timeout:"auto",unmountOnExit:!0,children:Object(h.jsx)(X.a,{className:a.container,children:Object(h.jsxs)(g.a,{size:"small",children:[Object(h.jsx)(w.a,{children:Object(h.jsxs)(L.a,{children:[Object(h.jsx)(m.a,{}),Object(h.jsx)(m.a,{}),Object(h.jsx)(m.a,{className:a.cell,children:"\u0424\u0438\u043b\u0438\u0430\u043b"}),Object(h.jsx)(m.a,{children:"\u0410\u0434\u0440\u0435\u0441"}),Object(h.jsx)(m.a,{children:"\u041e\u043a\u0440\u0443\u0433"}),Object(h.jsx)(m.a,{children:"\u0420\u0430\u0439\u043e\u043d"})]})}),Object(h.jsx)(x.a,{children:r&&r.map((function(e){return Object(h.jsxs)(L.a,{children:[Object(h.jsx)(m.a,{component:"th",scope:"row"}),Object(h.jsx)(m.a,{component:"th",scope:"row"}),Object(h.jsx)(m.a,{component:"th",scope:"row",children:e.school}),Object(h.jsx)(m.a,{children:e.adress}),Object(h.jsx)(m.a,{children:e.area}),Object(h.jsx)(m.a,{children:e.district})]},e.id)}))})]})})})},ee=r(75),te=r.n(ee),re=r(74),ae=r.n(re),se=Object(i.a)({collapsedCell:{backgroundColor:"#e9e9e9",padding:"0"}});var ce=function(e){var t=e.row,r=se(),s=Object(a.useState)(!1),c=Object(o.a)(s,2),i=c[0],l=c[1],n=t.original.branches;return Object(a.useEffect)((function(){!n&&l(!1)}),[t]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(L.a,{children:[Object(h.jsx)(m.a,{children:t.original.rate20}),Object(h.jsx)(m.a,{children:t.original.score}),Object(h.jsxs)(m.a,{children:[Object(h.jsx)("a",{href:t.original.url,target:"__blank",children:t.original.school}),n?Object(h.jsx)(P.a,{"aria-label":"expand row",size:"small",onClick:function(){return l(!i)},children:i?Object(h.jsx)(ae.a,{}):Object(h.jsx)(te.a,{})}):null]}),Object(h.jsx)(m.a,{children:t.original.adress}),Object(h.jsx)(m.a,{children:t.original.area}),Object(h.jsx)(m.a,{children:t.original.district}),Object(h.jsx)(m.a,{children:t.original.rate19}),Object(h.jsx)(m.a,{children:t.original.rate18}),Object(h.jsx)(m.a,{children:t.original.rate17})]}),Object(h.jsx)(L.a,{children:Object(h.jsx)(m.a,{className:r.collapsedCell,colSpan:9,children:Object(h.jsx)($,{open:i,branches:n})})})]})},oe=r(38),ie=Object(i.a)({footer:{width:"100%"}}),le=function(e){var t=e.columns,r=e.data,a=ie(),s=Object(oe.useTable)({columns:t,data:r},oe.useGlobalFilter,oe.useSortBy,oe.usePagination,oe.useRowSelect),c=s.getTableProps,o=s.headerGroups,i=s.prepareRow,l=s.page,n=s.gotoPage,d=s.setPageSize,j=s.preGlobalFilteredRows,b=s.setGlobalFilter,u=s.state,p=u.pageIndex,y=u.pageSize,C=u.selectedRowIds,P=u.globalFilter;return Object(h.jsxs)(f.a,{children:[Object(h.jsx)(V,{numSelected:Object.keys(C).length,preGlobalFilteredRows:j,setGlobalFilter:b,globalFilter:P}),Object(h.jsxs)(g.a,Object(O.a)(Object(O.a)({},c()),{},{children:[Object(h.jsx)(w.a,{children:o.map((function(e){return Object(h.jsx)(L.a,Object(O.a)(Object(O.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(h.jsxs)(m.a,Object(O.a)(Object(O.a)({},"selection"===e.id?e.getHeaderProps():e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),"selection"!==e.id?Object(h.jsx)(M.a,{active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"}):null]}))}))}))}))}),Object(h.jsx)(x.a,{children:l.map((function(e){return i(e),Object(h.jsx)(ce,{row:e},e.id)}))}),Object(h.jsx)(v.a,{className:a.footer,children:Object(h.jsx)(L.a,{children:Object(h.jsx)(k.a,{rowsPerPageOptions:[10,25,50,100,{label:"All",value:r.length}],colSpan:9,count:r.length,rowsPerPage:y,page:p,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,t){n(t)},onChangeRowsPerPage:function(e){d(Number(e.target.value))},ActionsComponent:z})})})]}))]})},ne=Object(i.a)({container:{height:"100vh",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}});var de=function(e){var t=ne(),r=Object(a.useState)("mos"),s=Object(o.a)(r,2),c=s[0],i=s[1],d=Object(a.useMemo)((function(){return e.data.columns}),[]),j=Object(a.useMemo)((function(){return e.data.schools}),[]);return Object(h.jsxs)("div",{children:[Object(h.jsx)(l.a,{}),Object(h.jsxs)(n.a,{maxWidth:"xl",className:t.container,children:[Object(h.jsx)(p,{setTableType:i}),"mos"===c?Object(h.jsx)(le,{columns:d,data:j}):"\u0414\u0440\u0443\u0433\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430"]})]})},je=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,161)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),a(e),s(e),c(e),o(e)}))};c.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(de,{data:{schools:[{id:1,rate20:"\u0442\u043e\u043f 20",rate19:"1",rate18:"2",rate17:"1",score:"1040",school:"\u0413\u0411\u041e\u0423 \u0428\u043a\u043e\u043b\u0430 \u2116 1535",adress:"\u0443\u043b. \u0423\u0441\u0430\u0447\u0435\u0432\u0430, \u0434.50",area:"\u0426\u0410\u041e",district:"\u0425\u0430\u043c\u043e\u0432\u043d\u0438\u043a\u0438",url:"https://lyc1535.mskobr.ru/"},{id:2,rate20:"\u0442\u043e\u043f 20",rate19:"2",rate18:"1",rate17:"2",score:"1236",school:"\u041b\u0438\u0446\u0435\u0439 \u041d\u0418\u0423 \u0412\u0428\u042d",adress:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0425\u0430\u0440\u0438\u0442\u043e\u043d\u044c\u0435\u0432\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0443\u043b\u043e\u043a, \u0434. 4",area:"\u0426\u0410\u041e",district:"\u0411\u0430\u0441\u043c\u0430\u043d\u043d\u044b\u0439, \u0422\u0430\u0433\u0430\u043d\u0441\u043a\u0438\u0439, \u0422\u0432\u0435\u0440\u0441\u043a\u043e\u0439 ",url:"https://school.hse.ru/"},{id:3,rate20:"\u0442\u043e\u043f 20",rate19:"11",rate18:"18",rate17:"15",score:"1151",school:"\u0428\u043a\u043e\u043b\u0430 \u043d\u0430 \u042e\u0433\u043e-\u0412\u043e\u0441\u0442\u043e\u043a\u0435 \u0438\u043c\u0435\u043d\u0438 \u041c\u0430\u0440\u0448\u0430\u043b\u0430 \u0412.\u0418. \u0427\u0443\u0439\u043a\u043e\u0432\u0430",adress:"\u0443\u043b. \u0417\u0435\u043b\u0435\u043d\u043e\u0434\u043e\u043b\u044c\u0441\u043a\u0430\u044f, \u0434. 32, \u043a\u043e\u0440\u043f. 6 ",area:"\u042e\u0412\u0410\u041e",district:"\u041a\u0443\u0437\u044c\u043c\u0438\u043d\u043a\u0438, \u041b\u0435\u0444\u043e\u0440\u0442\u043e\u0432\u043e, \u041b\u044e\u0431\u043b\u0438\u043d\u043e",url:"https://schuv.mskobr.ru/",branches:[{id:1,school:"\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0425\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u041b\u0438\u0446\u0435\u0439 \u2116 1303 (\u041b\u0413\u041a \u043d\u0430 \u042e\u0433\u043e-\u0412\u043e\u0441\u0442\u043e\u043a\u0435, \u0437\u0434\u0430\u043d\u0438\u0435 \u2116 13)",adress:"\u0422\u0430\u043c\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u0437\u0434, \u0434\u043e\u043c 4",area:"\u042e\u0412\u0410\u041e",district:"\u041b\u0435\u0444\u043e\u0440\u0442\u043e\u0432\u043e"}]},{id:4,rate20:"\u0442\u043e\u043f 20",rate19:"21",rate18:"35",rate17:"28",score:"1100  ",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1363",adress:"\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442, \u0434. 82, \u043a. 4 ",area:"\u042e\u0412\u0410\u041e",district:"\u0412\u044b\u0445\u0438\u043d\u043e-\u0416\u0443\u043b\u0435\u0431\u0438\u043d\u043e",url:"https://sch1363uv.mskobr.ru/"},{id:5,rate20:"\u0442\u043e\u043f 20",rate19:"5",rate18:"4",rate17:"17",score:"1091",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1514",adress:"\u0443\u043b\u0438\u0446\u0430 \u041a\u0440\u0443\u043f\u0441\u043a\u043e\u0439, \u0434. 12",area:"\u042e\u0417\u0410\u041e",district:"\u041b\u043e\u043c\u043e\u043d\u043e\u0441\u043e\u0432\u0441\u043a\u0438\u0439, \u041e\u0431\u0440\u0443\u0447\u0435\u0432\u0441\u043a\u0438\u0439",url:"https://gym1514uz.mskobr.ru/",branches:[{id:1,school:"\u0413\u0411\u041e\u0423 \u0428\u043a\u043e\u043b\u0430 \u2116 9 (\u0421\u041f \u0421\u041e\u0428 \u21161514)",adress:"\u0443\u043b. \u041d\u043e\u0432\u0430\u0442\u043e\u0440\u043e\u0432, \u0434.34, \u043a\u043e\u0440\u043f.1-2",area:"\u042e\u0417\u0410\u041e",district:"\u041e\u0431\u0440\u0443\u0447\u0435\u0432\u0441\u043a\u0438\u0439"}]},{id:6,rate20:"\u0442\u043e\u043f 20",rate19:"62",rate18:"63",rate17:"107",score:"1056",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 2070 \xab\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440\u0441\u043a\u0430\u044f\xbb",adress:"\u043f\u043e\u0441\u0451\u043b\u043e\u043a \u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440\u043a\u0430, \u0424\u0438\u0442\u0430\u0440\u0451\u0432\u0441\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430, \u0434\u043e\u043c 9\u0410",area:"\u041d\u0410\u041e",district:"\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0441\u043a\u043e\u0435, \u041c\u043e\u0441\u0440\u0435\u043d\u0442\u0433\u0435\u043d, \u0421\u043e\u0441\u0435\u043d\u0441\u043a\u043e\u0435",url:"https://sch2070.mskobr.ru/"},{id:7,rate20:"\u0442\u043e\u043f 20",rate19:"10",rate18:"14",rate17:"10",score:"1001",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1502 \u043f\u0440\u0438 \u041c\u042d\u0418",adress:"\u0443\u043b. \u041c\u043e\u043b\u043e\u0441\u0442\u043e\u0432\u044b\u0445, \u0434. 10\u0430",area:"\u0412\u0410\u041e",district:"\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u043e\u0435, \u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0441\u043a\u043e\u0435",url:"https://1502.mskobr.ru/"},{id:8,rate20:"\u0442\u043e\u043f 20",rate19:"9",rate18:"10",rate17:"11",score:"975",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1329",adress:"\u0443\u043b. \u041d\u0438\u043a\u0443\u043b\u0438\u043d\u0441\u043a\u0430\u044f, \u0434\u043e\u043c 10",area:"\u0417\u0410\u041e",district:"\u0422\u0440\u043e\u043f\u0430\u0440\u0451\u0432\u043e-\u041d\u0438\u043a\u0443\u043b\u0438\u043d\u043e",url:"https://sch1329.mskobr.ru/"},{id:9,rate20:"\u0442\u043e\u043f 20",rate19:"16",rate18:"23",rate17:"48",score:"967",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1547",adress:"\u0443\u043b. \u0411\u0435\u043b\u043e\u0440\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f, \u0434. 47, \u043a\u043e\u0440\u043f\u0443\u0441 1",area:"\u042e\u0412\u0410\u041e",district:"\u041c\u0430\u0440\u044c\u0438\u043d\u043e",url:"https://licuv1547.mskobr.ru/"},{id:10,rate20:"\u0442\u043e\u043f 20",rate19:"16",rate18:"23",rate17:"48",score:"964",school:"\u0411\u0430\u0443\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u0438\u043d\u0436\u0435\u043d\u0435\u0440\u043d\u0430\u044f \u0448\u043a\u043e\u043b\u0430 \u2116 1580",adress:"\u0411\u0430\u043b\u0430\u043a\u043b\u0430\u0432\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442, \u0434. 6\u0430",area:"\u042e\u0417\u0410\u041e",district:"\u0414\u043e\u043d\u0441\u043a\u043e\u0439, \u041d\u0430\u0433\u043e\u0440\u043d\u044b\u0439",url:"https://lycu1580.mskobr.ru/"},{id:11,rate20:"\u0442\u043e\u043f 20",rate19:"27",rate18:"38",rate17:"33",score:"951",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1357 \u041d\u0430 \u0411\u0440\u0430\u0442\u0438\u0441\u043b\u0430\u0432\u0441\u043a\u043e\u0439",adress:"\u041f\u0435\u0440\u0435\u0440\u0432\u0438\u043d\u0441\u043a\u0438\u0439 \u0431\u0443\u043b\u044c\u0432\u0430\u0440, \u0434\u043e\u043c 10, \u043a\u043e\u0440\u043f\u0443\u0441 1",area:"\u042e\u0412\u0410\u041e",district:"\u041c\u0430\u0440\u044c\u0438\u043d\u043e",url:"https://sch1357uv.mskobr.ru/",branches:[{id:1,school:"\u0428\u043a\u043e\u043b\u0430 \u2116 2012 \u041c\u0438\u0440\u043e\u0442\u0432\u043e\u0440\u0435\u0446 (\u0421\u041f \u0421\u041e\u0428 1357)",adress:"\u0443\u043b. \u0412\u0435\u0440\u0445\u043d\u0438\u0435 \u043f\u043e\u043b\u044f, \u0434. 47, \u043a. 1",area:"\u042e\u0412\u0410\u041e",district:"\u041b\u044e\u0431\u043b\u0438\u043d\u043e"}]},{id:12,rate20:"\u0442\u043e\u043f 20",rate19:"4",rate18:"8",rate17:"4",score:"947",school:"\u041f\u044f\u0442\u044c\u0434\u0435\u0441\u044f\u0442 \u0441\u0435\u0434\u044c\u043c\u0430\u044f \u0448\u043a\u043e\u043b\u0430",adress:"\u041c\u0430\u043b\u044b\u0439 \u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0443\u043b\u043e\u043a, 7/10 \u0441\u0442\u0440. 5",area:"\u0426\u0410\u041e",district:"\u0425\u0430\u043c\u043e\u0432\u043d\u0438\u043a\u0438",url:"https://57.mskobr.ru/"},{id:13,rate20:"\u0442\u043e\u043f 20",rate19:"3",rate18:"7",rate17:"3",score:"945",school:"\u0413\u0411\u041e\u0423 \u041b\u0438\u0446\u0435\u0439 \xab\u0412\u0442\u043e\u0440\u0430\u044f \u0448\u043a\u043e\u043b\u0430\xbb",adress:"\u0443\u043b. \u0424\u043e\u0442\u0438\u0435\u0432\u043e\u0439, \u0434.18",area:"\u042e\u0417\u0410\u041e",district:"\u0413\u0430\u0433\u0430\u0440\u0438\u043d\u0441\u043a\u0438\u0439",url:"https://lycuz2.mskobr.ru/"},{id:14,rate20:"\u0442\u043e\u043f 20",rate19:"7",rate18:"9",rate17:"20",score:"900",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1568 \u0438\u043c\u0435\u043d\u0438 \u041f\u0430\u0431\u043b\u043e \u041d\u0435\u0440\u0443\u0434\u044b",adress:"\u043f\u0440\u043e\u0435\u0437\u0434 \u0428\u043e\u043a\u0430\u043b\u044c\u0441\u043a\u043e\u0433\u043e, \u0434. 7, \u043a\u043e\u0440\u043f\u0443\u0441 2",area:"\u0421\u0412\u0410\u041e",district:"\u041c\u0435\u0434\u0432\u0435\u0434\u043a\u043e\u0432\u043e \u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435",url:"https://lyc1568.mskobr.ru/"},{id:15,rate20:"\u0442\u043e\u043f 20",rate19:"12",rate18:"11",rate17:"9",score:"891",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1501",adress:"\u0422\u0438\u0445\u0432\u0438\u043d\u0441\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u0443\u043b\u043e\u043a, \u0434\u043e\u043c 3",area:"\u0426\u0410\u041e",district:"\u0422\u0432\u0435\u0440\u0441\u043a\u043e\u0439",url:"https://lycc1501.mskobr.ru/",branches:[{id:1,school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1277 \u0441 \u0443\u0433\u043b\u0443\u0431\u043b\u0435\u043d\u043d\u044b\u043c \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435\u043c \u043d\u0435\u043c\u0435\u0446\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 (\u0421\u041f \u0448\u043a\u043e\u043b\u044b \u21161501)",adress:"\u0421\u0443\u0449\u0435\u0432\u0441\u043a\u0430\u044f \u0443\u043b., \u0434. 32",area:"\u0426\u0410\u041e",district:"\u0422\u0432\u0435\u0440\u0441\u043a\u043e\u0439"},{id:2,school:"\u0413\u0411\u041e\u0423 \u0421\u041e\u0428 \u2116 1275 (\u0441\u043f \u0448\u043a\u043e\u043b\u044b 1501)",adress:"\u0443\u043b\u0438\u0446\u0430 \u0414\u043e\u0441\u0442\u043e\u0435\u0432\u0441\u043a\u043e\u0433\u043e, \u0434\u043e\u043c 25, \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 1",area:"\u0426\u0410\u041e",district:"\u0422\u0432\u0435\u0440\u0441\u043a\u043e\u0439"},{id:3,school:"\u0428\u043a\u043e\u043b\u0430-\u0438\u043d\u0442\u0435\u0440\u043d\u0430\u0442 II \u0432\u0438\u0434\u0430 \u2116 22 \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439 \u0441 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f\u043c\u0438 \u0441\u043b\u0443\u0445\u0430 (\u0421\u041f \u0448\u043a\u043e\u043b\u044b \u21161501)",adress:"\u0443\u043b. \u041c\u0430\u043b\u0430\u044f \u0414\u043c\u0438\u0442\u0440\u043e\u0432\u043a\u0430, \u0434\u043e\u043c 14\u0410, \u0441. 5",area:"\u0426\u0410\u041e",district:"\u0422\u0432\u0435\u0440\u0441\u043a\u043e\u0439"}]},{id:16,rate20:"\u0442\u043e\u043f 20",rate19:"35",rate18:"36",rate17:"32",score:"853",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1474",adress:"\u041a\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430, \u0434\u043e\u043c 22",area:"\u0421\u0410\u041e",district:"\u0425\u043e\u0432\u0440\u0438\u043d\u043e",url:"https://sch1474s.mskobr.ru/"},{id:17,rate20:"\u0442\u043e\u043f 20",rate19:"15",rate18:"13",rate17:"13",score:"-",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 548 \u0426\u0430\u0440\u0438\u0446\u044b\u043d\u043e",adress:"\u0443\u043b. \u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u0441\u043a\u0430\u044f \u0434. 35 \u043a\u043e\u0440\u043f. 2",area:"\u042e\u0410\u041e",district:"\u041e\u0440\u0435\u0445\u043e\u0432\u043e-\u0411\u043e\u0440\u0438\u0441\u043e\u0432\u043e \u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435, \u041e\u0440\u0435\u0445\u043e\u0432\u043e-\u0411\u043e\u0440\u0438\u0441\u043e\u0432\u043e \u042e\u0436\u043d\u043e\u0435",url:"http://www.mhs548.ru/",branches:[{id:1,school:"\u0425\u0443\u0434\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u0448\u043a\u043e\u043b\u0430 \u2116548 \xab\u0426\u0430\u0440\u0438\u0446\u044b\u043d\u043e\xbb",adress:"\u0443\u043b. \u041c\u0430\u0440\u0448\u0430\u043b\u0430 \u0417\u0430\u0445\u0430\u0440\u043e\u0432\u0430, \u0434.8, \u043a.1",area:"\u042e\u0412\u0410\u041e",district:"\u041e\u0440\u0435\u0445\u043e\u0432\u043e-\u0411\u043e\u0440\u0438\u0441\u043e\u0432\u043e \u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435"}]},{id:18,rate20:"\u0442\u043e\u043f 20",rate19:"23",rate18:"53",rate17:"77",score:"-",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1980",adress:"\u0427\u0435\u0447\u0451\u0440\u0441\u043a\u0438\u0439 \u043f\u0440., \u0434. 56",area:"\u042e\u0417\u0410\u041e",district:"\u0411\u0443\u0442\u043e\u0432\u043e \u042e\u0436\u043d\u043e\u0435",url:"https://sch1980uz.mskobr.ru/"},{id:19,rate20:"\u0442\u043e\u043f 20",rate19:"30",rate18:"37",rate17:"37",score:"-",school:"\u0428\u043a\u043e\u043b\u0430 \u2116 1571",adress:"\u0443\u043b\u0438\u0446\u0430 \u0424\u043e\u043c\u0438\u0447\u0451\u0432\u043e\u0439, \u0434\u043e\u043c 1, \u043a\u043e\u0440\u043f\u0443\u0441 1",area:"\u0421\u0417\u0410\u041e",district:"\u0422\u0443\u0448\u0438\u043d\u043e \u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435",url:"https://lyc1571sz.mskobr.ru/"}],columns:[{Header:"2020",accessor:"rate20"},{Header:"\u0411\u0430\u043b\u043b",accessor:"score"},{Header:"\u0428\u043a\u043e\u043b\u0430",accessor:"school"},{Header:"\u0410\u0434\u0440\u0435\u0441",accessor:"adress"},{Header:"\u041e\u043a\u0440\u0443\u0433",accessor:"area"},{Header:"\u0420\u0430\u0439\u043e\u043d",accessor:"district"},{Header:"2019",accessor:"rate19"},{Header:"2018",accessor:"rate18"},{Header:"2017",accessor:"rate17"}]}})}),document.getElementById("root")),je()},90:function(e,t,r){}},[[101,1,2]]]);
//# sourceMappingURL=main.44dbcf49.chunk.js.map