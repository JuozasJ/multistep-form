import { FormEvent, useState } from "react"
import { useMultistepForm } from "./utils/useMultistepForm"
import { CompanyForm } from "./components/form steps/CompanyForm"
import { ContactPersonForm } from "./components/form steps/ContactPersonForm"
import { ProductInformationForm } from "./components/form steps/ProductInformationForm"
import { ButtonPrimary } from './components/styles/ButtonPrimary'
import { ButtonOutline } from './components/styles/ButtonOutline'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'

type FormData = {
  companyName: string
  companyCode: string
  companyRegistration: string
  contactPersonName: string
  contactPersonSurname: string
  contactPersonJobTitle: string
  contactPersonEmail: string
  contactPersonCountryCode: string
  contactPersonPhone: string
  productTitle: string
  productDescription: string
  productPrice: string
  productWeight: string
}

const INITIAL_DATA: FormData = {
  companyName: "",
  companyCode: "",
  companyRegistration: "",
  contactPersonName: "",
  contactPersonSurname: "",
  contactPersonJobTitle: "",
  contactPersonEmail: "",
  contactPersonCountryCode: "+370",
  contactPersonPhone: "",
  productTitle: "",
  productDescription: "",
  productPrice: "",
  productWeight: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  
//Pass form steps to "useMultistepForm()" parameters
//as React components array with "title" attribute
//progress bar will adjust automatically

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <CompanyForm {...data} title='Company' updateFields={updateFields} />,
      <ContactPersonForm {...data} title='Contact person' updateFields={updateFields} />,
      <ProductInformationForm {...data} title='Product information' updateFields={updateFields} />,
    ])

//Modify form submit function to send data to backend

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Thank You! Successfully submitted")
  }

  return (
      <>
      <Header/>
      <main>
        <ProgressBar steps={steps} currentStepIndex={currentStepIndex} />
        <div className="form-container">
          <form onSubmit={onSubmit}>
                {step}
              <div className="buttons">
                <ButtonOutline type="button" onClick={back} style={{visibility: isFirstStep ? 'hidden' : 'visible'}}>Back</ButtonOutline>
                <ButtonPrimary id='formNext' type="submit">{isLastStep ? "Submit" : "Next"}</ButtonPrimary>
              </div>
          </form>
        </div>
      </main>
      </>
  )
}

export default App
