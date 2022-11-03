import{K as p,z as b,s as c,a4 as v,B as k,d as h,aA as y,i as a,ad as _,k as d,a8 as $,j as x,l as n,ar as B,E as I}from"./app.bab9285b.js";const g=k("n-form-item");function T(e,{defaultSize:r="medium",mergedSize:o,mergedDisabled:s}={}){const t=p(g,null);b(g,null);const i=c(o?()=>o(t):()=>{const{size:l}=e;if(l)return l;if(t){const{mergedSize:f}=t;if(f.value!==void 0)return f.value}return r}),u=c(s?()=>s(t):()=>{const{disabled:l}=e;return l!==void 0?l:t?t.disabled.value:!1}),w=c(()=>{const{status:l}=e;return l||(t==null?void 0:t.mergedValidationStatus.value)});return v(()=>{t&&t.restoreValidation()}),{mergedSizeRef:i,mergedDisabledRef:u,mergedStatusRef:w,nTriggerFormBlur(){t&&t.handleContentBlur()},nTriggerFormChange(){t&&t.handleContentChange()},nTriggerFormFocus(){t&&t.handleContentFocus()},nTriggerFormInput(){t&&t.handleContentInput()}}}var C=h({name:"BaseIconSwitchTransition",setup(e,{slots:r}){const o=y();return()=>a(_,{name:"icon-switch-transition",appear:o.value},r)}});const{cubicBezierEaseInOut:z}=$;function m({originalTransform:e="",left:r=0,top:o=0,transition:s=`all .3s ${z} !important`}={}){return[d("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:r,top:o,opacity:0}),d("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:r,top:o,opacity:1}),d("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:r,top:o,transition:s})]}var S=d([d("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),d("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),d("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),d("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),x("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[n("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[m()]),n("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[n("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),n("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[n("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[n("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),n("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[n("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),n("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[n("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),n("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[m({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),N=h({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(e){B("-base-loading",S,I(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:r,strokeWidth:o,stroke:s,scale:t}=this,i=r/t;return a("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},a(C,null,{default:()=>this.show?a("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},a("div",{class:`${e}-base-loading__container`},a("div",{class:`${e}-base-loading__container-layer`},a("div",{class:`${e}-base-loading__container-layer-left`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:i,cy:i,r:r-o/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),a("div",{class:`${e}-base-loading__container-layer-patch`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:i,cy:i,r:r-o/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),a("div",{class:`${e}-base-loading__container-layer-right`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:s}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:i,cy:i,r:r-o/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r})))))):a("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});export{N,C as a,m as c,T as u};
