import $ from 'jquery';
import iFrameResizer from 'iFrameResizer';

export function init() {
  $('#profile-frame').iFrameResize({
    log: false
  });
}
