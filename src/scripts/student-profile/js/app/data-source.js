import { decode } from 'he';
import URI from 'urijs';
import fetch from 'isomorphic-fetch';
import Postmate from 'postmate';

function htmlDecodeToJson(resp) {
  return resp.text().then(resp => decode(resp)).then(resp => JSON.parse(resp));
}

function getDataSourcePath(host, portal) {
  let dataSourcePath;
  switch (portal) {
    case 'admin':
      dataSourcePath = `${host}/${portal}/students/student-profile/json`;
      break;
    case 'teachers':
      dataSourcePath = `${host}/${portal}/studentpages/student-profile/json`;
      break;
    case 'guardian':
      dataSourcePath = `${host}/${portal}/student-profile/json`;
  }
  return dataSourcePath;
}

/**
 * @param {string} studentsDcid PowerSchool portal that user is currently logged in
 * @return {Promise}
 */
export function loadOverview(studentsDcid, host, portal) {
  const dataSourcePath = getDataSourcePath(host, portal)
  const queryStr = URI.buildQuery({ students_dcid: studentsDcid });

  return fetch(`${dataSourcePath}/overview.pshtml.json?${queryStr}`, { credentials: 'include' }).then(htmlDecodeToJson);

}

export function loadSchedule(studentsDcid, yearId) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({ students_dcid: studentsDcid, year_id: yearId });

  return fetch(`${dataSourcePath}/schedule.pshtml.json?${queryStr}`, { credentials: 'include' }).then(htmlDecodeToJson);
}

export function loadGpa(studentsDcid, yearId) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({ students_dcid: studentsDcid, year_id: yearId });

  return fetch(`${dataSourcePath}/gpa.pshtml.json?${queryStr}`, { credentials: 'include' }).then(htmlDecodeToJson);
}

export function loadTestResults(studentsDcid) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({ students_dcid: studentsDcid });

  return fetch(`${dataSourcePath}/test_results.pshtml.json?${queryStr}`, { credentials: 'include' }).then(htmlDecodeToJson);
}

