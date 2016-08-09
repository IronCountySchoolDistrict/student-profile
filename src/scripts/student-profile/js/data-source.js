function _toQueryStr(obj) {
  return Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join('&');
}

function _getPortal() {
  var path = window.top.location.pathname;
  var pos = path.indexOf('/', 1);
  if (pos > 0) {
    path = path.substring(1, pos);
  }
  return path;
}

/**
 * merges phones into contact objects
 * @param  {object[]|undefined} contacts
 * @param  {object[]|undefined} phones
 * @return {object[]|array}  if a non-empty contact array is passed in, return
 * an array that has phones merged into contacts. if an empty contact array is passed in,
 * return an empty array
 */
function _mergePhonesIntoContacts(contacts, phones) {
  if (contacts) {
    return contacts.map(contact => {
      if (phones) {
        contact.phones = phones.filter(phone => phone.contactdcid === contact.id);
      }
      return contact;
    });
  } else {
    return [];
  }
}

/**
 * @param {string} portal PowerSchool portal that user is currently logged in
 * @param {Promise}
 */
export default function loadData() {
  const portal = _getPortal();
  const studentsDcid = getParameterByName('students_frn').slice(3);
  const yearId = getParameterByName('yearid');
  if (portal === 'admin') {
    const contactsFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.contacts', {
        credentials: 'include',
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          students_dcid: studentsDcid
        })
      })
      .then(r => r.json())
      .then(r => r.record);

    const phonesFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.phones', {
        credentials: 'include',
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          students_dcid: studentsDcid
        })
      })
      .then(r => r.json())
      .then(r => r.record);

    const generalFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.general', {
        credentials: 'include',
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          students_dcid: studentsDcid
        })
      })
      .then(r => r.json())
      .then(r => r.record);

    const scheduleFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.schedule', {
        credentials: 'include',
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          students_dcid: studentsDcid,
          yearid: yearId
        })
      })
      .then(r => r.json())
      .then(r => {
        if (r.record) {
          return r.record.map(course => {
            course.attendance = JSON.parse(course.attendance);
            course.grades = JSON.parse(course.grades);
            return course;
          });
        } else {
          return r.record;
        }
      });

    const gpaFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.gpa', {
        credentials: 'include',
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          students_dcid: studentsDcid,
          yearid: yearid
        })
      })
      .then(r => r.json())
      .then(r => r.record);

    return Promise.all([
        contactsFetch,
        phonesFetch,
        generalFetch,
        scheduleFetch,
        gpaFetch
      ])
      .then(results => ({
        contacts: _mergePhonesIntoContacts(results[0], results[1]),
        general: results[2],
        schedule: results[3],
        gpa: results[4]
      }));
  } else if (portal === 'teachers') {
    const contactsFetch = window.fetch(`/teachers/studentpages/student-profile/json/contacts.pshtml.json?${_toQueryStr({
      students_dcid: studentsDcid
    })}`, {
        credentials: 'include'
      })
      .then(r => r.json());

    const phonesFetch = window.fetch(`/teachers/studentpages/student-profile/json/phones.pshtml.json?${_toQueryStr({
      students_dcid: studentsDcid
    })}`, {
        credentials: 'include'
      })
      .then(r => r.json());

    const generalFetch = window.fetch(`/teachers/studentpages/student-profile/json/general.pshtml.json?${_toQueryStr({
      students_dcid: studentsDcid
    })}`, {
        credentials: 'include'
      })
      .then(r => r.json());

    const scheduleFetch = window.fetch(`/teachers/studentpages/student-profile/json/schedule.pshtml.json?${_toQueryStr({
      students_dcid: studentsDcid,
      yearid: yearId
    })}`, {
        credentials: 'include'
      })
      .then(r => r.json());

    const gpaFetch = window.fetch(`/teachers/studentpages/student-profile/json/gpa.pshtml.json?${_toQueryStr({
      students_dcid: studentsDcid,
      yearid: yearId
    })}`, {
        credentials: 'include'
      })
      .then(r => r.json());

    return Promise.all([
        contactsFetch,
        phonesFetch,
        generalFetch,
        scheduleFetch,
        gpaFetch
      ])
      .then(results => {
        return {
          contacts: _mergePhonesIntoContacts(results[0], results[1]),
          general: results[2],
          schedule: results[3],
          gpa: results[4]
        };
      });
  }
}
