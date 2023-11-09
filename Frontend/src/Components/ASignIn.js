import React, { useState } from 'react'
import './SignIn.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const ASignIn = () => {
    const [values2, setvalues2] = useState({
        email: '',
        password: ''
    })

    const handleInput2 = (e) => {
        setvalues2(prev => ({ ...prev, [e.target.name]: [e.target.value] }));
    }

    const navigate = useNavigate();
    
    axios.defaults.withCredentials = true;
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/asignin', values2)
            .then(res => {
                if (res.data.signin) {
                    navigate('/admin');
                } else {
                    alert("No Record Found.")
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <div className="sicontainer">
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={handleSubmit2}>
                        <input onChange={handleInput2} name='email' type="text" placeholder="Enter your email" />
                        <input onChange={handleInput2} name='password' type="password" placeholder="Enter your password" />
                        <a href="/signin">Forgot password?</a>
                        <input type="submit" className="button" value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ASignIn