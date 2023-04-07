import Navbar from "../components/shared/navbar";
import Emotion from "../components/emotionPost/emotion";

// props should include name, page name, and list of emotions and respective images
export default function EmotionPost(props){
    var emotions = [
        {
          emotionName: "Awesome",
          emotionImageUrl:"./images/emotionPost/awesome.svg"
        },
        {
          emotionName:"Good",
          emotionImageUrl:"./images/emotionPost/good.svg"
        },
        {
          emotionName:"Neutral",
          emotionImageUrl:"./images/emotionPost/neutral.svg"
        },
        {
          emotionName:"Shocked",
          emotionImageUrl:"./images/emotionPost/shocked.svg"
        },
        {
          emotionName:"Angry",
          emotionImageUrl:"./images/emotionPost/angry.svg"
        },
        {
          emotionName:"Sad",
          emotionImageUrl:"./images/emotionPost/sad.svg"
        },
        {
          emotionName:"Customize",
          emotionImageUrl:"./images/emotionPost/custom.svg"
        }
    ]
    
    const emotionElements = emotions.map(emotion => {
        return <Emotion emotionName={emotion.emotionName} emotionImageUrl={emotion.emotionImageUrl} />
    })
    
    return(
        <div className='emotion-post'>
            <Navbar/>
            <div className='content-box'>
                <h1>Hi, {props.name}, how are you feeling today?</h1>
                <h2>{props.pageName}</h2>
                <div className='emotion-box'>
                    {emotionElements}
                </div>
                <h3>Record your thoughts</h3>
                <input className="emotion-post-input" type="text"></input>
                <button className="cancel-button">Cancel</button>
                <button className="post-button">Post</button>
            </div>
        </div>
    )
}