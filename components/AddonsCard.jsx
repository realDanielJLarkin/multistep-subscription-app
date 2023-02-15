import { useContext, useState, useEffect } from "react"
import AppContext from "./AppContext"


import styles from '../styles/AddonsCard.module.css'


function AddonsCard({ id, title, body, priceMonthly, priceYearly, selectedDiv, addonArry, setAddonArry }) {


    const context = useContext(AppContext)

    useEffect(() => {
        context.setAddonsContext(addonArry)
        if (addonArry.includes(id)) {
            const div = document.getElementById(selectedDiv)
            const checked = document.getElementById(id)
            checked.checked = true
            div.classList.add('div-selected')
        } else {
            const div = document.getElementById(selectedDiv)
            div.classList.remove('div-selected')
        }

    }, [addonArry])

    const handleClick = (id) => {

        const selected = document.getElementById(id)
        selected.checked = !selected.checked

        if (addonArry.includes(id)) {
            const remove = addonArry.indexOf(id)
            setAddonArry((current) => current.filter((el, index) => index !== remove))
        } else {
            setAddonArry((prevArray) => [...prevArray, id])
        }
    }

    return (
        <div id={selectedDiv} className={styles.card} onClick={(() => handleClick(id))}>
            <label className={styles.checkboxContainer}>
                <input id={id} type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <div className={styles.cardHeader}>
                <h2>{title}</h2>
                <p >{body}</p>
            </div>
            <div className={styles.cardFooter}>
                <p>{context.cycleContext === 'monthly' ? `$${priceMonthly}/mo` : `$${priceYearly}/yr`}</p>
            </div>
        </div >
    )
}

export default AddonsCard