import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useAuth } from 'hooks';
import { Link, Logo, Nav } from './Navigation.styled';

const Navigation = () => {

  const { isLoggedIn } = useAuth();

  return (
    <Nav >
      <Logo role="img" aria-label="Greeting icon">
             💁‍♀️ Phone Book 
            </Logo>
      <Link to="/">
      
       <HomeIcon/>
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          <ContactPhoneIcon/>
        </Link>
      )}
    </Nav>
  )
}

export default Navigation
