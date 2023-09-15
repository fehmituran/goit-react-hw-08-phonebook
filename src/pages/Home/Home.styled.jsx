import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`

height: calc(100vh - 200px);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`;


export const Link = styled(NavLink)`
  margin-top: 25px;
  padding: 10px;
  border: 0px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #ff4500;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    opacity: 0.8;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;