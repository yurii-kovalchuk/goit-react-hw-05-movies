"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[683],{683:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(912),u=r(596),o=r(791),h=r(689),f=r(184),v=function(e){var t=e.reviews,r=(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:t.map((function(e){var t=e.id,r=e.author,n=e.content;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h4",{children:["Author: ",r]}),(0,f.jsx)("p",{children:n})]},t)}))})});return t.length>0?r:"We don't have any reviews for this movie."},l=function(){var e=(0,o.useState)(null),t=(0,a.Z)(e,2),r=t[0],s=t[1],l=(0,h.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(l,"/reviews?api_key=f9d814745439162b2afd5ff7833832ed"));case 3:t=e.sent,s(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),(0,u.Am)(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,f.jsx)("div",{children:r&&(0,f.jsx)(v,{reviews:r})})}}}]);
//# sourceMappingURL=683.c1d85f6c.chunk.js.map