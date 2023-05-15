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
    const [content, setContent] = useState(null);
    const [emotion, setEmotion] = useState(null);

    console.log(emotion)

    // post request to add emotion post
    const addEmotionPost = async () => {
      //need to pass in date as a parameter
      const response = await UserService.addEmotionPost(props.value, "Emotion", content, emotion);
      console.log(response)
    }

    // updates the state of the content on change
    const updateContent = event => {
      setContent(event.target.value)
    }

    const emotionElements = emotions.map(emotionObj => {
        return <Emotion emotion={emotion} setEmotion={setEmotion} emotionName={emotionObj.emotionName} emotionImageUrl={emotionObj.emotionImageUrl} />
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
                <textarea wrap="hard" rows={3} className="emotion-post-input" value={content} onChange={updateContent}></textarea>
                <Link to="/bonding-journal"><button className="cancel-button-emotionpost">Cancel</button></Link>
                <Link to="/bonding-journal"><button className="post-button-emotionpost" onClick={addEmotionPost}>Post</button></Link>
            </div>
        </div>
    )
}