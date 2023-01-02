import{_ as t}from"./postLoyout.c51e7997.js";import{o as e,c as p,w as c,a as s,b as a}from"./app.a2a576ac.js";import"./utc.917b3e44.js";const r=s("div",{class:"markdown-body"},[s("h2",{id:"%E8%83%8C%E6%99%AF",tabindex:"-1"},"\u80CC\u666F"),s("p",null,"\u5728\u7236\u7EC4\u4EF6\u4E2D\uFF0C\u5F15\u7528\u4E86\u5B50\u7EC4\u4EF6\u5E76\u8FDB\u884C\u4E86\u4F20\u503C"),s("pre",null,[s("code",{class:"hljs language-js"},[a(`<template>
  `),s("span",{class:"language-xml"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"Readmd"),a(),s("span",{class:"hljs-attr"},"path"),a("="),s("span",{class:"hljs-string"},"'/artical/normal/About.md'"),a(" />")])]),a(`
</template>

`),s("span",{class:"language-xml"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"language-javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-title class_"},"Readmd"),a(),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'../src/components/Readmd.vue'"),a(`;

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"components"),a(`: {
    `),s("span",{class:"hljs-title class_"},"Readmd"),a(`
  },
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])]),a(`
`)])]),s("p",null,"\u8FD9\u91CC\u671F\u671B\u662F\u628Apath\u4F20\u5165\u5B50\u7EC4\u4EF6\uFF0C\u7136\u540E\u5B50\u7EC4\u4EF6\u63A5\u53D7\u5230path\uFF0C\u5E76\u663E\u793A\u5BF9\u5E94\u8DEF\u5F84\u4E0B\u7684md"),s("h2",{id:"%E6%8A%80%E6%9C%AF%E7%97%9B%E7%82%B9",tabindex:"-1"},"\u6280\u672F\u75DB\u70B9"),s("p",null,"vue props\u7684\u57FA\u672C\u7528\u6CD5\u5E76\u4E0D\u964C\u751F\uFF0C\u4F46\u662F\u6559\u7A0B\u5927\u591A\u662F\u6F14\u793Aprops\u5728\u5B50\u7EC4\u4EF6template\u4E2D\u7684\u4F7F\u7528\u4F8B\u5982"),s("pre",null,[s("code",{class:"hljs language-js"},[a(`<template>
  `),s("span",{class:"language-xml"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"div"),a(">")]),a("{{ path }}"),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"div"),a(">")])]),a(`
</template>

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"props"),a(`: {
    `),s("span",{class:"hljs-attr"},"path"),a(": "),s("span",{class:"hljs-title class_"},"String"),a(`
  }
`)])]),s("p",null,"\u4F46\u662F\u5982\u679C\u662F\u9700\u8981\u5728export default\u4E2D\u8C03\u7528props\uFF0C\u5B66\u4E60\u8D44\u6599\u5C31\u6BD4\u8F83\u5C11\u4E86\u3002 \u6839\u636E\u80CC\u666F\u9700\u8981\uFF0C\u6211\u4EEC\u9700\u8981\u628A\u4F20\u8FDB\u6765\u7684path\u8FDB\u884C\u5B9E\u65F6\u6E32\u67D3\uFF0C\u4E8E\u662F\u4F1A\u5199\u51FA"),s("pre",null,[s("code",{class:"hljs language-js"},[a(`<template>
  `),s("span",{class:"language-xml"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"vue3-markdown-it"),a(),s("span",{class:"hljs-attr"},":source"),a("="),s("span",{class:"hljs-string"},"'datas.sourced'"),a("/>")])]),a(`
</template>

`),s("span",{class:"language-xml"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"language-javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-title class_"},"VueMarkdownIt"),a(),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue3-markdown-it'"),a(`;
`),s("span",{class:"hljs-keyword"},"import"),a(" axios "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'axios'"),a(`;
`),s("span",{class:"hljs-keyword"},"import"),a(" { onMounted, reactive, } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`;
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'highlight.js/styles/agate.css'"),a(`;

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"props"),a(`: {
    `),s("span",{class:"hljs-attr"},"path"),a(": "),s("span",{class:"hljs-title class_"},"String"),a(`
  },
  `),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'Readmd'"),a(`,
  `),s("span",{class:"hljs-attr"},"components"),a(`: {
    `),s("span",{class:"hljs-string"},"'vue3-markdown-it'"),a(": "),s("span",{class:"hljs-title class_"},"VueMarkdownIt"),a(`,
  },
  `),s("span",{class:"hljs-title function_"},"setup"),a("("),s("span",{class:"hljs-params"},"props"),a(`) {
    `),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"readmdinfo"),a("("),s("span",{class:"hljs-params"},"mdpath"),a(`){
      `),s("span",{class:"hljs-keyword"},"await"),a(" axios."),s("span",{class:"hljs-title function_"},"get"),a("(mdpath)."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"res"),a(")=>")]),a(`{ 
      datas.`),s("span",{class:"hljs-property"},"sourced"),a(" = res."),s("span",{class:"hljs-property"},"data"),a(`
      })
    }
    `),s("span",{class:"hljs-keyword"},"const"),a(" datas = "),s("span",{class:"hljs-title function_"},"reactive"),a(`({
      `),s("span",{class:"hljs-attr"},"sourced"),a(": "),s("span",{class:"hljs-string"},'""'),a(`,
    })
    `),s("span",{class:"hljs-title function_"},"onMounted"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {
      `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},'"1"'),a(`)
      `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(path)
      `),s("span",{class:"hljs-title function_"},"readmdinfo"),a(`(path);
    })
    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      readmdinfo,
      datas
    }
  }
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])]),a(`
`)])]),s("p",null,[a("\u4EE5\u4E0A\u5199\u6CD5\u548B\u4E00\u770B\u6CA1\u5565\u95EE\u9898\uFF0C\u4F46\u5B9E\u9645\u5374\u662F\u9519\u8BEF\u793A\u4F8B\uFF0C\u6700\u7EC8\u65E0\u6CD5\u663E\u793Amd\u6587\u6863"),s("br"),a(" \u901A\u8FC7\u67E5console.log\u6253\u5370\u51FApath \u53EF\u4EE5\u53D1\u73B0\u503C\u662Fundefined")]),s("p",null,[a("\u901A\u8FC7\u67E5\u9605\u8D44\u6599\u53D1\u73B0\uFF1A"),s("br"),a(" \u7236\u7EC4\u4EF6props\u4F20\u8FC7\u53BB\u7684\u503C\uFF0C\u5B50\u7EC4\u4EF6\u7B2C\u4E00\u65F6\u95F4\u5728mounted\u662F\u83B7\u53D6\u4E0D\u5230\u7684\u3002\u56E0\u4E3A\u662F\u5F02\u6B65\u4F20\u503C\u7684\u3002 \u89E3\u51B3\u65B9\u6CD5\u662F\u901A\u8FC7watch\u8FDB\u884C\u76D1\u63A7\uFF0C\u4E8E\u662F\u628A")]),s("pre",null,[s("code",{class:"hljs language-js"},[s("span",{class:"hljs-title function_"},"onMounted"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a("("),s("span",{class:"hljs-string"},'"1"'),a(`)
  `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(path)
  `),s("span",{class:"hljs-title function_"},"readmdinfo"),a(`(path);
})
`)])]),s("p",null,"\u66F4\u6539\u4E3A\uFF1A"),s("pre",null,[s("code",{class:"hljs language-js"},[s("span",{class:"hljs-title function_"},"watch"),a("(props."),s("span",{class:"hljs-property"},"path"),a(","),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"val"),a(") =>")]),a(` {
  `),s("span",{class:"hljs-title function_"},"readmdinfo"),a(`(val);
})
`)])]),s("p",null,[a("\u7EE7\u7EED\u8E29\u5751\uFF0Cconsole\u663E\u793A"),s("br"),a(" runtime-core.esm-bundler.js?5c40:38 [Vue warn]: Invalid watch source: /artical/dev/20210103.md A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")]),s("h2",{id:"two-thousands-years-later%E3%80%82%E3%80%82%E3%80%82",tabindex:"-1"},"two thousands years later\u3002\u3002\u3002"),s("h2",{id:"%E3%80%82%E3%80%82%E3%80%82",tabindex:"-1"},"\u3002\u3002\u3002"),s("p",null,[a("\u8E29\u5751\u5F52\u6765"),s("br"),a(" Vue3.0\u7684watch\u548C2.0\u76F8\u6BD4\u6709\u6539\u52A8\uFF0C3.0watch\u7684\u5BF9\u8C61\u53EA\u80FD\u662Fa getter/effect function, a ref, a reactive object, or an array of these types"),s("br"),a(" \u7528console.log(val)\u6253\u5370\u63A5\u6536\u7684props.path\u53D1\u73B0\u8FD4\u56DE\u7684\u662FProxy\xA0{\u2026}"),s("br"),a(" \u6B63\u786E\u7684\u7528\u6CD5\u662F\u4F7F\u7528watchEffect\u6765\u63A5\u6536")]),s("pre",null,[s("code",{class:"hljs language-js"},[s("span",{class:"hljs-title function_"},"watchEffect"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {
  `),s("span",{class:"hljs-title function_"},"readmdinfo"),a("(props."),s("span",{class:"hljs-property"},"path"),a(`);
})
`)])]),s("p",null,"\u6700\u7EC8\u5199\u6CD5\u4E3A"),s("pre",null,[s("code",{class:"hljs language-js"},[a(`<template>
  `),s("span",{class:"language-xml"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"vue3-markdown-it"),a(),s("span",{class:"hljs-attr"},":source"),a("="),s("span",{class:"hljs-string"},"'datas.sourced'"),a("/>")])]),a(`
</template>

`),s("span",{class:"language-xml"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"script"),a(">")]),s("span",{class:"language-javascript"},[a(`
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-title class_"},"VueMarkdownIt"),a(),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue3-markdown-it'"),a(`;
`),s("span",{class:"hljs-keyword"},"import"),a(" axios "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'axios'"),a(`;
`),s("span",{class:"hljs-keyword"},"import"),a(" { onMounted, reactive, } "),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue'"),a(`;
`),s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-string"},"'highlight.js/styles/agate.css'"),a(`;

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"props"),a(`: {
    `),s("span",{class:"hljs-attr"},"path"),a(": "),s("span",{class:"hljs-title class_"},"String"),a(`
  },
  `),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'Readmd'"),a(`,
  `),s("span",{class:"hljs-attr"},"components"),a(`: {
    `),s("span",{class:"hljs-string"},"'vue3-markdown-it'"),a(": "),s("span",{class:"hljs-title class_"},"VueMarkdownIt"),a(`,
  },
  `),s("span",{class:"hljs-title function_"},"setup"),a("("),s("span",{class:"hljs-params"},"props"),a(`) {
    `),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"readmdinfo"),a("("),s("span",{class:"hljs-params"},"mdpath"),a(`){
      `),s("span",{class:"hljs-keyword"},"await"),a(" axios."),s("span",{class:"hljs-title function_"},"get"),a("(mdpath)."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"res"),a(")=>")]),a(`{ 
      datas.`),s("span",{class:"hljs-property"},"sourced"),a(" = res."),s("span",{class:"hljs-property"},"data"),a(`
      })
    }
    `),s("span",{class:"hljs-keyword"},"const"),a(" datas = "),s("span",{class:"hljs-title function_"},"reactive"),a(`({
      `),s("span",{class:"hljs-attr"},"sourced"),a(": "),s("span",{class:"hljs-string"},'""'),a(`,
    })
    `),s("span",{class:"hljs-title function_"},"watchEffect"),a("("),s("span",{class:"hljs-function"},"() =>"),a(` {
      `),s("span",{class:"hljs-title function_"},"readmdinfo"),a("(props."),s("span",{class:"hljs-property"},"path"),a(`);
    })
    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      readmdinfo,
      datas
    }
  }
}
`)]),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"script"),a(">")])]),a(`
`)])])],-1),o={title:"Vue 3.0\u7236\u5B50\u901A\u4FE1\u4E4Bprops\u5728<scritp>\u6807\u7B7E\u4E2D\u4F7F\u7528",date:"2021-01-03T18:00:00.000Z",lang:"zh",type:"dev"},g={setup(h,{expose:n}){return n({frontmatter:{title:"Vue 3.0\u7236\u5B50\u901A\u4FE1\u4E4Bprops\u5728<scritp>\u6807\u7B7E\u4E2D\u4F7F\u7528",date:"2021-01-03T18:00:00.000Z",lang:"zh",type:"dev"}}),(i,j)=>{const l=t;return e(),p(l,{frontmatter:o},{default:c(()=>[r]),_:1})}}};export{g as default,o as frontmatter};
