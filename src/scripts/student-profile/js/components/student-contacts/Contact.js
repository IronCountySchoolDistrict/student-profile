import PhoneList from './PhoneList';
import React, {Component} from 'react';

export default class Contact extends Component {
  toLegalGuardianYesNo(isLegalGuardian) {
    if (isLegalGuardian == '1') {
      return 'Yes';
    } else if (isLegalGuardian == '0') {
      return 'No';
    }
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            {this.props.contactData.priority} - {this.props.contactData.first_name} {this.props.contactData.last_name} ({this.props.contactData.relationship})
          </div>
          <div className="panel-body">
            <table className="table table-condensed table-hover overview-table">
              <tbody>
              <tr>
                <td>
                  Legal Guardian
                </td>
                <td>
                  {this.toLegalGuardianYesNo(this.props.contactData.legal_guardian)}
                </td>
              </tr>
              <tr>
                <td>
                  Residence Address
                </td>
                <td>
                  {this.props.contactData.residence_street} {this.props.contactData.residence_city}, {this.props.contactData.residence_state} {this.props.contactData.residence_zip}
                </td>
              </tr>
              <tr>
                <td>
                  Mailing Address
                </td>
                <td>
                  {this.props.contactData.mailing_street} {this.props.contactData.mailing_city}, {this.props.contactData.mailing_state} {this.props.contactData.mailing_zip}
                </td>
              </tr>
              <tr>
                <td>
                  Email
                </td>
                <td>
                  {this.props.contactData.email_address}
                </td>
              </tr>
              <tr>
                <td>
                  Phones
                </td>
                <td>
                  <PhoneList phones={this.props.contactData.phone}/>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}