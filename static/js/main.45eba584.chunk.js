(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t,n){e.exports=n(360)},189:function(e,t,n){},190:function(e,t,n){},360:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(48),o=n.n(c),i=(n(189),n(8)),l=(n(190),n(11)),u=Object(i.withStyles)({root:{flexGrow:1},logo:{height:"1.8em",paddingRight:"0.5em"}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(l.a,{position:"static"},r.a.createElement(l.f,{variant:"dense"},r.a.createElement("img",{className:t.logo,src:"./logo.png",alt:"unfoldingWord"}),r.a.createElement(l.g,{variant:"h6",color:"inherit"},"Gateway Language Translation Process"))))}),s=n(89),g=n(87),m=n.n(g),d=n(49),v=n.n(d),f=n(88),p=n(50),h=r.a.createContext();function E(e){var t=e.children,n=Object(a.useState)([]),c=Object(p.a)(n,2),o=c[0],i=c[1],l=Object(a.useState)(0),u=Object(p.a)(l,2),s=u[0],g=u[1],m={data:o,loadData:function(){var e=Object(f.a)(v.a.mark(function e(){var t,n,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data.tsv");case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,a=n.split("\n").map(function(e){return e.split("\t").map(function(e){return e.replace(/<br>/gi,"\n")})}).filter(function(e){return e[0].length>0&&e.length>1}),i(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),getStageLabel:function(e){var t=e.stageIndex;return o[t][0]},getStageContent:function(e){var t=e.stageIndex;return o[t]},activeStage:s,setActiveStage:g,stageNext:function(){g(function(e){return e+1})},stageBack:function(){g(function(e){return e-1})},stageReset:function(){g(0)},getSectionTitle:function(e){var t=e.sectionIndex;return o[0][t]}};return r.a.createElement(h.Provider,{value:m},t)}var x=function(e){var t=e.stageIndex,n=Object(s.a)(e,["stageIndex"]),c=Object(a.useContext)(h),o=(c.activeStage,c.setActiveStage),i=c.getStageLabel,u=c.getStageContent,g=c.getSectionTitle,d=i({stageIndex:t+1}),v=u({stageIndex:t+1}).slice(1).map(function(e,t){var n=g({sectionIndex:t+1});return r.a.createElement("div",null,r.a.createElement(l.g,{variant:"h6"},n),r.a.createElement(m.a,{escapeHtml:!1,source:e}))});return r.a.createElement(l.b,Object.assign({},n,{onClick:function(){return o(t)}}),r.a.createElement(l.d,null,d),r.a.createElement(l.c,null,r.a.createElement(l.g,null,v)))};var b=function(){var e=Object(a.useContext)(h),t=e.data,n=e.loadData,c=e.activeStage;0===t.length&&n();var o=t.slice(1).map(function(e,t){return r.a.createElement(x,{key:t,stageIndex:t})});return r.a.createElement(l.e,{activeStep:c,orientation:"vertical"},o)};var w=Object(i.createMuiTheme)({palette:{primary:{light:"#59B7E7",main:"#31ADE3",dark:"#014263",contrastText:"#FFF"}},typography:{useNextVariants:!0}}),S=function(){return r.a.createElement(i.MuiThemeProvider,{theme:w},r.a.createElement(E,null,r.a.createElement(u,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[184,1,2]]]);
//# sourceMappingURL=main.45eba584.chunk.js.map