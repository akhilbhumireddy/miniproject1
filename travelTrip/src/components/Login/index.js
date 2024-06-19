import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css' // Import CSS file for styling

function Login() {
  const history = useHistory()
  // State variables
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Function to handle form submission
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      // Send POST request to loginApiUrl with username and password
      const response = await fetch('https://apis.ccbp.in/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })
      const data = await response.json()
      if (response.ok) {
        // Navigate to Home Route upon successful login
        history.push('/home')
        // You can use react-router-dom's useHistory hook or withRouter HOC for navigation
      } else {
        setErrorMessage(data.error_msg) // Set error message if login fails
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        {/* Username input field */}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="input-field"
        />
        {/* Password input field */}
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="input-field"
        />
        {/* Button to toggle password visibility */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="show-password-button"
        >
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
        {/* Login button */}
        <button type="submit" className="login-button">
          Login
        </button>
        {/* Display error message if present */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  )
}

export default Login
