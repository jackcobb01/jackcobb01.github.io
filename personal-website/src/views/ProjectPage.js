// imports
import React from 'react';
import Title from '../components/Title.js';
import ProjectCard from '../components/ProjectCard.js';
import CobblandiaScreenshot from '../images/cobblandiaScreenshot.png';
import '../styles/ProjectPage.css';

// this function returns the main header for the website
function ProjectPage(props) {

    // state variables:
  
    // return statement
    return (
        <div className="ProjectPage">
            <Title titleText="My Work" />

            <div className="ProjectCardBlock">
                <ProjectCard cardTitle="Cobblandia" cardDateRange="Sep 2019 – May 2020" cardLink="https://github.com/jackcobb01/cobblandia" cardImage={CobblandiaScreenshot} cardDescription="Cobblandia is a procedurally generated world built through the Java Swing library. All of the artwork, from the grasslands to the towering trees, are designed by me. Map building algorithms generate biomes such as lakes, forests, and rocky outcropts to fully immerse the player into the land of Cobblandia. Movement is crisp as the player navigates around obstacles on the map. Make sure to avoid the Goblins, as if you are in their line of sight they will start to chase." cardVideo="/videos/cobblandia.mp4" />
            </div>
        </div>
    );
  
}

// export statement
export default ProjectPage;
