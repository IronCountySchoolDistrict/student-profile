import React, {Component} from 'react';

export default class Gpa extends Component {
  render() {
    return (
      <div className="col-md-2 gpa-container">
        <h4>{this.props.term}</h4>
        <h3>{this.props.gpa}</h3>
      </div>
    );
  }
}

Gpa.propTypes = {
  term: React.PropTypes.string,
  gpa: React.PropTypes.number
};
