import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import userDefaultMale from '../../../assets/images/userDefaultMale.png'
import Preloader from "../../Common/Preloader/Preloader";
import {ReactComponent as JobIcon} from '../../../assets/images/jobIcon.svg';
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./profileDataForm";
import {ReactComponent as UploadIcon} from '../../../assets/images/uload.svg';

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
                     : s.profileAvaDefaultprofi
                 } alt={'Profile Ava'} />
            {isOwner && <label className={s.changeAva}><UploadIcon /><input type={"file"} className={s.changeAvaBtn} onChange={onMainPhotoSelected} /></label>}
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

    let contacts = profile.contacts;
    Object.keys(contacts).forEach((key) => (contacts[key] === null || contacts[key] === '') && delete contacts[key]);

    return (
        <>
            <div className={s.fullName}><b>{profile.fullName}</b></div>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            { contacts &&
                <div className={s.contacts}>
                    {Object.keys(contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={contacts[key]} />
                    })}
                </div>
            }
            <div className={s.about}>{profile.aboutMe}</div>
            {profile.lookingForAJob
                ? <div className={s.job}>
                    <JobIcon/>
                    <span className={s.jobText}
                          style={{'marginLeft': '10px'}}>{profile.lookingForAJobDescription}</span>
                </div>
                : null
            }
            {isOwner && <div className={s.editBtn}>
                <button onClick={goToEditMode}>Edit Mode</button>
            </div>}
        </>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return (
        <a href={contactValue} target="_blank" rel="noopener noreferrer" className={s.contact}>{contactTitle}</a>
    )
};

export default ProfileInfo