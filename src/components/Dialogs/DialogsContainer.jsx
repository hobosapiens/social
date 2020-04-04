import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };
                let messageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                };
                return (
                    <Dialogs
                        onAddMessage={addMessage}
                        onMessageChange={messageChange}
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.newMessageText}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;