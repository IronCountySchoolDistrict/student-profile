import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Phone from './Phone';

export default class PhoneList extends Component {

  render() {
    const phones = this.props.phones
      .filter(phone => phone.number)
      .map(phone => {
        return (
          <Phone {...phone} key={phone.id} />
        );
      });

    return (
      <div>
        {phones}
      </div>
    );
  }
}

PhoneList.propTypes = {
  phones: PropTypes.arrayOf(PropTypes.object)
};
