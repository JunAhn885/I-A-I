export default function Emotion(props){
    console.log(props.emotionObj)
    return(
    <div className="emotion">
        <img src={props.emotionImageUrl} alt="emotion"></img>
        <p className="emotion-name">{props.emotionName}</p>
    </div>
 )
}