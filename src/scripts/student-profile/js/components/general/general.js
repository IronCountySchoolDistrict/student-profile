import React, {Component} from 'react';


export default class General extends Component {

  toFullName(firstName, middleName, lastName) {
    var fullName = '';
    fullName += firstName;
    if (middleName) {
      fullName += ' ' + middleName;
    }
    fullName += ' ' + lastName;
    return fullName;
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  enrollStatusToLabel(enrollStatus) {
    if (enrollStatus === '0') {
      return 'Active';
    }
  }

  render() {
    const textAlignStyle = {
      textAlign: 'center'
    };
    return (
      <div className="col-md-2" style={textAlignStyle}>
        <h4>
          {this.toFullName(this.props.general.first_name, this.props.general.middle_name, this.props.general.last_name)}
        </h4>
        <div className="thumbnail">
          <img src={`/admin/stp/${this.props.general.id}ph.jpeg`} alt="Student's Photo"/>
        </div>
        <table className="table table-condensed table-hover overview-table">
          <thead>
          <tr>
            <th colSpan="3">
              General Information
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Grade
            </td>
            <td>
              {this.props.general.grade_level}
            </td>
          </tr>
          <tr>
            <td>
              Birthday
            </td>
            <td>
              {this.props.general.dob}
            </td>
          </tr>
          <tr>
            <td>
              Age
            </td>
            <td>
              {this.getAge(this.props.general.dob)}
            </td>
          </tr>
          <tr>
            <td>
              Homeroom
            </td>
            <td>
              {this.props.general.home_room}
            </td>
          </tr>
          <tr>
            <td>
              School
            </td>
            <td>
              {this.props.general.school_name}
            </td>
          </tr>
          <tr>
            <td>
              Entry Date
            </td>
            <td>
              {this.props.general.entrydate}
            </td>
          </tr>
          <tr>
            <td>
              Exit Date
            </td>
            <td>
              {this.props.general.exitdate}
            </td>
          </tr>
          </tbody>
        </table>
        <table className="table table-condensed table-hover overview-table">
          <thead>
          <tr>
            <th colSpan="3">
              Student Contacts
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Mother
            </td>
            <td>
              {this.props.general.mother}
            </td>
          </tr>
          <tr>
            <td>
              Father
            </td>
            <td>
              {this.props.general.father}
            </td>
          </tr>
          <tr>
            <td>
              Home Phone
            </td>
            <td>
              {this.props.general.home_phone}
            </td>
          </tr>
          <tr>
            <td>
              Address
            </td>
            <td>
              <div>
                {this.props.general.street}
              </div>
              <div>
                {this.props.general.city}, {this.props.general.state} {this.props.general.zip}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              Status
            </td>
            <td>
                <span className="label label-sm label-info">
                  {this.enrollStatusToLabel(this.props.general.enroll_status)}
                </span>
            </td>
          </tr>
          </tbody>
        </table>
        <table className="table table-condensed table-hover overview-table">
          <thead>
          <tr>
            <th colSpan="3">
              Additional information
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              Current Programs
            </td>
            <td>
              Basketball
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}