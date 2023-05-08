import { Link } from "react-router-dom";
import axios from 'axios';
import GoogleButton from 'react-google-button';

export default function Login() {

  function handleGoogleLogin() {
    console.log("google login")
    window.location.href='http://localhost:8080/auth/google';
  }

  //need a sign up page for normal login
  return (
    <div className="Login-Box">
        <h1>Login to your account</h1>
        <input className="Email" type="text" placeholder="Email"></input>
        <input className="Password" type="text" placeholder="Password"></input>
        <button style={{color: "black"}}><Link to="/bonding-journal">Sign in</Link></button>
        <p>Don't have an account? <a href="">Sign up</a></p>
        <GoogleButton onClick={handleGoogleLogin}/>
    </div>
  );
}