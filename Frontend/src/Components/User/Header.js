import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className="header">
                <img src="./images/GMCA_LOGO.jpg" className="logo1" />&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='clg'>
                    <h3>Government MCA College Maninagar</h3>
                    <h4>Training and Placement Cell</h4>
                </div>
                <div className="align-items-right">
                    <Link to="/home">Home</Link>
                    <a href="/">Company</a>
                    <a href="/">About</a>
                    <a href="/">Student</a>
                    <Link to="/admin">Admin</Link>
                </div>
            </div>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src="images/GMCA_LOGO.jpg" className='rounded' width="50" height="50" alt="" />&nbsp;&nbsp;
                <Link className="navbar-brand font-weight-bold" to="/">GMCA Training & Placement Cell</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">Student <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about">Admin <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav> */}
        </>
    )
}

export default Header
