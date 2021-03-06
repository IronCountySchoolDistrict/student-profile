import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Overview from './overview/Overview';
import Schedule from './schedule/Schedule';
import TestResults from './test-results/TestResults';

export default class Print extends Component {
  render() {
    return (
      <div>
        <Overview {...this.props} />
        <Schedule {...this.props} />
        <TestResults {...this.props} />
      </div>
    );
  }
}

Print.propTypes = {
  studentsDcid: PropTypes.string
};