import styled from "styled-components";


import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #2F4F4F;
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: gray;
    color: #fff;
  }

  &.active {
    background-color: orangered;
    color: #fff;
  }
`;

export const Nav = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap:10px;
`;

export const Logo = styled.h2`
margin-right: 30px;
color: #2F4F4F;
`;