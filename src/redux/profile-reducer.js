const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'Test message', likesCount: 13 },
        { id: 3, message: 'Testtestetata', likesCount: 11 },
        { id: 4, message: 'asdasdasdasd', likesCount: 144 },
        { id: 5, message: 'fdsfsdf', likesCount: 15 },
        { id: 6, message: '123123123123', likesCount: 15 },
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 10, message: state.newPostText, likesCount: 0}],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
           case SET_USER_PROFILE:
              return {...state, profile: action.profile};
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT,
newText: text
})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;