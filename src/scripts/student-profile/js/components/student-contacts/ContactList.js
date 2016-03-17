import Contact from './Contact';
import React, {Component} from 'react';

export default class ContactList extends Component {
  render() {

    const contacts = this.props.contacts.map(contact => {
      return (
          <Contact key={contact.id} contactData={contact}/>
      );
    });

    return (
        <tbody>
        {contacts}
        </tbody>
    );
  }
}