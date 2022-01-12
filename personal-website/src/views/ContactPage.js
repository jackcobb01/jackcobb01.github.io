// imports
import React, {useState} from 'react';
import Title from '../components/Title.js';
import '../styles/ContactPage.css';

// this function returns the main header for the website
function ContactPage(props) {

    // state variables:
    const [subjectName, setSubjectName] = useState("");
    const [bodyText, setBodyText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (subjectName !== "" && bodyText !== "") {
            //alert(`Submitting ${subjectName} --- ${bodyText}`)
            window.location = `mailto:jackrc931@gmail.com?subject=${encodeURIComponent(subjectName)}&body=${encodeURIComponent(bodyText)}`
        }
    }
  
    // return statement
    return (
        <div className="ContactPage">
            <Title titleText="Contact Me" />

            <form className="ContactBox" onSubmit={handleSubmit}>
                    <div className="messageInformation">
                        <div className="MessageInputDressing" />
                            <div className="messageInputs">
                                <div className="messageInputHeader">Subject</div>
                                <input className="messageSubjectInput" type="text" value={subjectName} onChange={e => setSubjectName(e.target.value)}/>
                                <div className="messageInputHeader">Body</div>
                                <textarea className="messageBodyInput" value={bodyText} onChange={e => setBodyText(e.target.value)}/>
                            </div>
                        <div className="MessageInputDressing" />
                    </div>
                    <input className="sendMessageButton" type="submit" value="Send"/>
            </form> 

            <div>{subjectName}</div>
        </div>
    );
  
}

// export statement
export default ContactPage;
