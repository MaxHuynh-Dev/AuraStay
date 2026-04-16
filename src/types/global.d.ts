import type { LenisRef } from 'lenis/react';

interface Navigation extends EventTarget {
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
}

declare global {
  interface Window {
    opera?: unknown;
    grecaptcha?: unknown;
    lenis?: LenisRef;
    navigation?: Navigation;
  }
}
