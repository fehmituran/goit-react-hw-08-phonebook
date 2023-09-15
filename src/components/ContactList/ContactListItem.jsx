import React from 'react';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { Item, Name, Number, Button } from './ContactList.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';

const ContactListItem = ({ id, name, number }) => {
  
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
         Notiflix.Notify.success(`${name} is removed`);
       };


  return (
    <>
     <Item>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button type="button">
        <RestoreFromTrashIcon onClick={handleDelete} />
      </Button>
    </Item>
    </>
   
  );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

export default ContactListItem;
