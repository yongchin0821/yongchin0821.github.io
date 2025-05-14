import{_ as c}from"./postLoyout.deffc794.js";import{o as e,c as r,w as o,a as s,b as a}from"./app.1386c12e.js";const p={title:"python\u8BBE\u8BA1\u6A21\u5F0F \u521B\u9020\u8005\u6A21\u5F0F-\u5DE5\u5382\u65B9\u6CD5&\u62BD\u8C61\u5DE5\u5382 \u6E29\u6545\u800C\u77E5\u65B0\uFF08\u4E8C\uFF09",date:"2024-09-24T08:16:07.000Z",lang:"zh",type:"dev",abstract:"2023 \u5E74\uFF0C\u6700\u706B\u7684\u53EF\u80FD\u5C31\u662F openAI \u4E86\uFF0C\u5176\u7EC4\u7EC7\u4EE3\u8868\u7684\u4EA7\u54C1 chatGTP\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5DF2\u7ECF\u6709\u6240\u8033\u95FB\u3002"},_={__name:"20240924",setup(h,{expose:n}){return n({frontmatter:{title:"python\u8BBE\u8BA1\u6A21\u5F0F \u521B\u9020\u8005\u6A21\u5F0F-\u5DE5\u5382\u65B9\u6CD5&\u62BD\u8C61\u5DE5\u5382 \u6E29\u6545\u800C\u77E5\u65B0\uFF08\u4E8C\uFF09",date:"2024-09-24T08:16:07.000Z",lang:"zh",type:"dev",abstract:"2023 \u5E74\uFF0C\u6700\u706B\u7684\u53EF\u80FD\u5C31\u662F openAI \u4E86\uFF0C\u5176\u7EC4\u7EC7\u4EE3\u8868\u7684\u4EA7\u54C1 chatGTP\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5DF2\u7ECF\u6709\u6240\u8033\u95FB\u3002"}}),(i,l)=>{const t=c;return e(),r(t,{frontmatter:p},{default:o(()=>l[0]||(l[0]=[s("div",{class:"markdown-body"},[s("h2",{id:"1.%E4%BB%80%E4%B9%88%E6%98%AF",tabindex:"-1"},"1.\u4EC0\u4E48\u662F"),s("p",null,"\u5DE5\u5382\u65B9\u6CD5\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u521B\u5EFA\u5BF9\u8C61\u7684\u63A5\u53E3\uFF0C\u4F46\u7531\u5B50\u7C7B\u51B3\u5B9A\u9700\u8981\u5B9E\u4F8B\u5316\u54EA\u4E00\u4E2A\u7C7B\u3002 \u5DE5\u5382\u65B9\u6CD5\u4F7F\u5F97\u5B50\u7C7B\u5B9E\u4F8B\u5316\u7684\u8FC7\u7A0B\u63A8\u8FDF"),s("p",null,"\u62BD\u8C61\u5DE5\u5382\uFF1A\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u53EF\u4EE5\u521B\u5EFA\u4E00\u7CFB\u5217\u76F8\u5173\u6216\u76F8\u4E92\u4F9D\u8D56\u7684\u5BF9\u8C61\uFF0C\u800C\u65E0\u9700\u6307\u5B9A\u5B83\u4EEC\u5177\u4F53\u7684\u7C7B"),s("h2",{id:"2.%E4%B8%BA%E4%BB%80%E4%B9%88",tabindex:"-1"},"2.\u4E3A\u4EC0\u4E48"),s("h3",{id:"2.1%E5%9C%BA%E6%99%AF%E4%B8%BE%E4%BE%8B%EF%BC%9A",tabindex:"-1"},"2.1\u573A\u666F\u4E3E\u4F8B\uFF1A"),s("p",null,"\u5DE5\u5382\u65B9\u6CD5\uFF1A\u6240\u6709\u751F\u6210\u5BF9\u8C61\u7684\u5730\u65B9\u90FD\u53EF\u4EE5\u4F7F\u7528\u3001\u9700\u8981\u7075\u6D3B\u4E14\u53EF\u6269\u5C55\u7684\u6846\u67B6\u7684\u65F6\u5019"),s("p",null,"\u62BD\u8C61\u5DE5\u5382\uFF1A\u65E0\u9700\u5173\u5FC3\u5BF9\u8C61\u521B\u5EFA\u8FC7\u7A0B\uFF0C\u7CFB\u7EDF\u6709\u591A\u4E8E\u4E00\u4E2A\u7684\u4EA7\u54C1\u65CF\u4E14\u6BCF\u6B21\u53EA\u9700\u8981\u67D0\u4E2A\u4EA7\u54C1\u65CF\u3001\u4EA7\u54C1\u7B49\u7EA7\u7ED3\u6784\u7A33\u5B9A"),s("h3",{id:"2.2%E4%BC%98%E7%82%B9%3A",tabindex:"-1"},"2.2\u4F18\u70B9:"),s("p",null,"\u5DE5\u5382\u65B9\u6CD5\uFF1A\u7528\u6237\u53EA\u9700\u5173\u5FC3\u4EA7\u54C1\u5BF9\u5E94\u7684\u5DE5\u5382\uFF1B\u6DFB\u52A0\u65B0\u4EA7\u54C1\u53EA\u8981\u6DFB\u52A0\u4E00\u4E2A\u5177\u4F53\u5DE5\u5382\u548C\u5177\u4F53\u4EA7\u54C1\uFF08\u8FD9\u7B26\u5408\u5F00\u95ED\u539F\u5219\uFF09"),s("p",null,"\u62BD\u8C61\u5DE5\u5382\uFF1A\u589E\u52A0\u65B0\u7684\u4EA7\u54C1\u65CF\u5F88\u5BB9\u6613"),s("h2",{id:"3%E5%A6%82%E4%BD%95%E5%BB%BA%E7%AB%8B",tabindex:"-1"},"3\u5982\u4F55\u5EFA\u7ACB"),s("h3",{id:"3.1%E8%A7%92%E8%89%B2",tabindex:"-1"},"3.1\u89D2\u8272"),s("h4",{id:"%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%EF%BC%9A",tabindex:"-1"},"\u5DE5\u5382\u65B9\u6CD5\uFF1A"),s("ol",null,[s("li",null,"Creator\uFF1A\u62BD\u8C61\u5DE5\u5382"),s("li",null,"ConcreteCreator\uFF1A\u5177\u4F53\u5DE5\u7A0B"),s("li",null,"Product\uFF1A\u62BD\u8C61\u4EA7\u54C1"),s("li",null,"ConcreteProduct\uFF1A\u5177\u4F53\u4EA7\u54C1")]),s("h4",{id:"%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82%EF%BC%9A",tabindex:"-1"},"\u62BD\u8C61\u5DE5\u5382\uFF1A"),s("ol",null,[s("li",null,"AbstractFactory\uFF1A\u62BD\u8C61\u5DE5\u5382"),s("li",null,"ConcreteFactory\uFF1A\u5177\u4F53\u5DE5\u5382"),s("li",null,"AbstractProduct\uFF1A\u62BD\u8C61\u4EA7\u54C1"),s("li",null,"ConcreteProduct\uFF1A\u5177\u4F53\u4EA7\u54C1")]),s("h3",{id:"3.2%E4%B8%BE%E4%BE%8B%E5%AE%9E%E7%8E%B0",tabindex:"-1"},"3.2\u4E3E\u4F8B\u5B9E\u73B0"),s("h4",{id:"%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95",tabindex:"-1"},"\u5DE5\u5382\u65B9\u6CD5"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"from"),a(" abc "),s("span",{class:"hljs-keyword"},"import"),a(` ABC, abstractmethod


`),s("span",{class:"hljs-comment"},"# \u4EA7\u54C1\u63A5\u53E3"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"Product"),a("("),s("span",{class:"hljs-title class_ inherited__"},"ABC"),a(`):
`),s("span",{class:"hljs-meta"},"    @abstractmethod"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"pass"),a(`


`),s("span",{class:"hljs-comment"},"# \u5177\u4F53\u4EA7\u54C1"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ConcreteProductA"),a("("),s("span",{class:"hljs-title class_ inherited__"},"Product"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},'"ConcreteProductA operation"'),a(`


`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ConcreteProductB"),a("("),s("span",{class:"hljs-title class_ inherited__"},"Product"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},'"ConcreteProductB operation"'),a(`


`),s("span",{class:"hljs-comment"},"# \u5DE5\u5382\u63A5\u53E3"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"Factory"),a("("),s("span",{class:"hljs-title class_ inherited__"},"ABC"),a(`):
`),s("span",{class:"hljs-meta"},"    @abstractmethod"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> Product:
        `),s("span",{class:"hljs-keyword"},"pass"),a(`


`),s("span",{class:"hljs-comment"},"# \u5177\u4F53\u5DE5\u5382"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ConcreteFactoryA"),a("("),s("span",{class:"hljs-title class_ inherited__"},"Factory"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> Product:
        `),s("span",{class:"hljs-keyword"},"return"),a(` ConcreteProductA()


`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ConcreteFactoryB"),a("("),s("span",{class:"hljs-title class_ inherited__"},"Factory"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> Product:
        `),s("span",{class:"hljs-keyword"},"return"),a(` ConcreteProductB()


`),s("span",{class:"hljs-comment"},"# \u5BA2\u6237\u7AEF\u4EE3\u7801"),a(`
`),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"client_code"),a("("),s("span",{class:"hljs-params"},"factory: Factory"),a(`):
    product = factory.create_product()
    `),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a('f"Client: '),s("span",{class:"hljs-subst"},"{product.operation()}"),a('"')]),a(`)


client_code(ConcreteFactoryA())
client_code(ConcreteFactoryB())
`)])]),s("h4",{id:"%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82",tabindex:"-1"},"\u62BD\u8C61\u5DE5\u5382"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"from"),a(" abc "),s("span",{class:"hljs-keyword"},"import"),a(` ABC, abstractmethod


`),s("span",{class:"hljs-comment"},"# \u62BD\u8C61\u4EA7\u54C1A"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"AbstractProductA"),a("("),s("span",{class:"hljs-title class_ inherited__"},"ABC"),a(`):
`),s("span",{class:"hljs-meta"},"    @abstractmethod"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation_a"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"pass"),a(`


`),s("span",{class:"hljs-comment"},"# \u62BD\u8C61\u4EA7\u54C1B"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"AbstractProductB"),a("("),s("span",{class:"hljs-title class_ inherited__"},"ABC"),a(`):
`),s("span",{class:"hljs-meta"},"    @abstractmethod"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation_b"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"pass"),a(`


`),s("span",{class:"hljs-comment"},"# \u5177\u4F53\u4EA7\u54C1A1"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ProductA1"),a("("),s("span",{class:"hljs-title class_ inherited__"},"AbstractProductA"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation_a"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},'"ProductA1 operation"'),a(`


`),s("span",{class:"hljs-comment"},"# \u5177\u4F53\u4EA7\u54C1A2"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ProductA2"),a("("),s("span",{class:"hljs-title class_ inherited__"},"AbstractProductA"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation_a"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},'"ProductA2 operation"'),a(`


`),s("span",{class:"hljs-comment"},"# \u5177\u4F53\u4EA7\u54C1B1"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ProductB1"),a("("),s("span",{class:"hljs-title class_ inherited__"},"AbstractProductB"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation_b"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},'"ProductB1 operation"'),a(`


`),s("span",{class:"hljs-comment"},"# \u5177\u4F53\u4EA7\u54C1B2"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ProductB2"),a("("),s("span",{class:"hljs-title class_ inherited__"},"AbstractProductB"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"operation_b"),a("("),s("span",{class:"hljs-params"},"self"),a(") -> "),s("span",{class:"hljs-built_in"},"str"),a(`:
        `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-string"},'"ProductB2 operation"'),a(`


`),s("span",{class:"hljs-comment"},"# \u62BD\u8C61\u5DE5\u5382"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"AbstractFactory"),a("("),s("span",{class:"hljs-title class_ inherited__"},"ABC"),a(`):
`),s("span",{class:"hljs-meta"},"    @abstractmethod"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product_a"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> AbstractProductA:
        `),s("span",{class:"hljs-keyword"},"pass"),a(`

`),s("span",{class:"hljs-meta"},"    @abstractmethod"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product_b"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> AbstractProductB:
        `),s("span",{class:"hljs-keyword"},"pass"),a(`


`),s("span",{class:"hljs-comment"},"# \u5177\u4F53\u5DE5\u5382"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ConcreteFactory1"),a("("),s("span",{class:"hljs-title class_ inherited__"},"AbstractFactory"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product_a"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> AbstractProductA:
        `),s("span",{class:"hljs-keyword"},"return"),a(` ProductA1()

    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product_b"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> AbstractProductB:
        `),s("span",{class:"hljs-keyword"},"return"),a(` ProductB1()


`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"ConcreteFactory2"),a("("),s("span",{class:"hljs-title class_ inherited__"},"AbstractFactory"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product_a"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> AbstractProductA:
        `),s("span",{class:"hljs-keyword"},"return"),a(` ProductA2()

    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"create_product_b"),a("("),s("span",{class:"hljs-params"},"self"),a(`) -> AbstractProductB:
        `),s("span",{class:"hljs-keyword"},"return"),a(` ProductB2()


`),s("span",{class:"hljs-comment"},"# \u5BA2\u6237\u7AEF\u4EE3\u7801"),a(`
`),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"client_code"),a("("),s("span",{class:"hljs-params"},"factory: AbstractFactory"),a(`):
    product_a = factory.create_product_a()
    product_b = factory.create_product_b()
    `),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a('f"Client: '),s("span",{class:"hljs-subst"},"{product_a.operation_a()}"),a('"')]),a(`)
    `),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a('f"Client: '),s("span",{class:"hljs-subst"},"{product_b.operation_b()}"),a('"')]),a(`)


client_code(ConcreteFactory1())
client_code(ConcreteFactory2())
`)])]),s("h3",{id:"3.3%E6%AF%94%E8%BE%83",tabindex:"-1"},"3.3\u6BD4\u8F83"),s("ul",null,[s("li",null,"\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\uFF1A\u6BCF\u4E2A\u5177\u4F53\u5DE5\u5382\u53EA\u5B9E\u73B0 create_product \u65B9\u6CD5\uFF0C\u521B\u5EFA\u4E00\u4E2A\u4EA7\u54C1\u3002"),s("li",null,"\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\uFF1A\u6BCF\u4E2A\u5177\u4F53\u5DE5\u5382\u5B9E\u73B0\u4E24\u4E2A\u65B9\u6CD5 create_product_a \u548C create_product_b\uFF0C\u521B\u5EFA\u4E00\u7EC4\u76F8\u5173\u4EA7\u54C1\u3002")])],-1)])),_:1})}}};export{_ as default,p as frontmatter};
