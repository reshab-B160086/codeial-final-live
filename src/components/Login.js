import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLoginButtonClick = (e) => {
    e.preventDefault();
    // console.log(this.emailInputRef);
    // console.log(this.passwordInputRef);
    console.log(this.state);
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(login(email, password));
    }
  };
  render() {
    console.log(this.props);
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header />">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            //ref={this.emailInputRef}
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            //ref={this.passwordInputRef}
            onChange={this.handlePasswordChange}
            value={this.state.value}
          />
        </div>
        <div className="field">
          <button onClick={this.handleLoginButtonClick} disabled={inProgress}>
            Log in
          </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
