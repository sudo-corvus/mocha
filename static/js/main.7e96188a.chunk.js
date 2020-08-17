(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(n,e){},128:function(n,e){},130:function(n,e){},141:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(60),c=t.n(i),u=(t(75),t(67)),o=t(1),l=t(3),f=t(2),d=t(64);function s(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  border: none;\n  color: #5f6368;\n  background-color: #eee;\n\n  font-size: 1.2rem;\n"]);return s=function(){return n},n}function m(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  border: none;\n  color: #fff;\n  background-color: #00796b;\n  cursor: pointer;\n  font-size: 1.2rem;\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return m=function(){return n},n}function h(){var n=Object(l.a)(["\n  font-weight: 400;\n  margin-right: 20px;\n"]);return h=function(){return n},n}function v(){var n=Object(l.a)(["\n  display: flex;\n"]);return v=function(){return n},n}function g(){var n=Object(l.a)(["\n  font-weight: 400;\n  font-size: 1.25rem;\n  color: #5f6368;\n  padding-bottom: 3em;\n"]);return g=function(){return n},n}function p(){var n=Object(l.a)(["\n  font-size: 2.75rem;\n  font-weight: 400;\n  line-height: 3.25rem;\n  padding-bottom: 0.5em;\n"]);return p=function(){return n},n}function b(){var n=Object(l.a)([""]);return b=function(){return n},n}function j(){var n=Object(l.a)(["\n  margin-bottom: 5px;\n"]);return j=function(){return n},n}function w(){var n=Object(l.a)(["\n  fill: #00796b;\n  width: 100px;\n  height: 54px;\n"]);return w=function(){return n},n}function E(){var n=Object(l.a)(["\n  vertical-align: middle;\n"]);return E=function(){return n},n}function O(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 1.5rem;\n  color: #878a8e;\n"]);return O=function(){return n},n}function x(){var n=Object(l.a)(["\n  display: flex;\n  height: calc(100vh - 90px);\n  min-height: 100%;\n  align-items: center;\n  margin: 0 100px;\n  justify-content: space-between;\n"]);return x=function(){return n},n}function y(){var n=Object(l.a)(["\n  display: flex;\n  height: 90px;\n  justify-content: space-between;\n"]);return y=function(){return n},n}function k(){var n=Object(l.a)([""]);return k=function(){return n},n}var I=f.default.div(k()),D=f.default.div(y()),z=f.default.div(x()),M=f.default.div(O()),R=f.default.div(E()),W=Object(f.default)(d.a)(w()),P=f.default.div(j()),S=f.default.div(b()),B=f.default.div(p()),J=f.default.div(g()),N=f.default.div(v()),C=f.default.div(h()),G=f.default.button(m()),H=f.default.input.attrs({placeholder:"Enter a room link"})(s()),T=t(143),U=function(n){return a.a.createElement(I,null,a.a.createElement(D,null,a.a.createElement(M,null,a.a.createElement(R,null,a.a.createElement(W,null)),a.a.createElement(P,null,"Mocha"))),a.a.createElement(z,null,a.a.createElement(S,null,a.a.createElement(B,null,"Premium video meetings. Now free for everyone."),a.a.createElement(J,null,"We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all."),a.a.createElement(N,null,a.a.createElement(C,null,a.a.createElement(G,{onClick:function(){var e=Object(T.a)();n.history.push("/room/".concat(e))}},"New Meeting ")),a.a.createElement(C,null,a.a.createElement(H,null)))),a.a.createElement(S,null)))},$=t(68),q=t(69),A=t(66),F=t.n(A),K=t(33),L=t.n(K);function Q(){var n=Object(l.a)(["\n  height: 40%;\n  width: 50%;\n"]);return Q=function(){return n},n}function V(){var n=Object(l.a)(["\n  padding: 20px;\n  display: flex;\n  height: 100vh;\n  width: 90%;\n  margin: auto;\n  flex-wrap: wrap;\n"]);return V=function(){return n},n}var X=f.default.div(V()),Y=f.default.video(Q());function Z(){var n=Object(l.a)(["\n  height: 40%;\n  width: 50%;\n"]);return Z=function(){return n},n}var _=f.default.video(Z()),nn=function(n){var e=Object(r.useRef)();return Object(r.useEffect)((function(){n.peer.on("stream",(function(n){e.current.srcObject=n}))}),[]),a.a.createElement(_,{playsInline:!0,autoPlay:!0,ref:e})},en={height:window.innerHeight/2,width:window.innerWidth/2},tn=function(n){var e=Object(r.useState)([]),t=Object(q.a)(e,2),i=t[0],c=t[1],u=Object(r.useRef)(),o=Object(r.useRef)(),l=Object(r.useRef)([]),f=n.match.params.roomID;return Object(r.useEffect)((function(){u.current=F.a.connect("https://mochaserver.herokuapp.com/"),navigator.mediaDevices.getUserMedia({video:en,audio:!0}).then((function(n){o.current.srcObject=n,u.current.emit("join room",f),u.current.on("all users",(function(e){var t=[];e.forEach((function(e){var r=function(n,e,t){var r=new L.a({initiator:!0,trickle:!1,stream:t});return r.on("signal",(function(t){u.current.emit("sending signal",{userToSignal:n,callerID:e,signal:t})})),r}(e,u.current.id,n);l.current.push({peerID:e,peer:r}),t.push(r)})),c(t)})),u.current.on("user joined",(function(e){var t=function(n,e,t){var r=new L.a({initiator:!1,trickle:!1,stream:t});return r.on("signal",(function(n){u.current.emit("returning signal",{signal:n,callerID:e})})),r.signal(n),r}(e.signal,e.callerID,n);l.current.push({peerID:e.callerID,peer:t}),c((function(n){return[].concat(Object($.a)(n),[t])}))})),u.current.on("receiving returned signal",(function(n){l.current.find((function(e){return e.peerID===n.id})).peer.signal(n.signal)}))}))}),[]),a.a.createElement(X,null,a.a.createElement(Y,{muted:!0,ref:o,autoPlay:!0,playsInline:!0}),i.map((function(n,e){return a.a.createElement(nn,{key:e,peer:n})})))};var rn=function(){return a.a.createElement(u.a,null,a.a.createElement(o.c,null,a.a.createElement(o.a,{path:"/",exact:!0,component:U}),a.a.createElement(o.a,{path:"/room/:roomID",component:tn})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(rn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},70:function(n,e,t){n.exports=t(141)},75:function(n,e,t){}},[[70,1,2]]]);
//# sourceMappingURL=main.7e96188a.chunk.js.map