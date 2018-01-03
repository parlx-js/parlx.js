/*!
* parlx.js v1.0
* Copyright 2017-2018 Jakub Biesiada
* MIT License
*/

class Parlx {
  constructor(elements, settings = {}) {
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

  init(elements, settings) {
    for (var element = 0; element < elements.length; element++) {
      new Parlx(elements[element], settings);
    }
  }

  addEventListeners() {
    window.addEventListener('scroll', () => this.onWindowScroll());
    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowScroll() {
    this.parallaxEffect();
  }

  onWindowResize() {
    this.parallaxEffect();
  }

  parallaxEffect() {
    if ("ontouchstart" in document.documentElement && this.settings.mobile === false) {
      this.settings.speed = 0;
    }

    if (this.settings.speed < 0 || this.settings.speed > 0.5) {
      this.settings.speed = 0.3;
    }

    this.element.style.height = this.settings.height;

    this.children = this.element.querySelector(this.settings.item);

    let scrolled = window.pageYOffset - this.element.offsetTop;

    Object.assign(this.children.style, {
      'top': '0px',
      'left': '50%',
      'min-height': `${this.element.offsetHeight * (1 + this.settings.speed * 2)}px`,
      'min-width': '100%',
      'width': 'auto',
      '-webkit-transform': `translate(-50%, ${this.settings.speed * scrolled}px)`,
      '-ms-transform': `translate(-50%, ${this.settings.speed * scrolled}px)`,
      'transform': `translate(-50%, ${this.settings.speed * scrolled}px)`
    });

    if (this.children.tagName.toLowerCase() !== 'img') {
      this.children.style.backgroundPosition = 'center center';
    }
  }

  settings(settings) {
    let defaults = {
      item: '.background',
      speed: 0.3,
      height: '400px',
      mobile: true
    }

    let custom = {};

    for (var setting in defaults) {
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

// JQUERY PLUGIN CALL IF JQUERY LOADED
if (window.jQuery) {
  let $ = window.jQuery;

  $.fn.Parlx = function (options) {
    for (var element = 0; element < this.length; element++) {
      new Parlx(this[element], options);
    }
  }
}
