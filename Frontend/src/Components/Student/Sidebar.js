import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
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

            </div>
        );
    }
}

export default Sidebar;
