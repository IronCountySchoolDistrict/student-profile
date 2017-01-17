import React, { Component } from 'react';
import { loadTestResults } from '../../data-source';
import ResultList from './ResultList';

export default class TestResults extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      testResults: null,
      displayTests: null
    };
  }

  componentDidMount() {
    const studentsDcid = this.props.route.studentsDcid;
    loadTestResults(studentsDcid).then(testResults => {
      this.setState({
        testResults: testResults
      });
      if (testResults.length) {
        this.setState({
          displayTests: this.state.testResults
        });
      }
    });
  }

  render() {
    if (this.state.testResults) {
      if (!this.state.testResults.length) {
        return (
          <div>This student does not have any test results to display</div>
        );
      } else {
        return (
          <div>
            <ResultList tests={this.state.displayTests} shouldPrint={this.props.route.shouldPrint} />
          </div>
        );
      }
    } else if (!this.props.route.shouldPrint) {
      const refreshClass = 'fa fa-refresh fa-spin fa-3x fa-fw';
      return (
        <i className={refreshClass} />
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}
