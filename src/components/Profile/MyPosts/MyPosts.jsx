import React from 'react';
import ProfileAddPostFormRedux from './AddPostForm/AddPostForm';
import s from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = React.memo(props => {

  let postsElements = props.posts
    .map(p => <Post message={p.message} likes={p.likesCount} />);

  let addNewPost = (values) => {
    props.addPost(values.newMessageBody);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <ProfileAddPostFormRedux onSubmit={addNewPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  )
});

export default MyPosts;