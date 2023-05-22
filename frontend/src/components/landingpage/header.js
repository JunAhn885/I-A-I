import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div className="Landingpage-Header">
            
            <img className="mark-left" src="./images/landingpage/mark_left.svg" alt="mark"></img>
            <img className="mark-right-top" src="./images/landingpage/mark_right_top.svg" alt="mark"></img>
            <img className="plant-pot" src="./images/landingpage/pot.svg" alt="plant pot"></img>
            <img className="header-image" src="./images/landingpage/header_image.svg" alt="parent with bean and pot"></img>
            <h1>Welcome to BeanKeeper!</h1>
            <div className="header-content">
                Raising a child is as much about the parents as it is about the child. Nutrify your little bean with love and bonding to nurture a healthier family dynamic as new parents.
            </div>
            <Link to="/login" style={{ textDecoration: 'none' }}><button className="landingpage-login-button">Log in/Sign up</button></Link>
        </div>
    )
}