import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <div className='navbar'>
            <li>Dashboard</li>
            <li>Tasks</li>
            <Link to="/bonding-journal"><li>Bonding Journal</li></Link>
            <Link to="/family-log"><li>Family Log</li></Link>
            <li>Profile</li>
        </div>     
    )
}