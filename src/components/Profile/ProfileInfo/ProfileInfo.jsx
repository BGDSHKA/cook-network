import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
       return <Preloader />
    }
    
    debugger
    return (
        <div>
            <div className={s.HeaderBlock}>
                <img src='https://sun9-35.userapi.com/c855536/v855536487/25136c/i08jzIeEloU.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.aboutMe}</div>
                <div>vk: {props.profile.contacts.vk}</div>
                {props.profile.lookingForAJob ? '✓ Ищу работу' : '× Не ищу работу'}
                
            </div>
        </div>
    )
}

export default ProfileInfo;