import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "319472cb-7ff2-4849-ba8f-953a7c7551d1",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },

  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },

  getProfile(id) {
    console.warn("Obsolete method. Please profileAPI object.");
    return profileAPI.getProfile(id);
  },
  
  saveProfile(profile) {
    return instance.put(`profile`, profile).then(response=> response.data)
  }
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data);
  },

  getStatus(id) {
    return instance
      .get(`profile/status/${id}`)
      .then((response) => response.data);
  },

  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status})
  },
  
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }

};

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data);
  },

  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha}).then((response) => response.data)
  },
  
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data)
  }
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
};

