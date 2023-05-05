import Navbar from "../components/shared/navbar";
import { Link } from "react-router-dom"
import UserService from "../userSerivces"
import {useState} from 'react';


const GratitudePost = (props) => {
    
    const [content, setContent] = useState("");
    
    // update content whenever input change is detected
    const updateContent = event => {
        setContent(event.target.value);
        console.log(content);
    }

    // sending post request to the backend
    const addGratitudePost = async() => {
        // need to pass the date as a parameter
        const response = await UserService.addGratitudePost("Gratitude", content);
        this.console.log(response);
    }

    return (
        <div className="gratitude-post">
            <Navbar/>
            <h1>Hi, {props.name}, are you grateful for anything your partner did for you today?</h1>
            <div className="tab-gratitudepost">
                  <h1>{props.pageName}</h1>
            </div>
            <input className="gratitude-post-input" type="text" value={content} onChange={updateContent}></input>
            <button className="cancel-button-gratitudepost"><Link to="/bonding-journal">Cancel</Link></button>
            <button className="post-button-gratitudepost" onClick={addGratitudePost}><Link to="/bonding-journal">Post</Link></button>
        </div>
    )
}

export default GratitudePost;