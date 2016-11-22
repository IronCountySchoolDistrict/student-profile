import React, {Component} from 'react';
import StudentTestScoreList from './StudentTestScoreList';

export default class Result extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      display: 'composite'
    };
  }

  getScoreWithValue(compositeScore) {
    if (!compositeScore.num_score && !compositeScore.alpha_score){
      return compositeScore.percent_score;
    } else if (!compositeScore.alpha_score && !compositeScore.percent_score) {
      return compositeScore.num_score;
    } else if (!compositeScore.percent_score && !compositeScore.num_score) {
      return compositeScore.alpha_score;
    }
  }

  // toggle state var `display` between 'composite' and 'scores'
  toggleDisplay(thisButton) {
    if (this.state.display !== thisButton) {
      this.setState({
        display: this.state.display === 'composite' &&
          this.state.display !== thisButton ? 'scores' : 'composite'
      });
    }
  }

  getViewButtonClass(thisButton) {
    let btnClass = 'btn-xs btn btn-default';
    if (this.state.display === thisButton) {
      btnClass += ' active';
    }
    return btnClass;
  }

  componentDidMount() {
    const tooltipSelector = $('[data-toggle="tooltip"]');
    if (tooltipSelector.length) {
      tooltipSelector.tooltip();
    }
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
            <div className="panel-title pull-left heading">
              {this.props.test_name}
            </div>
            <div className="panel-title pull-right">
              <div className="btn-group" data-toggle="buttons">
                <button className={this.getViewButtonClass('composite')} data-container="body" data-toggle="tooltip" data-placement="top" title="Score Overview" onClick={() => this.toggleDisplay('composite')}>
                  <i className="fa fa-window-maximize" aria-hidden="true"></i>
                </button>
                <button className={this.getViewButtonClass('scores')} data-container="body" data-toggle="tooltip" data-placement="top" title="Score List" onClick={() => this.toggleDisplay('scores')}>
                  <i className="fa fa-list" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="panel-body">
            {this.state.display === 'composite' &&
              <div>
                <h4 className="composite-score-header">{compositeScore.test_score}</h4>
                <h2 className="composite-score">{this.getScoreWithValue(compositeScore)}</h2>
              </div>
            }
            {this.state.display === 'scores' && <StudentTestScoreList scores={this.props.test_scores} display={this.state.display}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

Result.propTypes = {
  test_scores: React.PropTypes.arrayOf(
    React.PropTypes.object
  ),
  test_name: React.PropTypes.string,
  test_score: React.PropTypes.number
};
