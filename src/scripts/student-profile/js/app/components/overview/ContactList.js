import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';

export default class ContactList extends Component {
  render() {
    const contacts = this.props.contacts.map((contact, index) => {
      return (
        <Contact {...contact} index={index} key={contact.id} shouldPrint={this.props.shouldPrint}/>
      );
    });

    if (!this.props.shouldPrint) {
      return (
        <div className="contact-list col-md-12">
          <h3>Contacts</h3>
          <div className="accordion" id="contacts-accordion">
            {contacts}
          </div>
        </div>
      );
    } else {
      return (
        <div className="contact-list col-md-12">
          <h3>Contacts</h3>
          {contacts}
        </div>
      );
    }
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  shouldPrint: PropTypes.bool
};
