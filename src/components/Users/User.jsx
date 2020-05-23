import React from 'react';
import s from './Users.module.css';
import userDefaultMale from '../../assets/images/userDefaultMale.png';
import {NavLink} from 'react-router-dom';

let User = ({user, followingInProgress, follow, unfollow}) => {

    return (
        <div className={s.user}>
            <div className={s.userInfo}>
                <span className={s.name}>{user.name}</span>
                <div className={s.avaWrap}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userDefaultMale} alt={user.name}/>
                    </NavLink>
                </div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                        unfollow(user.id)

                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                        follow(user.id)

                    }}>Follow</button>
                }
            </div>
            <div className={s.status}>{user.status}</div>
        </div>
    )
};

export default User;

