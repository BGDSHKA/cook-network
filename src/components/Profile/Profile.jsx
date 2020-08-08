import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
      <div>
      <img src='https://sun9-35.userapi.com/c855536/v855536487/25136c/i08jzIeEloU.jpg'></img>
      <div>
        ava + descr
      </div>
     <MyPosts />
    </div>
    )
}

export default Profile;