import PhoneList from './PhoneList';
import React, {Component} from 'react';

function toLegalGuardianYesNo(isLegalGuardian) {
  if (isLegalGuardian == '1') {
    return 'Yes';
  } else if (isLegalGuardian == '0') {
    return 'No';
  }
}

export default class Contact extends Component {
  render() {
    const addressStyle = {
      display: 'block'
    };

    return (
      <tr>
        <td>
          {this.props.contactData.priority}
        </td>
        <td>
          {this.props.contactData.first_name} {this.props.contactData.last_name}
        </td>
        <td>
          {toLegalGuardianYesNo(this.props.contactData.legal_guardian)}
        </td>
        <td>
          {this.props.contactData.relationship}
        </td>
        <td>
          <span style={addressStyle}>{this.props.contactData.residence_street}</span>
          <span>{this.props.contactData.residence_city}, {this.props.contactData.residence_statet} {this.props.contactData.residence_zip}</span>
        </td>
        <td>
          <span style={addressStyle}>{this.props.contactData.mailing_street}</span>
          <span>{this.props.contactData.mailing_city}, {this.props.contactData.mailing_statet} {this.props.contactData.mailing_zip}</span>
        </td>
        <td>
        </td>
        <td>
          {this.props.contactData.email_address}
        </td>
        <td>
          <PhoneList phones={this.props.contactData.phone}/>
        </td>
      </tr>
    );
  }
}