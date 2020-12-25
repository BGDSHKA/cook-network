import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://c7.hotpng.com/preview/770/632/917/food-network-cooking-channel-television-recipe-food-logo.jpg'></img>
        <div className={s.loginBlock}>
            {props.isAuth 
            ? props.login
            : <NavLink to={'/login'}>Login</NavLink> }
            
        </div>
        </header>
    )
}

export default Header;