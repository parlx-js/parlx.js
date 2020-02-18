import Parlx from '../src';

describe('callbacks', () => {
  document.body.innerHTML = `
    <div class="parlx" />
  `;

  const element = document.querySelector('.parlx') as HTMLElement;

  test('onInit callback', () => {
    let test = false;

    Parlx.init({
      elements: element,
      callbacks: {
        onInit: () => {
          test = true;
        }
      }
    });

    expect(test).toBe(true);

    element.parlx.destroy();
  });

  test('onScroll callback', () => {
    const scrollEvent = new Event('scroll');

    let test = false;

    Parlx.init({
      elements: element,
      callbacks: {
        onScroll: () => {
          test = true;
        }
      }
    });

    window.dispatchEvent(scrollEvent);

    expect(test).toEqual(true);

    element.parlx.destroy();
  });

  test('onResize callback', () => {
    const resizeEvent = new Event('resize');

    let test = false;

    Parlx.init({
      elements: element,
      callbacks: {
        onResize: () => {
          test = true;
        }
      }
    });

    window.dispatchEvent(resizeEvent);

    expect(test).toEqual(true);

    element.parlx.destroy();
  });

  test('onDestroy', () => {
    let test = false;

    Parlx.init({
      elements: element,
      callbacks: {
        onDestroy: () => {
          test = true;
        }
      }
    });

    element.parlx.destroy();

    expect(test).toBe(true);
  });
});
