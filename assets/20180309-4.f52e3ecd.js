import{_ as e}from"./postLoyout.c51e7997.js";import{o as t,c as i,w as p,a as s,b as n}from"./app.a2a576ac.js";import"./utc.917b3e44.js";const c=s("div",{class:"markdown-body"},[s("p",null,"\u4ECA\u5929\u5B66\u6709\u6240\u6210\uFF0C\u8D76\u7D27\u8BB0\u4E0B\u4ECA\u5929\u7684\u6210\u679C"),s("p",null,"\u4E4B\u524D\u4E09\u7BC7\u6587\u7AE0\u5206\u522B\u6F14\u793A\u4E86\u7A7A\u95F4\u7684\u5927\u5C0F\u6539\u53D8\uFF0C\u79FB\u52A8\uFF0C\u53CA\u989C\u8272\u53D8\u5316\u3002\u5728\u540E\u7EED\u7814\u7A76\u65CB\u8F6C\u7684\u8FC7\u7A0B\u4E2D\u5373\u4E3A\u8270\u96BE"),s("p",null,"\u5982\u679C\u4F60\u662F\u4F7F\u7528pyqt4\uFF0C\u90A3\u4E48\u4F7F\u7528QGraphicsItemAnimation\u4FBF\u53EF\u4EE5\u8F7B\u677E\u8FBE\u5230\u65CB\u8F6C\u7684\u6548\u679C\uFF0C\u8FD9\u91CC\u4E0D\u518D\u8BE6\u8FF0"),s("p",null,[n("\u53EF\u60DC\u5230\u4E86pyqt5"),s("br"),s("img",{src:"https://images2018.cnblogs.com/blog/1210837/201803/1210837-20180309135639300-131558991.png",alt:""})]),s("p",null,"\u4E8E\u662F\u67E5\u9605\u5404\u79CD\u82F1\u6587\u8D44\u6599\uFF0C\u6211\u5206\u522B\u5C1D\u8BD5\u4E86QGraphicsRotation\uFF0CQGraphicsTransform\uFF0CQTransform\u6548\u679C\u90FD\u4E0D\u592A\u7406\u60F3\uFF0CQTransform\u662F\u53EF\u4EE5\u5B9E\u73B0\u7684\uFF0C\u4F46\u662F\u592A\u590D\u6742"),s("p",null,"\u6700\u540E\u6211\u627E\u5230\u4E86\u4E00\u79CD\u6781\u4E3A\u7B80\u5355\u7684\u65B9\u6CD5\u5C31\u662F\u5728\u4F7F\u7528QGraphicsView\u7684\u5404\u79CDitem\u65F6\uFF0C\u53EF\u4EE5\u76F4\u63A5setRotation\u8BA9\u5BF9\u8C61\u65CB\u8F6C\u8D77\u6765\uFF0C\u4E0B\u9762\u6765\u770B\u770B\u4EE3\u7801\uFF0C\u8FD9\u91CC\u76F4\u63A5\u5728\u5BF9\u8C61\u4E0A\u5199\u4E00\u4E2A\u52A8\u753B\uFF1A"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"Ball"),n("("),s("span",{class:"hljs-title class_ inherited__"},"QObject"),n(`):
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__init__"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        `),s("span",{class:"hljs-built_in"},"super"),n(`().__init__()
        pixmap = QPixmap(`),s("span",{class:"hljs-string"},'"../star.png"'),n(`)
        scaledPixmap = pixmap.scaled(`),s("span",{class:"hljs-number"},"50"),n(", "),s("span",{class:"hljs-number"},"55"),n(`)
        self.animation()

        self.pixmap_item = QGraphicsPixmapItem(scaledPixmap)
        self.pixmap_item.setTransformOriginPoint(`),s("span",{class:"hljs-number"},"25"),n(", "),s("span",{class:"hljs-number"},"27.5"),n(")  "),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E\u4E2D\u5FC3\u4E3A\u65CB\u8F6C"),n(`
        self._set_pos(QPointF(`),s("span",{class:"hljs-number"},"5"),n(", "),s("span",{class:"hljs-number"},"30"),n("))  "),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E\u56FE\u6807\u7684\u521D\u59CB\u4F4D\u7F6E"),n(`

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"_set_pos"),n("("),s("span",{class:"hljs-params"},"self, pos"),n(`):
        self.pixmap_item.setPos(pos)

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"_set_rotation"),n("("),s("span",{class:"hljs-params"},"self, angle"),n(`):
        self.pixmap_item.setRotation(angle.x())  `),s("span",{class:"hljs-comment"},"# \u65CB\u8F6C\u5EA6\u6570"),n(`

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"animation"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        self.anim = QPropertyAnimation(self, `),s("span",{class:"hljs-string"},"b'pos'"),n(`)
        self.anim.setDuration(`),s("span",{class:"hljs-number"},"1000"),n(`)
        self.anim.setStartValue(QPointF(`),s("span",{class:"hljs-number"},"5"),n(", "),s("span",{class:"hljs-number"},"30"),n(`))
        self.anim.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.3"),n(", QPointF("),s("span",{class:"hljs-number"},"144"),n(", "),s("span",{class:"hljs-number"},"30"),n(`))
        self.anim.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.5"),n(", QPointF("),s("span",{class:"hljs-number"},"54"),n(", "),s("span",{class:"hljs-number"},"90"),n(`))
        self.anim.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.8"),n(", QPointF("),s("span",{class:"hljs-number"},"240"),n(", "),s("span",{class:"hljs-number"},"250"),n(`))
        self.anim.setEndValue(QPointF(`),s("span",{class:"hljs-number"},"300"),n(", "),s("span",{class:"hljs-number"},"60"),n(`))

        self.anim2 = QPropertyAnimation(self, `),s("span",{class:"hljs-string"},"b'rotation'"),n(`)
        self.anim2.setDuration(`),s("span",{class:"hljs-number"},"1000"),n(`)
        self.anim2.setStartValue(QPointF(`),s("span",{class:"hljs-number"},"0"),n(", "),s("span",{class:"hljs-number"},"1"),n(`))
        self.anim2.setEndValue(QPointF(`),s("span",{class:"hljs-number"},"360"),n(", "),s("span",{class:"hljs-number"},"1"),n(`))

    pos = pyqtProperty(QPointF, fset=_set_pos)
    rotation = pyqtProperty(QPointF, fset=_set_rotation)
`)])]),s("p",null,"\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u6211\u7528QpointF\u628A\u6570\u5B57\u4F20\u8FDB\u53BB\uFF0C\u7136\u540E\u518D\u53D6angle.x()\u4F5C\u4E3A\u5EA6\u6570\uFF0C\u8FD9\u6837\u5BF9\u8C61\u5C31\u53EF\u4EE5\u65CB\u8F6C\u4E86"),s("p",null,"\u4E0B\u9762\u6211\u5BF9\u5BF9\u8C61\u8FDB\u884C\u4E86\u52A0\u5DE5\uFF0C\u7ED3\u5408\u524D\u9762\u51E0\u7BC7\u52A8\u753B\u6587\u7AE0\uFF0C\u6211\u505A\u4E86\u4E00\u4E2A\u6309\u4E00\u5B9A\u8F68\u8FF9\u81EA\u8F6C\u7684\u52A8\u753B\u3002"),s("p",null,"\u8FD9\u91CC\u4F7F\u7528\u4E86QGraphicsView\u754C\u9762\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7QGraphicsView\u8FD9\u4E2A\u754C\u9762\u521B\u5EFA\u5404\u79CDQGraphicsScene\u573A\u666F\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u628A\u5404\u79CD\u5BF9\u8C61\u5F04\u5230\u8FD9\u4E2A\u573A\u666F\u91CC\u9762\u53BB\uFF0C\u975E\u5E38\u65B9\u9762"),s("h3",{id:"%E4%B8%8B%E9%9D%A2%E6%98%AF%E7%A8%8B%E5%BC%8F%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81%EF%BC%9A",tabindex:"-1"},"\u4E0B\u9762\u662F\u7A0B\u5F0F\u5B8C\u6574\u4EE3\u7801\uFF1A"),s("pre",null,[s("code",{class:"hljs language-python"},[s("span",{class:"hljs-comment"},"#!/usr/bin/python3"),n(`
`),s("span",{class:"hljs-comment"},"# -*- coding: utf-8 -*-"),n(`

`),s("span",{class:"hljs-string"},`"""
Author: semishigure
Website: zetcode.com
Last edited: 2018.03.09
"""`),n(`

`),s("span",{class:"hljs-keyword"},"from"),n(" PyQt5.QtCore "),s("span",{class:"hljs-keyword"},"import"),n(` *
`),s("span",{class:"hljs-keyword"},"from"),n(" PyQt5.QtGui "),s("span",{class:"hljs-keyword"},"import"),n(` *
`),s("span",{class:"hljs-keyword"},"from"),n(" PyQt5.QtWidgets "),s("span",{class:"hljs-keyword"},"import"),n(` *

`),s("span",{class:"hljs-keyword"},"import"),n(` cgitb
`),s("span",{class:"hljs-keyword"},"import"),n(` sys

cgitb.enable(`),s("span",{class:"hljs-built_in"},"format"),n("="),s("span",{class:"hljs-string"},"'text'"),n(")  "),s("span",{class:"hljs-comment"},"# \u89E3\u51B3pyqt5\u5F02\u5E38\u53EA\u8981\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF,\u7A0B\u5E8F\u5C31\u5D29\u6E83,\u800C\u6CA1\u6709\u4EFB\u4F55\u63D0\u793A"),n(`


`),s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"Ball"),n("("),s("span",{class:"hljs-title class_ inherited__"},"QObject"),n(`):
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__init__"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        `),s("span",{class:"hljs-built_in"},"super"),n(`().__init__()
        pixmap = QPixmap(`),s("span",{class:"hljs-string"},'"../star.png"'),n(`)
        scaledPixmap = pixmap.scaled(`),s("span",{class:"hljs-number"},"50"),n(", "),s("span",{class:"hljs-number"},"55"),n(`)
        self.animation()

        self.pixmap_item = QGraphicsPixmapItem(scaledPixmap)
        self.pixmap_item.setTransformOriginPoint(`),s("span",{class:"hljs-number"},"25"),n(", "),s("span",{class:"hljs-number"},"27.5"),n(")  "),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E\u4E2D\u5FC3\u4E3A\u65CB\u8F6C"),n(`
        self._set_pos(QPointF(`),s("span",{class:"hljs-number"},"5"),n(", "),s("span",{class:"hljs-number"},"30"),n("))  "),s("span",{class:"hljs-comment"},"# \u8BBE\u7F6E\u56FE\u6807\u7684\u521D\u59CB\u4F4D\u7F6E"),n(`

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"_set_pos"),n("("),s("span",{class:"hljs-params"},"self, pos"),n(`):
        self.pixmap_item.setPos(pos)

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"_set_rotation"),n("("),s("span",{class:"hljs-params"},"self, angle"),n(`):
        self.pixmap_item.setRotation(angle.x())  `),s("span",{class:"hljs-comment"},"# \u65CB\u8F6C\u5EA6\u6570"),n(`

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"animation"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        self.anim = QPropertyAnimation(self, `),s("span",{class:"hljs-string"},"b'pos'"),n(`)
        self.anim.setDuration(`),s("span",{class:"hljs-number"},"1000"),n(`)
        self.anim.setStartValue(QPointF(`),s("span",{class:"hljs-number"},"5"),n(", "),s("span",{class:"hljs-number"},"30"),n(`))
        self.anim.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.3"),n(", QPointF("),s("span",{class:"hljs-number"},"144"),n(", "),s("span",{class:"hljs-number"},"30"),n(`))
        self.anim.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.5"),n(", QPointF("),s("span",{class:"hljs-number"},"54"),n(", "),s("span",{class:"hljs-number"},"90"),n(`))
        self.anim.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.8"),n(", QPointF("),s("span",{class:"hljs-number"},"240"),n(", "),s("span",{class:"hljs-number"},"250"),n(`))
        self.anim.setEndValue(QPointF(`),s("span",{class:"hljs-number"},"300"),n(", "),s("span",{class:"hljs-number"},"60"),n(`))

        self.anim2 = QPropertyAnimation(self, `),s("span",{class:"hljs-string"},"b'rotation'"),n(`)
        self.anim2.setDuration(`),s("span",{class:"hljs-number"},"1000"),n(`)
        self.anim2.setStartValue(QPointF(`),s("span",{class:"hljs-number"},"0"),n(", "),s("span",{class:"hljs-number"},"1"),n(`))
        self.anim2.setEndValue(QPointF(`),s("span",{class:"hljs-number"},"360"),n(", "),s("span",{class:"hljs-number"},"1"),n(`))

    pos = pyqtProperty(QPointF, fset=_set_pos)
    rotation = pyqtProperty(QPointF, fset=_set_rotation)


`),s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"Myview"),n("("),s("span",{class:"hljs-title class_ inherited__"},"QGraphicsView"),n(`):
    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__init__"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        `),s("span",{class:"hljs-built_in"},"super"),n(`().__init__()
        self._set_color(QColor(`),s("span",{class:"hljs-number"},"105"),n(", "),s("span",{class:"hljs-number"},"105"),n(", "),s("span",{class:"hljs-number"},"105"),n(`))
        self.iniAnimation()

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"_set_color"),n("("),s("span",{class:"hljs-params"},"self, col"),n(`):
        self.palette = QPalette()
        `),s("span",{class:"hljs-comment"},"# self.palette.setColor(self.backgroundRole(), col)"),n(`
        self.palette.setBrush(self.backgroundRole(), col)
        self.setPalette(self.palette)

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"iniAnimation"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        self.anim3 = QPropertyAnimation(self, `),s("span",{class:"hljs-string"},"b'color'"),n(`)
        self.anim3.setDuration(`),s("span",{class:"hljs-number"},"1000"),n(`)
        self.anim3.setStartValue(QColor(`),s("span",{class:"hljs-number"},"105"),n(", "),s("span",{class:"hljs-number"},"105"),n(", "),s("span",{class:"hljs-number"},"105"),n(`))
        self.anim3.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.1"),n(", QColor("),s("span",{class:"hljs-number"},"255"),n(", "),s("span",{class:"hljs-number"},"255"),n(", "),s("span",{class:"hljs-number"},"240"),n(`))
        self.anim3.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.3"),n(", QColor("),s("span",{class:"hljs-number"},"219"),n(", "),s("span",{class:"hljs-number"},"225"),n(", "),s("span",{class:"hljs-number"},"171"),n(`))
        self.anim3.setKeyValueAt(`),s("span",{class:"hljs-number"},"0.7"),n(", QColor("),s("span",{class:"hljs-number"},"148"),n(", "),s("span",{class:"hljs-number"},"214"),n(", "),s("span",{class:"hljs-number"},"184"),n(`))
        self.anim3.setEndValue(QColor(`),s("span",{class:"hljs-number"},"86"),n(", "),s("span",{class:"hljs-number"},"199"),n(", "),s("span",{class:"hljs-number"},"170"),n(`))

    color = pyqtProperty(QColor, fset=_set_color)


`),s("span",{class:"hljs-keyword"},"class"),n(),s("span",{class:"hljs-title class_"},"MainWindow"),n("("),s("span",{class:"hljs-title class_ inherited__"},"Myview"),n(`):

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"__init__"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        `),s("span",{class:"hljs-built_in"},"super"),n(`().__init__()

        self.initView()
        self.iniui()

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"initView"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        self.ball = Ball()
        self.scene = QGraphicsScene(self)
        self.scene.setSceneRect(`),s("span",{class:"hljs-number"},"0"),n(", "),s("span",{class:"hljs-number"},"0"),n(", "),s("span",{class:"hljs-number"},"300"),n(", "),s("span",{class:"hljs-number"},"300"),n(`)
        self.scene.addItem(self.ball.pixmap_item)
        self.setScene(self.scene)

        self.setWindowTitle(`),s("span",{class:"hljs-string"},'"Ball animation"'),n(`)
        self.setRenderHint(QPainter.Antialiasing)
        self.setGeometry(`),s("span",{class:"hljs-number"},"300"),n(", "),s("span",{class:"hljs-number"},"300"),n(", "),s("span",{class:"hljs-number"},"500"),n(", "),s("span",{class:"hljs-number"},"350"),n(`)
        self.show()

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"iniui"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        self.btn = QPushButton(`),s("span",{class:"hljs-string"},'"\u5F00\u59CB"'),n(`)
        self.maingrid = QHBoxLayout()
        self.maingrid.addStretch(`),s("span",{class:"hljs-number"},"1"),n(`)
        self.maingrid.addWidget(self.btn)
        self.btn.clicked.connect(self.runAnim)

        self.maingrid2 = QVBoxLayout()
        self.maingrid2.addStretch(`),s("span",{class:"hljs-number"},"1"),n(`)
        self.maingrid2.addLayout(self.maingrid)

        self.setLayout(self.maingrid2)

    `),s("span",{class:"hljs-keyword"},"def"),n(),s("span",{class:"hljs-title function_"},"runAnim"),n("("),s("span",{class:"hljs-params"},"self"),n(`):
        self.ball.anim.start()
        self.ball.anim2.start()
        self.anim3.start()


`),s("span",{class:"hljs-keyword"},"if"),n(" __name__ == "),s("span",{class:"hljs-string"},"'__main__'"),n(`:
    app = QApplication(sys.argv)
    ex = MainWindow()
    sys.exit(app.exec_())
`)])]),s("h3",{id:"%E7%95%8C%E9%9D%A2%E9%A2%84%E8%A7%88%E5%9B%BE%E5%A6%82%E4%B8%8B%EF%BC%9A",tabindex:"-1"},[s("strong",null,"\u754C\u9762\u9884\u89C8\u56FE\u5982\u4E0B"),n("\uFF1A")]),s("p",null,[s("img",{src:"https://images2018.cnblogs.com/blog/1210837/201803/1210837-20180309141600659-1131130584.gif",alt:""})]),s("h3",{id:"%E5%A4%87%E6%B3%A8%EF%BC%9A",tabindex:"-1"},[s("strong",null,"\u5907\u6CE8"),n("\uFF1A")]),s("ol",null,[s("li",null,"\u8BA9\u6211\u4EEC\u521B\u5EFA\u597DQGraphicsView\u540E\uFF0C\u9700\u8981\u518D\u521B\u5EFA\u4E00\u4E2AQGraphicsScene\u573A\u666F\uFF0C\u7136\u540E\u901A\u8FC7"),s("li",null,[n("**self.scene.addItem(self.ball.pixmap_item)"),s("strong",null,"\u628A\u5BF9\u8C61\u6DFB\u52A0\u5230\u573A\u666F\u91CC\u9762\uFF0C\u6700\u540E\u518D\u901A\u8FC7"),n("self.setScene(self.scene)**\u628A\u573A\u666F\u6DFB\u52A0\u8FDB\u754C\u9762\u5373\u53EF")])])],-1),r={title:"pyqt5 \u52A8\u753B\u5B66\u4E60\uFF08\u56DB\uFF09 \u65CB\u8F6C\u52A8\u753B\uFF0C\u4F7F\u7528QGraphicsView\u8BA9\u81EA\u5DF1\u7684\u63A7\u4EF6\u65CB\u8F6C\u8D77\u6765",date:"2018-03-09T18:00:00.000Z",lang:"zh",type:"dev"},_={setup(o,{expose:l}){return l({frontmatter:{title:"pyqt5 \u52A8\u753B\u5B66\u4E60\uFF08\u56DB\uFF09 \u65CB\u8F6C\u52A8\u753B\uFF0C\u4F7F\u7528QGraphicsView\u8BA9\u81EA\u5DF1\u7684\u63A7\u4EF6\u65CB\u8F6C\u8D77\u6765",date:"2018-03-09T18:00:00.000Z",lang:"zh",type:"dev"}}),(m,h)=>{const a=e;return t(),i(a,{frontmatter:r},{default:p(()=>[c]),_:1})}}};export{_ as default,r as frontmatter};
