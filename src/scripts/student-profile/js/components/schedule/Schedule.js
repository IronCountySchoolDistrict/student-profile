import React, {Component} from 'react';
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
    const { studentsDcid, yearId } = this.props.route;
    Promise.all([loadSchedule(studentsDcid, yearId), loadGpa(studentsDcid, yearId)])
      .then(([schedule, gpa]) => {
        this.setState({
          schedule: schedule,
          gpa: gpa
        });
      });
  }

  render() {
    if (this.state.schedule || this.state.gpa) {
      return (
        <div>
          <h3>Courses</h3>
          {this.state.schedule &&
            <CourseList courses={this.state.schedule} />
          }
          <h3>GPA</h3>
          {this.state.gpa &&
            <GpaList gpa={this.state.gpa} />
          }
        </div>
      );
    } else {
      const refreshClass = 'fa fa-refresh fa-spin fa-3x fa-fw';
      return (
        <i className={refreshClass}></i>
      );
    }
  }
}

Schedule.propTypes = {
  route: React.PropTypes.shape({studentsDcid: React.PropTypes.string, yearId: React.PropTypes.number})
};
