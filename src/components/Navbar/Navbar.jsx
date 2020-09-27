import React from 'react'
import {NavLink} from 'react-router-dom';

import s from './Navbar.module.css';
import NavbarFriendlist from './NavbarFriendlist/NavbarFriendlist';

const Navbar = (props) => {

    let friendsItems = props.navbar.friendList.map(f => <NavbarFriendlist
        name={f.name} id={f.id} key={f.id} photo={f.photos.small} status={f.status}
    />);

    return (
        <nav className={s.nav}>
            <div className={s.menu}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </div>
            </div>
            <div className={s.friends}>
                <div className={s.title}>Friends:</div>
                <div className={s.friendsList}>
                    { friendsItems }
                </div>
            </div>
        </nav>
    )
};

export default Navbar