import React from 'react';
import s from './Navbar.module.css';
import Friendlist from './Friendlist';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/feed" activeClassName={s.active}>Feed</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.active}>Find users</NavLink>
      </div>
      <div className={s.friendlist}>
        <Friendlist state={props.state}/>
      </div>
    </nav>
  )
}

export default Navbar;