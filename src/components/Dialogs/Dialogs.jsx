import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                  <NavLink to="/dialogs/1">Kirill </NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/2">Pyotr</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/3">Anna</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/4">Larry</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/5">Egor</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/6">Max</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to="/dialogs/7">Sanjar</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi!</div>
                <div className={s.dialog}>Hey bro, how are u?</div>
                <div className={s.dialog}>13:33</div>
            </div>
        </div>
    )
}

export default Dialogs;