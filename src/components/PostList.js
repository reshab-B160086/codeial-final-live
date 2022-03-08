import React, { Component } from 'react';
import PropTypes from 'prop-types';
import posts from '../reducers/posts';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CreatePost } from '.';
import Post from './Post';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    );
  }
}

PostList.prototypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
