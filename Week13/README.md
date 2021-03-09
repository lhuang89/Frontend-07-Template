# Revisiting HTML
## 1. HTML Definition
### 1.1 Superset of HTML (before HTML5)
- XML
- SGML
### 1.2 DTD and HTML namespace
#### 1.2.1 DTD - HTML entities
- nbsp - no-break space
- quot - “”
- amp - &
- lt - <
- gt - >
- apos - '
#### 1.2.2 HTML namespaces
- HTML (XHTML)
- SVG
- MathML
## 2. HTML Markup
- aside
- main (only 1 per page)
- article
- hgroup, h1, h2...
- p (if no markup available, use class)
- strong and em
- ul, ol, li
- figure, img, figurecaption
- dfn (definition)
- nav (navigation)
- pre, samp (example), code
- footer
## 3. HTML Syntax
- legal elements: 
    - Element `<tagname></tagname>`
    - Text: text
    - Comment: `<!-- comments -->`
    - DocumentType: `<!Doctype html>`
    - ProcessingInstruction: `<?a 1?>`
    - CDATA: `<![CDATA[]]>` like text node
- characters and special characters
## 4. Browser API | DOM API
- DOM is NOT the only browser API
### 4.1 Node
![](Node.png)
### 4.2 Working with Elements
#### 4.2.1 Navigation
- Node navigation
    - parentNode
    - childNodes
    - firstChild
    - lastChild
    - nextSibling
    - previousSibling
- Element navigation
    - parentElement
    - children
    - firstElementChild
    - lastElementChild
    - nextElementSibling
    - previousElementSibling
#### 4.2.2 Manipulation
- appendChild
- insertBefore
- removeChild
- replaceChild (=remove + insert)

#### 4.2.3 Advanced operations
- compareDocumentPosition
- contains
- isEqualNode
- isSameNode (equivalent to "===")
- cloneNode (deep copy if set parameter to true)

## 5. Browser API | Event API
### 5.1 addEventLister
- target.addEventListener(type, listener, [, options])
    - options: capture (capture/bubbling)
    ```html
    <div id="a" style="width: 100%; height: 300px;background: lightblue;">
    <div id="b" style="width: 100%; height: 200px; background: pink;">
    </div>
    </div>

    <script>
        var a = document.getElementById("a");
        var b = document.getElementById("b");
    </script>
    ```
    - options: once
    - options: passive
## 6. Browser API | Range API
### 6.1 Create a range
```javaScript
var range = new Range()
range.setStart(element, 9) // element and displacement
range.setEnd(element, 4)
var range = document.getSelection().getRangeAt(0);
```
### 6.2 Other Range API functions
- range.setStartBefore
- range.setEndBefore
- range.setStartAfter
- range.setEndAfter
- range.selectNode
- range.selectNodeContents
```javaScript
var fragment = range.extractContents()
range.insertnode(document.createTextNode("aaaa"))
```

## 7. Browser API | CSSOM
## 8. Browser API | CSSOM View
## 9. Browser API | Other APIs
