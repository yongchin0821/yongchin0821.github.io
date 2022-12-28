import{_ as t}from"./postLoyout.92e7d40d.js";import{o as e,c,w as p,a as s,b as a}from"./app.23ff8517.js";import"./utc.917b3e44.js";const o=s("div",{class:"markdown-body"},[s("h2",{id:"%E6%9C%AC%E6%AC%A1%E8%B8%A9%E5%9D%91%E7%82%B9",tabindex:"-1"},"\u672C\u6B21\u8E29\u5751\u70B9"),s("ol",null,[s("li",null,"\u627E\u4E00\u6B3E\u5728vue3\u9879\u76EE\u4E2D\u80FD\u89E3\u6790\u5E76\u663E\u793Amd\u7684\u63D2\u4EF6"),s("li",null,"\u8BFB\u53D6\u672C\u5730md\u6587\u6863\u5185\u5BB9")]),s("h3",{id:"%E9%92%88%E5%AF%B91",tabindex:"-1"},"\u9488\u5BF91"),s("p",null,"\u5168\u7F51\u627E\u4E86\u4E00\u5708\uFF0C\u82B1\u4E86\u63A5\u8FD15\u5C0F\u65F6\u5DE6\u53F3\u3002vue-markdown-loader\u3001showdown\u3001mavon-editor\u5565\u7684\u90FD\u4E0B\u8F7D\u4E86\uFF0C\u53D1\u73B0\u76EE\u524D\u90FD\u4E0D\u652F\u6301vue3.0\u3002\u627E\u5230\u5DEE\u70B9\u653E\u5F03\u3002\u6700\u540E\u5728\u8C37\u7239\u90A3\u91CC\u627E\u5230\u4E00\u4E2Avue3-markdown-it\uFF0C\u6D4B\u8BD5\u53EF\u7528\u3002"),s("pre",null,[s("code",{class:"hljs language-javascript"},[s("span",{class:"hljs-keyword"},"import"),a(),s("span",{class:"hljs-title class_"},"VueMarkdownIt"),a(),s("span",{class:"hljs-keyword"},"from"),a(),s("span",{class:"hljs-string"},"'vue3-markdown-it'"),a(`;

`),s("span",{class:"language-xml"},[s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"template"),a(">")]),a(`
  `),s("span",{class:"hljs-tag"},[a("<"),s("span",{class:"hljs-name"},"vue3-markdown-it"),a(),s("span",{class:"hljs-attr"},":source"),a("="),s("span",{class:"hljs-string"},"'datas.sourced'"),a("/>")]),a(`
`),s("span",{class:"hljs-tag"},[a("</"),s("span",{class:"hljs-name"},"template"),a(">")])]),a(`

`),s("span",{class:"hljs-keyword"},"export"),a(),s("span",{class:"hljs-keyword"},"default"),a(` {
  `),s("span",{class:"hljs-attr"},"name"),a(": "),s("span",{class:"hljs-string"},"'Body'"),a(`,
  `),s("span",{class:"hljs-attr"},"components"),a(`: {
    `),s("span",{class:"hljs-string"},"'vue3-markdown-it'"),a(": "),s("span",{class:"hljs-title class_"},"VueMarkdownIt"),a(`,
  },
  `),s("span",{class:"hljs-title function_"},"setup"),a("("),s("span",{class:"hljs-params"}),a(`) {
    `),s("span",{class:"hljs-keyword"},"const"),a(" datas = "),s("span",{class:"hljs-title function_"},"reactive"),a(`({
      `),s("span",{class:"hljs-attr"},"sourced"),a(": "),s("span",{class:"hljs-string"},'"## \u4E8C\u7EA7\u6807\u9898"'),a(`
    })
    `),s("span",{class:"hljs-keyword"},"return"),a(` {
      datas,
    }
`)])]),s("h3",{id:"%E9%92%88%E5%AF%B92",tabindex:"-1"},"\u9488\u5BF92"),s("p",null,[a("\u4F7F\u7528axios\u8BFB\u53D6\u672C\u5730\u6587\u4EF6\uFF0C\u4F46\u662F\u5728\u52A8\u6001\u590D\u5236\u7684\u65F6\u5019\u8E29\u4E86\u5751\uFF0C\u600E\u4E48\u5F04\u6700\u540E\u7684\u503C\u90FD\u662Fundefined\u3002 \u901A\u8FC7\u67E5\u9605\uFF0C"),s("strong",null,[s("span",{color:"red"},"\u53D1\u73B0axios\u8FD4\u56DE\u503C\u662F\u5F02\u6B65\u64CD\u4F5C\uFF0C\u83B7\u53D6\u8FD4\u56DE\u503C\u65F6\uFF0C\u8BF7\u6C42\u64CD\u4F5C\u8FD8\u672A\u5B8C\u6210\uFF0C\u5C31\u5DF2\u7ECF\u6267\u884C\u4E86\u8D4B\u503C\uFF0C\u5BFC\u81F4\u7ED3\u679C\u4F4Dundefined\u3002\u9519\u8BEF\u793A\u4F8B\u5982\u4E0B\uFF1A")])]),s("pre",null,[s("code",{class:"hljs language-javascript"},[s("span",{class:"hljs-title function_"},"setup"),a("("),s("span",{class:"hljs-params"}),a(`) {
  `),s("span",{class:"hljs-keyword"},"const"),a(),s("span",{class:"hljs-title function_"},"abd"),a(" = ("),s("span",{class:"hljs-params"}),a(`) => {
    `),s("span",{class:"hljs-keyword"},"let"),a(" getinfo ="),s("span",{class:"hljs-number"},"1"),a(`
    axios.`),s("span",{class:"hljs-title function_"},"get"),a("("),s("span",{class:"hljs-string"},'"/xxx.md"'),a(")."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"res"),a(")=>")]),a(`{ 
    getinfo = res.`),s("span",{class:"hljs-property"},"data"),a(`
    `),s("span",{class:"hljs-variable language_"},"console"),a("."),s("span",{class:"hljs-title function_"},"log"),a(`(getinfo)
    })
    `),s("span",{class:"hljs-keyword"},"return"),a(` getinfo
    }
`)])]),s("p",null,"\u89E3\u51B3\u65B9\u6CD5\u4F7F\u7528async\u2026.await\uFF0Casync\u58F0\u660E\u53D1\u653E\u4E3A\u5F02\u6B65\u65B9\u6CD5\uFF0Cawait\u7B49\u5F85\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5B8C\u6BD5\u3002"),s("pre",null,[s("code",{class:"hljs language-javascript"},[a("  "),s("span",{class:"hljs-title function_"},"setup"),a("("),s("span",{class:"hljs-params"}),a(`) {
    `),s("span",{class:"hljs-keyword"},"async"),a(),s("span",{class:"hljs-keyword"},"function"),a(),s("span",{class:"hljs-title function_"},"abd"),a("("),s("span",{class:"hljs-params"},"path"),a(`){
      `),s("span",{class:"hljs-keyword"},"await"),a(" axios."),s("span",{class:"hljs-title function_"},"get"),a("(path)."),s("span",{class:"hljs-title function_"},"then"),a("("),s("span",{class:"hljs-function"},[a("("),s("span",{class:"hljs-params"},"res"),a(")=>")]),a(`{ 
      datas.`),s("span",{class:"hljs-property"},"sourced"),a(" = res."),s("span",{class:"hljs-property"},"data"),a(`
      })
    }
`)])])],-1),r={title:"Vue 3.0\u663E\u793Amd\u6587\u4EF6",date:"2020-12-30T18:00:00.000Z",lang:"zh",type:"dev"},f={setup(i,{expose:n}){return n({frontmatter:{title:"Vue 3.0\u663E\u793Amd\u6587\u4EF6",date:"2020-12-30T18:00:00.000Z",lang:"zh",type:"dev"}}),(h,d)=>{const l=t;return e(),c(l,{frontmatter:r},{default:p(()=>[o]),_:1})}}};export{f as default,r as frontmatter};
