import React from 'react';
import ReactDOM from 'react-dom';
import Cookie from 'js-cookie';
import ContactList from './components/student-contacts/ContactList';
import General from './components/general/General';
import CourseTable from './components/schedule/CourseTable';

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
  .then(r => r.json())
  .then(r => {
    // The `phones` key is surrounded in quotes, but is actually a JSON object,
    // so call JSON.parse on it to parse it
    return r.record.map(contact => {
      contact.phone = JSON.parse(contact.phone);
      return contact;
    });
  });


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
    return r.record.map(course => {
      course.attendance = JSON.parse(course.attendance);
      course.grades = JSON.parse(course.grades);
      return course;
    });
  });

Promise.all([
    contactsFetch,
    generalFetch,
    scheduleFetch
  ])
  .then(results => ({
    contacts: results[0],
    general: results[1],
    schedule: results[2]
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

    ReactDOM.render(
      <CourseTable courses={results.schedule.record}/>,
      document.getElementById('schedule-container')
    );
  });