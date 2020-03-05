import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

// Данные

let posts = [
    {id: 1, likeCount: 22, post: 'Commodi earum eligendi impedit itaque nisi nostrum placeat? Debitis delectus eos laborum, quae saepe tempore? Architecto molestiae nostrum quibusdam sunt vel! Quibusdam.'},
    {id: 2, likeCount: 13, post: 'Aut illum impedit sit tenetur. Aliquam beatae consectetur, corporis eaque, est excepturi in iure laboriosam laudantium minima possimus reprehenderit sunt tenetur, ut.'},
]

// Проходимся .map по массиву данных и создаем массив jsx элементов

let postsElements = posts.map(p => <Post message={p.post} likeCount={p.likeCount} key={p.id} />);

// Создаются компоненты, через props они получают данные из атрибутов

const MyPosts = (props) => {
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