import React from 'react';
import {connect} from 'react-redux';
import {addPost, requestPosts} from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';
import {compose} from "redux";

class MyPostsContainer extends React.Component {

    componentDidMount() {
        this.props.requestPosts();
    }

    render() {
        return <MyPosts {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
};

export default compose(
    connect(mapStateToProps, {addPost, requestPosts})
)(MyPostsContainer);