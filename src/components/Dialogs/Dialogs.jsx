import React from 'react'
import s from './Dialogs.module.css';

// Создаются компоненты, через props они получают данные из атрибутов
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
    // Проходимся .map по массиву данных и создаем массив jsx элементов. Далее передаем их через пропсы в нужные компоненты.
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Dialogs