import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import userDefaultMale from '../../../assets/images/userDefaultMale.png'
import Preloader from "../../Common/Preloader/Preloader";
import {ReactComponent as JobIcon} from '../../../assets/images/jobIcon.svg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./profileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    let onSubmit = (formData) => {
        const promise = saveProfile(formData)
        promise.then(
            () => {
                setEditMode(false);
            }
        );
    };

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userDefaultMale}
                 className={profile.photos.large != null
                     ? s.profileAva
                     : s.profileAvaDefault
                 }/>
            {isOwner && <input type={"file"} className={s.changeAvaBtn} onChange={onMainPhotoSelected}/>}
            <div className={s.descriptionInfo}>
                {editMode
                    ? <ProfileDataForm profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }} status={status} updateStatus={updateStatus}/>}
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return (
        <div>
            <div className={s.fullName}><b>{profile.fullName}</b></div>
            <div className={s.about}>{profile.aboutMe}</div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {profile.lookingForAJob
                ? <div className={s.job}>
                    <JobIcon/>
                    <span className={s.jobText}
                          style={{'marginLeft': '10px'}}>{profile.lookingForAJobDescription}</span>
                </div>
                : null
            }
            <div className={s.contacts}>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
            {isOwner && <div className={s.editBtn}>
                <button onClick={goToEditMode}>EditMode</button>
            </div>}
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
};

export default ProfileInfo