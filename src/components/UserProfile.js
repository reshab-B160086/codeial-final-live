import React from 'react';

class UserProfile extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    if (match.params.userId) {
      // dispatch action to fetch user
    }
  }

  render() {
    const {
      match: { params },
    } = this.props;
    console.log('props', this.props);
    console.log('params', params);

    return (
      <div className="settings">
        <div className="img-container">
          <img src="" alt="user-dp" />
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">Some Name</div>
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">test@test.com</div>
        </div>
        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

export default UserProfile;
