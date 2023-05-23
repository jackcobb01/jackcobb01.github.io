// imports
import React, {useState, useEffect} from 'react';
import Title from '../components/Title.js';
import PersonalPictureOne from '../images/personalPictureOne.jpg';
import PersonalPictureTwo from '../images/personalPictureTwo.jpg';
import PersonalPictureThree from '../images/personalPictureThree.jpg';
import '../styles/HomePage.css';

// this function returns the main header for the website
function HomePage(props) {

    // state variables:
    const [pictureCounter, setPictureCounter] = useState(0);

    // change picture counter function:
    const changePictureCounter = (pictureCounter) => {
        if (pictureCounter === 2) {
            pictureCounter = 0;
        }
        else {
            pictureCounter = pictureCounter + 1;
        }
        return (pictureCounter);
    };

    useEffect(() => {
        const interval = setInterval(() =>  setPictureCounter(changePictureCounter), 8000); // changes every 1000's seconds
        return () => {
            clearInterval(interval);
        };
    }, []);
  
    // return statement
    return (
        <div className="HomePage">
            <Title titleText="Welcome" />
           
            <div className="PersonalIntro">
                {pictureCounter === 0 ?
                    <img src={PersonalPictureOne} className="PersonalPicture" alt="PersonalPicture" />
                :
                    null
                }
                {pictureCounter === 1 ?
                    <img src={PersonalPictureTwo} className="PersonalPicture" alt="PersonalPicture" />
                    :
                    null
                }
                {pictureCounter === 2 ?
                    <img src={PersonalPictureThree} className="PersonalPicture" alt="PersonalPicture" />
                    :
                    null
                }
                <div className="PersonalCaptionContainer">
                    <div className="PersonalCaptionDressing" />
                    <div className="PersonalCaption">Hello everyone and welcome to my website! I'm Jack, a fourth year computer science student at the University of Waterloo. Please take your time to learn about my work and my projects. If you have any questions, feel free to contact me.</div>
                    <div className="PersonalCaptionDressing" />
                </div>
            </div>   
        </div>
    );
}

// export statement
export default HomePage;
