import styled from 'styled-components';

export const FormFilter = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const Input = styled.input`
  width: 250px;
  border: none;
  border-bottom: 1px solid #2f4f4f;
  padding: 10px 10px;

  &:focus {
    outline: none;
  }
`;
