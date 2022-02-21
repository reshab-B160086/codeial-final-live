import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
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

  handleConfurmPasswordChange = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSignupButtonClick = (e) => {
    e.preventDefault();
    // console.log(this.emailInputRef);
    // console.log(this.passwordInputRef);
    console.log(this.state);
    const { email, password, confirmPassword, name } = this.state;
    if (email && password && name && confirmPassword) {
      this.props.dispatch(signup(email, password, confirmPassword, name));
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
          <input
            type="password"
            placeholder="Confirm Password"
            required
            //ref={this.passwordInputRef}
            onChange={this.handleConfurmPasswordChange}
            value={this.state.value}
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            required
            //ref={this.passwordInputRef}
            onChange={this.handleNameChange}
            value={this.state.value}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button
              onClick={this.handleSignupButtonClick}
              disabled={inProgress}
            >
              Signing up..
            </button>
          ) : (
            <button
              onClick={this.handleSignupButtonClick}
              disabled={inProgress}
            >
              Sign up
            </button>
          )}
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
