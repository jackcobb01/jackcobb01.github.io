// imports
import React from 'react';
import Title from '../components/Title.js';
import '../styles/AboutPage.css';

// this function returns the main header for the website
function AboutPage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="AboutPage">
            <Title titleText="About Me" />
        </div>
    );
  
}

// export statement
export default AboutPage;
