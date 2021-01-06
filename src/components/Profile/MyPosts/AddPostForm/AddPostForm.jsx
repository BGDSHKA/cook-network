import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { FormControl } from '../../../../common/FormsControls/FormsControl';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';

const maxLength10 = maxLengthCreator(10);
const Textarea = FormControl('textarea');

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required, maxLength10]} component={Textarea} name="newMessageBody" placeholder="Enter your message" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: "ProfileAddNewPostForm" })(AddPostForm)
