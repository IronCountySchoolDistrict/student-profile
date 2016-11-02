import React, { Component } from 'react';
import Grade from './Grade';

export default class GradeList extends Component {
  render() {
    const emptyClass = 'col-md-1 grade-container';
    const grades = this.props.uniqueTerms.map(term => {
      if (Object.keys(this.props.grades).includes(term) && this.props.grades[term].grade !== '--') {
        const gradeMatchingTerm = this.props.grades[term];
        return (
          <Grade key={gradeMatchingTerm.id} uniqueTerms={this.props.uniqueTerms} grade={gradeMatchingTerm.grade} percent={gradeMatchingTerm.percent} />
        );
      } else {
        return (
          <div className={emptyClass}>--</div>
        );
      }
    });

    return (
      <div>
        {grades}
      </div>
    );
  }
}

GradeList.propTypes = {
  uniqueTerms: React.PropTypes.arrayOf(React.PropTypes.string),
  grades: React.PropTypes.object
};
