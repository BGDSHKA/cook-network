import React from 'react';
import s from './Navbar.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem';

const Friendlist = (props) => {
  
  let friendsElements = props.state.friends.map((f) => <><img src={f.photo}></img><DialogItem key={f.id} name={f.name} id={f.id} /></>);
 
  return (
    <nav className={s.nav}>
      <h3>Best chiefs</h3>
      <div className={s.item}>
      {friendsElements}
     </div>
    </nav>
  )
}

export default Friendlist;