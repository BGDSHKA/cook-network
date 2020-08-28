import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => <><img src={dialog.photo}></img><DialogItem name={dialog.name} id={dialog.id} /></>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
     props.dispatch(addMessageActionCreator());
    }
  
    let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            <div>
        <textarea ref={newMessageElement} onChange={onMessageChange} value={props.state.newMessageText} />
        </div>
        <div>
        <button onClick={addMessage}>Send</button>
        </div>
            </div>
            
        </div>
    )
}

export default Dialogs;