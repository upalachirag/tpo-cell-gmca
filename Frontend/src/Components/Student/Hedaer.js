import React from 'react'

function Hedaer() {
    return (
        <div>
            <div id="main-wrapper">
                <header className="topbar" data-navbarbg="skin5">
                    <nav className="navbar top-navbar navbar-expand-md navbar-dark d-flex">
                        <span className="navbar-brand mr-auto ml-3">
                            <h3>GMCA TPO CELL STUDENT PANNEL</h3>
                        </span>
                        {/* <div className="" id="navbarSupportedContent" data-navbarbg="skin5"> */}
                        {/* <ul className="navbar-nav float-right"> */}
                        {/* <li className="nav-item dropdown"> */}
                        <a className="pro-pic ml-auto mr-4 d-flex">
                            <span className="mr-3">
                                <h5 style={{color:"darkgray"}}>Welcome,username</h5>
                            </span>
                            <img src="assets/images/users/1.jpg" alt="user" className="rounded-circle" width="31" />
                        </a>
                        {/* </li> */}
                        {/* </ul> */}
                        {/* </div> */}
                        {/* <div className="navbar-header" data-logobg="skin5"> */}
                        {/* <a  href="/"> */}
                        {/* <b className="logo-icon p-l-10">
                                    <img src="assets/images/logo-icon.png" alt="homepage" className="light-logo" />
                                </b> */}
                        {/* </a> */}
                        {/* </div> */}
                    </nav>
                </header>
            </div>

        </div>
    )
}

export default Hedaer
