import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;
//STORE - OOP