import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export const UTILS_disabled_body_scroll = () => disableBodyScroll(document.querySelector('body')!);

export const UTILS_enabled_body_scroll = () => enableBodyScroll(document.querySelector('body')!)