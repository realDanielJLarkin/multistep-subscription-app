import React from 'react'

import styles from '../styles/Confirmation.module.css'
function Confirmation() {
    return (
        <div className={styles.container}>
            <img src="/thank-you.svg" />
            <h2>Thank you!</h2>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
        </div>
    )
}

export default Confirmation