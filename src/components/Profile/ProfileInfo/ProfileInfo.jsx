import React from 'react';
import s from './ProfileInfo.module.css';
import userDefaultMale from '../../../assets/images/userDefaultMale.png'
import Preloader from "../../Common/Preloader/Preloader";
import { ReactComponent as JobIcon } from '../../../assets/images/jobIcon.svg';
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus,isOwner, savePhoto}) => {
    if(!profile) {
        return <Preloader />
    }

    // Т.к. метод map нельзя применять к объекту, я преобразовал объект в массив значений и делаю ниже map по нему.
    let userContactsFormated = Object
        .values(profile.contacts)
        .filter(word => word != null);

    let onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userDefaultMale}
                 className={profile.photos.large != null
                ? s.profileAva
                : s.profileAvaDefault
            }/>
            { isOwner && <input type={"file"} className={s.changeAvaBtn} onChange={onMainPhotoSelected} /> }
            <div className={s.descriptionInfo}>
                <div className={s.fullName}><b>{profile.fullName}</b></div>
                <div className={s.about}>{profile.aboutMe}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                { profile.lookingForAJob
                    ? <div className={s.job}>
                        <JobIcon />
                        <span className={s.jobText} style={{'marginLeft':'10px'}}>{profile.lookingForAJobDescription}</span>
                     </div>
                    : null
                }
                <div className={s.contacts}>
                    { userContactsFormated.map(c => <a href={c} target={'_blank'}>{c}</a>) }
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo