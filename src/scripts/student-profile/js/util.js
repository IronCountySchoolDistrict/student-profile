import URI from 'urijs';
import Cookies from 'js-cookie';

export function getPortal() {
  let path = window.top.location.pathname;
  const pos = path.indexOf('/', 1);
  if (pos > 0) {
    path = path.substring(1, pos);
  }
  if (path !== 'teachers' && path !== 'admin') {
    const lastHref = Cookies.get('lastHref');
    const lastHrefUri = new URI(lastHref);
    return lastHrefUri.segment()[0];
  } else {
    return path;
  }
}
