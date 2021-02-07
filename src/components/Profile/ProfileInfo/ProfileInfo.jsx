import React, {useState} from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/nophoto.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {
const [editMode, setEditMode] = useState(false)


    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(()=> {
            setEditMode(false);
        })
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                {profile.photos.large
                    ? <img src={profile.photos.large} alt="" />
                    : <img src={userPhoto} alt="" />}
                <div>{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}</div>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                {editMode 
                ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} />
                : <ProfileData profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, setEditMode}) => {
    return <>
        {isOwner && <div><button onClick={() => setEditMode(true)}>edit</button></div>}
        <div>{profile.fullName}</div>
        {profile.lookingForAJob ? '✓ Ищу работу' : '× Не ищу работу'}
        <div><b>VK:</b> {profile.contacts.vk}</div>
        <div><b>Description:</b> {profile.lookingForAJobDescription}</div>
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts.[key]} />
        })}</div>
    </>
}


export const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;