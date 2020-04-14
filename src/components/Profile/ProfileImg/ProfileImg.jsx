import React from 'react';
import s from './ProfileImg.module.css';

const ProfileImg = (props) => {
    return (
        <img
            className={s.profileImg}
            src='https://upload.wikimedia.org/wikipedia/commons/6/62/Berkeley-San_Francisco-Oakland--Sunset-Panorama.jpg'
            alt=''/>
    )
};

export default ProfileImg