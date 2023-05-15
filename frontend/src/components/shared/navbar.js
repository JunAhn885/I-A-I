import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <div className='navbar'>
            <Link to="/bonding-journal"><li>Bonding Journal</li></Link>
            <Link to="/family-log"><li>Family Log</li></Link>
            <li>Log Out</li>
        </div>     
    )
}