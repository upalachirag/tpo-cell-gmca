import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {

    return (
        <div>
            <div id="main-wrapper">
                <aside className="left-sidebar" data-sidebarbg="skin5">
                    <div className="scroll-sidebar">
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav" className="p-t-30">
                                <li className="sidebar-item">
                                    <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/student" aria-expanded="false">
                                        <i className="mdi mdi-view-dashboard"></i>
                                        <span className="hide-menu">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/student/profile" aria-expanded="false">
                                        <i className="mdi mdi-account"></i>
                                        <span className="hide-menu">Profile</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/student/placement" aria-expanded="false">
                                        <i className="mdi mdi-arrow-right"></i>
                                        <span className="hide-menu">Placement Drive</span>
                                    </Link>
                                </li>
                                {/* <li className="sidebar-item">
                                <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/student/resume" aria-expanded="false">
                                    <i className="mdi mdi-file-document"></i>
                                    <span className="hide-menu">Resume</span>
                                </Link>
                            </li> */}
                                <li className="sidebar-item">
                                    <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/student/letter" aria-expanded="false">
                                        <i className="mdi mdi-file-document"></i>
                                        <span className="hide-menu">Offer letter</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/" aria-expanded="false">
                                        <i className="mdi mdi-logout"></i>
                                        <span className="hide-menu">Logout</span>
                                    </Link>
                                </li>

                                {/* Add other menu items similarly */}
                            </ul>
                        </nav>
                    </div>
                </aside></div>
        </div>
    );
}

export default Sidebar;
