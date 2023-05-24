import { useState } from "react"
import UserService from "../../userSerivces";

const AddFamilyModal = (props) => {
    const [userName, setUserName] = useState("");
    console.log(userName)

    const usernameHandler = event => {
        setUserName(event.target.value)
    }

    const addUserToggle = async() => {
        let user = JSON.parse(localStorage.getItem('user'));
        const res = await UserService.updateFamily(user.id, userName)
        if (res.status === 400) {
            alert("Cannot find user. please enter a valid username")
        } else if (res.status === 500) {
            alert("Error: " + res.message)
        } else if (res.status === 401) {
            alert("You must be logged in to add a user to your family")
        } else {
            alert("User added to family")
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