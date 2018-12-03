export default class Parlx {
  constructor(element, settings = {}) {
    this.element = element;
    this.settings = this.extendSettings(settings);

    if (typeof this.settings.onInit === 'function') {
      this.settings.onInit(this.element);
    }

    this.parallaxEffect();
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener('scroll', this.onWindowScroll);
    window.addEventListener('resize', this.onWindowResize);
  }

  removeEventListeners() {
    window.removeEventListener('scroll', this.onWindowScroll);
    window.removeEventListener('resize', this.onWindowResize);
  }

  destroy() {
    if (typeof this.settings.onDestroy === 'function') {
      this.settings.onDestroy(this.element);
    }

    this.removeEventListeners();
    this.element.parlx = null;
    delete this.element.parlx;

    this.element = null;
  }

  onWindowScroll = () => {
    if (this.element) {
      this.parallaxEffect();

      if (typeof this.settings.onScroll === 'function') {
        this.settings.onScroll(this.element);
      }
    }
  };

  onWindowResize = () => {
    if (this.element) {
      this.parallaxEffect();

      if (typeof this.settings.onResize === 'function') {
        this.settings.onResize(this.element);
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

  extendSettings(settings) {
    const defaultSettings = {
      direction: 'vertical', // parallax element move direction
      type: 'background', // type of parallax: foreground (div move), background (inner image move)
      speed: 0.3, // parallax speed (min: -1, max: 1)
      height: '400px', // parallax element height
      exclude: null, // enable/disable parallax effect on selected user agents

      onInit: null, // callback on plugin init
      onScroll: null, // callback on window scroll
      onResize: null, // callback on window resize
      onDestroy: null // callback on plugin destroy
    };

    const newSettings = {};

    Object.keys(defaultSettings).forEach(property => {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.getAttribute(`data-${property}`)) {
        const attribute = this.element.getAttribute(`data-${property}`);
        try {
          newSettings[property] = JSON.parse(attribute);
        } catch (err) {
          newSettings[property] = attribute;
        }
      } else {
        newSettings[property] = defaultSettings[property];
      }
    });

    return newSettings;
  }

  static init(elements, settings) {
    if (elements instanceof Node) elements = [elements];
    if (elements instanceof NodeList) elements = [].slice.call(elements);
    if (!(elements instanceof Array)) return;

    elements.forEach(element => {
      if (!('parlx' in element)) element.parlx = new Parlx(element, settings);
    });
  }
}

let scope;

if (typeof window !== 'undefined') scope = window;
else if (typeof global !== 'undefined') scope = global;

if (typeof document !== 'undefined') {
  scope.Parlx = Parlx;

  Parlx.init(document.querySelectorAll('[data-parlx]'));
}

if (scope && scope.jQuery) {
  const $ = scope.jQuery;

  $.fn.parlx = (elements, options) => Parlx.init(elements, options);
}
