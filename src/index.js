import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import store from "./store/store";
import {Provider} from 'react-redux'
import "./style.css";
import { getCurrency,changeCurrencyCode } from "./store/rates";

store.dispatch(function getInitialRates(dispatch,getState){
    const state = getState();
    const currencyCode = getCurrency(state);
    dispatch(changeCurrencyCode(currencyCode));
})

ReactDOM.render(<Provider store={store}><ExchangeRate /></Provider>, document.getElementById("root"));
