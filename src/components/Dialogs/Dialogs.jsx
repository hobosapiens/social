import React from 'react'
import s from './Dialogs.module.css';

// Создаются компоненты, через props они получают данные из атрибутов
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

// Данные
let dialogs = [
    {id: 1, name: 'Рафаэль'},
    {id: 2, name: 'Микеланджело'},
    {id: 3, name: 'Донателло'},
    {id: 4, name: 'Леонардо'},
    {id: 5, name: 'Сплинтер'},
    {id: 6, name: 'Эйприл'}
];

let messages = [
    {
        id: 1,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet aperiam consequuntur corporis cum distinctio id ipsum, iure nemo nostrum numquam quaerat qui ullam voluptatem voluptatibus. Cum eligendi laudantium qui.'
    },
    {
        id: 2,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur ipsum quidem reprehenderit similique. Animi dolorem eius ex iusto minima molestias, nesciunt nulla qui quibusdam repellendus sequi tenetur vitae voluptate.'
    },
    {
        id: 3,
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad cum cumque eaque, error esse harum impedit iste, mollitia nostrum odio placeat praesentium quam quia reiciendis sunt temporibus totam unde.'
    },
];

// Проходимся .map по массиву данных и создаем массив jsx элементов
let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
let messagesElements = messages.map(m => <Message message={m.message} id={m.id} key={m.id} />);

const Dialogs = (props) => {
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