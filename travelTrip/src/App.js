// App.js

import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import BookNewTrip from './components/BookNewTrip'
import MyTrips from './components/MyTrips'

function App() {
  // State to track authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Function to handle login
  const handleLogin = () => {
    // Simulate successful login
    setIsLoggedIn(true)
    // Store authentication status in local storage
    localStorage.setItem('isLoggedIn', 'true')
  }

  // Function to handle logout
  const handleLogout = () => {
    // Clear authentication status from state and local storage
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  return (
    <Router>
      <div>
        {/* Header component */}
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

        {/* Routes */}
        <Switch>
          {/* Login Route */}
          <Route exact path="/login">
            {/* Render Login component with handleLogin function */}
            <Login onLogin={handleLogin} />
          </Route>

          {/* Home Route */}
          <Route exact path="/">
            {/* Render Home component */}
            <Home />
          </Route>

          {/* Book A New Trip Route */}
          <PrivateRoute path="/book-new-trip" isLoggedIn={isLoggedIn}>
            {/* Render BookNewTrip component */}
            <BookNewTrip />
          </PrivateRoute>

          {/* My Trips Route */}
          <PrivateRoute path="/my-trips" isLoggedIn={isLoggedIn}>
            {/* Render MyTrips component */}
            <MyTrips />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}

// PrivateRoute component to handle authorization
function PrivateRoute({children, isLoggedIn, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) =>
        isLoggedIn ? (
          // If user is logged in, render the component
          children
        ) : (
          // If user is not logged in, redirect to the login page
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        )
      }
    />
  )
}

export default App
