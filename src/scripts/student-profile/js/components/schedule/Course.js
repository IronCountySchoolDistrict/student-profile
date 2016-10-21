import React, { Component } from 'react';
import Attendance from './Attendance';
import GradeList from './GradeList';

export default class Course extends Component {
  render() {
    const panelDefault = 'panel panel-default panel-course';
    return (
      <div className={panelDefault}>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2">
              {this.props.teacher_name}
            </div>
            <div className="col-md-3">
              <strong className="expression-label">{this.props.expression}</strong> {this.props.course_name}
              <Attendance {...this.props.attendance} />
            </div>
            <div className="col-md-1">
              {this.props.term_id}
            </div>
            <div className="col-md-6">
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
  term_id: React.PropTypes.number,
  uniqueTerms: React.PropTypes.arrayOf(React.PropTypes.string),
  grades: React.PropTypes.arrayOf(React.PropTypes.node)
};
