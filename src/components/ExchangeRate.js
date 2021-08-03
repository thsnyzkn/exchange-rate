import { useState, useCallback, useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { changeCurrencyCode, getAmount,getCurrency,getRates, supportedCurrencies } from "../store/rates";



export function ExchangeRate() {
  // const [amount, setAmount] = useState("1.50");
  // const [currencyCode, setCurrencyCode] = useState("USD");
  // const [currencyData, setCurrencyData] = useState({ USD: 1.0 });
  const dispatch = useDispatch();
  const amount =useSelector(getAmount);
  const currencyData = useSelector(getRates)
  const currencyCode = useSelector(getCurrency)

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    dispatch(changeCurrencyCode(currencyCode))
  }, []);

  

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
          />
        </h1>
      </section>
      <section>
        <AmountField  />
      </section>
      <section>
        <RateTable />
      </section>
    </>
  );
}
