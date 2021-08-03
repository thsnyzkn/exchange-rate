import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { ratesReducer } from './rates';
import { usersReducer } from './users';



const store = createStore(combineReducers({
    users:usersReducer,
    rates:ratesReducer
}),
applyMiddleware(thunk));

export default store;