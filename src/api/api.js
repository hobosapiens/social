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
    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data;
            })
    },
    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append("image", photoFile);
        return instance.put('profile/photo/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data;
        })
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    saveProfile(profile){
        return instance.put('profile/', profile).then(response => {
            return response.data;
        })
    }
};

export const followAPI = {
    follow(userId) {
        return instance.post('follow/' + userId)
            .then(response => {
                return response;
            })
    },
    unfollow(userId) {
        return instance.delete('follow/' + userId)
            .then(response => {
                return response;
            })
    }
};

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
            .then(response => {
                return response.data;
            })
    },
    logIn(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', { email, password, rememberMe, captcha })
    },
    logOut() {
        return instance.delete('auth/login')
    },
    captchaUrl() {
        return instance.get('security/get-captcha-url')
    }
};