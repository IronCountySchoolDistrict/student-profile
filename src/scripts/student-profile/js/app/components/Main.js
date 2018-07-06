import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PropTypes from 'prop-types';
import Schedule from './schedule/Schedule';
import TestResults from './test-results/TestResults';
import Overview from './overview/Overview';

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Overview studentsDcid={this.props.studentsDcid} host={this.props.host} portal={this.props.portal} />}/>
                <Route path="/schedule" render={() => <Schedule studentsDcid={this.props.studentsDcid} yearId={this.props.yearId}/>}/>
                <Route path="/test-results" render={() => <TestResults studentsDcid={this.props.studentsDcid}/>}/>
            </Switch>
        );
    }
}

Main.propTypes = {
  studentsDcid: PropTypes.string,
  yearId: PropTypes.number,
  shouldPrint: PropTypes.bool
};
