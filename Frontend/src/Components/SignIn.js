import React, { useState } from 'react'
import './SignIn.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const [values, setvalues] = useState({
        name: '',
        enroll: '',
        email: '',
        password: ''
    })

    const [values2, setvalues2] = useState({
        email: '',
        password: ''
    })

    const handleInput = (e) => {
        setvalues(prev => ({ ...prev, [e.target.name]: [e.target.value] }));
    }

    const handleInput2 = (e) => {
        setvalues2(prev => ({ ...prev, [e.target.name]: [e.target.value] }));
    }

    // const [checkenroll, setcheckenroll] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8081/checkenroll')
    //         .then(res => setcheckenroll(res.data))
    //         .catch(err => console.log(err));
    // }, [])

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/signin');
            })
            .catch(err => console.log(err));
    }

    axios.defaults.withCredentials = true;
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/signin', values2)
            .then(res => {
                if (res.data.signin) {
                    navigate('/student');
                } else {
                    alert("No Record Found.")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="sicontainer">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={handleSubmit2}>
                        <input onChange={handleInput2} name='email' type="text" placeholder="Enter your email" />
                        <input onChange={handleInput2} name='password' type="password" placeholder="Enter your password" />
                        <a href="/signin">Forgot password?</a>
                        <input type="submit" className="button" value="Login" />
                    </form>
                    <div className="signup">
                        <span className="signup">Not Registered?
                            <label htmlFor="check">Signup</label>
                        </span>
                    </div>
                </div>
                <div className="registration form">
                    <header>Signup</header>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleInput} name='name' type="text" placeholder="Enter Your Name" />
                        <input onChange={handleInput} name='enroll' type="text" placeholder="Enter Your Enrollment No." />
                        <input onChange={handleInput} name='email' type="text" placeholder="Enter Your Email" />
                        <input onChange={handleInput} name='password' type="password" placeholder="Create A Password" />
                        {/* <input type="password" placeholder="Confirm Your Password" /> */}
                        <input type="submit" className="button" value="Signup" />
                    </form>
                    {/* {typeError && (
                        <div className="alert alert-danger" role="alert">{typeError}</div>
                    )} */}
                    <div className="signup">
                        <span className="signup">Already Registered?
                            <label htmlFor="check">Login</label>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn