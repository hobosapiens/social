import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGINING_USER = 'SET_LOGINING_USER';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    loginingUser: {
        email: '',
        password: '',
        rememberMe: false
    }
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                    if (response.resultCode === 0) {
                        let {id, email, login} = response.data;
                        dispatch(setAuthUserData(id, email, login));
                    }
                }
            );

    }
};
export const logInUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.logIn (email, password, rememberMe)
            .then(response => {
                    console.log(response)
                }
            );

    }
};
export const logOutUser = () => {
    return (dispatch) => {
        authAPI.logOut ()
            .then(response => {
                    console.log(response)
                }
            );

    }
};
export default authReducer;