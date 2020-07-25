import React, {Component} from 'react';
import {HashRouter, Route, withRouter} from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/Footer'
import News from './components/News/News';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import SettingsContainer from "./components/Settings/SettingsContainer";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {

        if (!this.props.initialized) {
            return (
                <div className='app-wrapper'>
                    <div className="initializePreloader">
                        <Preloader className='initializePreloader' />
                    </div>
                </div>
            )
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                    <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={() => <SettingsContainer />}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const MainApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
};

export default MainApp;

