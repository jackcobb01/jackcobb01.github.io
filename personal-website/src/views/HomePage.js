// imports
import React from 'react';
import Title from '../components/Title.js';
import '../styles/HomePage.css';

// this function returns the main header for the website
function HomePage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="HomePage">
            <Title titleText="Welcome" />
        </div>
    );
}

// export statement
export default HomePage;
