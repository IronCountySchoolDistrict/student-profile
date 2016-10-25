import React, { Component } from 'react';

export default class Grade extends Component {
  render() {
    const gradeContainerClass = 'grade-container col-md-1';
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
  grade: React.PropTypes.string,
  percent: React.PropTypes.number
};
