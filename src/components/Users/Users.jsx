import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
            { id: 1, photoUrl: 'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png', followed: false, fullName: 'Egor', status: 'Hello There!', location: { city: 'Moscow', country: 'Russia' } },
            { id: 2, photoUrl: 'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png', followed: false, fullName: 'Masha', status: 'I am here', location: { city: 'Perm', country: 'Russia' } },
            { id: 3, photoUrl: 'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png', followed: true, fullName: 'John', status: 'test', location: { city: 'Saint-Petersburg', country: 'Russia' } },
            { id: 4, photoUrl: 'https://bizraise.pro/wp-content/uploads/2014/09/no-avatar-300x300.png', followed: true, fullName: 'Gosha', status: 'test', location: { city: 'Moscow', country: 'Russia' } },
            ]
        )
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
}

export default Users
