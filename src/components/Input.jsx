import React, { useId } from "react";

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisalbed = false,
  className = "",
}) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black  inline-block mb-2" htmlFor="id">
          {label}
        </label>
        <input
          id={id}
          type="number"
          placeholder="amount"
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          value={amount}
          className="outline-none w-full py-1.5 bg-transparent"
        />
      </div>
      <div className="flex flex-wrap w-1/2 justify-end text-right ">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg  outline-none px-1 py-1 cursor-pointer bg-gray-100"
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisalbed}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
export default Input;
