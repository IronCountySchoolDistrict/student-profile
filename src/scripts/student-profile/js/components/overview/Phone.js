import React, {Component} from 'react';

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
  type: React.PropTypes.string,
  number: React.PropTypes.string.isRequired,
  priority: React.PropTypes.number
};
