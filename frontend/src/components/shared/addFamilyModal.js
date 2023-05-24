import { useState } from "react"
import UserService from "../../userSerivces";

const AddFamilyModal = (props) => {
    const [userName, setUserName] = useState("");
    console.log(userName)

    const usernameHandler = event => {
        setUserName(event.target.value)
    }

    const addUserToggle = async() => {
        const res = await UserService.addFamily(userName)
        if (res.status === 404){
            alert("User has been added succesfully!")
        } else {
            alert("Cannot find user. please enter a valid username")
        }
    }

    return (
        <>
            <div className="adduser-modal-overlay"></div>
            <dialog className="adduser-modal">
                <button className="modal-close" onClick={() => {props.setOpenModal(false)}}>X</button>
                <label for="fname">Username:</label>
                <input value={userName} onChange={usernameHandler} type="text" id="fname" name="fname" placeholder="Username"></input>
                <button className="modal-signup"onClick={addUserToggle}>Add User</button>
            </dialog>
        </>
    )
}

export default AddFamilyModal