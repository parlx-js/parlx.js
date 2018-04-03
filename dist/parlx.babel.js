'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
* parlx.js v1.1 beta 4
* Copyright 2017-2018 Jakub Biesiada
* MIT License
*/

var Parlx = function () {
  function Parlx(elements) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Parlx);

    // call init function when parallax elements length > 0
    if (elements.length > 0) {
      this.init(elements, settings);
      return;

      // return when no parallax elements
    } else if (elements.length === 0) {
      return;

      // set parallax element
    } else {
      this.element = elements;
    }

    // set settings
    this.settings = this.settings(settings);

    // call main parallax function
    this.parallaxEffect();

    // call events function
    this.addEventListeners();
  }

  _createClass(Parlx, [{
    key: 'init',
    value: function init(elements, settings) {
      // split parallax elements
      for (var i = 0; i < elements.length; i++) {
        this.parlx = new Parlx(elements[i], settings);
      }
    }
  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      var _this = this;

      // scroll event
      window.addEventListener('scroll', function () {
        return _this.onWindowScroll();
      });

      // resize event
      window.addEventListener('resize', function () {
        return _this.onWindowResize();
      });
    }
  }, {
    key: 'onWindowScroll',
    value: function onWindowScroll() {
      this.parallaxEffect();
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.parallaxEffect();
    }
  }, {
    key: 'transforms',
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

      this.transform = 'translate(' + this.moveX + 'px, ' + this.moveY + 'px)';
    }
  }, {
    key: 'parallaxEffect',
    value: function parallaxEffect() {
      // set parallax element height
      this.element.style.height = this.settings.height;

      // get parallax scroll position
      var scrolled = this.element.getBoundingClientRect().y;

      // set speed range
      if (Math.abs(this.settings.speed) > 1) this.settings.speed = 0.3;

      // element movement
      this.movement = this.settings.speed * scrolled / 2;

      // disable parallax on mobile if option mobile is false
      if ('ontouchstart' in document.documentElement && !this.settings.mobile) this.settings.speed = 0;

      // set transforms
      this.transforms();

      // types of parallax direction
      if (this.settings.type === 'foreground') {

        // children element style
        Object.assign(this.element.style, {
          '-webkit-transform': this.transform,
          'transform': this.transform
        });
      } else if (this.settings.type === 'background') {

        // set image position
        Object.assign(this.element.querySelector('img').style, {
          '-webkit-transform': this.transform,
          'transform': this.transform,
          'width': 'auto',
          'height': 'auto',
          'min-width': this.element.offsetWidth * (1 + Math.abs(this.settings.speed)) + 'px',
          'min-height': this.element.offsetHeight * (1 + Math.abs(this.settings.speed)) + 'px'
        });
      }
    }
  }, {
    key: 'settings',
    value: function settings(_settings) {
      // defaults
      var defaults = {
        direction: 'vertical', // parallax element move direction
        type: 'background', // type of parallax: foreground (div move), background (inner image move)
        speed: 0.3, // parallax speed (min: -0.5, max: 0.5)
        height: '400px', // parallax element height
        mobile: true // enable: true, or disable: false, parallax on mobile devices (touch screen)
      };

      var custom = {};

      // apply settings and get values from data-*
      for (var setting in defaults) {
        if (setting in _settings) {
          custom[setting] = _settings[setting];
        } else if (this.element.getAttribute('data-' + setting)) {
          var attribute = this.element.getAttribute('data-' + setting);
          try {
            custom[setting] = JSON.parse(attribute);
          } catch (e) {
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

// autoinit


var autoInit = new Parlx(document.querySelectorAll('[data-parlx]'));

// jQuery
if (window.jQuery) {
  var $ = window.jQuery;

  $.fn.parlx = function (options) {
    new Parlx(this, options);
  };
}

// AMD
if (typeof define === 'function' && define.amd) {
  define('Parlx', [], function () {
    return Parlx;
  });

  // CommonJS
} else if (typeof exports !== 'undefined' && !exports.nodeType) {
  if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = Parlx;
  }
  exports.default = Parlx;
}