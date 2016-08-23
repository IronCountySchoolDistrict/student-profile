import React, {Component} from 'react';
import GradesCell from './GradesCells';

export default class Course extends Component {

  _printGradesForTerms(grades, uniqueTerms) {
    return uniqueTerms.map(term => {
      if (Object.keys(grades).indexOf(term) !== -1) {
        const termGrade = grades[term];
        return (
          <td key={termGrade.id}>
            <GradesCell grade={termGrade.grade} percent={termGrade.percent}/>
          </td>
        )
      } else {
        return (
          <td>
            <GradesCell grade={""} percent={""}/>
          </td>
        )
      }
    });
  }

  render() {
    const unexcused = !!this.props.attendance.unexcused ? this.props.attendance.unexcused : 0;
    const excused = !!this.props.attendance.excused ? this.props.attendance.excused : 0;
    const tardy = !!this.props.attendance.tardy ? this.props.attendance.tardy : 0;
    const totalAbsences = unexcused + excused;

    const grades = this._printGradesForTerms(this.props.grades, this.props.uniqueTerms);
    return (
      <tr>
        <td>
          {this.props.expression}
        </td>
        <td>
          {this.props.course_name}
        </td>
        <td>
          {this.props.abbreviation}
        </td>
        <td>
          {this.props.dateenrolled}
        </td>
        <td>
          {this.props.dateleft}
        </td>
        <td>
          {totalAbsences}
          ({excused})
        </td>
        <td>
          {tardy}
        </td>
        <td>
        </td>
        {grades}
        <td>
          {this.props.lastfirst}
        </td>
      </tr>
    );
  }
}
