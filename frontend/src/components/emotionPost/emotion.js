export default function Emotion(props){
    return(
    <div className="emotion">
        <img src={props.emotionImageUrl} alt="emotion"></img>
        <p className="emotion-name">{props.emotionName}</p>
    </div>
 )
}