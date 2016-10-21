import React, {Component} from 'react';
import SchoolDemo from './SchoolDemo';
import StudentDemo from './StudentDemo';
import Avatar from './Avatar';
import Medical from './Medical';
import ContactList from './ContactList';
import { loadOverview } from '../../data-source';

export default class Overview extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      avatar: null
    };
  }

  render() {
    if (this.state.avatar) {
      // does medical contain any non-null values? If it doesn't,
      // don't display the medical alert
      const shouldDisplayMedical = Object.keys(this.state.medical).some(elem => this.state.medical[elem] != null);

      return (
        <div>
          <div className="row">
            <div className="col-md-2" id="avatar-container">
              <Avatar {...this.state.avatar} />
            </div>
            <div className="col-md-4" id="school-demo-container">
              <SchoolDemo {...this.state.school_demo} />
            </div>
            <div className="col-md-6" id="student-demo-container">
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
          {this.state.contacts.length !== 0 &&
            <div className="row">
              <ContactList contacts={this.state.contacts} />
            </div>
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

  componentDidMount() {
    loadOverview(this.props.route.studentsDcid).then(overview => {
      this.setState({
        avatar: overview.avatar,
        contacts: overview.contacts,
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
}

Overview.propTypes = {
  route: React.PropTypes.shape({
    studentsDcid: React.PropTypes.string,
    avatar: React.PropTypes.object,
    contacts: React.PropTypes.arrayOf(React.PropTypes.object),
    medical: React.PropTypes.object,
    school_demo: React.PropTypes.object,
    student_demo: React.PropTypes.object
  })
};
