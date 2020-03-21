import { defaultSettings } from './defaults';

import { Settings, Callbacks, Options } from './types';

import { excludePlatform, bounceDetector } from './helpers';

declare global {
  interface Window {
    jQuery: any;
    Parlx: any;
  }

  interface HTMLElement {
    parlx: any;
  }
}

export default class Parlx {
  private element: HTMLElement;
  private settings: Settings;
  private callbacks: Callbacks;

  private speed: number;
  private movement: number;
  private transform: string;
  private scrolled: number;

  constructor(
    element: HTMLElement,
    settings = {} as Settings,
    callbacks = {} as Callbacks
  ) {
    this.element = element;
    this.settings = this.extendSettings(settings);
    this.callbacks = callbacks;

    if (typeof this.callbacks.onInit === 'function') {
      this.callbacks.onInit(this.element);
    }

    this.speed = this.settings.speed!;
    this.movement = 0;
    this.transform = '';
    this.scrolled = 0;

    this.parallaxEffect();
    this.addEventListeners();
  }

  private addEventListeners() {
    this.settings.base!.addEventListener('scroll', this.onWindowScroll);

    window.addEventListener('resize', this.onWindowResize);
  }

  private removeEventListeners() {
    this.settings.base!.removeEventListener('scroll', this.onWindowScroll);

    window.removeEventListener('resize', this.onWindowResize);
  }

  public destroy() {
    if (typeof this.callbacks.onDestroy === 'function') {
      this.callbacks.onDestroy(this.element);
    }

    this.removeEventListeners();
    this.element.parlx = null;
    delete this.element.parlx;

    this.element = null as any;
  }

  private onWindowScroll = () => {
    if (this.element) {
      this.parallaxEffect();

      if (typeof this.callbacks.onScroll === 'function') {
        this.callbacks.onScroll(this.element);
      }
    }
  };

  private onWindowResize = () => {
    if (this.element) {
      this.parallaxEffect();

      if (typeof this.callbacks.onResize === 'function') {
        this.callbacks.onResize(this.element);
      }
    }
  };

  private transforms() {
    let moveX = 0;
    let moveY = 0;

    if (this.settings.direction === 'horizontal') {
      moveX = this.movement;
      moveY = 0;
    } else if (this.settings.direction === 'vertical') {
      moveX = 0;
      moveY = this.movement;
    } else if (this.settings.direction === 'diagonal') {
      moveX = this.movement;
      moveY = this.movement;
    }

    this.transform = `translate(${moveX}px, ${moveY}px)`;
  }

  private updateScrolled() {
    const axis = this.settings.axis!.toLowerCase() as 'x' | 'y' | 'both';

    if (bounceDetector(this.settings.base!, axis)) {
      this.scrolled = this.element.getBoundingClientRect()[
        axis === 'y' ? 'top' : 'left'
      ];
    }
  }

  private updatePosition() {
    if (this.settings.type === 'foreground') {
      Object.assign(this.element.style, {
        transform: this.transform,
      });
    } else if (this.settings.type === 'background') {
      let child: HTMLElement | null = this.element.querySelector(
        '.parlx-children'
      );

      if (!child) {
        child = document.createElement('div');

        child.classList.add('parlx-children');

        this.element.appendChild(child);
      }

      const absoluteScaleX = Math.abs(this.element.offsetHeight * this.speed);
      const absoluteScaleY = Math.abs(this.element.offsetWidth * this.speed);

      const checkWindowRatio = () => window.outerWidth > window.outerHeight;

      Object.assign(child.style, {
        minHeight: `${
          this.element.offsetHeight +
          (checkWindowRatio() ? absoluteScaleX : absoluteScaleY) * 2
        }px`,
        minWidth: `${
          this.element.offsetWidth +
          (checkWindowRatio() ? absoluteScaleY : absoluteScaleX) * 2
        }px`,
        transform: this.transform,
        objectFit: 'cover',
      });
    }
  }

  private parallaxEffect() {
    this.element.style.height = this.settings.height!.toString();

    this.updateScrolled();

    if (Math.abs(this.speed) > 1) {
      this.speed = 0.3;
    }

    this.movement = (this.speed * this.scrolled) / 2;

    if (excludePlatform(this.settings.exclude!)) {
      this.speed = 0;
    }

    this.transforms();
    this.updatePosition();

    const values = {
      move: this.movement,
    };

    this.element.dispatchEvent(
      new CustomEvent('parlxMove', {
        detail: values,
      })
    );
  }

  private extendSettings(settings: Settings): Settings {
    const newSettings = {} as any;

    let property: keyof Settings;

    for (property in defaultSettings) {
      if (property in settings) {
        newSettings[property] = settings[property];
      } else if (this.element.getAttribute(`data-parlx-${property}`)) {
        const attribute = this.element.getAttribute(
          `data-parlx-${property}`
        ) as string;

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

  public static init(data = {} as Options) {
    let { elements, settings, callbacks } = data;

    if (elements instanceof Node) {
      elements = [elements];
    }

    if (elements instanceof NodeList) {
      elements = [...elements] as HTMLElement[];
    }

    if (!(elements instanceof Array)) {
      return;
    }

    for (const element of elements) {
      if (!('parlx' in element)) {
        return (element!.parlx = new Parlx(element, settings, callbacks));
      }
    }
  }
}

if (typeof document !== 'undefined') {
  window.Parlx = Parlx;

  const elements = document.querySelectorAll('[data-parlx]');

  if (elements.length) {
    Parlx.init({ elements } as any);
  }
}

if (window.jQuery) {
  const $ = window.jQuery;

  $.fn.parlx = function (data: Options = {} as Options) {
    return Parlx.init({
      elements: this,
      settings: data.settings || ({} as Settings),
      callbacks: data.callbacks || ({} as Callbacks),
    });
  };
}
