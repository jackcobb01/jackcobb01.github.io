// imports
import React from 'react';
import Title from '../components/Title.js';
import PersonalPicture from '../images/personalPicture.png';
import '../styles/HomePage.css';

// this function returns the main header for the website
function HomePage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="HomePage">
            <Title titleText="Welcome" />
            <div className="PersonalImageContainer">
                <div className="PersonalImageDecoration" />
                <div className="PersonalImage">
                    <img src={PersonalPicture} className="PersonalPicture" alt="PersonalPicture" />
                </div>
                <div className="PersonalImageDecoration" />
            </div>
            
        </div>
    );
}

// export statement
export default HomePage;
