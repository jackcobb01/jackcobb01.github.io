// imports
import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import '../styles/MainHeader.css';
import GithubIcon from '../images/githubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.png';

// this function returns the main header for the website
function MainHeader(props) {
  
    // return statement
    return (
        <>
            <div className="MainHeader">
                <div className="MainHeader-header">
                    
                    <div className={`headerButton-${props.pageSelection[0]}`} onClick={() => {window.location.pathname = "/"}} >Home</div>
                    <div className={`headerButton-${props.pageSelection[1]}`} onClick={() => {window.location.pathname = "/About"}} >About</div>
                    <div className={`headerButton-${props.pageSelection[2]}`} onClick={() => {window.location.pathname = "/Projects"}} >Projects</div>
                    <div className={`headerButton-${props.pageSelection[3]}`} onClick={() => {window.location.pathname = "/Contact"}} >Contact</div>
                    
                </div>
            </div>
            <div className="MainHeader-links">
                <div className="MainHeader-linkPictures">
                    <a href="https://github.com/jackcobb01">
                        <img src={GithubIcon} className="MainHeader-github" alt="GithubIcon" />
                    </a>
                    <a href="https://www.linkedin.com/in/jack-cobb/">
                        <img src={LinkedinIcon} className="MainHeader-linkedin" alt="LinkedinIcon" />
                    </a>
                </div>
                <div className="MainHeader-linkBar"></div>
            </div>
        </>
    );
  
}

// export statement
export default MainHeader;
