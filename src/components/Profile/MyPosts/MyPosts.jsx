import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = () => {
  
  let posts = [
    { id: 1, message: 'Hi, how are you?',likesCount: 15},
    { id: 2, message: 'Test message',likesCount: 13 },
    { id: 3, message: 'Testtestetata',likesCount: 11 },
    { id: 4, message: 'asdasdasdasd',likesCount: 144 },
    { id: 5, message: 'fdsfsdf',likesCount: 15 },
    { id: 6, message: '123123123123',likesCount: 15 },
];

let postsElements = posts
.map (p => <Post message={p.message} likes={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div> 
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
       {postsElements}
      </div>
    </div>

  )
}

export default MyPosts;