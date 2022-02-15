import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostList } from '.';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    console.log('posts');
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <img
              src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
              alt="search-icon"
            />
            <input placeholder="search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1644950203~hmac=0875a6207b627a88c1e5ab8153a23c35"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1644950203~hmac=0875a6207b627a88c1e5ab8153a23c35"
                    alt="user-dp"
                  />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1644950203~hmac=0875a6207b627a88c1e5ab8153a23c35"
                alt="user-dp"
              />
              <span>John Doe</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.prototypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
