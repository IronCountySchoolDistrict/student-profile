import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Phone extends Component {

  getIconClass(phoneType) {
    if (phoneType === 'Cell') {
      return 'fa fa-mobile fa-lg';
    }
    if (phoneType === 'Home') {
      return 'fa fa-home';
    }
    if (phoneType === 'Work') {
      return 'fa fa-building-o';
    }
  }

  render() {
    return (
      <div>
        <i className={this.getIconClass(this.props.type)} aria-hidden="true" /> {this.props.number}
      </div>
    );
  }
}

Phone.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string.isRequired,
  priority: PropTypes.number
};

//test