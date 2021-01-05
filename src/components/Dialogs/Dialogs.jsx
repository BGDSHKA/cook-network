import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
    let dialogsElements = props.dialogPage.dialogs.map((dialog) => <><img src={dialog.photo}></img><DialogItem key={dialog.id} name={dialog.name} id={dialog.id} /></>);
    let messagesElements = props.dialogPage.messages.map(m => <Message key={m.id} message={m.message} />);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>

    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;