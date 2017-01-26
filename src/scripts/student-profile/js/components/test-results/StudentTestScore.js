import React, { Component, PropTypes } from 'react';

export default class StudentTestScore extends Component {
  getScoreWithValue() {
    if (this.props.test_name.indexOf('UBSCT') !== -1) {
      return this.props.num_score;
    } else if (this.props.test_name.indexOf('PSAT') !== -1) {
      return this.props.num_score;
    } else if (!this.props.num_score && !this.props.alpha_score){
      return this.props.percent_score;
    } else if (!this.props.alpha_score && !this.props.percent_score) {
      return this.props.num_score;
    } else if (!this.props.percent_score && !this.props.num_score) {
      return this.props.alpha_score;
    }
  }

  render() {
    return (
      <div>
        <span className="test-score-name">{this.props.test_score}: </span>
        <span className="test-score">{this.getScoreWithValue()}</span>
      </div>
    );
  }
}

StudentTestScore.propTypes = {
  test_name: PropTypes.string,
  test_score: PropTypes.string,
  num_score: PropTypes.number,
  percent_score: PropTypes.string,
  alpha_score: PropTypes.number
};
