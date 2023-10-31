import React, { Component } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    };
  }

  handleCheckboxChange = () => {
    this.setState((prevState) => ({ isChecked: !prevState.isChecked }));
  };

  render() {
    const { isChecked } = this.state;
    return (
      <div>
        <div className="body">
          <nav className={`side-bar ${isChecked ? 'active' : ''}`}>
            <div className="user-p">
              <img src="images/user.jpg" alt="User" />
              <h4>Elias</h4>
            </div>
            <ul>
              <li>
                <Link to="/student">
                  <i className="fa fa-desktop" aria-hidden="true"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/student/profile">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/student/placement">
                  <i className="fa fa-car" aria-hidden="true"></i>
                  <span>Placement Drive</span>
                </Link>
              </li>
              <li>
                <Link to="/student/resume">
                  <i className="fa fa-file" aria-hidden="true"></i>
                  <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link to="/student/offerletter">
                  <i className="fa fa-file-text" aria-hidden="true"></i>
                  <span>Offer Letter</span>
                </Link>
              </li>

              <li>
                <Link to="/student/logout">
                  <i className="fa fa-power-off" aria-hidden="true"></i>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
