# [parlx.js](https://github.com/jb1905/parlx.js)

[![NPM version](http://img.shields.io/npm/v/parlx.js.svg?style=flat-square)](https://www.npmjs.com/package/parlx.js)
[![NPM downloads](http://img.shields.io/npm/dm/parlx.js.svg?style=flat-square)](https://www.npmjs.com/package/parlx.js)

## Demo
**[See plugin in action](https://jb1905.github.io/parlx.js/)**

## How to Install
At the beginning connect the library with Your project:

**&bull; using script tag in HTML:**
```html
<script src="/directory/to/library/folder/parlx.js"></script>
```

**&bull; or via command line:**
```sh
$ npm install parlx.js // npm
$ yarn add parlx.js // yarn
```

## Getting Started
**If you added library via package manager use CommonJS/ES6 import:**
```js
const Parlx = require('parlx.js'); // CommonJS
import Parlx from 'parlx.js'; // ES6
```

Next use library with:

**&bull; Vanilla JavaScript e.g:**
```js
const elems = document.querySelectorAll('.parallax');
const parlx = new Parlx(elems, {
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
$ npm install jquery // npm
$ yarn add jquery // yarn
$ bower install jquery // bower
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

## Options
Name | Type | Default | Description | Available options
-|-|-|-|-
**direction** | string | `vertical` | parallax element move direction | `vertical`, `horizontal`, `diagonal`
**type** | string | `background` | type of parallax | `foreground` (div move), `background` (inner image move)
**speed** | number | `0.3` | parallax speed | values >= `-1` and <= `1`
**height** | string | `400px` | Height of parallax effect container | e.g: `500px`, `70vh`, `auto`
**mobile** | boolean | `true` | Enable or disable parallax effect on mobile devices | Enable `true`, disable `false`

## Event
`parlxMove` event will output current position of the parallax element

## License
This project is licensed under the MIT License © 2018-present Jakub Biesiada
