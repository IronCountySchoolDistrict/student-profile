import React from 'react';
import ReactDOM from 'react-dom';
import ContactList from './components/student-contacts/ContactList';
import General from './components/general/General';
import CourseTable from './components/schedule/CourseTable';

function mergePhonesIntoContacts(contacts, phones) {
  return contacts.map(contact => {
    contact.phones = phones.filter(phone => phone.contactdcid === contact.id);
    return contact;
  });
}

const contactsFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.contacts', {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      students_dcid: getParameterByName('frn').slice(3)
    })
  })
  .then(r => r.json());

const phonesFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.phones', {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      students_dcid: getParameterByName('frn').slice(3)
    })
  })
  .then(r => r.json());


const generalFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.general', {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      students_dcid: getParameterByName('frn').slice(3)
    })
  })
  .then(r => r.json());

const scheduleFetch = window.fetch('/ws/schema/query/com.icsd.sp.overview.schedule', {
    credentials: 'include',
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      students_dcid: getParameterByName('frn').slice(3),
      yearid: getParameterByName('yearid')
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
      return r;
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
      students_dcid: getParameterByName('frn').slice(3),
      yearid: getParameterByName('yearid')
    })
  })
  .then(r => r.json());

Promise.all([
    contactsFetch,
    phonesFetch,
    generalFetch,
    scheduleFetch,
    gpaFetch
  ])
  .then(results => ({
    contacts: mergePhonesIntoContacts(results[0].record, results[1].record),
    general: results[2],
    schedule: results[3],
    gpa: results[4]
}))
  .then(results => {
    ReactDOM.render(
      <ContactList contacts={results.contacts}/>,
      document.getElementById('student-contacts-container')
    );

    ReactDOM.render(
      <General general={results.general.record[0]}/>,
      document.getElementById('general-container')
    );

    if (results.schedule.length) {
      ReactDOM.render(
        <CourseTable courses={results.schedule} gpa={results.gpa.record}/>,
        document.getElementById('schedule-container')
      );
    }
  });
