import React from 'react'
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersotalCountAC} from "../../redux/users-reducer";
import UsersAPICOmponent from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (CurrentPage) => {
            dispatch(setCurrentPageAC(CurrentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersotalCountAC(totalCount))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPICOmponent);

export default DialogsContainer;