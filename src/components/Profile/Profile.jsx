import React, {PureComponent} from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

class Profile extends PureComponent {
    render() {

        return (
            <div className={s.profile}>
                <ProfileInfo
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
                <MyPostsContainer/>
            </div>
        )
    }
}

export default Profile