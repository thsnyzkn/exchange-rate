import { getExchangeRates } from "../api"

const initialState = {
    currencyCode:"USD",
    amount:"1.50",
    rates: {USD:"1.50"},
    supportedSymbols: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"]

}

export const ratesReducer = (state=initialState,action)=> {
    switch(action.type) {
        case AMOUNT_CHANGED:{
            return {...state,amount:action.payload}
        }
        case CURRENCY_CHANGED:{
            return {...state,currencyCode:action.payload}
        }
        case "rates/ratesReceived":{
            return {...state,rates:action.payload}
        }
        default:
            return state;
    }
}

//selectors
export const getAmount = state => state.rates.amount;
export const getCurrency = state=>state.rates.currencyCode
export const getRates = state => state.rates.rates
export const getSupportedSymbols = state => state.rates.supportedSymbols

//action types
export const AMOUNT_CHANGED = 'rates/amountChanged';
export const CURRENCY_CHANGED = 'rates/currencyCodeChanged'

//action creators

export const changeAmount = (amount)=> ({
    type:AMOUNT_CHANGED,
    payload:amount
})
export const changeCurrency = (currencyCode)=>({
    type:CURRENCY_CHANGED,
    payload:currencyCode
})

export function changeCurrencyCode (currencyCode) {
    return function changeCurrencyCodeThunk(dispatch,getState) {
        const state = getState();
        const symbols = getSupportedSymbols(state)
        dispatch({
            type:CURRENCY_CHANGED,
            payload:currencyCode
        });
        getExchangeRates(currencyCode,symbols).then(rates => {
            dispatch({
                type:"rates/ratesReceived",
                payload:rates
            })
        })
    }
   
}