import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    // console.log(props.posts);
    // debugger;
    // Проходимся .map по массиву данных и создаем массив jsx элементов. Далее передаем их через пропсы в нужные компоненты.
    let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount} key={p.id} />);

    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>
                my posts
            </div>
            <div className={s.postAdd}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add Post</button>
            </div>
            { postsElements }
        </div>
    )
};

export default MyPosts