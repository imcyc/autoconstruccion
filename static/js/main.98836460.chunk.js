(this.webpackJsonpautoconstruccion=this.webpackJsonpautoconstruccion||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),o=a(6),i=(a(61),a(62),a(63),a(10)),m=a(11),s=a(13),u=a(12),E=a(14),v=a(18),f=(a(64),a(21)),d=a(31),h=a(48),N=a.n(h),p=a(49),g=a.n(p),O=(a(65),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"menuUsuario",value:function(e){if(e)return l.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(d.a,{className:"mr-auto"},l.a.createElement(d.a.Link,{href:"/"},"Home"),l.a.createElement(d.a.Link,{href:"/"},"Link")))}},{key:"nombreUsuario",value:function(e){if(e)return l.a.createElement(f.a.Collapse,{className:"justify-content-end"},l.a.createElement(f.a.Text,null,l.a.createElement("a",{href:"#login"},"Sergio Prieto")))}},{key:"render",value:function(){var e=this.props.usuario;return l.a.createElement(f.a,{expand:"lg"},l.a.createElement(f.a.Brand,null,l.a.createElement("img",{src:N.a,alt:"Manual de autoconstrucci\xf3n",title:"Manual de autoconstrucci\xf3n"}),l.a.createElement("img",{src:g.a,alt:"Manual de autoconstrucci\xf3n",title:"Manual de autoconstrucci\xf3n"})),l.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),this.menuUsuario(e),this.nombreUsuario(e))}}]),t}(n.Component)),b=(a(76),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("p",{className:"text-center"},"@ 2019 | Todos Los Derechos Reservados.",l.a.createElement("br",null),l.a.createElement(o.c,{to:"#"},"Habitat para la Humanidad M\xe9xico")," e ",l.a.createElement(o.c,{to:"#"},"Instituto Mexicano del Cemento y del Concreto A.C.")),l.a.createElement("ul",{className:"social_footer_ul"},l.a.createElement("li",null,l.a.createElement(o.c,{to:"/"},l.a.createElement("i",{className:"fa fa-facebook-f"}))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/"},l.a.createElement("i",{className:"fa fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement(o.c,{to:"/"},l.a.createElement("i",{className:"fa fa-instagram"}))))))}}]),t}(n.Component)),I=a(55),y=a.n(I),C=(a(97),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){y.a.get("https://18.219.47.222/apis/autoconstruccion/usuarios.php").then((function(e){var t=e.data;console.log(t)}))}},{key:"renderRegistro",value:function(e){return e?l.a.createElement("input",{type:"email",className:"fadeIn second",name:"email2",placeholder:"CORREO ELECTR\xd3NICO"}):""}},{key:"render",value:function(){var e=this.props,t=e.registrarse,a=e.registro,n=e.login,c=e.loginU;return e.usuario?l.a.createElement(v.a,{to:"/panel"}):l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"wrapper fadeInDown"},l.a.createElement("div",{id:"formContent"},l.a.createElement("div",{className:"fadeIn first"},l.a.createElement("h1",null,l.a.createElement("span",{className:"azul"},"SOLUCIONES DE"),l.a.createElement("br",null),l.a.createElement("span",{className:"verde"},"AUTOCONSTRUCCI\xd3N")),l.a.createElement("p",null,"Manual para la Autoconstrucci\xf3n y Mejoramiento de la Construcci\xf3n")),l.a.createElement("form",{onSubmit:n},l.a.createElement("input",{type:"email",id:"login",className:"fadeIn second",name:"email",placeholder:"CORREO ELECTR\xd3NICO"}),l.a.createElement("input",{type:"text",id:"password",className:"fadeIn third",name:"password",placeholder:"CONTRASE\xd1A"}),this.renderRegistro(a),l.a.createElement("div",{className:"container loged"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:a?"col-xs-12 col-md-12 col-lg-12":"col-xs-6 col-md-6 col-lg-6"},l.a.createElement("button",{type:"submit",className:"fadeIn fourth"},a?"REGISTRARSE E INGRESAR":"INGRESAR",l.a.createElement("i",{className:"lni-chevron-right"})),a?l.a.createElement(o.c,{onClick:c,style:{fontSize:"15px"}},"Ya tiene una cuenta?, Ingrese dando click aqu\xed"):""),l.a.createElement("div",{className:"col-xs-6 col-md-6 col-lg-6",style:{display:a?"none":"block"}},l.a.createElement("button",{onClick:t,className:"fadeIn fourth"},"REGISTRARSE ",l.a.createElement("i",{className:"lni-chevron-right"})," ")))))))))}}]),t}(n.Component)),S=a(27),j=a(3),R=a.n(j),T=(a(104),function(){return l.a.createElement("div",null,l.a.createElement(R.a,{onSelect:function(e){}},l.a.createElement(R.a.Toggle,null),l.a.createElement(R.a.Nav,{defaultSelected:"home"},l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-arrow-right-circle",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,l.a.createElement(o.c,{to:"/introduccion"},"INTRODUCCI\xd3N"))),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-home",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"TUTORIAL")),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-microscope",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"PROCESO INTEGRAL")),l.a.createElement("hr",null),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-write",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"PROCEDIMIENTOS")),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-microsoft",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"C\xc1PSULAS")),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-bulb",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"INSTALACIONES Y ACABADOS")),l.a.createElement("hr",null),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-paperclip",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"EXAMEN DE CERTIFICACI\xd3N")),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-calculator",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"CALCULADORA DE CONCRETO")),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-agenda",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"MORTERO DOSIFICACI\xd3N")),l.a.createElement(j.NavItem,{eventKey:"home"},l.a.createElement(j.NavIcon,null,l.a.createElement("i",{class:"lni-list",style:{fontSize:"1.75em"}})),l.a.createElement(j.NavText,null,"GLOSARIO")))))}),x=a(28),A=a(24),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(S.a,{fluid:!0},l.a.createElement(x.a,{style:{height:"100vh"}},l.a.createElement(A.a,{xs:12,md:12},l.a.createElement(T,null))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(S.a,{fluid:!0},l.a.createElement(x.a,{style:{height:"100vh"}},l.a.createElement(A.a,{xs:1,md:1},l.a.createElement(T,null)),l.a.createElement(A.a,{xs:11,md:11},"INTRODUCCION")))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).registrarse=function(e){e.preventDefault(),a.setState({registro:!a.state.registro})},a.login=function(e){e.preventDefault();var t=e.target.email.value,a=e.target.password.value;console.log(t+" + "+a)},a.loginU=function(e){e.preventDefault(),a.setState({registro:!a.state.registro})},a.state={registro:!1},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(o.b,{basename:"/"},l.a.createElement("div",null,l.a.createElement(O,{usuario:this.state.usuario}),l.a.createElement(v.d,null,l.a.createElement(v.b,{exact:!0,path:"/",component:function(t){return l.a.createElement(C,Object.assign({},t,{registrarse:e.registrarse,registro:e.state.registro,login:e.login,loginU:e.loginU,usuario:e.state.usuario}))}}),l.a.createElement(v.b,{exact:!0,path:"/panel",component:function(e){return l.a.createElement(k,e)}}),l.a.createElement(v.b,{exact:!0,path:"/introduccion",component:function(e){return l.a.createElement(w,e)}})),l.a.createElement(b,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(o.a,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,a){e.exports=a.p+"static/media/logo-imcyc.15ca9bfd.svg"},49:function(e,t,a){e.exports=a.p+"static/media/logo-habitat.3314437c.png"},56:function(e,t,a){e.exports=a(105)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},76:function(e,t,a){},97:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.98836460.chunk.js.map