import React from 'react'
import { addMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessageActionCreator());
//         },
//         messageChange: (text) => {
//             dispatch(updateNewMessageTextActionCreator(text));
//         }
//     }
// };

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Dialogs);