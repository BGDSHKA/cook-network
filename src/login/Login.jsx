import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { FormControl } from '../common/FormsControls/FormsControl';
import { login } from '../redux/auth-reducer';
import { required } from '../utils/validators/validators';
import style from "./../common/FormsControls/FormsControl.module.css"

const Input = FormControl('input');

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Field validate={[required]}
                        placeholder={"Email"}
                        name={"email"}
                        component={Input} />
                </div>
                <div>
                    <Field validate={[required]}
                        placeholder={"Password"}
                        name={"password"}
                        component={Input}
                        type={"password"} />
                </div>
                <div>
                    <Field type={"checkbox"} 
                    name={"rememberMe"} 
                    component={Input} /> remember me
                </div>
                {captchaUrl && <img src={captchaUrl} alt="" />}
                
                {captchaUrl && <div>
                    <Field
                    validate={[required]}
                    placeholder={"Enter CAPTCHA symbols"}
                    name="captcha"
                    component={Input} /> 
                </div>}

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)
