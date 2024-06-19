import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
  const history = useHistory()

  const handleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <header>
      <h1>
        <Link to="/">Travel Trip</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/my-trips">My Trips</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  )
}

export default Header
