import React, {Component} from 'react';
import Contact from './Contact';

export default class ContactList extends Component {
  render() {
    const contacts = this.props.contacts.map((contact, index) => {
      return (
        <Contact {...contact} index={index} key={contact.id} />
      );
    });

    return (
      <div className="contact-list col-md-12">
        <h3>Contacts</h3>
        <div className="panel-group" id="contacts-accordion" aria-multiselectable="true" role="tablist">
          {contacts}
        </div>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: React.PropTypes.arrayOf(React.PropTypes.object)
};
