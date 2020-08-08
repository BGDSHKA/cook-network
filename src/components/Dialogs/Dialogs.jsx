import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Kirill
                </div>
                <div className={s.dialog}>
                    Pyotr
                </div>
                <div className={s.dialog}>
                    Anna
                </div>
                <div className={s.dialog}>
                    Larry
                </div>
                <div className={s.dialog}>
                    Egor
                </div>
                <div className={s.dialog}>
                    Max
                </div>
                <div className={s.dialog}>
                    Sanjar
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