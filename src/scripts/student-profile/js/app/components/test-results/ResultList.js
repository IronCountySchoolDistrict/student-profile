import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GradeResultList from './GradeResultList';

export default class ResultList extends Component {
  //...don't ask me how this works, because *shrug*
  // https://ecommerce.shopify.com/c/ecommerce-design/t/ordinal-number-in-javascript-1st-2nd-3rd-4th-29259
  static getOrdinalGrade(n) {
    if (n === 'K') {
      return 'Kindergarten';
    } else if (n === -2) {
      return 'PK3';
    } else if (n === -1) {
      return 'PK4';
    }

    const s=["th","st","nd","rd"],
      v=n%100;
    return n+(s[(v-20)%10]||s[v]||s[0]) + ' Grade';
  }

  createGradeResultsList(gradeLevel) {
    const gradeResults = this.props.tests.filter(test => test.grade_level === gradeLevel);
    return (
      <div className="row grade-result-list">
        <GradeResultList results={gradeResults} shouldPrint={this.props.shouldPrint} />
      </div>
    );
  }

  render() {
    if (this.props.tests) {
      const distinctGradeLevels = this.props.tests.reduce((prev, curr) => {
        return !prev.includes(curr.grade_level) ? prev.concat([curr.grade_level]) : prev;
      }, []);

      const resultList = distinctGradeLevels.map(gradeLevel => {
        return (
          <div className="row" key={gradeLevel}>
            <div className="col-md-12 grade-result-list-container">
              <h2 className="grade-header">{ResultList.getOrdinalGrade(gradeLevel)}</h2>
              {this.createGradeResultsList(gradeLevel)}
            </div>
          </div>
        );
      });

      return (
        <div>
          {resultList}
        </div>
      );
  } else {
      return (
        <div></div>
      );
    }
  }
}

ResultList.propTypes = {
  tests: PropTypes.arrayOf(
    PropTypes.object
  ),
  shouldPrint: PropTypes.bool
};
