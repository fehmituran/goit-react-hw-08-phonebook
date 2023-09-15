import React from 'react'
import { List } from './ContactList.styled'
import ContactListItem from './ContactListItem'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    console.log(contacts)
  return (
    <List>
        {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} number={number} name={name} />
      ))}
  </List>
  )
}

export default ContactList
