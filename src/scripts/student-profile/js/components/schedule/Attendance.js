import React, { Component } from 'react';

export default class Attendance extends Component {
  render() {
    return (
      <div className="attendance">
        {this.props.excused &&
          <span>
            <strong>Excused:</strong> {this.props.excused}
          </span>
        }
        {this.props.unexcused &&
          <span>
            <strong>Unexcused:</strong> {this.props.unexcused}
          </span>
        }
        {this.props.tardy &&
          <span>
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
