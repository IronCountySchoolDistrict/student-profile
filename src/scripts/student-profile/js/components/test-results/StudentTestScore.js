import React, {Component} from 'react';

export default class StudentTestScore extends Component {
  render() {
    return (
      <div>
        <span className="test-score-name">{this.props.test_score}: </span>
        <span className="test-score">{this.props.num_score}</span>
      </div>
    );
  }
}
