# parlx.js

JavaScript & jQuery parallax effect plugin

## How to use?

Place the following code in the .js file and customize the prameters:

**USE JAVASCRIPT:**

```
var elems = document.querySelectorAll('.parallax');
var parlx = new Parlx(elems, {
  item: '.background'
});
```

**OR JQUERY:**

```
$('.parallax').Parlx({
  item: '.background'
});
```

## Options
Name|Type|Default|Description
--|---|---|---
speed|number (float)|0.3|Speed of parallax effect (min: 0.1 (slower), max: 0.5(faster))
height|string|'400px'|Height of parallax effect container (available units: px, vh, em, rem, cm)
mobile|boolean|true|Enable (true) or disable (false) parallax effect on mobile devices

## Questions & Answers
Does the plugin work on mobile devices?   
**YES**

Does the plugin require jQuery?   
**NO**

## License

This project is licensed under the MIT License
