import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoginForm from './login/login-form.component';
import LoginStore from './login/login-store';

@inject(() => ({
  store: new LoginStore(),
}))
@observer
class App extends Component {
  render() {
    let {store} = this.props;
    return (
      <div className="app-container">
        <LoginForm onSubmit={this.onSubmitForm}
                   form={store.form}
                   onChange={store.onFieldChange}/>
      </div>
    );
  }

  onSubmitForm = (arg) => {
    console.log('submitted!', arg)
  }
}

export default App;
