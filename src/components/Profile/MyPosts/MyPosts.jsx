import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    // Проходимся .map по массиву данных и создаем массив jsx элементов. Далее передаем их через пропсы в нужные компоненты.
    let postsElements = props.posts.map(p => <Post message={p.post} likeCount={p.likeCount} key={p.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>
                <h3>my posts</h3>
            </div>
            <div className={s.postAdd}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} cols="30" rows="10"/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts