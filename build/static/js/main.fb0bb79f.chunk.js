(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{119:function(e,t,a){e.exports=a(148)},124:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(12),r=a.n(o),l=(a(124),a(11)),i=a(180),d=a(184),u=Object(l.a)(i.a)({backgroundColor:"#00134d !important",color:"white !important",fontFamily:"Aharoni !important",fontWeight:"bold !important",width:"100% !important",padding:"30px !important",display:"flex !important",justifyContent:"center !important",fontSize:"30px !important"}),s=function(e){return c.a.createElement(d.a,{container:!0,spacing:1},c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(u,{elevation:10},"Todo List")))},m=a(21),p=a(196),f=a(98),b=a.n(f),h=a(8),E=a(193),k=a(190),j=a(149),O=a(194),g=a(97),x=a.n(g),v=a(201),C=a(192),T=a(96),y=a.n(T),w=a(101),S=a(15),D=a(197),A=function(e){return c.a.createElement(S.a,{utils:w.a},c.a.createElement(D.a,{clearable:e.clearable,placeholder:e.placeholder,disabled:!e.input,disablePast:!0,value:e.selectedDate,onChange:e.handleDateChange,invalidDateMessage:"",invalidLabel:"",maxDateMessage:"",minDateMessage:""}))},N=a(185),I=function(e){return c.a.createElement(N.a,{variant:"contained",color:"primary",type:"submit",onClick:function(t){return e.clicked(t)},disabled:e.disabled},e.text)},L=a(187),P=function(e){return c.a.createElement(L.a,{autoFocus:!0,placeholder:e.placeholder,value:e.input,onChange:function(t){return e.setInput(t.target.value)}})},_=a(95),M=a.n(_);console.log(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}));var U,B,R=M.a.create({baseURL:"https://localhost:3001/"}),W=a(47),Y=c.a.createContext({parentTasks:[],setTask:function(){},addTask:function(e){},deleteTask:function(e){},editTask:function(e,t){},ParentTaskId:"",updateCompleted:function(e){},getParentTaskId:function(e){},uncheckTask:function(e){}}),F=function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),o=a[0],r=a[1],l=Object(n.useState)([]),i=Object(h.a)(l,2),d=i[0],u=i[1],s=function(){R.get("/task").then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))};return c.a.createElement(Y.Provider,{value:{parentTasks:o,setTask:s,addTask:function(e){R.post("/task",{taskName:e}).then((function(e){s((function(t){return[].concat(Object(W.a)(t),[e.data])}))})).catch((function(e){return console.log(e)}))},deleteTask:function(e){R.delete("/task/".concat(e)).then((function(e){s()})).catch((function(e){console.log(e)}))},editTask:function(e,t){R.patch("/task/".concat(e),{taskName:t}).then((function(e){s()})).catch((function(e){console.log(e)}))},ParentTaskId:d,getParentTaskId:function(e){u(e)},updateCompleted:function(e){R.patch("/task/completed/".concat(e)).then((function(e){s()})).catch((function(e){alert(e.message)}))},uncheckTask:function(e){R.patch("/task/uncheck/".concat(e)).then((function(e){s()})).catch((function(e){alert(e.message)}))}}},e.children)},z=function(e){return Object.assign([],e).sort((function(e,t){return e.createdAt<t.createdAt?1:-1}))},H=c.a.createContext({todoLists:[],getTodos:function(e){},addTodos:function(e,t,a){},editTodo:function(e,t,a){},deleteTodo:function(e){},updateCompleted:function(e,t){},getSort:function(e){},getSortedTodos:function(e){},sortOrder:""}),K=function(e){var t=Object(n.useState)([]),a=Object(h.a)(t,2),o=a[0],r=a[1],l=Object(n.useContext)(Y).setTask,i=Object(n.useState)(""),d=Object(h.a)(i,2),u=d[0],s=d[1],m=function(e){R.get("/todos/".concat(e)).then((function(e){var t=Object.assign([],p(e.data));r(t),s("Recent Added")})).catch((function(e){return console.log(e)}))},p=function(e,t){switch(t&&s(t),t){case"Recent Added":return z(e);case"Task Completed":return function(e){var t=Object.assign([],e),a=t.filter((function(e){return!0===e.completed})),n=t.filter((function(e){return!1===e.completed})),c=z(a),o=z(n);return[].concat(Object(W.a)(c),Object(W.a)(o))}(e);case"Pending task":return function(e){var t=Object.assign([],e),a=t.filter((function(e){return!1===e.completed})),n=t.filter((function(e){return!0===e.completed})),c=z(a),o=z(n);return[].concat(Object(W.a)(c),Object(W.a)(o))}(e);case"Upcoming Deadline":return function(e){var t=Object.assign([],e);return t.forEach((function(e){e.deadline=new Date(e.deadline).getTime()})),t.sort((function(e,t){return new Date(e.deadline).getTime()>new Date(t.deadline).getTime()?1:-1}))}(e);default:return z(e)}};return c.a.createElement(H.Provider,{value:{getTodos:m,todoLists:o,addTodos:function(e,t,a){R.post("/todos/".concat(e),{todo:t,deadline:a}).then((function(e){m(e.data.parentTask),l()})).catch((function(e){return console.log(e)}))},editTodo:function(e,t,a){R.patch("/todos/".concat(e),{todo:t,deadline:a}).then((function(e){m(e.data.parentTask),l()})).catch((function(e){console.log(e)}))},deleteTodo:function(e){R.delete("/todos/".concat(e)).then((function(e){m(e.data.parentTask),l()})).catch((function(e){console.log(e)}))},updateCompleted:function(e,t){R.patch("/todos/completed/".concat(e),{completed:t}).then((function(e){m(e.data.parentTask),l()})).catch((function(e){alert(e.message)}))},getSort:function(e){var t=Object.assign([],p(o,e));r(t)},sortOrder:u}},e.children)},J=function(e){var t=Object(n.useContext)(H).editTodo,a=Object(n.useState)(e.data),o=Object(h.a)(a,2),r=o[0],l=o[1],i=Object(n.useState)(e.deadline),u=Object(h.a)(i,2),s=u[0],m=u[1];return c.a.createElement("form",null,c.a.createElement(d.a,{container:!0,spacing:3},c.a.createElement(d.a,{item:!0,xs:12,sm:4},c.a.createElement(P,{setInput:l,input:r})),c.a.createElement(d.a,{item:!0,xs:12,sm:4},c.a.createElement(A,{input:r,placeholder:e.deadline,selectedDate:s,handleDateChange:m})),c.a.createElement(d.a,{item:!0,xs:12,sm:4},c.a.createElement(I,{clicked:function(a){a.preventDefault(),t(e.id,r,s),e.setDialog(!1)},disabled:!r,text:"Update"}))))},q=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),o=a[0],r=a[1];return c.a.createElement("div",null,c.a.createElement(v.a,{open:o,onClose:function(e){return r(!1)}},c.a.createElement(C.a,{dividers:!0},c.a.createElement(J,{id:e.id,data:e.data,deadline:e.deadline,setDialog:function(){return r(!1)}}))),c.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){return r(!0)}}))},V=a(61),$=a.n(V),G=Object(l.a)(E.a)({color:"red !important",textDecoration:"line-through !important"}),Q=function(e){var t,a=Object(n.useState)(e.completed),o=Object(h.a)(a,2),r=o[0],l=o[1],i=Object(n.useContext)(H).deleteTodo,d=Object(n.useContext)(H).updateCompleted,u=function(){l(!r),d(e.id,!r)},s=$()(e.deadline)<$()(),m=(t=e.deadline,$()(t).format("dddd, MMMM Do, h:mm:ss a")),p="Deadline\u23f2 : ".concat(m),f=[p,c.a.createElement("span",{role:"img",key:m,style:{color:"red"}},"  \u2757\u2757\u2757 Missed Deadline\u23f2")];return c.a.createElement("div",null,c.a.createElement(k.a,null,c.a.createElement(j.a,{button:!0},r?c.a.createElement(G,{onClick:u,primary:e.data,secondary:"Deadline\u23f2 : "+m}):c.a.createElement(E.a,{style:{color:"blue"},onClick:u,primary:e.data,secondary:s?f:p}),r?null:c.a.createElement(q,{data:e.data,deadline:e.deadline,id:e.id}),c.a.createElement(x.a,{variant:"contained",color:"secondary",onClick:function(){i(e.id)}})),c.a.createElement(O.a,null)))},X=function(e){var t=Object.assign([],Object(n.useContext)(H).todoLists),a=Object(n.useContext)(H).getTodos,o=Object(n.useContext)(Y).ParentTaskId;return Object(n.useEffect)((function(){a(o)}),[]),t.map((function(t){return c.a.createElement(Q,{data:t.todo,key:t._id,id:t._id,parentTaskId:e.parentTaskId,deadline:t.deadline,completed:t.completed,pending:t.pending})}))},Z=Object(l.a)(d.a)({backgroundColor:"#c0c8ff4f",width:"50%",marginTop:"5%",margin:"auto"}),ee=function(e){var t=Object(n.useContext)(Y).ParentTaskId,a=Object(n.useContext)(H).addTodos,o=Object(n.useState)(""),r=Object(h.a)(o,2),l=r[0],i=r[1],u=Object(n.useState)(null),s=Object(h.a)(u,2),m=s[0],p=s[1];return c.a.createElement("form",null,c.a.createElement(Z,{container:!0,spacing:3,justify:"center"},c.a.createElement(d.a,{item:!0,xs:12,sm:2},c.a.createElement(P,{placeholder:"Add New Todo",setInput:i,input:l})),c.a.createElement(d.a,{item:!0,xs:12,sm:2},c.a.createElement(A,{clearable:!0,input:l,placeholder:"Set the Deadline",selectedDate:m,handleDateChange:p})),c.a.createElement(d.a,{item:!0,xs:12,sm:2},c.a.createElement(I,{clicked:function(e){e.preventDefault(),a(t,l,m),i(""),p(null)},disabled:!l||!m,text:"Add"}))))},te="375px",ae="425px",ne="768px",ce="1024px",oe="1440px",re="2560px",le={mobileS:"@media (min-width: ".concat("320px",")"),mobileM:"@media (min-width: ".concat(te,")"),mobileL:"@media (min-width: ".concat(ae,")"),tablet:"@media (min-width: ".concat(ne,")"),laptop:"@media (min-width: ".concat(ce,")"),laptopL:"@media (min-width: ".concat(oe,")"),desktop:"@media (min-width: ".concat(re,")"),desktopL:"@media (min-width: ".concat(re,")")},ie=a(189),de=a(203),ue=a(199),se=a(195),me=function(e){var t=Object(n.useState)("Recent Added"),a=Object(h.a)(t,2),o=a[0],r=a[1],l=Object(n.useContext)(H).getSort,i=Object(n.useContext)(H).sortOrder;return c.a.createElement(ie.a,{fullWidth:!0},c.a.createElement(de.a,null,"Sort"),c.a.createElement(ue.a,{value:i!==o?i:o,onChange:function(e){r(e.target.value),l(e.target.value)},input:c.a.createElement(L.a,null)},["Recent Added","Upcoming Deadline","Task Completed","Pending task"].map((function(e){return c.a.createElement(se.a,{key:e,value:e},e)}))))},pe=a(43),fe={todospage:Object(m.a)({},le.mobileS,{height:"90%",overflowY:"auto"}),cardStyle:Object(m.a)({width:"96%",margin:"auto",padding:"10px",marginTop:"10px",height:"370px",textAlign:"center",justifyContent:"center",overflow:"scroll"},le.mobileL,{width:"85%"}),paperStyle:Object(m.a)({margin:"auto",padding:"20px 5px 10px 20px",textAlign:"center",marginTop:"5px",justifyContent:"center"},le.mobileL,{width:"85%"}),styledLink:{color:"white"}},be=Object(l.a)("div")(fe.todospage),he=Object(l.a)(i.a)(fe.cardStyle),Ee=Object(l.a)(i.a)(fe.paperStyle),ke=Object(l.a)(pe.c)(fe.styledLink),je=function(e){return c.a.createElement(be,null,c.a.createElement(Ee,{elevation:5},c.a.createElement(d.a,{container:!0,spacing:3},c.a.createElement(d.a,{item:!0,xs:12,sm:8},c.a.createElement(ee,null)),c.a.createElement(d.a,{item:!0,xs:12,sm:2},c.a.createElement(me,null)),c.a.createElement(d.a,{item:!0,xs:12,sm:2},c.a.createElement(p.a,{color:"primary",size:"small"},c.a.createElement(ke,{to:"/"},c.a.createElement(b.a,null)))))),c.a.createElement(he,{elevation:5},c.a.createElement(d.a,{item:!0,xs:12},c.a.createElement(X,null))))},Oe=a(14),ge=a(99),xe=a.n(ge),ve=a(186),Ce=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),o=a[0],r=a[1],l=Object(n.useContext)(Y).addTask;return c.a.createElement("div",null,c.a.createElement(P,{placeholder:"Create New Task Folder",setInput:r,input:o}),c.a.createElement(I,{clicked:function(t){t.preventDefault(),l(o),e.setDialog(!1)},disabled:!o,text:"Create"}))},Te=function(e){var t=Object(n.useState)(!0),a=Object(h.a)(t,2),o=a[0],r=a[1];return c.a.createElement("div",null,c.a.createElement(v.a,{open:o,onClose:function(t){r(!1),e.close(!1)}},c.a.createElement(C.a,{dividers:!0},c.a.createElement(Ce,{setDialog:function(e){return r(!1)}}))))},ye={fabButton:{zIndex:"1 !important",top:"-10 !important",margin:"auto !important"},appBar:(U={width:"92% !important",backgroundColor:"#0d256fba",margin:"auto !important"},Object(m.a)(U,le.mobileS,{width:"99% !important"}),Object(m.a)(U,le.tablet,{width:"95% !important"}),Object(m.a)(U,le.laptop,{width:"93% !important"}),Object(m.a)(U,le.laptopL,{width:"92% !important"}),Object(m.a)(U,le.desktop,{width:"91% !important"}),U)},we=Object(l.a)(p.a)(ye.fabButton),Se=Object(l.a)("div")(ye.appBar),De=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),o=a[0],r=a[1];return c.a.createElement(Se,{color:"primary"},c.a.createElement(ve.a,null,o?c.a.createElement(Te,{close:function(){return r(!1)}}):null,c.a.createElement(we,{color:"secondary"},c.a.createElement(xe.a,{onClick:function(){r(!0)}}))))},Ae=a(191),Ne=a(102),Ie=a(100),Le=a.n(Ie),Pe=function(e){var t=Object(n.useState)(!0),a=Object(h.a)(t,2),o=a[0],r=a[1],l=Object(n.useState)(e.taskName),i=Object(h.a)(l,2),d=i[0],u=i[1],s=Object(n.useContext)(Y).editTask;return c.a.createElement("div",null,c.a.createElement(v.a,{open:o,onClose:function(t){r(!1),e.close(!1)}},c.a.createElement(C.a,{dividers:!0},c.a.createElement(P,{placeholder:"Update Task",setInput:u,input:d}),c.a.createElement(I,{clicked:function(t){t.preventDefault(),s(e.id,d),r(!1)},disabled:!d,text:"Update"}))))},_e=function(e){var t=Object(n.useState)(!0),a=Object(h.a)(t,2),o=a[0],r=a[1];return c.a.createElement("div",null,c.a.createElement(v.a,{open:o,onClose:function(t){r(!1),e.close(!1)}},e.children))},Me={display:"flex",flexDirection:"column",padding:"10px"},Ue={display:"flex",justifyContent:"space-around"},Be=Object(l.a)("div")(Me),Re=Object(l.a)("div")(Ue),We=function(e){var t=Object(n.useContext)(Y).updateCompleted;return c.a.createElement("div",null,c.a.createElement(_e,{close:e.close},c.a.createElement(Be,null,c.a.createElement("h4",null,"Are You sure you want to set the Task as Completed?"),c.a.createElement(Re,null,c.a.createElement(I,{clicked:function(a){a.preventDefault(),t(e.id),e.close(!1)},text:"Yes"}),c.a.createElement(I,{clicked:function(){e.close(!1)},text:"No"})))))},Ye={display:"flex",flexDirection:"column",padding:"10px"},Fe={display:"flex",justifyContent:"space-around"},ze=Object(l.a)("div")(Ye),He=Object(l.a)("div")(Fe),Ke=function(e){var t=Object(n.useContext)(Y).uncheckTask;return c.a.createElement("div",null,c.a.createElement(_e,{close:e.close},c.a.createElement(ze,null,c.a.createElement("h4",null,"All the todos will be unchecked. Are You sure you want to uncheck the task ?"),c.a.createElement(He,null,c.a.createElement(I,{clicked:function(a){a.preventDefault(),t(e.id),e.close(!1)},text:"Yes"}),c.a.createElement(I,{clicked:function(){e.close(!1)},text:"No"})))))},Je=function(e){var t=e.id,a=e.taskName,n=e.completed,o=c.a.useContext(Y).deleteTask,r=c.a.useState(null),l=Object(h.a)(r,2),i=l[0],d=l[1],u=c.a.useState(!1),s=Object(h.a)(u,2),m=s[0],p=s[1],f=c.a.useState(!1),b=Object(h.a)(f,2),E=b[0],k=b[1],j=c.a.useState(!1),O=Object(h.a)(j,2),g=O[0],x=O[1],v=Boolean(i),C=["Edit Task","Delete",n?"Mark as Uncheck":"Mark as Completed"],T=function(e){switch(e.target.textContent){case"Delete":o(t);break;case"Edit Task":p(!0);break;case"Mark as Completed":k(!0);break;case"Mark as Uncheck":x(!0);break;default:console.log("Not in the list")}d(null)};return c.a.createElement("div",null,c.a.createElement(Ae.a,{onClick:function(e){d(e.currentTarget)}},c.a.createElement(Le.a,null)),c.a.createElement(Ne.a,{anchorEl:i,keepMounted:!0,open:v,onClose:T,PaperProps:{style:{maxHeight:192,width:"20ch"}}},m?c.a.createElement(Pe,{id:t,taskName:a,close:function(){return p(!1)}}):null,E?c.a.createElement(We,{id:t,taskName:a,close:function(){return k(!1)}}):null,g?c.a.createElement(Ke,{id:t,taskName:a,close:function(){return x(!1)}}):null,C.map((function(e){return c.a.createElement(se.a,{key:e,selected:"Edit Task"===e,dense:!1,onClick:T},e)}))))},qe={textDecoration:"none",color:"black",width:"100%",height:"100%",objectFit:"contain"},Ve={color:"#796969 !important",textDecoration:"line-through !important"},$e=Object(l.a)(pe.b)(qe),Ge=Object(l.a)(E.a)(Ve),Qe=function(e){var t=e._id,a=e.taskName,o=e.updatedAt,r=e.completed,l=Object(n.useContext)(Y).getParentTaskId,i=function(e){l(e)};return c.a.createElement(j.a,{button:!0},c.a.createElement($e,{to:"/dashboard"},r?c.a.createElement(Ge,{primary:a,secondary:o,onClick:function(){return i(t)}}):c.a.createElement(E.a,{primary:a,secondary:o,onClick:function(){return i(t)}})),c.a.createElement(Je,{id:t,taskName:a,completed:r}))},Xe=function(e){var t=Object(n.useContext)(Y).parentTasks,a=Object(n.useContext)(Y).setTask,o=Object(n.useState)(!1),r=Object(h.a)(o,2),l=r[0],i=r[1];return Object(n.useEffect)((function(){a(),i(!0)}),[l]),c.a.createElement("div",null,l&&t.map((function(e){var t=e._id,a=e.taskName,n=e.updatedAt,o=e.completed;return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement(Qe,{_id:t,taskName:a,updatedAt:n,completed:o}))})))},Ze={home:{display:"flex",flexDirection:"column",justifyContent:"center"},paper:(B={paddingBottom:"100px",padding:"20px 20px 20px 20px",width:"89%",margin:"auto",height:"400px",overflowY:"scroll"},Object(m.a)(B,le.mobileS,{height:"300px"}),Object(m.a)(B,le.laptop,{height:"400px"}),Object(m.a)(B,le.laptopL,{height:"500px"}),Object(m.a)(B,le.desktop,{height:"1200px"}),B)},et=Object(l.a)(i.a)(Ze.paper),tt=Object(l.a)("div")(Ze.home),at=function(){return c.a.createElement(tt,null,c.a.createElement(et,{square:!0},c.a.createElement(k.a,null,c.a.createElement(Xe,null))),c.a.createElement(De,null))},nt=Object(l.a)("div")({backgroundColor:"#d4ccff",width:"100%",margin:"0",padding:"0",height:"100%",position:"fixed",justifyContent:"center"}),ct=c.a.createElement(Oe.d,null,c.a.createElement(Oe.b,{path:"/home",component:at}),c.a.createElement(Oe.b,{path:"/dashboard",component:je}),c.a.createElement(Oe.b,{path:"/",exact:!0,component:at}),c.a.createElement(Oe.a,{to:"/"}));var ot=function(){return c.a.createElement(nt,null,c.a.createElement(s,null),ct)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var rt=c.a.createElement(F,null,c.a.createElement(K,null,c.a.createElement(pe.a,null,c.a.createElement(ot,null))));r.a.render(rt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.fb0bb79f.chunk.js.map