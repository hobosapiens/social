import {followAPI, usersAPI} from "../api/api";

const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
    friendList: []
};

const navbarReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FRIENDS:
            // копируем старый стейт и склеиваем копию старых users с теми, которые пришли в action.users
            // return { ...state, users: [...state.users, ...action.users]};
            // копируем старый стейт и перетераем users на тех которые пришли в action.users
            return { ...state, friendList: [ ...action.friendList ]};
        default:
            return state;
    }
};

export const setFriends = (friendList) => ({ type: SET_FRIENDS, friendList });

export const requestFriends = () => async (dispatch) => {

    let response = await usersAPI.getFriends();
    dispatch(setFriends(response.items));

};

export default navbarReducer;