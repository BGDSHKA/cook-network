import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = () => {
    return (
        <div>
        My posts
        <div>
<textarea></textarea>
          <button>Add post</button>
          
          </div>
          <div className={s.posts}>
            <Post message='Hi, how are you?' likes='15'/>
            <Post message='Test message' likes='20'/>
            <Post />
            <Post />
          </div>
      </div>
    
    )
}

export default MyPosts;