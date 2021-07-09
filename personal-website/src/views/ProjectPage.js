// imports
import React from 'react';
import '../styles/ProjectPage.css';

// this function returns the main header for the website
function ProjectPage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="ProjectPage">
            <div className="ProjectPage-header">
                <div className="ProjectPage-title">
                    <div className="ProjectPage-title-overlay">
                        My Work
                    </div>
                    <div className="ProjectPage-title-underlay"></div>
                </div>
                <div className="ProjectPage-title-right"></div>
            </div>
        </div>
    );
  
}

// export statement
export default ProjectPage;
