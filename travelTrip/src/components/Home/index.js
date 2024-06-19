import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Home() {
  return (
    <div>
      <h2>Welcome to the Travel Trip App!</h2>
      <p>Explore new destinations and book your next adventure.</p>
      <Link to="/book-new-trip" className="button">
        Book A New Trip
      </Link>
    </div>
  )
}

export default Home
