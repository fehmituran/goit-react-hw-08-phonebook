import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  FormContainer,
  FormField,
  Label,
  Input,
  Span,
  Button,
  ButtonField,
} from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.some(contact => {
        return contact.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      return Notiflix.Notify.failure(`${name} is already in your Book`);
    }

    dispatch(addContact({ name, number }));

    Notiflix.Notify.success(`${name} is added`);
    resetForm();
  };

  return (
    <Formik>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <FormField>
            <Label>
              <Span>Name</Span>
              <Input
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </Label>
          </FormField>
          <FormField>
            <Label>
              <Span>Phone Number</Span>
              <Input
                type="tel"
                placeholder="Enter phone number"
                name="number"
                value={number}
                onChange={handleChange}
                required
              />
            </Label>
          </FormField>
          <ButtonField>
            <Button type="submit">Add Contact</Button>
          </ButtonField>
        </FormContainer>
      </Form>
    </Formik>
  );
};

export default ContactForm;
