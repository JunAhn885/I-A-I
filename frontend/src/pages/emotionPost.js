import Navbar from "../components/shared/navbar";
import Emotion from "../components/emotionPost/emotion";
import { Link } from "react-router-dom"
import UserService from "../userSerivces"
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

// props should include name, page name, and list of emotions and respective images
export default function EmotionPost(props){
  
  //user information
  let user = localStorage.getItem('user');
  user = JSON.parse(user);

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
    const navigate = useNavigate();

    // state hooks
    const [content, setContent] = useState(null);
    const [emotion, setEmotion] = useState(null);
    const [isAwesomeBold, setIsAwesomeBold] = useState(false);
    const [isGoodBold, setIsGoodBold] = useState(false);
    const [isNeutralBold, setIsNeutralBold] = useState(false);
    const [isShockedBold, setIsShockedBold] = useState(false);
    const [isAngryBold, setIsAngryBold] = useState(false);
    const [isSadBold, setIsSadBold] = useState(false);


    // post request to add emotion post. Reqeust is sent only if the emotion and content state is changed
    const addEmotionPost = async () => {
      if (emotion === null){
        alert("please select an emotion!")
      } else if (content === null) {
        alert("cannot save empty notes!")
      } else {
        const response = await UserService.addEmotionPost(user.id, props.value, "Emotion", content, emotion);
        console.log(response)
        return navigate("../bonding-journal")
      }
    }

    // updates the state of the content on change
    const updateContent = event => {
      setContent(event.target.value)
    }

    const emotionElements = emotions.map(emotionObj => {
        return <Emotion setEmotion={setEmotion} emotionName={emotionObj.emotionName} emotionImageUrl={emotionObj.emotionImageUrl} />
    })

    return(
        <div className='emotion-post'>
            <div className='content-box'>
              <Navbar/>
                <h1>Hi, {user.name}, how are you feeling today?</h1>
                <div className="tab-emotionpost">
                  <h1>{props.pageName}</h1>
                </div>
                <div className='emotion-box'>
                    {emotionElements}
                </div>
                <h3>Record your thoughts</h3>
                <textarea wrap="hard" rows={3} className="emotion-post-input" value={content} onChange={updateContent}></textarea>
                <Link to="/bonding-journal"><button className="cancel-button-emotionpost">Cancel</button></Link>
                <button className="post-button-emotionpost" onClick={addEmotionPost}>Post</button>
            </div>
        </div>
    )
}