import React from 'react'
import logo from "../Assets/nike-logo.png"

function Navbar() {
  return (
    <div>
      <nav className='container'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <button className="login">Login</button>
        
      </nav>
    </div>
  )
}

export default Navbar