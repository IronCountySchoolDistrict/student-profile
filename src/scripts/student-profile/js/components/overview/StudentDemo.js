import React, {Component} from 'react';
import addressFormat from 'address-format';
import DemoAddress from './DemoAddress';

export default class StudentDemo extends Component {
  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
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
          address1 = <DemoAddress title='Mailing Address' address={fullMailingAddress} />;
          address2 = <DemoAddress title='Residence Address' address={fullResidenceAddress} />;
      } else {
        address1 = <DemoAddress title='Address' address={fullMailingAddress} />;
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
          <span className="field-label">Mother: </span>
          <span className="field-value">{this.props.mother}</span>
        </div>
        <div className="field-row">
          <span className="field-label">Father: </span>
          <span className="field-value">{this.props.father}</span>
        </div>
        {address1}
        {address2}
        {(this.props.doctor.name || this.props.doctor.phone) &&
          <div className="field-row">
            <span className="field-label">Doctor: </span>
            <span className="field-value">
              {this.props.doctor.name}
              <div>
                {this.props.doctor.phone && <i className={fontAwesomePhone} aria-hidden="true"></i>} {this.props.doctor.phone}
              </div>
            </span>
          </div>
        }
      </div>
    );
  }
}

StudentDemo.propTypes = {
  doctor: React.PropTypes.shape({
    name: React.PropTypes.string,
    phone: React.PropTypes.string
  }),
  dentist: React.PropTypes.shape({
    name: React.PropTypes.string,
    phone: React.PropTypes.string
  }),
  dob: React.PropTypes.string,
  mother: React.PropTypes.string,
  father: React.PropTypes.string,
  mailing_address: React.PropTypes.shape({
    street: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    zip: React.PropTypes.string,
  }),
  residence_address: React.PropTypes.shape({
    street: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    zip: React.PropTypes.string,
  })
};
