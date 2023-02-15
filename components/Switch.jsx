
import styles from '../styles/Switch.module.css'

function Switch({ monthly, handleChange }) {
    return (
        <>
            <span className={monthly ? styles.switchActive : styles.switchInactive}>Monthly</span>
            <label className={styles.switch}>
                <input type="checkbox" onChange={handleChange} />
                <span className={monthly ? `${styles.monthly} ${styles.slider} ${styles.round}` : `${styles.yearly} ${styles.slider} ${styles.round}`}></span>
            </label>
            <span className={monthly ? styles.switchInactive : styles.switchActive}>Yearly</span>
        </>
    )
}

export default Switch