import React from 'react';
import s from './Users.module.css';
import userDefaultMale from '../../assets/images/userDefaultMale.png';
import {NavLink} from 'react-router-dom';
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let currentPage = props.currentPage;

    for(let i = 0; i <= pagesCount; i++){
        pages.push(i);
    }

    let firstPage = 1;
    let lastPage = pages.length - 1;

    pages = pages.filter(function(el) {
        if(el === firstPage || el > currentPage - 5  && el < currentPage + 5 || el === lastPage) {
            return el
        }
    });

    return <div className={s.usersContainer}>
        <div className={s.pagination}>
            {pages.map(p =>{
                return <span
                    className={props.currentPage === p && s.activePage}
                    onClick={ (e) => { props.onPageChanged(p) } }
                >{p}</span>
            })}
        </div>
        {
            props.users.map(u =>
                <div className={s.user} key={u.id}>
                    <div className={s.userInfo}>
                        <span className={s.name}>{u.name}</span>
                        <div className={s.avaWrap}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={ u.photos.small != null ?  u.photos.small  : userDefaultMale } alt={u.name} />
                            </NavLink>
                        </div>
                        { u.followed
                            ? <button onClick={ () => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": '1170b118-702c-4511-af42-156a5dd648b2'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id);
                                        }
                                    });

                            } }>Unfollow</button>
                            : <button onClick={ () => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": '1170b118-702c-4511-af42-156a5dd648b2'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });

                            } }>Follow</button>
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

