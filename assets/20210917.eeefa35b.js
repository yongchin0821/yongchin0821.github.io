import{_ as a}from"./postLoyout.9fcdba74.js";import{o,c as r,w as c,a as e,b as t}from"./app.0aea1dee.js";const s=e("div",{class:"markdown-body"},[e("h2",{id:"%E8%83%8C%E6%99%AF",tabindex:"-1"},"\u80CC\u666F"),e("p",null,"\u7B2C\u4E00\u6B21\u5728\u5F04SSL\u8BC1\u4E66\u7684\u65F6\u5019\u8E29\u4E86\u4E0D\u5C11\u5751\uFF0C\u5BFC\u81F4\u751F\u6210\u4E86\u591A\u4EFD\u91CD\u590D\u7684\u8BC1\u4E66\uFF0C\u4E14\u57DF\u540D\u88AB\u5B98\u65B9\u7ED9BAN\u4E867\u5929\u3002\u4F46\u597D\u5728\u6700\u540ESSL\u8BC1\u4E66\u80FD\u7528\u4E86"),e("p",null,"\u4E09\u4E2A\u6708\u7684\u65F6\u95F4\u5230\u4E86\uFF0C\u73B0\u5728\u8981\u8FDB\u884C\u8BC1\u4E66\u7EED\u7B7E\uFF0C\u9762\u5BF9\u7E41\u6742\u7684\u76EE\u5F55\u548C\u76EE\u5F55\u4E0B\u79D8\u94A5\uFF0C\u6211\u76F4\u63A5\u61F5\u903C\u3002"),e("p",null,"so\uFF0C\u4E0D\u5982\u56DE\u7089\u91CD\u9020\u91CD\u65B0\u7B7E\u4E00\u4EFD\u8BC1\u4E66\uFF1F"),e("h3",{id:"%E4%B8%80%E3%80%81%E6%95%B4%E7%90%86%E7%9B%AE%E5%BD%95%EF%BC%8C%E5%87%86%E5%A4%87%E5%9B%9E%E7%82%89%E9%87%8D%E9%80%A0",tabindex:"-1"},"\u4E00\u3001\u6574\u7406\u76EE\u5F55\uFF0C\u51C6\u5907\u56DE\u7089\u91CD\u9020"),e("p",null,"\u9996\u5148\u8FDB\u5165certbot\u7684\u76EE\u5F55"),e("pre",null,[e("code",{class:"hljs language-shell"},`cd /etc/letsencrypt
`)]),e("p",null,[t("\u6765\u5230letsencrypt\u76EE\u5F55\u4E0B\uFF0C\u4F9D\u6B21\u53EF\u4EE5\u53D1\u73B0"),e("span",{color:"red"},"archive\uFF0Clive\uFF0Crenewal"),t("\u6587\u4EF6\u5939")]),e("p",null,"\u5220\u9664\u91CC\u9762\u7684\u6240\u6709\u6587\u4EF6\uFF0C\u4E0D\u653E\u5FC3\u7684\u8BDD\u53EF\u4EE5\u4E8B\u5148\u8FDB\u884Ccp\u5907\u4EFD"),e("pre",null,[e("code",{class:"hljs language-shell"},`rm -rf archive/*
rm -rf live/*
rm -rf renewal/*
`)]),e("h3",{id:"%E4%BA%8C%E3%80%81%E4%BD%BF%E7%94%A8---standalone-%E6%A8%A1%E5%BC%8F%E8%BF%9B%E8%A1%8C%E8%AF%81%E4%B9%A6%E4%B8%8B%E5%8F%91%E8%AF%B7%E6%B1%82",tabindex:"-1"},"\u4E8C\u3001\u4F7F\u7528 --standalone \u6A21\u5F0F\u8FDB\u884C\u8BC1\u4E66\u4E0B\u53D1\u8BF7\u6C42"),e("pre",null,[e("code",{class:"hljs language-shell"},`certbot certonly --standalone
`)]),e("p",null,"\u6839\u636E\u63D0\u793A\u8F93\u5165\u57DF\u540D\uFF0C\u4F8B\u5982yongchin.xyz"),e("p",null,"\u7B49\u5F85\u597D\u6D88\u606F"),e("pre",null,[e("code",{class:"hljs language-shell"},`[root@ikvmZ letsencrypt]# certbot certonly --standalone
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Please enter the domain name(s) you would like on your certificate (comma and/or
space separated) (Enter 'c' to cancel): yongchin.xyz
Requesting a certificate for yongchin.xyz

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/yongchin.xyz/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/yongchin.xyz/privkey.pem
This certificate expires on 2021-12-16.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
`)]),e("p",null,"\u5269\u4E0B\u7684\u5C31\u662F\u6109\u5FEB\u5730\u91CD\u65B0\u670D\u52A1\uFF0C\u53BB\u9875\u9762\u63D2\u4EF6\u8BC1\u4E66\u6709\u6548\u671F~\u2618")],-1),i={title:"\u8BB0\u4E00\u6B21certbot\u91CD\u65B0\u7B7E\u7EA6SSL\u8BC1\u4E66\u7ECF\u9A8C",date:"2021-09-17T18:00:00.000Z",lang:"zh",type:"dev"},y={__name:"20210917",setup(p,{expose:n}){return n({frontmatter:{title:"\u8BB0\u4E00\u6B21certbot\u91CD\u65B0\u7B7E\u7EA6SSL\u8BC1\u4E66\u7ECF\u9A8C",date:"2021-09-17T18:00:00.000Z",lang:"zh",type:"dev"}}),(d,u)=>{const l=a;return o(),r(l,{frontmatter:i},{default:c(()=>[s]),_:1})}}};export{y as default,i as frontmatter};
