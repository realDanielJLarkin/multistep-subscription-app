//Hooks
import { useState } from 'react'

//Next Components
import Head from 'next/head'

//My Components
import PersonalInfo from '@/components/PersonalInfo'
import SelectPlan from '@/components/SelectPlan'
import Sidebar from '@/components/Sidebar'
import Addons from '@/components/Addons'
import FinishingUp from '@/components/FinishingUp'
import Confirmation from '@/components/Confirmation'
import NextBtn from '@/components/NextBtn'
import BackBtn from '@/components/BackBtn'
import MobileSideBar from '@/components/MobileSideBar'


export default function Home() {
  const [step, setStep] = useState(0)
  const [formError, setFormError] = useState(false)

  const ActiveDisplay = () => {
    if (step === 0) {
      return <PersonalInfo formError={formError} setFormError={setFormError} />
    } else if (step === 1) {
      return <SelectPlan />
    } else if (step === 2) {
      return <Addons />
    } else if (step === 3) {
      return <FinishingUp />
    } else if (step === 4) {
      return <Confirmation />
    }
  }

  return (
    <>
      <Head>
        <title>Frontend Mentor Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <div className="mobile-sidebar">
          <MobileSideBar active={step} />
        </div>
        <div className="container">
          <Sidebar active={step} />
          <div className='component-container'>
            <div className={`active-container`}>
              {ActiveDisplay()}
            </div>
            <div className="btn-container">
              <BackBtn step={step} setStep={setStep} />
              <NextBtn step={step} setStep={setStep} error={formError} />
            </div>
          </div>
        </div>
      </div>
      {step !== 4 &&
        <div className="btn-container-mobile">
          <BackBtn step={step} setStep={setStep} />
          <NextBtn step={step} setStep={setStep} error={formError} />
        </div>
      }
    </>
  )
}
