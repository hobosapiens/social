import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';

import userDefaultMale from '../../assets/images/userDefaultMale.png';

let Users = (props) => {

    let getUsers = () => {
        if( props.users.length === 0 ) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })
        }
    };

    return <div className={s.usersContainer}>
        <button onClick={ getUsers } className={s.getUsers}>getUsers</button>
        {
        props.users.map(u =>
            <div className={s.user} key={u.id}>
                <div className={s.userInfo}>
                    <span className={s.name}>{u.name}</span>
                    <div className={s.avaWrap}>
                        <img src={ u.photos.small != null ?  u.photos.small  : userDefaultMale } alt={u.name} />
                    </div>
                    { u.followed
                        ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                        : <button onClick={ () => { props.follow(u.id) } }>Follow</button>
                    }
                </div>
                <div className={s.status}>{u.status}</div>
                {/*<div className={s.location}>*/}
                {/*    <span className={s.city}>{u.location.city},</span>*/}
                {/*    <span className={s.country}>{u.location.country}</span>*/}
                {/*</div>*/}
            </div>
            )
        }
        </div>
};

export default Users;