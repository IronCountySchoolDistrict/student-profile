import CourseList from './CourseList';
import GradesHeader from './GradesHeader';
import React, {Component} from 'react';

export default class CourseTable extends Component {
  /**
   * Gets all unique terms that have grades
   * @param courses {Array}
   * @return {Array}
   */
  getUniqueTerms(courses) {
    let uniqueTerms = [];
    courses.forEach(course => {
      if (course.grades) {
        Object.keys(course.grades).forEach(term => {
          if (uniqueTerms.indexOf(term) === -1) {
            uniqueTerms.push(term);
          }
        })
      }
    });
    return uniqueTerms.sort();
  }

  createGradesHeaders(uniqueTerms) {
    return uniqueTerms.map(term => {
      return (
        <th>
          <GradesHeader ref={term} headerText={term}/>
        </th>
      );
    });
  }

  render() {
    if (this.props.courses.length) {
      const uniqueTerms = this.getUniqueTerms(this.props.courses);
      const headers = this.createGradesHeaders(uniqueTerms);
      var courseTable = (
        <table className="table table-bordered table-condensed table-schedule table-hover">
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
            {headers}
            <th>
              Teacher
            </th>
          </tr>
          </thead>
          <CourseList courseData={this.props.courses} gpa={this.props.gpa} uniqueTerms={uniqueTerms}/>
        </table>
      );
    }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Course Schedule</div>
        <div className="panel-body">
          {
            (() => {
              if (courseTable) {
                return courseTable;
              } else {
                return 'This student does not have a schedule for this year'
              }
            })()
          }
        </div>
      </div>
    );
  }
}
