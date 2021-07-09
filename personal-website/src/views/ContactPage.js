// imports
import React from 'react';
import '../styles/ContactPage.css';

// this function returns the main header for the website
function ContactPage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="ContactPage">
            <div className="ContactPage-header">
                <div className="ContactPage-title">
                    <div className="ContactPage-title-overlay">
                        Contact Me
                    </div>
                    <div className="ContactPage-title-underlay"></div>
                </div>
                <div className="ContactPage-title-right"></div>
            </div>
        </div>
    );
  
}

// export statement
export default ContactPage;
