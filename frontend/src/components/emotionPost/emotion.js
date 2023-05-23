import {useState} from 'react'

export default function Emotion(props){
    
    const [isBold, setIsBold] = useState(false)
    
    const emotionHandler = () => {
        props.setEmotion(props.emotionImageUrl);
        setIsBold(true);
    }
    
    return(
    <div className="emotion">
        <img src={props.emotionImageUrl} onClick={emotionHandler} alt="emotion"></img>
        <p className={isBold ? 'bold-text' : ''}>{props.emotionName}</p>
    </div>
 )
}