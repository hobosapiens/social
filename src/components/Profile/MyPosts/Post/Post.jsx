import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img className={s.img} src='https://social-network.samuraijs.com/activecontent/images/users/7298/user.jpg' alt=''/>
                <span className={s.text}>{props.message}</span>
            </div>
        </div>
    )
};

export default Post