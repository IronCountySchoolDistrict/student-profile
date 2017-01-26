import React, { PropTypes, Component } from 'react';
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
          <div className="panel-group" id="contacts-accordion" aria-multiselectable="true" role="tablist">
            {contacts}
          </div>
        </div>
      );
    } else {
      return (
        <div className="contact-list col-md-12">
          {contacts}
        </div>
      );
    }
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object),
  shouldPrint: PropTypes.bool
};
