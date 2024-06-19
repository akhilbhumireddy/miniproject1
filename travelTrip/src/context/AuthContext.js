// src/context/AuthContext.js
import React, {createContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios' // Import axios

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const history = useHistory()

  const login = async (email, password) => {
    try {
      // Example API call, replace with your actual API endpoint
      const response = await axios.post('/api/login', {email, password})
      if (response.data.success) {
        setUser({email})
        history.push('/')
        return null
      }
      return response.data.message
    } catch (error) {
      return 'Invalid credentials'
    }
  }

  const logout = () => {
    setUser(null)
    history.push('/login')
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
