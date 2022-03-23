
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
  import Navigation from '../Screens/Navigation';

let Login = (props) =>{
    return(
        <div className='form-bg'>
            <div id='login-form'>
            <input className='user-input' type="email" placeholder='Email' /> 
            <input className='user-input' type="password"  placeholder='Password'/>
            <button>Login In</button>
            <p> <Link to="/signup">Don't Have A Account Sign Up Here</Link></p>
            </div>
        </div>
    )
}


export default Login;