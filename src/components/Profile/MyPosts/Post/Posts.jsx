import React from 'react';
import s from './Posts.module.css';

const Post = (props) => {
    return (
        
        <div className='posts'>
          <div className={s.item}>
            <img src='https://girlday.ru/upload/iblock/c81/c8158add497d90cbce3e21968cd5d731.jpg'></img>
            {props.message}
            <div>
            <span>{props.likes} Like</span>
            </div>
          </div>
      </div>
    
    
    )
}

export default Post;