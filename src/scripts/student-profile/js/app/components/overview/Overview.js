import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SchoolDemo from './SchoolDemo';
import StudentDemo from './StudentDemo';
import Avatar from './Avatar';
import Medical from './Medical';
import { loadOverview } from '../../data-source';

export default class Overview extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      avatar: null
    };
  }

  componentDidMount() {
    loadOverview(this.props.studentsDcid, this.props.host, this.props.portal).then(overview => {
      this.setState({
        avatar: overview.avatar,
        medical: overview.medical,
        school_demo: overview.school_demo,
        student_demo: overview.student_demo
      });
      const tooltipSelector = $('[data-toggle="tooltip"]');
      if (tooltipSelector.length) {
        tooltipSelector.tooltip();
      }
    });
  }

  render() {
    if (this.state.avatar) {
      // does medical contain any non-null values? If it doesn't,
      // don't display the medical alert
      const shouldDisplayMedical = Object.keys(this.state.medical).some(elem => this.state.medical[elem] != null);

      return (
        <div>
          <div className="row">
            <div className="col-md-2 col-2" id="avatar-container">
              <Avatar {...this.state.avatar} host={this.props.host} portal={this.props.portal} />
            </div>
            <div className="col-md-4 col-4" id="school-demo-container">
              <SchoolDemo {...this.state.school_demo} />
            </div>
            <div className="col-md-6 col-6" id="student-demo-container">
              <StudentDemo {...this.state.student_demo} />
            </div>
          </div>
          {shouldDisplayMedical &&
          <div className="row">
            <div className="col-md-12">
              <Medical {...this.state.medical} />
            </div>
          </div>
          }
        </div>
      );
    } else {
      const refreshClass = 'fa fa-refresh fa-spin fa-3x fa-fw';
      return (
        <i className={refreshClass} />
      );
    }
  }
}

Overview.propTypes = {
  studentsDcid: PropTypes.string,
  shouldPrint: PropTypes.bool
};
