import { observable } from 'mobx'
import GenericFormStore from './../common/generic-form.store'

class LoginStore extends GenericFormStore {
  validationRules = {
    'email': 'required|email',
    'password': 'required',
  };

  @observablew
  form = {
    fields: {
      email: {
        value: '',
        error: null,
      },
      password: {
        value: '',
        error: null,
      },
    },
    meta: {
      isValid: true,
      error: null,
    },
  }
}

export default LoginStore
