import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { set } from "mongoose";

export default function Login() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleCallback = async (response) => {
    try{
      if (response.credential) {
        setToken(response.credential);
        const res = await axios.post('http://localhost:8080/auth/google', { token: token});
        if (res.success) {
          setLoggedIn(true);
          console.log(res);
        }
        window.location.href='http://localhost:3000/bonding-journal';
      } 
    } catch (err) {
        console.log(err);
        setErrorMessage('Something went wrong with Google login');
    }
  }

  // handeler for normal login
  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8080/auth/login', { username: username, password: password });
      console.log(res)
      setLoggedIn(true);
      window.location.href='http://localhost:3000/bonding-journal';
    } catch (err) {
      console.log(err);
      setErrorMessage(res.message)
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
  
  //need a sign up page for normal login
  return (
    <div className="Login-Box">
        <h1>Login to your account</h1>
        <input onChange={handleUsernameChange} className="Email" type="text" placeholder="Email"></input>
        <input onChange={handlePasswordChange} className="Password" type="text" placeholder="Password"></input>
        <button style={{color: "black"}} onClick={handleLogin}><Link to="/bonding-journal">Sign in</Link></button>
        <p>Don't have an account? <a href="">Sign up</a></p>
        <div style={{width: "20%"}} id="google-signin-button"/>
    </div>
  );
}