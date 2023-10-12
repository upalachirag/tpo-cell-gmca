import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container-fluid d-flex align-items-center justify-content-between">

          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <img src="assets2/img/GMCA_LOGO.jpg" alt="Logo" />
            <h1>GMCA TPO CELL</h1>
            <span>.</span>
          </a>

          {/* Nav Menu */}
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="about">About</a></li>
              <li><a href="recruiter">Recruiter</a></li>
              <li><a href="/">Student</a></li>
              <li><a href="/">Admin</a></li>
              <li className="dropdown has-dropdown"><a href="/"><span>Placement statistics</span> <i className="bi bi-chevron-down"></i></a>
                <ul className="dd-box-shadow">
                  <li><a href="/">2022</a></li>
                  <li><a href="/">2021</a></li>
                  <li><a href="/">2020</a></li>
                  <li><a href="/">2019</a></li>
                </ul>
              </li>
              <li><a href="contact">Contact</a></li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>{/* End Nav Menu */}

          <a className="btn-getstarted" href="about">Get Started</a>

        </div>
      </header>
    );
  }
}

export default Header;
