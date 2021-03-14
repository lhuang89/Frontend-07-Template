# 组件化 （Componentization)

## Object vs. Component
| Object | Component |
|--------|-----------|
| Properties | Properties |
| Methods | Methods |
| Inherit | Inherit|
| | Attribute |
| | Config & State |
| | Event |
| | Lifecycle |
| | Children |

## Attribute vs. Property
### In HTML, attribute not always equals to property
### <span style="color:red">Attribute is always static text, while property usually returns resolved and structured values</span>
- In the following example, attribute is class but property is className
```html
<div class = "cls1 cls2"></div>
<script>
var div = document.getElementByTagName('div');
div.className // cls1 cls2
</script>
```
- 'style' is another example. Attribute of style is a string, whereas style property is an object
```html
<div class = "cls1 cls2" style="color:blue"></div>
<script>
var div = document.getElementByTagName('div');
div.style //an object
</script>
```
- href
```html
<a href-"//m.taobao.com"></div>
<script>
var a = document.getElementByTagName('a');
a.href// "http://m.taobao.com" resolved URL
a.getAttribute('href') // "//m.taobao.com", same as in HTML code, not resolved
</script>
```
- input value, very confusing, html implemented val() for this issue
```html
<input value = "cute"/>
<script>
var input = document.getElementByTagName('input'); // if property hasn't been set, the result will be attribute
input.value //cute
input.getAttribute('value'); //cute
input.value = 'hello'; // if "value" property has been set, the property will be changed, but attribute will stay the same
input.getAttribute('value'); //cute
</script>
```

## How to design states of component
| Markup set | JS set | JS change | User Input Change | |
|------------|--------|-----------|-------------------|-|
| N | Y | Y | ? | property |
| Y | Y | Y | ? | attribute |
| N | N | N | Y | state |
| N | Y | N | N | config |

## Component lifecycle
- Created (first)
- mount -> mount -> unmount
- JS change/set or User Input -> render/update
- Destroyed (last)

## Children
- Content-type children
- Template-type children (e.g. children with data template)

```html
<my-button><img src="{{icon}}"/>{{title}}</my-button>

<my-list>
    <li><img src="{{icon}}"/>{{title}}</li>
</my-list>
```
# JSX

