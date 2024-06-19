import React from 'react'

const Confirmation = ({details, prevStep}) => {
  const handleConfirm = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(details),
        },
      )

      if (response.ok) {
        console.log('Trip booked successfully')
        // Optionally, you can perform any necessary actions upon successful booking
        // such as redirecting to another page or updating state.
        // Example: history.push('/my-trips');
      } else {
        console.error('Failed to book the trip')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleConfirm()
  }

  return (
    <div>
      <h1>Travel Trip</h1>
      <ul>
        <li>Your Details</li>
        <li>Date Selection</li>
        <li>Guests</li>
        <li>Travel Assistance</li>
        <li>Confirmation</li>
      </ul>
      <form onSubmit={handleSubmit}>
        {/* Display all details for confirmation */}
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="submit">Confirm</button>
      </form>
    </div>
  )
}

export default Confirmation
