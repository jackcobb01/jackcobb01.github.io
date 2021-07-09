// imports
import React from 'react';
import '../styles/HomePage.css';

// this function returns the main header for the website
function HomePage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="HomePage">
            <div className="HomePage-header">
                <div className="HomePage-title">
                    <div className="HomePage-title-overlay">
                        Welcome
                    </div>
                    <div className="HomePage-title-underlay"></div>
                </div>
                <div className="HomePage-title-right"></div>
            </div>
        </div>
    );
  
}

// export statement
export default HomePage;
