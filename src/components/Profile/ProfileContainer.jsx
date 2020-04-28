import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {geUsertProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        this.props.geUsertProfile(userId);

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {geUsertProfile})(WithURLDataContainerComponent);