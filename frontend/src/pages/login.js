import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="Login-Box">
        <h1>Login to your account</h1>
        <input className="Email" type="text" placeholder="Email"></input>
        <input className="Password" type="text" placeholder="Password"></input>
        <button><Link to="/bonding-journal">Sign in</Link></button>
        <p>Don't have an account? <a href="">Sign up</a></p>
    </div>
  );
}