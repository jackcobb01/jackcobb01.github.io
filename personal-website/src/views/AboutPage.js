// imports
import React from 'react';
import '../styles/AboutPage.css';

// this function returns the main header for the website
function AboutPage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="AboutPage">
            <div className="AboutPage-header">
                <div className="AboutPage-title">
                    <div className="AboutPage-title-overlay">
                        About Me
                    </div>
                    <div className="AboutPage-title-underlay"></div>
                </div>
                <div className="AboutPage-title-right"></div>
            </div>
        </div>
    );
  
}

// export statement
export default AboutPage;
