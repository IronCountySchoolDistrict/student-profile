import React, {Component} from 'react';

export default class GradesCells extends Component {
  render() {
    return (
      <div className="grade-cell">
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