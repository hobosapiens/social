import React from 'react'
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

import {ReactComponent as LogOutIcon} from '../../../src/assets/images/logout.svg';

const Header = (props) => {
    let logout = () => {
        props.logOutUser();
    };

    return (
        <header className={s.header}>
            <div className={s.header_text}>
                <span className={s.title}>Web Campfire</span>
                <span className={s.subtitle}>Demo social network</span>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <>
                        <span>{props.login}</span>
                        <button type={'button'} onClick={logout}><LogOutIcon/></button>
                    </>
                    : <NavLink to={'/login'} className={s.login}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header