import React, {Component} from 'react';

export default class Course extends Component {

  render() {
    return (
      <tr>
        <td>
          {this.props.courseData.expression}
        </td>
        <td>
          {this.props.courseData.course_name}
        </td>
        <td>
          {this.props.courseData.abbreviation}
        </td>
        <td>
          {this.props.courseData.dateenrolled}
        </td>
        <td>
          {this.props.courseData.dateleft}
        </td>
        <td>
          {this.props.courseData.attendance.Unexcused + this.props.courseData.attendance.Excused}
          ({this.props.courseData.attendance.Excused})
        </td>
        <td>
          
        </td>
        <td>
        </td>
        <td>
          {this.props.courseData.lastfirst}
        </td>
      </tr>
    );
  }
}