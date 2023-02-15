import styles from '../styles/BackBtn.module.css'

function BackBtn({ step, setStep }) {

    return (
        <button className={step === 0 || step === 4 ? `${styles.backBtn} btn-hidden` : styles.backBtn} onClick={() => { setStep((curr) => curr - 1) }} disabled={step === 0}>Go back</button>
    )
}

export default BackBtn