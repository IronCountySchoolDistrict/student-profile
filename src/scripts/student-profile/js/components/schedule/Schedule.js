import React, { Component } from 'react';
import CourseList from './CourseList';
import { loadSchedule } from '../../data-source';

export default class Schedule extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      courses: null
    };
  }

  componentDidMount() {
    const studentsDcid = this.props.route.studentsDcid;
    const yearId = this.props.route.yearId;
    loadSchedule(studentsDcid, yearId).then(schedule => {
      this.setState({
        courses: schedule
      });
    });
  }

  render() {
    if (this.state.courses) {
      return (
        <CourseList courses={this.state.courses} />
      );
    }
    else {
      const refreshClass = 'fa fa-refresh fa-spin fa-3x fa-fw';
      return (
        <i className={refreshClass}></i>
      );
    }
  }
}

Schedule.propTypes = {
  route: React.PropTypes.shape({
    studentsDcid: React.PropTypes.string,
    yearId: React.PropTypes.number
  })
};
