import { useState } from "react"
import UserService from "../../userSerivces";

const AddFamilyModal = (props) => {
    const [userName, setUserName] = useState("");

    const usernameHandler = event => {
        setUserName(event.target.value)
    }

    const addUserToggle = async() => {
        let user = JSON.parse(localStorage.getItem('user'));
        console.log('User:', user);
        try {
            const response = await UserService.updateFamily(user.id, userName);
            console.log('Response:', response);
            if (response.status === 400) {
              alert("Cannot find user. Please enter a valid username");
            } else if (response.status === 500) {
              alert("Error: " + response.data.message);
            } else if (response.status === 401) {
              alert("You must be logged in to add a user to your family");
            } else {
              alert("User added to the family");
            }
          } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return (
        <div>
            <div className="adduser-modal-overlay"></div>
            <dialog className="adduser-modal">
                <button className="modal-close" onClick={() => {props.setOpenModal(false)}}>X</button>
                <label for="fname">Username:</label>
                <input value={userName} onChange={usernameHandler} type="text" id="fname" name="fname" placeholder="Username"></input>
                <button className="modal-signup"onClick={addUserToggle}>Add User</button>
            </dialog>
        </div>
    )
}

export default AddFamilyModal