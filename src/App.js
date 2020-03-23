import React from 'react';
import {Route} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Footer from './components/Footer/Footer'
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.navbar} />
            <div className='app-wrapper-content'>
                <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} addPost={props.store.addPost.bind(props.store)} updatePostText={props.store.updatePostText.bind(props.store)} />} />
                <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.store.addMessage.bind(props.store)} updateMessageText={props.store.updateMessageText.bind(props.store)} />} />
                <Route path='/news' render={News} />
                <Route path='/music' render={Music} />
                <Route path='/settings' render={Settings} />
            </div>
            <Footer/>
        </div>
    );
};

export default App;
