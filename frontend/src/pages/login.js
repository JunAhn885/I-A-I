import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Modal from '../components/login/modal'

export default function Login(props) {

  // authentication states
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Sign up modal states
  const [openModal, setOpenModal] = useState(false);


  const navigate = useNavigate();

  const handleCallback = async (response) => {
    const userObject = jwtDecode(response.credential);
    console.log('userObject', userObject);
    try{
      if (response.credential) {
        const res = await axios.post('https://squid-app-hq6q4.ondigitalocean.app/auth/google', {token: response.credential}, {withCredentials: true});
        const setCookieHeader = res.headers['set-cookie'];
        console.log('Set-Cookie Header:', setCookieHeader);
        if (res.data.success) {
          setLoggedIn(true);
          console.log('response in frontend', res);
          let meta = {id: res.data.user._id, name: res.data.user.name, familyName: res.data.user.familyName};
          localStorage.setItem('username', res.data.user.username);
          localStorage.setItem('user', JSON.stringify(meta)); //need to clear cache on logout
          navigate('/bonding-journal');
        }
      } 
    } catch (err) {
        console.log(err);
        console.log('Something went wrong with Google login');
        console.log(errorMessage);
    }
  }

  // handeler for normal login
  const handleLogin = async () => {
    try {
      const res = await axios.post('https://squid-app-hq6q4.ondigitalocean.app/auth/login', { username: username, password: password });
      if (res.data.success) {

        let meta = {id: res.data.user._id, name: res.data.user.name, familyName: res.data.user.familyName};
        localStorage.setItem('username', res.data.user.username);
        localStorage.setItem('user', JSON.stringify(meta)); //need to clear cache on logout
        navigate('/bonding-journal');;
      } else {
        console.log('Login failed');
        alert(res.data.message);
      }
    } catch (err) {
      //alert('login failed')
      console.log(err);
    }
  }
  
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
      window.google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          cancel_on_tap_outside: false,
          callback: handleCallback
      });

      window.google.accounts.id.renderButton(document.getElementById("google-signin-button"), { 
        theme: "outline", 
        size: "large" }
      );
  }, []);

  return (
    <div className="Login-Box">
        <h1>Login to your account</h1>
        <input onChange={handleUsernameChange} className="Email" type="text" placeholder="Email"></input>
        <input onChange={handlePasswordChange} className="Password" type="text" placeholder="Password"></input>
        <button className="signin-button" onClick={handleLogin}>Sign in</button>
        <div id="google-signin-button"/>
        <p>Don't have an account? <button onClick={()=> {setOpenModal(true)}}>Sign up</button></p>
        {openModal && <Modal setOpenModal={setOpenModal}/>}
        <div id="google-signin-button"/>
    </div>
  );
}