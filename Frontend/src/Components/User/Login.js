import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import  Validation from './Loginvalidatin';
import axios from 'axios';


function Login() {
    const [values, setValues] =useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors]=useState({

    })

    const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
      
        if (!errors.email && !errors.password) {
          axios
            .post('http://localhost:8081/login', values)
            .then((res) => {
              if (res.status === 200) {
                // Successful login (status code 200)
                navigate('/dashboard');
              } else if (res.status === 404) {
                // No record found (status code 404)
                alert('No Record Found');
              } else {
                // Handle other error cases here
                console.log('Login failed:', res.statusText);
              }
            })
            .catch((err) => {
              // Handle network or other errors
              console.error('Login error:', err);
            });
        }
      };
      

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#F87060' }}>
      <div className='bg-white p-3 rounded w-25'>
        <form action=""onSubmit={handleSubmit}>
            <h2>Sign-In</h2>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder="Enter Your Email" name='email'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.email&& <span className='text-danger'> {errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder="Enter Your Password"name='password'
                onChange={handleInput}  className='form-control rounded-0'/>
                {errors.password&& <span className='text-danger'> {errors.password}</span>}
            </div>
            <button type="submit" className='btn btn-success w-100  rounded-0' style={{ backgroundColor: '#102542', borderColor: '#102542' }}><strong>Login</strong></button>
            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
