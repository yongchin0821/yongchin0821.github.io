import{_ as t}from"./postLoyout.e5a108b2.js";import{o as a,c as o,w as r,a as s,b as l}from"./app.12d2fba0.js";const p=s("div",{class:"markdown-body"},[s("p",null,"\u5165\u5751pyqt\u4E5F\u6709\u534A\u5E74\u4E86\uFF0C\u7531\u4E8E\u4EBA\u4EEC\u5BF9\u4E8B\u7269\u7684\u5BA1\u7F8E\uFF0C\u9759\u6001\u754C\u9762\u5DF2\u7ECF\u4E0D\u80FD\u6EE1\u8DB3\u7528\u6237\uFF0C\u800C\u52A8\u753B\u5374\u7ED9\u4EBA\u773C\u524D\u4E00\u4EAE\uFF0Cso\uFF0C\u4ECA\u5929\u6765\u5B66\u4E60pyqt\u7684\u52A8\u753B\u4E86"),s("p",null,"\u7531\u4E8E\u8D44\u6599\u771F\u7684\u662F\u592A\u5C11\uFF0C\u672C\u4EBA\u4E5F\u662F\u6709\u5543\u5916\u56FD\u4F6C\u7684\u82F1\u6587\u8FDB\u884C\u6478\u7D22\u5B66\u4E60\uFF0C\u53EF\u80FD\u4E5F\u662F\u89E6\u53CA\u76AE\u6BDB\uFF0C\u4EE5\u524D\u5168\u662F\u6211\u7684\u5B66\u4E60\u7B14\u8BB0\u4EE5\u53CA\u5206\u6790"),s("p",null,[l("\u57FA\u7840\u77E5\u8BC6\u5C31\u4E0D\u5728\u8FD9\u91CC\u8D58\u8FF0\u4E86\uFF0C\u8FD9\u91CC\u76F4\u63A5\u4E0A\u5E72\u8D27\uFF0C\u4E0B\u9762\u662F\u4F7F\u7528"),s("strong",null,"QPropertyAnimation\u4E00\u4E2A"),l("\u5BF9"),s("strong",null,"label"),l("\u5927\u5C0F\u8FDB\u884C\u6539\u53D8\u7684\u52A8\u753B:")]),s("h3",{id:"%E8%BF%99%E9%87%8C%E5%A4%A7%E8%87%B4%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8Bqpropertyanimation%E7%9A%84%E6%96%B9%E6%B3%95",tabindex:"-1"},[s("strong",null,"\u8FD9\u91CC\u5927\u81F4\u4ECB\u7ECD\u4E00\u4E0BQPropertyAnimation\u7684\u65B9\u6CD5")]),s("p",null,"The following table shows a few important QPropertyAnimation methods:"),s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Name"),s("th",null,"Description")])]),s("tbody",null,[s("tr",null,[s("td",null,"start()"),s("td",null,"\u5F00\u59CB\u52A8\u753B")]),s("tr",null,[s("td",null,"stop()"),s("td",null,"\u505C\u6B62\u52A8\u753B")]),s("tr",null,[s("td",null,"setStartValue()"),s("td",null,"\u8BBE\u5B9A\u52A8\u753B\u521D\u59CB\u503C")]),s("tr",null,[s("td",null,"setEndValue()"),s("td",null,"\u8BBE\u5B9A\u52A8\u753B\u7ED3\u675F\u503C")]),s("tr",null,[s("td",null,"setDuration()"),s("td",null,"\u8BBE\u7F6E\u52A8\u753B\u7684\u65F6\u95F4\uFF0C\u5355\u4F4Dms")]),s("tr",null,[s("td",null,"setKeyValueAt()"),s("td",null,"\u521B\u5EFA\u4E00\u4E2A\u5173\u952E\u5E27")]),s("tr",null,[s("td",null,"setLoopCount()"),s("td",null,"\u8BBE\u7F6E\u52A8\u753B\u91CD\u590D\u6B21\u6570")])])]),s("h3",{id:"%E4%B8%8B%E9%9D%A2%E6%98%AFpy3%E4%BB%A3%E7%A0%81",tabindex:"-1"},"\u4E0B\u9762\u662Fpy3\u4EE3\u7801"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-comment"},"#!/usr/bin/python3"),l(`
`),s("span",{class:"hljs-comment"},"# -*- coding: utf-8 -*-"),l(`

`),s("span",{class:"hljs-string"},`"""
PyQt5 Animation tutorial

This program animates the size of a
widget with QPropertyAnimation.

Author: Seshigure 401219180@qq.com
Last edited: 2018.03.02
"""`),l(`

`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtWidgets "),s("span",{class:"hljs-keyword"},"import"),l(` QWidget, QApplication, QLabel, QPushButton
`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtGui "),s("span",{class:"hljs-keyword"},"import"),l(` *
`),s("span",{class:"hljs-keyword"},"from"),l(" PyQt5.QtCore "),s("span",{class:"hljs-keyword"},"import"),l(` *


`),s("span",{class:"hljs-keyword"},"class"),l(),s("span",{class:"hljs-title class_"},"Example"),l("("),s("span",{class:"hljs-title class_ inherited__"},"QWidget"),l(`):
    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"__init__"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        `),s("span",{class:"hljs-built_in"},"super"),l(`(Example, self).__init__()
        self.initUI()

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"initUI"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        self.button = QPushButton(`),s("span",{class:"hljs-string"},'"Start"'),l(`, self)
        self.button.clicked.connect(self.doAnim)
        self.button.move(`),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"30"),l(`)

        self.label = QLabel(`),s("span",{class:"hljs-string"},'"changeSize"'),l(`, self)
        self.label.setAutoFillBackground(`),s("span",{class:"hljs-literal"},"True"),l(")  "),s("span",{class:"hljs-comment"},"# \u5FC5\u5199,\u4E0D\u7136\u8C03\u8272\u677F\u4E0D\u80FD\u586B\u5145\u80CC\u666F"),l(`
        self.palette = QPalette()  `),s("span",{class:"hljs-comment"},"# \u521B\u5EFA\u4E00\u4E2A\u8C03\u8272\u677F\u8FDB\u884C\u80CC\u666F\u586B\u5145\u65B9\u4FBF\u770Blabel\u5927\u5C0F"),l(`
        self.palette.setColor(self.label.backgroundRole(), QColor(`),s("span",{class:"hljs-number"},"255"),l(", "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-number"},"50"),l(", "),s("span",{class:"hljs-number"},"50"),l(`))
        self.label.setPalette(self.palette)
        self.label.setGeometry(`),s("span",{class:"hljs-number"},"150"),l(", "),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"100"),l(", "),s("span",{class:"hljs-number"},"100"),l(`)

        self.setGeometry(`),s("span",{class:"hljs-number"},"300"),l(", "),s("span",{class:"hljs-number"},"300"),l(", "),s("span",{class:"hljs-number"},"380"),l(", "),s("span",{class:"hljs-number"},"300"),l(`)
        self.setWindowTitle(`),s("span",{class:"hljs-string"},"'Animation'"),l(`)
        self.show()

    `),s("span",{class:"hljs-keyword"},"def"),l(),s("span",{class:"hljs-title function_"},"doAnim"),l("("),s("span",{class:"hljs-params"},"self"),l(`):
        self.anim = QPropertyAnimation(self.label, `),s("span",{class:"hljs-string"},'b"geometry"'),l(`)
        self.anim.setDuration(`),s("span",{class:"hljs-number"},"3000"),l(`)
        self.anim.setStartValue(QRect(`),s("span",{class:"hljs-number"},"150"),l(", "),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"100"),l(", "),s("span",{class:"hljs-number"},"100"),l("))  "),s("span",{class:"hljs-comment"},"# \u5927\u5C0F100*100"),l(`
        self.anim.setEndValue(QRect(`),s("span",{class:"hljs-number"},"150"),l(", "),s("span",{class:"hljs-number"},"30"),l(", "),s("span",{class:"hljs-number"},"200"),l(", "),s("span",{class:"hljs-number"},"200"),l("))  "),s("span",{class:"hljs-comment"},"# \u5927\u5C0F200*200"),l(`
        self.anim.start()


`),s("span",{class:"hljs-keyword"},"if"),l(" __name__ == "),s("span",{class:"hljs-string"},'"__main__"'),l(`:
    app = QApplication([])
    ex = Example()
    ex.show()
    app.exec_()
`)])]),s("h3",{id:"%E7%95%8C%E9%9D%A2%E9%A2%84%E8%A7%88%E5%9B%BE%E5%A6%82%E4%B8%8B%EF%BC%9A",tabindex:"-1"},[s("strong",null,"\u754C\u9762\u9884\u89C8\u56FE\u5982\u4E0B"),l("\uFF1A")]),s("p",null,[s("img",{src:"https://images2018.cnblogs.com/blog/1210837/201803/1210837-20180309134628468-603454260.gif",alt:""})]),s("h3",{id:"%E5%A4%87%E6%B3%A8%EF%BC%9A",tabindex:"-1"},[s("strong",null,"\u5907\u6CE8"),l("\uFF1A")]),s("ol",null,[s("li",null,[s("p",null,[l("\u8FD9\u91CC\u4F7F\u7528\u4E86\u4E00\u4E2A\u8C03\u8272\u677F\u5BF9label\u80CC\u666F\u8FDB\u884C\u586B\u5145\uFF0C\u65B9\u4FBF\u89C2\u5BDF"),s("br"),s("strong",null,"self.label.setAutoFillBackground(True)"),l(" # \u5FC5\u5199,\u4E0D\u7136\u8C03\u8272\u677F\u4E0D\u80FD\u586B\u5145\u80CC\u666F"),s("br"),l(" self.palette = QPalette()"),s("br"),l(" self.palette.setColor(self.label.backgroundRole(), QColor(255, 50, 50, 50))"),s("br"),l(" self.label.setPalette(self.palette)")])]),s("li",null,[s("p",null,[l('\u5176\u4E2D\u4F7F\u7528 self.anim = QPropertyAnimation(self.label, b"geometry")\u521B\u5EFA\u4E86\u4E00\u4E2A\u52A8\u753B\uFF0C'),s("strong",null,"()\u91CC\u9762\u7B2C\u4E00\u4E2A\u662F\u52A8\u753B\u7684\u5BF9\u8C61\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u52A8\u753B\u7684\u5C5E\u6027"),l("(\u8FD9\u91CC\u7684\u5C5E\u6027\u4E3Ageometry)")])]),s("li",null,[s("p",null,[l("\u901A\u8FC7\u8BBE\u7F6E"),s("strong",null,"\u521D\u59CB\u503C"),l("\u4E0E"),s("strong",null,"\u7ED3\u675F\u503C"),l("\u6765\u6539\u53D8label\u7684\u5927\u5C0F self.anim.setStartValue(QRect(150, 30, 100, 100)) # \u5927\u5C0F100"),s("em",null,[l("100"),s("br"),l(" self.anim.setEndValue(QRect(150, 30, 200, 200)) # \u5927\u5C0F200")]),l("200")])])])],-1),u={title:"pyqt5 \u52A8\u753B\u5B66\u4E60\uFF08\u4E00\uFF09 \u6539\u53D8\u63A7\u4EF6\u5927\u5C0F",date:"2018-03-09T16:00:00.000Z",lang:"zh",type:"dev"},b={__name:"20180309-1",setup(i,{expose:n}){return n({frontmatter:{title:"pyqt5 \u52A8\u753B\u5B66\u4E60\uFF08\u4E00\uFF09 \u6539\u53D8\u63A7\u4EF6\u5927\u5C0F",date:"2018-03-09T16:00:00.000Z",lang:"zh",type:"dev"}}),(c,m)=>{const e=t;return a(),o(e,{frontmatter:u},{default:r(()=>[p]),_:1})}}};export{b as default,u as frontmatter};
