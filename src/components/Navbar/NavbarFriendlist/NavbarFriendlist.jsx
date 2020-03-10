import React from 'react'
import {NavLink} from "react-router-dom";

import s from './NavbarFriendlist.module.css';

const NavbarFriendlist = (props) => {
    return (
        <div className={s.friend} >
            <div className={s.avaWrap}>
                <img src={props.avaSrc} />
            </div>
            <NavLink to="/friends">
                {props.name}
            </NavLink>
        </div>

    )
};

export default NavbarFriendlist