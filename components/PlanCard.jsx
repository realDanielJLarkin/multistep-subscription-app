import React from 'react'


import styles from '../styles/PlanCard.module.css'

function PlanCard({ active, id, title, priceMonth, priceYear, image, monthly, handleClick }) {
    return (
        <div id={id} className={active === id ? styles.cardActive : styles.card} onClick={() => handleClick(id)}>
            <div className={styles.cardHeader}>
                <img src={image} alt="" />
            </div>
            <div className={styles.cardFooter}>
                <h2>{title}</h2>
                <p className='text'>{monthly ? priceMonth : priceYear}</p>
            </div>
        </div>
    )
}

export default PlanCard 