import React, {Component} from 'react';

export default class SchoolDemo extends Component {

  gradeMask(grade) {
    switch (grade) {
      case '0':
        return 'K';
      case '-2':
        return 'PK3';
      case '-1':
        return 'PK4';
      default:
        return grade;
    }
  }

  enrollStatusToLabel(enrollStatus) {
    if (enrollStatus === '-2') {
      return 'Inactive';
    } else if (enrollStatus === '-1') {
      return 'Pre-Registered';
    } else if (enrollStatus === '0') {
      return 'Active';
    } else if (enrollStatus === '1') {
      return 'Inactive';
    } else if (enrollStatus === '2') {
      return 'Transferred out';
    } else if (enrollStatus === '3') {
      return 'Graduated';
    } else if (enrollStatus === '4') {
      return 'Imported as Historical';
    } else {
      return 'Inactive';
    }
  }

  shouldDisplayAddress(street, city, state, zip) {
    return street || city || state || zip;
  }

  flattenPrograms(special_ed_indicator, ell_indicator) {
    let programs = [];
    if (special_ed_indicator) {
      programs.push('Special Ed');
    }
    if (ell_indicator) {
      programs.push('ELL');
    }
    return programs.join(', ');
  }

  render() {
    const flattenedPrograms = this.flattenPrograms(this.props.special_ed_indicator, this.props.ell_indicator);

    return (
      <div className="demographics">
        <div className="field-row">
          <span className="field-label">School: </span>
          <span className="field-value">{this.props.school_name}</span>
        </div>
        {this.props.home_room &&
          <div className="field-row">
            <span className="field-label">Home Room: </span>
            <span className="field-value">{this.props.home_room}</span>
          </div>
        }
        <div className="field-row">
          <span className="field-label">Grade Level: </span>
          <span className="field-value">{this.props.grade_level}</span>
        </div>
        <div className="field-row">
          <span className="field-label">Enroll Status: </span>
          <span className="field-value">{this.enrollStatusToLabel(this.props.enroll_status)}</span>
        </div>
        <div className="field-row">
          <span className="field-label">Entry Date: </span>
          <span className="field-value">{this.props.entry_date}</span>
        </div>
        <div className="field-row">
          <span className="field-label">Exit Date: </span>
          <span className="field-value">{this.props.exit_date}</span>
        </div>
        {flattenedPrograms &&
          <div className="field-row">
            <span className="field-label">Activities: </span>
            <span className="field-value">{flattenedPrograms}</span>
          </div>
        }
      </div>
    );
  }
}

SchoolDemo.propTypes = {
  special_ed_indicator: React.PropTypes.bool,
  ell_indicator: React.PropTypes.bool,
  school_name: React.PropTypes.string,
  home_room: React.PropTypes.string,
  grade_level: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  enroll_status: React.PropTypes.string,
  entry_date: React.PropTypes.string,
  exit_date: React.PropTypes.string
};
