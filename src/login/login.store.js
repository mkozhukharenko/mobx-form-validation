import { observable } from 'mobx'
import GenericFormStore from './../common/generic-form.store'

class LoginStore extends GenericFormStore {
  @observable
  form = {
    fields: {
      email: {
        value: '',
        error: null,
        rule: 'required|email'
      },
      password: {
        value: '',
        error: null,
        rule: 'required'
      },
    },
    meta: {
      isValid: true,
      error: null,
    },
  }
}

export default LoginStore
