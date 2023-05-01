const EmotionBox = (props) => {
    return (
        <div className="bonding-journal-emotion-box">
            <img src={props.emotion} alt="emotion type"></img>
            <h1>{props.content}</h1>
        </div>
    )
}

export default EmotionBox;