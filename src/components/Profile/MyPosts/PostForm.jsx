import React from "react";
import {Field, reduxForm, reset} from "redux-form";

import * as s from './MyPosts.module.css'
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength300 = maxLengthCreator(300);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.postAdd}>
                <Field
                    name={'postText'}
                    placeholder={'Post text...'}
                    component={Textarea}
                    validate={[required, maxLength300]}
                />
                <button type="submit">Add post</button>
            </div>
        </form>
    )
};

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dialog'));
};

const PostReduxForm = reduxForm({
    form: 'dialog',
    onSubmitSuccess: afterSubmit
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