import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook, faLinkedin, faSquareGithub, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSquareGithub} />
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faSquareInstagram} />
        </div>
    )
}