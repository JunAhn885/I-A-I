import Navbar from "../components/shared/navbar";
import Emotion from "../components/emotionPost/emotion";
import { Link } from "react-router-dom"

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
        }
    ]
    
    const emotionElements = emotions.map(emotion => {
        return <Emotion emotionName={emotion.emotionName} emotionImageUrl={emotion.emotionImageUrl} />
    })
    
    return(
        <div className='emotion-post'>
            <div className='content-box'>
              <Navbar/>
                <h1>Hi, {props.name}, how are you feeling today?</h1>
                <div className="tab-emotionpost">
                  <h1>{props.pageName}</h1>
                </div>
                <div className='emotion-box'>
                    {emotionElements}
                </div>
                <h3>Record your thoughts</h3>
                <input className="emotion-post-input" type="text"></input>
                <button className="cancel-button-emotionpost"><Link to="/bonding-journal">Cancel</Link></button>
                <button className="post-button-emotionpost"><Link to="/bonding-journal">Post</Link></button>
            </div>
        </div>
    )
}