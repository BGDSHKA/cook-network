const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {

            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'Test message', likesCount: 13 },
                { id: 3, message: 'Testtestetata', likesCount: 11 },
                { id: 4, message: 'asdasdasdasd', likesCount: 144 },
                { id: 5, message: 'fdsfsdf', likesCount: 15 },
                { id: 6, message: '123123123123', likesCount: 15 },
            ],
            newPostText: ''
        },
        dialogPage: {
            messages: [
                { id: 1, message: 'Hi', },
                { id: 2, message: 'Blablabla', },
                { id: 3, message: 'Testtestetata', },
                { id: 4, message: 'asdasdasdasd', },
                { id: 5, message: 'fdsfsdf', },
                { id: 6, message: '123123123123', },
            ],

            dialogs: [
                { id: 1, name: 'Kirill', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
                { id: 2, name: 'Pyotr', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
                { id: 3, name: 'Anna', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
                { id: 4, name: 'Larry', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
                { id: 5, name: 'Egor', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
                { id: 6, name: 'Sanjar', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
            ],
            newMessageText: ''

        },
        sidebar: {
            friends: [
                { id: 1, name: 'Egor Dolganov', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
                { id: 2, name: 'Pyotr Furniture', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
                { id: 3, name: 'Anna Petrovna', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
                { id: 4, name: 'Test Test', photo: 'https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg' },
            ]
        }

    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer pattern
    },
    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 7,
                message: this._state.dialogPage.newMessageText,
            }
    
            this._state.dialogPage.messages.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

window.store = store;
export default store;
//STORE - OOP