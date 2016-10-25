import React, { Component } from 'react';

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
  excused: React.PropTypes.number,
  unexcused: React.PropTypes.number,
  tardy: React.PropTypes.number,
};
