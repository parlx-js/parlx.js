/*!
* parlx.js v1.0
* Copyright 2017 Jakub Biesiada
* MIT License
*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Parlx = function () {
  function Parlx(elements) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Parlx);

    if (elements.length > 1) {
      this.init(elements, settings);
      return;
    } else {
      this.element = elements;
    }

    this.settings = this.settings(settings);

    this.parallaxEffect();
    this.addEventListeners();
  }

  _createClass(Parlx, [{
    key: 'init',
    value: function init(elements, settings) {
      for (var element = 0; element < elements.length; element++) {
        new Parlx(elements[element], settings);
      }
    }
  }, {
    key: 'addEventListeners',
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
    key: 'parallaxEffect',
    value: function parallaxEffect() {
      if ("ontouchstart" in document.documentElement && this.settings.mobile === false) {
        this.settings.speed = 0;
      }

      if (this.settings.speed < 0 || this.settings.speed > 0.5) {
        this.settings.speed = 0.3;
      }

      this.element.style.height = this.settings.height;

      this.children = this.element.querySelector(this.settings.item);

      var scrolled = window.pageYOffset - this.element.offsetTop;

      Object.assign(this.children.style, {
        'top': '0px',
        'left': '50%',
        'min-height': this.element.offsetHeight * (1 + this.settings.speed * 2) + 'px',
        'min-width': '100%',
        'width': 'auto',
        '-webkit-transform': 'translate(-50%, ' + this.settings.speed * scrolled + 'px)',
        '-ms-transform': 'translate(-50%, ' + this.settings.speed * scrolled + 'px)',
        'transform': 'translate(-50%, ' + this.settings.speed * scrolled + 'px)'
      });

      if (this.children.tagName.toLowerCase() !== 'img') {
        this.children.style.backgroundPosition = 'center center';
      }
    }
  }, {
    key: 'settings',
    value: function settings(_settings) {
      var defaults = {
        item: '.background',
        speed: 0.3,
        height: '400px',
        mobile: true
      };

      var custom = {};

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

// JQUERY PLUGIN CALL IF JQUERY LOADED


if (window.jQuery) {
  var $ = window.jQuery;

  $.fn.Parlx = function (options) {
    for (var element = 0; element < this.length; element++) {
      new Parlx(this[element], options);
    }
  };
}