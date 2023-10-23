import { useState } from "react";

import "./App.css";
import { Input } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import {bank} from './assets/index/bank.jpg'
import bank from "./assets/bank.jpg";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("eur");
  const [amount, setAmount] = useState(0);
  const [convertedamount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const swap = () => {
    setTo(from);
    setFrom(to);
    setConvertedAmount(amount);
    setAmount(convertedamount);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    convert();
  };
  // const handleCurrencyChange = (currency) => {
  //   setFrom(currency);
  // };
  return (
    <div
      className=" w-screen  h-screen flex flex-wrap   bg-no-repeat  bg-center justify-center items-center"
      style={{
        backgroundImage: `url(${bank})`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 justify-center backdrop-blur-sm bg-white/30">
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-1">
              <Input
                label={from}
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                className="text-white border-white border-2 rounded-lg bg-blue-400 px-2 py-0.5 absolute left-1/2 -translate-x-1/2 -translate-y-1/2v
                cursor-pointer"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mb-1">
              <Input
                label={to}
                amount={Math.floor(convertedamount)}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
