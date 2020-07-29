import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import * as s2 from "../../Common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.fullName}>
                <b>FullName</b>: {createField('Full name', 'fullName', Input, 'text', [required])}
            </div>
            <div className={s.about}>
                <b>About Me</b>: {createField('About me', 'aboutMe', Textarea, 'text', [required])}
            </div>
            <div className={s.job}>
                <div><b>Looking for a job</b>: {createField(null,'lookingForAJob', Input, 'checkbox', null)}</div>
                <div><b>My skills</b>: {createField('Looking For A Job Description', 'lookingForAJobDescription', Textarea, 'text', [required])}</div>
            </div>
            {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key} className={s.contacts}>
                        <b>{key}</b>: {createField(key, 'contacts.' + key, Input, 'text', [])}
                    </div>
                )
            })}
            { error &&
            <div className={s2.summaryError}>
                {error}
            </div>
            }
            <button>Save</button>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm);

export default ProfileDataFormReduxForm;

