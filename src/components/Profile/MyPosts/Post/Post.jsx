import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQd30s15ooI6v7fckr0JUBr_7LB6AtmOE_H945haK0xjfeGWrCD' alt=''/>
                <span className={s.text}>{props.message}</span>
                <a className={s.like} href='#'>Like! {props.likeCount}</a>
            </div>
        </div>
    )
};

export default Post