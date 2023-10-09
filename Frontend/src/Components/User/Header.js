import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <link rel="stylesheet" type="text/css" href="Header.css" />
            <div className="header">
                <img src="./images/GMCA_LOGO.jpg" className="logo1" />&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='clg'>
                    <h3>Government MCA College Maninagar</h3>
                    <h4>Training and Placement Cell</h4>
                </div>
                <div className="align-items-right">
                    <Link to="/home">Home</Link>
                    <a href="#">Company</a>
                    <a href="#">About</a>
                    <a href="/signup">Student</a>
                    <a href="/login">Admin</a>
                </div>
            </div>
        </div>
    )
}

export default Header
