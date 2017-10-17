import React, { Component } from 'react';
import PropTypes from 'prop-types';

import addressFormat from 'address-format';
import PhoneList from './PhoneList';
import ContactAddress from './ContactAddress';

export default class Contact extends Component {

  render() {
    const panelClass = 'panel panel-default';
    const panelId = `collapse${this.props.index}`;
    const panelIdSelector = `#collapse${this.props.index}`;
    const contactAnchorClass = 'collapsed btn-block';

    // if index is 0, this is the first contact in the list, so
    // we should give it the expanded class. If it's not the first in the list,
    // give it the "collapsed" class
    const panelContainerClass = this.props.index ? 'panel-collapse collapse' : 'panel-collapse collapse in';

    const faEnvelope = 'fa fa-envelope';
    const faLegal = 'fa fa-gavel';

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
    const hasTwoUniqueAddresses = !!fullMailingAddress && !!fullResidenceAddress && fullMailingAddress !== fullResidenceAddress;

    let address1;
    let address2;

    if (hasAddress) {
      if (hasTwoUniqueAddresses) {
        address1 = <ContactAddress title='Mailing Address' address={fullMailingAddress}/>;
        address2 = <ContactAddress title='Residence Address' address={fullResidenceAddress}/>;
      } else {
        if (fullMailingAddress) {
          address1 = <ContactAddress title='Address' address={fullMailingAddress}/>;
        }
        address1 = <ContactAddress title='Address' address={fullResidenceAddress}/>;
      }
    }

    if (!this.props.shouldPrint) {
      return (
        <div className={panelClass}>
          <div className="panel-heading" role="tab" id="collapseListGroupHeading1">
            <h4 className="panel-title">
              <a href={panelIdSelector} className={contactAnchorClass} role="button" data-toggle="collapse"
                 aria-expanded="false" aria-controls="collapseListGroup1">
                {this.props.legal_guardian &&
                <i className={faLegal} data-toggle="tooltip" data-placement="top" title="Legal Guardian"
                   aria-hidden="true"/>
                }
                <span className="contact-header-name">
                  {this.props.first_name} {this.props.last_name}
                  {!!this.props.relationship && '(' + this.props.relationship + ')'}
              </span>
              </a>
            </h4>
          </div>

          <div id={panelId} className={!this.props.shouldPrint && panelContainerClass} role="tabpanel"
               aria-labelledby="collapseListGroupHeading1"
               aria-expanded="true">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-6 col-xs-6">
                  {address1}
                  {address2}
                  {this.props.employer &&
                  <div>
                    <strong>Employer:</strong> {this.props.employer}
                  </div>
                  }
                </div>
                <div className="col-md-6 col-xs-6">
                  {this.props.email_address &&
                  <div>
                    <i className={faEnvelope} aria-hidden="true"/> {this.props.email_address}
                  </div>
                  }
                  <PhoneList phones={this.props.phones} shouldPrint={this.props.shouldPrint} />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="col-xs-3">
              <div>
                {this.props.legal_guardian &&
                <i className={faLegal} data-toggle="tooltip" data-placement="top" title="Legal Guardian"
                   aria-hidden="true"/>
                }
                {this.props.first_name} {this.props.last_name}
              </div>
              <div className="relationship">
                {!!this.props.relationship && this.props.relationship}
              </div>
            </div>
            <div className="col-xs-4">
              {address1}
              {address2}
              {this.props.employer &&
              <div>
                <strong>Employer:</strong> {this.props.employer}
              </div>
              }
            </div>
            <div className="col-xs-5">
              {this.props.email_address &&
              <div>
                <i className={faEnvelope} aria-hidden="true"/> {this.props.email_address}
              </div>
              }
              <PhoneList phones={this.props.phones} shouldPrint={this.props.shouldPrint}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

Contact.propTypes = {
  index: PropTypes.number,
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
  }),
  legal_guardian: PropTypes.bool,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  relationship: PropTypes.string,
  employer: PropTypes.string,
  email_address: PropTypes.string,
  phones: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.string,
    type: PropTypes.string,
    priority: PropTypes.number
  })),
  shouldPrint: PropTypes.bool
};
