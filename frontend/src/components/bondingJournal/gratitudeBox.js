const GratitudeBox = (props) => {
    return (
        <div className="bonding-journal-gratitude-box">
            <h1>{props.content}</h1>
            <p>{props.author}</p>
        </div>
    )
}

export default GratitudeBox;