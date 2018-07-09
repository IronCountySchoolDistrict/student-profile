import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grade from './Grade';

export default class GradeList extends Component {
  render() {
    const emptyClass = 'col-md-1 col-1 grade-container';
    const grades = this.props.uniqueTerms.map(term => {
      if (Object.keys(this.props.grades).includes(term) && this.props.grades[term].grade !== '--') {
        const gradeMatchingTerm = this.props.grades[term];
        return (
          <Grade key={gradeMatchingTerm.id} grade={gradeMatchingTerm.grade} percent={gradeMatchingTerm.percent} />
        );
      } else {
        return (
          <div key={term} className={emptyClass}>--</div>
        );
      }
    });

    return (
      <div className="row term-grade-container">
        {grades}
      </div>
    );
  }
}

GradeList.propTypes = {
  uniqueTerms: PropTypes.arrayOf(PropTypes.string),
  grades: PropTypes.object
};
