import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Gpa extends Component {
  render() {
    return (
      <div className="col-md-1 col-1 gpa-container">
        <h4>{this.props.term}</h4>
        <h3>{this.props.gpa}</h3>
      </div>
    );
  }
}

Gpa.propTypes = {
  term: PropTypes.string,
  gpa: PropTypes.number
};
