const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
};

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.newMessageText}]
            };
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: newMessageBody
    }
}

export default dialogReducer;