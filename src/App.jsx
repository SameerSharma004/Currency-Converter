import currencyConverter from "./hooks/currencyConverter";
import currencies from './utils/currencies'
import { useState } from "react";

const App = () => {
  const [NumberChange, setNumberChange] = useState("");
  const [Currency, setCurrency] = useState("USD");
  const [Currency2, setCurrency2] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState({
    amount: "",
    from: "",
    to: "",
  });

  const converted = currencyConverter(
    convertedAmount.amount,
    convertedAmount.from,
    convertedAmount.to
  );
  const handleConversion = () => {
    setConvertedAmount({ amount: NumberChange, from: Currency, to: Currency2 });
  };
  

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh] bg-black gap-2">
        <h1 className="text-white text-5xl">Currency Converter</h1>
        <div className="bg-white w-[30%] h-[13%] rounded-2xl p-3">
          <div className="flex justify-between pb-2">
            <label className="text-gray-500 text-1xl">From</label>
            <label className="text-gray-500 text-1xl">Currency Type</label>
          </div>
          <div className="flex justify-between">
            <input
              type="number"
              className="border-2 rounded-lg px-2 py-1"
              value={NumberChange}
              placeholder="0"
              onChange={(e) => setNumberChange(Number(e.target.value))}
            />
            <select
              className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
              value={Currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {Object.entries(currencies).map(([code, { name }]) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="bg-white p-[3px] rounded-lg">
          <button
            className="bg-blue-400 pl-5 pr-5 pt-1 pb-1 rounded-md text-white"
            onClick={() => {
              const temp = Currency;
              setCurrency(Currency2);
              setCurrency2(temp);
            }}
          >
            Swap
          </button>
        </div>
        <div className="bg-white w-[30%] h-[13%] rounded-2xl p-3">
          <div className="flex justify-between pb-2">
            <label className="text-gray-500 text-1xl">To</label>
            <label className="text-gray-500 text-1xl">Currency Type</label>
          </div>
          <div className="flex justify-between">
            <p>{converted}</p>
            <select
              className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
              value={Currency2}
              onChange={(e) => setCurrency2(e.target.value)}
            >
              {Object.entries(currencies).map(([code, { name }]) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className="bg-blue-400 w-[30%] rounded-2xl p-3 text-2xl text-white"
          onClick={handleConversion}
        >
          Convert {Currency.toUpperCase()} to {Currency2.toUpperCase()}
        </button>
      </div>
    </>
  );
};

export default App;
