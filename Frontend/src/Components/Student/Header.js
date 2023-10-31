import React from 'react'
import './style.css'

function Header() {
  return (
    <div>
      <header className="sheader">
        <h2 className="u-name">
          GMCA <b>TPO</b> CELL
          <label htmlFor="checkbox">
            <i id="navbtn" className="fa fa-bars" aria-hidden="true"></i>
          </label>
        </h2>
        <i className="fa fa-user" aria-hidden="true"></i>
      </header>
    </div>
  )
}

export default Header
