import React from 'react'
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers,
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import s from './Users.module.css';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import Pagination from "../Common/Pagination/Pagination";
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
            <div className={s.usersPagination}>
                <Pagination currentPage={this.props.currentPage} totalItemsCount={this.props.totalUsersCount}
                            onPageChanged={this.onPageChanged} pageSize={this.props.pageSize}/>
            </div>
            {this.props.isFetching ?
                <Preloader/> :
                <Users
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            }
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