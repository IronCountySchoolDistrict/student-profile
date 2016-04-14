import Course from './Course';
import Gpa from './Gpa';

import React, {Component} from 'react';

export default class CourseList extends Component {
  render() {

    const courses = this.props.courseData.map(course => {
      return (
        <Course key={course.id} {...course} uniqueTerms={this.props.uniqueTerms}/>
      );
    });

    return (
      <tbody>
        {courses}
        <Gpa gpa={this.props.gpa} uniqueTerms={this.props.uniqueTerms}/>
      </tbody>
    );
  }
}
