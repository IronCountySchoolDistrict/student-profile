import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Grade extends Component {
  render() {
    const gradeContainerClass = 'grade-container col-md-1 col-1';
    return (
      <div className={gradeContainerClass}>
        <div>
          {this.props.grade}
        </div>
        <div>
          {this.props.percent}
        </div>
      </div>
    );
  }
}

Grade.propTypes = {
  grade: PropTypes.string,
  percent: PropTypes.number
};
