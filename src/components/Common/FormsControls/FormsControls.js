import React from "react";

import * as s from './FormControls.module.css'
import { Field } from "redux-form";

const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    const withLabel = children.props.type === 'checkbox' && children.props.labeltext !== '';

    return (
        <div className={`${s.formControl} ${hasError && s.error}`}>
            {children}
            {withLabel && <label htmlFor={children.props.id}><b>{children.props.labeltext}</b></label>}
            { hasError &&  <span className={s.alert}>{error}</span> }
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
};


export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
};

export const createField = (placeholder, name, component, type, validators, text = '', id, labeltext, props = {}) => {
    return (
        <div className={`${name}`}>
            <Field placeholder={placeholder} name={name} component={component} validate={validators} type={type} id={id} labeltext={labeltext} {...props} />{text}
        </div>
    )
};