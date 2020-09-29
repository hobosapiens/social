import React from 'react'
import {NavLink} from 'react-router-dom';

import s from './NavbarFriendlist.module.css';
import userDefaultMale from "../../../assets/images/userDefaultMale.png";

const NavbarFriendlist = (props) => {
    return (
        <div className={s.friend}>
            <NavLink to={'/profile/' + props.id}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.avaWrap}>
                    <img src={props.photo || userDefaultMale}
                         className={props.photo != null
                             ? s.profileAva
                             : s.profileAvaDefault
                         }/>
                </div>
            </NavLink>
            {props.status &&
                <div className={s.status}>
                    {props.status}
                </div>
            }

        </div>

    )
};

export default NavbarFriendlist