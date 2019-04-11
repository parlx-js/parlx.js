(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Parlx", [], factory);
	else if(typeof exports === 'object')
		exports["Parlx"] = factory();
	else
		root["Parlx"] = factory();
})(typeof window !== "object" ? global.window = global : window, function() {
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

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _parlx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parlx */ "./src/parlx.js");

/* harmony default export */ __webpack_exports__["default"] = (_parlx__WEBPACK_IMPORTED_MODULE_0__["default"]);
exports['default'] = _parlx__WEBPACK_IMPORTED_MODULE_0__["default"];
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/parlx.js":
/*!**********************!*\
  !*** ./src/parlx.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parlx; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parlx =
/*#__PURE__*/
function () {
  function Parlx(elements) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Parlx);

    if (elements.length > 0) {
      this.init(elements, settings);
      return;
    } else if (elements.length === 0) {
      return;
    } else {
      this.element = elements;
    }

    this.settings = this.settings(settings);
    this.parallaxEffect();
    this.addEventListeners();
  }

  _createClass(Parlx, [{
    key: "init",
    value: function init(elements, settings) {
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
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
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

      window.addEventListener('scroll', function () {
        return _this.onWindowScroll();
      });
      window.addEventListener('resize', function () {
        return _this.onWindowResize();
      });
    }
  }, {
    key: "onWindowScroll",
    value: function onWindowScroll() {
      this.parallaxEffect();

      if (typeof this.settings.onScroll === 'function') {
        this.settings.onScroll(this.element);
      }
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.parallaxEffect();

      if (typeof this.settings.onResize === 'function') {
        this.settings.onResize(this.element);
      }
    }
  }, {
    key: "transforms",
    value: function transforms() {
      var moveX, moveY;

      if (this.settings.direction === 'horizontal') {
        moveX = this.movement;
        moveY = '0';
      } else if (this.settings.direction === 'vertical') {
        moveX = '0';
        moveY = this.movement;
      } else if (this.settings.direction === 'diagonal') {
        moveX = this.movement;
        moveY = this.movement;
      }

      this.transform = "translate(".concat(moveX, "px, ").concat(moveY, "px)");
    }
  }, {
    key: "parallaxEffect",
    value: function parallaxEffect() {
      this.element.style.height = this.settings.height;
      var scrolled = this.element.getBoundingClientRect().top;
      if (Math.abs(this.settings.speed) > 1) this.settings.speed = 0.3;
      this.movement = this.settings.speed * scrolled / 2;

      if (navigator.userAgent.match(this.settings.exclude)) {
        this.settings.speed = 0;
      }

      this.transforms();

      if (this.settings.type === 'foreground') {
        Object.assign(this.element.style, {
          transform: this.transform
        });
      } else if (this.settings.type === 'background') {
        if (!this.element.querySelector('.parlx-children')) {
          var child = document.createElement('div');
          child.classList.add('parlx-children');
          this.element.appendChild(child);
        }

        Object.assign(this.element.querySelector('.parlx-children').style, {
          transform: this.transform,
          'object-fit': 'cover',
          'min-width': "".concat(this.element.offsetWidth * (1 + Math.abs(this.settings.speed) * 2), "px"),
          height: "".concat(this.element.offsetHeight * (1 + Math.abs(this.settings.speed) * 2), "px")
        });
      }

      var values = {
        move: this.movement
      };
      this.element.dispatchEvent(new CustomEvent('parlxMove', {
        detail: values
      }));
    }
  }, {
    key: "settings",
    value: function settings(_settings) {
      var defaults = {
        direction: 'vertical',
        // parallax element move direction
        type: 'background',
        // type of parallax: foreground (div move), background (inner image move)
        speed: 0.3,
        // parallax speed (min: -1, max: 1)
        height: '400px',
        // parallax element height
        exclude: null,
        // enable/disable parallax effect on selected user agents
        onScroll: null,
        // callback on window scroll
        onResize: null // callback on window resize

      };
      var custom = {};

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
}();



if (typeof document !== 'undefined') {
  var elements = document.querySelectorAll('[data-parlx]');
  elements.length && new Parlx(elements);
}

if (window.jQuery) {
  var $ = window.jQuery;

  $.fn.parlx = function (options) {
    new Parlx(this, options);
  };
}

/***/ })

/******/ });
});
//# sourceMappingURL=parlx.js.map