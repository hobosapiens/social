import React from "react";
import {Field, reduxForm} from "redux-form";

import * as s from './Login.module.css';
import * as s2 from '../Common/FormsControls/FormControls.module.css';
import {createField, Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error, captchaURL}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField('@email', 'email', Input, 'text', [required, maxLength30])}
            {createField('Password', 'password', Input, 'password', [required, maxLength30])}
            {createField(null, 'rememberMe', Input, 'checkbox', null, null, 'rememberMe', 'Remember me')}

            {captchaURL &&
            <div className={s.captcha}>
                <img src={captchaURL} alt="" className={s.captchaImg}/>
                <Field type={'text'} name={'captcha'} component={Input} validate={[required]}/>
            </div>
            }
            {error &&
            <div className={s2.summaryError}>
                {error}
            </div>
            }
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logInUser(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} logOutUser={props.logOutUser} captchaURL={props.captchaURL}/>
    </div>
};

export default Login