// imports
import React from 'react';
import Title from '../components/Title.js';
import UniversityCrest from '../images/universityWaterlooCrest.png';
import HighschoolCrest from '../images/applebyCollegeCrest.png';
import InterestPictureOne from '../images/interestPictureOne.jpeg';
import InterestPictureTwo from '../images/interestPictureTwo.jpeg';
import InterestPictureThree from '../images/interestPictureThree.jpeg';
import '../styles/AboutPage.css';

// this function returns the main header for the website
function AboutPage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="AboutPage">
            <Title titleText="About Me" />

            <div className="AboutCardBlock">
                <div className="CardBox">
                    <div className="CardBoxTitle">
                        <div className="CardBoxTitleName">
                            University
                        </div>
                        <div className="CardBoxTitleDressing"/>
                    </div>
                    <div className="CardBoxBody">
                        <img src={UniversityCrest} className="CrestPicture" alt="CrestPicture" />
                        <div className="CardDescription">
                            <div className="CardDegreeCaption">
                                <div className="CardDegreeCaptionDressing"/>
                                <div className="CardDegreeCaptionText">Honours Bachelor of Computer Science</div>
                            </div>
                            <div className="CardDegreeCaption">
                                <div className="CardDegreeCaptionDressing"/>
                                <div className="CardDegreeCaptionText">Co-Operative Education</div>
                            </div>
                            <div className="CardDegreeCaption">
                                <div className="CardDegreeCaptionDressing"/>
                                <div className="CardDegreeCaptionText">Minor in Economics</div>
                            </div>
                            <div className="CardDescriptionDressing">
                                * * *
                            </div>
                            <div className="CardDescriptionText">
                                I feel proud and grateful to have the opportunity to study at the University of Waterloo. To work in an environment that promotes collaboration and highlights the importance of innovation is a luxury and critical to my development as an industry professional. My favourite courses covered thus far include CS 241 - Foundations of Sequential Programs, and CS 349 - User Interfaces. CS 241 covers a series of assignments for building a program that compiles C++ code and later assembles to binary, which was a great opportunity to apply engineering strategies. For me CS 349 was a great opporunity to sharpen my front-end design skills and learn tactics for developing smart interfaces.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CardBox">
                    <div className="CardBoxTitle">
                        <div className="CardBoxTitleName">
                            Highschool
                        </div>
                        <div className="CardBoxTitleDressing"/>
                    </div>
                    <div className="CardBoxBody">
                    <img src={HighschoolCrest} className="CrestPicture" alt="CrestPicture" />
                        <div className="CardDescription">
                            <div className="CardDegreeCaption">
                                <div className="CardDegreeCaptionDressing"/>
                                <div className="CardDegreeCaptionText">Model United Nations Club</div>
                            </div>
                            <div className="CardDegreeCaption">
                                <div className="CardDegreeCaptionDressing"/>
                                <div className="CardDegreeCaptionText">Bronze Duke of Edinburgh</div>
                            </div>
                            <div className="CardDegreeCaption">
                                <div className="CardDegreeCaptionDressing"/>
                                <div className="CardDegreeCaptionText">Varsity Soccer</div>
                            </div>
                            <div className="CardDegreeCaption">
                                <div className="CardDegreeCaptionDressing"/>
                                <div className="CardDegreeCaptionText">Varsity Rugby</div>
                            </div>
                            <div className="CardDescriptionDressing">
                                * * *
                            </div>
                            <div className="CardDescriptionText">
                                Appleby College was an extrodinary experience and defined the beginnings of my hard work ethic and approach to excellence. From meeting life-long friends to exploring the far reaches of what academics has to offer, I will never forget my highschool education. Model United Nations was my opportunity to discuss global issues and strengthen my public speeking skills. I spent a great deal of time training and playing for the varisty soccer and rugby teams. When it came to highschool sports, I loved the competition and teamwork it took to win and taste gold.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="CardBox">
                    <div className="CardBoxTitle">
                        <div className="CardBoxTitleName">
                            Interests
                        </div>
                        <div className="CardBoxTitleDressing"/>
                    </div>
                    <div className="InterestBoxBody">
                        <img src={InterestPictureOne} className="InterestPicture" alt="InterestPicture" />
                        <img src={InterestPictureTwo} className="InterestPicture" alt="InterestPicture" />
                        <img src={InterestPictureThree} className="InterestPicture" alt="InterestPicture" />
                    </div>
                </div>
            </div>
        </div>
    );
  
}

// export statement
export default AboutPage;
