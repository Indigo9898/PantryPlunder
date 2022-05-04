import ReactDOM from 'react-dom'
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
import Navigation from '../Screens/Navigation';
import { Link } from 'react-router-dom';

let SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    

    return(
        <div className='form-bg'>
            <div id='signup-form'>
                <p class='form-ident'>SignUp</p>
                <input onChange={(e) => setName(e.target.value)} className='user-input' type="text" placeholder='Name' />
                <input onChange={(e) => setEmail(e.target.value)} className='user-input' type="text" placeholder='Email' />
                <input onChange={(e) => setPassword(e.target.value)} className='user-input' type="password" placeholder='Passwords' />
                <button  onClick={() => registerWithEmailAndPassword(name, email, password)}><Link to="/">Sign Up</Link></button>
                <p> <Link to="/terms">Reads Terms And Conditions</Link></p>
            </div>
        </div>
    )
}

export default SignUp;