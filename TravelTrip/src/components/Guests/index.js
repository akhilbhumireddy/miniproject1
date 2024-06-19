import React from 'react'

const Guests = ({details, handleInputChange, nextStep, prevStep}) => {
  const {adults, children, infants} = details

  const handleNext = () => {
    if (adults <= 0) {
      alert('Select at least 1 adult')
    } else {
      nextStep()
    }
  }

  return (
    <div>
      <h1>Travel Trip</h1>
      <ul>
        <li>Your Details</li>
        <li>Date Selection</li>
        <li>Guests</li>
      </ul>
      <form>
        <label>
          Adults:
          <input
            type="number"
            name="adults"
            value={adults}
            min="1"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Children:
          <input
            type="number"
            name="children"
            value={children}
            min="0"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Infants:
          <input
            type="number"
            name="infants"
            value={infants}
            min="0"
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Guests
