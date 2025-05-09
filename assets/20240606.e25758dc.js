import{_ as t}from"./postLoyout.3ef230df.js";import{o as c,c as p,w as i,a as s,b as a}from"./app.de604160.js";const h={title:"\u4ECE\u96F6\u5F00\u59CB\u7684\u4EBA\u5DE5\u667A\u80FD(\u6301\u7EED\u66F4\u65B0)",date:"2024-06-06T15:22:07.000Z",lang:"zh",type:"dev",abstract:"2023 \u5E74\uFF0C\u6700\u706B\u7684\u53EF\u80FD\u5C31\u662F openAI \u4E86\uFF0C\u5176\u7EC4\u7EC7\u4EE3\u8868\u7684\u4EA7\u54C1 chatGTP\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5DF2\u7ECF\u6709\u6240\u8033\u95FB\u3002"},u={__name:"20240606",setup(r,{expose:l}){return l({frontmatter:{title:"\u4ECE\u96F6\u5F00\u59CB\u7684\u4EBA\u5DE5\u667A\u80FD(\u6301\u7EED\u66F4\u65B0)",date:"2024-06-06T15:22:07.000Z",lang:"zh",type:"dev",abstract:"2023 \u5E74\uFF0C\u6700\u706B\u7684\u53EF\u80FD\u5C31\u662F openAI \u4E86\uFF0C\u5176\u7EC4\u7EC7\u4EE3\u8868\u7684\u4EA7\u54C1 chatGTP\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5DF2\u7ECF\u6709\u6240\u8033\u95FB\u3002"}}),(o,n)=>{const e=t;return c(),p(e,{frontmatter:h},{default:i(()=>n[0]||(n[0]=[s("div",{class:"markdown-body"},[s("p",null,"\u6574\u7406\u5E76\u8BB0\u5F55\u4E00\u4E9B\u5165\u95E8\u4EBA\u5DE5\u667A\u80FD\u9886\u57DF\u6DF1\u5EA6\u5B66\u4E60\u7684\u8D44\u6599"),s("h2",{id:"%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97",tabindex:"-1"},"\u66F4\u65B0\u65E5\u5FD7"),s("h2",{id:"%E5%BB%BA%E7%AB%8B%E8%8C%83%E5%BC%8F%EF%BC%88%E5%A5%97%E8%B7%AF%EF%BC%89",tabindex:"-1"},"\u5EFA\u7ACB\u8303\u5F0F\uFF08\u5957\u8DEF\uFF09"),s("p",null,"\u6DF1\u5EA6\u5B66\u4E60\u7684\u64CD\u4F5C\u8303\u5F0F\u4E00\u822C\u662F\u8FD9\u6837\u7684"),s("ol",null,[s("li",null,"\u51C6\u5907\u6570\u636E"),s("li",null,"\u5B9A\u4E49\u6A21\u578B"),s("li",null,"\u8BAD\u7EC3\u6A21\u578B"),s("li",null,"\u8BC4\u4F30\u6A21\u578B"),s("li",null,"\u505A\u51FA\u9884\u6D4B")]),s("h3",{id:"%E5%87%86%E5%A4%87%E6%95%B0%E6%8D%AE",tabindex:"-1"},"\u51C6\u5907\u6570\u636E"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"import"),a(" pandas "),s("span",{class:"hljs-keyword"},"as"),a(` pd
`),s("span",{class:"hljs-keyword"},"from"),a(" sklearn.preprocessing "),s("span",{class:"hljs-keyword"},"import"),a(` LabelEncoder
`),s("span",{class:"hljs-keyword"},"from"),a(" torch.utils.data "),s("span",{class:"hljs-keyword"},"import"),a(` Dataset
`),s("span",{class:"hljs-keyword"},"from"),a(" torch.utils.data "),s("span",{class:"hljs-keyword"},"import"),a(` random_split
`),s("span",{class:"hljs-keyword"},"from"),a(" torch.utils.data "),s("span",{class:"hljs-keyword"},"import"),a(` DataLoader


`),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u6570\u636E\u96C6"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"CSVDataset"),a("("),s("span",{class:"hljs-title class_ inherited__"},"Dataset"),a(`):
    `),s("span",{class:"hljs-comment"},"# \u5BFC\u5165\u6570\u636E\u96C6"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"__init__"),a("("),s("span",{class:"hljs-params"},"self, path"),a(`):
        `),s("span",{class:"hljs-comment"},"# \u5BFC\u5165\u4F20\u5165\u8DEF\u5F84\u7684\u6570\u636E\u96C6\u4E3A Pandas DataFrame \u683C\u5F0F"),a(`
        df = pd.read_csv(path, header=`),s("span",{class:"hljs-literal"},"None"),a(`)
        `),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E\u795E\u7ECF\u7F51\u7EDC\u7684\u8F93\u5165\u4E0E\u8F93\u51FA"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".X = df.values[:, :-"),s("span",{class:"hljs-number"},"1"),a("]  "),s("span",{class:"hljs-comment"},"# \u6839\u636E\u4F60\u7684\u6570\u636E\u96C6\u5B9A\u4E49\u8F93\u5165\u5C5E\u6027"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".y = df.values[:, -"),s("span",{class:"hljs-number"},"1"),a("]  "),s("span",{class:"hljs-comment"},"# \u6839\u636E\u4F60\u7684\u6570\u636E\u96C6\u5B9A\u4E49\u8F93\u51FA\u5C5E\u6027"),a(`
        `),s("span",{class:"hljs-comment"},"# \u786E\u4FDD\u8F93\u5165\u7684\u6570\u636E\u662F\u6D6E\u70B9\u578B"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".X = "),s("span",{class:"hljs-variable language_"},"self"),a(".X.astype("),s("span",{class:"hljs-string"},"'float32'"),a(`)
        `),s("span",{class:"hljs-comment"},"# \u4F7F\u7528\u6D6E\u70B9\u578B\u6807\u7B7E\u7F16\u7801\u539F\u8F93\u51FA"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".y = LabelEncoder().fit_transform("),s("span",{class:"hljs-variable language_"},"self"),a(`.y)

    `),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u83B7\u5F97\u6570\u636E\u96C6\u957F\u5EA6\u7684\u65B9\u6CD5"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"__len__"),a("("),s("span",{class:"hljs-params"},"self"),a(`):
        `),s("span",{class:"hljs-keyword"},"return"),a(),s("span",{class:"hljs-built_in"},"len"),a("("),s("span",{class:"hljs-variable language_"},"self"),a(`.X)

    `),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u83B7\u5F97\u67D0\u4E00\u884C\u6570\u636E\u7684\u65B9\u6CD5"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"__getitem__"),a("("),s("span",{class:"hljs-params"},"self, idx"),a(`):
        `),s("span",{class:"hljs-keyword"},"return"),a(" ["),s("span",{class:"hljs-variable language_"},"self"),a(".X[idx], "),s("span",{class:"hljs-variable language_"},"self"),a(`.y[idx]]

    `),s("span",{class:"hljs-comment"},"# \u5728\u7C7B\u5185\u90E8\u5B9A\u4E49\u5212\u5206\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u7684\u65B9\u6CD5\uFF0C\u5728\u672C\u4F8B\u4E2D\uFF0C\u8BAD\u7EC3\u96C6\u6BD4\u4F8B\u4E3A 0.67\uFF0C\u6D4B\u8BD5\u96C6\u6BD4\u4F8B\u4E3A 0.33"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"get_splits"),a("("),s("span",{class:"hljs-params"},[a("self, n_test="),s("span",{class:"hljs-number"},"0.33")]),a(`):
        `),s("span",{class:"hljs-comment"},"# \u786E\u5B9A\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u7684\u5C3A\u5BF8"),a(`
        test_size = `),s("span",{class:"hljs-built_in"},"round"),a("(n_test * "),s("span",{class:"hljs-built_in"},"len"),a("("),s("span",{class:"hljs-variable language_"},"self"),a(`.X))
        train_size = `),s("span",{class:"hljs-built_in"},"len"),a("("),s("span",{class:"hljs-variable language_"},"self"),a(`.X) - test_size
        `),s("span",{class:"hljs-comment"},"# \u6839\u636E\u5C3A\u5BF8\u5212\u5206\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u5E76\u8FD4\u56DE"),a(`
        `),s("span",{class:"hljs-keyword"},"return"),a(" random_split("),s("span",{class:"hljs-variable language_"},"self"),a(`, [train_size, test_size])


`),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u6570\u636E\u96C6\u8DEF\u5F84\uFF08\u5728\u672C\u4F8B\u4E2D\uFF0C\u6570\u636E\u96C6\u9700\u4E3A csv \u6587\u4EF6\uFF09"),a(`
data_path = `),s("span",{class:"hljs-string"},"'/Users/yongchin/Downloads/a.csv'"),a(`
`),s("span",{class:"hljs-comment"},"# \u5B9E\u4F8B\u5316\u6570\u636E\u96C6"),a(`
dataset = CSVDataset(data_path)
`),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a("f'\u8F93\u5165\u77E9\u9635\u7684\u5F62\u72B6\u662F\uFF1A"),s("span",{class:"hljs-subst"},"{dataset.X.shape}"),a("'")]),a(`)
`),s("span",{class:"hljs-comment"},"# dataset.X  # \u67E5\u770B\u8F93\u5165\u77E9\u9635 dataset.X"),a(`

`),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a("f'\u8F93\u51FA\u77E9\u9635\u7684\u5F62\u72B6\u662F\uFF1A"),s("span",{class:"hljs-subst"},"{dataset.y.shape}"),a("'")]),a(`)
`),s("span",{class:"hljs-comment"},"# dataset.y  # \u67E5\u770B\u8F93\u51FA\u77E9\u9635"),a(`


...
`),s("span",{class:"hljs-comment"},"# \u786E\u5B9A\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u7684\u5C3A\u5BF8"),a(`
n_test = `),s("span",{class:"hljs-number"},"0.33"),a("  "),s("span",{class:"hljs-comment"},"# \u5728\u672C\u4F8B\u4E2D\uFF0C\u8BAD\u7EC3\u96C6\u6BD4\u4F8B\u4E3A 0.67\uFF0C\u6D4B\u8BD5\u96C6\u6BD4\u4F8B\u4E3A 0.33"),a(`
test_size = `),s("span",{class:"hljs-built_in"},"round"),a("(n_test * "),s("span",{class:"hljs-built_in"},"len"),a(`(dataset.X))
train_size = `),s("span",{class:"hljs-built_in"},"len"),a(`(dataset.X) - test_size

`),s("span",{class:"hljs-comment"},"# \u6839\u636E\u5C3A\u5BF8\u5212\u5206\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u5E76\u8FD4\u56DE"),a(`
train, test = random_split(dataset, [train_size, test_size])

`),s("span",{class:"hljs-comment"},"# \u8BA9\u6211\u4EEC\u67E5\u770B\u4E00\u4E0B\u521B\u5EFA\u7684\u8BAD\u7EC3\u96C6\u7684\u7C7B\u578B\u548C\u957F\u5EA6"),a(`
`),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a("f'\u5212\u5206\u7684\u8BAD\u7EC3\u96C6\u7684\u6570\u636E\u7C7B\u578B\u662F\uFF1A"),s("span",{class:"hljs-subst"},[a("{"),s("span",{class:"hljs-built_in"},"type"),a("(train)}")]),a("'")]),a(`)
`),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a("f'\u5212\u5206\u7684\u8BAD\u7EC3\u96C6\u957F\u5EA6\u662F\uFF1A"),s("span",{class:"hljs-subst"},[a("{"),s("span",{class:"hljs-built_in"},"len"),a("(train)}")]),a("'")]),a(`)
`),s("span",{class:"hljs-comment"},"# \u4E3A\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u521B\u5EFA DataLoader"),a(`
train_dl = DataLoader(train, batch_size=`),s("span",{class:"hljs-number"},"32"),a(", shuffle="),s("span",{class:"hljs-literal"},"True"),a(`)
test_dl = DataLoader(test, batch_size=`),s("span",{class:"hljs-number"},"1024"),a(", shuffle="),s("span",{class:"hljs-literal"},"False"),a(`)
`),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-built_in"},"len"),a("(train_dl.dataset), "),s("span",{class:"hljs-built_in"},"len"),a(`(test_dl.dataset))

`),s("span",{class:"hljs-comment"},"# \u5728\u672C\u4F8B\u4E2D\uFF0Ctrain_dl \u7684 batch_size \u4E3A 32\uFF0C\u6570\u636E\u5C06\u968F\u673A\u6392\u5E8F\u3002\u8BA9\u6211\u4EEC\u6765\u67E5\u770B\u4E00\u4E0B train_dl"),a(`
n_inputs = `),s("span",{class:"hljs-built_in"},"len"),a(`(train_dl)
`),s("span",{class:"hljs-keyword"},"for"),a(" i, (inputs, targets) "),s("span",{class:"hljs-keyword"},"in"),a(),s("span",{class:"hljs-built_in"},"enumerate"),a(`(train_dl):
    `),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a("f'\u7B2C "),s("span",{class:"hljs-subst"},"{i}"),a(" \u4E2A batch \u6709 "),s("span",{class:"hljs-subst"},[a("{"),s("span",{class:"hljs-built_in"},"len"),a("(inputs)}")]),a(" \u4E2A\u6570\u636E\uFF0C\u5176\u4E2D\u8F93\u5165\u77E9\u9635\u7684\u5F62\u72B6\u662F "),s("span",{class:"hljs-subst"},"{inputs.shape}"),a("\uFF0C\u8F93\u51FA\u77E9\u9635\u7684\u5F62\u72B6\u662F "),s("span",{class:"hljs-subst"},"{targets.shape}"),a("'")]),a(`)
`),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a("f'\u5171\u6709 "),s("span",{class:"hljs-subst"},"{n_inputs}"),a(" \u4E2A batches'")]),a(`)

`)])]),s("h3",{id:"%E5%AE%9A%E4%B9%89%E6%A8%A1%E5%9E%8B",tabindex:"-1"},"\u5B9A\u4E49\u6A21\u578B"),s("p",null,"\u4E00\u822CMLP\u6A21\u578B\uFF1A"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"from"),a(" torch.nn "),s("span",{class:"hljs-keyword"},"import"),a(` Linear, Conv2d, MaxPool2d
`),s("span",{class:"hljs-keyword"},"from"),a(" torch.nn "),s("span",{class:"hljs-keyword"},"import"),a(` ReLU
`),s("span",{class:"hljs-keyword"},"from"),a(" torch.nn "),s("span",{class:"hljs-keyword"},"import"),a(` Softmax
`),s("span",{class:"hljs-keyword"},"from"),a(" torch.nn "),s("span",{class:"hljs-keyword"},"import"),a(` Module
`),s("span",{class:"hljs-keyword"},"from"),a(" torch.nn.init "),s("span",{class:"hljs-keyword"},"import"),a(` kaiming_uniform_
`),s("span",{class:"hljs-keyword"},"from"),a(" torch.nn.init "),s("span",{class:"hljs-keyword"},"import"),a(` xavier_uniform_


`),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u6A21\u578B"),a(`
`),s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"MLP"),a("("),s("span",{class:"hljs-title class_ inherited__"},"Module"),a(`):
    `),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u6A21\u578B\u5C5E\u6027"),a(`
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"__init__"),a("("),s("span",{class:"hljs-params"},"self, n_inputs"),a(`):
        `),s("span",{class:"hljs-built_in"},"super"),a("(MLP, "),s("span",{class:"hljs-variable language_"},"self"),a(`).__init__()
        `),s("span",{class:"hljs-comment"},"# \u8F93\u51FA\u5C42"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".hidden1 = Linear(n_inputs, "),s("span",{class:"hljs-number"},"10"),a(`)
        kaiming_uniform_(`),s("span",{class:"hljs-variable language_"},"self"),a(".hidden1.weight, nonlinearity="),s("span",{class:"hljs-string"},"'relu'"),a(`)
        `),s("span",{class:"hljs-variable language_"},"self"),a(`.act1 = ReLU()
        `),s("span",{class:"hljs-comment"},"# \u7B2C\u4E8C\u4E2A\u9690\u85CF\u5C42"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".hidden2 = Linear("),s("span",{class:"hljs-number"},"10"),a(", "),s("span",{class:"hljs-number"},"8"),a(`)
        kaiming_uniform_(`),s("span",{class:"hljs-variable language_"},"self"),a(".hidden2.weight, nonlinearity="),s("span",{class:"hljs-string"},"'relu'"),a(`)
        `),s("span",{class:"hljs-variable language_"},"self"),a(`.act2 = ReLU()
        `),s("span",{class:"hljs-comment"},"# \u7B2C\u4E09\u5C42"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".hidden3 = Linear("),s("span",{class:"hljs-number"},"8"),a(", "),s("span",{class:"hljs-number"},"3"),a(`)
        xavier_uniform_(`),s("span",{class:"hljs-variable language_"},"self"),a(`.hidden3.weight)
        `),s("span",{class:"hljs-variable language_"},"self"),a(".act3 = Softmax(dim="),s("span",{class:"hljs-number"},"1"),a(`)

`)])]),s("p",null,"\u7B80\u5355\u7684CNN\u6A21\u578B"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"class"),a(),s("span",{class:"hljs-title class_"},"CNN"),a("("),s("span",{class:"hljs-title class_ inherited__"},"Module"),a(`):
    `),s("span",{class:"hljs-keyword"},"def"),a(),s("span",{class:"hljs-title function_"},"__init__"),a("("),s("span",{class:"hljs-params"},"self, n_channels"),a(`):
        `),s("span",{class:"hljs-built_in"},"super"),a("(CNN, "),s("span",{class:"hljs-variable language_"},"self"),a(`).__init__()
        `),s("span",{class:"hljs-comment"},"# \u8F93\u5165\u5230\u5377\u79EF\u5C42(\u901A\u9053\u6570\uFF0C\u5377\u79EF\u6838\u6570\u76EE32\uFF0C\u5377\u79EF\u6838\u5FC3\u5927\u5C0F3x3)"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".hidden1 = Conv2d(n_channels, "),s("span",{class:"hljs-number"},"32"),a(", ("),s("span",{class:"hljs-number"},"3"),a(", "),s("span",{class:"hljs-number"},"3"),a(`))
        kaiming_uniform_(`),s("span",{class:"hljs-variable language_"},"self"),a(".hidden1.weight, nonlinearity="),s("span",{class:"hljs-string"},"'relu'"),a(`)
        `),s("span",{class:"hljs-variable language_"},"self"),a(`.act1 = ReLU()
        `),s("span",{class:"hljs-comment"},"# \u6C60\u5316\u5C421(\u6C60\u5316\u6838\u5927\u5C0F2x2\uFF0C\u6B65\u957F)"),a(`
        `),s("span",{class:"hljs-variable language_"},"self"),a(".pool1 = MaxPool2d(("),s("span",{class:"hljs-number"},"2"),a(", "),s("span",{class:"hljs-number"},"2"),a("), stride=("),s("span",{class:"hljs-number"},"2"),a(", "),s("span",{class:"hljs-number"},"2"),a(`))
`)])]),s("h3",{id:"%E8%AE%AD%E7%BB%83%E6%A8%A1%E5%9E%8B",tabindex:"-1"},"\u8BAD\u7EC3\u6A21\u578B"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-comment"},"# \u8BAD\u7EC3\u6A21\u578B"),a(`
model = MLP(n_inputs=n_inputs)
`),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u4F18\u5316\u5668"),a(`
criterion = CrossEntropyLoss()
optimizer = SGD(model.parameters(), lr=`),s("span",{class:"hljs-number"},"0.01"),a(", momentum="),s("span",{class:"hljs-number"},"0.9"),a(`)
`),s("span",{class:"hljs-comment"},"# \u679A\u4E3E epochs"),a(`
`),s("span",{class:"hljs-keyword"},"for"),a(" epoch "),s("span",{class:"hljs-keyword"},"in"),a(),s("span",{class:"hljs-built_in"},"range"),a("("),s("span",{class:"hljs-number"},"500"),a(`):
    `),s("span",{class:"hljs-comment"},"# \u679A\u4E3E mini-batches"),a(`
    `),s("span",{class:"hljs-keyword"},"for"),a(" i, (inputs, targets) "),s("span",{class:"hljs-keyword"},"in"),a(),s("span",{class:"hljs-built_in"},"enumerate"),a(`(train_dl):
        `),s("span",{class:"hljs-comment"},"# \u68AF\u5EA6\u6E05\u9664"),a(`
        optimizer.zero_grad()
        `),s("span",{class:"hljs-comment"},"# \u8BA1\u7B97\u6A21\u578B\u8F93\u51FA"),a(`
        yhat = model(inputs)
        `),s("span",{class:"hljs-comment"},"# \u8BA1\u7B97\u635F\u5931"),a(`
        loss = criterion(yhat, targets)
        `),s("span",{class:"hljs-comment"},"# \u8D21\u732E\u5EA6\u5206\u914D"),a(`
        loss.backward()
        `),s("span",{class:"hljs-comment"},"# \u5347\u7EA7\u6A21\u578B\u6743\u91CD"),a(`
        optimizer.step()
`)])]),s("h3",{id:"%E8%AF%84%E4%BC%B0%E6%A8%A1%E5%9E%8B",tabindex:"-1"},"\u8BC4\u4F30\u6A21\u578B"),s("pre",null,[s("code",{class:"hljs language-python"},[a("predictions, actuals = "),s("span",{class:"hljs-built_in"},"list"),a("(), "),s("span",{class:"hljs-built_in"},"list"),a("()  "),s("span",{class:"hljs-comment"},"# \u5B9E\u4F8B\u5316\u9884\u6D4B\u503C\u5217\u8868\u548C\u9884\u671F\u503C\u5217\u8868"),a(`
`),s("span",{class:"hljs-keyword"},"for"),a(" i, (inputs, targets) "),s("span",{class:"hljs-keyword"},"in"),a(),s("span",{class:"hljs-built_in"},"enumerate"),a(`(test_dl):
    `),s("span",{class:"hljs-comment"},"# \u5728\u6D4B\u8BD5\u96C6\u4E0A\u8BC4\u4F30\u6A21\u578B"),a(`
    yhat = model(inputs)
    `),s("span",{class:"hljs-comment"},"# \u8F6C\u5316\u4E3A numpy \u6570\u636E\u7C7B\u578B"),a(`
    yhat = yhat.detach().numpy()
    actual = targets.numpy()
    `),s("span",{class:"hljs-comment"},"# \u8F6C\u6362\u4E3A\u7C7B\u6807\u7B7E"),a(`
    yhat = argmax(yhat, axis=`),s("span",{class:"hljs-number"},"1"),a(`)
    `),s("span",{class:"hljs-comment"},"# \u4E3A stack reshape \u77E9\u9635"),a(`
    actual = actual.reshape((`),s("span",{class:"hljs-built_in"},"len"),a("(actual), "),s("span",{class:"hljs-number"},"1"),a(`))
    yhat = yhat.reshape((`),s("span",{class:"hljs-built_in"},"len"),a("(yhat), "),s("span",{class:"hljs-number"},"1"),a(`))
    `),s("span",{class:"hljs-comment"},"# \u4FDD\u5B58\u6570\u636E"),a(`
    predictions.append(yhat)
    actuals.append(actual)

predictions, actuals = vstack(predictions), vstack(actuals)
`),s("span",{class:"hljs-comment"},"# \u8BA1\u7B97\u51C6\u786E\u5EA6"),a(`
acc = accuracy_score(actuals, predictions)
`),s("span",{class:"hljs-built_in"},"print"),a(`(acc)
`)])]),s("h3",{id:"%E5%81%9A%E5%87%BA%E9%A2%84%E6%B5%8B",tabindex:"-1"},"\u505A\u51FA\u9884\u6D4B"),s("pre",null,[s("code",{class:"hljs language-python"},[a("row = ["),s("span",{class:"hljs-number"},"4.9"),a(", "),s("span",{class:"hljs-number"},"3"),a(", "),s("span",{class:"hljs-number"},"1.4"),a(", "),s("span",{class:"hljs-number"},"0.2"),a(`]
`),s("span",{class:"hljs-comment"},"# \u5C06\u6570\u636E\u8F6C\u5316\u4E3A Tensor"),a(`
row = Tensor([row])
`),s("span",{class:"hljs-comment"},"# \u505A\u51FA\u9884\u6D4B"),a(`
yhat = model(row)
`),s("span",{class:"hljs-comment"},"# \u91CD\u5199\u4E3A Numpy Array \u683C\u5F0F"),a(`
yhat = yhat.detach().numpy()

`),s("span",{class:"hljs-built_in"},"print"),a("("),s("span",{class:"hljs-string"},[a("f'\u5404\u6807\u7B7E\u53EF\u80FD\u7684\u6982\u7387\uFF1A "),s("span",{class:"hljs-subst"},"{yhat}"),a(" (\u6700\u53EF\u80FD\u7684\u79CD\u7C7B\uFF1Aclass="),s("span",{class:"hljs-subst"},"{argmax(yhat)}"),a(")'")]),a(`)
`)])]),s("p",null,[a("\u53C2\u8003\u8D44\u6599\uFF1A "),s("a",{href:"https://bohrium.dp.tech/notebooks/4914094074",target:"_blank"}," \u5FEB\u901F\u5F00\u59CB PyTorch\uFF5C\u4F7F\u7528 Python \u5EFA\u7ACB\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B")])],-1)])),_:1})}}};export{u as default,h as frontmatter};
