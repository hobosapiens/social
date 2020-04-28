import React from 'react'
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    // Проходимся .map по массиву данных и создаем массив jsx элементов. Далее передаем их через пропсы в нужные компоненты.
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} key={m.id} senderClass={m.senderClass}/>);

    let onAddMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.messageChange(text);
    };

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.addMessage}>
                    <textarea onChange={onMessageChange} value={props.newMessageText} cols='30' rows='10'/>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs