import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

export default class GradeResultList extends Component {
  render() {
    return this.props.results.map(test => {
      return (
        <div className="col-md-3" key={test.studenttest_id}>
          <Result {...test} shouldPrint={this.props.shouldPrint} />
        </div>
      );
    });
  }
}

GradeResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  shouldPrint: PropTypes.bool
};
