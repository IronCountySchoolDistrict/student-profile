import React, {Component} from 'react';

export default class Gpa extends Component {
  render() {
    return (
      <div className="col-md-2">
        <h3>{this.props.term}</h3>
        <div>{this.props.gpa}</div>
      </div>
    );
  }
}

Gpa.propTypes = {
  term: React.PropTypes.string,
  gpa: React.PropTypes.number
};
