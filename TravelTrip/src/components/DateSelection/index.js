import React from 'react'

const DateSelection = ({details, handleInputChange, nextStep, prevStep}) => {
  const {startDate, endDate} = details

  const handleNext = () => {
    if (!startDate) {
      alert('Select start date')
    } else if (!endDate) {
      alert('Select end date')
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
      </ul>
      <form>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default DateSelection
