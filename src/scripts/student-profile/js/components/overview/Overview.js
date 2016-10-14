import React, {Component} from 'react';
import SchoolDemo from './SchoolDemo';
import StudentDemo from './StudentDemo';
import Avatar from './Avatar';
import Medical from './Medical';
import ContactList from './ContactList';

export default class Overview extends Component {
  render() {
    const shouldDisplayMedical = Object.keys(this.props.route.medical).some(elem => this.props.route.medical[elem] != null);
    return (
      <div>
        <div className="row">
          <div className="col-md-2" id="avatar-container">
            <Avatar {...this.props.route.avatar} />
          </div>
          <div className="col-md-4" id="school-demo-container">
            <SchoolDemo {...this.props.route.school_demo} />
          </div>
          <div className="col-md-6" id="student-demo-container">
            <StudentDemo {...this.props.route.student_demo} />
          </div>
        </div>
        {shouldDisplayMedical &&
          <div className="row">
            <div className="col-md-12">
              <Medical {...this.props.route.medical} />
            </div>
          </div>
        }
        {this.props.route.contacts.length &&
          <div className="row">
            <ContactList contacts={this.props.route.contacts} />
          </div>
        }
      </div>
    );
  }

  componentDidMount() {
    const tooltipSelector = $('[data-toggle="tooltip"]');
    if (tooltipSelector.length) {
      tooltipSelector.tooltip();
    }
  }
}

Overview.propTypes = {
  route: React.PropTypes.shape({
    avatar: React.PropTypes.object,
    contacts: React.PropTypes.arrayOf(React.PropTypes.object),
    medical: React.PropTypes.object,
    school_demo: React.PropTypes.object,
    student_demo: React.PropTypes.object
  })
};
