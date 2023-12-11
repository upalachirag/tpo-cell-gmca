import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// Import CSS File
import './assets/css/bootstrap.css'
import './assets/css/font-awesome.css'
import './assets/css/basic.css'
import './assets/css/custom.css'

const Head = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8081/")
            .then(res => {
                if (res.data.valid) {
                    setName(res.data.username);
                    setDataLoaded(true);
                } else {
                    // navigate('/asignin');
                }
            })
    }, [])

    const [adminData, setAdminData] = useState('');
    useEffect(() => {
        if(dataLoaded){
            axios.post('http://localhost:8081/admindata', { name })
            .then(res => {
                setAdminData(res.data);
            })
            .catch(err => console.log(err));
        }
    })

    return (
        <>
            {/* <!-- BOOTSTRAP STYLES--> */}
            {/* <link href="assets/css/bootstrap.css" rel="stylesheet" /> */}
            {/* <!-- FONTAWESOME STYLES--> */}
            {/* <link href="assets/css/font-awesome.css" rel="stylesheet" /> */}
            {/* <!--CUSTOM BASIC STYLES--> */}
            {/* <link href="assets/css/basic.css" rel="stylesheet" /> */}
            {/* <!--CUSTOM MAIN STYLES--> */}
            {/* <link href="assets/css/custom.css" rel="stylesheet" /> */}
            {/* <!-- GOOGLE FONTS--> */}
            {/* <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' /> */}
            <nav className="anavbar anavbar-cls-top" role="navigation" >
                <div className="anavbar-header">
                    <button type="button" className="anavbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                GMCA Training & Placement Cell Admin Panel
                {/* <div className="header-right">

                    <a href="/" className="btn btn-info" title="New Message"> Home </a>
                    <a href="/" className="btn btn-info" title="New Message"> Students </a>
                    <a href="/" className="btn btn-info" title="New Message"> Company </a>
                    <a href="/" className="btn btn-info" title="New Message"> Job/Intership </a>
                    <a href="/" className="btn btn-info" title="New Message"> Gallery</a>
                    <a href="/" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-bell-o fa-1x"></i></a>

                </div> */}
            </nav>
            {/* <!-- /. NAV TOP  --> */}
            <nav className="anavbar-default anavbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="anav" id="main-menu">
                        <li>
                            <div className="user-img-div">
                                <img src="assets2/img/user.jpg" className="img-thumbnail" alt='Admin pic' />

                                <div className="inner-text">
                                    Chirag Upala
                                    <br />
                                    {/* <small>Last Login:2 Weeks Ago </small> */}
                                </div>
                            </div>

                        </li>


                        <li>
                            <Link className="active-menu" to="/admin"><i className="fa fa-dashboard "></i> Admin Dashboard</Link>
                        </li>
                        {/* <li>
                            <a href="/"><i className="fa fa-desktop "></i>Students<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                            </ul>
                        </li> */}
                        <li>
                            <Link to="/admin/StuList"><i className="fa fa-list"></i>Student - List </Link>
                        </li>
                        <li>
                            <Link to="/admin/SelectStu"><i className="fa fa-list-ul "></i>Selected Students List</Link>
                        </li>
                        <li>
                            <Link to="/admin/jobApplication"><i className="fa fa-bell "></i>Job Application</Link>
                        </li>
                        <li>
                            <Link to="/admin/Notification"><i className="fa fa-bell "></i>Notifications / Communication </Link>
                        </li>
                        <li>
                            <Link to="/admin/CompanyManage"><i className="fa fa-edit "></i>Company Management</Link>
                        </li>
                        <li>
                            <Link to="/admin/JobManage"><i className="fa fa-upload "></i> Job and Intership Management</Link>
                        </li>

                        {/* <li>
                            <a href="/"><i className="fa fa-certificate "></i>Forms <span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">

                                <li>
                                    <a href="form.html"><i className="fa fa-desktop "></i>Basic </a>
                                </li>
                                <li>
                                    <a href="form-advance.html"><i className="fa fa-code "></i>Advance</a>
                                </li>
                            </ul>
                        </li> */}
                        <li>
                            <Link to="/admin/GalleryManage"><i className="fa fa-photo "></i>Gallery</Link>
                        </li>
                        <li>
                            <Link to="/admin/AdminManage"><i className="fa fa-user"></i>Admin Management</Link>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-sign-in "></i>Login Out</a>
                        </li>
                    </ul>

                </div>

            </nav>
            {/* <!-- /. NAV SIDE  --> */}
        </>
    )
}

export default Head