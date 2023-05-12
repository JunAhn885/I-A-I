export default function Emotion(props){
    
    const emotionHandler = () => {
        props.setEmotion(props.emotionImageUrl);
    }
    
    return(
    <div className="emotion">
        <img src={props.emotionImageUrl} onClick={emotionHandler} alt="emotion"></img>
        <p className="emotion-name">{props.emotionName}</p>
    </div>
 )
}