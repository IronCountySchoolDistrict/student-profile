import React, {Component} from 'react';
import Result from './Result';

export default class GradeResultList extends Component {
  render() {
    const gradeResultList = this.props.results.map(test => {
      return (
        <div className="col-md-3" key={test.studenttest_id}>
          <Result {...test} />
        </div>
      );
    });

    return (
      <div>
        {gradeResultList}
      </div>
    );
  }
}

GradeResultList.propTypes = {
  results: React.PropTypes.arrayOf(React.PropTypes.object)
};
