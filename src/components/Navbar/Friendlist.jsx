import React from 'react';
import s from './Navbar.module.css';
import { NavLink, BrowserRouter } from 'react-router-dom';

const Friendlist = (prop) => {
  return (
    <nav className={s.nav}>
      <h3>Best chiefs</h3>
      <div className={s.item}>
      <img src='https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg'></img>
      <NavLink to='/chief/2' activeClassName={s.active}> Egor Dolganov </NavLink>
      <img src='https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg'></img>
      <NavLink to='/chief/3' activeClassName={s.active}> Pyotr Furniture </NavLink>
      <img src='https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg'></img>
      <NavLink to='/chief/4' activeClassName={s.active}> Ann Petrovna </NavLink>
      <img src='https://www.sciencedebate2008.com/wp-content/uploads/chel.jpg'></img>
      <NavLink to='/chief/5' activeClassName={s.active}> Test text </NavLink>
     </div>
    </nav>
  )
}

export default Friendlist;