export type Callbacks = {
  readonly onDestroy?: (el: HTMLElement) => void;
  readonly onInit?: (el: HTMLElement) => void;
  readonly onResize?: (el: HTMLElement) => void;
  readonly onScroll?: (el: HTMLElement) => void;
};
