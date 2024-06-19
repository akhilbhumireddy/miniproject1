import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Travel Trip</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-trips">My Trips</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
