import React from "react";
import {Field, reduxForm} from "redux-form";

import * as s from './Dialogs.module.css'

const DialogForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addMessage} >
                <Field
                    name={'messageText'}
                    placeholder={'Message text...'}
                    component={'textarea'}
                />
                <button type="submit">Add message</button>
            </div>
        </form>
    )
};

const DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogForm);

const AddDialogMessageForm = (props) => {
    const onSubmit = (values) => {
        props.addMessage(values.messageText);
    };
    return <div className={s.login}>
        <DialogReduxForm onSubmit={onSubmit} />
    </div>
};

export default AddDialogMessageForm;