(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{104:function(e,n,t){e.exports=t(183)},109:function(e,n,t){},128:function(e,n,t){},183:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(11),o=t.n(c),i=(t(109),t(60)),u=t.n(i),l=t(99),s=t(44),f=t(32),d=t(33),p=t(185),b=t(187),m=t(66),v=t(88),g=t.n(v);t(127),t(128);function h(){var e=Object(f.a)(["\n    padding: 5px;\n"]);return h=function(){return e},e}function w(){var e=Object(f.a)(["\n    padding: 20px;\n"]);return w=function(){return e},e}function j(){var e=Object(f.a)(["\n    width: 20%;\n    margin: 20px;\n"]);return j=function(){return e},e}function O(){var e=Object(f.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n"]);return O=function(){return e},e}var k=d.a.div(O()),x=Object(d.a)(p.a)(j()),y=d.a.div(w()),E=d.a.a(h());b.a.config({top:50,maxCount:1});var C=function(){var e=Object(a.useState)([]),n=Object(s.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(),i=Object(s.a)(o,2),f=i[0],d=i[1],p=Object(a.useState)(!1),v=Object(s.a)(p,2),h=v[0],w=v[1],j=Object(a.useCallback)((function(e){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!h&&f){n.next=2;break}return n.abrupt("return");case 2:return e.preventDefault(),w(!0),b.a.loading("Processing...."),n.next=7,u.a.awrap(g.a.get("".concat("","/getPdf?url=").concat(f)).then((function(e){var n=new Blob([e.data],{type:"application/pdf"}),t={};t.href=window.URL.createObjectURL(n),t.name="file",t.url=f,c((function(e){return[].concat(Object(l.a)(e),[t])})),d(""),b.a.success("Yay !!! it' done. Click a link below to download")})).catch((function(e){console.log(e.response),w(!1),b.a.error("Invalid URL or it is private page")})));case 7:w(!1);case 8:case"end":return n.stop()}}))}),[h,f]);return r.a.createElement(k,null,r.a.createElement("h1",null,"Convert HTML To PDF"),r.a.createElement(x,{value:f,size:"large",onChange:function(e){return d(e.target.value)},disabled:h,allowClear:!0}),r.a.createElement(m.a,{color:"primary",onClick:j,disabled:h},"Convert to pdf"),r.a.createElement(y,null,t.map((function(e,n){return r.a.createElement(a.Fragment,null,r.a.createElement(E,{key:"".concat(n,"-link"),href:e.href,download:"".concat(e.name,"-").concat(n,".pdf")},e.url))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[104,1,2]]]);
//# sourceMappingURL=main.2b938f30.chunk.js.map