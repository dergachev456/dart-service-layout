(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{110:function(e,a,t){},111:function(e,a,t){},112:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=t(19),i=t(20),s=t(22),m=t(21),u=(t(80),t(15)),h=t(11),d=t(69),p=t.n(d);t(81);function f(e){var a=e.switchMobileHeader;return r.a.createElement("header",{className:"header"},r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement("button",{onClick:a,className:"header__burger"},"\u2630"))}function v(){return r.a.createElement("div",{className:"header__logo-wrapper"},r.a.createElement(u.b,{to:"/"},r.a.createElement("div",{className:"header__logo-container"},r.a.createElement("img",{className:"header__logo",src:p.a,alt:"logo"}),r.a.createElement("div",{className:"header__logo-text"},r.a.createElement("span",null,"dart"),r.a.createElement("span",null,"service manager")))))}function E(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/",className:"header__link",href:"/"},"Home"),r.a.createElement(u.b,{to:"/",className:"header__link",href:"/"},"Service"),r.a.createElement(u.b,{to:"/",className:"header__link",href:"/"},"Extension"),r.a.createElement(u.b,{to:"/",className:"header__link",href:"/"},"Pricing"),r.a.createElement(u.b,{to:"/",className:"header__link",href:"/"},"Help"),r.a.createElement(u.b,{to:"/",className:"header__sing-up",href:"/"},"sign up"))}t(86);var b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).el=document.createElement("div"),e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"render",value:function(){var e=this.props.children;return c.a.createPortal(e,this.el)}}]),t}(n.Component);t(87);function w(e){var a=e.switchMobileHeader;return r.a.createElement(b,null,r.a.createElement("div",{className:"mobile-header"},r.a.createElement(E,null),r.a.createElement("button",{onClick:a,className:"mobile-header__close"},"\u2716")))}var g=t(71),y=t.n(g),N=t(72),A=t.n(N),_=(t(88),t(73)),k=(t(110),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={showText:!0},e.hideText=function(){e.setState({showText:!1})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.width,t=e.height,n=e.poster,l=e.video,c=this.state.showText&&r.a.createElement("span",{className:"video__text"},"Watch the video");return r.a.createElement("div",{onClick:this.hideText,className:"video"},r.a.createElement(_.Player,{fluid:!1,height:t,width:a,poster:n},r.a.createElement("source",{src:l})),c)}}]),t}(n.Component)),O=(t(111),function(e){var a=e.children,t=e.path,n=e.className;return r.a.createElement(u.b,{className:"custom-link ".concat(n),to:t},a)}),B=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={isMobile:!1},e.switchMobileHeader=function(){e.setState(e.setState((function(e){return{isMobile:!e.isMobile}})))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state.isMobile&&r.a.createElement(w,{switchMobileHeader:this.switchMobileHeader});return r.a.createElement("div",{className:"welcome__wrapper"},r.a.createElement("div",{className:"welcome__container"},r.a.createElement(f,{switchMobileHeader:this.switchMobileHeader}),r.a.createElement("div",{className:"welcome__main"},r.a.createElement("div",{className:"welcome__info"},r.a.createElement("span",{className:"welcome__info-title"},"lorem Ipsum",r.a.createElement("br",null)," Dolor sit amet"),r.a.createElement("span",{className:"welcome__info-text"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc"),r.a.createElement("div",{className:"welcome__buttons"},r.a.createElement(O,{className:"welcome__buy",path:"/"},"Buy now"),r.a.createElement(O,{className:"welcome__try",path:"/"},"Try for free"))),r.a.createElement(k,{video:y.a,poster:A.a,width:600,height:318}))),e)}}]),t}(n.Component),j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(u.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",component:C}))))}}]),t}(n.Component);function C(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement("div",{style:{width:"100%",height:"600px"},className:"test te"}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADlElEQVRIibWX3YuXVRDHP75gVm5q5UsXikXaC6Vusma2EWWibuCFISoFRtRSghdC3XVTEPkXeGGERgXRrZBZUVeCmrju5pYppkvmhZov66prbX7jxPex6ex59vfrwi+cPc9vZs7MmTlzZs4i6WaOxyWdkvRKbmMsNw9twJfAJGBubqUZw2OAdmAlsAi438oSzgPHgN3AZ8AB058AdgIT/XvyMK0jhHmspNckHVVz2OB1T0nqz1Z82myoHwI+Bhb8j4Po87wOaMl4KWKfAwPAn8DekuHlFoqLBezzmaVwngP+AqYBrcDzDTY106PC0jy8yyVdycL0haS5TWT+GM9bGhzMaUnzo8eznSC3+vcgsAHYFmRSFBYC0510vzkSlxyBRjgLPAf0VLsdLWlv2NWgpBXBm1mStku6WvDgpKTJlpsu6UiNp79Las2Ta709qbDR1yFhLfAhcFvBm35gla/VVGCXI9frKxaxFej6N2ukUZIOh53tCp6uljSU7fyapF5JPZIWWu4eST+a3yVpSqOcSH+ezBQ/Zua9ki4Fekq6NyVNzJRMlfSTZXoyo+MkrfTYJOnhaPi9oHx/WLQt0C9Lai/sPBn9wTI/S5pm+l1BpifoeTsa/jYw3jGjxcaGLQgjedZt/kGHO9EXSOqTNN6/N5eOEWdlhRfMeDrQ/pB0R8HwnkJ4W529CYtNWxN0Ha3Wj84K+K+eZwRan7M3x1XgILAEOGPeduBOf8/yfC6sq3jDavU4z7c0UQyeKdBuD9/XPQ+VFiePL4Tfd3v+JdBmFop+CZOClwnHPU8JtPPR8OHAmOd5v0smjkJnE4ZfdxnFXag705lw5MaXpPebuE4DkhaNUBDas+byQeB1B/q7IxWQeaE+D2R3+a2sgExwUYlGL0qaYX5bprstGk4l81Bg7gyK19aUzC7f3WsZbyhcyTS+Cbxe27phOI0XMwUvh8XrCj26hP7M6BuZzEt5ra6a+PdBKLW/ZUHwPkmfFDysIvCRa3sl3+HCU2G3W+8ww2k86POJxv+zS5/pEknrJXX6uyWT6XQ/r3BB0uxSdyLb6WDm0Y7YVUYYrX4mRVyuuw3/HHaGFX7sTQhkubF/5ft5Ghjl4vAo0AEszvRcBFYDXxdvfY0Hj0g60ERC1WGfpDmNHgJ1Iz3oU3bXvaFKOCbp1fDirB2lUOdIZfVZ/wuT3mUPuC6nJpC60glgD7AD+C40h3oAfwNa7pV7zWiHuQAAAABJRU5ErkJggg=="},71:function(e,a,t){e.exports=t.p+"static/media/video.f376af1c.mp4"},72:function(e,a,t){e.exports=t.p+"static/media/poster.32142661.png"},75:function(e,a,t){e.exports=t(112)},80:function(e,a,t){},81:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.d2201562.chunk.js.map