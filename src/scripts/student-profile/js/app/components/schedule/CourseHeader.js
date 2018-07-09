import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CourseHeader extends Component {
  render() {
    const panelDefault = 'card panel-course';
    const termHeaderClass = 'col-md-1 col-1 term-header';

    return (
      <div className={panelDefault}>
        <div className="panel-body">
          <div className="row">
            <div className="col-md-2 col-2">
              <h4 className="course-header">Teacher</h4>
            </div>
            <div className="col-md-3 col-4">
              <h4 className="course-header">Class</h4>
            </div>
            <div className="col-md-1 col-2">
              <h4 className="course-header">Term</h4>
            </div>
            <div className="col-md-6 col-4">
              <h4 className="course-header">Grades</h4>
              <div className="row header-term-container">
                {this.props.uniqueTerms.map((term, index) => {
                  return (
                    <div key={term} className={termHeaderClass}>{term}</div>
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

CourseHeader.propTypes = {
  uniqueTerms: PropTypes.arrayOf(
    PropTypes.string
  )
};
