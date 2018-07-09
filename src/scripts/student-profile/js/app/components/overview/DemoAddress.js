import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class DemoAddress extends Component {
  render() {
    return (
      <div className="field-row">
        <span className="field-label">{this.props.title}: </span>
        <span className="field-value">{this.props.address}</span>
      </div>
    );
  }
}

DemoAddress.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string
};
