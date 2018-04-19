# parlx.js

JavaScript & jQuery parallax effect plugin

## Demo
**[See plugin in action](https://jb1905.github.io/parlx.js/)**

## Usage
At the beginning connect the library with Your project:

**&bull; using script tag in HTML:**
```
<script src="/directory/to/library/folder/parlx.js"></script>
```

**&bull; or via command line and CommonJS/ES6 import:**
```
npm install parlx.js // npm
yarn add parlx.js // yarn
```
```
const Parlx = require('parlx.js'); // CommonJS
import Parlx form 'parlx.js'; // ES6
```

<br>
Next use library with:

**&bull; Vanilla JavaScript e.g:**
```
const elems = document.querySelectorAll('.parallax');
const parlx = new Parlx(elems, {
  // options...
});
```

**&bull; or jQuery e.g:**
*Connect jQuery in HTML*
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
```

*or include via command line and CommonJS*
```
npm install jquery // npm
yarn add jquery // yarn
bower install jquery // bower
```

```
const jQuery = require('jquery');
```

*and call plugin on element*
```
$('.parallax').parlx({
  // options...
});
```

**&bull; Plugin supports autoinit**
To use it, add `data-parlx` to html element e.g:
```
<div data-parlx></div>
```

## Options
Name | Type | Default | Description | Available options
-|-|-|-|-
direction | string | `vertical` | parallax element move direction | `vertical`, `horizontal`, `diagonal`
type | string | `background` | type of parallax | `foreground` (div move), `background` (inner image move)
speed | number | `0.3` | parallax speed | values >= `-1` and <= `1`
height | string | `400px` | Height of parallax effect container | e.g: `500px`, `70vh`
mobile | boolean | `true` | Enable or disable parallax effect on mobile devices | Enable `true`, disable `false`

## License
This project is licensed under the MIT License
