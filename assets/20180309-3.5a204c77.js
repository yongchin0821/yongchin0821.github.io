import{_ as e}from"./postLoyout.c67fe7fe.js";import{o as t,c as p,w as i,a as s,b as l}from"./app.6995195a.js";const c=s("div",{class:"markdown-body"},[s("p",null,"\u8FD9\u4E00\u7BC7\u6765\u8BB2\u89E3\u81EA\u5B9A\u4E49\u63A7\u4EF6\u7684\u79FB\u52A8\u8F68\u8FF9"),s("p",null,"\u539F\u7406\uFF1A\u6211\u4EEC\u91C7\u7528QPainterPath\u5148\u753B\u4E00\u4E2A\u5F27\u7EBF\uFF0C\u7136\u540E\u52A0\u8F7D\u4E00\u4E2A\u7269\u4F53\u8BA9\u7269\u4F53\u79FB\u52A8\uFF0C\u8BBE\u7F6E100\u4E2A\u5173\u952E\u5E27\uFF0C\u6BCF\u4E2A\u5173\u952E\u5E27\u7269\u4F53\u7684\u5750\u6807\u4F4D\u7F6E\u5C31\u662F\u5F27\u7EBF\u7684\u5750\u6807\u4F4D\u7F6E\uFF0C\u8FD9\u6837\u5C31\u80FD\u8FBE\u5230\u6309\u7167\u6307\u5B9A\u8F68\u8FF9\u79FB\u52A8"),s("p",null,[l("\u9996\u5148\uFF0C\u6211\u4EEC\u91CD\u5199"),s("strong",null,"QLabel"),l("\uFF0C\u52A0\u8F7D\u4E00\u4E2A\u5C0F\u9ED1\u7403\u5230QLabel\u4E0A")]),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"Ball"),l("("),s("span",{class:"hljs-title class_ inherited__"},"QLabel"),l(`):
    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"__init__"),l("("),s("span",{class:"hljs-params"},"self, parent"),l(`):
        `),s("span",{class:"hljs-built_in"},"super"),l(`(Ball, self).__init__(parent)

        self.pix = QPixmap(`),s("span",{class:"hljs-string"},'"../ball.png"'),l(")  "),s("span",{class:"hljs-comment"},"# \u52A0\u8F7D\u4E00\u4E2Aball\u7684\u56FE\u7247"),l(`
        self.h = self.pix.height()  `),s("span",{class:"hljs-comment"},"# ball\u7684\u9AD8\u5EA6"),l(`
        self.w = self.pix.width()  `),s("span",{class:"hljs-comment"},"# ball\u7684\u5BBD\u5EA6"),l(`

        self.setPixmap(self.pix)  `),s("span",{class:"hljs-comment"},"# \u628Aball\u52A0\u8F7D\u5230label\u4E0A"),l(`

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"_set_pos"),l("("),s("span",{class:"hljs-params"},"self, pos"),l(`):
        self.move(pos.x() - self.w / `),s("span",{class:"hljs-number"},"2"),l(", pos.y() - self.h / "),s("span",{class:"hljs-number"},"2"),l(`)

    pos = pyqtProperty(QPointF, fset=_set_pos)
`)])]),s("p",null,[l("\u7136\u540E\u6211\u4EEC\u7528"),s("strong",null,"QPainterPath"),l("\u6765\u753B\u5F27\u7EBF\uFF0C\u5148\u8BBE\u7F6E\u5F27\u7EBF\uFF1A")]),s("pre",null,[s("code",{class:"hljs language-python"},[l("    "),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"initView"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        self.path = QPainterPath()
        self.path.moveTo(`),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"30"),l(`)
        self.path.cubicTo(`),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"200"),l(", "),s("span",{class:"hljs-number"},"350"),l(", "),s("span",{class:"hljs-number"},"350"),l(", "),s("span",{class:"hljs-number"},"30"),l(")  "),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E\u5F27\u7EBF\u7684\u6837\u5B50"),l(`
`)])]),s("p",null,[l("\u518D\u901A\u8FC7"),s("strong",null,"paintEvent"),l("\u7ED8\u5236\u5F27\u7EBF\uFF1A")]),s("pre",null,[s("code",{class:"hljs language-python"},[l("    "),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"paintEvent"),l("("),s("span",{class:"hljs-params"},"self, e"),l(`):
            qp = QPainter()
            qp.begin(self)
            qp.setRenderHint(QPainter.Antialiasing)
            qp.drawPath(self.path)  `),s("span",{class:"hljs-comment"},"# \u753B\u5F27\u7EBF"),l(`
            qp.end()
`)])]),s("h3",{id:"%E6%9C%80%E5%90%8E%E7%BB%84%E5%90%88%E8%B5%B7%E6%9D%A5%E5%B0%B1%E8%A1%8C%E4%BA%86%EF%BC%8C%E5%89%A9%E4%B8%8B%E7%9A%84%E4%B8%8D%E9%9A%BE%EF%BC%8C%E4%B8%8B%E9%9D%A2%E6%98%AF%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81%EF%BC%9A%EF%BC%9A",tabindex:"-1"},"\u6700\u540E\u7EC4\u5408\u8D77\u6765\u5C31\u884C\u4E86\uFF0C\u5269\u4E0B\u7684\u4E0D\u96BE\uFF0C\u4E0B\u9762\u662F\u5B8C\u6574\u4EE3\u7801\uFF1A\uFF1A"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-comment"},"#!/usr/bin/python3"),l(`
`),s("span",{class:"hljs-comment"},"# -*- coding: utf-8 -*-"),l(`

`),s("span",{class:"hljs-string"},`"""
PyQt5 Animation tutorial

This program will show along curve with QPropertyAnimation.

Author: Semishigure 401219180@qq.com
Last edited: 2018.03.02
"""`),l(`

`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtWidgets "),s("span",{class:"hljs-keyword"},"import"),l(` *
`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtGui "),s("span",{class:"hljs-keyword"},"import"),l(` *
`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtCore "),s("span",{class:"hljs-keyword"},"import"),l(` *
`),s("span",{class:"hljs-keyword"},"import"),l(` sys


`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"Ball"),l("("),s("span",{class:"hljs-title class_ inherited__"},"QLabel"),l(`):
    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"__init__"),l("("),s("span",{class:"hljs-params"},"self, parent"),l(`):
        `),s("span",{class:"hljs-built_in"},"super"),l(`(Ball, self).__init__(parent)

        self.pix = QPixmap(`),s("span",{class:"hljs-string"},'"../ball.png"'),l(")  "),s("span",{class:"hljs-comment"},"# \u52A0\u8F7D\u4E00\u4E2Aball\u7684\u56FE\u7247"),l(`
        self.h = self.pix.height()  `),s("span",{class:"hljs-comment"},"# ball\u7684\u9AD8\u5EA6"),l(`
        self.w = self.pix.width()  `),s("span",{class:"hljs-comment"},"# ball\u7684\u5BBD\u5EA6"),l(`

        self.setPixmap(self.pix)  `),s("span",{class:"hljs-comment"},"# \u628Aball\u52A0\u8F7D\u5230label\u4E0A"),l(`

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"_set_pos"),l("("),s("span",{class:"hljs-params"},"self, pos"),l(`):
        self.move(pos.x() - self.w / `),s("span",{class:"hljs-number"},"2"),l(", pos.y() - self.h / "),s("span",{class:"hljs-number"},"2"),l(`)

    pos = pyqtProperty(QPointF, fset=_set_pos)


`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"Example"),l("("),s("span",{class:"hljs-title class_ inherited__"},"QWidget"),l(`):
    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"__init__"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        `),s("span",{class:"hljs-built_in"},"super"),l(`(Example, self).__init__()
        self.initView()
        self.initAnimation()

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"initView"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        self.path = QPainterPath()
        self.path.moveTo(`),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"30"),l(`)
        self.path.cubicTo(`),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"200"),l(", "),s("span",{class:"hljs-number"},"350"),l(", "),s("span",{class:"hljs-number"},"350"),l(", "),s("span",{class:"hljs-number"},"30"),l(")  "),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E\u5F27\u7EBF\u7684\u6837\u5B50"),l(`

        self.ball = Ball(self)
        self.ball.pos = QPointF(`),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"30"),l(")  "),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6Eball\u8D77\u70B9\u4F4D\u7F6E,\u8FD9\u91CC\u5C31\u662F\u5F27\u7EBF\u7684\u8D77\u70B9\u4F4D\u7F6E"),l(`

        self.setWindowTitle(`),s("span",{class:"hljs-string"},'"Animation along curve"'),l(`)
        self.setGeometry(`),s("span",{class:"hljs-number"},"300"),l(", "),s("span",{class:"hljs-number"},"300"),l(", "),s("span",{class:"hljs-number"},"400"),l(", "),s("span",{class:"hljs-number"},"300"),l(`)
        self.show()

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"paintEvent"),l("("),s("span",{class:"hljs-params"},"self, e"),l(`):
        qp = QPainter()
        qp.begin(self)
        qp.setRenderHint(QPainter.Antialiasing)
        qp.drawPath(self.path)  `),s("span",{class:"hljs-comment"},"# \u753B\u5F27\u7EBF"),l(`
        qp.end()

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"initAnimation"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        self.anim = QPropertyAnimation(self.ball, `),s("span",{class:"hljs-string"},"b'pos'"),l(`)
        self.anim.setDuration(`),s("span",{class:"hljs-number"},"3000"),l(`)
        self.anim.setStartValue(QPointF(`),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"30"),l(`))

        vals = [p / `),s("span",{class:"hljs-number"},"100"),l(),s("span",{class:"hljs-keyword"},"for"),l(" p "),s("span",{class:"hljs-keyword"},"in"),l(),s("span",{class:"hljs-built_in"},"range"),l("("),s("span",{class:"hljs-number"},"0"),l(", "),s("span",{class:"hljs-number"},"101"),l(`)]

        `),s("span",{class:"hljs-keyword"},"for"),l(" i "),s("span",{class:"hljs-keyword"},"in"),l(` vals:
            self.anim.setKeyValueAt(i, self.path.pointAtPercent(i))  `),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E100\u4E2A\u5173\u952E\u5E27"),l(`

        self.anim.setEndValue(QPointF(`),s("span",{class:"hljs-number"},"350"),l(", "),s("span",{class:"hljs-number"},"30"),l(`))
        self.anim.start()


`),s("span",{class:"hljs-keyword"},"if"),l(" __name__ == "),s("span",{class:"hljs-string"},"'__main__'"),l(`:
    app = QApplication(sys.argv)
    ex = Example()
    sys.exit(app.exec_())
`)])]),s("h3",{id:"%E7%95%8C%E9%9D%A2%E9%A2%84%E8%A7%88%E5%9B%BE%E5%A6%82%E4%B8%8B%EF%BC%9A",tabindex:"-1"},[s("strong",null,"\u754C\u9762\u9884\u89C8\u56FE\u5982\u4E0B"),l("\uFF1A")]),s("p",null,[s("img",{src:"https://images2018.cnblogs.com/blog/1210837/201803/1210837-20180309134912991-2009839728.gif",alt:""})]),s("h3",{id:"%E5%A4%87%E6%B3%A8%EF%BC%9A",tabindex:"-1"},[s("strong",null,"\u5907\u6CE8"),l("\uFF1A")]),s("ol",null,[s("li",null,"\u5173\u952E\u5E27\u7684\u8303\u56F4\u503C\u4E3A0-1\uFF0C\u6211\u4EEC\u5728\u5176\u4E2D\u521B\u5EFA100\u4E2A\u70B9\uFF0C\u5373[0.01, 0.02, 0.03, 0.04\u20260.98, 0.99, 1.00]\uFF0C\u8FD9\u91CC\u76F4\u63A5\u4F7F\u7528for\u5FAA\u73AF vals = [p / 100 for p in range(0, 101)]"),s("li",null,[l("\u901A\u8FC7"),s("strong",null,"i"),l("\u4F20\u9012\u767E\u5206\u6BD4\u5230self.path."),s("strong",null,"pointAtPercent()"),l(" \u5C31\u53EF\u4EE5\u62FF\u5230\u5F27\u7EBF\u7684\u5BF9\u5E94\u5750\u6807 "),s("strong",null,"QPoinF"),l("\uFF0C\u6240\u4EE5\u5173\u952E\u5E27\u5C31\u53EF\u4EE5\u8BBE\u7F6E\u6210self.anim.setKeyValueAt(i, self.path.pointAtPercent(i))")])])],-1),r={title:"pyqt5 \u52A8\u753B\u5B66\u4E60\uFF08\u4E09\uFF09 \u6307\u5B9A\u63A7\u4EF6\u7684\u79FB\u52A8\u8F68\u8FF9",date:"2018-03-09T18:00:00.000Z",lang:"zh",type:"dev"},u={__name:"20180309-3",setup(o,{expose:n}){return n({frontmatter:{title:"pyqt5 \u52A8\u753B\u5B66\u4E60\uFF08\u4E09\uFF09 \u6307\u5B9A\u63A7\u4EF6\u7684\u79FB\u52A8\u8F68\u8FF9",date:"2018-03-09T18:00:00.000Z",lang:"zh",type:"dev"}}),(h,m)=>{const a=e;return t(),p(a,{frontmatter:r},{default:i(()=>[c]),_:1})}}};export{u as default,r as frontmatter};
