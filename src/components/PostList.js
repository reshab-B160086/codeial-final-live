import React, { Component } from 'react';
import PropTypes from 'prop-types';
import posts from '../reducers/posts';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { CreatePost } from '.';

class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        <CreatePost />
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <Link to={`/user/${post.user._id}`}>
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1645030945~hmac=48f406a9ee89734fe9d83123daf59fef"
                    alt="user-pic"
                  />
                </Link>
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a minute ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961957.png?token=exp=1644946158~hmac=8dea80a6810aaefb7671a53f35dba8b6"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>
                <div className="post-comment">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                    alt="comment-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing a comment" />
              </div>
              <div className="post-comments-list">
                <div className="post-comments-item">
                  <div className="post-comment-header">
                    <span className="post-comment-author">Bill</span>
                    <span className="post-comment-time">a minute ago</span>
                    <span className="post-comment-likes">22</span>
                    <span></span>
                  </div>
                  <div className="post-comment-content">Random comment</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostList.prototypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
