import{d as r,o as C,e as p,i as e,a as u,a0 as A}from"./app.fde65a53.js";const y={id:"gamerecord",class:"articalPage"},k=u("p",null,"\u6211\u7231\u6E38\u620F\uFF0C\u6211\u5BF9\u4EBA\u751F\u8D1F\u8D23",-1),f=u("br",null,null,-1),B=u("h3",null,"\u613F\u671B\u5355/\u5F85\u73A9\u7684\u6E38\u620F",-1),D=u("h3",null,"\u76EE\u524D\u70ED\u73A9/\u653B\u7565\u7684\u6E38\u620F",-1),P=u("summary",null,"2023",-1),d=u("summary",null,"2022",-1),i=u("summary",null,"2021",-1),c=u("summary",null,"\u66F4\u65E9\u4EE5\u524D\uFF08\u53EA\u767B\u5F55\u5370\u8C61\u4E2D\u8FD8\u4E0D\u9519\u7684\u6E38\u620F\uFF09",-1),g=r({__name:"GameRecord",setup(K){const s={pageSize:10},a=[{title:"Name",dataIndex:"name",key:"name"},{title:"Platfrom",dataIndex:"platfrom",key:"platfrom"},{title:"Status",dataIndex:"status",key:"status"}],m=[{key:1,name:"\u9ED1\u795E\u8BDD:\u609F\u7A7A",platfrom:"PC",status:"\u4E94\u767E\u5E74\u524D\u4E00\u573A\u68A6\u817E\u9704\u53C8\u662F\u5B59\u609F\u7A7A\uFF1F"}],l=[{key:1,name:"\u5C3C\u5C14:\u4EBA\u5DE5\u751F\u547Dver.1.22474487139",platfrom:"PC",status:"\u60B2\u60E8\u4E16\u754C\uFF1F"},{key:2,name:"\u5BF9\u9A6C\u5C9B\u4E4B\u9B42\u5BFC\u6F14\u526A\u8F91\u7248",platfrom:"PS5",status:"\u771F\u6B63\u7684\u6B66\u58EB\u9053\u4E4B\u9B42\uFF01"},{key:3,name:"FF14",platfrom:"PC",status:"6.0\u56DE\u5751"},{key:4,name:"\u661F\u7A79\u94C1\u9053",platfrom:"\u624B\u6E38",status:"\u534A\u8757\u72B6\u6001"},{key:5,name:"\u795E\u4E4B\u5929\u5E73",platfrom:"PC",status:"\u7A7F\u8D8A\u5267\u60C5\u7684\u5237\u5237\u5237\u6E38\u620F"}],o=[{key:3,name:"\u6F5C\u6E0A\u75C7",platfrom:"PC",status:"AKF"},{key:2,name:"\u4E86\u4E0D\u8D77\u7684\u4FEE\u4ED9\u6A21\u62DF\u5668",platfrom:"PC",status:"AKF"},{key:1,name:"\u6EE1\u5EAD\u82B3\uFF1A\u5B8B\u4E0A\u7E41\u534E",platfrom:"Mobile",status:"AFK"}],n=[{key:12,name:"Stacklands",platfrom:"PC",status:"Complete"},{key:11,name:"\u55DC\u8840\u5370 Bloody Speel",platfrom:"PC",status:"AFK"},{key:10,name:"\u4E1C\u65B9\u591C\u96C0\u98DF\u5802",platfrom:"PC",status:"AFK"},{key:9,name:"Necesse",platfrom:"PC",status:"AFK"},{key:8,name:"SpiritFarer",platfrom:"PC",status:"AFK"},{key:7,name:"\u6696\u96EA",platfrom:"PC",status:"Completed"},{key:6,name:"\u9B3C\u8C37\u516B\u8352",platfrom:"PC",status:"AFK"},{key:5,name:"\u827E\u5C14\u767B\u6CD5\u73AF",platfrom:"PC",status:"Completed"},{key:4,name:"\u5730\u5E73\u7EBF\uFF1A\u897F\u4E4B\u7EDD\u5883",platfrom:"PS5",status:"Completed"},{key:1,name:"\u53CC\u4EBA\u6210\u884C",platfrom:"PS4",status:"Completed"},{key:2,name:"\u4E07\u534E\u955C\u7F8E\u5C11\u5973\u83B2\u534E",platfrom:"PC",status:"Playing"},{key:3,name:"\u5D29\u574F3",platfrom:"Mobile",status:"AFK"}],F=[{key:1,name:"\u602A\u7269\u730E\u4EBA:\u5D1B\u8D77",platfrom:"NS",status:"Completed"},{key:2,name:"\u4E07\u534E\u955C\u7F8E\u5C11\u5973\u83B2\u534E",platfrom:"PC",status:"Playing"},{key:3,name:"\u4EFB\u5929\u5802\u660E\u661F\u5927\u4E71\u6597",platfrom:"NS",status:"AFK"},{key:4,name:"\u9A6C\u91CC\u5965\u8D5B\u8F66",platfrom:"NS",status:"AFK"},{key:5,name:"\u8D5B\u9A6C\u5A18 \u30A6\u30DE\u5A18",platfrom:"Mobile",status:"AFK"},{key:6,name:"\u6C38\u52AB\u65E0\u95F4",platfrom:"PC",status:"AFK"},{key:6,name:"\u80E1\u95F9\u53A8\u623F Overcooked",platfrom:"PC",status:"Completed"},{key:7,name:"ENDER LILIES(\u7EC8\u7ED3\u8005\u8389\u8389:\u9A91\u58EB\u7684\u6551\u8D4E)",platfrom:"PC",status:"Completed"},{key:8,name:"Mirror",platfrom:"PC",status:"Palying"},{key:9,name:"\u516C\u4E3B\u8FDE\u7ED3",platfrom:"Mobile",status:"AFK"},{key:10,name:"\u4ED9\u5251\u5947\u4FA0\u4F20\u67D2",platfrom:"PC",status:"Completed"},{key:11,name:"\u5E7B\u5854",platfrom:"Mobile",status:"AFK"},{key:12,name:"\u300A\u6C38\u6052\u8F6E\u56DE: \u9ED1\u8272\u5E78\u5B58\u8005 Eternal Return: Black Survival\u300B",platfrom:"PC",status:"AFK"}],E=[{key:1,name:"\u602A\u7269\u730E\u4EBA\u7CFB\u5217",platfrom:"",status:"",children:[{key:1-1,name:"MHP3",platfrom:"PSP",status:"AFK"},{key:1-2,name:"MH3G",platfrom:"3DS",status:"AFK"},{key:1-3,name:"MH4",platfrom:"3DS",status:"AFK"},{key:1-4,name:"MH4G",platfrom:"3DS",status:"AFK"},{key:1-5,name:"MHX",platfrom:"3DS",status:"AFK"},{key:1-6,name:"MHXX",platfrom:"3DS",status:"AFK"},{key:1-7,name:"MHW",platfrom:"PS4",status:"AFK"}]},{key:2,name:"\u6C38\u6052\u8F6E\u56DE\uFF1A\u9ED1\u8272\u5E78\u5B58\u8005",platfrom:"PC",status:"AFK"},{key:3,name:"\u9ED1\u8272\u5E78\u5B58\u8005",platfrom:"PC",status:"AFK"},{key:4,name:"\u7F3A\u6C27",platfrom:"PC",status:"Playing Now"},{key:5,name:"\u9965\u8352",platfrom:"PC",status:"AFK"},{key:6,name:"\u6CF0\u62C9\u745E\u4E9A",platfrom:"PC",status:"AFK"},{key:7,name:"\u661F\u9732\u8C37\u7269\u8BED",platfrom:"PC",status:"AFK"},{key:8,name:"\u5BAB\u5D0E\u8001\u8D3C\u7CFB\u5217",platfrom:"",status:"",children:[{key:6-1,name:"\u9ED1\u9B423",platfrom:"PC",status:"AFK"},{key:6-2,name:"\u53EA\u72FC",platfrom:"PC",status:"AFK"}]},{key:9,name:"\u5B88\u671B\u5148\u950B",platfrom:"PC",status:"AFK"},{key:10,name:"\u7089\u77F3\u4F20\u8BF4",platfrom:"PC",status:"AFK"},{key:11,name:"\u7EDD\u5730\u6C42\u751F",platfrom:"PC",status:"AFK"},{key:12,name:"\u65E0\u9650\u6CD5\u5219",platfrom:"PC",status:"AFK"},{key:13,name:"\u82F1\u96C4\u8054\u76DF",platfrom:"PC",status:"AFK"},{key:14,name:"\u6700\u7EC8\u5E7B\u60F3XIV FF14",platfrom:"PC",status:"AFK"},{key:15,name:"\u5251\u7075",platfrom:"PC",status:"AFK"},{key:16,name:"\u5929\u6DAF\u660E\u6708\u5200",platfrom:"PC",status:"AFK"},{key:17,name:"\u9006\u6C34\u5BD2",platfrom:"PC",status:"AFK"},{key:18,name:"\u523A\u5BA2\u4FE1\u6761\u7CFB\u5217",platfrom:"",status:"",children:[{key:18-1,name:"\u5965\u5FB7\u8D5B",platfrom:"PS4",status:"AFK"}]},{key:19,name:"\u8352\u91CE\u5927\u9556\u5BA2\u6551\u8D4E",platfrom:"PS4",status:"AFK"},{key:20,name:"L4D2",platfrom:"PC",status:"AFK"},{key:21,name:"\u539F\u795E",platfrom:"PC",status:"AFK"}];return(_,S)=>{const t=A;return C(),p("div",y,[k,f,B,e(t,{columns:a,data:m,size:"small"}),D,e(t,{columns:a,data:l,size:"small"}),u("details",null,[P,e(t,{columns:a,data:o,pagination:s,size:"small"})]),u("details",null,[d,e(t,{columns:a,data:n,pagination:s,size:"small"})]),u("details",null,[i,e(t,{columns:a,data:F,pagination:s,size:"small"})]),u("details",null,[c,e(t,{columns:a,data:E,pagination:s,size:"small"})])])}}});export{g as default};
