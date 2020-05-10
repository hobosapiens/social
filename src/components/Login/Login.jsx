import React from "react";
import {Field, reduxForm} from "redux-form";

import * as s from './Login.module.css'

const LoginForm = (props) => {

    let Logout = () => {
        props.logOutUser();
    };

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'@email'} name={'email'} component={'input'} type={'text'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'} />
            </div>
            <div>
                <label>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'} /> remember me
                </label>
            </div>
            <div>
                <button type="submit">Login</button>
                <button type="button" onClick={Logout}>Logout</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logInUser(formData.email, formData.password, formData.rememberMe);
    };

     return <div className={s.login}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} logOutUser={props.logOutUser} />
    </div>
};

export default Login