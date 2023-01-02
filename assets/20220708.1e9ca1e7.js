import{_ as l}from"./postLoyout.c51e7997.js";import{o as a,c as r,w as o,a as s,b as n}from"./app.a2a576ac.js";import"./utc.917b3e44.js";const c=s("div",{class:"markdown-body"},[s("h3",{id:"%E8%83%8C%E6%99%AF",tabindex:"-1"},"\u80CC\u666F"),s("p",null,[n("\u57FA\u4E8E pytest \u6846\u67B6\u5199\u4E86\u4E24\u7EC4 suites\uFF0C\u4E00\u4E2A\u7528\u4E8E\u6D4B\u8BD5\u6210\u529F\u7684 "),s("strong",null,[s("code",null,"test_success.py")]),n(" , \u4E00\u4E2A\u7528\u4E8E\u6D4B\u8BD5\u5931\u8D25\u7684 "),s("strong",null,[s("code",null,"test_fail.py")])]),s("p",null,[s("strong",null,"test_success.py")]),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"import"),n(` pytest
`),s("span",{class:"hljs-keyword"},"import"),n(` warnings


`),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"test_case1"),n(`():
    `),s("span",{class:"hljs-string"},'"""test pass"""'),n(`
    `),s("span",{class:"hljs-keyword"},"assert"),n(),s("span",{class:"hljs-number"},"1"),n(`


`),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"test_case2"),n(`():
    `),s("span",{class:"hljs-string"},'"""test warning"""'),n(`
    warnings.warn(UserWarning(`),s("span",{class:"hljs-string"},'"This is a warning msg"'),n(`))


`),s("span",{class:"hljs-meta"},"@pytest.mark.skip()"),n(`
`),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"test_case3"),n(`():
    `),s("span",{class:"hljs-string"},'"""test skip"""'),n(`
    `),s("span",{class:"hljs-keyword"},"assert"),n(),s("span",{class:"hljs-number"},"0"),n(`
`)])]),s("p",null,[s("strong",null,"test_fail.py")]),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"import"),n(` pytest


`),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"test_case1"),n(`():
    `),s("span",{class:"hljs-string"},'"""test fail"""'),n(`
    `),s("span",{class:"hljs-keyword"},"assert"),n(),s("span",{class:"hljs-number"},"0"),n(`


`),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"test_case2"),n(`():
    `),s("span",{class:"hljs-string"},'"""\u3053\u3093\u306B\u3061\u306F\u4E16\u754C"""'),n(`
    `),s("span",{class:"hljs-keyword"},"raise"),n(" IOError("),s("span",{class:"hljs-number"},"123"),n(`)


`),s("span",{class:"hljs-meta"},"@pytest.fixture()"),n(`
`),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"user"),n(`():
    a = `),s("span",{class:"hljs-string"},'"yoyo"'),n(`
    `),s("span",{class:"hljs-keyword"},"assert"),n(" a == "),s("span",{class:"hljs-string"},'"yoyo123"'),n("  "),s("span",{class:"hljs-comment"},"# fixture failed with error"),n(`
    `),s("span",{class:"hljs-keyword"},"return"),n(` a


`),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"test_case3"),n("("),s("span",{class:"hljs-params"},"user"),n(`):
    `),s("span",{class:"hljs-string"},'"""test error"""'),n(`
    `),s("span",{class:"hljs-keyword"},"assert"),n(" user == "),s("span",{class:"hljs-string"},'"yoyo"'),n(`

`)])]),s("h3",{id:"%E7%BB%93%E6%9E%9C",tabindex:"-1"},"\u7ED3\u679C"),s("p",null,"\u7528\u547D\u4EE4 pytest.main([\u2018./testsuites\u2019, \u2018-s\u2019, \u2018-q\u2019, \u2018\u2013alluredir\u2019, \u2018./report\u2019]) \u6267\u884C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 pytest \u7684\u63A7\u5236\u53F0\u8F93\u51FA\u7ED3\u679C"),s("pre",null,[s("code",{class:"hljs language-shell"},`FFE..s
...
...
...
  /Workspace/DEV/study/pywebreport/test/testsuites/test_success.py:16: UserWarning: This is a warning msg
    warnings.warn(UserWarning("This is a warning msg"))

-- Docs: https://docs.pytest.org/en/stable/how-to/capture-warnings.html
=========================== short test summary info ============================
FAILED testsuites/test_fail.py::test_case1 - assert 0
FAILED testsuites/test_fail.py::test_case2 - OSError: 123
ERROR testsuites/test_fail.py::test_case3 - AssertionError: assert 'yoyo' == ...
2 failed, 2 passed, 1 skipped, 1 warning, 1 error in 0.09s

Process finished with exit code 0

`)]),s("p",null,[n("\u4ECE\u7ED3\u679C\u53EF\u4EE5\u770B\u5230 "),s("strong",null,[s("code",null,"test_fail.py")]),n(" \u4E2D\u7684 test_case2 \u6807\u8BB0\u4E3A "),s("span",{style:{color:"red"}},[s("strong",null,"F(Failed)")]),n("\uFF0C test_case3 \u6807\u8BB0\u4E3A "),s("span",{style:{color:"red"}},[s("strong",null,"E(Error)"),n(">")])]),s("p",null,[n("\u518D\u6765\u770B\u770B "),s("strong",null,"allure"),n(" \u62A5\u544A\u8FD9\u8FB9")]),s("img",{src:"https://yongchinblog.oss-cn-chengdu.aliyuncs.com/%E5%9B%BE%E7%89%87/%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87/20220708_1.png",style:{width:"100%",height:"100%"}}),s("img",{src:"https://yongchinblog.oss-cn-chengdu.aliyuncs.com/%E5%9B%BE%E7%89%87/%E6%96%87%E7%AB%A0%E5%9B%BE%E7%89%87/20220708_2.png",style:{width:"100%",height:"100%"}}),s("p",null,[n("\u4ECE\u7ED3\u679C\u53EF\u4EE5\u770B\u5230 "),s("strong",null,[s("code",null,"test_fail.py")]),n(" \u4E2D\u7684 test_case2 \u6807\u8BB0\u4E3A "),s("span",{style:{color:"red"}},[s("strong",null,"Broken")]),n("\uFF0Ctest_case3 \u6807\u8BB0\u4E3A "),s("span",{style:{color:"red"}},[s("strong",null,"Failed")])]),s("h3",{id:"%E6%80%BB%E7%BB%93",tabindex:"-1"},"\u603B\u7ED3"),s("p",null,"allure \u7684\u7ED3\u679C\u7EDF\u8BA1\u5728 failed \u4E0A\u8DDF pytest \u662F\u4E0D\u4E00\u6837\u7684\uFF0Cpytest \u91CC\u9762\u7684 error \u5728 allure \u4E0A\u662F failed\uFF0C\u800C pytest failed \u7684\u4E00\u79CD\u60C5\u51B5\uFF0C\u5728 allure \u4E0A\u88AB\u89C6\u4E3A broken")],-1),p={title:"\u9707\u60CA\uFF01allure\u7EDF\u8BA1\u7ED3\u679C\u5C45\u7136\u4E0Epytest\u7ED3\u679C\u4E0D\u4E00\u81F4",date:"2022-07-08T09:10:00.000Z",lang:"zh",type:"dev"},_={setup(i,{expose:t}){return t({frontmatter:{title:"\u9707\u60CA\uFF01allure\u7EDF\u8BA1\u7ED3\u679C\u5C45\u7136\u4E0Epytest\u7ED3\u679C\u4E0D\u4E00\u81F4",date:"2022-07-08T09:10:00.000Z",lang:"zh",type:"dev"}}),(h,u)=>{const e=l;return a(),r(e,{frontmatter:p},{default:o(()=>[c]),_:1})}}};export{_ as default,p as frontmatter};
