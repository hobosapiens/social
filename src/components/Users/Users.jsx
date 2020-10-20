import React from 'react';
import s from './Users.module.css';
import User from "./User";

let Users = ({users, followingInProgress, follow, unfollow}) => {

    return <div className={s.users}>
        <div className={s.usersContainer}>
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={followingInProgress}
                                     follow={follow}
                                     unfollow={unfollow}
                />)
            }
        </div>
    </div>
};

export default Users;

