// imports
import React, {useState} from 'react';
import '../styles/MainHeader.css';
import GithubIcon from '../images/githubIcon.png';
import LinkedinIcon from '../images/linkedinIcon.png';

// this function returns the main header for the website
function MainHeader(props) {

    // state variables:
    const [homeClicked, setHomeClicked] = useState(true);
    const [aboutClicked, setAboutClicked] = useState(false);
    const [projectsClicked, setProjectsClicked] = useState(false);
    const [contactClicked, setContactClicked] = useState(false);

    // function for handling header button clicks:
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
                    <div className={`headerButton-${homeClicked}`} onClick={() => {handleHeaderClick(0); props.pageSelection(0)}} >Home</div>
                    <div className={`headerButton-${aboutClicked}`} onClick={() => {handleHeaderClick(1); props.pageSelection(1)}} >About</div>
                    <div className={`headerButton-${projectsClicked}`} onClick={() => {handleHeaderClick(2); props.pageSelection(2)}} >Projects</div>
                    <div className={`headerButton-${contactClicked}`} onClick={() => {handleHeaderClick(3); props.pageSelection(3)}} >Contact</div>
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
