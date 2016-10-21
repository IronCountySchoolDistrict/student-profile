import { getPortal } from './util';
import { decode } from 'he';
import URI from 'urijs';


function htmlDecodeToJson(resp) {
  return resp.text()
    .then(resp => decode(resp))
    .then(resp => JSON.parse(resp));
}

function getDataSourcePath() {
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
  return dataSourcePath;
}

/**
 * @param {string} portal PowerSchool portal that user is currently logged in
 * @param {Promise}
 */
export function loadOverview(studentsDcid) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({
    students_dcid: studentsDcid
  });

  return window.fetch(`${dataSourcePath}/overview.pshtml.json?${queryStr}`, {
      credentials: 'include'
    })
    .then(htmlDecodeToJson);
}

export function loadSchedule(studentsDcid, yearId) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({
    students_dcid: studentsDcid,
    year_id: 25
  });

  return window.fetch(`${dataSourcePath}/schedule.pshtml.json?${queryStr}`, {
      credentials: 'include'
    })
    .then(htmlDecodeToJson);
}
