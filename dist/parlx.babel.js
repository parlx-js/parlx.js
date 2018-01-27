'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*!
* parlx.js v1.1 beta 3
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
      for (var element = 0; element < elements.length; element++) {
        new Parlx(elements[element], settings);
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
    key: 'isTouch',
    value: function isTouch() {
      // check if is touch device
      if ("ontouchstart" in document.documentElement) {
        return true;
      }
    }
  }, {
    key: 'onWindowScroll',
    value: function onWindowScroll() {
      var _this2 = this;

      if (!this.isTouch()) {
        // optimize parallax effect on desktop (no touch)
        window.requestAnimationFrame(function () {
          return _this2.parallaxEffect();
        });
      } else {
        this.parallaxEffect();
      }
    }
  }, {
    key: 'onWindowResize',
    value: function onWindowResize() {
      this.parallaxEffect();
    }
  }, {
    key: 'parallaxEffect',
    value: function parallaxEffect() {
      // set parallax element height
      this.element.style.height = this.settings.height;

      // get parallax scroll position
      var scrolled = window.pageYOffset - this.element.offsetTop;

      // set speed range
      if (Math.abs(this.settings.speed) > 0.5) {
        this.settings.speed = 0.3;
      }

      // element movement
      this.movement = (-this.settings.speed * scrolled).toFixed(2);

      // disable parallax on mobile if option mobile is false
      if (this.isTouch() && !this.settings.mobile) {
        this.settings.speed = 0;
      }

      // types of parallax direction
      if (this.settings.type === 'front') {
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

        if (this.isTouch()) {
          this.transform = 'translate(' + this.moveX + 'px, ' + this.moveY + 'px)';
        } else {
          this.transform = 'translate3d(' + this.moveX + 'px, ' + this.moveY + 'px, 0px)';
        }

        // children element style
        Object.assign(this.element.style, {
          '-webkit-transform': this.transform,
          'transform': this.transform,
          'transition': 'transform linear',
          'will-change': 'transform'
        });
      } else if (this.settings.type === 'back') {
        Object.assign(this.element.style, {
          'background-repeat': 'no-repeat'
        });

        // if width > height
        if (this.element.offsetWidth > this.element.offsetHeight) {
          Object.assign(this.element.style, {
            'background-size': this.element.offsetWidth + ' ' + this.element.offsetHeight * (1 + Math.abs(this.settings.speed) * 2) + 'px'
          });

          // if width <= height
        } else {
          Object.assign(this.element.style, {
            'background-size': this.element.offsetWidth * (1 + Math.abs(this.settings.speed) * 2) + 'px ' + this.element.offsetHeight
          });
        }

        if (this.settings.direction === 'horizontal') {
          this.posX = 'calc(50% + ' + this.movement + 'px)';
          this.posY = 'center';
        } else if (this.settings.direction === 'vertical') {
          this.posX = 'center';
          this.posY = 'calc(50% + ' + this.movement + 'px)';
        } else if (this.settings.direction === 'diagonal') {
          this.posX = 'calc(50% + ' + this.movement + 'px)';
          this.posY = 'calc(50% + ' + this.movement + 'px)';
        }

        this.element.style.backgroundPosition = this.posX + ' ' + this.posY;
      }
    }
  }, {
    key: 'settings',
    value: function settings(_settings) {
      // defaults
      var defaults = {
        direction: 'vertical', // parallax element move direction
        type: 'back', // type of parallax: front (div move), back (background or inner image move)
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

// jQuery


if (window.jQuery) {
  var $ = window.jQuery;

  $.fn.Parlx = function (options) {
    for (var element = 0; element < this.length; element++) {
      new Parlx(this[element], options);
    }
  };
}

// AMD
if (typeof define === "function" && define.amd) {
  define("Parlx", [], function () {
    return Parlx;
  });

  // Common JS
} else if (typeof exports !== 'undefined' && !exports.nodeType) {
  if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = Parlx;
  }
  exports.default = Parlx;
}