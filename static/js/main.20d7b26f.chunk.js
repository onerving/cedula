(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,n){e.exports=n(286)},146:function(e,t,n){},147:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),l=n.n(o),s=(n(146),n(147),n(294)),c=n(79),u=n(80),i=n(84),m=n(81),h=n(85),p=n(295),d=n(293),f=n(292),v=n(297),w=n(148);function E(e){return function(e){return w.get("https://cors-anywhere.herokuapp.com/http://search.sep.gob.mx/solr/cedulasCore/select?'",{params:{fl:"*,score",rows:1,wt:"json",q:e},crossDomain:!0})}(e).then(function(e){return e.data.response.docs[0]})}var g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={query:"1629426",result:{}},n.searchAndSetResults=function(e){E(e).then(function(e){console.log(e),n.setState({result:e})})},n.handleChange=function(e){var t=e.target.value;n.setState({query:t}),n.searchAndSetResults(t)},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.searchAndSetResults(this.state.query)}},{key:"render",value:function(){return r.a.createElement(s.a.Column,{width:"5",verticalAlign:"middle"},r.a.createElement(p.a,null,r.a.createElement(s.a.Row,null,r.a.createElement(d.a,{value:this.state.query,onChange:this.handleChange})),r.a.createElement(s.a.Row,null,r.a.createElement(b,{result:this.state.result}))))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={result:n.props.result},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({result:e.result})}},{key:"render",value:function(){if(this.state.result){var e=this.state.result,t=e.anioRegistro,n=(e.genero,e.id,e.institucion),a=e.materno,o=e.nombre,l=e.numCedula,s=e.paterno,c=(e.timestamp,e.tipo,e.titulo);return r.a.createElement(f.a,{className:"results"},r.a.createElement(v.a,{as:"h3"},"C\xe9dula profesional"),r.a.createElement("p",null,l),r.a.createElement("p",null,"".concat(s," ").concat(a," ").concat(o)),r.a.createElement("p",null,c),r.a.createElement("p",null,n),r.a.createElement("p",null,t))}return r.a.createElement(f.a,{className:"results"},r.a.createElement(v.a,{as:"h3"},"Sin resultados"))}}]),t}(a.Component),y=g;var j=function(){return r.a.createElement(s.a,{centered:!0,className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,1,2]]]);
//# sourceMappingURL=main.20d7b26f.chunk.js.map