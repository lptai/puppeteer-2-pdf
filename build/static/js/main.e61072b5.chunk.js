(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{103:function(e,n,t){},122:function(e,n,t){},177:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(24),o=t.n(c),i=(t(103),t(56)),u=t.n(i),l=t(94),f=t(40),p=t(27),s=t(28),d=t(179),b=t(61),m=t(83),h=t.n(m);t(121),t(122);function v(){var e=Object(p.a)(["\n    padding: 5px;\n"]);return v=function(){return e},e}function w(){var e=Object(p.a)(["\n    padding: 20px;\n"]);return w=function(){return e},e}function g(){var e=Object(p.a)(["\n    width: 20%;\n    margin: 20px;\n"]);return g=function(){return e},e}function j(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n"]);return j=function(){return e},e}var O=s.a.div(j()),y=Object(s.a)(d.a)(g()),k=s.a.div(w()),x=s.a.a(v());var E=function(){var e=Object(a.useState)([]),n=Object(f.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(),i=Object(f.a)(o,2),p=i[0],s=i[1],d=Object(a.useState)(!1),m=Object(f.a)(d,2),v=m[0],w=m[1],g=Object(a.useCallback)((function(e){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!v&&p){n.next=2;break}return n.abrupt("return");case 2:return e.preventDefault(),w(!0),n.next=6,u.a.awrap(h.a.get("".concat("","/getPdf?url=").concat(p),{responseType:"arraybuffer",headers:{"Content-Type":"application/json",Accept:"application/pdf"}}).then((function(e){var n=new Blob([e.data],{type:"application/pdf"}),t={};t.href=window.URL.createObjectURL(n),t.name="file",t.url=p,c((function(e){return[].concat(Object(l.a)(e),[t])})),s("")})).catch((function(e){console.log(e),w(!1)})));case 6:w(!1);case 7:case"end":return n.stop()}}))}),[v,p]);return r.a.createElement(O,null,r.a.createElement("h1",null,"Convert HTML To PDF"),r.a.createElement(y,{value:p,size:"large",onChange:function(e){return s(e.target.value)},disabled:v,allowClear:!0}),r.a.createElement(b.a,{color:"primary",onClick:g,disabled:v},"Convert to pdf"),r.a.createElement(k,null,t.map((function(e,n){return r.a.createElement(a.Fragment,null,r.a.createElement(x,{key:"".concat(n,"-link"),href:e.href,download:"".concat(e.name,"-").concat(n,".pdf")},e.url))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,n,t){e.exports=t(177)}},[[98,1,2]]]);
//# sourceMappingURL=main.e61072b5.chunk.js.map