import React from 'react'
import {connect} from "react-redux";

import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    }
};

let mapDispatchToProps = (dispatch) => {
    return {}
};

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer