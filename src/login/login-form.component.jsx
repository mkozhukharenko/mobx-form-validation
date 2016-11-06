import React, { Component, PropTypes } from 'react';
import FormInput from './../common/form-input'
import { observer } from 'mobx-react'
import './login-form.component.css'

@observer
class LoginForm extends Component {
  render() {
    const {form, onChange} = this.props;
    const {fields, meta} = form;

    return (
      <form className="login-form" onSubmit={this.submit}>
        <h3 className="login-form__title">Login</h3>
        <div className="login-form__field">
          <FormInput type="email"
                 name="email"
                 value={fields.email.value}
                 error={fields.email.error}
                 onChange={onChange}
                 placeholder="Email"/>
        </div>
        <div className="login-form__field">
          <FormInput type="password"
                 name="password"
                 value={fields.password.value}
                 error={fields.password.error}
                 onChange={onChange}
                 placeholder="password"/>
        </div>

        {meta.error ? <div className="login-form__error">
          {meta.error}
        </div> : null}

        <input className="login-form__submit"
               disabled={!meta.isValid}
               value="Continue"
               type="submit"/>
      </form>
    )
  }
  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit()
  }
}
LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.shape({
    fields: PropTypes.objectOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.any,
    })).isRequired,
    meta: PropTypes.shape({
        isValid: PropTypes.bool.isRequired,
        error: PropTypes.any
    }).isRequired
  }).isRequired
};

export default LoginForm
