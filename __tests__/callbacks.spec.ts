import Parlx from '../src';

describe('callbacks', () => {
  document.body.innerHTML = `
    <div class="parlx" />
  `;

  const element = document.querySelector('.parlx') as HTMLElement;

  it('should call onInit', () => {
    const onInit = jest.fn();

    Parlx.init({
      elements: element,
      callbacks: {
        onInit,
      },
    });

    expect(onInit).toHaveBeenCalled();

    element.parlx.destroy();
  });

  it('should call onScroll', () => {
    const scrollEvent = new Event('scroll');

    const onScroll = jest.fn();

    Parlx.init({
      elements: element,
      callbacks: {
        onScroll,
      },
    });

    window.dispatchEvent(scrollEvent);

    expect(onScroll).toHaveBeenCalled();

    element.parlx.destroy();
  });

  it('should call onResize', () => {
    const resizeEvent = new Event('resize');

    const onResize = jest.fn();

    Parlx.init({
      elements: element,
      callbacks: {
        onResize,
      },
    });

    window.dispatchEvent(resizeEvent);

    expect(onResize).toHaveBeenCalled();

    element.parlx.destroy();
  });

  it('should call onDestroy', () => {
    const onDestroy = jest.fn();

    Parlx.init({
      elements: element,
      callbacks: {
        onDestroy,
      },
    });

    element.parlx.destroy();

    expect(onDestroy).toHaveBeenCalled();
  });
});
