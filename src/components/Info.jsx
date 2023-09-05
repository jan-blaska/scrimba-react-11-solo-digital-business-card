import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Info() {
    return (
        <>
            <img src="/profile-pic.jpg" alt="my profile picture" className="info--img"/>
            <h1 className="info--name">Jan Blaška</h1>
            <h4 className="info--role">Frontend Developer</h4>
            <p className="info--website">janblaska.website</p>
            <div className="info--buttons">
                <button className="email-btn">
                    <FontAwesomeIcon icon={faEnvelope} style={{marginRight: "5px"}}/>
                    Email
                </button>
                <button className="linkedin-btn">
                    <FontAwesomeIcon icon={faLinkedin} style={{marginRight: "5px"}}/>
                    LinkedIn
                </button>
                
                
            </div>
        </>
    )
}

