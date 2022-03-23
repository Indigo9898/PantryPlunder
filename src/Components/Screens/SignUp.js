import ReactDOM from 'react-dom'


let SignUp = (props) => {
    return(
        <div className='form-bg'>
            <div id='signup-form'>
                <input className='user-input' type="text" placeholder='Email' />
                <input  className='user-input' type="text" placeholder='Passwords' />
                <button>Create Account</button>
            </div>
        </div>
    )
}

export default SignUp;