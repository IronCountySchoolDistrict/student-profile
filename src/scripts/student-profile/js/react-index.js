import React from 'react';
import ReactDOM from 'react-dom';
import StudentProfile from './components/StudentProfile';
import loadData from './data-source';

loadData()
  .then(results => {
    ReactDOM.render(
      <StudentProfile results={results}/>,
      document.getElementById('profile-container')
    );
  });
