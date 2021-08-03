import { useSelector } from "react-redux";
import { getAmount,getRates } from "../store/rates";
import { getName } from "../store/users";
export function RateTable() {
  const name = useSelector(getName);
  const amount = useSelector(getAmount);
  const rates = useSelector(getRates);
  return (
    <table className="ExchangeRate-table">
      <tbody>
        {Object.entries(rates).map(([code, rate]) => {
          // NOTE: normally avoid floating point math in JS
          const exchangeAmount = amount * rate || 0.0;
          return (
            <tr key={code}>
              <td>{code}</td>
              <td>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr colSpan={2}>
          <td>Prepared for {name}</td>
        </tr>
      </tfoot>
    </table>
  );
}
