import { useContext, useEffect, useState } from "react"

import AppContext from "./AppContext"

import calculateTotal from "@/utils/calculateTotal"
import getBasePrice from "@/utils/getBasePrice"

import styles from '../styles/FinishingUp.module.css'

function FinishingUp() {

    const context = useContext(AppContext)

    const [basePrice, setBasePrice] = useState()
    const [term, setTerm] = useState()


    const addons = context.addonsContext
    let addonArry = []
    let totalPrice


    useEffect(() => {
        const plan = context.planContext
        const cycle = context.cycleContext

        if (cycle === 'monthly') {
            setTerm('mo')
        } else {
            setTerm('yr')
        }

        setBasePrice(getBasePrice(plan, cycle))
    }, [])




    if (addons.length > 0) {
        if (addons.includes('1')) {
            addonArry.push({ title: 'Online service', monthlyPrice: 1, yearlyPrice: 10 })
        }
        if (addons.includes('2')) {
            addonArry.push({ title: 'Extra storage', monthlyPrice: 2, yearlyPrice: 20 })
        }
        if (addons.includes('3')) {
            addonArry.push({ title: 'Customizable profile', monthlyPrice: 2, yearlyPrice: 20 })
        }
    }

    return (
        <>
            <h1 className={styles.heading}>Finishing up</h1>
            <p className={styles.subHeading}>Double check everything looks OK before confirming.</p>
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h2>{`${context.planContext} (${context.cycleContext})`}</h2>
                            <p>Change</p>
                        </div>
                        <div>
                            <span>${basePrice}/{term}</span>
                        </div>
                    </div>
                    <span className={styles.division}></span>

                    <div className={styles.cardFooter}>

                        {
                            addonArry.length > 0 ? (
                                <>
                                    <div >
                                        {
                                            addonArry.map((addon) => (
                                                <p key={addon.title}>{addon.title}</p>
                                            ))
                                        }
                                    </div>
                                    <div >
                                        {
                                            term === 'mo' ? addonArry.map((addon) => (<span key={addon.title}>${addon.monthlyPrice}/{term}</span>)) : term === 'yr' ? addonArry.map((addon) => (<span key={addon.title}>${addon.yearlyPrice}/{term}</span>)) : <span></span>
                                        }
                                    </div>
                                </>
                            ) :
                                <p>No addons</p>
                        }
                    </div >
                </div >
                <div className={styles.totalContainer}>
                    <p className={styles.totalLabel}>Total:  </p>
                    <p className={styles.totalPrice}>${calculateTotal(addonArry, term, basePrice, totalPrice)}/{term}</p>
                </div>

            </div >
        </>
    )
}

export default FinishingUp