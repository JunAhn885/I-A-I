import Navbar from "../components/shared/navbar";
import EmotionBox from "../components/bondingJournal/emotionBox";
import GratitudeBox from "../components/bondingJournal/gratitudeBox";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useState} from 'react';
import { Link } from "react-router-dom"


const BondingJournal = (props) => {
    const journal = [
        {
            type:"Gratitude", 
            content: "Today, I am thankful for the way my wife challenges me to be my best self and pushes me to reach my goals.\
            Their belief in me gives me the courage to keep going and continue to be a better mother. I feel empowered and loved!"},
        {
            type:"Emotion",
            content:"I just witnessed my baby’s first crawl, so cute,YAY!!",
            emotion:"./images/emotionPost/good.svg"
        },
        {
            type:"Emotion",
            content:"Today, I felt exhausted and overwhelmed as a new parent. My baby wouldn't stop crying, and I felt like I\
             didn't know what to do to comfort them.",
            emotion:"./images/emotionPost/sad.svg"
        }
    ]
    
    const [value, setValue] = useState(new Date());
    
    return (
        <div className="bonding-journal">
            <Navbar/>
            <img src="./images/bondingjournal/beanbag.svg" alt="beanbag" className="beanbag"></img>
            <div className="content">
                <div className="dimple"></div>
                <div className="left-content">
                    <div className="bonding-journal-calendar">
                        <Calendar onChange={setValue} value={value}/>
                    </div>
                    <div className="emotion-post-button">
                        <h1>Emotion Post</h1>
                        <div className="button"><h1><Link to="/emotion-post">+</Link></h1></div>
                    </div>
                    <div className="gratitude-post-button">
                       <h1>Gratitude Post</h1>
                       <div className="button"><h1><Link to="/gratitude-post">+</Link></h1></div>
                    </div>
                </div>
                <div className="right-content">
                    <GratitudeBox content={journal[0].content}/>
                    <EmotionBox content={journal[1].content} emotion={journal[1].emotion}/>
                    <EmotionBox content={journal[2].content} emotion={journal[2].emotion}/>
                </div>
            </div>
        </div>
    )
}

export default BondingJournal;