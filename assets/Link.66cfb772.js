import{B as Q,j as m,aS as X,k as _,aT as Y,l as p,d as E,p as G,q as C,K as W,s as y,x as D,b5 as te,ak as ne,a7 as re,A as q,i as n,an as oe,$ as ie,m as ae,b6 as le,z as se,L as de,b7 as ce,S as M,o as w,e as B,a as f,Q as ue,g as d,w as i,u as R,T as K,b as S,N as he,b8 as fe,c as N,t as L,b9 as ge}from"./app.a2a576ac.js";import{t as me}from"./Tag.a93d45ee.js";import{c as ve}from"./use-rtl.2bcb47d4.js";import{_ as _e}from"./Space.a9d59bdb.js";const pe=Q("n-avatar-group");var be=m("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[X(_("&","--n-merged-color: var(--n-color-modal);")),Y(_("&","--n-merged-color: var(--n-color-popover);")),_("img",`
 width: 100%;
 height: 100%;
 `),p("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),m("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),p("text","line-height: 1.25")]);const xe=Object.assign(Object.assign({},D.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var we=E({name:"Avatar",props:xe,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:l}=G(t),c=C(!1);let u=null;const a=C(null),h=C(null),v=()=>{const{value:o}=a;if(o&&(u===null||u!==o.innerHTML)){u=o.innerHTML;const{value:g}=h;if(g){const{offsetWidth:A,offsetHeight:$}=g,{offsetWidth:x,offsetHeight:I}=o,T=.9,H=Math.min(A/x*T,$/I*T,1);o.style.transform=`translateX(-50%) translateY(-50%) scale(${H})`}}},r=W(pe,null),k=y(()=>{const{size:o}=t;if(o)return o;const{size:g}=r||{};return g||"medium"}),z=D("Avatar","-avatar",be,te,t,e),F=W(me,null),s=y(()=>{if(r)return!0;const{round:o,circle:g}=t;return o!==void 0||g!==void 0?o||g:F?F.roundRef.value:!1}),b=y(()=>r?!0:t.bordered||!1),O=o=>{c.value=!0;const{onError:g}=t;g&&g(o)};ne(()=>t.src,()=>c.value=!1);const P=y(()=>{const o=k.value,g=s.value,A=b.value,{color:$}=t,{self:{borderRadius:x,fontSize:I,color:T,border:H,colorModal:U,colorPopover:Z},common:{cubicBezierEaseInOut:ee}}=z.value;let V;return typeof o=="number"?V=`${o}px`:V=z.value.self[re("height",o)],{"--n-font-size":I,"--n-border":A?H:"none","--n-border-radius":g?"50%":x,"--n-color":$||T,"--n-color-modal":$||U,"--n-color-popover":$||Z,"--n-bezier":ee,"--n-merged-size":`var(--n-avatar-size-override, ${V})`}}),j=l?q("avatar",y(()=>{const o=k.value,g=s.value,A=b.value,{color:$}=t;let x="";return o&&(typeof o=="number"?x+=`a${o}`:x+=o[0]),g&&(x+="b"),A&&(x+="c"),$&&(x+=ve($)),x}),P,t):void 0;return{textRef:a,selfRef:h,mergedRoundRef:s,mergedClsPrefix:e,fitTextTransform:v,cssVars:l?void 0:P,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender,hasLoadError:c,handleError:O}},render(){const{$slots:t,src:e,mergedClsPrefix:l,onRender:c}=this;c==null||c();let u;return this.hasLoadError?u=n("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):u=oe(t.default,a=>{if(a)return n(ie,{onResize:this.fitTextTransform},{default:()=>n("span",{ref:"textRef",class:`${l}-avatar__text`},a)});if(e)return n("img",{src:e,onError:this.handleError,style:{objectFit:this.objectFit}})}),n("span",{ref:"selfRef",class:[`${l}-avatar`,this.themeClass],style:this.cssVars},u)}}),Ce=_([m("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color)
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[ae("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[m("list-item",`
 padding: 12px 20px;
 `,[_("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),p("header, footer",`
 padding: 12px 20px;
 `,[_("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),p("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[_("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),m("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[p("prefix",`
 margin-right: 20px;
 flex: 0;
 `),p("suffix",`
 margin-left: 20px;
 flex: 0;
 `),p("main",`
 flex: 1;
 `),_("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),X(m("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),Y(m("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const ke=Object.assign(Object.assign({},D.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),J=Q("n-list");var ze=E({name:"List",props:ke,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:l}=G(t),c=D("List","-list",Ce,le,t,e);se(J,{mergedClsPrefixRef:e});const u=y(()=>{const{common:{cubicBezierEaseInOut:h},self:{fontSize:v,textColor:r,color:k,colorModal:z,colorPopover:F,borderColor:s,borderColorModal:b,borderColorPopover:O,borderRadius:P}}=c.value;return{"--n-font-size":v,"--n-bezier":h,"--n-text-color":r,"--n-color":k,"--n-border-radius":P,"--n-border-color":s,"--n-border-color-modal":b,"--n-border-color-popover":O,"--n-color-modal":z,"--n-color-popover":F}}),a=l?q("list",void 0,u,t):void 0;return{mergedClsPrefix:e,cssVars:l?void 0:u,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var t;const{$slots:e,mergedClsPrefix:l,onRender:c}=this;return c==null||c(),n("ul",{class:[`${l}-list`,this.bordered&&`${l}-list--bordered`,this.themeClass],style:this.cssVars},e.header?n("div",{class:`${l}-list__header`},e.header()):null,(t=e.default)===null||t===void 0?void 0:t.call(e),e.footer?n("div",{class:`${l}-list__footer`},e.footer()):null)}}),Fe=E({name:"ListItem",setup(){const t=W(J,null);return t||de("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:e}=this;return n("li",{class:`${e}-list-item`},t.prefix?n("div",{class:`${e}-list-item__prefix`},t.prefix()):null,t.default?n("div",{class:`${e}-list-item__main`},t):null,t.suffix?n("div",{class:`${e}-list-item__suffix`},t.suffix()):null)}}),$e=m("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[m("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),m("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[m("thing-header-wrapper",`
 flex: 1;
 `)]),m("thing-main",`
 flex-grow: 1;
 `,[m("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[p("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),p("description",[_("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),p("content",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)]),p("footer",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)]),p("action",[_("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const Ee=Object.assign(Object.assign({},D.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var ye=E({name:"Thing",props:Ee,setup(t,{slots:e}){const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=G(t),u=D("Thing","-thing",$e,ce,t,l),a=y(()=>{const{self:{titleTextColor:v,textColor:r,titleFontWeight:k,fontSize:z},common:{cubicBezierEaseInOut:F}}=u.value;return{"--n-bezier":F,"--n-font-size":z,"--n-text-color":r,"--n-title-font-weight":k,"--n-title-text-color":v}}),h=c?q("thing",void 0,a,t):void 0;return()=>{var v;const{value:r}=l;return(v=h==null?void 0:h.onRender)===null||v===void 0||v.call(h),n("div",{class:[`${r}-thing`,h==null?void 0:h.themeClass],style:c?void 0:a.value},e.avatar&&t.contentIndented?n("div",{class:`${r}-thing-avatar`},e.avatar()):null,n("div",{class:`${r}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?n("div",{class:`${r}-thing-avatar-header-wrapper`},e.avatar?n("div",{class:`${r}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?n("div",{class:`${r}-thing-header-wrapper`},n("div",{class:`${r}-thing-header`},e.header||t.title?n("div",{class:`${r}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?n("div",{class:`${r}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?n("div",{class:`${r}-thing-main__description`},e.description?e.description():t.description):null):null):n(M,null,e.header||t.title||e["header-extra"]||t.titleExtra?n("div",{class:`${r}-thing-header`},e.header||t.title?n("div",{class:`${r}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?n("div",{class:`${r}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?n("div",{class:`${r}-thing-main__description`},e.description?e.description():t.description):null),e.default||t.content?n("div",{class:`${r}-thing-main__content`},e.default?e.default():t.content):null,e.footer?n("div",{class:`${r}-thing-main__footer`},e.footer()):null,e.action?n("div",{class:`${r}-thing-main__action`},e.action()):null))}}});const Be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},je=f("path",{d:"M208 352h-64a96 96 0 0 1 0-192h64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),Re=f("path",{d:"M304 160h64a96 96 0 0 1 0 192h-64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36"},null,-1),Le=f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"36",d:"M163.29 256h187.42"},null,-1),Se=[je,Re,Le];var De=E({name:"LinkOutline",render:function(e,l){return w(),B("svg",Be,Se)}});const Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Pe=f("path",{d:"M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Te=f("path",{d:"M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Me=f("path",{d:"M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Oe=f("path",{d:"M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Ie=[Pe,Te,Me,Oe];var He=E({name:"PeopleOutline",render:function(e,l){return w(),B("svg",Ae,Ie)}});const Ve={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ke=f("path",{d:"M480 208H308L256 48l-52 160H32l140 96l-54 160l138-100l138 100l-54-160z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ne=[Ke];var We=E({name:"StarOutline",render:function(e,l){return w(),B("svg",Ve,Ne)}});const Ge={class:"articalPage"},qe=S("\u53CB\u94FE "),Qe=["href"],Xe=S("\u5355\u94FE "),Ye=["href"],Je=f("br",null,null,-1),Ue={class:"n-list__header"},Ze=S("\u7D20\u6750 "),et=f("br",null,null,-1),tt=f("div",null,"\u6536\u85CF\u559C\u6B22\u7684\u535A\u5BA2\uFF0C\u6253\u6270\u62B1\u6B49..\u968F\u65F6\u4F1A\u53D6\u6D88\u3002\u57FA\u672C\u90FD\u662F\u6211\u7684\u5E08\u5085\u4EEC",-1),nt=f("br",null,null,-1),rt=["href"],st=E({setup(t){C(!0),C(!0),C(!0),C(!0),C(!0),C(!0);const e=ue({frdLink:[{title:"EKsumic",icon:"https://www.v2know.com/images/head.jpg",blog:"https://www.v2know.com/",desc:"\u77E5\u8BC6\u5E93\uFF0C\u5565\u90FD\u6709"},{title:"Snowneko",icon:"https://cdn.jsdelivr.net/gh/cutemoe/moepic/img/cover/toutu.jpg",blog:"https://www.snowneko.com",desc:"\u613F\u68A6\u5883\u822C\u7684\u767D\u96EA\u6C38\u4E0D\u878D\u5316"},{title:"\u5B64\u6597",icon:"https://yongchinblog.oss-cn-chengdu.aliyuncs.com/%E5%9B%BE%E7%89%87/%E5%A4%B4%E5%83%8F/gdLogo.png",blog:"http://d-d.design",desc:"\u505A\u81EA\u5DF1\uFF0C\u4E0D\u96A8\u6CE2\u9010\u6D41\uFF0C\u4E0D\u59A5\u5354"}],oneWayLink:[{title:"Randy",icon:"https://lutaonan.com/favicon.ico",blog:"https://lutaonan.com/",desc:""},{title:"\u81F4\u90C1\u7CFB",icon:"https://www.juroku.net/favicon.ico",blog:"https://www.juroku.net",desc:"\u9875\u9762\u8D85\u6696\u7684\u535A\u5BA2"},{title:"Lionad",icon:"https://cdn.jsdelivr.net/gh/Lionad-Morotar/blog-cdn/image/avatar.gif",blog:"https://mgear-blogs.obs-website.cn-east-3.myhuaweicloud.com/",desc:"\u6280\u672F\u4F6C\uFF0C\u9996\u9875\u597D\u770B\u6709\u521B\u610F"},{title:"\u7948\u91CC Inori",icon:"https://gravatar.loli.net/avatar/b4dda1918d17c844ea38a31c21736459?s=80&r=G&d=",blog:"https://www.iinorii.com/",desc:"\u3044\u3064\u306E\u9593\u306B"}],pubLink:[{title:"emoji",icon:"https://emojipedia.org/static/img/logo/emojipedia-logo-32@2x.01231d205899.png",addr:"https://getemoji.com/",desc:"\u2702\uFE0F Copy and \u{1F4CB} Paste Emoji \u{1F44D}"},{title:"Font Awesome",icon:"https://fontawesome.dashgame.com/assets/ico/favicon.ico",addr:"https://fontawesome.dashgame.com/",desc:"\u4E00\u5957\u7EDD\u4F73\u7684\u56FE\u6807\u5B57\u4F53\u5E93\u548CCSS\u6846\u67B6"},{title:"\u3075\u308F\u3075\u308F\u3002\u308A",icon:"",addr:"http://fuwa2li.websozai.jp",desc:"\u30D1\u30BD\u30B3\u30F3\u3067\u63CF\u3044\u305F\u30A4\u30E9\u30B9\u30C8/\u7121\u6599"}]});return(l,c)=>{const u=he,a=_e,h=we,v=Fe,r=ze,k=ye,z=ge,F=fe;return w(),B("div",Ge,[d(r,null,{header:i(()=>[d(a,null,{default:i(()=>[d(u,{size:"30"},{default:i(()=>[d(R(He))]),_:1}),qe]),_:1})]),default:i(()=>[(w(!0),B(M,null,K(R(e).frdLink,(s,b)=>(w(),N(v,{key:b},{prefix:i(()=>[d(h,{round:"",size:"small",src:s.icon},null,8,["src"])]),default:i(()=>[d(a,{justify:"space-between"},{default:i(()=>[f("a",{href:s.blog,target:"_BLANK"},L(s.title),9,Qe),S(" "+L(s.desc),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),d(r,null,{header:i(()=>[d(a,null,{default:i(()=>[d(u,{size:"30"},{default:i(()=>[d(R(De))]),_:1}),Xe]),_:1})]),default:i(()=>[(w(!0),B(M,null,K(R(e).oneWayLink,(s,b)=>(w(),N(v,{key:b},{prefix:i(()=>[d(h,{round:"",size:"small",src:s.icon},null,8,["src"])]),default:i(()=>[d(a,{justify:"space-between"},{default:i(()=>[f("a",{href:s.blog,target:"_BLANK"},L(s.title),9,Ye),S(" "+L(s.desc),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),Je,f("div",Ue,[d(a,null,{default:i(()=>[d(u,{size:"30",color:"#FFD700"},{default:i(()=>[d(R(We))]),_:1}),Ze]),_:1})]),et,tt,nt,d(F,{"x-gap":"12",cols:2},{default:i(()=>[(w(!0),B(M,null,K(R(e).pubLink,(s,b)=>(w(),N(z,{key:b,id:"n-gi"},{default:i(()=>[d(k,null,{avatar:i(()=>[d(h,{round:"",src:s.icon},null,8,["src"])]),header:i(()=>[f("a",{href:s.addr,target:"_BLANK"},L(s.title),9,rt)]),description:i(()=>[]),default:i(()=>[S(" "+L(s.desc),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])}}});export{st as default};
