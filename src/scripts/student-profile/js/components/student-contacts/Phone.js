import React, {Component} from 'react';

class Semicolon extends Component {
  render() {
    return (
      <span>:</span>
    );
  }
}

export default class Phone extends Component {
  render() {
    const typeStyle = {
      fontWeight: 'bold'
    };
    return (
      <div>
          <span style={typeStyle}>
            {this.props.phone_type}
            {this.props.phone_type ? <Semicolon /> : null}
          </span>
        {this.props.phone_number}
      </div>
    );
  }
}