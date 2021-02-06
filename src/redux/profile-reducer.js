import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "Test message", likesCount: 13 },
    { id: 3, message: "Testtestetata", likesCount: 11 },
    { id: 4, message: "asdasdasdasd", likesCount: 144 },
    { id: 5, message: "fdsfsdf", likesCount: 15 },
    { id: 6, message: "123123123123", likesCount: 15 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: 10, message: action.newPostText, likesCount: 0 },
        ],
        newPostText: "",
      };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(p => p.id != action.postId)
        }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
      case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: {...state.profile, photos: action.photos} };
    default:
      return state;
  }
};

export const addPostActionCreator = (newMessageBody) => ({ type: ADD_POST, newPostText: newMessageBody });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
      dispatch(setUserProfile(data));
  };

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
      dispatch(setStatus(data));
  };

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
  };

  export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
  };

export default profileReducer;
