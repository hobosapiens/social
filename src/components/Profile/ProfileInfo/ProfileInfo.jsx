import React from 'react';
import s from './ProfileInfo.module.css';
import userDefaultMale from '../../../assets/images/userDefaultMale.png'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large != null
                    ? props.profile.photos.large
                    : userDefaultMale
            } className={s.profileAva} />
            <div className={s.descriptionInfo}>
                <div className={s.fullName}>{props.profile.fullName}</div>
                <div className={s.about}>{props.profile.aboutMe}</div>
                <div className={s.job}>
                    <div className={s.jobIcon}>{props.profile.fullName}</div>
                    <div className={s.jobText}>{props.profile.lookingForAJobDescription}</div>
                </div>
                {/*<div className={s.contacts}>*/}
                {/*    <div className={s.website}>{props.profile.contacts.website}</div>*/}
                {/*    <div className={s.facebook}>{props.profile.contacts.facebook}</div>*/}
                {/*    <div className={s.vk}>{props.profile.contacts.vk}</div>*/}
                {/*    <div className={s.twitter}>{props.profile.contacts.twitter}</div>*/}
                {/*    <div className={s.instagram}>{props.profile.contacts.instagram}</div>*/}
                {/*    <div className={s.youtube}>{props.profile.contacts}</div>*/}
                {/*    <div className={s.github}>{props.profile.contacts.youtube}</div>*/}
                {/*    <div className={s.mainLink}>{props.profile.contacts.mainLink}</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
};

export default ProfileInfo