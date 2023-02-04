import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CurrencyRow from './components/CurrencyRow'

const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest'
const apiKey = 'GkXYrmaqOIRCjFnDnc5ihRZ6erHVq3Ss'

function App() {
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    try {
      getData()
      console.log('try')
    } catch (error) {
      console.error(`Error: ${error}`)
    }

    async function getData() {
      const response = await axios({
        method: 'GET',
        url: BASE_URL,
        headers: { apikey: 'apiKey' },
        signal: controller.signal,
      })

      setCurrencies([response.data.base, ...Object.keys(response.data.rates)])
      console.log(response.data)
    }

    return () => controller.abort()
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencies={currencies} />
      <div>=</div>
      <CurrencyRow currencies={currencies} />
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
