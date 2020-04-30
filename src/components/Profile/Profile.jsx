import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileStatus from './ProfileStatus';

const Profile = (props) => {

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} />
            <ProfileStatus status={'Testovii status'} />
            <MyPostsContainer />
        </div>
    )
};

export default Profile