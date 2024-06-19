import React, {useState} from 'react'
import Header from '../Header'
import YourDetails from '../YourDetails'
import DateSelection from '../DateSelection'
import Guests from '../Guests'
import TravelAssistance from '../TravelAssistance'
import Confirmation from '../Confirmation'
import Success from '../Success'
import './index.css'

const BookANewTrip = () => {
  const [step, setStep] = useState(0)
  const [details, setDetails] = useState({
    name: '',
    startLocation: '',
    endLocation: '',
    startDate: '',
    endDate: '',
    adults: 1,
    children: 0,
    infants: 0,
    travelAssistance: false,
    selectedAssistance: '',
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const handleInputChange = e => {
    const {name, value, type, checked} = e.target
    setDetails({
      ...details,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const steps = [
    <YourDetails
      details={details}
      handleInputChange={handleInputChange}
      nextStep={nextStep}
    />,
    <DateSelection
      details={details}
      handleInputChange={handleInputChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <Guests
      details={details}
      handleInputChange={handleInputChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <TravelAssistance
      details={details}
      handleInputChange={handleInputChange}
      nextStep={nextStep}
      prevStep={prevStep}
    />,
    <Confirmation details={details} nextStep={nextStep} prevStep={prevStep} />,
    <Success />,
  ]

  return (
    <div>
      <Header />
      <main>{steps[step]}</main>
    </div>
  )
}

export default BookANewTrip
