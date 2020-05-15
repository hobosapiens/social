import React from "react";
import {Field, reduxForm} from "redux-form";

import * as s from './Login.module.css';
import * as s2 from '../Common/FormsControls/FormControls.module.css';
import {Input} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'@email'} name={'email'} component={Input} type={'text'} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLength30]} type={'password'} />
            </div>
            <div>
                <label>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
                </label>
            </div>
            { props.captchaURL &&
                <div>
                    <img src={props.captchaURL} alt="" className={s.captchImg}/>
                    <Field type={'text'} name={'captcha'} component={Input} validate={[required]}/>
                </div>
            }
            { props.error &&
                <div className={s2.summaryError}>
                    {props.error}
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
    const logIn = (formData) => {
        props.logInUser(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={logIn} logOutUser={props.logOutUser} captchaURL={props.captchaURL} />
    </div>
};

export default Login