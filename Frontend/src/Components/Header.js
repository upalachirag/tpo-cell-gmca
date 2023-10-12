import React from 'react';
// Vendor CSS Files
import './assets2/vendor/bootstrap/css/bootstrap.min.css';
import './assets2/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets2/vendor/glightbox/css/glightbox.min.css';
import './assets2/vendor/swiper/swiper-bundle.min.css';
import './assets2/vendor/aos/aos.css';
// Template Main CSS File
import './assets2/css/main.css';

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
              <li><a href="#hero" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#recruiter">Recruiter</a></li>
              <li><a href="#contact">Contact</a></li>
              {/* <li><a href="/">Admin</a></li>
              <li><a href="/">Student</a></li> */}
              <li className="dropdown has-dropdown"><a href="/"><span>Placement statistics</span> <i className="bi bi-chevron-down"></i></a>
                <ul className="dd-box-shadow">
                  <li><a href="/">2022</a></li>
                  <li><a href="/">2021</a></li>
                  <li><a href="/">2020</a></li>
                  <li><a href="/">2019</a></li>
                </ul>
              </li>
            </ul>

            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>{/* End Nav Menu */}

          <a className="btn-getstarted" href="about">Sign In</a>

        </div>
      </header>
    );
  }
}

export default Header;
