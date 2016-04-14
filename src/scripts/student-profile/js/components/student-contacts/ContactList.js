import Contact from './Contact';
import React, {Component} from 'react';

export default class ContactList extends Component {
  render() {

    const contacts = this.props.contacts.map(contact => {
      return (
        <Contact key={contact.id} {...contact}/>
      );
    });

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Student Contacts</div>
        <div className="panel-body">{contacts}</div>
      </div>
    );
  }
}