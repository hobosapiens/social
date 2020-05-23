import React from 'react'
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsers,
    getTotalUsersCount
} from "../../redux/users-selectors";

// Контейнерная компонента которая делает AJAX запросы
class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        // thunk
        this.props.requestUsers(currentPage, pageSize)

    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        // thunk
        this.props.requestUsers(pageNumber, pageSize)

    };

    render() {
        return <>
            { this.props.isFetching ?  <Preloader /> : null }
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers
    })(UsersContainer);