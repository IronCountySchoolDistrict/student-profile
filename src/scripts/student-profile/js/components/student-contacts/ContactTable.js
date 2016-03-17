import ContactList from './ContactList';
import React, {Component} from 'react';

export default class ContactTable extends Component {
  constructor(props) {
    super(props);
    this.props = {
      contacts: []
    }
  }

  render() {
    var tableStyle = {
      textSize: '14px'
    };
    return (
      <table className="table table-bordered" style={tableStyle}>
        <thead>
        <tr>
          <th>
            Priority
          </th>
          <th>
            Contact
          </th>
          <th>
            Legal Guardian
          </th>
          <th>
            Relationship
          </th>
          <th>
            Residence Address
          </th>
          <th>
            Mailing Address
          </th>
          <th>
            Employer
          </th>
          <th>
            Email
          </th>
          <th>
            Phones
          </th>
        </tr>
        </thead>
        <ContactList contacts={this.props.contacts}/>
      </table>
    );
  }
}