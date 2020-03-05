import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imageBlock}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/62/Berkeley-San_Francisco-Oakland--Sunset-Panorama.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + desccription
            </div>
        </div>
    )
};

export default ProfileInfo