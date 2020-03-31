import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {

    // Проходимся .map по массиву данных и создаем массив jsx элементов. Далее передаем их через пропсы в нужные компоненты.
    let postsElements = props.posts.posts.map(p => <Post message={p.post} likeCount={p.likeCount} key={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={s.posts}>
            <div className={s.postsTitle}>
                <h3>my posts</h3>
            </div>
            <div className={s.postAdd}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.posts.newPostText} cols="30" rows="10"/>
                <button onClick={addPost}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts