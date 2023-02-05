import { createContext, useContext, useState } from 'react'

export const ConverterContext = createContext()

export function useConverterContext() {
  return useContext(ConverterContext)
}

export default function ConverterContextProvider({ children }) {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState({ name: '', amount: '0' })
  const [toCurrency, setToCurrency] = useState({ name: '', amount: '0' })

  return (
    <ConverterContext.Provider
      value={{
        currencyOptions,
        fromCurrency,
        toCurrency,
        setCurrencyOptions,
        setFromCurrency,
        setToCurrency,
      }}
    >
      {children}
    </ConverterContext.Provider>
  )
}
