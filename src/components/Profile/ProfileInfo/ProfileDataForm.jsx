import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormControl } from '../../../common/FormsControls/FormsControl';
import s from './ProfileInfo.module.css';
import style from '../../../common/FormsControls/FormsControl.module.css';

const Textarea = FormControl('textarea');

const ProfileDataForm = ({ profile, handleSubmit, error }) => {

    return <form onSubmit={handleSubmit}>
        <div><button>save</button></div>
        <div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <b>My full name:</b> <br></br>
            <Field name="fullName" component="input" placeholder="Enter your full name" />
        </div>
        <div>
            <label><Field name="lookingForAJob" component="input" type="checkbox" value={true} /> Looking for a job</label>
        </div>
        <div>
            <b>VK profile:</b> <br></br>
            <Field name="vk" component="input" placeholder="Enter your VK profile" />
        </div>
        <div>
            <b>My professional skills:</b>
            <Field name="lookingForAJobDescription" component={Textarea} placeholder="Enter professional skills" />
        </div>
        <div>
            <b>About me:</b>
            <Field name="aboutMe" component={Textarea} placeholder="Enter information about you" />
        </div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}</b> <br></br>
                <Field name={"contacts." + key} component="input" placeholder={key} />
            </div>
        })}</div>
    </form>
}



export default reduxForm({ form: "edit-profile" })(ProfileDataForm)
