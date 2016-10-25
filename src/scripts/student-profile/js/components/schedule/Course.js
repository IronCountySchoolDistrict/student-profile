import React, { Component } from 'react';
import Attendance from './Attendance';
import GradeList from './GradeList';

export default class Course extends Component {
  render() {
    const panelDefault = 'panel panel-default panel-course';
    const teacherContainerClass = 'col-md-2 teacher-container';
    const classContainerClass = 'col-md-3 class-container';
    const termContainerClass = 'col-md-1 term-container';
    const gradesContainerClass = 'col-md-6 grades-container';

    return (
      <div className={panelDefault}>
        <div className="panel-body">
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
  teacher_name: React.PropTypes.string,
  expression: React.PropTypes.string,
  course_name: React.PropTypes.string,
  attendance: React.PropTypes.node,
  term: React.PropTypes.string,
  uniqueTerms: React.PropTypes.arrayOf(React.PropTypes.string),
  grades: React.PropTypes.object
};
