import{j as _,d as Z,ar as ze,E as $e,q as B,a4 as Se,a2 as Be,i as p,k as b,a8 as Pe,b2 as ee,B as Te,m as x,l as s,ag as J,x as oe,W as ke,J as Re,K as Ee,s as R,p as He,b3 as _e,a7 as t,aR as E,A as Ie,an as U,G as Ne,b4 as Oe,C as je}from"./app.23ff8517.js";import{c as De,u as Fe,a as Ke,N as Me}from"./Loading.f48b58dd.js";import{u as Ge,c as X}from"./use-rtl.a902c0f4.js";var We=_("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Ve=Z({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ze("-base-wave",We,$e(e,"clsPrefix"));const f=B(null),h=B(!1);let u=null;return Se(()=>{u!==null&&window.clearTimeout(u)}),{active:h,selfRef:f,play(){u!==null&&(window.clearTimeout(u),h.value=!1,u=null),Be(()=>{var v;(v=f.value)===null||v===void 0||v.offsetHeight,h.value=!0,u=window.setTimeout(()=>{h.value=!1,u=null},1e3)})}}},render(){const{clsPrefix:e}=this;return p("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}});const{cubicBezierEaseInOut:C}=Pe;function qe({duration:e=".2s",delay:f=".1s"}={}){return[b("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),b("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),b("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C},
 max-width ${e} ${C} ${f},
 margin-left ${e} ${C} ${f},
 margin-right ${e} ${C} ${f};
 `),b("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${C} ${f},
 max-width ${e} ${C},
 margin-left ${e} ${C},
 margin-right ${e} ${C};
 `)]}function $(e){return ee(e,[255,255,255,.16])}function H(e){return ee(e,[0,0,0,.12])}const Qe=Te("n-button-group");var Ae=b([_("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("color",[s("border",{borderColor:"var(--n-border-color)"}),x("disabled",[s("border",{borderColor:"var(--n-border-color-disabled)"})]),J("disabled",[b("&:focus",[s("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[s("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[s("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[s("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[s("border",{border:"var(--n-border-disabled)"})]),J("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[s("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[s("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[s("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[s("state-border",{border:"var(--n-border-pressed)"})])]),x("loading",{"pointer-events":"none"}),_("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),typeof window!="undefined"&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,s("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),s("border",{border:"var(--n-border)"}),s("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),s("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[_("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[De({top:"50%",originalTransform:"translateY(-50%)"})]),qe()]),s("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[b("~",[s("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[s("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const Le=Object.assign(Object.assign({},oe.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],internalAutoFocus:Boolean}),Ye=Z({name:"Button",props:Le,setup(e){const f=B(null),h=B(null),u=B(!1);ke(()=>{const{value:r}=f;r&&!e.disabled&&e.focusable&&e.internalAutoFocus&&r.focus({preventScroll:!0})});const v=Re(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),re=Ee(Qe,{}),{mergedSizeRef:I}=Fe({},{defaultSize:"medium",mergedSize:r=>{const{size:d}=e;if(d)return d;const{size:y}=re;if(y)return y;const{mergedSize:o}=r||{};return o?o.value:"medium"}}),V=R(()=>e.focusable&&!e.disabled),te=r=>{var d;r.preventDefault(),!e.disabled&&V.value&&((d=f.value)===null||d===void 0||d.focus({preventScroll:!0}))},ne=r=>{var d;if(!e.disabled&&!e.loading){const{onClick:y}=e;y&&je(y,r),e.text||(d=h.value)===null||d===void 0||d.play()}},ae=r=>{switch(r.code){case"Enter":case"NumpadEnter":if(!e.keyboard)return;u.value=!1}},ie=r=>{switch(r.code){case"Enter":case"NumpadEnter":if(!e.keyboard||e.loading){r.preventDefault();return}u.value=!0}},le=()=>{u.value=!1},{inlineThemeDisabled:q,mergedClsPrefixRef:N,mergedRtlRef:se}=He(e),de=oe("Button","-button",Ae,_e,e,N),ce=Ge("Button",se,N),Q=R(()=>{const r=de.value,{common:{cubicBezierEaseInOut:d,cubicBezierEaseOut:y},self:o}=r,{rippleDuration:O,opacityDisabled:P,fontWeight:j,fontWeightStrong:D}=o,m=I.value,{dashed:F,type:w,ghost:K,text:g,color:a,round:A,circle:M,textColor:z,secondary:ue,tertiary:L,quaternary:be,strong:fe}=e,he={"font-weight":fe?D:j};let i={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const T=w==="tertiary",Y=w==="default",n=T?"default":w;if(g){const l=z||a,c=l||o[t("textColorText",n)];i={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":c,"--n-text-color-hover":l?$(l):o[t("textColorTextHover",n)],"--n-text-color-pressed":l?H(l):o[t("textColorTextPressed",n)],"--n-text-color-focus":l?$(l):o[t("textColorTextHover",n)],"--n-text-color-disabled":l||o[t("textColorTextDisabled",n)]}}else if(K||F){const l=z||a;i={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":a||o[t("rippleColor",n)],"--n-text-color":l||o[t("textColorGhost",n)],"--n-text-color-hover":l?$(l):o[t("textColorGhostHover",n)],"--n-text-color-pressed":l?H(l):o[t("textColorGhostPressed",n)],"--n-text-color-focus":l?$(l):o[t("textColorGhostHover",n)],"--n-text-color-disabled":l||o[t("textColorGhostDisabled",n)]}}else if(ue){const l=Y?o.textColor:T?o.textColorTertiary:o[t("color",n)],c=a||l,k=w!=="default"&&w!=="tertiary";i={"--n-color":k?E(c,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":k?E(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":k?E(c,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":k?E(c,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":c,"--n-text-color-hover":c,"--n-text-color-pressed":c,"--n-text-color-focus":c,"--n-text-color-disabled":c}}else if(L||be){const l=Y?o.textColor:T?o.textColorTertiary:o[t("color",n)],c=a||l;L?(i["--n-color"]=o.colorTertiary,i["--n-color-hover"]=o.colorTertiaryHover,i["--n-color-pressed"]=o.colorTertiaryPressed,i["--n-color-focus"]=o.colorSecondaryHover,i["--n-color-disabled"]=o.colorTertiary):(i["--n-color"]=o.colorQuaternary,i["--n-color-hover"]=o.colorQuaternaryHover,i["--n-color-pressed"]=o.colorQuaternaryPressed,i["--n-color-focus"]=o.colorQuaternaryHover,i["--n-color-disabled"]=o.colorQuaternary),i["--n-ripple-color"]="#0000",i["--n-text-color"]=c,i["--n-text-color-hover"]=c,i["--n-text-color-pressed"]=c,i["--n-text-color-focus"]=c,i["--n-text-color-disabled"]=c}else i={"--n-color":a||o[t("color",n)],"--n-color-hover":a?$(a):o[t("colorHover",n)],"--n-color-pressed":a?H(a):o[t("colorPressed",n)],"--n-color-focus":a?$(a):o[t("colorFocus",n)],"--n-color-disabled":a||o[t("colorDisabled",n)],"--n-ripple-color":a||o[t("rippleColor",n)],"--n-text-color":z||(a?o.textColorPrimary:T?o.textColorTertiary:o[t("textColor",n)]),"--n-text-color-hover":z||(a?o.textColorHoverPrimary:o[t("textColorHover",n)]),"--n-text-color-pressed":z||(a?o.textColorPressedPrimary:o[t("textColorPressed",n)]),"--n-text-color-focus":z||(a?o.textColorFocusPrimary:o[t("textColorFocus",n)]),"--n-text-color-disabled":z||(a?o.textColorDisabledPrimary:o[t("textColorDisabled",n)])};let G={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};g?G={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:G={"--n-border":o[t("border",n)],"--n-border-hover":o[t("borderHover",n)],"--n-border-pressed":o[t("borderPressed",n)],"--n-border-focus":o[t("borderFocus",n)],"--n-border-disabled":o[t("borderDisabled",n)]};const{[t("height",m)]:W,[t("fontSize",m)]:ve,[t("padding",m)]:pe,[t("paddingRound",m)]:me,[t("iconSize",m)]:xe,[t("borderRadius",m)]:ye,[t("iconMargin",m)]:ge,waveOpacity:Ce}=o,we={"--n-width":M&&!g?W:"initial","--n-height":g?"initial":W,"--n-font-size":ve,"--n-padding":M||g?"initial":A?me:pe,"--n-icon-size":xe,"--n-icon-margin":ge,"--n-border-radius":g?"initial":M||A?W:ye};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":d,"--n-bezier-ease-out":y,"--n-ripple-duration":O,"--n-opacity-disabled":P,"--n-wave-opacity":Ce},he),i),G),we)}),S=q?Ie("button",R(()=>{let r="";const{dashed:d,type:y,ghost:o,text:O,color:P,round:j,circle:D,textColor:m,secondary:F,tertiary:w,quaternary:K,strong:g}=e;d&&(r+="a"),o&&(r+="b"),O&&(r+="c"),j&&(r+="d"),D&&(r+="e"),F&&(r+="f"),w&&(r+="g"),K&&(r+="h"),g&&(r+="i"),P&&(r+="j"+X(P)),m&&(r+="k"+X(m));const{value:a}=I;return r+="l"+a[0],r+="m"+y[0],r}),Q,e):void 0;return{selfElRef:f,waveElRef:h,mergedClsPrefix:N,mergedFocusable:V,mergedSize:I,showBorder:v,enterPressed:u,rtlEnabled:ce,handleMousedown:te,handleKeydown:ie,handleBlur:le,handleKeyup:ae,handleClick:ne,customColorCssVars:R(()=>{const{color:r}=e;if(!r)return null;const d=$(r);return{"--n-border-color":r,"--n-border-color-hover":d,"--n-border-color-pressed":H(r),"--n-border-color-focus":d,"--n-border-color-disabled":r}}),cssVars:q?void 0:Q,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender}},render(){const{mergedClsPrefix:e,tag:f,onRender:h}=this;h==null||h();const u=U(this.$slots.default,v=>v&&p("span",{class:`${e}-button__content`},v));return p(f,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&u,p(Ne,{width:!0},{default:()=>U(this.$slots.icon,v=>(this.loading||v)&&p("span",{class:`${e}-button__icon`,style:{margin:Oe(this.$slots.default)?"0":""}},p(Ke,null,{default:()=>this.loading?p(Me,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):p("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},v)})))}),this.iconPlacement==="left"&&u,this.text?null:p(Ve,{ref:"waveElRef",clsPrefix:e}),this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?p("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}});var Ze=Ye;export{Ze as _};
