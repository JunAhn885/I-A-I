import Navbar from "../components/shared/navbar";
import EmotionBox from "../components/bondingJournal/emotionBox";
import GratitudeBox from "../components/bondingJournal/gratitudeBox";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { Link } from "react-router-dom"
import UserService from "../userSerivces"

const BondingJournal = (props) => {
    
    // state hook for journal
    const [journal, setJournal] = useState([]);

    // deconstructing the date object
    const year = props.value.getFullYear();
    const month = props.value.getMonth();
    const day = props.value.getDate();

    // event handler when user clicks a date on the calendar
    const getJournalPost = async () => {
        const response = await UserService.getBJPosts(year, month, day);
        console.log(response)
        setJournal(response.data)
    }

    
    // iterate through the list received, then check each object and if the type === Gratitude, return gratitudebox component, and if Emotion, return emotionbox component. If object is empty, print "No Notes to display, add more notes".
    const boxElements = journal.length > 0 ? journal.map(item => {
        if (item.type === "Gratitude"){
          return <GratitudeBox content={item.content} />
        } else if (item.type === "Emotion"){
          return <EmotionBox content={item.content} emotion={item.emotion}/>
        } else {
          return null;
        }
      }) : <p className="no-notes-display">No Notes to display, add more notes</p>;
    
    return (
        <div className="bonding-journal">
            <Navbar/>
            <img src="./images/bondingjournal/beanbag.svg" alt="beanbag" className="beanbag"></img>
            <div className="content">
                <div className="curve-box1"></div>
                <div className="curve-box2"></div>
                <div className="left-content">
                    <div className="bonding-journal-calendar">
                        <Calendar onClick={getJournalPost} onChange={props.setValue} value={props.value}/>
                    </div>
                    <button onClick={getJournalPost}>click me</button>
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
                    {boxElements}
                </div>
            </div>
        </div>
    )
}

export default BondingJournal;
