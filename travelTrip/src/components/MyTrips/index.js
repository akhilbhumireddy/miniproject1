import React, {useState, useEffect} from 'react'

function MyTrips() {
  const [trips, setTrips] = useState([])

  // Fetch trips data from an API endpoint
  useEffect(() => {
    // Example API call to fetch trips data
    fetch('https://example.com/api/trips')
      .then(response => response.json())
      .then(data => setTrips(data.trips))
      .catch(error => console.error('Error fetching trips:', error))
  }, [])

  return (
    <div>
      <h2>My Trips</h2>
      {trips.length > 0 ? (
        <div>
          {trips.map(trip => (
            <div key={trip.id} className="trip-card">
              <h3>{trip.destination}</h3>
              <p>Start Date: {trip.startDate}</p>
              <p>End Date: {trip.endDate}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No trips booked yet.</p>
      )}
    </div>
  )
}

export default MyTrips
