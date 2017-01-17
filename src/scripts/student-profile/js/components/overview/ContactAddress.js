import React, {Component} from 'react';

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
  title: React.PropTypes.string,
  address: React.PropTypes.string
};
