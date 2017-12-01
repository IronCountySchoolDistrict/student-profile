import {getPortal} from './util';
import {decode} from 'he';
import URI from 'urijs';
import fetch from 'isomorphic-fetch';

function htmlDecodeToJson(resp) {
  return resp.text().then(resp => decode(resp)).then(resp => JSON.parse(resp));
}

function getDataSourcePath() {
  const portal = getPortal();
  let dataSourcePath;
  switch (portal) {
    case 'admin':
      dataSourcePath = `/${portal}/students/student-profile/json`;
      break;
    case 'teachers':
      dataSourcePath = `/${portal}/studentpages/student-profile/json`;
      break;
    case 'guardian':
      dataSourcePath = `/${portal}/student-profile/json`;
  }
  return dataSourcePath;
}

/**
 * @param {string} studentsDcid PowerSchool portal that user is currently logged in
 * @return {Promise}
 */
export function loadOverview(studentsDcid) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({students_dcid: studentsDcid});

  return fetch(`${dataSourcePath}/overview.pshtml.json?${queryStr}`, {credentials: 'include'}).then(htmlDecodeToJson);
}

export function loadSchedule(studentsDcid, yearId) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({students_dcid: studentsDcid, year_id: yearId});

  return fetch(`${dataSourcePath}/schedule.pshtml.json?${queryStr}`, {credentials: 'include'}).then(htmlDecodeToJson);
}

export function loadGpa(studentsDcid, yearId) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({students_dcid: studentsDcid, year_id: yearId});

  return fetch(`${dataSourcePath}/gpa.pshtml.json?${queryStr}`, {credentials: 'include'}).then(htmlDecodeToJson);
}

export function loadTestResults(studentsDcid) {
  const dataSourcePath = getDataSourcePath();

  const queryStr = URI.buildQuery({students_dcid: studentsDcid});

  return fetch(`${dataSourcePath}/test_results.pshtml.json?${queryStr}`, {credentials: 'include'}).then(htmlDecodeToJson);
}

