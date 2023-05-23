// imports
import React from 'react';
import Title from '../components/Title.js';
import UniversityCrest from '../images/universityWaterlooCrest.png';
import HighschoolCrest from '../images/applebyCollegeCrest.png';
import InterestPictureOne from '../images/interestPictureOne.jpeg';
import InterestPictureTwo from '../images/interestPictureTwo.jpeg';
import InterestPictureThree from '../images/interestPictureThree.jpeg';
import AboutCard from '../components/AboutCard.js';
import '../styles/AboutPage.css';

// this function returns the main header for the website
function AboutPage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="AboutPage">
            <Title titleText="About Me" />

            <div className="AboutCardBlock">
                <AboutCard cardTitle="University" cardImage={UniversityCrest} cardCaptions={["Honours Bachelor of Computer Science", "Co-Operative Education", "Minor in Economics"]} cardDescription="I feel proud and grateful to have the opportunity to study at the University of Waterloo. To work in an environment that promotes collaboration and highlights the importance of innovation is a luxury and critical to my development as an industry professional. My favourite courses covered thus far include CS 241 - Foundations of Sequential Programs, and CS 349 - User Interfaces. CS 241 covers a series of assignments for building a program that compiles C++ code and later assembles to binary, which was a great opportunity to apply engineering strategies. For me CS 349 was a great opporunity to sharpen my front-end design skills and learn tactics for developing smart interfaces." />
                <AboutCard cardTitle="Highschool" cardImage={HighschoolCrest} cardCaptions={["Model United Nations Club", "Bronze Duke of Edinburgh", "Varsity Soccer", "Varsity Rugby"]} cardDescription="Appleby College was an extrodinary experience and defined the beginnings of my hard work ethic and approach to excellence. From meeting life-long friends to exploring the far reaches of what academics has to offer, I will never forget my highschool education. Model United Nations was my opportunity to discuss global issues and strengthen my public speeking skills. I spent a great deal of time training and playing for the varisty soccer and rugby teams. When it came to highschool sports, I loved the competition and teamwork it took to win and taste gold." />

                <div className="InterestBox">
                    <div className="InterestBoxTitle">
                        <div className="InterestBoxTitleName">
                            Interests
                        </div>
                        <div className="InterestBoxTitleDressing"/>
                    </div>
                    <div className="InterestBoxBody">
                        <div className="InterestPictureSection">
                            <img src={InterestPictureOne} className="InterestPicture" alt="InterestPicture" />
                            Outdoors
                        </div>
                        <div className="InterestPictureSection">
                            <img src={InterestPictureTwo} className="InterestPicture" alt="InterestPicture" />
                            Fishing
                        </div>
                        <div className="InterestPictureSection">
                            <img src={InterestPictureThree} className="InterestPicture" alt="InterestPicture" />
                            Golf
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  
}

// export statement
export default AboutPage;
