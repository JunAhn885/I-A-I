import Navbar from "../components/shared/navbar";
import { Link } from "react-router-dom"
import UserService from "../userSerivces"
import {useState} from 'react';

const GratitudePost = (props) => {
    
    const [content, setContent] = useState("");
    
    // update content whenever input change is detected
    const updateContent = event => {
        setContent(event.target.value);
    }

    // sending post request to the backend
    const addGratitudePost = async() => {
        const response = await UserService.addGratitudePost(props.value, "Gratitude", content);
        console.log(response);
    }

    return (
        <div className="gratitude-post">
            <Navbar/>
            <h1>Hi, {props.name}, are you grateful for anything your partner did for you today?</h1>
            <div className="tab-gratitudepost">
                  <h1>{props.pageName}</h1>
            </div>
            <input className="gratitude-post-input" type="text" value={content} onChange={updateContent}></input>
            <Link to="/bonding-journal"><button className="cancel-button-gratitudepost">Cancel</button></Link>
            <Link to="/bonding-journal"><button className="post-button-gratitudepost" onClick={addGratitudePost}>Post</button></Link>
        </div>
    )
}

export default GratitudePost;