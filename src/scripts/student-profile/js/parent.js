import URI from 'urijs';
import Cookies from 'js-cookie';
import Postmate from 'postmate';

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


console.log('creating handshake (parent)');
const handshake = new Postmate({
  container: document.getElementById('profile-frame'),
  url: 'http://localhost:8081/scripts/student-profile/html/app.html?frn=00164227&students_frn=00164227&user=19193&yearid=28&should_print=false',
  model: {
    portal: getPortal(),
    host: window.origin
  }
});

