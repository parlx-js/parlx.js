import Parlx from '../src/parlx';

describe('callbacks', () => {
  document.body.innerHTML = `
    <div class="parlx" />
  `;

  const element = document.querySelector('.parlx');

  test('onInit', () => {
    let test = false;

    Parlx.init({
      elements: element,
      callbacks: {
        onInit: () => (test = true)
      }
    });

    element.parlx.destroy();

    expect(test).toBe(true);
  });

  test('onScroll', () => {
    const scrollEvent = new Event('scroll');

    let test = false;

    Parlx.init({
      elements: element,
      callbacks: {
        onScroll: () => (test = true)
      }
    });

    window.dispatchEvent(scrollEvent);

    element.parlx.destroy();

    expect(test).toEqual(true);
  });

  test('onResize', () => {
    const resizeEvent = new Event('resize');

    let test = false;

    Parlx.init({
      elements: element,
      callbacks: {
        onResize: () => (test = true)
      }
    });

    window.dispatchEvent(resizeEvent);

    element.parlx.destroy();

    expect(test).toEqual(true);
  });

  test('onDestroy', () => {
    let test = false;

    Parlx.init({
      elements: element,
      callbacks: {
        onDestroy: () => (test = true)
      }
    });

    element.parlx.destroy();

    expect(test).toBe(true);
  });
});
