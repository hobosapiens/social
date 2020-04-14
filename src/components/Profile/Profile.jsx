import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileImg from './ProfileImg/ProfileImg';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileImg />
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
};

export default Profile