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

  // set the `displayTest` state variable based on all test results records
  // that match the `test_name` of the selected test
  setDisplayTests(testName) {
    if (this.state.testResults) {
      this.setState({
        displayTests: this.state.testResults.filter(result => result.test_name === testName)
      });
    }
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
      return (
        <div>
          <ResultList tests={this.state.displayTests} />
        </div>
      );
    } else {
      const refreshClass = 'fa fa-refresh fa-spin fa-3x fa-fw';
      return (
        <i className={refreshClass}></i>
      );
    }
  }
}
