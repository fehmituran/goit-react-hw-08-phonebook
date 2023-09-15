import React from 'react'
import { FormFilter, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
// import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';

const Filter = () => {

  // const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };


    return (
        <FormFilter>
          <label>
             <Input type="name" placeholder="Please enter a name to search" name='search'  onChange={handleChange} />
          </label>
        </FormFilter>
      );
}

export default Filter
