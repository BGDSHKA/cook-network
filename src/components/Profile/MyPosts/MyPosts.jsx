import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Posts';

const MyPosts = (props) => {

  let postsElements = props.posts
    .map(p => <Post message={p.message} likes={p.likesCount} />);

  let addNewPost = (values) => {
    props.addPost(values.newMessageBody);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <ProfileAddPostFormRedux onSubmit={addNewPost}/>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  )
}

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const ProfileAddPostFormRedux = reduxForm({ form: "PostForm" })(AddPostForm)

export default MyPosts;