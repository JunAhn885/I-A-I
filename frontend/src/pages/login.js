import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Login() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const handleCallback = async (response) => {
    try{
      if (response.credential) {
        setToken(response.credential);
        setLoggedIn(true);
        const res = await axios.post('http://localhost:8080/auth/google', { token: response.credential });
        console.log(res)
        window.location.href='http://localhost:3000/bonding-journal';
      } 
    } catch (err) {
        console.log(err);
      }
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
        <input className="Email" type="text" placeholder="Email"></input>
        <input className="Password" type="text" placeholder="Password"></input>
        <Link to="/bonding-journal"><button className="sign-in-button">Sign in</button></Link>
        <p>Don't have an account? Sign up</p>
        <div style={{width: "20%"}} id="google-signin-button"/>
    </div>
  );
}