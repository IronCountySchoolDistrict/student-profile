import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class ContactAddress extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.title}: </strong> {this.props.address}
      </div>
    );
  }
}

ContactAddress.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string
};
