import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_POSTS = 'SET_POSTS';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state,
                posts: [...action.posts]
            };
        }
        case ADD_POST: {
            let newPost = {
                post: action.postText
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: [state.posts.filter(p => p.id !== action.postId)]
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};

export const setPosts = (posts) => ({ type: SET_POSTS, posts });

export const requestPosts = () => async (dispatch) => {

    let response = await profileAPI.getPosts();
    dispatch(setPosts(response.posts));

};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);

    dispatch(setUserProfile(response));
};

export const setStatus = (status) => ({ type: SET_STATUS, status});
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch(error) {
        console.log(error);
    }

};

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);

    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let key = response.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
        dispatch(stopSubmit('edit-profile', {
            contacts: {[key]: response.messages[0]},
        }));
        return Promise.reject(response.messages[0]);
    }
};


export const addPost = (postText) => ({ type: ADD_POST, postText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export default profileReducer;