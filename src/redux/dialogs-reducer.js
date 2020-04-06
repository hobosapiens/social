const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Рафаэль'},
        {id: 2, name: 'Микеланджело'},
        {id: 3, name: 'Донателло'},
        {id: 4, name: 'Леонардо'},
        {id: 5, name: 'Сплинтер'},
        {id: 6, name: 'Эйприл'}
    ],
    messages: [
        {id: 1, senderClass: 'me', message: 'Accusamus amet aperiam consequuntur corporis cum distinctio id ipsum, iure nemo nostrum.'},
        {id: 2, senderClass: 'interlocutor', message: 'Ab consequatur ipsum quidem reprehenderit similique. Animi dolorem eius ex.'},
        {id: 3, senderClass: 'me', message: 'A ad cum cumque eaque.'},
        {id: 4, senderClass: 'me', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, at corporis cum cumque.'},
        {id: 5, senderClass: 'interlocutor', message: 'Asperiores at aut cupiditate!'},
    ],
    newMessageText: 'Message text...'
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                senderClass: 'me',
                message: state.newMessageText
            };
            let stateCopy = {...state};
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;