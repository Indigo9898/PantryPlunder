
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
  import Navigation from '../Screens/Navigation';
  import{
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
} from '../../firebase.js'
import React, { useState } from "react";
import ingredient from '../../Scripts/assets/ingredient';



let Login = (props) =>{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return(
        <div className='form-bg'>
            <div id='login-form'>
            <input onChange={(e) => setEmail(e.target.value)} className='user-input' type="email" placeholder='Email' /> 
            <input  onChange={(e) => setPassword(e.target.value)} className='user-input' type="password"  placeholder='Password'/>
            <button  onClick={() => logInWithEmailAndPassword(email, password)}>Login In</button>
            <p> <Link to="/signup">Don't Have A Account Sign Up Here</Link></p>
            </div>
        </div>
    )
}


export default Login;