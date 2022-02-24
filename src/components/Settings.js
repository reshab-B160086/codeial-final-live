import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      isEditMode: false,
    };
  }
  render() {
    const { user } = this.props.auth;
    const { isEditMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://img.icons8.com/external-linector-lineal-color-linector/344/external-avatar-man-avatar-linector-lineal-color-linector-1.png"
            alt="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          {isEditMode ? (
            <input
              type="text"
              onChange={() => handleChange()}
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
              onChange={() => handleChange()}
              value={this.state.password}
            />
          </div>
        )}

        {isEditMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              type="password"
              onChange={() => handleChange()}
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn grp">
          {isEditMode ? (
            <button className="button save-btn">Save</button>
          ) : (
            <button className="button edit-btn">Edit profile</button>
          )}
        </div>

        {isEditMode && <div className="go-back">Go Back</div>}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connnect(mapStateToProps)(Settings);
