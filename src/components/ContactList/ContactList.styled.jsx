import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  gap:10px;
  
`;


export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #fff;

 
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 600;
  width: 400px;
`;


export const Name = styled.span`
flex: 1`;

export const Number = styled.span`
  color: FireBrick;
  margin-left: 10px;
  flex:1

`;

export const Button = styled.button`
width: 25px;
height: 25px
color: red;
background-color: transparent;

border: none;
cursor:pointer;
margin-left: 10px;
color: Salmon;

&:hover {
    color: orangered;
  }

`;