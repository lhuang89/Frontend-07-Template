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

## Setting up environment for JSX

- Install webpack and babel-loader

```sh
# create a folder for your jsx project, e.g Week14/jsx
# in your jsx folder, e.g. Week14/jsx

# 1. cd into the folder, and create npm 
npm init
# 2. install webpack globally
npm install -g webpack webpack-cli

# after installed, we can check the version of webpack using 'webpack --version'

# 3. install babel series locally using --save-dev
npm install --save-dev webpack babel-loader
```
- Create configuration file webpack.config.js, after this you can create the js file specified in 'entry' to test (main.js in this example)
```js
module.exports = {
    entry: "./main.js",
}

```
- keep installing babel
```sh
# 4. install babel core and babel preset-env
npm install --savedev @babel/core @babel/preset-env
```

- add rules to webpack.config.js

```js
// this is how webpack.config.js look like up to this step, we also added 'mode: "development"', it can be changed to "production" later
// in develepment mode the translated js file will have line breaks
module.exports = {
    entry: "./main.js",
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    },
    mode: "development"
}
```
- In order to correctly parse html markups in js, e.g (let a=<div/>), we need to install another babel package
```sh
npm install --save-dev @babel/plugin-transform-react-jsx
```
- We need to add this package to our configuration
```js
module.exports = {
    entry: "./main.js",
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: ["@babel/plugin-transform-react-jsx"]
                }
            }
        }]
    },
    mode: "development"
}
```
- To test our results in browser we can also install webpack-dev-server
```sh
npm install webpack-dev-server --save-dev
npm install --save-dev webpack-cli
# note that if you install the server locally, you have to run in node_modules/.bin/
# or you can add the following to package.json then use 'npm start' to run
# "'scripts': {
#    'start' : 'webpack-dev-server'
# }

# WARNING: webpack-cli version 4.x conflicts with webpack-dev-server 3.x. 
# you will get an error "Cannot find module 'webpack-cli/bin/config-yargs'"
# change to use command 'webpack serve' instead of 'webpack-dev-server'
# you may still have to run webpack before refreshing webpage to apply new js changes
# after this step, you can use localhost:8080/[path to your html] to view your page
```


