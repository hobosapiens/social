import {usersAPI} from "../api/api";

const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOGS = 'SET_DIALOGS';

let initialState = {
    dialogs: [],
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
                senderClass: 'me',
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        case SET_DIALOGS: {
            return {
                ...state,
                dialogs: [...action.dialogs]
            };
        }
        default:
            return state;
    }
};

export const addMessage = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs });
export const requestDialogs = () => async (dispatch) => {

    let response = await usersAPI.getFriends();
    dispatch(setDialogs(response.items));

};

export default dialogsReducer;