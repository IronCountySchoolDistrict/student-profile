import React, {Component} from 'react';
import ContactList from './student-contacts/ContactList';
import General from './general/General';
import CourseTable from './schedule/CourseTable';

export default class StudentProfile extends Component {
  render() {
    return (
      <div>
        <div className="col-md-2" id="general-container">
          <General general={this.props.results.general}/>
        </div>
        <div className="col-md-10">
            <div id="student-contacts-container">
              <ContactList contacts={this.props.results.contacts}/>
            </div>
            <div id="schedule-container">
              <CourseTable courses={this.props.results.schedule} gpa={this.props.results.gpa}/>
            </div>
        </div>
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
