import{_ as t}from"./postLoyout.3aef9384.js";import{o as e,c,w as p,a as s,b as n}from"./app.154f3a53.js";const h=s("div",{class:"markdown-body"},[s("p",null,"\u6574\u7406\u5E76\u8BB0\u5F55\u4E00\u4E9B\u5165\u95E8\u4EBA\u5DE5\u667A\u80FD\u9886\u57DF\u6DF1\u5EA6\u5B66\u4E60\u7684\u8D44\u6599"),s("h2",{id:"%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97",tabindex:"-1"},"\u66F4\u65B0\u65E5\u5FD7"),s("h2",{id:"%E5%BB%BA%E7%AB%8B%E8%8C%83%E5%BC%8F%EF%BC%88%E5%A5%97%E8%B7%AF%EF%BC%89",tabindex:"-1"},"\u5EFA\u7ACB\u8303\u5F0F\uFF08\u5957\u8DEF\uFF09"),s("p",null,"\u6DF1\u5EA6\u5B66\u4E60\u7684\u64CD\u4F5C\u8303\u5F0F\u4E00\u822C\u662F\u8FD9\u6837\u7684"),s("ol",null,[s("li",null,"\u51C6\u5907\u6570\u636E"),s("li",null,"\u5B9A\u4E49\u6A21\u578B"),s("li",null,"\u8BAD\u7EC3\u6A21\u578B"),s("li",null,"\u8BC4\u4F30\u6A21\u578B"),s("li",null,"\u505A\u51FA\u9884\u6D4B")]),s("h3",{id:"%E5%87%86%E5%A4%87%E6%95%B0%E6%8D%AE",tabindex:"-1"},"\u51C6\u5907\u6570\u636E"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"import"),n(" pandas "),s("span",{class:"hljs-keyword"},"as"),n(` pd
`),s("span",{class:"hljs-keyword"},"from"),n(" sklearn.preprocessing "),s("span",{class:"hljs-keyword"},"import"),n(` LabelEncoder
`),s("span",{class:"hljs-keyword"},"from"),n(" torch.utils.data "),s("span",{class:"hljs-keyword"},"import"),n(` Dataset
`),s("span",{class:"hljs-keyword"},"from"),n(" torch.utils.data "),s("span",{class:"hljs-keyword"},"import"),n(` random_split
`),s("span",{class:"hljs-keyword"},"from"),n(" torch.utils.data "),s("span",{class:"hljs-keyword"},"import"),n(` DataLoader


`),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u6570\u636E\u96C6"),n(`
`),s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"CSVDataset"),n("("),s("span",{class:"hljs-title class_ inherited__"},"Dataset"),n(`):
    `),s("span",{class:"hljs-comment"},"# \u5BFC\u5165\u6570\u636E\u96C6"),n(`
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__init__"),n("("),s("span",{class:"hljs-params"},"self, path"),n(`):
        `),s("span",{class:"hljs-comment"},"# \u5BFC\u5165\u4F20\u5165\u8DEF\u5F84\u7684\u6570\u636E\u96C6\u4E3A Pandas DataFrame \u683C\u5F0F"),n(`
        df = pd.read_csv(path, header=`),s("span",{class:"hljs-literal"},"None"),n(`)
        `),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E\u795E\u7ECF\u7F51\u7EDC\u7684\u8F93\u5165\u4E0E\u8F93\u51FA"),n(`
        self.X = df.values[:, :-`),s("span",{class:"hljs-number"},"1"),n("]  "),s("span",{class:"hljs-comment"},"# \u6839\u636E\u4F60\u7684\u6570\u636E\u96C6\u5B9A\u4E49\u8F93\u5165\u5C5E\u6027"),n(`
        self.y = df.values[:, -`),s("span",{class:"hljs-number"},"1"),n("]  "),s("span",{class:"hljs-comment"},"# \u6839\u636E\u4F60\u7684\u6570\u636E\u96C6\u5B9A\u4E49\u8F93\u51FA\u5C5E\u6027"),n(`
        `),s("span",{class:"hljs-comment"},"# \u786E\u4FDD\u8F93\u5165\u7684\u6570\u636E\u662F\u6D6E\u70B9\u578B"),n(`
        self.X = self.X.astype(`),s("span",{class:"hljs-string"},"'float32'"),n(`)
        `),s("span",{class:"hljs-comment"},"# \u4F7F\u7528\u6D6E\u70B9\u578B\u6807\u7B7E\u7F16\u7801\u539F\u8F93\u51FA"),n(`
        self.y = LabelEncoder().fit_transform(self.y)

    `),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u83B7\u5F97\u6570\u636E\u96C6\u957F\u5EA6\u7684\u65B9\u6CD5"),n(`
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__len__"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        `),s("span",{class:"hljs-keyword"},"return"),n(),s("span",{class:"hljs-built_in"},"len"),n(`(self.X)

    `),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u83B7\u5F97\u67D0\u4E00\u884C\u6570\u636E\u7684\u65B9\u6CD5"),n(`
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__getitem__"),n("("),s("span",{class:"hljs-params"},"self, idx"),n(`):
        `),s("span",{class:"hljs-keyword"},"return"),n(` [self.X[idx], self.y[idx]]

    `),s("span",{class:"hljs-comment"},"# \u5728\u7C7B\u5185\u90E8\u5B9A\u4E49\u5212\u5206\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u7684\u65B9\u6CD5\uFF0C\u5728\u672C\u4F8B\u4E2D\uFF0C\u8BAD\u7EC3\u96C6\u6BD4\u4F8B\u4E3A 0.67\uFF0C\u6D4B\u8BD5\u96C6\u6BD4\u4F8B\u4E3A 0.33"),n(`
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"get_splits"),n("("),s("span",{class:"hljs-params"},[n("self, n_test="),s("span",{class:"hljs-number"},"0.33")]),n(`):
        `),s("span",{class:"hljs-comment"},"# \u786E\u5B9A\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u7684\u5C3A\u5BF8"),n(`
        test_size = `),s("span",{class:"hljs-built_in"},"round"),n("(n_test * "),s("span",{class:"hljs-built_in"},"len"),n(`(self.X))
        train_size = `),s("span",{class:"hljs-built_in"},"len"),n(`(self.X) - test_size
        `),s("span",{class:"hljs-comment"},"# \u6839\u636E\u5C3A\u5BF8\u5212\u5206\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u5E76\u8FD4\u56DE"),n(`
        `),s("span",{class:"hljs-keyword"},"return"),n(` random_split(self, [train_size, test_size])


`),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u6570\u636E\u96C6\u8DEF\u5F84\uFF08\u5728\u672C\u4F8B\u4E2D\uFF0C\u6570\u636E\u96C6\u9700\u4E3A csv \u6587\u4EF6\uFF09"),n(`
data_path = `),s("span",{class:"hljs-string"},"'/Users/yongchin/Downloads/a.csv'"),n(`
`),s("span",{class:"hljs-comment"},"# \u5B9E\u4F8B\u5316\u6570\u636E\u96C6"),n(`
dataset = CSVDataset(data_path)
`),s("span",{class:"hljs-built_in"},"print"),n("("),s("span",{class:"hljs-string"},[n("f'\u8F93\u5165\u77E9\u9635\u7684\u5F62\u72B6\u662F\uFF1A"),s("span",{class:"hljs-subst"},"{dataset.X.shape}"),n("'")]),n(`)
`),s("span",{class:"hljs-comment"},"# dataset.X  # \u67E5\u770B\u8F93\u5165\u77E9\u9635 dataset.X"),n(`

`),s("span",{class:"hljs-built_in"},"print"),n("("),s("span",{class:"hljs-string"},[n("f'\u8F93\u51FA\u77E9\u9635\u7684\u5F62\u72B6\u662F\uFF1A"),s("span",{class:"hljs-subst"},"{dataset.y.shape}"),n("'")]),n(`)
`),s("span",{class:"hljs-comment"},"# dataset.y  # \u67E5\u770B\u8F93\u51FA\u77E9\u9635"),n(`


...
`),s("span",{class:"hljs-comment"},"# \u786E\u5B9A\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u7684\u5C3A\u5BF8"),n(`
n_test = `),s("span",{class:"hljs-number"},"0.33"),n("  "),s("span",{class:"hljs-comment"},"# \u5728\u672C\u4F8B\u4E2D\uFF0C\u8BAD\u7EC3\u96C6\u6BD4\u4F8B\u4E3A 0.67\uFF0C\u6D4B\u8BD5\u96C6\u6BD4\u4F8B\u4E3A 0.33"),n(`
test_size = `),s("span",{class:"hljs-built_in"},"round"),n("(n_test * "),s("span",{class:"hljs-built_in"},"len"),n(`(dataset.X))
train_size = `),s("span",{class:"hljs-built_in"},"len"),n(`(dataset.X) - test_size

`),s("span",{class:"hljs-comment"},"# \u6839\u636E\u5C3A\u5BF8\u5212\u5206\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u5E76\u8FD4\u56DE"),n(`
train, test = random_split(dataset, [train_size, test_size])

`),s("span",{class:"hljs-comment"},"# \u8BA9\u6211\u4EEC\u67E5\u770B\u4E00\u4E0B\u521B\u5EFA\u7684\u8BAD\u7EC3\u96C6\u7684\u7C7B\u578B\u548C\u957F\u5EA6"),n(`
`),s("span",{class:"hljs-built_in"},"print"),n("("),s("span",{class:"hljs-string"},[n("f'\u5212\u5206\u7684\u8BAD\u7EC3\u96C6\u7684\u6570\u636E\u7C7B\u578B\u662F\uFF1A"),s("span",{class:"hljs-subst"},[n("{"),s("span",{class:"hljs-built_in"},"type"),n("(train)}")]),n("'")]),n(`)
`),s("span",{class:"hljs-built_in"},"print"),n("("),s("span",{class:"hljs-string"},[n("f'\u5212\u5206\u7684\u8BAD\u7EC3\u96C6\u957F\u5EA6\u662F\uFF1A"),s("span",{class:"hljs-subst"},[n("{"),s("span",{class:"hljs-built_in"},"len"),n("(train)}")]),n("'")]),n(`)
`),s("span",{class:"hljs-comment"},"# \u4E3A\u8BAD\u7EC3\u96C6\u548C\u6D4B\u8BD5\u96C6\u521B\u5EFA DataLoader"),n(`
train_dl = DataLoader(train, batch_size=`),s("span",{class:"hljs-number"},"32"),n(", shuffle="),s("span",{class:"hljs-literal"},"True"),n(`)
test_dl = DataLoader(test, batch_size=`),s("span",{class:"hljs-number"},"1024"),n(", shuffle="),s("span",{class:"hljs-literal"},"False"),n(`)
`),s("span",{class:"hljs-built_in"},"print"),n("("),s("span",{class:"hljs-built_in"},"len"),n("(train_dl.dataset), "),s("span",{class:"hljs-built_in"},"len"),n(`(test_dl.dataset))

`),s("span",{class:"hljs-comment"},"# \u5728\u672C\u4F8B\u4E2D\uFF0Ctrain_dl \u7684 batch_size \u4E3A 32\uFF0C\u6570\u636E\u5C06\u968F\u673A\u6392\u5E8F\u3002\u8BA9\u6211\u4EEC\u6765\u67E5\u770B\u4E00\u4E0B train_dl"),n(`
n_inputs = `),s("span",{class:"hljs-built_in"},"len"),n(`(train_dl)
`),s("span",{class:"hljs-keyword"},"for"),n(" i, (inputs, targets) "),s("span",{class:"hljs-keyword"},"in"),n(),s("span",{class:"hljs-built_in"},"enumerate"),n(`(train_dl):
    `),s("span",{class:"hljs-built_in"},"print"),n("("),s("span",{class:"hljs-string"},[n("f'\u7B2C "),s("span",{class:"hljs-subst"},"{i}"),n(" \u4E2A batch \u6709 "),s("span",{class:"hljs-subst"},[n("{"),s("span",{class:"hljs-built_in"},"len"),n("(inputs)}")]),n(" \u4E2A\u6570\u636E\uFF0C\u5176\u4E2D\u8F93\u5165\u77E9\u9635\u7684\u5F62\u72B6\u662F "),s("span",{class:"hljs-subst"},"{inputs.shape}"),n("\uFF0C\u8F93\u51FA\u77E9\u9635\u7684\u5F62\u72B6\u662F "),s("span",{class:"hljs-subst"},"{targets.shape}"),n("'")]),n(`)
`),s("span",{class:"hljs-built_in"},"print"),n("("),s("span",{class:"hljs-string"},[n("f'\u5171\u6709 "),s("span",{class:"hljs-subst"},"{n_inputs}"),n(" \u4E2A batches'")]),n(`)

`)])]),s("h3",{id:"%E5%AE%9A%E4%B9%89%E6%A8%A1%E5%9E%8B",tabindex:"-1"},"\u5B9A\u4E49\u6A21\u578B"),s("p",null,"\u4E00\u822CMLP\u6A21\u578B\uFF1A"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"from"),n(" torch.nn "),s("span",{class:"hljs-keyword"},"import"),n(` Linear, Conv2d, MaxPool2d
`),s("span",{class:"hljs-keyword"},"from"),n(" torch.nn "),s("span",{class:"hljs-keyword"},"import"),n(` ReLU
`),s("span",{class:"hljs-keyword"},"from"),n(" torch.nn "),s("span",{class:"hljs-keyword"},"import"),n(` Softmax
`),s("span",{class:"hljs-keyword"},"from"),n(" torch.nn "),s("span",{class:"hljs-keyword"},"import"),n(` Module
`),s("span",{class:"hljs-keyword"},"from"),n(" torch.nn.init "),s("span",{class:"hljs-keyword"},"import"),n(` kaiming_uniform_
`),s("span",{class:"hljs-keyword"},"from"),n(" torch.nn.init "),s("span",{class:"hljs-keyword"},"import"),n(` xavier_uniform_


`),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u6A21\u578B"),n(`
`),s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"MLP"),n("("),s("span",{class:"hljs-title class_ inherited__"},"Module"),n(`):
    `),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u6A21\u578B\u5C5E\u6027"),n(`
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__init__"),n("("),s("span",{class:"hljs-params"},"self, n_inputs"),n(`):
        `),s("span",{class:"hljs-built_in"},"super"),n(`(MLP, self).__init__()
        `),s("span",{class:"hljs-comment"},"# \u8F93\u51FA\u5C42"),n(`
        self.hidden1 = Linear(n_inputs, `),s("span",{class:"hljs-number"},"10"),n(`)
        kaiming_uniform_(self.hidden1.weight, nonlinearity=`),s("span",{class:"hljs-string"},"'relu'"),n(`)
        self.act1 = ReLU()
        `),s("span",{class:"hljs-comment"},"# \u7B2C\u4E8C\u4E2A\u9690\u85CF\u5C42"),n(`
        self.hidden2 = Linear(`),s("span",{class:"hljs-number"},"10"),n(", "),s("span",{class:"hljs-number"},"8"),n(`)
        kaiming_uniform_(self.hidden2.weight, nonlinearity=`),s("span",{class:"hljs-string"},"'relu'"),n(`)
        self.act2 = ReLU()
        `),s("span",{class:"hljs-comment"},"# \u7B2C\u4E09\u5C42"),n(`
        self.hidden3 = Linear(`),s("span",{class:"hljs-number"},"8"),n(", "),s("span",{class:"hljs-number"},"3"),n(`)
        xavier_uniform_(self.hidden3.weight)
        self.act3 = Softmax(dim=`),s("span",{class:"hljs-number"},"1"),n(`)

`)])]),s("p",null,"\u7B80\u5355\u7684CNN\u6A21\u578B"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"CNN"),n("("),s("span",{class:"hljs-title class_ inherited__"},"Module"),n(`):
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__init__"),n("("),s("span",{class:"hljs-params"},"self, n_channels"),n(`):
        `),s("span",{class:"hljs-built_in"},"super"),n(`(CNN, self).__init__()
        `),s("span",{class:"hljs-comment"},"# \u8F93\u5165\u5230\u5377\u79EF\u5C42(\u901A\u9053\u6570\uFF0C\u5377\u79EF\u6838\u6570\u76EE32\uFF0C\u5377\u79EF\u6838\u5FC3\u5927\u5C0F3x3)"),n(`
        self.hidden1 = Conv2d(n_channels, `),s("span",{class:"hljs-number"},"32"),n(", ("),s("span",{class:"hljs-number"},"3"),n(", "),s("span",{class:"hljs-number"},"3"),n(`))
        kaiming_uniform_(self.hidden1.weight, nonlinearity=`),s("span",{class:"hljs-string"},"'relu'"),n(`)
        self.act1 = ReLU()
        `),s("span",{class:"hljs-comment"},"# \u6C60\u5316\u5C421(\u6C60\u5316\u6838\u5927\u5C0F2x2\uFF0C\u6B65\u957F)"),n(`
        self.pool1 = MaxPool2d((`),s("span",{class:"hljs-number"},"2"),n(", "),s("span",{class:"hljs-number"},"2"),n("), stride=("),s("span",{class:"hljs-number"},"2"),n(", "),s("span",{class:"hljs-number"},"2"),n(`))
`)])]),s("h3",{id:"%E8%AE%AD%E7%BB%83%E6%A8%A1%E5%9E%8B",tabindex:"-1"},"\u8BAD\u7EC3\u6A21\u578B"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-comment"},"# \u8BAD\u7EC3\u6A21\u578B"),n(`
model = MLP(n_inputs=n_inputs)
`),s("span",{class:"hljs-comment"},"# \u5B9A\u4E49\u4F18\u5316\u5668"),n(`
criterion = CrossEntropyLoss()
optimizer = SGD(model.parameters(), lr=`),s("span",{class:"hljs-number"},"0.01"),n(", momentum="),s("span",{class:"hljs-number"},"0.9"),n(`)
`),s("span",{class:"hljs-comment"},"# \u679A\u4E3E epochs"),n(`
`),s("span",{class:"hljs-keyword"},"for"),n(" epoch "),s("span",{class:"hljs-keyword"},"in"),n(),s("span",{class:"hljs-built_in"},"range"),n("("),s("span",{class:"hljs-number"},"500"),n(`):
    `),s("span",{class:"hljs-comment"},"# \u679A\u4E3E mini-batches"),n(`
    `),s("span",{class:"hljs-keyword"},"for"),n(" i, (inputs, targets) "),s("span",{class:"hljs-keyword"},"in"),n(),s("span",{class:"hljs-built_in"},"enumerate"),n(`(train_dl):
        `),s("span",{class:"hljs-comment"},"# \u68AF\u5EA6\u6E05\u9664"),n(`
        optimizer.zero_grad()
        `),s("span",{class:"hljs-comment"},"# \u8BA1\u7B97\u6A21\u578B\u8F93\u51FA"),n(`
        yhat = model(inputs)
        `),s("span",{class:"hljs-comment"},"# \u8BA1\u7B97\u635F\u5931"),n(`
        loss = criterion(yhat, targets)
        `),s("span",{class:"hljs-comment"},"# \u8D21\u732E\u5EA6\u5206\u914D"),n(`
        loss.backward()
        `),s("span",{class:"hljs-comment"},"# \u5347\u7EA7\u6A21\u578B\u6743\u91CD"),n(`
        optimizer.step()
`)])]),s("h3",{id:"%E8%AF%84%E4%BC%B0%E6%A8%A1%E5%9E%8B",tabindex:"-1"},"\u8BC4\u4F30\u6A21\u578B"),s("pre",null,[s("code",{class:"hljs language-python"},[n("predictions, actuals = "),s("span",{class:"hljs-built_in"},"list"),n("(), "),s("span",{class:"hljs-built_in"},"list"),n("()  "),s("span",{class:"hljs-comment"},"# \u5B9E\u4F8B\u5316\u9884\u6D4B\u503C\u5217\u8868\u548C\u9884\u671F\u503C\u5217\u8868"),n(`
`),s("span",{class:"hljs-keyword"},"for"),n(" i, (inputs, targets) "),s("span",{class:"hljs-keyword"},"in"),n(),s("span",{class:"hljs-built_in"},"enumerate"),n(`(test_dl):
    `),s("span",{class:"hljs-comment"},"# \u5728\u6D4B\u8BD5\u96C6\u4E0A\u8BC4\u4F30\u6A21\u578B"),n(`
    yhat = model(inputs)
    `),s("span",{class:"hljs-comment"},"# \u8F6C\u5316\u4E3A numpy \u6570\u636E\u7C7B\u578B"),n(`
    yhat = yhat.detach().numpy()
    actual = targets.numpy()
    `),s("span",{class:"hljs-comment"},"# \u8F6C\u6362\u4E3A\u7C7B\u6807\u7B7E"),n(`
    yhat = argmax(yhat, axis=`),s("span",{class:"hljs-number"},"1"),n(`)
    `),s("span",{class:"hljs-comment"},"# \u4E3A stack reshape \u77E9\u9635"),n(`
    actual = actual.reshape((`),s("span",{class:"hljs-built_in"},"len"),n("(actual), "),s("span",{class:"hljs-number"},"1"),n(`))
    yhat = yhat.reshape((`),s("span",{class:"hljs-built_in"},"len"),n("(yhat), "),s("span",{class:"hljs-number"},"1"),n(`))
    `),s("span",{class:"hljs-comment"},"# \u4FDD\u5B58\u6570\u636E"),n(`
    predictions.append(yhat)
    actuals.append(actual)

predictions, actuals = vstack(predictions), vstack(actuals)
`),s("span",{class:"hljs-comment"},"# \u8BA1\u7B97\u51C6\u786E\u5EA6"),n(`
acc = accuracy_score(actuals, predictions)
`),s("span",{class:"hljs-built_in"},"print"),n(`(acc)
`)])]),s("h3",{id:"%E5%81%9A%E5%87%BA%E9%A2%84%E6%B5%8B",tabindex:"-1"},"\u505A\u51FA\u9884\u6D4B"),s("pre",null,[s("code",{class:"hljs language-python"},[n("row = ["),s("span",{class:"hljs-number"},"4.9"),n(", "),s("span",{class:"hljs-number"},"3"),n(", "),s("span",{class:"hljs-number"},"1.4"),n(", "),s("span",{class:"hljs-number"},"0.2"),n(`]
`),s("span",{class:"hljs-comment"},"# \u5C06\u6570\u636E\u8F6C\u5316\u4E3A Tensor"),n(`
row = Tensor([row])
`),s("span",{class:"hljs-comment"},"# \u505A\u51FA\u9884\u6D4B"),n(`
yhat = model(row)
`),s("span",{class:"hljs-comment"},"# \u91CD\u5199\u4E3A Numpy Array \u683C\u5F0F"),n(`
yhat = yhat.detach().numpy()

`),s("span",{class:"hljs-built_in"},"print"),n("("),s("span",{class:"hljs-string"},[n("f'\u5404\u6807\u7B7E\u53EF\u80FD\u7684\u6982\u7387\uFF1A "),s("span",{class:"hljs-subst"},"{yhat}"),n(" (\u6700\u53EF\u80FD\u7684\u79CD\u7C7B\uFF1Aclass="),s("span",{class:"hljs-subst"},"{argmax(yhat)}"),n(")'")]),n(`)
`)])]),s("p",null,[n("\u53C2\u8003\u8D44\u6599\uFF1A "),s("a",{href:"https://bohrium.dp.tech/notebooks/4914094074",target:"_blank"}," \u5FEB\u901F\u5F00\u59CB PyTorch\uFF5C\u4F7F\u7528 Python \u5EFA\u7ACB\u6DF1\u5EA6\u5B66\u4E60\u6A21\u578B")])],-1),i={title:"\u4ECE\u96F6\u5F00\u59CB\u7684\u4EBA\u5DE5\u667A\u80FD(\u6301\u7EED\u66F4\u65B0)",date:"2024-06-06T15:22:07.000Z",lang:"zh",type:"dev",abstract:"2023 \u5E74\uFF0C\u6700\u706B\u7684\u53EF\u80FD\u5C31\u662F openAI \u4E86\uFF0C\u5176\u7EC4\u7EC7\u4EE3\u8868\u7684\u4EA7\u54C1 chatGTP\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5DF2\u7ECF\u6709\u6240\u8033\u95FB\u3002"},u={__name:"20240606",setup(r,{expose:a}){return a({frontmatter:{title:"\u4ECE\u96F6\u5F00\u59CB\u7684\u4EBA\u5DE5\u667A\u80FD(\u6301\u7EED\u66F4\u65B0)",date:"2024-06-06T15:22:07.000Z",lang:"zh",type:"dev",abstract:"2023 \u5E74\uFF0C\u6700\u706B\u7684\u53EF\u80FD\u5C31\u662F openAI \u4E86\uFF0C\u5176\u7EC4\u7EC7\u4EE3\u8868\u7684\u4EA7\u54C1 chatGTP\uFF0C\u76F8\u4FE1\u5927\u5BB6\u5DF2\u7ECF\u6709\u6240\u8033\u95FB\u3002"}}),(o,m)=>{const l=t;return e(),c(l,{frontmatter:i},{default:p(()=>[h]),_:1})}}};export{u as default,i as frontmatter};
