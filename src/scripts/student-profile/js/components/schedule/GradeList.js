import React, { Component } from 'react';
import Grade from './Grade';

export default class GradeList extends Component {
  render() {
    const grades = this.props.uniqueTerms.map(term => {
      if (Object.keys(this.props.grades).includes(term) && this.props.grades[term].grade !== '--') {
        const gradeMatchingTerm = this.props.grades[term];
        return (
          <Grade key={gradeMatchingTerm.id} grade={gradeMatchingTerm.grade} percent={gradeMatchingTerm.percent} />
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
  uniqueTerms: React.PropTypes.arrayOf(React.propTypes.string),
  grades: React.PropTypes.arrayOf(React.PropTypes.node)
};
