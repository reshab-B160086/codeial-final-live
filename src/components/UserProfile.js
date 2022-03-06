import React from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../actions/profile';
import profile from '../reducers/profile';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      success: null,
      error: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (match.params.userId) {
      // dispatch action to fetch user
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  checkIfUserIsAFriend = () => {
    const { match, friends } = this.props;
    const userId = match.params.userId;

    const index = friends.map((friend) => friend.tu_user._id).indexOf(userId);

    if (index !== -1) {
      return true;
    }

    return false;
  };

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

    const isUserAFriend = this.checkIfUserIsAFriend();

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
          {!isUserAFriend ? (
            <button className="button save-btn">Add Friend</button>
          ) : (
            <button className="button save-btn">Remove Friend</button>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profile, friends }) {
  return {
    profile,
    friends,
  };
}

export default connect(mapStateToProps)(UserProfile);
