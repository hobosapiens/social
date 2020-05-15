import {authAPI} from "../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaURL: action.captchaURL
            };
        default:
            return state;
    }
};

export const setCaptchaURL = (captchaURL) => ({ type: SET_CAPTCHA_URL, captchaURL });

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});
export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.authMe()
            .then(response => {
                    if (response.resultCode === 0) {
                        let {id, email, login} = response.data;
                        dispatch(setAuthUserData(id, email, login, true));
                    }
                }
            );
    }
};
export const logInUser = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.logIn(email, password, rememberMe, captcha)
        .then(response => {
                let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                    dispatch(setCaptchaURL(null));
                } else if (response.data.resultCode === 10) {
                    dispatch(stopSubmit("login", {_error: errorMessage}));
                    authAPI.getCaptchaUrl()
                        .then(response => {
                            dispatch(setCaptchaURL(response.data.url));
                        });
                } else {
                    dispatch(stopSubmit("login", {_error: errorMessage}));
                }
            }
        );
};
export const logOutUser = () => (dispatch) => {
    authAPI.logOut()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            }
        );
};
export default authReducer;