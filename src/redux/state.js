let rerenderEntireTree = () => {
    console.log('State changed');
}


let state = {
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

}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogPage.newMessageText,
    }

    state.dialogPage.messages.push(newMessage);
    state.dialogPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //observer pattern
}

export default state;