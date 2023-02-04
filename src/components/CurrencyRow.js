export default function CurrencyRow({ currencies }) {
  return (
    <div>
      <input type="number"></input>
      <select>
        {currencies.length ? (
          currencies.map((currency) => (
            <option
              value={currency}
              key={crypto.randomUUID}
            >
              {currency}
            </option>
          ))
        ) : (
          <option>Currency</option>
        )}
      </select>
    </div>
  )
}
