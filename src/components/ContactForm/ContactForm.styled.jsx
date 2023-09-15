import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 25px;


  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
`;

export const FormField = styled.div`
  padding-right: 20px;
  margin-bottom: 10px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;

  border: none;
  border-bottom: 1px solid #2f4f4f;
  padding: 10px 10px;

  &:focus {
    outline: none;
  }
  margin-top: 15px;
  
`;

export const Span = styled.span`
  font-size: 18px;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border:none;
  border-radius: 5px;
  color: #fff;
  background-color: #938eef;
  letter-spacing: 2px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #fff;
    color: orangered;
  }

  cursor: pointer;
`;

export const ButtonField = styled.div`
  display: flex;
  justify-content: flex-end;
`;