import React, {Component} from 'react';
import Result from './Result';

export default class GradeResultList extends Component {
  render() {
    const gradeResultList = this.props.results.map(test => {
      return (
        <div className="col-md-3">
          <Result key={test.studenttest_id} {...test} />
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
