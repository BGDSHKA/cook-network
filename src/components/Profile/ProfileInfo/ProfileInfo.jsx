import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://sun9-35.userapi.com/c855536/v855536487/25136c/i08jzIeEloU.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo;