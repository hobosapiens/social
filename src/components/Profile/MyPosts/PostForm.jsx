import React from "react";
import {Field, reduxForm} from "redux-form";

import * as s from './MyPosts.module.css'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div className={s.postAdd} >
                <Field
                    name={'postText'}
                    placeholder={'Post text...'}
                    component={Textarea}
                    validate={[required, maxLength10]}
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
    const addPost = (values) => {
        props.addPost(values.postText);
    };
    return <div className={s.login}>
        <PostReduxForm onSubmit={addPost}/>
    </div>
};

export default AddPostForm;