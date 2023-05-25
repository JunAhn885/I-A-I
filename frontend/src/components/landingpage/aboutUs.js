import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';

const AboutUs = (props) => {
    return (
        <div className="member">
            <img src={props.image} alt={props.name}></img>
            <h2 className="member-name">{props.name}</h2>
            <p classNmae="member role">{props.role}</p>
            <a href={props.linkedIn} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={{fontSize: '1.5rem', color: "rgb(30,48,80)"}} />
            </a>
        </div>
    )
}

export default AboutUs;