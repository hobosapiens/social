const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                senderClass: 'me',
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
};

export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export default dialogsReducer;