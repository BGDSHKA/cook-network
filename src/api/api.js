import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "cf731e51-f342-4292-b062-323d3b774f6a",
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

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe}).then((response) => response.data)
  },
  
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data)
  }
};
