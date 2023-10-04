import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './Signupvalidation';
import axios from 'axios';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (!errors.name && !errors.email && !errors.password && !isLoading) {
      setIsLoading(true);

      try {
        const response = await axios.post('http://localhost:8081/signup', values);

        // Check if the response indicates a successful signup (you can customize this logic)
        if (response.data === 'Signup successful') {
          navigate('/login'); // Redirect to the login page
        } else {
          console.log('Signup failed:', response.data);
        }
      } catch (error) {
        console.error('Signup error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#F87060' }}>
      <div className='bg-white p-3 rounded w-25'>
        <form onSubmit={handleSubmit}>
          <h2>Sign-Up</h2>
          <div className='mb-3'>
            <label htmlFor='name'><strong>Name</strong></label>
            <input
              type='text'
              placeholder='Enter Your Name'
              name='name'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.name && <span className='text-danger'> {errors.name}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter Your Email'
              name='email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'> {errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input
              type='password'
              placeholder='Enter Your Password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0' disabled={isLoading} style={{ backgroundColor: '#102542', borderColor: '#102542' }}>
            {isLoading ? 'Signing Up...' : 'Signup'}
          </button>
          <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
