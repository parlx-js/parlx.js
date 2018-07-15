(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Parlx", [], factory);
	else if(typeof exports === 'object')
		exports["Parlx"] = factory();
	else
		root["Parlx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parlx = _interopRequireDefault(__webpack_require__(/*! ./parlx */ "./src/parlx.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _parlx.default;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/parlx.js":
/*!**********************!*\
  !*** ./src/parlx.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parlx =
/*#__PURE__*/
function () {
  function Parlx(elements) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Parlx);

    // call init function when parallax elements length > 0
    if (elements.length > 0) {
      this.init(elements, settings);
      return; // return when no parallax elements
    } else if (elements.length === 0) {
      return; // set parallax element
    } else {
      this.element = elements;
    } // set settings


    this.settings = this.settings(settings); // call main parallax function

    this.parallaxEffect(); // call events function

    this.addEventListeners();
  }

  _createClass(Parlx, [{
    key: "init",
    value: function init(elements, settings) {
      // split parallax elements
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;
          this.parlx = new Parlx(element, settings);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      // scroll event
      window.addEventListener('scroll', function () {
        return _this.onWindowScroll();
      }); // resize event

      window.addEventListener('resize', function () {
        return _this.onWindowResize();
      });
    }
  }, {
    key: "onWindowScroll",
    value: function onWindowScroll() {
      this.parallaxEffect();
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.parallaxEffect();
    }
  }, {
    key: "transforms",
    value: function transforms() {
      if (this.settings.direction === 'horizontal') {
        this.moveX = this.movement;
        this.moveY = '0';
      } else if (this.settings.direction === 'vertical') {
        this.moveX = '0';
        this.moveY = this.movement;
      } else if (this.settings.direction === 'diagonal') {
        this.moveX = this.movement;
        this.moveY = this.movement;
      }

      this.transform = "translate(".concat(this.moveX, "px, ").concat(this.moveY, "px)");
    }
  }, {
    key: "parallaxEffect",
    value: function parallaxEffect() {
      // set parallax element height
      this.element.style.height = this.settings.height; // get parallax scroll position

      var scrolled = this.element.getBoundingClientRect().y; // set speed range

      if (Math.abs(this.settings.speed) > 1) this.settings.speed = 0.3; // element movement

      this.movement = this.settings.speed * scrolled / 2; // disable parallax on mobile if option mobile is false

      if ('ontouchstart' in document.documentElement && !this.settings.mobile) this.settings.speed = 0; // set transforms

      this.transforms(); // types of parallax

      if (this.settings.type === 'foreground') {
        // children element style
        Object.assign(this.element.style, {
          '-webkit-transform': this.transform,
          transform: this.transform
        });
      } else if (this.settings.type === 'background') {
        // set image position
        Object.assign(this.element.querySelector('.parlx-children, img').style, {
          '-webkit-transform': this.transform,
          transform: this.transform,
          'object-fit': 'cover',
          'min-width': "".concat(this.element.offsetWidth * (1 + Math.abs(this.settings.speed) * 2), "px"),
          height: "".concat(this.element.offsetHeight * (1 + Math.abs(this.settings.speed) * 2), "px")
        });
      }

      var values = {
        move: this.movement
      }; // parallax movement event

      this.element.dispatchEvent(new CustomEvent('parlxMove', {
        detail: values
      }));
    }
  }, {
    key: "settings",
    value: function settings(_settings) {
      // defaults
      var defaults = {
        direction: 'vertical',
        // parallax element move direction
        type: 'background',
        // type of parallax: foreground (div move), background (inner image move)
        speed: 0.3,
        // parallax speed (min: -1, max: 1)
        height: '400px',
        // parallax element height
        mobile: true // enable: true, or disable: false, parallax on mobile devices (touch screen)

      };
      var custom = {}; // apply settings and get values from data-*

      for (var setting in defaults) {
        if (setting in _settings) {
          custom[setting] = _settings[setting];
        } else if (this.element.getAttribute("data-".concat(setting))) {
          var attribute = this.element.getAttribute("data-".concat(setting));

          try {
            custom[setting] = JSON.parse(attribute);
          } catch (err) {
            custom[setting] = attribute;
          }
        } else {
          custom[setting] = defaults[setting];
        }
      }

      return custom;
    }
  }]);

  return Parlx;
}(); // autoinit


exports.default = Parlx;
if (typeof document !== 'undefined') new Parlx(document.querySelectorAll('[data-parlx]')); // jQuery

var scope;
if (typeof window !== 'undefined') scope = window;else if (typeof global !== 'undefined') scope = global;

if (scope && scope.jQuery) {
  var $ = scope.jQuery;

  $.fn.parlx = function (options) {
    new Parlx(this, options);
  };
}

module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
});
//# sourceMappingURL=parlx.js.map