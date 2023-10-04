import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
    return (
        <>
            {/* <!-- BOOTSTRAP STYLES--> */}
            <link href="assets/css/bootstrap.css" rel="stylesheet" />
            {/* <!-- FONTAWESOME STYLES--> */}
            <link href="assets/css/font-awesome.css" rel="stylesheet" />
            {/* <!--CUSTOM BASIC STYLES--> */}
            <link href="assets/css/basic.css" rel="stylesheet" />
            {/* <!--CUSTOM MAIN STYLES--> */}
            <link href="assets/css/custom.css" rel="stylesheet" />
            {/* <!-- GOOGLE FONTS--> */}
            <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
            <nav className="navbar navbar-default navbar-cls-top " role="navigation" >
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">GMCA Training & Placement Cell</a>
                </div>

                <div className="header-right">

                    <a href="/" className="btn btn-info" title="New Message"> Home </a>
                    <a href="/" className="btn btn-info" title="New Message"> Students </a>
                    <a href="/" className="btn btn-info" title="New Message"> Company </a>
                    <a href="/" className="btn btn-info" title="New Message"> Job/Intership </a>
                    <a href="/" className="btn btn-info" title="New Message"> Gallery</a>
                    <a href="/" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-bell-o fa-1x"></i></a>

                </div>
            </nav>
            {/* <!-- /. NAV TOP  --> */}
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <div className="user-img-div">
                                <img src="assets/img/user.png" className="img-thumbnail" alt='Admin pic' />

                                <div className="inner-text">
                                    TPO GMCA
                                    <br />
                                    {/* <small>Last Login:2 Weeks Ago </small> */}
                                </div>
                            </div>

                        </li>


                        <li>
                            <a className="active-menu" href="/admin"><i className="fa fa-dashboard "></i> Admin Dashboard</a>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-desktop "></i>Students<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <Link to="/admin/StuList"><i className="fa fa-toggle-on"></i>Student - List </Link>
                                </li>
                                <li>
                                    <Link to="/admin/SelectStu"><i className="fa fa-edit "></i>Selected Students List</Link>
                                </li>
                                <li>
                                    <Link to="/admin/Notification"><i className="fa fa-bell "></i>Notifications</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-edit "></i>Company Management</a>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-upload "></i> Job and Intership Management</a>
                        </li>

                        <li>
                            <a href="/"><i className="fa fa-bell "></i>Notifications / Communication </a>

                        </li>
                        <li>
                            <a href="/"><i className="fa fa-certificate "></i>Forms <span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">

                                <li>
                                    <a href="form.html"><i className="fa fa-desktop "></i>Basic </a>
                                </li>
                                <li>
                                    <a href="form-advance.html"><i className="fa fa-code "></i>Advance</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="gallery.html"><i className="fa fa-photo "></i>Gallery</a>
                        </li>
                        <li>
                            <a href="login.html"><i className="fa fa-sign-in "></i>Login Page</a>
                        </li>
                    </ul>

                </div>

            </nav>
            {/* <!-- /. NAV SIDE  --> */}
        </>
    )
}

export default Head