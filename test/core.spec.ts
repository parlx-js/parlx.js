import $ from 'jquery';

import Parlx from '../src';

declare global {
  interface Window {
    $: any;
  }

  interface JQuery {
    parlx: Function;
  }
}

window.$ = window.jQuery = $;

jest.mock('platform', () => ({
  name: 'Safari',
  platform: 'iPad',
}));

describe('core functions', () => {
  document.body.innerHTML = `
    <div class="parlx" />
  `;

  const element = document.querySelector('.parlx') as HTMLElement;

  it('should set direction to `vertical`', () => {
    Parlx.init({
      elements: element,
      settings: {
        direction: 'vertical',
      },
    });

    element.parlx.destroy();
  });

  it('should set direction to `horizontal`', () => {
    Parlx.init({
      elements: element,
      settings: {
        direction: 'horizontal',
      },
    });

    element.parlx.destroy();
  });

  it('should set direction to `diagonal`', () => {
    Parlx.init({
      elements: element,
      settings: {
        direction: 'diagonal',
      },
    });

    element.parlx.destroy();
  });

  it('should detect `speed` out of range', () => {
    Parlx.init({
      elements: element,
      settings: {
        speed: 3,
      },
    });

    expect(element.parlx.speed).toEqual(0.3);

    element.parlx.destroy();
  });

  it('should exclude Mozilla', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      get: function () {
        return 'Mozilla';
      },
    });

    Parlx.init({
      elements: element,
      settings: {
        exclude: /Mozilla/,
      },
    });

    expect(element.parlx.speed).toEqual(0);

    element.parlx.destroy();
  });

  it('should exclude iPad', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      get: function () {
        return 'iPad';
      },
    });

    Parlx.init({
      elements: element,
      settings: {
        exclude: /iPad/,
      },
    });

    expect(element.parlx.speed).toEqual(0);

    element.parlx.destroy();
  });

  it('should set type to `background`', () => {
    Parlx.init({
      elements: element,
      settings: {
        type: 'background',
      },
    });

    element.parlx.destroy();
  });

  it('should set type to `foreground`', () => {
    Parlx.init({
      elements: element,
      settings: {
        type: 'foreground',
      },
    });

    element.parlx.destroy();
  });

  it('should set custom `speed`', () => {
    const speeds = [2, 1, 0.6, 0, -0.6, -1, -2];

    speeds.map((speed) => {
      Parlx.init({
        elements: element,
        settings: {
          speed,
        },
      });
    });
  });

  it('should set custom `axis`', () => {
    Parlx.init({
      elements: element,
      settings: {
        axis: 'X',
      },
    });
  });

  it('should set custom `height`', () => {
    const heights = ['300px', '80vh', '220em'];

    heights.map((height) => {
      Parlx.init({
        elements: element,
        settings: {
          height,
        },
      });

      element.parlx.destroy();
    });
  });

  it('should set base to `window`', () => {
    Parlx.init({
      elements: element,
      settings: {
        base: window,
        axis: 'Y',
      },
    });
  });
});

describe('single node', () => {
  document.body.innerHTML = `
    <div class="parlx" data-parlx-height="200px" />
  `;

  const element = document.querySelector('.parlx') as any;

  it('should init library for single node', () => {
    Parlx.init({
      elements: element,
    });

    element.parlx.destroy();
  });
});

describe('X axis', () => {
  document.body.innerHTML = `
    <div class="parlx" />
  `;

  const element = document.querySelector('.parlx') as any;

  test('should init library with `axis` set to `X', () => {
    Parlx.init({
      elements: element,
      settings: {
        axis: 'X',
      },
    });

    element.parlx.destroy();
  });
});

describe('auto init', () => {
  document.body.innerHTML = `
    <div data-parlx />
  `;

  const element = document.querySelector('[data-parlx]') as HTMLElement;

  let test = false;

  it('should init', () => {
    // Parlx.init({
    //   callbacks: {
    //     onInit: () => (testes = true)
    //   }
    // });

    expect(test).toEqual(true);
  });
});

describe('jQuery', () => {
  document.body.innerHTML = `
  <div class="parlx" />
  <div class="parlx" />
  `;

  it('init', () => {
    const tilt = $('.parlx').parlx({
      settings: {
        speed: 0.2,
      },
    });

    expect(tilt.settings.speed).toBe(0.2);
  });
});
