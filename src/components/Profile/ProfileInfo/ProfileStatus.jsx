import React, {useEffect, useState} from 'react';

import s from '../Profile.module.css';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div className={s.status}>
            {!editMode &&
            <span onDoubleClick={activateEditMode}
                  title={'Click twice to change'}>{props.status || '--------------'}</span>
            }
            {editMode &&
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                   value={status}/>
            }
        </div>
    )
};

export default ProfileStatus;