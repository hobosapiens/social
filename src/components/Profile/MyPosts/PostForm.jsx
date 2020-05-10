import React from "react";
import {Field, reduxForm} from "redux-form";

import * as s from './MyPosts.module.css'

const PostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.postAdd} >
                <Field
                    name={'postText'}
                    placeholder={'Post text...'}
                    component={'textarea'}
                />
                <button type="submit">Add post</button>
            </div>
        </form>
    )
};

const PostReduxForm = reduxForm({
    form: 'dialog'
})(PostForm);

const AddPostForm = (props) => {
    const onSubmit = (values) => {
        props.addPost(values.postText);
    };
    return <div className={s.login}>
        <PostReduxForm onSubmit={onSubmit}/>
    </div>
};

export default AddPostForm;