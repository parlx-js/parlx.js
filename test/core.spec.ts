import $ from 'jquery';
import Parlx from '../src';

declare global {
  interface Window {
    $: any;
  }

  // interface JQuery {
  //   parlx: Function
  // }
}

window.$ = window.jQuery = $;

jest.mock('platform', () => ({
  name: 'Safari',
  platform: 'iPad'
}));

describe('core functions', () => {
  document.body.innerHTML = `
    <div class="parlx" />
  `;

  const element = document.querySelector('.parlx') as HTMLElement;

  test('direction vertical', () => {
    Parlx.init({
      elements: element,
      settings: {
        direction: 'vertical'
      }
    });

    element.parlx.destroy();
  });

  test('direction horizontal', () => {
    Parlx.init({
      elements: element,
      settings: {
        direction: 'horizontal'
      }
    });

    element.parlx.destroy();
  });

  test('direction diagonal', () => {
    Parlx.init({
      elements: element,
      settings: {
        direction: 'diagonal'
      }
    });

    element.parlx.destroy();
  });

  test('speed out of range', () => {
    Parlx.init({
      elements: element,
      settings: {
        speed: 3
      }
    });

    expect(element.parlx.speed).toEqual(0.3);

    element.parlx.destroy();
  });

  test('exclude Mozilla', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      get: function() {
        return 'Mozilla';
      }
    });

    Parlx.init({
      elements: element,
      settings: {
        exclude: /Mozilla/
      }
    });

    // expect(element.parlx.speed).toEqual(0);

    element.parlx.destroy();
  });

  // test('exclude iPad', () => {
  //   Object.defineProperty(window.navigator, 'userAgent', {
  //     get: function() {
  //       return 'iPad';
  //     }
  //   });

  //   Parlx.init({
  //     elements: element,
  //     settings: {
  //       exclude: /iPad/
  //     }
  //   });

  //   // expect(element.parlx.speed).toEqual(0);

  //   element.parlx.destroy();
  // });

  test('background type', () => {
    Parlx.init({
      elements: element,
      settings: {
        type: 'background'
      }
    });

    element.parlx.destroy();
  });

  test('foreground type', () => {
    Parlx.init({
      elements: element,
      settings: {
        type: 'foreground'
      }
    });

    element.parlx.destroy();
  });

  test('custom speed', () => {
    const speeds = [2, 1, 0.6, 0, -0.6, -1, -2];

    speeds.map(speed => {
      Parlx.init({
        elements: element,
        settings: {
          speed
        }
      });
    });
  });

  test('custom axis', () => {
    Parlx.init({
      elements: element,
      settings: {
        axis: 'X'
      }
    });
  });

  test('custom height', () => {
    const heights = ['300px', '80vh', '220em'];

    heights.map(height => {
      Parlx.init({
        elements: element,
        settings: {
          height
        }
      });

      element.parlx.destroy();
    });
  });

  // test('window', () => {
  //   Parlx.init({
  //     elements:element,
  //     settings: {
  //       base: window,
  //       axis: 'Y'
  //     }
  //   });
  // });
});

describe('single node', () => {
  document.body.innerHTML = `
    <div class="parlx" data-parlx-height="200px" />
  `;

  const element = document.querySelector('.parlx') as any;

  test('init', () => {
    Parlx.init({
      elements: element
    });

    element.parlx.destroy();
  });
});

describe('X axis', () => {
  document.body.innerHTML = `
    <div class="parlx" />
  `;

  const element = document.querySelector('.parlx') as any;

  test('init', () => {
    Parlx.init({
      elements: element,
      settings: {
        axis: 'X'
      }
    });

    element.parlx.destroy();
  });
});

// describe('auto init', () => {
//   document.body.innerHTML = `
//     <div data-parlx />
//   `;

//   // const element = document.querySelector('[data-parlx]') as HTMLElement;

// let testes = false;

//   test('init', () => {
//     Parlx.init({
//       callbacks: {
//         onInit: () => testes = true
//       }
//     });

//     expect(testes).toEqual(true);
//   });
// });

// describe('jQuery', () => {
//   document.body.innerHTML = `
//   <div class="parlx" />
//   <div class="parlx" />
//   `;

//   test('init', () => {
//     const tilt = $('.parlx').parlx({
//       settings: {
//         speed: 0.2
//       }
//     });

//     expect(tilt.settings.speed).toBe(0.2);
//   });
// });
