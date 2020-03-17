import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './App';
import './index.css';
import {addMessage, addPost, updateMessageText, updatePostText} from './redux/state'

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updatePostText={updatePostText} addMessage={addMessage} updateMessageText={updateMessageText} />
        </BrowserRouter>, document.getElementById('root'));
}