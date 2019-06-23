import platform from 'platform';

export default class Parlx {
  constructor(element, settings = {}, callbacks = {}) {
    this.element = element;
    this.callbacks = callbacks;

    this.settings = this.extendSettings(settings);

    if (typeof this.callbacks.onInit === 'function') {
      this.callbacks.onInit(this.element);
    }

    this.parallaxEffect();
    this.addEventListeners();
  }

  addEventListeners() {
    this.settings.base.addEventListener('scroll', this.onWindowScroll);
    window.addEventListener('resize', this.onWindowResize);
  }

  removeEventListeners() {
    this.settings.base.removeEventListener('scroll', this.onWindowScroll);
    window.removeEventListener('resize', this.onWindowResize);
  }

  destroy() {
    if (typeof this.callbacks.onDestroy === 'function') {
      this.callbacks.onDestroy(this.element);
    }

    this.removeEventListeners();
    this.element.parlx = null;
    delete this.element.parlx;

    this.element = null;
  }

  onWindowScroll = () => {
    if (this.element) {
      this.parallaxEffect();

      if (typeof this.callbacks.onScroll === 'function') {
        this.callbacks.onScroll(this.element);
      }
    }
  };

  onWindowResize = () => {
    if (this.element) {
      this.parallaxEffect();

      if (typeof this.callbacks.onResize === 'function') {
        this.callbacks.onResize(this.element);
      }
    }
  };

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

    if (this.settings.axis.toLowerCase() === 'y') {
      if (
        this.settings.base === window
          ? this.settings.base.pageYOffset >= 0 &&
            this.settings.base.pageYOffset + this.settings.base.innerHeight <=
              document.documentElement.scrollHeight
          : this.settings.base.scrollTop >= 0 &&
            this.settings.base.scrollTop + this.settings.base.offsetHeight >=
              document.documentElement.scrollHeight
      ) {
        this.scrolled = this.element.getBoundingClientRect().top;
      }
    } else if (this.settings.axis.toLowerCase() === 'x') {
      if (
        this.settings.base === window
          ? this.settings.base.pageXOffset >= 0 &&
            this.settings.base.pageXOffset + this.settings.base.innerWidth <=
              document.documentElement.scrollWidth
          : this.settings.base.scrollLeft >= 0 &&
            this.settings.base.scrollLeft + this.settings.base.offsetWidth >=
              document.documentElement.scrollWidth
      ) {
        this.scrolled = this.element.getBoundingClientRect().left;
      }
    }

    if (Math.abs(this.settings.speed) > 1) this.settings.speed = 0.3;

    this.movement = (this.settings.speed * this.scrolled) / 2;

    if (
      platform.name.match(this.settings.exclude) ||
      platform.product?.match(this.settings.exclude)
    ) {
      this.settings.speed = 0;
    }

    this.transforms();

    if (this.settings.type === 'foreground') {
      Object.assign(this.element.style, {
        transform: this.transform
      });
    } else if (this.settings.type === 'background') {
      if (!this.element.querySelector('.parlx-children')) {
        const child = document.createElement('div');
        child.classList.add('parlx-children');

        this.element.appendChild(child);
      }

      Object.assign(this.element.querySelector('.parlx-children').style, {
        transform: this.transform,
        objectFit: 'cover',
        minWidth: `${this.element.offsetWidth *
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

  extendSettings(settings) {
    const defaultSettings = {
      axis: 'Y', // get scroll values from X or Y axis
      base: window, // get scroll position from this element
      direction: 'vertical', // parallax element move direction
      exclude: null, // enable/disable parallax effect on selected user agents
      height: '400px', // parallax element height
      speed: 0.3, // parallax speed (min: -1, max: 1)
      type: 'background' // type of parallax: foreground (div move), background (inner image move)
    };

    const newSettings = {};

    for (const property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.getAttribute(`data-${property}`)) {
        const attribute = this.element.getAttribute(`data-${property}`);

        try {
          newSettings[property] = JSON.parse(attribute);
        } catch {
          newSettings[property] = attribute;
        }
      } else {
        newSettings[property] = defaultSettings[property];
      }
    }

    return newSettings;
  }

  static init(data = {}) {
    let { elements, settings, callbacks } = data;

    if (elements instanceof Node) elements = [elements];
    if (elements instanceof NodeList) elements = [].slice.call(elements);

    for (const element of elements) {
      if (!('parlx' in element)) {
        return (element.parlx = new Parlx(element, settings, callbacks));
      }
    }
  }
}

if (typeof document !== 'undefined') {
  window.Parlx = Parlx;

  const elements = document.querySelectorAll('[data-parlx]');

  if (elements.length) Parlx.init({ elements });
}

if (window.jQuery) {
  const $ = window.jQuery;

  $.fn.parlx = function(data = {}) {
    return Parlx.init({
      elements: this,
      settings: data.settings || {},
      callbacks: data.callbacks || {}
    });
  };
}
