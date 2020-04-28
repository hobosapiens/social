import React from 'react'
import { addMessage, messageChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    messageChange
})(Dialogs);

export default DialogsContainer;