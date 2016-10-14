import React from 'react';
import ReactDOM from 'react-dom';
import StudentProfile from './components/StudentProfile';
import loadOverview from './data-source';

loadOverview()
  .then(results => {
    ReactDOM.render(
      <StudentProfile {...results} />,
      document.getElementById('profile-container')
    );
  });
