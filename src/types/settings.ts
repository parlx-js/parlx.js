export type Settings = {
  readonly axis?: 'X' | 'Y';
  readonly base?: HTMLElement | Window;
  readonly direction?: 'vertical' | 'horizontal' | 'diagonal';
  readonly exclude?: RegExp | null;
  readonly height?: string | number;
  readonly speed?: number;
  readonly type?: 'background' | 'foreground';
};
