import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

export default function Login(props) {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const handleCallback = async (response) => {
    const userObject = jwtDecode(response.credential);
    console.log('userObject', userObject);
    try{
      if (response.credential) {
        const res = await axios.post('http://localhost:8080/auth/google', {token: response.credential}, {withCredentials: true});
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
      const res = await axios.post('http://localhost:8080/auth/login', { username: username, password: password });
      console.log(res)
      navigate('/bonding-journal');;
    } catch (err) {
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
        <button style={{color: "black"}} onClick={handleLogin}><Link to="/bonding-journal">Sign in</Link></button>
        <div id="google-signin-button"/>
        <p>Don't have an account? <a href="">Sign up</a></p>
        <div style={{width: "40%", marginLeft: "33%", marginTop: "15px"}} id="google-signin-button"/>
    </div>
  );
}