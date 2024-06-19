import React, {useState} from 'react'
import './index.css'

function DateSelectionStep({onPrevious, onNext, formData}) {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!startDate) {
      setError('Select start date')
      return
    }
    if (!endDate) {
      setError('Select end date')
      return
    }
    if (new Date(endDate) < new Date(startDate)) {
      setError('End date cannot be less than start date')
      return
    }
    // If all inputs are valid, proceed to the next step
    onNext({...formData, startDate, endDate})
  }

  return (
    <div>
      <h2>Date Selection</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="button" onClick={onPrevious}>
          Previous
        </button>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default DateSelectionStep
