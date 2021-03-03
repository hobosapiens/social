import React from 'react';
import s from './Users.module.css';
import userDefaultMale from '../../assets/images/userDefaultMale.png';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

let User = ({user, followingInProgress, follow, unfollow}) => {

    return (
        <div className={cn({[s.userWithStatus]: user.status !== null}, s.user)}>
            <div className={s.userInnerWrap}>
                <div className={s.avaWrap}>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={cn({[s.userWithAva]: user.photos.small !== null}, s.userAva)}
                             src={user.photos.small !== null ? user.photos.small : userDefaultMale} alt={user.name}/>
                    </NavLink>
                </div>
                <div className={s.userInfo}>
                    <NavLink to={'/profile/' + user.id} className={s.userName}> {user.name} </NavLink>
                    {user.status && <div className={s.status}>{user.status}</div>}
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                            unfollow(user.id)

                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {

                            follow(user.id)

                        }}>Follow</button>
                    }
                </div>
            </div>
        </div>
    )
};

export default User;

