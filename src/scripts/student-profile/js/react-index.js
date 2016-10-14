import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import Overview from './components/overview/Overview';
import Nav from './components/Nav';
import Schedule from './components/schedule/Schedule';
import TestScores from './components/test-scores/TestScores';
import loadOverview from './data-source';


loadOverview()
  .then(results => {
    render(
      <Router history={hashHistory}>
        <Route path="/" component={Nav}>
          <IndexRoute {...results} component={Overview} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/test-results" component={TestScores} />
        </Route>
      </Router>,
      document.getElementById('profile-container')
    );
  });
