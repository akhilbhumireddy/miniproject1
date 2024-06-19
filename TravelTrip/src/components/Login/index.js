import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

// Mock API call for login
const loginApiUrl = 'https://apis.ccbp.in/login'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    if (!username || !password) {
      setErrorMessage('Please enter both username and password')
      return
    }

    const response = await fetch(loginApiUrl, {
      method: 'POST',

      body: JSON.stringify({username, password}),
    })

    const data = await response.json()
    if (data.error) {
      setErrorMessage(data.error)
    } else {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      history.replace('/')
    }
  }

  return (
    <div>
      <header>
        <h1>Travel Trip</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          USERNAME
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label>
          PASSWORD
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="button"
            data-testid="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            Show
          </button>
        </label>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
