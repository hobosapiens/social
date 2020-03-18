import React from 'react'
import s from './Dialogs.module.css';

// Создаются компоненты, через props они получают данные из атрибутов
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    // Проходимся .map по массиву данных и создаем массив jsx элементов. Далее передаем их через пропсы в нужные компоненты.
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} key={m.id} senderClass={m.senderClass}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateMessageText(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.addMessage}>
                    <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText} cols="30" rows="10"/>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs