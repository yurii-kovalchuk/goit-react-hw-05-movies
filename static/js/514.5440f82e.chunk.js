"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[514],{514:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var t,s,i,o,a,d,c,l=r(861),p=r(439),u=r(757),h=r.n(u),v=r(912),x=r(596),j=r(791),f=r(87),b=r(689),g=r(324),m=r(766),Z=r(444),_=Z.ZP.div(t||(t=(0,m.Z)(["\n  padding-top: 10px;\n"]))),k=Z.ZP.div(s||(s=(0,m.Z)(["\n  display: flex;\n  padding-bottom 10px;\n  border-bottom: 1px solid grey;\n"]))),w=Z.ZP.div(i||(i=(0,m.Z)(["\n  padding: 20px;\n"]))),P=Z.ZP.div(o||(o=(0,m.Z)(["\n  border-bottom: 1px solid grey;\n"]))),y=(0,Z.ZP)(f.OL)(a||(a=(0,m.Z)(["\n  color: black;\n  text-decoration: none;\n  &:hover,\n  :focus {\n    text-decoration: underline;\n  }\n  :active {\n    color: red;\n  }\n"]))),C=r(184),G=function(e){var n=e.genres,r=e.overview,t=e.poster_path,s=e.release_date,i=e.title,o=e.vote_average,a=s.slice(0,4),d=n.map((function(e){return e.name})).join(", "),c=Math.round(10*o);return(0,C.jsxs)(_,{children:[(0,C.jsxs)(k,{children:[(0,C.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t),alt:i}),(0,C.jsxs)(w,{children:[(0,C.jsxs)("h3",{children:[i," (",a,")"]}),(0,C.jsxs)("p",{children:["User score: ",c,"%"]}),(0,C.jsx)("h4",{children:"Overview"}),(0,C.jsx)("p",{children:r}),(0,C.jsx)("h4",{children:"Genres"}),(0,C.jsx)("p",{children:d})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)("p",{children:"Additional information"}),(0,C.jsxs)("ul",{children:[(0,C.jsx)("li",{children:(0,C.jsx)(y,{to:"cast",children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(y,{to:"reviews",children:"Reviews"})})]})]}),(0,C.jsx)(j.Suspense,{fallback:(0,C.jsx)("div",{children:"Loading..."}),children:(0,C.jsx)(b.j3,{})})]})},O=Z.ZP.div(d||(d=(0,m.Z)(["\n  padding: 10px;\n"]))),U=Z.ZP.button(c||(c=(0,m.Z)(["\n  cursor: pointer;\n  border-radius: 5px;\n  border: 2px solid silver;\n  &: active {\n    background-color: red;\n    border: 2px solid red;\n  }\n"]))),A=function(){var e,n,r=(0,b.UO)().movieId,t=(0,j.useState)(null),s=(0,p.Z)(t,2),i=s[0],o=s[1],a=(0,b.TH)(),d=(0,j.useRef)(null!==(e=null===(n=a.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");return(0,j.useEffect)((function(){var e=function(){var e=(0,l.Z)(h().mark((function e(){var n;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=f9d814745439162b2afd5ff7833832ed"));case 3:n=e.sent,o(n.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,x.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,C.jsxs)(O,{children:[(0,C.jsx)(f.rU,{to:d.current,children:(0,C.jsxs)(U,{type:"button",children:[(0,C.jsx)(g.VG_,{}),(0,C.jsx)("span",{children:" Go back"})]})}),i&&(0,C.jsx)(G,{genres:i.genres,overview:i.overview,poster_path:i.poster_path,release_date:i.release_date,title:i.title,vote_average:i.vote_average})]})}}}]);
//# sourceMappingURL=514.5440f82e.chunk.js.map