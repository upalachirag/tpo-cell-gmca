import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar() {

    // const [auth, setAuth] = useState(false);
    // const [enroll, setEnroll] = useState('');
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     axios.get("http://localhost:8081/")
    //         .then(res => {
    //             if (res.data.Status === 'Success') {
    //                 setAuth(true);
    //                 setEnroll(res.data.enroll);
    //             } else {
    //                 setMessage(res.data.Message);
    //             }
    //         })
    // }, [])

    return (
        <div>
            {/* { */}
            {/* auth ? */}
            <div id="main-wrapper">
                <aside className="left-sidebar" data-sidebarbg="skin5">
                    <div className="scroll-sidebar">
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav" className="p-t-30">
                                <li className="sidebar-item">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/student" aria-expanded="false">
                                        <i className="mdi mdi-view-dashboard"></i>
                                        <span className="hide-menu">Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/student/profile" aria-expanded="false">
                                        <i className="mdi mdi-account"></i>
                                        <span className="hide-menu">Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/student/placement" aria-expanded="false">
                                        <i className="mdi mdi-arrow-right"></i>
                                        <span className="hide-menu">Placement Drive</span>
                                    </a>
                                </li>
                                {/* <li className="sidebar-item">
                                <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/student/resume" aria-expanded="false">
                                    <i className="mdi mdi-file-document"></i>
                                    <span className="hide-menu">Resume</span>
                                </a>
                            </li> */}
                                <li className="sidebar-item">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/student/letter" aria-expanded="false">
                                        <i className="mdi mdi-file-document"></i>
                                        <span className="hide-menu">Offer letter</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a className="sidebar-link waves-effect waves-dark sidebar-link" href="/" aria-expanded="false">
                                        <i className="mdi mdi-logout"></i>
                                        <span className="hide-menu">Logout</span>
                                    </a>
                                </li>

                                {/* Add other menu items similarly */}
                            </ul>
                        </nav>
                    </div>
                </aside></div>
                {/* :
                    <div className='container'>
                        <h1>{message}</h1>
                        <Link to='/signin' className="btn btn-danger">Log in</Link>
                    </div>
            } */}

        </div>
    );
}

export default Sidebar;
