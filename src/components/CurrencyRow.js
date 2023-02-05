export default function CurrencyRow({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
}) {
  return (
    <div>
      <input
        type="number"
        onChange={onChangeAmount}
        value={selectedCurrency.amount}
      />
      <select
        value={selectedCurrency.name}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((option) => (
          <option
            key={crypto.randomUUID()}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
