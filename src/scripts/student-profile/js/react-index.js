import React from 'react';
import ReactDOM from 'react-dom';
import ContactTable from './components/student-contacts/ContactTable';

window.fetch('/ws/schema/query/com.icsd.sp.overview.contacts', {
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
  })
  .then(ajaxContactData => {
	ReactDOM.render(
		<ContactTable contacts={ajaxContactData} />, 
		document.getElementById('student-contacts-container')
	);
  });