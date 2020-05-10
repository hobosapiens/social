import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from "./PostForm";

const MyPosts = (props) => {
    // Проходимся .map по массиву данных и создаем массив jsx элементов. Далее передаем их через пропсы в нужные компоненты.
    let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount} key={p.id}/>);

    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>
                <h3>my posts</h3>
            </div>
            <AddPostForm addPost={props.addPost} />
            {postsElements}
        </div>
    )
};

export default MyPosts