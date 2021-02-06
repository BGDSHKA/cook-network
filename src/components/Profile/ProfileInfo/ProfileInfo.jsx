import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/nophoto.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}) => {

    if (!profile) {
       return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
         if  (e.target.files.length) {
             savePhoto(e.target.files[0])
         }
    }
    
    return (
        <div>
            <div className={s.descriptionBlock}>
               {profile.photos.large 
               ? <img src={profile.photos.large} alt="" />
               : <img src={userPhoto} alt="" />} 
               {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                <div>{profile.aboutMe}</div>
                <div>vk: {profile.contacts.vk}</div>
                {profile.lookingForAJob ? '✓ Ищу работу' : '× Не ищу работу'}
                
            </div>
        </div>
    )
}

export default ProfileInfo;