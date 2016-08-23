export function getPortal() {
  var path = window.top.location.pathname;
  var pos = path.indexOf('/', 1);
  if (pos > 0) {
    path = path.substring(1, pos);
  }
  return path;
}
