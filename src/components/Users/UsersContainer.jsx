import React from 'react'
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersotalCountAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./Users";

// Контейнерная компонента которая делает AJAX запросы
class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                }
            );
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    };

    render() {

        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default DialogsContainer;