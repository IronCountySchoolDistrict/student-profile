import React, {Component} from 'react';
import StudentTestScore from './StudentTestScore';

export default class StudentTestScoreList extends Component {
  render() {
    const testScores = this.props.scores.map(score => {
      return (
        <StudentTestScore {...score} key={score.id} />
      );
    });
    return (
      <div>
        {testScores}
      </div>
    );
  }
}

StudentTestScoreList.propTypes = {
  display: React.PropTypes.string,
  scores: React.PropTypes.arrayOf(
    React.PropTypes.object
  )
};
