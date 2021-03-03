import React, {PureComponent} from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

class Profile extends PureComponent {
    render() {
        return (
            <div className={s.profile}>
                <ProfileInfo
                    isOwner={this.props.isOwner}
                    savePhoto={this.props.savePhoto}
                    profile={this.props.profile}
                    status={this.props.status}
                    saveProfile={this.props.saveProfile}
                    updateStatus={this.props.updateStatus}
                />
                {this.props.isOwner && <MyPostsContainer userId={this.props.userId}/>}
            </div>
        )
    }
}

export default Profile