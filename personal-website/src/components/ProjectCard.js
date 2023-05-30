// imports
import '../styles/ProjectCard.css';
import ReactPlayer from 'react-player';

// this function returns the main header for the website
function ProjectCard(props) {
    // props has: cardTitle, cardDateRange, cardLink, cardImage, cardDescription, cardVideo

    // return statement
    return (
        <div className="ProjectCardBox">
            <div className="ProjectCardBoxTitle">
                <div className="ProjectCardBoxTitleName">
                    {props.cardTitle}
                </div>
                <div className="ProjectCardBoxTitleInformation">
                    <div className="ProjectCardBoxDate">
                        {props.cardDateRange}
                    </div>
                    <a href="https://github.com/jackcobb01" className="ProjectCardBoxLink">
                        {props.cardLink}
                    </a>
                </div>
            </div>
            <div className="ProjectCardBoxTitleDressing"/>
            <div className="ProjectCardBoxBody">
                <img src={props.cardImage} className="ProjectScreenshot" alt="ProjectScreenshot" />
                <div className="ProjectCardDescriptionVideo">
                    <div className="ProjectCardDescription">
                        {props.cardDescription}
                    </div>
                    <ReactPlayer
                        url= {props.cardVideo}
                        width= '100%'
                        height= '100%'
                        controls = {true}
                    />
                </div>
            </div>
        </div>
    );
}

// export statement
export default ProjectCard;
