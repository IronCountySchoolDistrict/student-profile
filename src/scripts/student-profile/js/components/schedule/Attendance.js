import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Attendance extends Component {
  render() {
    return (
      <div className="attendance">
        {this.props.excused &&
        <span className="attendance-container">
            <strong>Excused:</strong> {this.props.excused}
          </span>
        }
        {this.props.unexcused &&
        <span className="attendance-container">
            <strong>Unexcused:</strong> {this.props.unexcused}
          </span>
        }
        {this.props.tardy &&
        <span className="attendance-container">
            <strong>Tardy:</strong> {this.props.tardy}
          </span>
        }
      </div>
    );
  }
}

Attendance.propTypes = {
  excused: PropTypes.number,
  unexcused: PropTypes.number,
  tardy: PropTypes.number,
};
