import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let messageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (<Dialogs
        onAddMessage={addMessage}
        onMessageChange={messageChange}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        newMessageText={state.dialogsPage.newMessageText}
    />)
};

export default DialogsContainer;