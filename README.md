# [parlx.js](https://github.com/jb1905/parlx.js)

[![NPM version](http://img.shields.io/npm/v/parlx.js.svg?style=flat-square)](https://www.npmjs.com/package/parlx.js)
[![NPM downloads](http://img.shields.io/npm/dm/parlx.js.svg?style=flat-square)](https://www.npmjs.com/package/parlx.js)

## Demo
**[See plugin in action](https://jb1905.github.io/parlx.js/)**

## React plugin
If You use React, install component, with the implementation of the parlx.js library!
**[More here](https://github.com/JB1905/react-parlx/)**

## How to Install
At the beginning install the library in Your project via npm or Yarn:
```sh
$ npm install parlx.js
$ yarn add parlx.js
```

## Getting Started
**Connect using script tag in HTML:**
```html
<script src="/directory/to/library/folder/parlx.js"></script>
```

**Or CommonJS/ES6 import:**
```js
const Parlx = require('parlx.js'); // CommonJS
import Parlx from 'parlx.js'; // ES6
```

Next use library with:

**&bull; Vanilla JavaScript e.g:**
```js
const elems = document.querySelectorAll('.parallax');

// v1
const parlx = new Parlx(elems, {
  // options...
});

// v2
const parlx = Parlx.init(elems, {
  // options...
});
```

**&bull; or jQuery e.g:**

*Connect jQuery in HTML*
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

*or include via command line and CommonJS*
```sh
$ npm install jquery
$ yarn add jquery
$ bower install jquery
```

```js
const jQuery = require('jquery');
```

*and call plugin on element*
```js
$('.parallax').parlx({
  // options...
});
```

**&bull; Plugin supports autoinit**

To use it, add `data-parlx` to html element e.g:
```html
<div data-parlx></div>
```

## Methods
**&bull; Destroy method**
```js
elems.parlx.destroy();
```

## Options
Name | Type | Default | Description | Available options
-|-|-|-|-
**direction** | string | `vertical` | Parallax element move direction | `vertical`, `horizontal`, `diagonal`
**type** | string | `background` | Type of parallax | `foreground` (div move), `background` (content move)
**speed** | number | `0.3` | Parallax speed | values >= `-1` and <= `1`
**height** | string | `400px` | Height of parallax effect container | e.g: `500px`, `70vh`, `auto`
**exclude** | RegExp | `null` | Disable parallax effect on selected user agents | e.g: <code>/(Mozilla&#124;iPad)/</code>
**onScroll** | function | `null` | Callback on  window scroll | `el => { // code }`
**onResize** | function | `null` | Callback on  window resize | `el => { // code }`

## Event
`parlxMove` event will output current position of the parallax element

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada
