import React from 'react'

const YourDetails = ({details, handleInputChange, nextStep}) => {
  const {name, startLocation, endLocation} = details

  const handleNext = () => {
    if (!name) {
      alert('Enter your name')
    } else if (!startLocation) {
      alert('Enter your start location')
    } else if (!endLocation) {
      alert('Enter your end location')
    } else {
      nextStep()
    }
  }

  return (
    <div>
      <h1>Travel Trip</h1>
      <ul>
        <li>Your Details</li>
      </ul>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Location:
          <input
            type="text"
            name="startLocation"
            value={startLocation}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Location:
          <input
            type="text"
            name="endLocation"
            value={endLocation}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default YourDetails
