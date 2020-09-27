import React from 'react'
import {connect} from 'react-redux';

import Navbar from './Navbar';
import {requestFriends} from "../../redux/navbar-reducer";

class NavbarContainer extends React.Component {

    componentDidMount() {
        this.props.requestFriends()
    }

    render() {
        return <Navbar {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    }
};

export default connect(mapStateToProps, {requestFriends})(NavbarContainer);