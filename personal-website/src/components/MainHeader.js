// imports
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainHeader.css';
import GithubIcon from '../images/githubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.png';

// this function returns which header tab is intially clicked:
function initializeActivatedTab(typeClicked) {
    const lastPathItem = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    if ((typeClicked === 0 && lastPathItem === "") ||
        (typeClicked === 1 && lastPathItem === "about") ||
        (typeClicked === 2 && lastPathItem === "projects") ||
        (typeClicked === 3 && lastPathItem === "contact")) {
        return true
    }
    else {
        return false;
    }
}

// this function returns the main header for the website
function MainHeader(props) {

    // state variables:
    const [homeClicked, setHomeClicked] = useState(initializeActivatedTab(0));
    const [aboutClicked, setAboutClicked] = useState(initializeActivatedTab(1));
    const [projectsClicked, setProjectsClicked] = useState(initializeActivatedTab(2));
    const [contactClicked, setContactClicked] = useState(initializeActivatedTab(3));

    // function for handling header button clicks
    function handleHeaderClick(typeClicked) {
        setHomeClicked(false);
        setAboutClicked(false);
        setProjectsClicked(false);
        setContactClicked(false);
        if (typeClicked === 0) {
            setHomeClicked(true);
        }
        else if (typeClicked === 1) {
            setAboutClicked(true);
        }
        else if (typeClicked === 2) {
            setProjectsClicked(true);
        }
        else {
            setContactClicked(true);
        }
    }
  
    // return statement
    return (
        <>
            <div className="MainHeader">
                <div className="MainHeader-header">
                    <Link className={`headerButton-${homeClicked}`} onClick={() => handleHeaderClick(0)} to="/">
                        Home
                    </Link>
                    <Link className={`headerButton-${aboutClicked}`} onClick={() => handleHeaderClick(1)} to="/about">
                        About
                    </Link>
                    <Link className={`headerButton-${projectsClicked}`} onClick={() => handleHeaderClick(2)} to="/projects">
                        Projects
                    </Link>
                    <Link className={`headerButton-${contactClicked}`} onClick={() => handleHeaderClick(3)} to="/contact">
                        Contact
                    </Link>
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
