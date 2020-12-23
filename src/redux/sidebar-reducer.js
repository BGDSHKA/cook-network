import userPhoto from '../assets/images/nophoto.png';

let initialState = {
    friends: [
        { id: 1, name: 'Egor Dolganov', photo: userPhoto },
        { id: 2, name: 'Pyotr Furniture', photo: userPhoto },
        { id: 3, name: 'Anna Petrovna', photo: userPhoto },
        { id: 4, name: 'Test Test', photo: userPhoto },
    ]
};

const sidebarReducer = (state = initialState, action) => {
    
    return state;
}

export default sidebarReducer;