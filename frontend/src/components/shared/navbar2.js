import { Link } from "react-router-dom"
import { useState } from "react";
import axios from 'axios';
import AddFamilyModal from "./addFamilyModal"

export default function Navbar(){
    
    // states
    const [openModal, setOpenModal] = useState(false);

    const handleLogout = async () => {
        localStorage.removeItem('user');
        localStorage.removeItem('username');
        let res = await axios.get('http://localhost:8080/logout', {withCredentials: true});
        console.log(res);
    }
    return (
        <div className='navbar2'>
            <Link to="/bonding-journal"><li>Bonding Journal</li></Link>
            <Link to="/family-log"><li>Family Log</li></Link>
            <li onClick={()=> {setOpenModal(true)}}>Add Family Member</li>
            {openModal && <AddFamilyModal setOpenModal={setOpenModal}/>}
            <Link to="/" onClick={handleLogout}><li>Log Out</li></Link>
        </div>     
    )
}