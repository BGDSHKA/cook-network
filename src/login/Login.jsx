import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormControl } from '../common/FormsControls/FormsControl';
import { login } from '../redux/auth-reducer';
import { required } from '../utils/validators/validators';

const Input = FormControl('input');


const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData);

    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[required]} placeholder={"Login"} name={"login"} component={Input}/>
                </div>
                <div>
                    <Field validate={[required]} placeholder={"Password"} name={"password"} component={Input} />
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)


export default Login
