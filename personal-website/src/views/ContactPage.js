// imports
import React, {useState} from 'react';
import Title from '../components/Title.js';
import '../styles/ContactPage.css';

// this function returns the main header for the website
function ContactPage(props) {

    // state variables:
    const [pictureCounter, setPictureCounter] = useState(0);
  
    // return statement
    return (
        <div className="ContactPage">
            <Title titleText="Contact Me" />

            <div className="ContactBox">
                <div className="messageInformation">
                    <div className="MessageInputDressing" />
                        <div className="messageInputs">
                            <div className="messageInputHeader">Subject</div>
                            <div className="messageInputHeader">Body</div>
                        </div>
                    <div className="MessageInputDressing" />
                </div>
                
                <div className="sendMessageButton" onClick={() => setPictureCounter(pictureCounter + 1)} >Send {pictureCounter}</div>
            </div> 
        </div>
    );
  
}

// export statement
export default ContactPage;
