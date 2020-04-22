import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '1170b118-702c-4511-af42-156a5dd648b2'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
};

export const profileAPI = {
    getProfile(userId = 7298) {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data;
            })
    },
    uploadPhoto(formData) {
        return instance.post('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data;
            })
    },
    addStatus(statusText) {
        return instance.put('profile/status', {
            "status": statusText
        }).then(response => {
            return response.data;
        })
    },
    addInfo(infoText) {
        return instance.put('profile/', infoText).then(response => {
            return response.data;
        })
    }
};

export const followAPI = {
    follow(userId) {
        return instance.post('follow/' + userId)
            .then(response => {
                return response.data;
            })
    },
    unfollow(userId) {
        return instance.delete('follow/' + userId)
            .then(response => {
                return response.data;
            })
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => {
                return response.data;
            })
    }
};