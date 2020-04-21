import React from 'react';
import s from './ProfileInfo.module.css';
import userDefaultMale from '../../../assets/images/userDefaultMale.png'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    // Т.к. метод map нельзя применять к объекту, я преобразовал объект в массив значений и делаю ниже map по нему.
    var userContacts = Object.values(props.profile.contacts);

    return (
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large != null
                ? props.profile.photos.large
                : userDefaultMale
            } className={props.profile.photos.large != null
                ? s.profileAva
                : s.profileAvaDefault
            }/>
            <div className={s.descriptionInfo}>
                <div className={s.fullName}>{props.profile.fullName}</div>
                <div className={s.about}>{props.profile.aboutMe}</div>
                <div className={s.job}>
                    <div className={s.jobIcon}></div>
                    <div className={s.jobText}>{props.profile.lookingForAJobDescription}</div>
                </div>
                <div className={s.contacts}>
                    { userContacts.map(c => <div>{c}</div>) }
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo