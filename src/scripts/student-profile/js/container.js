import URI from 'urijs';
import $ from 'jquery';
import Cookie from 'jquery.cookie';
import Cookies from 'js-cookie';
import { iframeResizer } from 'iframe-resizer';

import containerSass from '../sass/container.scss';

function getPortal() {
  let path = window.location.pathname;
  const pos = path.indexOf('/', 1);
  if (pos > 0) {
    path = path.substring(1, pos);
  }
  
  if (path !== 'teachers' && path !== 'admin' && path !== 'guardian') {
    const lastHref = Cookies.get('lastHref');
    const lastHrefUri = new URI(lastHref);
    return lastHrefUri.segment()[0];
  } else {
    return path;
  }
}


$(() => {
  const profileIFrame = $('#profile-iframe');
  const profileIFrameUrl = profileIFrame.data('src') + `&host=${window.origin}&portal=${getPortal()}`;
  profileIFrame.attr('src', profileIFrameUrl + '&should_print=false');

  const btnPrint = document.getElementById('btnPrint');
  if (btnPrint) {
    btnPrint.href = profileIFrameUrl + '&should_print=true';
    btnPrint.target = '_blank';
  } else {
    const btnPrint = $('.icon-btn-print').find('a').get(0);
    btnPrint.href = profileIFrameUrl + '&should_print=true';
    btnPrint.target = '_blank';
  }

  iframeResizer({ log: false }, '#profile-iframe');
});
