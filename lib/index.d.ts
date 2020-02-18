import { Settings, Callbacks, Options } from './types';
declare global {
    interface Window {
        jQuery: any;
        Parlx: any;
    }
    interface HTMLElement {
        parlx: any;
    }
}
export default class Parlx {
    private element;
    private settings;
    private callbacks;
    private speed;
    private movement;
    private transform;
    private scrolled;
    constructor(element: HTMLElement, settings?: Settings, callbacks?: Callbacks);
    private addEventListeners;
    private removeEventListeners;
    destroy(): void;
    private onWindowScroll;
    private onWindowResize;
    private transforms;
    private updateScrolled;
    private updatePosition;
    private parallaxEffect;
    private extendSettings;
    static init(data?: Options): Parlx | undefined;
}
