import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { changeCurrencyCode,getCurrency } from "../store/rates";



export function ExchangeRate() {

  

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
