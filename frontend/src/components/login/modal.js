import { useState } from "react";
import axios from "axios";

const Modal = (props) => {
    
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    const fnameHandler = event => {
        setFName(event.target.value)
    }
    
    const lnameHandler = event => {
        setLName(event.target.value)
    }

    const emailHandler = event => {
        setEmail(event.target.value)
    }

    const passwordHandler = event => {
        setPassword(event.target.value)
    }

    const retypePasswordHandler = event => {
        setRetypePassword(event.target.value)
    }

    const singUpToggle = async () => {
        if (password != retypePassword){
            alert("Passwords do not match!")
        } else if (fname === "" ||
                   lname === "" ||
                   email === "" ||
                   password === "" ||
                   retypePassword === "") {
            alert("please fill out all input fields!")
        } else {
            
            //make axios call to backend to create new user
            try {
                console.log('making user')
                const res = await axios.post("http://localhost:8080/api/user/", {
                    username: email,
                    name: fname,
                    familyName: lname,
                    password: password,
                });
                if (res.data.success){
                    alert("Account created successfully!");
                } else {
                    alert("Account creation failed!");
                }
            } catch (err) {
                console.log(err);
            }
            props.setOpenModal(false);
        }
    }
    
    return (
        <dialog className="modal">
            <button className="modal-close" onClick={() => {props.setOpenModal(false)}}>X</button>
            <label for="fname">First name:</label>
            <input value={fname} onChange={fnameHandler} type="text" id="fname" name="fname" placeholder="First Name"></input>
            
            <label for="lname">Last name:</label>
            <input value={lname} onChange={lnameHandler} type="text" id="lname" name="lname" placeholder="Last Name"></input>
            
            <label for="email">Email:</label>
            <input value={email} onChange={emailHandler} type="text" id="email" name="email" placeholder="Email"></input>
            
            <label for="Password">Password:</label>
            <input value={password} onChange={passwordHandler} type="text" id="Password" name="Password" placeholder="Password"></input>
            
            <label for="password-retype">Retype Your Password:</label>
            <input value={retypePassword} onChange={retypePasswordHandler} type="text" id="password-retype" name="password-retype" placeholder="Password"></input>

            <button className="modal-signup" onClick={singUpToggle}>Sign Up</button>
        </dialog>
    )
}

export default Modal;