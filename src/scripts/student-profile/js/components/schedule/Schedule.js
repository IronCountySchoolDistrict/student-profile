import React, { Component } from 'react';
import CourseList from './CourseList';
import GpaList from './GpaList';
import { loadSchedule, loadGpa } from '../../data-source';

export default class Schedule extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      schedule: null,
      gpa: null
    };
  }

  componentDidMount() {
    const {studentsDcid, yearId} = this.props.route;
    Promise.all([loadSchedule(studentsDcid, yearId), loadGpa(studentsDcid, yearId)])
      .then(([schedule, gpa]) => {
        this.setState({
          schedule: schedule,
          gpa: gpa
        });
      });
  }

  render() {
    if (this.state.schedule && this.state.gpa) {
      if (!this.state.schedule.length) {
        return (
          <div className="panel panel-default">
            <div className="panel-body">
              This student does not have a schedule for this school year.
            </div>
          </div>
        );
      } else {
        return (
          <div>
            {!!this.state.schedule.length && !this.props.route.shouldPrint &&
            <h3>Courses</h3>
            }
            {!!this.state.schedule.length &&
            <CourseList courses={this.state.schedule}/>
            }
            {!!this.state.gpa.length && !this.props.route.shouldPrint &&
            <h3>GPA</h3>
            }
            {!!this.state.gpa.length &&
            <GpaList gpas={this.state.gpa}/>
            }
          </div>
        );
      }
      // show loading icon until componentDidMount runs
    } else if (!this.props.route.shouldPrint) {
      const refreshClass = 'fa fa-refresh fa-spin fa-3x fa-fw';
      return (
        <i className={refreshClass}/>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

Schedule.propTypes = {
  route: React.PropTypes.shape({studentsDcid: React.PropTypes.string, yearId: React.PropTypes.number})
};
