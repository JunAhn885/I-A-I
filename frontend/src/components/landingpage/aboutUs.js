const AboutUs = (props) => {
    return (
        <div className="member">
            <img src={props.image} alt={props.name}></img>
            <h2 className="member-name">{props.name}</h2>
            <p classNmae="member role">{props.role}</p>
        </div>
    )
}

export default AboutUs;