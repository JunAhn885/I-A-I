import Navbar from "../components/shared/navbar";
import { Link } from "react-router-dom"

const GratitudePost = (props) => {
    return (
        <div className="gratitude-post">
            <Navbar/>
            <h1>Hi, {props.name}, are you grateful for anything your partner did for you today?</h1>
            <div className="tab-gratitudepost">
                  <h1>{props.pageName}</h1>
            </div>
            <input className="gratitude-post-input" type="text"></input>
            <button className="cancel-button-gratitudepost"><Link to="/bonding-journal">Cancel</Link></button>
            <button className="post-button-gratitudepost"><Link to="/bonding-journal">Post</Link></button>
        </div>
    )
}

export default GratitudePost;