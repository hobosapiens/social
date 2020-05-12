import React from "react";

import * as s from './FormControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${s.formControl} ${hasError && s.error}`}>
            {props.children}
            { hasError &&  <span className={s.alert}>{meta.error}</span> }
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