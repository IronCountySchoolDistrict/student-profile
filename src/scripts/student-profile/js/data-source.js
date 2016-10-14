import { getPortal } from './util';
import { decode } from 'he';
import URI from 'urijs';


function htmlDecodeToJson(resp) {
  return resp.text()
    .then(resp => decode(resp))
    .then(resp => JSON.parse(resp));
}

/**
 * @param {string} portal PowerSchool portal that user is currently logged in
 * @param {Promise}
 */
export default function loadOverview() {
  const portal = getPortal();
  let dataSourcePath;
  switch(portal) {
    case 'admin':
      dataSourcePath = `/${portal}/students/student-profile/json`;
      break;
    case 'teachers':
      dataSourcePath = `/${portal}/studentpages/student-profile/json`;
      break;
  }
  const uri = URI(window.location.href);
  const queryDataMap = uri.search(true);
  const studentsDcid = queryDataMap.students_frn.slice(3);
  const queryStr = URI.buildQuery({
    students_dcid: studentsDcid
  });

  return window.fetch(`${dataSourcePath}/overview.pshtml.json?${queryStr}`, {
      credentials: 'include'
    })
    .then(htmlDecodeToJson);
}
