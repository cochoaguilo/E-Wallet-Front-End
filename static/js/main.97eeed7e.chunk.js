(this.webpackJsonpalkemy=this.webpackJsonpalkemy||[]).push([[0],{25:function(e,t,a){},27:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),o=a(36),s=a.n(o),r=a(10),i=a(3),l=a(8),d=a(12),j=(a(25),Object(n.createContext)()),m=Object(n.createContext)(),u=a(0),b=function(e){var t=Object(n.useContext)(j),a=t.alerta,c=t.mostrarAlerta,o=Object(n.useContext)(m),s=o.mensaje,b=o.autenticado,h=o.iniciarSesion;Object(n.useEffect)((function(){b&&e.history.push("/E-Wallet-Front-End/home"),s&&c(s.msg,s.categoria)}),[s,b,e.history]);var p=Object(n.useState)({email:"",password:""}),O=Object(l.a)(p,2),x=O[0],g=O[1],f=x.email,v=x.password,y=function(e){g(Object(i.a)(Object(i.a)({},x),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==f.trim()&&""!==v.trim()?h({email:f,password:v}):c("Todos los campos son obligatorios","alerta-error")},children:[a?Object(u.jsxs)("div",{className:" ".concat(a.categoria),children:[" ",a.msg," "]}):null,Object(u.jsx)("h1",{children:"Iniciar Sesi\xf3n"}),Object(u.jsxs)("div",{className:"form-floating mb-3",children:[Object(u.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu email",className:"form-control",value:f,onChange:y}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(u.jsxs)("div",{className:"form-floating mb-3",children:[Object(u.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu password",className:"form-control",value:v,onChange:y}),Object(u.jsx)("label",{htmlFor:"password",children:"Password"})]}),Object(u.jsxs)("div",{className:"camp-form",children:[Object(u.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Iniciar Sesi\xf3n"}),Object(u.jsx)(d.b,{to:"/E-Wallet-Front-End/new-account",className:"btn btn-secondary enlace-cuenta",children:"Obtener Cuenta"})]})]})},h=function(e){var t=Object(n.useContext)(j),a=t.alerta,c=t.mostrarAlerta,o=Object(n.useContext)(m),s=o.mensaje,b=o.autenticado,h=o.registrarUsuario;Object(n.useEffect)((function(){b&&e.history.push("/E-Wallet-Front-End/"),s&&c(s.msg,s.categoria)}),[s,b,e.history]);var p=Object(n.useState)({name:"",surname:"",email:"",password:""}),O=Object(l.a)(p,2),x=O[0],g=O[1],f=x.name,v=x.surname,y=x.email,N=x.password,C=function(e){g(Object(i.a)(Object(i.a)({},x),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==f.trim()&&""!==v.trim()&&""!==y.trim()&&""!==N.trim()?N.length<6?c("Debe tener minimo 6 caracteres","alerta-error"):h({user:x}):c("Todos los campos son obligatorios","alerta-error")},children:[a?Object(u.jsxs)("div",{className:" ".concat(a.categoria),children:[" ",a.msg," "]}):null,Object(u.jsx)("h1",{children:"Crear Neva Cuenta"}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Tu nombre",value:f,onChange:C,className:"form-control"}),Object(u.jsx)("label",{htmlFor:"name",children:"Nombre"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"text",id:"surname",name:"surname",placeholder:"Tu apellido",value:v,onChange:C,className:"form-control"}),Object(u.jsx)("label",{htmlFor:"surname",children:"Apellido"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu email",value:y,onChange:C,className:"form-control"}),Object(u.jsx)("label",{htmlFor:"email",children:"Email"})]}),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu password",value:N,onChange:C,className:"form-control"}),Object(u.jsx)("label",{htmlFor:"password",children:"Password"})]}),Object(u.jsxs)("div",{className:"camp-form",children:[Object(u.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Crear Cuenta"}),Object(u.jsx)(d.b,{to:"/E-Wallet-Front-End/",className:"btn btn-secondary enlace-cuenta",children:"Log-in"})]})]})},p=(a(27),void 0),O=function(e){var t=Object(n.useContext)(j),a=t.alerta,c=t.mostrarAlerta,o=Object(n.useState)({amount:"",concept:"",date:""}),s=Object(l.a)(o,2),d=s[0],m=s[1],b=function(e){m(Object(i.a)(Object(i.a)({},d),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"modal fade",id:"Modal-Edit",children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h4",{className:"modal-title",children:"Edite su registro"}),a?Object(u.jsxs)("div",{className:" ".concat(a.categoria),children:[" ",a.msg," "]}):null,Object(u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==p.state.amount&&""!==p.state.concept&&""!==p.state.date){var t=sessionStorage.getItem("token"),a=p.props.id;console.log(JSON.stringify(d)),fetch("https://shrouded-beach-42504.herokuapp.com/operations/"+a,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer "+t},body:JSON.stringify(d)}),window.location.reload()}else c("Todos los campos son obligatorios","alerta-error")},children:[Object(u.jsx)("label",{htmlFor:"concept",children:"Concepto"}),Object(u.jsx)("input",{type:"text",value:e.concept,onChange:b}),Object(u.jsx)("label",{htmlFor:"amount",children:"Monto"}),Object(u.jsx)("input",{type:"number",value:e.amount,onChange:b}),Object(u.jsx)("label",{htmlFor:"date",children:"Fecha"}),Object(u.jsx)("input",{type:"date",value:e.date,onChange:b}),Object(u.jsx)("label",{htmlFor:"tipo",children:"Tipo"}),Object(u.jsxs)("select",{className:"form-control",value:e.tipo,disabled:!0,children:[Object(u.jsx)("option",{children:"Ingreso"}),Object(u.jsx)("option",{children:"Egreso"})]}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(u.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",children:"Close"})]})]})})]})})})})},x=a(15),g=a(16),f=a(18),v=a(17),y=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"nav justify-content-center",children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"#","data-toggle":"modal","data-target":"#myModal",children:"Nuevo"})})})})}}]),a}(n.Component),N="https://shrouded-beach-42504.herokuapp.com/",C=sessionStorage.getItem("token"),S=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).state={items:[],suma:0},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("id");fetch(N+"/operations/"+t,{headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer "+C}}).then((function(e){return e.json()})).then((function(t){console.log(t);for(var a=0;a<t.length;a++)"Ingreso"===t[a].name&&e.setState({suma:e.state.suma+t[a].amount}),"Egreso"===t[a].name&&e.setState({suma:e.state.suma-t[a].amount});e.setState({items:t})}))}},{key:"deleteOperation",value:function(e,t){window.confirm("Estas seguro de eliminar a ".concat(t,"?"))&&(fetch(N+"operations/"+e,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer "+C}}),window.location.reload())}},{key:"render",value:function(){var e=this,t=this.state,a=t.amount,n=t.concept,c=t.date,o=t.name,s=t.id;return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)("h1",{children:"Saldo"}),Object(u.jsx)("div",{children:this.state.suma}),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Ultimos movimientos"}),Object(u.jsxs)("table",{className:"table table-dark table-striped",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Concepto"}),Object(u.jsx)("th",{children:"Monto"}),Object(u.jsx)("th",{children:"Fecha"}),Object(u.jsx)("th",{children:"Tipo"}),Object(u.jsx)("th",{children:"Edit/Delete"})]})}),Object(u.jsx)("tbody",{children:this.state.items.map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:t.concept}),Object(u.jsx)("th",{children:t.amount}),Object(u.jsx)("th",{children:t.date}),Object(u.jsx)("th",{children:t.name}),Object(u.jsxs)("th",{children:[Object(u.jsx)("button",{"data-toggle":"modal","data-target":"#Modal-Edit",onClick:function(){return e.setState({amount:t.amount,concept:t.concept,date:t.date,name:t.name,id:t.id_operation})},children:Object(u.jsx)("em",{className:"fa fa-edit"})}),Object(u.jsx)("button",{onClick:function(){return e.deleteOperation(t.id_operation,t.concept)},variant:"danger",children:Object(u.jsx)("em",{className:"fa fa-trash"})}),Object(u.jsx)(O,{amount:a,concept:n,date:c,tipo:o,id:s})]})]})}))})]})]})})]})}}]),a}(n.Component),E=function(){var e=Object(n.useContext)(j),t=e.alerta,a=e.mostrarAlerta,c=Object(n.useState)({amount:"",concept:"",date:"",tipo:""}),o=Object(l.a)(c,2),s=o[0],d=o[1],m=s.amount,b=s.concept,h=s.date,p=s.tipo,O=function(e){d(Object(i.a)(Object(i.a)({},s),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"modal fade",id:"myModal",children:Object(u.jsx)("div",{className:"modal-dialog",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h4",{className:"modal-title",children:"Ingrese un nuevo registro"}),t?Object(u.jsxs)("div",{className:" ".concat(t.categoria),children:[" ",t.msg," "]}):null,Object(u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==m&&""!==b&&""!==h){var t=sessionStorage.getItem("token"),n=sessionStorage.getItem("id");console.log(JSON.stringify(s)),fetch("https://shrouded-beach-42504.herokuapp.com/operations/"+n,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:"Bearer "+t},body:JSON.stringify(s)}),window.location.reload()}else a("Todos los campos son obligatorios","alerta-error")},children:[Object(u.jsx)("label",{htmlFor:"concept",children:"Concepto"}),Object(u.jsx)("input",{type:"text",onChange:O,name:"concept",value:b}),Object(u.jsx)("label",{htmlFor:"amount",children:"Monto"}),Object(u.jsx)("input",{type:"number",onChange:O,name:"amount",value:m}),Object(u.jsx)("label",{htmlFor:"date",children:"Fecha"}),Object(u.jsx)("input",{type:"date",onChange:O,name:"date",value:h}),Object(u.jsx)("label",{htmlFor:"tipo",children:"Tipo"}),Object(u.jsxs)("select",{onChange:O,name:"tipo",value:p,children:[Object(u.jsx)("option",{children:"Ingreso"}),Object(u.jsx)("option",{children:"Egreso"})]}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(u.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",children:"Close"})]})]})})]})})})})},w=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(y,{}),Object(u.jsx)(S,{}),Object(u.jsx)(E,{}),Object(u.jsx)(O,{})]})},k=a(2),T="MOSTRAR_ALERTA",F="OCULTAR_ALERTA",I="REGISTRO_EXITOSO",R="REGISTRO_ERROR",A="LOGIN_EXITOSO",M="LOGIN_ERROR",_="CERRAR_SESION",D=function(e,t){switch(t.type){case T:return{alerta:t.payload};case F:return{alerta:null};default:return e}},L=function(e){var t=Object(n.useReducer)(D,{alerta:null}),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(u.jsx)(j.Provider,{value:{alerta:c.alerta,mostrarAlerta:function(e,t){o({type:T,payload:{msg:e,categoria:t}}),setTimeout((function(){o({type:F})}),5e3)}},children:e.children})},P=a(14),B=a.n(P),U=a(23),W=function(e,t){switch(t.type){case I:case A:return sessionStorage.setItem("token",t.payload.token),sessionStorage.setItem("id",t.payload.id),Object(i.a)(Object(i.a)({},e),{},{autenticado:!0,mensaje:null,cargando:!1});case"OBTENER_USUARIO":return Object(i.a)(Object(i.a)({},e),{},{autenticado:!0,usuario:t.payload,cargando:!1});case _:case M:case R:return localStorage.removeItem("token"),Object(i.a)(Object(i.a)({},e),{},{token:null,usuario:null,autenticado:null,mensaje:t.payload,cargando:!1});default:return e}},J=a(24),z=a.n(J),G=function(e){var t="https://shrouded-beach-42504.herokuapp.com/",a={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},c=Object(n.useReducer)(W,a),o=Object(l.a)(c,2),s=o[0],r=o[1],i=function(){var e=Object(U.a)(B.a.mark((function e(a){var n,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post(t+"users",a);case 3:n=e.sent,console.log(n.data),r({type:I,payload:n.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),c={msg:e.t0.response.data.msj,categoria:"alerta-error"},r({type:R,payload:c});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(U.a)(B.a.mark((function e(a){var n,c,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.post(t+"users/login",a);case 3:if(n=e.sent,console.log(n.data),"usuario incorrecto"!==n.data){e.next=9;break}return c={msg:n.data.msj,categoria:"alerta-error"},r({type:M,payload:c}),e.abrupt("return");case 9:r({type:A,payload:n.data}),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),o={msg:e.t0,categoria:"alerta-error"},r({type:M,payload:o});case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(m.Provider,{value:{token:s.token,autenticado:s.autenticado,usuario:s.usuario,mensaje:s.mensaje,cargando:s.cargando,registrarUsuario:i,iniciarSesion:d,cerrarSesion:function(){r({type:_})}},children:e.children})};var X=function(){return Object(u.jsx)(L,{children:Object(u.jsx)(G,{children:Object(u.jsx)(d.a,{children:Object(u.jsxs)(k.c,{children:[Object(u.jsx)(k.a,{exact:!0,path:"/E-Wallet-Front-End",component:b}),Object(u.jsx)(k.a,{exact:!0,path:"/E-Wallet-Front-End/new-account",component:h}),Object(u.jsx)(k.a,{exact:!0,path:"/E-Wallet-Front-End/home",component:w})]})})})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root")),q()}},[[67,1,2]]]);
//# sourceMappingURL=main.97eeed7e.chunk.js.map