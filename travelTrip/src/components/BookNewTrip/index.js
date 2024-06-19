import React, {useState} from 'react'
import YourDetailsStep from '../YourDetailsStep'
import DateSelectionStep from '../DateSelectionStep'
import GuestsStep from '../GuestsStep'
import TravelAssistanceStep from '../TravelAssistanceStep'
import ConfirmationStep from '../ConfirmationStep'

function BookNewTrip() {
  // State to manage form data
  const [formData, setFormData] = useState({})
  // State to manage current step
  const [currentStep, setCurrentStep] = useState(1)

  // Function to handle form data submission from each step
  const handleStepSubmit = data => {
    setFormData({...formData, ...data})
    setCurrentStep(currentStep + 1)
  }

  // Function to handle going to the previous step
  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  // Function to handle confirming the booking
  const handleConfirmBooking = () => {
    // Handle booking confirmation logic here (e.g., API call)
    console.log('Booking confirmed:', formData)
  }

  return (
    <div>
      {/* Render different step components based on the current step */}
      {currentStep === 1 && <YourDetailsStep onNext={handleStepSubmit} />}
      {currentStep === 2 && (
        <DateSelectionStep
          onPrevious={goToPreviousStep}
          onNext={handleStepSubmit}
        />
      )}
      {currentStep === 3 && (
        <GuestsStep onPrevious={goToPreviousStep} onNext={handleStepSubmit} />
      )}
      {currentStep === 4 && (
        <TravelAssistanceStep
          onPrevious={goToPreviousStep}
          onNext={handleStepSubmit}
        />
      )}
      {currentStep === 5 && (
        <ConfirmationStep
          formData={formData}
          onPrevious={goToPreviousStep}
          onConfirm={handleConfirmBooking}
        />
      )}
    </div>
  )
}

export default BookNewTrip
