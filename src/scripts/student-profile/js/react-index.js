import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import URI from 'urijs';

import Overview from './components/overview/Overview';
import Nav from './components/Nav';
import Schedule from './components/schedule/Schedule';
import TestResults from './components/test-results/TestResults';

$(() => {
  const uri = URI(window.location.href);
  const queryDataMap = uri.search(true);
  const studentsDcid = queryDataMap.students_frn.slice(3);
  const yearId = queryDataMap.yearid;

  render(
    <Router history={hashHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Overview} studentsDcid={studentsDcid} />
        <Route path="/schedule" component={Schedule} studentsDcid={studentsDcid} yearId={yearId} />
        <Route path="/test-results" component={TestResults} studentsDcid={studentsDcid} yearId={yearId} />
      </Route>
    </Router>,
    document.getElementById('profile-container')
  );
});
