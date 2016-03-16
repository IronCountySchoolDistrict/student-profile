import Phone from './Phone';
import React, { Component } from 'react';

export default class PhoneList extends Component{
  render() {
    const phones = this.props.phones.map(phone => {
    	return (
    		<Phone phone_type={phone.phone_type} phone_number={phone.phone_number} />
    	);
    });

    return (
    	<div>
    		{phones}
    	</div>
    );
  }
}