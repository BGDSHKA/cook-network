const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            }

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
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

export default dialogReducer;