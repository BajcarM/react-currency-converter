import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CurrencyRow from './components/CurrencyRow'
import { useConverterContext } from './contexts/ConverterContext'

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest'
const apiKey = ''

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const {
    setCurrencyOptions,
    setFromCurrency,
    setToCurrency,
    currencyOptions,
    fromCurrency,
    toCurrency,
  } = useConverterContext()

  useEffect(() => {
    const controller = new AbortController()

    getData()

    async function getData() {
      try {
        setIsLoading(true)
        const response = await axios({
          method: 'GET',
          url: BASE_URL,
          headers: { apikey: apiKey },
          signal: controller.signal,
        })

        await setCurrencyOptions([...Object.keys(response.data.rates)])
        await setFromCurrency({ name: response.data.base })
        await setToCurrency({ name: Object.keys(response.data.rates)[0] })
        await console.log(response.data)
      } catch (error) {
        console.log(`Tohle je log uvnitr error: ${error}`)
        throw new Error(`Tohle je uvnitr error: ${error}`)
      } finally {
        setIsLoading(false)
      }
    }

    return () => controller.abort()
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        onChangeCurrency={(event) =>
          setFromCurrency((state) => ({ ...state, name: event.target.value }))
        }
        selectedCurrency={fromCurrency}
        onChangeAmount={(event) =>
          setFromCurrency((state) => ({ ...state, amount: event.target.value }))
        }
      />
      <div>=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(event) =>
          setToCurrency((state) => ({ ...state, name: event.target.value }))
        }
        onChangeAmount={(event) =>
          setToCurrency((state) => ({ ...state, amount: event.target.value }))
        }
      />
      <div className="apiKey">
        <label htmlFor="ApiKey">exchangeratesapi.io Api Key</label>
        <input
          id="ApiKey"
          type="text"
          placeholder="Please provide your Api Key"
        />
      </div>
    </>
  )
}

export default App
