import Parlx from '../src/parlx';

describe('core functions', () => {
  document.body.innerHTML = `
    <div class="parlx" />
    <div class="parlx" />
  `;

  const elements = document.querySelectorAll('.parlx');

  test('direction vertical', () => {
    Parlx.init({
      elements,
      settings: {
        direction: 'vertical'
      }
    });

    Object.values(elements).map(element => {
      element.parlx.destroy();
    });
  });

  test('direction horizontal', () => {
    Parlx.init({
      elements,
      settings: {
        direction: 'horizontal'
      }
    });

    Object.values(elements).map(element => {
      element.parlx.destroy();
    });
  });

  test('direction diagonal', () => {
    Parlx.init({
      elements,
      settings: {
        direction: 'diagonal'
      }
    });

    Object.values(elements).map(element => {
      element.parlx.destroy();
    });
  });

  test('speed out of range', () => {
    Parlx.init({
      elements,
      settings: {
        speed: 3
      }
    });

    expect(elements[0].parlx.settings.speed).toEqual(0.3);

    Object.values(elements).map(element => {
      element.parlx.destroy();
    });
  });

  test('exclude Mozilla', () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      get: function() {
        return 'Mozilla';
      }
    });

    Parlx.init({
      elements,
      settings: {
        exclude: /Mozilla/
      }
    });

    expect(elements[0].parlx.settings.speed).toEqual(0);

    Object.values(elements).map(element => {
      element.parlx.destroy();
    });
  });

  test('background type', () => {
    Parlx.init({
      elements,
      settings: {
        type: 'background'
      }
    });

    Object.values(elements).map(element => {
      element.parlx.destroy();
    });
  });

  test('foreground type', () => {
    Parlx.init({
      elements,
      settings: {
        type: 'foreground'
      }
    });

    Object.values(elements).map(element => {
      element.parlx.destroy();
    });
  });

  test('custom speed', () => {
    const speeds = [2, 1, 0.6, 0, -0.6, -1, -2];

    speeds.map(speed => {
      Parlx.init({
        elements,
        settings: {
          speed
        }
      });
    });
  });

  test('custom height', () => {
    const heights = ['300px', '80vh', '220em'];

    heights.map(height => {
      Parlx.init({
        elements,
        settings: {
          height
        }
      });

      Object.values(elements).map(element => {
        element.parlx.destroy();
      });
    });
  });
});

describe('single node', () => {
  document.body.innerHTML = `
    <div class="parlx" data-height="200px" />
  `;

  const element = document.querySelector('.parlx');

  test('init', () => {
    Parlx.init({
      elements: element
    });

    element.parlx.destroy();
  });
});
