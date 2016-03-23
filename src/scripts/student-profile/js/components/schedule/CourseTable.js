import CourseList from './CourseList';
import React, {Component} from 'react';

export default class CourseTable extends Component {
  render() {
    return (
      <table className="table table-bordered table-condensed">
        <thead>
        <tr>
          <th>
            Period
          </th>
          <th>
            Class
          </th>
          <th>
            Term
          </th>
          <th>
            Date Enrolled
          </th>
          <th>
            Date Left
          </th>
          <th>
            <div>Absenses</div>
            <div>All (Excused)</div>
          </th>
          <th>
            Tardies
          </th>
          <th></th>
          <th>
            Teacher
          </th>
        </tr>
        </thead>
        <CourseList courseData={this.props.courses}/>
      </table>
    );
  }
}