import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width:100%;

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 15px 20px;
  margin-bottom: 16px;
  background-color: #263038;
  box-shadow: 0 10px 15px gray;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;


  &.active {
    color: white;
    background-color: orangered;
  }
`;


export const Image = styled.img`
border: 1px solid #fff;
border-radius: 50%;
`;

export const Span = styled.span`
color: #fff;
font-weight: 700;
font-size: 24px;
`;