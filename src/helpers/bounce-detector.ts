export const bounceDetector = (
  element: HTMLElement | Window,
  scroll: 'x' | 'y'
) => {
  let bounce = false;

  if (element instanceof Window) {
    if (scroll === 'y') {
      bounce =
        element.pageYOffset >= 0 &&
        element.pageYOffset + element.innerHeight <=
          document.documentElement.scrollHeight;
    } else if (scroll === 'x') {
      bounce =
        element.pageXOffset >= 0 &&
        element.pageXOffset + element.innerWidth <=
          document.documentElement.scrollWidth;
    }
  } else {
    if (scroll === 'y') {
      bounce =
        element.scrollTop >= 0 &&
        element.scrollTop + element.offsetHeight >=
          document.documentElement.scrollHeight;
    } else if (scroll === 'x') {
      bounce =
        element.scrollLeft >= 0 &&
        element.scrollLeft + element.offsetWidth >=
          document.documentElement.scrollWidth;
    }
  }

  return bounce;
};
