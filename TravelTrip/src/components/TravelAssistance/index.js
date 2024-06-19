import React from 'react'

const TravelAssistance = ({details, handleInputChange, nextStep, prevStep}) => {
  const {travelAssistance, selectedAssistance} = details

  const handleNext = () => {
    if (travelAssistance && !selectedAssistance) {
      alert('Select a travel assistance option')
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
        <li>Travel Assistance</li>
      </ul>
      <form>
        <label>
          <input
            type="checkbox"
            name="travelAssistance"
            checked={travelAssistance}
            onChange={handleInputChange}
          />
          Need Travel Assistance?
        </label>
        {travelAssistance && (
          <div>
            <label>
              Select Assistance:
              <select
                name="selectedAssistance"
                value={selectedAssistance}
                onChange={handleInputChange}
              >
                <option value="">Select...</option>
                <option value="guide">Local Guide</option>
                <option value="translator">Translator</option>
                <option value="driver">Driver</option>
              </select>
            </label>
          </div>
        )}
      </form>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default TravelAssistance
