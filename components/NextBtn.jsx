import styles from '../styles/NextBtn.module.css'

function NextBtn({ step, setStep, error }) {
    let title

    if (step === 3) {
        title = "Confirm"
    } else {
        title = "Next Step"
    }

    return (
        <button disabled={error} className={step === 4 ? `${styles.nextBtn} btn-hidden` : styles.nextBtn} onClick={() => { setStep((curr) => curr + 1) }}>{title}</button>
    )
}

export default NextBtn