
import { useState, useEffect } from 'react';

function currencyConverter(amount, fromCurrency, toCurrency) {
  const [convertedAmount, setConvertedAmount] = useState(null);
  useEffect(() => {
    const fetchConversion = async () => {
      try {
        const res = await fetch(`https://api.fxratesapi.com/latest?base=${fromCurrency}&symbols=${toCurrency}`);
        const data = await res.json();
        const rate = data.rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2)); 
      } catch (error) {
        console.error('Conversion error:', error);
        setConvertedAmount(null);
      }
    };
    fetchConversion();
  }, [amount, fromCurrency, toCurrency]);
  return convertedAmount;
}
export default currencyConverter;
