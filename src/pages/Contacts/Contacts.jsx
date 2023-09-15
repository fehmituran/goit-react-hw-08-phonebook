import React from 'react';
import { Container, Form, Phonebook, Title } from './Contacts.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  return (
    <>
    <Container>
    <Form>
        <ContactForm/>
    </Form>
    <Phonebook>

        <Title>
            <RecentActorsIcon fontSize="large"/> Contact List
        </Title>
        <Filter/>
        <ContactList />
   
        
    </Phonebook>
        
    </Container>
   
  </>
  )
}

export default Contacts
