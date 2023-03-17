"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[9279],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,b=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7984:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(3117),i=r(102),a=(r(7294),r(3905)),o=["components"],c={sidebar_position:5},l="webapi\u67e5\u8be2\u9065\u6d4b",s={unversionedId:"tutorial-basics/webapi",id:"tutorial-basics/webapi",title:"webapi\u67e5\u8be2\u9065\u6d4b",description:"\u6d4f\u89c8\u5668\u8bbf\u95ee http5000/swagger/index.html",source:"@site/docs/tutorial-basics/webapi.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/webapi",permalink:"/docs/tutorial-basics/webapi",editUrl:"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/tutorial-basics/webapi.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u67e5\u8be2\u9065\u6d4b\u6e90\u6570\u636e?",permalink:"/docs/tutorial-basics/influxdb"},next:{title:"\u9065\u6d4b\u6570\u636e\u805a\u5408",permalink:"/docs/tutorial-basics/aggregate"}},p={},u=[{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u8ba4\u8bc1",id:"\u8ba4\u8bc1",level:2},{value:"\u83b7\u53d6\u8bbe\u5907id",id:"\u83b7\u53d6\u8bbe\u5907id",level:2},{value:"\u83b7\u53d6\u8bbe\u5907\u6700\u65b0\u9065\u6d4b\u6570\u636e",id:"\u83b7\u53d6\u8bbe\u5907\u6700\u65b0\u9065\u6d4b\u6570\u636e",level:2}],d={toc:u};function f(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webapi\u67e5\u8be2\u9065\u6d4b"},"webapi\u67e5\u8be2\u9065\u6d4b"),(0,a.kt)("p",null,"\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000/swagger/index.html")),(0,a.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u767b\u5f55",src:r(5531).Z,width:"1767",height:"732"}),"\n\u590d\u5236\u8fd4\u56de\u7684access_token"),(0,a.kt)("h2",{id:"\u8ba4\u8bc1"},"\u8ba4\u8bc1"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u8ba4\u8bc1",src:r(9140).Z,width:"1827",height:"573"})),(0,a.kt)("h2",{id:"\u83b7\u53d6\u8bbe\u5907id"},"\u83b7\u53d6\u8bbe\u5907id"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u83b7\u53d6\u8bbe\u5907id",src:r(2476).Z,width:"1856",height:"700"})),(0,a.kt)("h2",{id:"\u83b7\u53d6\u8bbe\u5907\u6700\u65b0\u9065\u6d4b\u6570\u636e"},"\u83b7\u53d6\u8bbe\u5907\u6700\u65b0\u9065\u6d4b\u6570\u636e"),(0,a.kt)("p",null,"\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"/api/Devices/{deviceId}/TelemetryLatest")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u83b7\u53d6\u8bbe\u5907\u6700\u65b0\u9065\u6d4b\u6570\u636e",src:r(3448).Z,width:"925",height:"728"})))}f.isMDXComponent=!0},9140:function(e,t,r){t.Z=r.p+"assets/images/webapi-auth-73594c8c12e02cda064fbc3951cd1b61.png"},2476:function(e,t,r){t.Z=r.p+"assets/images/webapi-deviceid-5223885e30d86838039f6a61712897ab.png"},5531:function(e,t,r){t.Z=r.p+"assets/images/webapi-login-ef6d8bf641a55def49b048980a914b2c.png"},3448:function(e,t,r){t.Z=r.p+"assets/images/webapi-telemetry-f0eebf2f9d8e0c1b272778096afa8db6.png"}}]);