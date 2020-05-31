import React from 'react';
import s from './Users.module.css';
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, followingInProgress, follow, unfollow}) => {

    return <div className={s.usersContainer}>
        <Pagination currentPage={currentPage} totalItemsCount={totalUsersCount} onPageChanged={onPageChanged} pageSize={pageSize} />
        {
            users.map(u => <User user={u}
                                 key={u.id}
                                 followingInProgress={followingInProgress}
                                 follow={follow}
                                 unfollow={unfollow}
            />)
        }
    </div>
};

export default Users;

