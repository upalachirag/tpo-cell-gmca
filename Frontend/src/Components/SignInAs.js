import React from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom'

const SignInAs = () => {

    const navigate = useNavigate();
    const signin = () => {
        navigate('/signin');
    }
    const asignin = () => {
        navigate('/asignin');
    }
    return (
        <>
            <div className="sicontainer">
                <div className="login form">
                    <header>Sign In As</header>
                    <form >
                        <input type='button' onClick={signin} className="button" value="Student" ></input>
                        <header>OR</header>
                        <input type='button' onClick={asignin} className="button" value="Admin" ></input>
                    </form>

                </div>
            </div>
        </>
    )
}

export default SignInAs