import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from './store/store';

function ReduxProivder  ({children}) {
    return <Provider store={store}>{children}</Provider>
}

const reduxRender = (ui,options)=>
    render(ui,{wrapper:ReduxProivder,...options});

export * from "@testing-library/react";

export {reduxRender as render};

