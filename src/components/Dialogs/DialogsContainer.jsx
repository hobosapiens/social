import React from 'react'
import {addMessage, requestDialogs, requestMessages} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class dialogsContainer extends React.Component {

    componentDidMount() {
        this.props.requestDialogs();
        this.props.requestMessages();
    }

    render() {
        return <Dialogs {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

export default compose(
    connect(mapStateToProps, { addMessage, requestDialogs, requestMessages }),
    withAuthRedirect
)(dialogsContainer);