import { useDispatch,useSelector } from "react-redux";
import { changeCurrency,changeCurrencyCode,getCurrency,getSupportedSymbols } from "../store/rates";
export function CurrencyCodePicker() {
  const dispatch = useDispatch();
  const currencyCode = useSelector(getCurrency);
  const supportedSymbols = useSelector(getSupportedSymbols);
  function onChange(e){
    dispatch(changeCurrencyCode(e.target.value))
  }
  return (
    <select className="currencyCode" value={currencyCode} onChange={onChange}>
      {supportedSymbols.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </select>
  );
}
