import Parlx from '../src';

// import { Direction } from '../src/types/Direction';
// import { Axis } from '../src/types/Axis';

jest.mock('platform', () => ({
  name: 'Safari',
  platform: 'iPad',
}));

describe('core functions', () => {
  document.body.innerHTML = `
    <div class="parlx" />
  `;

  const element = document.querySelector('.parlx') as HTMLElement;

  it.each(['vertical', 'horizontal', 'diagonal'])(
    'should set direction to $direction',
    (direction: any) => {
      Parlx.init({
        elements: element,
        settings: {
          direction,
        },
      });

      element.parlx.destroy();
    }
  );

  it('should detect speed out of range', () => {
    Parlx.init({
      elements: element,
      settings: {
        speed: 3,
      },
    });

    expect(element.parlx.speed).toEqual(0.3);

    element.parlx.destroy();
  });

  it.each([/Mozilla/, /iPad/])('should exclude $exclude', (exclude) => {
    Parlx.init({
      elements: element,
      settings: {
        exclude,
      },
    });

    expect(element.parlx.speed).toEqual(0);

    element.parlx.destroy();
  });

  it.each(['background', 'foreground'])(
    'should set type to $type',
    (type: any) => {
      Parlx.init({
        elements: element,
        settings: {
          type,
        },
      });

      element.parlx.destroy();
    }
  );

  it.each([2, 1, 0.6, 0, -0.6, -1, -2])(
    'should set speed to $speed',
    (speed) => {
      Parlx.init({
        elements: element,
        settings: {
          speed,
        },
      });
    }
  );

  it.each(['X', 'Y', 'both'])('should set axis to $axis', (axis: any) => {
    Parlx.init({
      elements: element,
      settings: {
        axis,
      },
    });
  });

  it.each(['300px', '80vh', '220em'])(
    'should set height to $height',
    (height) => {
      Parlx.init({
        elements: element,
        settings: {
          height,
        },
      });

      element.parlx.destroy();
    }
  );

  it('should set base to window', () => {
    Parlx.init({
      elements: element,
      settings: {
        base: window,
        axis: 'Y',
      },
    });
  });
});
