export default class Parlx {
  constructor(elements, settings = {}) {
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

  init(elements, settings) {
    for (const element of elements) {
      this.parlx = new Parlx(element, settings);
    }
  }

  addEventListeners() {
    window.addEventListener('scroll', () => this.onWindowScroll());
    window.addEventListener('resize', () => this.onWindowResize());
  }

  onWindowScroll() {
    this.parallaxEffect();

    if (typeof this.settings.onScroll === 'function') {
      this.settings.onScroll(this.element);
    }
  }

  onWindowResize() {
    this.parallaxEffect();

    if (typeof this.settings.onResize === 'function') {
      this.settings.onResize(this.element);
    }
  }

  transforms() {
    let moveX, moveY;

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

    this.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  parallaxEffect() {
    this.element.style.height = this.settings.height;

    const scrolled = this.element.getBoundingClientRect().y;

    if (Math.abs(this.settings.speed) > 1) this.settings.speed = 0.3;

    this.movement = (this.settings.speed * scrolled) / 2;

    if (navigator.userAgent.match(this.settings.exclude)) {
      this.settings.speed = 0;
    }

    this.transforms();

    if (this.settings.type === 'foreground') {
      Object.assign(this.element.style, {
        transform: this.transform
      });
    } else if (this.settings.type === 'background') {
      Object.assign(this.element.querySelector('.parlx-children').style, {
        transform: this.transform,
        'object-fit': 'cover',
        'min-width': `${this.element.offsetWidth *
          (1 + Math.abs(this.settings.speed) * 2)}px`,
        height: `${this.element.offsetHeight *
          (1 + Math.abs(this.settings.speed) * 2)}px`
      });
    }

    const values = {
      move: this.movement
    };

    this.element.dispatchEvent(
      new CustomEvent('parlxMove', {
        detail: values
      })
    );
  }

  settings(settings) {
    const defaults = {
      direction: 'vertical', // parallax element move direction
      type: 'background', // type of parallax: foreground (div move), background (inner image move)
      speed: 0.3, // parallax speed (min: -1, max: 1)
      height: '400px', // parallax element height
      exclude: null, // enable/disable parallax effect on selected user agents

      onScroll: null, // callback on window scroll
      onResize: null // callback on window resize
    };

    const custom = {};

    for (const setting in defaults) {
      if (setting in settings) {
        custom[setting] = settings[setting];
      } else if (this.element.getAttribute(`data-${setting}`)) {
        const attribute = this.element.getAttribute(`data-${setting}`);
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
}

if (typeof document !== 'undefined') {
  const elements = document.querySelectorAll('[data-parlx]');

  elements.length && new Parlx(elements);
}

if (window.jQuery) {
  const $ = window.jQuery;

  $.fn.parlx = function(options) {
    new Parlx(this, options);
  };
}
