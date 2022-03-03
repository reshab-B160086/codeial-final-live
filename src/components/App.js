import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostList, Navbar, Home, Page404, Login, Signup, Settings } from '.';
import jwt_decode from 'jwt-decode';
import { authenticateUser } from '../actions/auth';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import UserProfile from './UserProfile';
import { fetchUserFriend } from '../actions/friends';

const PrivateRoute = (privateRouteProps) => {
  const { isLoggedIn, path, component: Component } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        console.log(props);
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signup',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = getAuthTokenFromLocalStorage();

    if (token) {
      const user = jwt_decode(token);
      console.log('user', user);
      this.props.dispatch(
        authenticateUser({
          email: user.email,
          _id: user._id,
          name: user.name,
        })
      );
      this.props.dispatch(fetchUserFriend());
    }
  }

  User = () => {
    return <div>USER</div>;
  };

  render() {
    const { posts, auth, friends } = this.props;

    console.log('posts');
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostList posts={posts} /> */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return (
                  <Home
                    {...props}
                    posts={posts}
                    friends={friends}
                    isLoggedIn={auth.isLoggedIn}
                  />
                );
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute
              path="/settings"
              component={Settings}
              isLoggedIn={auth.isLoggedIn}
            />
            <PrivateRoute
              path="/user/:userId"
              component={UserProfile}
              isLoggedIn={auth.isLoggedIn}
            />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

App.prototypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
