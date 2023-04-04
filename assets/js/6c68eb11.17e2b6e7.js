"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||c[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4,id:"normalizeValues",title:"normalizeValues",sidebar_label:"normalizeValues"},i=void 0,o={unversionedId:"math/normalizeValues",id:"math/normalizeValues",title:"normalizeValues",description:"The normalizeValues() function normalizes an array of numbers so that they fall within a specific range.",source:"@site/docs/math/normalizeValues.md",sourceDirName:"math",slug:"/math/normalizeValues",permalink:"/docs/math/normalizeValues",draft:!1,editUrl:"https://github.com/dev-pengi/utils-core-docs/tree/main/docs/math/normalizeValues.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,id:"normalizeValues",title:"normalizeValues",sidebar_label:"normalizeValues"},sidebar:"tutorialSidebar",previous:{title:"getAverage",permalink:"/docs/math/getAverage"},next:{title:"Time utils",permalink:"/docs/category/time-utils"}},u={},m=[{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Throws",id:"throws",level:3},{value:"Example",id:"example",level:3}],s={toc:m},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"normalizeValues()")," function normalizes an array of numbers so that they fall within a specific range."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"nums")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Array")),(0,a.kt)("td",{parentName:"tr",align:null},"The array of numbers to normalize")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"min")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"The minimum value of the new range, set to 0 by default")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"max")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Number")),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum value of the new range, set to 1 by default")))),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Array"),": The normalized array of numbers")),(0,a.kt)("h3",{id:"throws"},"Throws"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error"),": If the input is not an array or if the array is empty"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Error"),": If min is greater than or equal to max")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"using the default range: ","[0, 1]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst nums = [10, 20, 30, 40, 50];\nconst normalized = utils.math.normalizeValues(nums);\nconsole.log(normalized);\n// output: [0, 0.25, 0.5, 0.75, 1]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"using the range: ","[10, 50]")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const utils = require('utils-core.js');\nconst nums = [10, 20, 30, 40, 50];\nconst min = 10;\nconst max = 50;\nconst normalized = normalizeValues(nums, min, max);\nconsole.log(normalized);\n// output: [10, 18, 26, 34, 42]\n")))}c.isMDXComponent=!0}}]);