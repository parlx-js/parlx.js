# [parlx.js](https://github.com/jb1905/parlx.js)

[![NPM version](http://img.shields.io/npm/v/parlx.js.svg?style=flat-square)](https://www.npmjs.com/package/parlx.js)
[![NPM downloads](http://img.shields.io/npm/dm/parlx.js.svg?style=flat-square)](https://www.npmjs.com/package/parlx.js)

## About

### Demo
**[See plugin in action](https://jb1905.github.io/parlx.js/)**

### React plugin
If you use React, install component with the implementation of the parlx.js library!
**[More here](https://github.com/JB1905/react-parlx/)**

## How to Install
First, install the library in your project by npm:
```bash
$ npm install parlx.js
```

Or Yarn:
```bash
$ yarn add parlx.js
```

**You can also connect script via one of CDNs:**<br>
bundle.run: `https://bundle.run/parlx.js`<br>
jsDelivr: `https://cdn.jsdelivr.net/npm/parlx.js/`<br>
unpkg: `https://unpkg.com/parlx.js/`

## Getting Started
**Connect libary with project using script tag in HTML:**
```html
<script src="/path/to/parlx.js"></script>
```

**ES6 import:**
```js
import Parlx from 'parlx.js';
```

**Or CommonJS:**
```js
const Parlx = require('parlx.js');
```

Next use library with:

**&bull; Vanilla JavaScript e.g:**
```js
const elems = document.querySelectorAll('.parallax');

const parlx = Parlx.init({
  elements: elems,
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  }
});
```

**&bull; or jQuery e.g:**

*Connect jQuery in HTML*
```html
<script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
```

*Or include via command line and CommonJS*
```sh
$ npm install jquery
$ yarn add jquery
$ bower install jquery
```

```js
const jQuery = require('jquery');
```

*And call plugin on element*
```js
$('.parallax').parlx({
  settings: {
    // options...
  },
  callbacks: {
    // callbacks...
  }
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
### Settings
Name | Type | Default | Description | Available options
-|-|-|-|-
**direction** | string | `vertical` | Parallax element move direction | `vertical`, `horizontal`, `diagonal`
**exclude** | RegExp | `null` | Disable parallax effect on selected user agents | e.g: <code>/(Mozilla&#124;iPad)/</code>
**height** | string | `400px` | Height of parallax element container | e.g: `500px`, `70vh`, `auto`
**speed** | number | `0.3` | Parallax speed | values >= `-1` and <= `1`
**type** | string | `background` | Type of parallax | `foreground` (div move), `background` (content move)

### Callbacks
Name | Description | Available options
-|-|-
**onInit** | Callback on plugin init | `el => { /* code */ }`
**onDestroy** | Callback on plugin destroy | `el => { /* code */ }`
**onResize** | Callback on window resize | `el => { /* code */ }`
**onScroll** | Callback on window scroll | `el => { /* code */ }`

## Event
`parlxMove` event will output current position of the parallax element

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada
