import React, {useState} from 'react'
import './index.css'

function GuestsStep({onPrevious, onNext, formData}) {
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    // Proceed to the next step
    onNext({...formData, adults, children, infants})
  }

  return (
    <div>
      <h2>Guests</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Adults">Adults:</label>
          <input
            type="number"
            min="1"
            value={adults}
            onChange={e => setAdults(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="children">Children:</label>
          <input
            type="number"
            min="0"
            value={children}
            onChange={e => setChildren(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="Infants">Infants:</label>
          <input
            type="number"
            min="0"
            value={infants}
            onChange={e => setInfants(parseInt(e.target.value))}
          />
        </div>
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default GuestsStep
