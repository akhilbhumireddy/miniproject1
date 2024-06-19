import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Home = () => {
  const isAuthenticated = Cookies.get('jwt_token')
  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Header />
      <main>
        <h1>Travel. Relax. Memories.</h1>
        <p>With travel trip you can experience...</p>
        <Link to="/book-a-new-trip">
          <button>Book a new trip</button>
        </Link>
      </main>
    </div>
  )
}

export default Home
