import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cf731e51-f342-4292-b062-323d3b774f6a",
      }
});

export const usersAPI = {

      getUsers(currentPage, pageSize) {
        return instance
          .get(`users?page=${currentPage}&count=${pageSize}`)
          .then((response) => response.data);
      },
      
        unfollow(id) {
        return instance
          .delete(`follow/${id}`)
          .then((response) => response.data);
      },
      
        follow(id) {
        return instance
          .post(`follow/${id}`)
          .then((response) => response.data);
      },

      getProfile(id) {
        return instance
            .get(`profile/${id}`)
            .then(response => response.data);
      },
      
      getStatus(id) {
        return instance
        .get(`profile/status/${id}`)
        .then(response => response.data);
      }
      
}

export const authAPI = {

  me() {
    return instance
      .get(`auth/me`)
      .then((response) => response.data);
  },

}
