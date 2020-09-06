import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.dialogs.map((dialog) => <><img src={dialog.photo}></img><DialogItem name={dialog.name} id={dialog.id} /></>);
    let messagesElements = props.dialogPage.messages.map(m => <Message message={m.message} />);


    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} value={props.dialogPage.newMessageText} />
                </div>
                <div>
                    <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;