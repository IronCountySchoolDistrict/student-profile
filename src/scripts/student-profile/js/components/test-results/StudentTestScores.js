import React, {Component} from 'react';

export default class StudentTestScores extends Component {
  render() {
    if (this.props.display) {
      if (this.props.scores) {
        const panelClass = 'panel panel-default score-panel';
        const testScores = this.props.scores.map(score => {
          return (
            <div>
              <span className="test-score-name">{score.test_score}: </span>
              <span className="test-score">{score.num_score}</span>
            </div>
          );
        });
        return (
          <div className={panelClass}>
            <div className="panel-body">
              {testScores}
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="hidden-score"></div>
      );
    }
  }
}
