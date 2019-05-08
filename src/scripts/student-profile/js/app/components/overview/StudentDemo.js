import React, { Component } from 'react';
import PropTypes from 'prop-types';

import addressFormat from 'address-format';
import DemoAddress from './DemoAddress';

export default class StudentDemo extends Component {
  getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  render() {
    const fontAwesomePhone = 'fa fa-medkit';
    const fullMailingAddress = addressFormat({
      address: this.props.mailing_address.street,
      city: this.props.mailing_address.city,
      subdivision: this.props.mailing_address.state,
      postalCode: this.props.mailing_address.zip,
      countryCode: 'US'
    }).join(' ');

    const fullResidenceAddress = addressFormat({
      address: this.props.residence_address.street,
      city: this.props.residence_address.city,
      subdivision: this.props.residence_address.state,
      postalCode: this.props.residence_address.zip,
      countryCode: 'US'
    }).join(' ');

    const hasAddress = !!fullMailingAddress || !!fullResidenceAddress;
    const hasUniqueResidenceAddress = fullMailingAddress !== fullResidenceAddress;

    let address1;
    let address2;

    if (hasAddress) {
      if (hasUniqueResidenceAddress) {
        address1 = <DemoAddress title='Mailing Address' address={fullMailingAddress}/>;
        address2 = <DemoAddress title='Residence Address' address={fullResidenceAddress}/>;
      } else {
        address1 = <DemoAddress title='Address' address={fullMailingAddress}/>;
      }
    }

    return (
      <div className="demographics">
        <div className="field-row">
          <span className="field-label">Birthday: </span>
          <span className="field-value">{this.props.dob}</span>
        </div>
        <div className="field-row">
          <span className="field-label">Age: </span>
          <span className="field-value">{this.getAge(this.props.dob)}</span>
        </div>
        <div className="field-row">
          <span className="field-label">Parent: </span>
          <span className="field-value">{this.props.mother}</span>
        </div>
        <div className="field-row">
          <span className="field-label">Parent: </span>
          <span className="field-value">{this.props.father}</span>
        </div>
        {address1}
        {address2}
        {(this.props.doctor.name || this.props.doctor.phone) &&
        <div className="field-row">
          <span className="field-label">Doctor: </span>
          <span className="field-value">
              {this.props.doctor.name}
            <div className="doctor-phone-container">
              {this.props.doctor.phone &&
              <i className={fontAwesomePhone} aria-hidden="true"/>}
              {this.props.doctor.phone}
            </div>
            </span>
        </div>
        }
        {this.props.act_id &&
        <div className="field-row">
          <span className="field-label">ACT ID: </span>
          <span className="field-value">{this.props.act_id}</span>
        </div>
        }
      </div>
    );
  }
}

StudentDemo.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string
  }),
  dentist: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string
  }),
  dob: PropTypes.string,
  act_id: PropTypes.string,
  mother: PropTypes.string,
  father: PropTypes.string,
  mailing_address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  }),
  residence_address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
  })
};
