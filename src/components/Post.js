import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { addLike, createComment } from '../actions/posts';
import Comment from './Comment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleAddComment = (e) => {
    const { post } = this.props;
    const { comment } = this.state;

    if (e.key == 'Enter') {
      this.props.dispatch(createComment(comment, post._id));

      this.setState({
        comment: '',
      });
    }
  };

  handleOnCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handlePostLike = () => {
    const { post, user } = this.props;
    this.props.dispatch(addLike(post._id, 'Post', user._id));
  };

  render() {
    const { post, user } = this.props;
    const { comment } = this.state;
    const isPostLikedByUser = post.likes.includes(user._id);
    return (
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
            <button className="post-like no-btn" onClick={this.handlePostLike}>
              {isPostLikedByUser ? (
                <img src="" alt="like-post" />
              ) : (
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2961/premium/2961957.png?token=exp=1644946158~hmac=8dea80a6810aaefb7671a53f35dba8b6"
                  alt="likes-icon"
                />
              )}

              <span>{post.likes.length}</span>
            </button>
            <div className="post-comment">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
                alt="comment-icon"
              />
              <span>{post.comments.length}</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              placeholder="Start typing a comment"
              onChange={this.handleOnCommentChange}
              onKeyPress={this.handleAddComment}
              value={comment}
            />
          </div>
          <div className="post-comments-list">
            {post.comments.map((comment) => {
              <Comment comment={comment} key={comment._id} postId={post._id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user,
  };
}

export default connect(mapStateToProps)(Post);
