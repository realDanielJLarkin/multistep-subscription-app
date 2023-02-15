
import { useState, useContext, useEffect } from "react"

import AppContext from "./AppContext"


import styles from '../styles/SelectPlan.module.css'

import plans from "@/data/plans"
import PlanCard from "./PlanCard"
import Switch from "./Switch"


function SelectPlan() {

    const context = useContext(AppContext)

    const [monthly, setMonthly] = useState(true)
    const [active, setActive] = useState(context.planContext)

    useEffect(() => {
        if (context.cycleContext === 'monthly') {
            setMonthly(true)
        } else {
            setMonthly(false)
        }
    }, [])

    useEffect(() => {
        if (!monthly) {
            context.setCycleContext('yearly')
        } else {
            context.setCycleContext('monthly')
        }
    }, [monthly])


    const handleChange = () => {
        setMonthly(!monthly)
    }

    const handleClick = (plan) => {
        context.setPlanContext(plan)
        setActive(plan)
    }


    return (
        <>
            <h1 className={styles.heading}>Select your plan</h1>
            <p className={styles.subHeading}>You have the option of monthly or yearly billing.</p>
            <div className='step-two-container'>
                <div className={styles.cardGrid}>
                    {plans.map((plan) => (
                        <PlanCard
                            key={plan.id}
                            active={active}
                            monthly={monthly}
                            handleClick={handleClick}
                            id={plan.id} title={plan.title}
                            image={plan.image}
                            priceMonth={plan.priceMonth}
                            priceYear={plan.priceYear}
                        />
                    ))}
                </div>
                <div className={styles.switchContainer}>
                    <Switch monthly={monthly} handleChange={handleChange} />
                </div>
            </div>

        </>


    )
}

export default SelectPlan