import Navbar from "../components/shared/navbar";
import Emotion from "../components/emotionPost/emotion";
import { Link } from "react-router-dom"
import UserService from "../userSerivces"
import {useState} from 'react';

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
    
    // state hooks
    const [content, setContent] = useState("");
    const [emotion, setEmotion] = useState("");

    const addEmotionPost = async () => {
      //need to pass in date as a parameter
      const response = await UserService.addEmotionPost("Emotion", content, emotion);
      this.console.log(response)
    }

    const updateContent = event => {
      setContent(event.target.value)
      console.log(content)
    }

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
                <input className="emotion-post-input" value={content} onChange={updateContent} type="text"></input>
                <button className="cancel-button-emotionpost"><Link to="/bonding-journal">Cancel</Link></button>
                <button className="post-button-emotionpost" onClick={addEmotionPost}><Link to="/bonding-journal">Post</Link></button>
            </div>
        </div>
    )
}