import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attendance from './Attendance';
import GradeList from './GradeList';

export default class Course extends Component {
  render() {
    const panelDefault = 'card panel-course';
    const teacherContainerClass = 'col-md-2 col-2 teacher-container';
    const classContainerClass = 'col-md-3 col-4 class-container';
    const termContainerClass = 'col-md-1 col-2 term-container';
    const gradesContainerClass = 'col-md-6 col-4 grades-container';

    return (
      <div className={panelDefault}>
        <div className="card-text panel-body">
          <div className="row">
            <div className={teacherContainerClass}>
              {this.props.teacher_name}
            </div>
            <div className={classContainerClass}>
              <strong className="expression-label">{this.props.expression}</strong> {this.props.course_name}
              <Attendance {...this.props.attendance} />
            </div>
            <div className={termContainerClass}>
              {this.props.term}
            </div>
            <div className={gradesContainerClass}>
              <GradeList uniqueTerms={this.props.uniqueTerms} grades={this.props.grades} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Course.propTypes = {
  id: PropTypes.number,
  teacher_name: PropTypes.string,
  expression: PropTypes.string,
  course_name: PropTypes.string,
  attendance: PropTypes.object,
  term: PropTypes.string,
  uniqueTerms: PropTypes.arrayOf(PropTypes.string),
  grades: PropTypes.object
};
