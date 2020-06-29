import type { Axis } from './Axis';
import type { Direction } from './Direction';
import type { Type } from './Type';

export type Settings = {
  readonly axis?: Axis;
  readonly base?: HTMLElement | Window;
  readonly direction?: Direction;
  readonly exclude?: RegExp | null;
  readonly height?: string | number;
  readonly speed?: number;
  readonly type?: Type;
};
