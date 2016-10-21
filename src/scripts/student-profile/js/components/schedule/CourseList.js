import React, { Component } from 'react';
import Course from './Course';

export default class CourseList extends Component {
  /**
   * @return {array}
   */
  getUniqueTerms() {
    return this.props.courses
      .map(course => Object.keys(course.grades))
      .reduce((prev, curr) => prev.concat(curr), []) //flatten array of arrays into a single array
      .reduce((prev, curr) => !prev.includes(curr) ? prev.concat([curr]) : prev, []) //get unique terms
      .sort();
  }

  render() {
    const uniqueTerms = this.getUniqueTerms();
    const courses = this.props.courses.map((course, index) => {
      return (
        <Course {...course} uniqueTerms={uniqueTerms} index={index} key={course.id} />
      );
    });

    return (
      <div className='course-list'>
        {courses}
      </div>
    );
  }
}

CourseList.propTypes = {
  courses: React.PropTypes.arrayOf(React.PropTypes.node)
};
