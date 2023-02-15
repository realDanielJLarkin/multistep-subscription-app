import styles from '../styles/Error.module.css'

function Error({ message }) {
    return (
        <p className={styles.error}>{message}</p>
    )
}

export default Error