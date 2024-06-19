import React, {useState} from 'react'
import './index.css'

function YourDetailsStep({onNext}) {
  const [name, setName] = useState('')
  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!name.trim()) {
      setError('Enter your name')
      return
    }
    if (!startLocation.trim()) {
      setError('Enter your start location')
      return
    }
    if (!endLocation.trim()) {
      setError('Enter your end location')
      return
    }
    // If all inputs are valid, proceed to the next step
    onNext({name, startLocation, endLocation})
  }

  return (
    <div>
      <h2>Your Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Start Location"
          value={startLocation}
          onChange={e => setStartLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="End Location"
          value={endLocation}
          onChange={e => setEndLocation(e.target.value)}
        />
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default YourDetailsStep
