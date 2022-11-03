import{aO as de,d as j,K as he,a5 as ue,i as d,j as O,k as p,m as k,ar as be,E as _,M as fe,aP as Ce,aQ as ve,aR as a,l as x,ag as y,q as ge,p as pe,x as A,z as ke,s as T,a7 as f,A as me,an as xe,B as ye,C as Pe}from"./app.bab9285b.js";import{u as Re,c as I}from"./use-rtl.a8b01440.js";function Se(e,r,o){var c=-1,l=e.length;r<0&&(r=-r>l?0:l+r),o=o>l?l:o,o<0&&(o+=l),l=r>o?0:o-r>>>0,r>>>=0;for(var n=Array(l);++c<l;)n[c]=e[c+r];return n}function ze(e,r,o){var c=e.length;return o=o===void 0?c:o,!r&&o>=c?e:Se(e,r,o)}var $e="\\ud800-\\udfff",Me="\\u0300-\\u036f",He="\\ufe20-\\ufe2f",Le="\\u20d0-\\u20ff",Be=Me+He+Le,je="\\ufe0e\\ufe0f",we="\\u200d",Ee=RegExp("["+we+$e+Be+je+"]");function F(e){return Ee.test(e)}function Te(e){return e.split("")}var U="\\ud800-\\udfff",Ie="\\u0300-\\u036f",Oe="\\ufe20-\\ufe2f",_e="\\u20d0-\\u20ff",Ae=Ie+Oe+_e,Fe="\\ufe0e\\ufe0f",Ue="["+U+"]",L="["+Ae+"]",B="\\ud83c[\\udffb-\\udfff]",We="(?:"+L+"|"+B+")",W="[^"+U+"]",V="(?:\\ud83c[\\udde6-\\uddff]){2}",N="[\\ud800-\\udbff][\\udc00-\\udfff]",Ve="\\u200d",K=We+"?",D="["+Fe+"]?",Ne="(?:"+Ve+"(?:"+[W,V,N].join("|")+")"+D+K+")*",Ke=D+K+Ne,De="(?:"+[W+L+"?",L,V,N,Ue].join("|")+")",qe=RegExp(B+"(?="+B+")|"+De+Ke,"g");function Je(e){return e.match(qe)||[]}function Ze(e){return F(e)?Je(e):Te(e)}function Qe(e){return function(r){r=de(r);var o=F(r)?Ze(r):void 0,c=o?o[0]:r.charAt(0),l=o?ze(o,1).join(""):r.slice(1);return c[e]()+l}}var Ge=Qe("toUpperCase"),Xe=Ge;function Ye(e,r){return j({name:Xe(e),setup(){var o;const c=(o=he(ue,null))===null||o===void 0?void 0:o.mergedIconsRef;return()=>{var l;const n=(l=c==null?void 0:c.value)===null||l===void 0?void 0:l[e];return n?n():r}}})}var eo=Ye("close",d("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},d("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},d("g",{fill:"currentColor","fill-rule":"nonzero"},d("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),oo=O("base-close",`
 cursor: pointer;
 color: var(--n-close-color);
`,[p("&:hover",{color:"var(--n-close-color-hover)"}),p("&:active",{color:"var(--n-close-color-pressed)"}),k("disabled",{cursor:"not-allowed!important",color:"var(--n-close-color-disabled)"})]),ro=j({name:"BaseClose",props:{clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},onClick:Function},setup(e){return be("-base-close",oo,_(e,"clsPrefix")),()=>{const{clsPrefix:r,disabled:o}=e;return d(fe,{role:"button",ariaDisabled:o,ariaLabel:"close",clsPrefix:r,class:[`${r}-base-close`,o&&`${r}-base-close--disabled`],onClick:o?void 0:e.onClick},{default:()=>d(eo,null)})}}});const lo=e=>{const{textColor2:r,primaryColorHover:o,primaryColorPressed:c,primaryColor:l,infoColor:n,successColor:h,warningColor:i,errorColor:C,baseColor:P,borderColor:R,opacityDisabled:m,tagColor:v,closeColor:s,closeColorHover:t,closeColorPressed:g,borderRadiusSmall:u,fontSizeTiny:b,fontSizeSmall:S,fontSizeMedium:z,heightTiny:$,heightSmall:M,heightMedium:H}=e;return Object.assign(Object.assign({},ve),{heightSmall:$,heightMedium:M,heightLarge:H,borderRadius:u,opacityDisabled:m,fontSizeSmall:b,fontSizeMedium:S,fontSizeLarge:z,textColorCheckable:r,textColorHoverCheckable:o,textColorPressedCheckable:c,textColorChecked:P,colorCheckable:"#0000",colorHoverCheckable:"#0000",colorPressedCheckable:"#0000",colorChecked:l,colorCheckedHover:o,colorCheckedPressed:c,border:`1px solid ${R}`,textColor:r,color:v,closeColor:s,closeColorHover:t,closeColorPressed:g,borderPrimary:`1px solid ${a(l,{alpha:.3})}`,textColorPrimary:l,colorPrimary:a(l,{alpha:.1}),closeColorPrimary:a(l,{alpha:.75}),closeColorHoverPrimary:a(l,{alpha:.6}),closeColorPressedPrimary:a(l,{alpha:.9}),borderInfo:`1px solid ${a(n,{alpha:.3})}`,textColorInfo:n,colorInfo:a(n,{alpha:.1}),closeColorInfo:a(n,{alpha:.75}),closeColorHoverInfo:a(n,{alpha:.6}),closeColorPressedInfo:a(n,{alpha:.9}),borderSuccess:`1px solid ${a(h,{alpha:.3})}`,textColorSuccess:h,colorSuccess:a(h,{alpha:.1}),closeColorSuccess:a(h,{alpha:.75}),closeColorHoverSuccess:a(h,{alpha:.6}),closeColorPressedSuccess:a(h,{alpha:.9}),borderWarning:`1px solid ${a(i,{alpha:.35})}`,textColorWarning:i,colorWarning:a(i,{alpha:.12}),closeColorWarning:a(i,{alpha:.75}),closeColorHoverWarning:a(i,{alpha:.6}),closeColorPressedWarning:a(i,{alpha:.9}),borderError:`1px solid ${a(C,{alpha:.23})}`,textColorError:C,colorError:a(C,{alpha:.08}),closeColorError:a(C,{alpha:.65}),closeColorHoverError:a(C,{alpha:.5}),closeColorPressedError:a(C,{alpha:.8})})},ao={name:"Tag",common:Ce,self:lo};var co=ao,so={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},no=O("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("avatar",`
 display: flex;
 margin-right: 6px;
 `),x("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 cursor: pointer;
 `),k("round",`
 padding: 0 calc(var(--n-height) / 2);
 border-radius: calc(var(--n-height) / 2);
 `,[x("avatar",`
 margin-left: calc((var(--n-height) - 8px) / -2);
 `)]),k("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),k("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[y("disabled",[p("&:hover","background-color: var(--n-color-hover-checkable);",[y("checked","color: var(--n-text-color-hover-checkable);")]),p("&:active","background-color: var(--n-color-pressed-checkable);",[y("checked","color: var(--n-text-color-pressed-checkable);")])]),k("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[y("disabled",[p("&:hover","background-color: var(--n-color-checked-hover);"),p("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const to=Object.assign(Object.assign(Object.assign({},A.props),so),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),io=ye("n-tag");var bo=j({name:"Tag",props:to,setup(e){const r=ge(null),{mergedBorderedRef:o,mergedClsPrefixRef:c,inlineThemeDisabled:l,mergedRtlRef:n}=pe(e),h=A("Tag","-tag",no,co,e,c);ke(io,{roundRef:_(e,"round")});function i(s){if(!e.disabled&&e.checkable){const{checked:t,onCheckedChange:g,onUpdateChecked:u,"onUpdate:checked":b}=e;u&&u(!t),b&&b(!t),g&&g(!t)}}function C(s){if(e.internalStopClickPropagation&&s.stopPropagation(),!e.disabled){const{onClose:t}=e;t&&Pe(t,s)}}const P={setTextContent(s){const{value:t}=r;t&&(t.textContent=s)}},R=Re("Tag",n,c),m=T(()=>{const{type:s,size:t,color:{color:g,textColor:u}={}}=e,{common:{cubicBezierEaseInOut:b},self:{padding:S,closeMargin:z,closeMarginRtl:$,borderRadius:M,opacityDisabled:H,textColorCheckable:q,textColorHoverCheckable:J,textColorPressedCheckable:Z,textColorChecked:Q,colorCheckable:G,colorHoverCheckable:X,colorPressedCheckable:Y,colorChecked:ee,colorCheckedHover:oe,colorCheckedPressed:re,[f("closeSize",t)]:le,[f("fontSize",t)]:ae,[f("height",t)]:w,[f("color",s)]:ce,[f("textColor",s)]:se,[f("border",s)]:ne,[f("closeColor",s)]:E,[f("closeColorHover",s)]:te,[f("closeColorPressed",s)]:ie}}=h.value;return{"--n-avatar-size-override":`calc(${w} - 8px)`,"--n-bezier":b,"--n-border-radius":M,"--n-border":ne,"--n-close-color":E,"--n-close-color-hover":te,"--n-close-color-pressed":ie,"--n-close-color-disabled":E,"--n-close-margin":z,"--n-close-margin-rtl":$,"--n-close-size":le,"--n-color":g||ce,"--n-color-checkable":G,"--n-color-checked":ee,"--n-color-checked-hover":oe,"--n-color-checked-pressed":re,"--n-color-hover-checkable":X,"--n-color-pressed-checkable":Y,"--n-font-size":ae,"--n-height":w,"--n-opacity-disabled":H,"--n-padding":S,"--n-text-color":u||se,"--n-text-color-checkable":q,"--n-text-color-checked":Q,"--n-text-color-hover-checkable":J,"--n-text-color-pressed-checkable":Z}}),v=l?me("tag",T(()=>{let s="";const{type:t,size:g,color:{color:u,textColor:b}={}}=e;return s+=t[0],s+=g[0],u&&(s+=`a${I(u)}`),b&&(s+=`b${I(b)}`),s}),m,e):void 0;return Object.assign(Object.assign({},P),{rtlEnabled:R,mergedClsPrefix:c,contentRef:r,mergedBordered:o,handleClick:i,handleCloseClick:C,cssVars:l?void 0:m,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var e,r;const{mergedClsPrefix:o,rtlEnabled:c,color:{borderColor:l}={},onRender:n,$slots:h}=this;return n==null||n(),d("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:c,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:this.round}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},xe(h.avatar,i=>i&&d("div",{class:`${o}-tag__avatar`},i)),d("span",{class:`${o}-tag__content`,ref:"contentRef"},(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e)),!this.checkable&&this.closable?d(ro,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick}):null,!this.checkable&&this.mergedBordered?d("div",{class:`${o}-tag__border`,style:{borderColor:l}}):null)}});export{bo as N,Ye as r,io as t};
