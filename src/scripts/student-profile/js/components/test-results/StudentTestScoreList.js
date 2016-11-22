import React, {Component} from 'react';
import StudentTestScore from './StudentTestScore';

export default class StudentTestScoreList extends Component {
  render() {
    const testScores = this.props.scores.map(score => {
      return (
        <StudentTestScore {...score} key={score.id} test_name={this.props.test_name}/>
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
  ),
  test_name: React.PropTypes.string
};
