import {dialogsAPI, usersAPI} from "../api/api";

const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_DIALOGS = 'SET_DIALOGS';

let initialState = {
    dialogs: [],
    messages: []
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
        case SET_MESSAGES: {
            return {
                ...state,
                messages: [...action.messages]
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

export const setMessages = (messages) => ({ type: SET_MESSAGES, messages });
export const requestMessages = () => async (dispatch) => {

    let response = await dialogsAPI.getDialogs();
    dispatch(setMessages(response.messages));
};

export const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs });

export const requestDialogs = () => async (dispatch) => {

    let response = await usersAPI.getFriends();
    dispatch(setDialogs(response.items));

};

export default dialogsReducer;
