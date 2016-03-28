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
    const uniqueTerms = this.getUniqueTerms(this.props.courses);
    const headers = this.createGradesHeaders(uniqueTerms);
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
          {headers}
          <th>
            Teacher
          </th>
        </tr>
        </thead>
        <CourseList courseData={this.props.courses} uniqueTerms={uniqueTerms}/>
      </table>
    );
  }
}
