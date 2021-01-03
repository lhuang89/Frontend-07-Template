学习笔记

## Summary Week 1 - Week 5

Week 1 - Week 5 covered fundamentals of front-end programming, which include
- Basics of DOM API, including elements and event handling
- Asynchronous programming in Javascript (setTimeOut, Promise, async/await, generator and yield)
- Some basic alogrithms and implementations (game strategies, BFS)
- An overview of lexical analysis and syntax analysis
- Algorithms related to string analysis
- Proxy and its usage in reactive

### Week 1
1. Basic frontent programming and DOM API
  - document.getElementbyID
  - document.appendChild
  - document.createElement
  - event handling
  
2. Winning Strategy and its implementation

3. Asynchronous programming

### Week 2  

第二周的课程主要围绕寻路问题， 来熟悉广度优先的寻路算法， 屏幕实现实现方法，以及启发式搜索

- 前端显示， 利用css style和document接口，实现了100×100的平面。通过赋予每一个点不同的值，表示其属性，如围墙。并且将这个信息存储在localStorage里。 我们为每个点添加了mouse up, mouse down, mouse move等事件，来实现通过鼠标“画出”围墙

- 广度优先算法通过遍历一个节点周围所有可走节点，最终找到路径。我们通过标记每一个节点前面的节点，可以描绘出最终寻找到的路径

- 单纯的遍历效率较低， 启发式搜索可以提高广度优先的搜索效率，基本思路是比较每一个点与终点的距离，优先遍历距离最小的点。利用启发式搜索，大大降低了遍历的点数

- 我们可以进一步改进数据结构和算法来提高搜索效率
  1. 利用效率更高的数据结构代替Array, 比如binary heap
  2. 改变对于前驱点的设置方法

- 这一周也复习了上周讲的有关异步编程的知识

### Week 3

第三周我们通过利用javascript来解析四则运算表达式，来熟悉编译过程中的词法分析(lexical anaylsis) 和语法分析(syntax analysis)。通过此法分析和语法分析，我们将一个表达式解析成为一个对应的语法树(Abstract syntax tree)。

通过词法分析我们将一个表达式分解成为语法分析可以理解的tokens集合, 交给语法分析。这里我们使用regex做解析。此法分析会输出一个token的序列

语法分析利用此法分析输出的序列，将序列整理成一个语法树

以我们的四则运算表达式为例，此法分析首先清理掉无意义的输入（例如空格），把四则运算式拆解为基本单元，包括数字和运算符，当然还加入了结束的符号EOF。

语法分析将序列整理成树状结构，其中乘除运算为最基本的单元，然后是加减运算。数字会被解读为特殊的乘除运算。整个表达式最终被解析为以Expression为root node的AST. 由于表达式会有嵌套（比如加减运算下面包含乘除运算），整个解析过程是一个迭代的过程

### Week 4
字符串分析算法和实现
- 字典树
  精确字符串比较
  大量高重复字符串存储与分析

- KMP
  寻找一个字符是否包含另一个字符串，属于部分匹配
  brutal force 时间难度为 O(m×n)
  n + m 时间难度

- Wildcard
  *和?通配符的字符串
  头部尾部*和中间分开处理，中间的使用KMP处理方法

- Regex

- 状态机
  通用的字符串分析

- LL LR
  字符串多层级结构分析

### Week 5
Fundamentals of Proxy
Proxy can be used to wrap an object, in order to listen and react to the events happened within the object. The set of handler functions are predefined, but we can define our own behaviors for each handler.

1. Wrapping an object to Proxy
```sh
let po = new Proxy(object, set, get ...);
```
The list of predefined handlers can be found here
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy

2. Implementing basic reactive features using Proxy
- reactive
  - create Proxy object
  - define handlers
  - register call back functions to a global list, reactivities

- effect
  - trigger and manage callback functions
The benefits of using this framework is to decouple screen status changes and related backend updates. The opposite route can be implemented by "addEventListener"

3. Lesson 7 and 8 used an example to demostrate how to get accurate screen coordinates by using range. The method used is
```sh
range.getBoundingClientRect()
```
