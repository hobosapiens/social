import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import store from './redux/state';

import App from './App';
import './index.css';

export let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} store={store} />
        </BrowserRouter>, document.getElementById('root'));
}

console.log(store);

renderPage(store.getState());

store.subscribe(renderPage);