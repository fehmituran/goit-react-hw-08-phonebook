import React from 'react'
import { HomeContainer, Link } from './Home.styled';


const Home = () => {
    return (
        <HomeContainer>
          <h1 >
            Phonebook welcome page{'    '}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </h1>
         
         <Link to="/login">
         Please login!
      </Link>
        </HomeContainer>
      );
}

export default Home
