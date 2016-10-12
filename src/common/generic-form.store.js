import {action, toJS} from 'mobx'
var Validator = require('validatorjs');

class FormStore {

  constructor() {
    this.validationRules = this.getFlattenedValues('rule');
  }

  getFlattenedValues = (valueKey) => {
    let data = {};
    let form = toJS(this.form).fields;
    Object.keys(form).map(key => {
      data[key] = form[key][valueKey]
    });
    return data
  };

  @action
  onFieldChange = (field, value) => {
    console.log(field, value);
    this.form.fields[field].value = value;
    var validation = new Validator(this.getFlattenedValues('value'), this.validationRules);
    this.form.meta.isValid = validation.passes();
    this.form.fields[field].error = validation.errors.first(field)
  };

  @action
  setError = (errMsg) => {
    this.form.meta.error = errMsg
  }
}

export default FormStore
