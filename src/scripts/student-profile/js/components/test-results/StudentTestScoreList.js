import React, {Component} from 'react';
import StudentTestScore from './StudentTestScore';

export default class StudentTestScoreList extends Component {
  render() {
    if (this.props.display && this.props.scores) {
      const panelClass = 'panel panel-default score-panel';
      const testScores = this.props.scores.map(score => {
        return (
          <StudentTestScore {...score} key={score.id}/>
        );
      });
      return (
        <div className={panelClass}>
          <div className="panel-body">
            {testScores}
          </div>
        </div>
      );
    } else {
      return (
        <div className="hidden-score"></div>
      );
    }
  }
}
