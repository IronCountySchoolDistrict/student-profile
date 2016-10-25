import React, { Component } from 'react';

export default class Course extends Component {
  render() {
    const panelDefault = 'panel panel-default panel-course';
    const termHeaderClass = 'col-md-1 term-header';

    return (
      <div className={panelDefault}>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2">
              <h4 className="course-header">Teacher</h4>
            </div>
            <div className="col-md-3">
              <h4 className="course-header">Class</h4>
            </div>
            <div className="col-md-1">
              <h4 className="course-header">Term</h4>
            </div>
            <div className="col-md-6">
              <h4 className="course-header">Grades</h4>
              <div>
                {this.props.uniqueTerms.map((term, index) => {
                  return (
                    <div className={termHeaderClass}>{term}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
