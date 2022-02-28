import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearAuthState, editUser } from '../actions/auth';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      email: '',
      password: '',
      confirmPassword: '',
      isEditMode: false,
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };

  handleSave = () => {
    const { name, password, confirmPassword } = this.state;
    const { user } = this.props.auth;

    this.props.dispatch(editUser(name, password, confirmPassword, user._id));
  };

  render() {
    const { user, error } = this.props.auth;
    const { isEditMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://img.icons8.com/external-linector-lineal-color-linector/344/external-avatar-man-avatar-linector-lineal-color-linector-1.png"
            alt="user-dp"
          />
        </div>

        {error && <div className="alert error-dailog">{error}</div>}
        {error === false && (
          <div className="alert success-dailog">
            Successfully updated profile
          </div>
        )}

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          {isEditMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-value">{user.name}</div>
          )}
        </div>

        {isEditMode && (
          <div className="field">
            <div className="field-label">New Password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {isEditMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              type="password"
              onChange={(e) =>
                this.handleChange('confirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn grp">
          {isEditMode ? (
            <button className="button save-btn" onClick={this.handleSave}>
              Save
            </button>
          ) : (
            <button
              className="button edit-btn"
              onClick={(e) => this.handleChange('isEditMode', true)}
            >
              Edit profile
            </button>
          )}
        </div>

        {isEditMode && (
          <div
            className="go-back"
            onClick={(e) => this.handleChange('isEditMode', false)}
          >
            Go Back
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Settings);
