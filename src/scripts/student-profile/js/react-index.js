import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import URI from 'urijs';
import $ from 'jquery';

import Overview from './components/overview/Overview';
import Nav from './components/Nav';
import Schedule from './components/schedule/Schedule';
import TestResults from './components/test-results/TestResults';
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
      <Router history={hashHistory}>
        <Route path="/" component={Nav}>
          <IndexRoute component={() => <Overview studentsDcid={studentsDcid}/>}/>
          <Route path="/schedule" component={() => <Schedule studentsDcid={studentsDcid} yearId={yearId}/>}/>
          <Route path="/test-results" component={() => <TestResults studentsDcid={studentsDcid}/>}/>
        </Route>
      </Router>,
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
