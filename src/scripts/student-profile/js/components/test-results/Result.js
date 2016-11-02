import React, {Component} from 'react';
import StudentTestScoreList from './StudentTestScoreList';

export default class Result extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      display: false
    };
  }

  getScoresButtonText() {
    if (this.state.display) {
      return 'Hide Scores';
    } else {
      return 'Show Scores';
    }
  }

  onClick() {
    this.setState({
      display: this.state.display ? false : true
    });
  }

  render() {
    const panelClass = 'panel panel-default';
    let compositeScore = this.props.test_scores.filter(testScore => testScore.test_score.toLowerCase().includes('composite'));
    // If a test score was found that contains the text 'composite',
    // consider that the composite score.
    if (compositeScore.length) {
      compositeScore = compositeScore[0];
    } else {
      // If there was no test score that contains the string 'composite',
      // use the test score with the lowest sort order as the 'composite' score.
      compositeScore = this.props.test_scores[0];
    }
    return (
      <div className="result">
        <div className={panelClass}>
          <div className="panel-heading">
            <h3 className="panel-title">
              {this.props.test_name}
            </h3>
          </div>
          <div className="panel-body">
            <h4 className="composite-score-header">{compositeScore.test_score}</h4>
            <h2 className="composite-score">{compositeScore.num_score}</h2>
            <button className="scores-button btn btn-default btn-block" onClick={() => this.onClick()}>
              {this.getScoresButtonText()}
            </button>
            <StudentTestScoreList scores={this.props.test_scores} display={this.state.display} />
          </div>
        </div>
      </div>
    );
  }
}
