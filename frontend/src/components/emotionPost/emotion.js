import {useEffect, useState} from 'react'

export default function Emotion(props){
    
    const [isBold, setIsBold] = useState(false)

    const emotionHandler = () => {
        props.setEmotion(props.emotionImageUrl);
        setIsBold(true);
    }
    
    useEffect(() => {
        setIsBold(props.emotion === props.emotionImageUrl)
    }, [props.emotion, props.emotionImageUrl])

    return(
    <div className="emotion">
        <img className={isBold ? 'bold-image' : ''} src={props.emotionImageUrl} onClick={emotionHandler} alt="emotion"></img>
        <p className={isBold ? 'bold-text' : ''}>{props.emotionName}</p>
    </div>
 )
}