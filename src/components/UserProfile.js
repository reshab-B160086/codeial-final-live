import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
import profile from '../reducers/profile';

class UserProfile extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    if (match.params.userId) {
      // dispatch action to fetch user
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  render() {
    const {
      match: { params },
      profile,
    } = this.props;
    console.log('props', this.props);
    console.log('params', params);
    const user = profile.user;

    if (profile.inProgress) {
      return <h1>Loading !!!</h1>;
    }

    return (
      <div className="settings">
        <div className="img-container">
          <img src="" alt="user-dp" />
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-value">{user.name}</div>
        </div>
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>
        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profile }) {
  return {
    profile,
  };
}

export default connect(mapStateToProps)(UserProfile);
