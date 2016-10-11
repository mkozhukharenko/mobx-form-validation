import React, { PropTypes } from 'react';
import classNames from 'classnames'

let getFormInputClasses = ({valid, error}) => {
  return classNames('form-input', {
    'form-input--error': !!error,
  })
};

let FormInput = (props) => {
  let {type, error, onChange} = props;
  type = type || 'text';
  return (
    <span className={getFormInputClasses(props)}>
      <input {...props}
             className="form-input__field"
             type={type}
             onChange={(e) => onChange(e.target.name, e.target.value)}/>
      {error ? <div className="form-input__error">
        {error}
      </div> : null}
    </span>
  )
};
FormInput.PropTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'password']),
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput
