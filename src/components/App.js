import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostList, Navbar } from '.';

const Login = () => {
  return <div>Login</div>;
};
const Signup = () => {
  return <div>SignUp</div>;
};
const Home = () => {
  return <div>Home</div>;
};

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    console.log('posts');
    return (
      <Router>
        <div>
          <Navbar />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <Routes>
            {/* <PostList posts={posts} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
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
