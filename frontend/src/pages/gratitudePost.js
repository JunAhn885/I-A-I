import Navbar from "../components/shared/navbar";
import { Link } from "react-router-dom"
import UserService from "../userSerivces"
import {useState} from 'react';

const GratitudePost = (props) => {
    
    const [content, setContent] = useState("");
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    // update content whenever input change is detected
    const updateContent = event => {
        setContent(event.target.value);
    }

    // sending post request to the backend
    const addGratitudePost = async() => {
        if (content === "") {
            alert("cannot save empty notes!")
        } else {
            const response = await UserService.addGratitudePost(user.id, props.value, "Gratitude", content);
            console.log(response);
        }
    }

    return (
        <div className="gratitude-post">
            <Navbar/>
            <h1>Hi, {user.name}, are you grateful for anything your partner did for you today?</h1>
            <div className="tab-gratitudepost">
                  <h1>{props.pageName}</h1>
            </div>
            <textarea wrap="hard" rows={3} className="gratitude-post-input" type="text" value={content} onChange={updateContent}></textarea>
            <Link to="/bonding-journal"><button className="cancel-button-gratitudepost">Cancel</button></Link>
            <Link to="/bonding-journal"><button className="post-button-gratitudepost" onClick={addGratitudePost}>Post</button></Link>
        </div>
    )
}

export default GratitudePost;