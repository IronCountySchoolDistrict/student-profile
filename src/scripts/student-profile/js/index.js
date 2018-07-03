import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import URI from 'urijs';
import $ from 'jquery';

import bootstrap from 'bootstrap';

import App from './components/App';
import Print from './components/Print';
import * as sass from '../sass/base.scss';

$(() => {
  const uri = URI(window.location.href);
  const queryDataMap = uri.search(true);
  const studentsDcid = queryDataMap.students_frn.slice(3);
  const yearId = parseInt(queryDataMap.yearid);
  const shouldPrint = queryDataMap.should_print === 'true';

  if (!shouldPrint) {
    render(
      <HashRouter>
        <App studentsDcid={studentsDcid} yearId={yearId} />
      </HashRouter>,
      document.getElementById('profile-container')
    );
  } else {
    render(
      <Print studentsDcid={studentsDcid} yearId={yearId} shouldPrint={shouldPrint}/>,
      document.getElementById('profile-container')
    );
    setTimeout(() => {
      window.print();
    }, 2000);
  }
});
