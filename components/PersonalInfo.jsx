//Hooks
import { useState, useEffect } from 'react'

import Error from '../components/Error'

import styles from '../styles/Personal.module.css'

function PersonalInfo({ formError, setFormError }) {
    const [error, setError] = useState({ name: '', email: '', phone: '', global: '' })
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        if (error.name || error.email || error.phone) {
            setFormError(true)
        } else if (!name || !email || !phone) {
            setFormError(true)
        } else {
            setFormError(false)
        }

    }, [error])

    const nameChange = (event) => {
        const newName = event.target.value;
        setName(newName);
        if (!validateName(newName)) {
            setError({ name: 'Name is required' })
        } else {
            setError({ name: '' })
        }
    };

    const emailChange = (event) => {
        const newEmail = event.target.value;
        setEmail(newEmail)
        if (!validateEmail(newEmail)) {
            setError({ email: 'Please enter a vlaid email' })
        } else {
            setError({ email: '' })
        }
    };

    const phoneChange = (event) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
        if (!validatePhone(newPhone)) {
            setError({ phone: 'Please enter a valid phone number' })
        } else {
            setError({ phone: '' })
        }
    };

    const validateName = (name) => {
        return name.trim() !== ''
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const validatePhone = (phone) => {
        const phoneRegex = /^\d{10}$/
        return phoneRegex.test(phone)
    }

    return (
        <>
            <h1 className={styles.heading}>Personal info</h1>
            <p className={styles.subHeading}>Please provide you name, email, and phone number.</p>
            {error.global && <Error message={error.global} />}
            <form className={styles.form}>
                <div className={styles.labelsErrorsContainer}>
                    <label htmlFor="">Name</label>
                    {error.name && <Error message={error.name} />}
                </div>
                <input placeholder='e.g. Stephen King' type="text" name='name' value={name} onChange={nameChange} />
                <div className={styles.labelsErrorsContainer}>
                    <label htmlFor="">Email</label>
                    {error.email && <Error message={error.email} />}
                </div>
                <input placeholder='e.g. stephenking@lorem.com' type='email' name='email' value={email} onChange={emailChange} />
                <div className={styles.labelsErrorsContainer}>
                    <label htmlFor="">Phone number </label>
                    {error.phone && <Error message={error.phone} />}
                </div>
                <input placeholder='e.g. +1 (234) 567-890' type="phone" name='phone' value={phone} onChange={phoneChange} />

            </form>

        </>

    )
}

export default PersonalInfo