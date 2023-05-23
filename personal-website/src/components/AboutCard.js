// imports
import '../styles/AboutCard.css';

// this function returns the main header for the website
function AboutCard(props) {
    // props has: cardTitle, cardImage, cardDescription, cardCaptions = [cardCaptionA, cardCaptionB, ...]

    // return statement
    return (
        <div className="CardBox">
            <div className="CardBoxTitle">
                <div className="CardBoxTitleName">
                    {props.cardTitle}
                </div>
                <div className="CardBoxTitleDressing"/>
            </div>
            <div className="CardBoxBody">
                <img src={props.cardImage} className="CrestPicture" alt="CrestPicture" />
                <div className="CardDescription">
                    {props.cardCaptions.map(cardCaption => (
                        <div className="CardDegreeCaption">
                            <div className="CardDegreeCaptionSpace"/>
                            <div className="CardDegreeCaptionText">{cardCaption}</div>
                        </div>
                    ))}
                    <div className="CardDescriptionDressing"/>
                    <div className="CardDescriptionText">
                        {props.cardDescription}
                    </div>
                </div>
            </div>
        </div>
    );
}

// export statement
export default AboutCard;
