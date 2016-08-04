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
      <div className="col-lg-4 col-md-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            {this.props.priority} {this.props.priority &&
          <span>-</span>} {this.props.first_name} {this.props.last_name} {this.props.relationship &&
          <span>({this.props.relationship})</span>}
            <span className="panel-legal-guardian label label-sm label-info">
              {this.props.legal_guardian === '1' ? 'Legal' : ''}
            </span>
          </div>
          <div className="panel-body">
            <table className="table table-condensed table-hover overview-table">
              <tbody>
              <tr>
                <td>
                  Residence Address
                </td>
                <td>
                  {this.props.residence_street} {this.props.residence_city}{!!this.props.residence_street ? ',' : ''} {this.props.residence_state} {this.props.residence_zip}
                </td>
              </tr>
              <tr>
                <td>
                  Mailing Address
                </td>
                <td>
                  {this.props.mailing_street} {this.props.mailing_city} {!!this.props.mailing_street ? ',' : ''} {this.props.mailing_state} {this.props.mailing_zip}
                </td>
              </tr>
              <tr>
                <td>
                  Email
                </td>
                <td>
                  {this.props.email_address}
                </td>
              </tr>
              <tr>
                <td>
                  Phones
                </td>
                <td>
                  <PhoneList phones={this.props.phones}/>
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
