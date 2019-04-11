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
exports["default"] = void 0;

var _parlx = _interopRequireDefault(__webpack_require__(/*! ./parlx */ "./src/parlx.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _parlx["default"];
exports["default"] = _default;
exports['default'] = _parlx["default"];
module.exports = exports['default'];

/***/ }),

/***/ "./src/parlx.js":
/*!**********************!*\
  !*** ./src/parlx.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Parlx =
/*#__PURE__*/
function () {
  function Parlx(element) {
    var _this = this;

    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var callbacks = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, Parlx);

    _defineProperty(this, "onWindowScroll", function () {
      if (_this.element) {
        _this.parallaxEffect();

        if (typeof _this.callbacks.onScroll === 'function') {
          _this.callbacks.onScroll(_this.element);
        }
      }
    });

    _defineProperty(this, "onWindowResize", function () {
      if (_this.element) {
        _this.parallaxEffect();

        if (typeof _this.callbacks.onResize === 'function') {
          _this.callbacks.onResize(_this.element);
        }
      }
    });

    this.element = element;
    this.callbacks = callbacks;
    this.settings = this.extendSettings(settings);

    if (typeof this.callbacks.onInit === 'function') {
      this.callbacks.onInit(this.element);
    }

    this.parallaxEffect();
    this.addEventListeners();
  }

  _createClass(Parlx, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      window.addEventListener('scroll', this.onWindowScroll);
      window.addEventListener('resize', this.onWindowResize);
    }
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      window.removeEventListener('scroll', this.onWindowScroll);
      window.removeEventListener('resize', this.onWindowResize);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (typeof this.callbacks.onDestroy === 'function') {
        this.callbacks.onDestroy(this.element);
      }

      this.removeEventListeners();
      this.element.parlx = null;
      delete this.element.parlx;
      this.element = null;
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
    key: "extendSettings",
    value: function extendSettings(settings) {
      var defaultSettings = {
        direction: 'vertical',
        // parallax element move direction
        exclude: null,
        // enable/disable parallax effect on selected user agents
        height: '400px',
        // parallax element height
        speed: 0.3,
        // parallax speed (min: -1, max: 1)
        type: 'background' // type of parallax: foreground (div move), background (inner image move)

      };
      var newSettings = {};

      for (var property in defaultSettings) {
        if (property in settings) {
          newSettings[property] = settings[property];
        } else if (this.element.getAttribute("data-".concat(property))) {
          var attribute = this.element.getAttribute("data-".concat(property));

          try {
            newSettings[property] = JSON.parse(attribute);
          } catch (_unused) {
            newSettings[property] = attribute;
          }
        } else {
          newSettings[property] = defaultSettings[property];
        }
      }

      return newSettings;
    }
  }], [{
    key: "init",
    value: function init() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var elements = data.elements,
          settings = data.settings,
          callbacks = data.callbacks;
      if (elements instanceof Node) elements = [elements];
      if (elements instanceof NodeList) elements = [].slice.call(elements);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          if (!('parlx' in element)) {
            element.parlx = new Parlx(element, settings, callbacks);
          }
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
  }]);

  return Parlx;
}();

exports["default"] = Parlx;

if (typeof document !== 'undefined') {
  window.Parlx = Parlx;
  var elements = document.querySelectorAll('[data-parlx]');
  elements.length && Parlx.init({
    elements: elements
  });
}

if (window.jQuery) {
  var $ = window.jQuery;

  $.fn.parlx = function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Parlx.init({
      elements: this,
      settings: data.settings || {},
      callbacks: data.callbacks || {}
    });
  };
}

/***/ })

/******/ });
});
//# sourceMappingURL=parlx.js.map