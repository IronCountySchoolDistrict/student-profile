import React, { Component } from 'react';
import Overview from './overview/Overview';
import Schedule from './schedule/Schedule';
import TestResults from './test-results/TestResults';

export default class Print extends Component {
  render() {
    return (
      <div>
        <Overview route={{...this.props}} />
        <Schedule route={{...this.props}} />
        <TestResults route={{...this.props}} />
      </div>
    );
  }
}

Print.propTypes = {
  studentsDcid: React.PropTypes.string
};