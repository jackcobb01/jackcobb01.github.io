// imports
import React from 'react';
import '../styles/Title.css';

// this function returns the main header for the website
function Title(props) {

    // state variables:
  
    // return statement
    return (
        <div className="Title-header">
            <div className="Title-main">
                <div className="Title-overlay">
                    {props.titleText}
                </div>
                <div className="Title-underlay"></div>
            </div>
            <div className="Title-right"></div>
        </div>
    );
  
}

// export statement
export default Title;
