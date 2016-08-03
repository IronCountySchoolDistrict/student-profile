import Contact from './Contact';
import React, {Component} from 'react';

export default class ContactList extends Component {

  render() {
    const contacts = this.props.contacts.map(contact => {
      return (
        <Contact key={contact.id} {...contact}/>
      );
    });

    const shouldDisplayContacts = !!this.props.contacts.length;

    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">Student Contacts</div>
          <div className="panel-body">
            {
              (() => {
                if (shouldDisplayContacts) {
                  return contacts;
                } else {
                  return 'This student has no contacts'
                }
              })()
            }
          </div>
        </div>
      </div>
    );
  }
}
