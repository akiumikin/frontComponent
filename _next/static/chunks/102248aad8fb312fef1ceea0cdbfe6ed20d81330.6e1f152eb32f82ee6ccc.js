(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{MAwT:function(n,e,t){"use strict";t.d(e,"a",(function(){return W}));var i=t("nKUr"),o=t("ODXe"),a=t("q1tI"),r=t("kKAo"),d=t("wx14"),c=t("Ff2n"),s=t("17x9"),l=t.n(s),u=t("A+CX"),p=t("2mql"),f=t.n(p),w=t("tr08"),m=t("LEIi"),h=t("aXM8");function v(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object(h.a)(),i=Object(u.a)({theme:t,name:"MuiUseMediaQuery",props:{}});var o="function"===typeof n?n(t):n;o=o.replace(/^@media( ?)/m,"");var r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,c=Object(d.a)({},i,e),s=c.defaultMatches,l=void 0!==s&&s,p=c.matchMedia,f=void 0===p?r?window.matchMedia:null:p,w=c.noSsr,m=void 0!==w&&w,v=c.ssrMatchMedia,b=void 0===v?null:v,x=a.useState((function(){return m&&r?f(o).matches:b?b(o).matches:l})),O=x[0],j=x[1];return a.useEffect((function(){var n=!0;if(r){var e=f(o),t=function(){n&&j(e.matches)};return t(),e.addListener(t),function(){n=!1,e.removeListener(t)}}}),[o,f,r]),O}var b=function(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t?m.b.indexOf(n)<=m.b.indexOf(e):m.b.indexOf(n)<m.b.indexOf(e)},x=function(n,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t?m.b.indexOf(e)<=m.b.indexOf(n):m.b.indexOf(e)<m.b.indexOf(n)},O="undefined"===typeof window?a.useEffect:a.useLayoutEffect,j=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){var t=n.withTheme,i=void 0!==t&&t,o=n.noSSR,r=void 0!==o&&o,s=n.initialWidth;function l(n){var t=Object(w.a)(),o=n.theme||t,l=Object(u.a)({theme:o,name:"MuiWithWidth",props:Object(d.a)({},n)}),p=l.initialWidth,f=l.width,m=Object(c.a)(l,["initialWidth","width"]),h=a.useState(!1),b=h[0],x=h[1];O((function(){x(!0)}),[]);var j=o.breakpoints.keys.slice().reverse().reduce((function(n,e){var t=v(o.breakpoints.up(e));return!n&&t?e:n}),null),D=Object(d.a)({width:f||(b||r?j:void 0)||p||s},i?{theme:o}:{},m);return void 0===D.width?null:a.createElement(e,D)}return f()(l,e),l}};function D(n){var e=n.children,t=n.only,i=n.width,o=Object(w.a)(),a=!0;if(t)if(Array.isArray(t))for(var r=0;r<t.length;r+=1){if(i===t[r]){a=!1;break}}else t&&i===t&&(a=!1);if(a)for(var d=0;d<o.breakpoints.keys.length;d+=1){var c=o.breakpoints.keys[d],s=n["".concat(c,"Up")],l=n["".concat(c,"Down")];if(s&&b(c,i)||l&&x(c,i)){a=!1;break}}return a?e:null}D.propTypes={children:l.a.node,className:l.a.string,implementation:l.a.oneOf(["js","css"]),initialWidth:l.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:l.a.bool,lgUp:l.a.bool,mdDown:l.a.bool,mdUp:l.a.bool,only:l.a.oneOfType([l.a.oneOf(["xs","sm","md","lg","xl"]),l.a.arrayOf(l.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:l.a.bool,smUp:l.a.bool,width:l.a.string.isRequired,xlDown:l.a.bool,xlUp:l.a.bool,xsDown:l.a.bool,xsUp:l.a.bool};var U=j()(D),g=t("rePB"),y=t("NqtD"),k=t("H2TA");var E=Object(k.a)((function(n){var e={display:"none"};return n.breakpoints.keys.reduce((function(t,i){return t["only".concat(Object(y.a)(i))]=Object(g.a)({},n.breakpoints.only(i),e),t["".concat(i,"Up")]=Object(g.a)({},n.breakpoints.up(i),e),t["".concat(i,"Down")]=Object(g.a)({},n.breakpoints.down(i),e),t}),{})}),{name:"PrivateHiddenCss"})((function(n){var e=n.children,t=n.classes,i=n.className,o=n.only,r=(Object(c.a)(n,["children","classes","className","only"]),Object(w.a)()),d=[];i&&d.push(i);for(var s=0;s<r.breakpoints.keys.length;s+=1){var l=r.breakpoints.keys[s],u=n["".concat(l,"Up")],p=n["".concat(l,"Down")];u&&d.push(t["".concat(l,"Up")]),p&&d.push(t["".concat(l,"Down")])}return o&&(Array.isArray(o)?o:[o]).forEach((function(n){d.push(t["only".concat(Object(y.a)(n))])})),a.createElement("div",{className:d.join(" ")},e)}));var M=function(n){var e=n.implementation,t=void 0===e?"js":e,i=n.lgDown,o=void 0!==i&&i,r=n.lgUp,s=void 0!==r&&r,l=n.mdDown,u=void 0!==l&&l,p=n.mdUp,f=void 0!==p&&p,w=n.smDown,m=void 0!==w&&w,h=n.smUp,v=void 0!==h&&h,b=n.xlDown,x=void 0!==b&&b,O=n.xlUp,j=void 0!==O&&O,D=n.xsDown,g=void 0!==D&&D,y=n.xsUp,k=void 0!==y&&y,M=Object(c.a)(n,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===t?a.createElement(U,Object(d.a)({lgDown:o,lgUp:s,mdDown:u,mdUp:f,smDown:m,smUp:v,xlDown:x,xlUp:j,xsDown:g,xsUp:k},M)):a.createElement(E,Object(d.a)({lgDown:o,lgUp:s,mdDown:u,mdUp:f,smDown:m,smUp:v,xlDown:x,xlUp:j,xsDown:g,xsUp:k},M))},A=function(){var n=!0,e=a.useCallback((function(){var n,e;return{width:null===(n=window)||void 0===n?void 0:n.innerWidth,height:null===(e=window)||void 0===e?void 0:e.innerHeight}}),[n]),t=a.useState(e()),i=Object(o.a)(t,2),r=i[0],d=i[1];return a.useEffect((function(){var n=function(){d(e())};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[e]),r};function W(n){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(M,{smDown:!0,children:Object(i.jsx)(r.a,{style:{padding:20,margin:"30px auto 30px auto",width:800},children:n.children})}),Object(i.jsx)(M,{mdUp:!0,xsDown:!0,children:Object(i.jsx)(r.a,{style:{padding:20,margin:"30px auto 30px auto",width:600,maxWidth:"90%"},children:n.children})}),Object(i.jsx)(M,{smUp:!0,children:Object(i.jsx)(r.a,{style:{padding:15,margin:"20px auto 20px auto",width:A().width},children:n.children})})]})}}}]);