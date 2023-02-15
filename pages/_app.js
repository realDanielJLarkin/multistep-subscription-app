import { useState, createContext } from 'react'
import AppContext from '@/components/AppContext'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  const [planContext, setPlanContext] = useState('arcade')
  const [cycleContext, setCycleContext] = useState('monthly')
  const [addonsContext, setAddonsContext] = useState([])

  return (
    <AppContext.Provider value={{ planContext, setPlanContext, cycleContext, setCycleContext, addonsContext, setAddonsContext }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )

  // return <Component {...pageProps} />
}
