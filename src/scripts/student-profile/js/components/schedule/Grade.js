import React, { Component } from 'react';

export default class Grade extends Component {
  render() {
    return (
      <div className='grade-container'>
        <div>
          {this.props.grade}
        </div>
        <div>
          {this.props.percent}
        </div>
      </div>
    );
  }
}

Grade.propTypes = {
  grade: React.PropTypes.string,
  percent: React.PropTypes.number
};
