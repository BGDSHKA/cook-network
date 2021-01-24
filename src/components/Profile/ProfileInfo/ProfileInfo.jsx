import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/nophoto.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
       return <Preloader />
    }
    
    return (
        <div>
            <div className={s.descriptionBlock}>
               {profile.photos.large 
               ? <img src={profile.photos.large} alt="" />
               : <img src={userPhoto} alt="" />} 
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div>{profile.aboutMe}</div>
                <div>vk: {profile.contacts.vk}</div>
                {profile.lookingForAJob ? '✓ Ищу работу' : '× Не ищу работу'}
                
            </div>
        </div>
    )
}

export default ProfileInfo;