/*!
* parlx.js v1.1.0 beta 4
* Copyright 2017-2018 Jakub Biesiada
* MIT License
*/

class Parlx {
  constructor(elements, settings = {}) {
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

  init(elements, settings) {
    // split parallax elements
    for (let i = 0; i < elements.length; i++) {
      this.parlx = new Parlx(elements[i], settings);
    }
  }

  addEventListeners() {
    // scroll event
    window.addEventListener('scroll', () => this.onWindowScroll());

    // resize event
    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowScroll() {
    this.parallaxEffect();
  }

  onWindowResize() {
    this.parallaxEffect();
  }

  transforms() {
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

    this.transform = `translate(${this.moveX}px, ${this.moveY}px)`;
  }

  parallaxEffect() {
    // set parallax element height
    this.element.style.height = this.settings.height;

    // get parallax scroll position
    let scrolled = this.element.getBoundingClientRect().y;

    // set speed range
    if (Math.abs(this.settings.speed) > 1) this.settings.speed = 0.3;

    // element movement
    this.movement = (this.settings.speed * scrolled) / 2;

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
        'min-width': `${this.element.offsetWidth * (1 + Math.abs(this.settings.speed))}px`,
        'min-height': `${this.element.offsetHeight * (1 + Math.abs(this.settings.speed))}px`
      });
    }

    let values = {
      move: this.movement
    };

    // parallax movement event
    this.element.dispatchEvent(new CustomEvent('parlxMove', {
      'detail': values
    }));
  }

  settings(settings) {
    // defaults
    let defaults = {
      direction: 'vertical', // parallax element move direction
      type: 'background', // type of parallax: foreground (div move), background (inner image move)
      speed: 0.3, // parallax speed (min: -0.5, max: 0.5)
      height: '400px', // parallax element height
      mobile: true // enable: true, or disable: false, parallax on mobile devices (touch screen)
    };

    let custom = {};

    // apply settings and get values from data-*
    for (let setting in defaults) {
      if (setting in settings) {
        custom[setting] = settings[setting];
      } else if (this.element.getAttribute(`data-${setting}`)) {
        let attribute = this.element.getAttribute(`data-${setting}`);
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
}

// autoinit
if (typeof document !== 'undefined') {
  new Parlx(document.querySelectorAll('[data-parlx]'));
}

// jQuery
let scope;

if (typeof window !== 'undefined')
 scope = window;
else if (typeof global !== 'undefined')
 scope = global;

if (scope && scope.jQuery) {
  let $ = scope.jQuery;

  $.fn.parlx = function(options) {
    new Parlx(this, options);
  }
}

// AMD
if (typeof define === 'function' && define.amd) {
  define('Parlx', [], function() {
    return Parlx;
  });

// CommonJS
} else if (typeof exports !== 'undefined' && !exports.nodeType) {
  if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = Parlx;
  }
  exports.default = Parlx;
}
