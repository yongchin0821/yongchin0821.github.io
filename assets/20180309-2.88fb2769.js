import{_ as e}from"./postLoyout.c3de0574.js";import{o as t,c as o,w as r,a as s,b as l}from"./app.bab9285b.js";import"./utc.917b3e44.js";const c=s("div",{class:"markdown-body"},[s("p",null,'\u4E0A\u4E00\u7BC7\u6211\u4EEC\u901A\u8FC7 self.anim = QPropertyAnimation(self.label, b"geometry")\u521B\u5EFA\u4E86\u4E00\u4E2A\u52A8\u753B\uFF0C\u6539\u53D8\u4E86\u7A7A\u95F4\u7684\u5927\u5C0F\uFF0C\u8FD9\u6B21\u6211\u4EEC\u6765\u6539\u53D8\u63A7\u4EF6\u7684\u989C\u8272'),s("p",null,'\u4F46\u662Flabel\u662F\u6CA1\u6709color\u8FD9\u4E2A\u52A8\u753B\u5C5E\u6027\u7684\uFF0C\u5373\u8BBE\u7F6E self.anim = QPropertyAnimation(self.label, b"color")\u662F\u65E0\u6548\u7684'),s("p",null,"\u4E3A\u6B64\uFF0C\u6211\u4EEC\u8981\u91CD\u5199label\u7C7B\uFF0C\u8D4B\u4E88\u4E00\u4E2Acolor\u5C5E\u6027\uFF0C\u4F8B\u5982\uFF1A"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"MyLabel"),l("("),s("span",{class:"hljs-title class_ inherited__"},"QLabel"),l(`):
    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"__init__"),l("("),s("span",{class:"hljs-params"},"self, text, para"),l(`):
        `),s("span",{class:"hljs-built_in"},"super"),l(`().__init__(text, para)

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"_set_color"),l("("),s("span",{class:"hljs-params"},"self, col"),l(`):
        self.setAutoFillBackground(`),s("span",{class:"hljs-literal"},"True"),l(`)
        palette = self.palette()
        palette.setColor(self.backgroundRole(), col)
        self.setPalette(palette)

    color = pyqtProperty(QColor, fset=_set_color)
`)])]),s("p",null,'\u8FD8\u662F\u901A\u8FC7\u8C03\u8272\u677F\u6765\u6539\u53D8label\u7684\u989C\u8272\uFF0C \u7136\u540E\u6211\u4EEC\u81EA\u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A"color"\u7684\u5C5E\u6027'),s("p",null,"color = pyqtProperty(QColor, fset=_set_color)"),s("p",null,"\u5B9A\u4E49\u4EE5\u540E\u6211\u4EEC\u5C31\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u8FD9\u4E2A\u5C5E\u6027\u4E86\uFF0C\u4F8B\u5982"),s("p",null,'self.anim = QPropertyAnimation(self.label, b"color")'),s("h3",{id:"%E4%B8%8B%E9%9D%A2%E6%98%AF%E7%A8%8B%E5%BC%8F%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81%EF%BC%9A",tabindex:"-1"},"\u4E0B\u9762\u662F\u7A0B\u5F0F\u5B8C\u6574\u4EE3\u7801\uFF1A"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-comment"},"#!/usr/bin/python3"),l(`
`),s("span",{class:"hljs-comment"},"# -*- coding: utf-8 -*-"),l(`

`),s("span",{class:"hljs-string"},`"""
PyQt5 Animation tutorial

This program animates the color of a
widget with QPropertyAnimation.

Author: Seshigure 401219180@qq.com
Last edited: 2018.03.02
"""`),l(`

`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtWidgets "),s("span",{class:"hljs-keyword"},"import"),l(` *
`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtGui "),s("span",{class:"hljs-keyword"},"import"),l(` *
`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtCore "),s("span",{class:"hljs-keyword"},"import"),l(` *


`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"MyLabel"),l("("),s("span",{class:"hljs-title class_ inherited__"},"QLabel"),l(`):
    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"__init__"),l("("),s("span",{class:"hljs-params"},"self, text, para"),l(`):
        `),s("span",{class:"hljs-built_in"},"super"),l(`().__init__(text, para)

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"_set_color"),l("("),s("span",{class:"hljs-params"},"self, col"),l(`):
        self.setAutoFillBackground(`),s("span",{class:"hljs-literal"},"True"),l(`)
        palette = self.palette()
        palette.setColor(self.backgroundRole(), col)
        self.setPalette(palette)

    color = pyqtProperty(QColor, fset=_set_color)


`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"Example"),l("("),s("span",{class:"hljs-title class_ inherited__"},"QWidget"),l(`):
    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"__init__"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        `),s("span",{class:"hljs-built_in"},"super"),l(`(Example, self).__init__()
        self.initUI()

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"initUI"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        self.button = QPushButton(`),s("span",{class:"hljs-string"},'"Start"'),l(`, self)
        self.button.clicked.connect(self.doAnim)
        self.button.move(`),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"30"),l(`)

        self.label = MyLabel(`),s("span",{class:"hljs-string"},'"changeColor"'),l(`, self)
        self.label._set_color(QColor(`),s("span",{class:"hljs-number"},"255"),l(", "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-number"},"50"),l(`))
        self.label.setGeometry(`),s("span",{class:"hljs-number"},"150"),l(", "),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"100"),l(", "),s("span",{class:"hljs-number"},"100"),l(`)

        self.setGeometry(`),s("span",{class:"hljs-number"},"300"),l(", "),s("span",{class:"hljs-number"},"300"),l(", "),s("span",{class:"hljs-number"},"380"),l(", "),s("span",{class:"hljs-number"},"300"),l(`)
        self.setWindowTitle(`),s("span",{class:"hljs-string"},"'Animation'"),l(`)
        self.show()

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"doAnim"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        self.anim = QPropertyAnimation(self.label, `),s("span",{class:"hljs-string"},'b"color"'),l(`)
        self.anim.setDuration(`),s("span",{class:"hljs-number"},"3000"),l(`)
        self.anim.setStartValue(QColor(`),s("span",{class:"hljs-number"},"255"),l(", "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-number"},"50"),l("))  "),s("span",{class:"hljs-comment"},"# \u7C89\u8272 "),l(`
        self.anim.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.5"),l(", QColor("),s("span",{class:"hljs-number"},"255"),l(", "),s("span",{class:"hljs-number"},"0"),l(", "),s("span",{class:"hljs-number"},"0"),l(", "),s("span",{class:"hljs-number"},"250"),l("))  "),s("span",{class:"hljs-comment"},"# \u7EA2\u8272"),l(`
        self.anim.setEndValue(QColor(`),s("span",{class:"hljs-number"},"255"),l(", "),s("span",{class:"hljs-number"},"250"),l(", "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-number"},"50"),l("))  "),s("span",{class:"hljs-comment"},"# \u7C73\u9EC4"),l(`
        self.anim.start()


`),s("span",{class:"hljs-keyword"},"if"),l(" __name__ == "),s("span",{class:"hljs-string"},'"__main__"'),l(`:
    app = QApplication([])
    ex = Example()
    ex.show()
    app.exec_()
`)])]),s("h3",{id:"%E7%95%8C%E9%9D%A2%E9%A2%84%E8%A7%88%E5%9B%BE%E5%A6%82%E4%B8%8B%EF%BC%9A",tabindex:"-1"},[s("strong",null,"\u754C\u9762\u9884\u89C8\u56FE\u5982\u4E0B"),l("\uFF1A")]),s("p",null,[s("img",{src:"https://images2018.cnblogs.com/blog/1210837/201803/1210837-20180309134406057-385828202.gif",alt:""})]),s("h3",{id:"%E5%A4%87%E6%B3%A8%EF%BC%9A",tabindex:"-1"},[s("strong",null,"\u5907\u6CE8"),l("\uFF1A")]),s("ol",null,[s("li",null,"label\u6CA1\u6709color\u52A8\u753B\u5C5E\u6027\uFF0C\u6240\u4EE5\u6211\u4EEC\u5F97\u91CD\u5199label"),s("li",null,"self.anim.setKeyValueAt(0.5, QColor(255, 0, 0, 250))\u8FD9\u91CC\u4F7F\u7528\u4E86\u4E00\u4E2A\u5173\u952E\u5E27\uFF0C\u8BA9\u52A8\u753B\u5B8C\u6210 \u7C89\u8272>\u7EA2\u8272>\u7C73\u9EC4\u7684\u989C\u8272\u8F6C\u6362")])],-1),p={title:"pyqt5 \u52A8\u753B\u5B66\u4E60\uFF08\u4E8C\uFF09 \u6539\u53D8\u63A7\u4EF6\u989C\u8272",date:"2018-03-09T17:00:00.000Z",lang:"zh",type:"dev"},f={setup(i,{expose:n}){return n({frontmatter:{title:"pyqt5 \u52A8\u753B\u5B66\u4E60\uFF08\u4E8C\uFF09 \u6539\u53D8\u63A7\u4EF6\u989C\u8272",date:"2018-03-09T17:00:00.000Z",lang:"zh",type:"dev"}}),(h,m)=>{const a=e;return t(),o(a,{frontmatter:p},{default:r(()=>[c]),_:1})}}};export{f as default,p as frontmatter};
