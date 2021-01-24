import React from 'react'
import Paginator from '../../common/Paginator/Paginator'
import User from './User'

const Users = ({ currentPage, follow, unfollow, followingInProgress, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <Paginator currentPage={currentPage} totalUsersCount={totalUsersCount}
                pageSize={pageSize} onPageChanged={onPageChanged} />
            <div>
                {users.map(u => <User
                    key={u.id}
                    user={u}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow} />)}
            </div>
        </div>
    )
}

export default Users
