import React, {Component} from 'react';

export default class GradesHeader extends Component {
  render() {
    return (
      <div>
        {this.props.headerText}
      </div>
    );
  }
}