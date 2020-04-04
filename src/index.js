import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import store from './redux/redux-store';

import App from './App';
import './index.css';
import StoreContext from "./StoreContext";

export let renderPage = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}

renderPage(store.getState());

store.subscribe( () => {
    let state = store.getState();
    renderPage(state);
});