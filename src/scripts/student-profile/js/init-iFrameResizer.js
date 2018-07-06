import $ from 'jquery';
import { iframeResizer } from 'iframe-resizer';

$(() => {
  iframeResizer({ log: false }, '#profile-frame');
})
