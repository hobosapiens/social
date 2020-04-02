import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import store from './redux/redux-store';

import App from './App';
import './index.css';

export let renderPage = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
}

renderPage(store.getState());

store.subscribe( () => {
    let state = store.getState();
    renderPage(state);
});