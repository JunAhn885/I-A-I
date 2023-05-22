import { Link } from "react-router-dom"
import axios from 'axios';

export default function Navbar(){
    const handleLogout = async () => {
        localStorage.removeItem('user');
        localStorage.removeItem('username');
        let res = await axios.get('http://localhost:8080/logout', {withCredentials: true});
        console.log(res);
    }
    return (
        <div className='navbar'>
            <Link to="/bonding-journal"><li>Bonding Journal</li></Link>
            <Link to="/family-log"><li>Family Log</li></Link>
            <Link to="/" onClick={handleLogout}><li>Log Out</li></Link>
        </div>     
    )
}