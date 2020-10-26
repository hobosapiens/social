import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from "./PostForm";

const MyPosts = React.memo((props) => {

    // Проходимся .map по массиву данных и создаем массив jsx элементов. Далее передаем их через пропсы в нужные компоненты.
    let postsElements =
        [...props.posts]
            .map((p, index) => <Post message={p.post} key={index}/>)
            .reverse();
    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>
                <h3>My posts</h3>
            </div>
            <AddPostForm addPost={props.addPost} />
            {postsElements}
        </div>
    )
});

export default MyPosts