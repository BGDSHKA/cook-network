import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Kirill', },
        { id: 2, name: 'Pyotr', },
        { id: 3, name: 'Anna', },
        { id: 4, name: 'Larry', },
        { id: 5, name: 'Egor', },
        { id: 6, name: 'Sanjar', },
    ];

    let messages = [
        { id: 1, message: 'Hi', },
        { id: 2, message: 'Blablabla', },
        { id: 3, message: 'Testtestetata', },
        { id: 4, message: 'asdasdasdasd', },
        { id: 5, message: 'fdsfsdf', },
        { id: 6, message: '123123123123', },
    ];

    let dialogsElements = dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = messages
        .map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;