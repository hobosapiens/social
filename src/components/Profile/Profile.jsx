import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileImg from "./ProfileImg/ProfileImg";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileImg />
            <ProfileInfo />
            <MyPosts posts={ props.profilePage.posts }
                     newPostText={ props.profilePage.newPostText }
                     addPost={ props.addPost }
                     updatePostText={ props.updatePostText }
            />
        </div>
    )
};

export default Profile