import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {logInUser, logOutUser} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return (
            <Login {...this.props}
                   logInUser={this.props.logInUser}
                   logOutUser={this.props.logOutUser}
                   captchaURL={this.props.captchaURL}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
});

export default connect(mapStateToProps, {logInUser, logOutUser})(LoginContainer);