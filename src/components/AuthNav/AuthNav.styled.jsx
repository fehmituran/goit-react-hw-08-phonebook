import styled from "styled-components";

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #2F4F4F;
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: orangered;
    color: #fff;
  }

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

