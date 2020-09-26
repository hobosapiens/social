import React from "react";
import {Field, reduxForm, reset} from "redux-form";

import * as s from './Dialogs.module.css'
import {Textarea} from "../Common/FormsControls/FormsControls";
import {required, maxLengthCreator} from "../../utils/validators/validators";

const maxLength200 = maxLengthCreator(200);

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addMessage} >
                <Field
                    name={'messageText'}
                    placeholder={'Message text...'}
                    component={Textarea}
                    validate={[required, maxLength200]}
                />
                <button type="submit">Add message</button>
            </div>
        </form>
    )
};

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dialog'));
};

const DialogReduxForm = reduxForm({
    form: 'dialog',
    onSubmitSuccess: afterSubmit
})(DialogForm);

const AddDialogMessageForm = (props) => {
    const addMessage = (values) => {
        props.addMessage(values.messageText);
    };
    return <div className={s.login}>
        <DialogReduxForm onSubmit={addMessage} />
    </div>
};

export default AddDialogMessageForm;