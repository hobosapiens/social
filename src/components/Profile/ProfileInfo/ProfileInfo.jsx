import React from 'react';
import s from './ProfileInfo.module.css';
import userDefaultMale from '../../../assets/images/userDefaultMale.png'
import Preloader from "../../Common/Preloader/Preloader";
import { ReactComponent as JobIcon } from '../../../assets/images/jobIcon.svg';
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    // Т.к. метод map нельзя применять к объекту, я преобразовал объект в массив значений и делаю ниже map по нему.
    let userContactsFormated = Object
        .values(props.profile.contacts)
        .filter(word => word != null);

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
                <div className={s.fullName}><b>{props.profile.fullName}</b></div>
                <div className={s.about}>{props.profile.aboutMe}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                { props.profile.lookingForAJob
                    ? <div className={s.job}>
                        <JobIcon />
                        <span className={s.jobText} style={{'marginLeft':'10px'}}>{props.profile.lookingForAJobDescription}</span>
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