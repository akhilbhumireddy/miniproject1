import React, {useState} from 'react'

function TravelAssistanceStep({onPrevious, onNext, formData}) {
  // Define state variables for managing form inputs
  const [assistanceNeeded, setAssistanceNeeded] = useState(false)
  const [assistanceType, setAssistanceType] = useState('')

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    // Call the onNext function with updated form data
    onNext({...formData, assistanceNeeded, assistanceType})
  }

  return (
    <div>
      {/* Heading for the step */}
      <h2>Travel Assistance</h2>
      {/* Form for selecting travel assistance */}
      <form onSubmit={handleSubmit}>
        {/* Checkbox for indicating whether travel assistance is needed */}
        <label>
          <input
            type="checkbox"
            checked={assistanceNeeded}
            onChange={e => setAssistanceNeeded(e.target.checked)}
          />
          Travel assistance needed
        </label>
        {/* Conditional rendering of assistance type selection based on checkbox */}
        {assistanceNeeded && (
          <div>
            <label htmlFor="selection">Select assistance type:</label>
            {/* Dropdown for selecting type of assistance */}
            <select
              value={assistanceType}
              onChange={e => setAssistanceType(e.target.value)}
            >
              {/* Option for no selection */}
              <option value="">Select</option>
              {/* Options for different types of assistance */}
              <option value="Wheelchair Assistance">
                Wheelchair Assistance
              </option>
              <option value="Medical Assistance">Medical Assistance</option>
              <option value="Other Assistance">Other Assistance</option>
            </select>
          </div>
        )}
        {/* Button for going back to previous step */}
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        {/* Button for submitting form and proceeding to next step */}
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default TravelAssistanceStep
