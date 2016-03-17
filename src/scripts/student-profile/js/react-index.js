import React from 'react';
import ReactDOM from 'react-dom';
import ContactTable from './components/student-contacts/ContactTable';
import General from './components/general/General';

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

Promise.all([
    contactsFetch,
    generalFetch
  ])
  .then(results => ({
    contacts: results[0],
    general: results[1]
  }))
  .then(results => {
    ReactDOM.render(
      <ContactTable contacts={results.contacts}/>,
      document.getElementById('student-contacts-container')
    );

    ReactDOM.render(
      <General general={results.general.record[0]}/>,
      document.getElementById('general-container')
    );
  });