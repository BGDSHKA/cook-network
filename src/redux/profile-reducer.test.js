import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "Test message", likesCount: 13 },
      { id: 3, message: "Testtestetata", likesCount: 11 },
      { id: 4, message: "asdasdasdasd", likesCount: 144 },
      { id: 5, message: "fdsfsdf", likesCount: 15 },
      { id: 6, message: "123123123123", likesCount: 15 },
    ]
  };

test('length of posts should be incremented', () => {
  //1. test data
  let action = addPostActionCreator("test-react");
  
  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(7);
});

test('message of new post should be correct', () => {
  //1. test data
  let action = addPostActionCreator("test-react");

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts[6].message).toBe("test-react");
});

test('after deleting length of messages should be decrement', () => {
  //1. test data
  let action = deletePost(1);

  //2. action
  let newState = profileReducer(state, action)

  //3. expectation
  expect(newState.posts.length).toBe(5);
});


