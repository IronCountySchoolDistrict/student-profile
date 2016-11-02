import React, {Component} from 'react';
import GradeResultList from './GradeResultList';

export default class ResultList extends Component {
  //...don't ask me how this works, because *shrug*
  // https://ecommerce.shopify.com/c/ecommerce-design/t/ordinal-number-in-javascript-1st-2nd-3rd-4th-29259
  getOrdinal(n) {
     var s=["th","st","nd","rd"],
         v=n%100;
     return n+(s[(v-20)%10]||s[v]||s[0]);
  }

  createGradeResultsList(gradeLevel) {
    const gradeResults = this.props.tests.filter(test => test.grade_level === gradeLevel);
    return (
      <div className="row">
        <GradeResultList results={gradeResults} />
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
            <div className="col-md-12">
              <h2>{this.getOrdinal(gradeLevel)} Grade</h2>
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
  tests: React.PropTypes.arrayOf(
    React.PropTypes.object
  )
};
