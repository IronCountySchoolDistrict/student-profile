import React, { Component, PropTypes } from 'react';
import Course from './Course';
import CourseHeader from './CourseHeader';

export default class CourseList extends Component {
  /**
   * @return {array}
   */
  getUniqueTerms() {
    return this.props.courses
      .map(course => Object.keys(course.grades))
      .reduce((prev, curr) => prev.concat(curr), []) //flatten every term identifier (e.g., Q1) into a single array, includes duplicates at this point
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
        <CourseHeader uniqueTerms={uniqueTerms} />
        {courses}
      </div>
    );
  }
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.object
  )
};
