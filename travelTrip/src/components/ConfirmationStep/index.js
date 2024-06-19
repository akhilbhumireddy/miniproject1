import React from 'react'

function ConfirmationStep({formData, onPrevious, onConfirm}) {
  const handleSubmit = e => {
    e.preventDefault()
    // Call the onConfirm function to confirm the booking
    onConfirm()
  }

  return (
    <div>
      <h2>Confirmation</h2>
      {/* Display trip details for confirmation */}
      <div>
        <h3>Trip Details:</h3>
        <p>Name: {formData.name}</p>
        <p>Start Location: {formData.startLocation}</p>
        <p>End Location: {formData.endLocation}</p>
        <p>Start Date: {formData.startDate}</p>
        <p>End Date: {formData.endDate}</p>
        <p>Adults: {formData.adults}</p>
        <p>Children: {formData.children}</p>
        <p>Infants: {formData.infants}</p>
        {formData.assistanceNeeded && (
          <p>Assistance Needed: {formData.assistanceType}</p>
        )}
      </div>
      {/* Buttons for navigating back or confirming the booking */}
      <button type="button" onClick={onPrevious}>
        Previous
      </button>
      <button type="submit" onClick={handleSubmit}>
        Confirm
      </button>
    </div>
  )
}

export default ConfirmationStep
