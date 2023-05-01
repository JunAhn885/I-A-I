import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div className="Landingpage-Header">
            <img className="small-bean" src="./images/landingpage/small_bean.svg" alt="small bean"></img>
            <img className="large-bean" src="./images/landingpage/large_bean.svg" alt="large bean"></img>
            <img className="plant-pot" src="./images/landingpage/pot.svg" alt="plant pot"></img>
            <img className="mark-left" src="./images/landingpage/mark_left.svg" alt="mark"></img>
            <img className="mark-right-top" src="./images/landingpage/mark_right_top.svg" alt="mark"></img>
            <h1>Welcome to BeanKeeper!</h1>
            <div className="header-content">
                Grow your own beans with your partner Harvest with bonding and efficiency for a healthier family dynamic as new parents
            </div>
            <button><Link to="/login">Log in/Sign up</Link></button>
        </div>
    )
}