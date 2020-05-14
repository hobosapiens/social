import {authAPI} from "../api/api";

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
        authAPI.authMe()
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
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                    dispatch(setCaptchaURL(null));
                }
                if (response.data.resultCode === 10) {
                    authAPI.getCaptchaUrl()
                        .then(response => {
                            console.log(response.data.url);
                            dispatch(setCaptchaURL(response.data.url));
                        });
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